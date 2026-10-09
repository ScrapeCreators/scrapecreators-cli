// External OAuth/provider responses are mocked; no production approval or accounts.
import { describe, it, expect, vi } from 'vitest';
import { EventEmitter } from 'node:events';
import { obtainProviderKey, verificationUrl, openBrowser } from '../src/guided-auth.js';

const code = {
  request_id: 'request_123456789012345678901234567890', device_code: 'private-device-secret',
  user_code: 'ABCDE-FGHIJ', interval: 3, expires_in: 600,
  verification_uri: 'https://app.scrapecreators.com/cli-auth?request_id=request_123456789012345678901234567890',
};
const githubCode = { ...code, verification_uri: 'https://github.com/login/device' };
function harness(responses, overrides = {}) {
  let time = 0;
  const waits = [], output = [], requests = [];
  const fetchImpl = vi.fn(async (url, options) => {
    requests.push([String(url), options]);
    const response = responses.shift();
    if (response instanceof Error) throw response;
    return new Response(JSON.stringify(response?.body ?? response), { status: response?.status ?? 200 });
  });
  return { waits, output, requests, fetchImpl, options: {
    fetchImpl, now: () => time, sleep: async (ms) => { waits.push(ms); time += ms; },
    write: (message) => output.push(message), openBrowser: vi.fn(async () => true), ...overrides,
  } };
}

describe('guided provider auth (mock providers)', () => {
  it.each(['google', 'microsoft'])('uses exact browser handoff contract for %s', async (provider) => {
    const h = harness([code, { error: 'authorization_pending' }, { error: 'slow_down' }, { api_key: 'private-api-key' }]);
    expect(await obtainProviderKey(provider, h.options)).toBe('private-api-key');
    expect(h.requests.map(([url]) => new URL(url).pathname)).toEqual(['/api/cli-auth/start', '/api/cli-auth/token', '/api/cli-auth/token', '/api/cli-auth/token']);
    expect(JSON.parse(h.requests[0][1].body)).toEqual({ provider });
    expect(JSON.parse(h.requests[1][1].body)).toEqual({ device_code: code.device_code });
    expect(h.waits).toEqual([3000, 3000, 8000]);
    expect(h.options.openBrowser).toHaveBeenCalledWith(code.verification_uri);
    expect(h.output.join('\n')).toContain(code.user_code);
    expect(h.output.join('\n')).not.toMatch(/private-device-secret|private-api-key/);
  });
  it('GitHub polls before profile and never exposes the access token', async () => {
    const h = harness([githubCode, { error: 'authorization_pending' }, { error: 'slow_down' }, { access_token: 'private-access-token' }, { api_key: 'legacy-revoked-uid' }, { api_key: 'private-api-key' }]);
    expect(await obtainProviderKey('github', h.options)).toBe('private-api-key');
    expect(h.requests.map(([url]) => new URL(url).pathname)).toEqual(['/v1/github/device/code', '/v1/github/device/token', '/v1/github/device/token', '/v1/github/device/token', '/v1/github/device/profile', '/api/cli-auth/github-key']);
    expect(JSON.parse(h.requests[0][1].body)).toEqual({});
    expect(h.requests.at(-1)[1].headers.authorization).toBe('Bearer private-access-token');
    expect(h.waits).toEqual([3000, 3000, 8000]);
    expect(h.output.join('\n')).not.toMatch(/private-device-secret|private-api-key|private-access-token/);
  });
  it.each(['access_denied', 'expired_token', 'invalid_grant'])('stops on %s without leaking response fields', async (error) => {
    const h = harness([githubCode, { status: 400, body: { error, error_description: 'private-access-token' } }]);
    await expect(obtainProviderKey('github', h.options)).rejects.toThrow(/denied|expired|invalid/i);
    expect(h.requests).toHaveLength(2);
    expect(h.output.join('\n')).not.toContain('private-access-token');
  });
  it('honors error envelopes even on HTTP 200', async () => {
    const h = harness([code, { error: 'expired_token' }]);
    await expect(obtainProviderKey('google', h.options)).rejects.toThrow(/expired/i);
  });
  it('stops before polling after the server expiry', async () => {
    const h = harness([{ ...code, expires_in: 2 }]);
    await expect(obtainProviderKey('google', h.options)).rejects.toThrow(/expired|timed out/i);
    expect(h.requests).toHaveLength(1);
  });
  it('has a finite overall deadline even if the provider reports a huge expiry', async () => {
    const h = harness([{ ...code, expires_in: 999999 }, { error: 'authorization_pending' }], { overallTimeoutMs: 4000 });
    await expect(obtainProviderKey('google', h.options)).rejects.toThrow(/expired|timed out/i);
    expect(h.requests).toHaveLength(2);
  });
  it('sanitizes network errors containing secrets', async () => {
    const h = harness([code, new Error('private-device-secret')]);
    await expect(obtainProviderKey('google', h.options)).rejects.toThrow('Could not reach');
  });
  it('limits hung HTTP requests', async () => {
    const fetchImpl = (_, { signal }) => new Promise((_, reject) => {
      signal.addEventListener('abort', () => reject(signal.reason), { once: true });
    });
    const h = harness([], { fetchImpl, requestTimeoutMs: 20 });
    await expect(obtainProviderKey('google', h.options)).rejects.toThrow(/timed out/i);
  });
  it('cancels pending HTTP requests', async () => {
    const controller = new AbortController();
    const fetchImpl = (_, { signal }) => new Promise((_, reject) => {
      signal.addEventListener('abort', () => reject(signal.reason), { once: true });
      controller.abort();
    });
    const h = harness([], { fetchImpl, signal: controller.signal });
    await expect(obtainProviderKey('google', h.options)).rejects.toThrow(/cancelled/i);
  });
  it('cancels during polling sleep, without another request', async () => {
    const controller = new AbortController();
    const h = harness([code], { signal: controller.signal, sleep: async () => controller.abort() });
    await expect(obtainProviderKey('google', h.options)).rejects.toThrow(/cancelled/i);
    expect(h.requests).toHaveLength(1);
  });
  it.each([{}, { ...code, interval: 0 }, { ...code, expires_in: -1 }, { ...code, user_code: '\u001b[31mBAD' }])('rejects malformed start response', async (body) => {
    const h = harness([body]);
    await expect(obtainProviderKey('google', h.options)).rejects.toThrow(/invalid/i);
    expect(h.options.openBrowser).not.toHaveBeenCalled();
  });
  it('missing GitHub profile key fails safely, with no token-copy instructions', async () => {
    const h = harness([githubCode, { access_token: 'private-access-token' }, {}]);
    await expect(obtainProviderKey('github', h.options)).rejects.toThrow(/usable API key/i);
  });
  it('browser launch failure leaves the fallback URL available and still polls', async () => {
    const h = harness([code, { api_key: 'private-api-key' }], { openBrowser: async () => { throw new Error('launcher failed'); } });
    expect(await obtainProviderKey('google', h.options)).toBe('private-api-key');
    expect(h.output.join('\n')).toContain(code.verification_uri);
  });
  it('supports --no-browser without launching a process', async () => {
    const h = harness([code, { api_key: 'private-api-key' }], { browser: false });
    await obtainProviderKey('google', h.options);
    expect(h.options.openBrowser).not.toHaveBeenCalled();
  });
});

describe('allowlisted browser launch', () => {
  it.each([
    'http://github.com/login/device', 'https://github.com.evil.test/login/device',
    'https://user@github.com/login/device', 'https://github.com/login/device?secret=foo',
    'https://github.com/login/device#secret', 'https://github.com:444/login/device',
  ])('rejects unsafe GitHub URI %s', (url) => {
    expect(() => verificationUrl('github', { ...githubCode, verification_uri: url })).toThrow(/invalid/i);
  });
  it.each([
    'https://evil.test/cli-auth?request_id=request_123456789012345678901234567890',
    code.verification_uri + '&device_code=secret', code.verification_uri + '#secret',
    'https://app.scrapecreators.com/cli-auth?request_id=other',
  ])('rejects untrusted handoff URI %s', (url) => {
    expect(() => verificationUrl('google', { ...code, verification_uri: url })).toThrow(/invalid/i);
  });
  it.each([
    ['linux', 'xdg-open', [code.verification_uri]],
    ['darwin', 'open', [code.verification_uri]],
    ['win32', 'rundll32.exe', ['url.dll,FileProtocolHandler', code.verification_uri]],
  ])('uses safe browser argv on %s without a shell', async (platform, command, args) => {
    const child = new EventEmitter();
    const spawnImpl = vi.fn(() => { queueMicrotask(() => child.emit('close', 0)); return child; });
    expect(await openBrowser(code.verification_uri, { platform, spawnImpl })).toBe(true);
    expect(spawnImpl).toHaveBeenCalledWith(command, args, expect.objectContaining({ shell: false, stdio: 'ignore' }));
  });
});
