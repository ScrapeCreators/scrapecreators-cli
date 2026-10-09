// Real CLI child processes and real local HTTP. OAuth/profile/credits are fake services, not production.
import { describe, it, expect } from 'vitest';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdtempSync, readFileSync, rmSync, statSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { once } from 'node:events';

const root = new URL('../', import.meta.url).pathname;
function command(args, env = {}, onOutput) {
  const child = spawn(process.execPath, ['--import', './test/fixtures/fake-provider-preload.js', 'bin/scrapecreators.js', ...args], {
    cwd: root, env: { ...process.env, SCRAPECREATORS_API_KEY: '', ...env }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  let stdout = '', stderr = '';
  child.stdout.on('data', (data) => { stdout += data; onOutput?.(child, String(data)); });
  child.stderr.on('data', (data) => { stderr += data; onOutput?.(child, String(data)); });
  return new Promise((resolve, reject) => {
    child.on('error', reject);
    child.on('close', (code, signal) => resolve({ code, signal, stdout, stderr }));
  });
}
async function fakeServer(run, { rejectedKey = false, missingKey = false } = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'sc-auth-cli-'));
  const requests = [];
  const server = createServer(async (req, res) => {
    let body = ''; for await (const chunk of req) body += chunk;
    requests.push({ path: req.url, method: req.method, body: body && JSON.parse(body), headers: req.headers });
    let data;
    if (req.url.endsWith('/code') || req.url.endsWith('/start')) data = {
      request_id: 'request_123456789012345678901234567890', device_code: 'private-device-secret', user_code: 'ABCDE-FGHIJ', interval: 1, expires_in: 600,
      verification_uri: req.url.endsWith('/code') ? 'https://github.com/login/device' : 'https://app.scrapecreators.com/cli-auth?request_id=request_123456789012345678901234567890',
    };
    else if (req.url === '/v1/github/device/token') data = { access_token: 'private-access-token' };
    else if (req.url === '/v1/github/device/profile') data = missingKey ? {} : { api_key: 'legacy-revoked-uid' };
    else if (req.url === '/api/cli-auth/github-key') data = { api_key: 'private-api-key' };
    else if (req.url === '/api/cli-auth/token') data = { api_key: 'private-api-key' };
    else if (req.url === '/v1/credit-balance') {
      if (rejectedKey) res.statusCode = 401;
      data = rejectedKey ? { error: 'private-api-key was rejected' } : { success: true, creditCount: 123 };
    } else { res.statusCode = 404; data = {}; }
    res.setHeader('content-type', 'application/json'); res.end(JSON.stringify(data));
  });
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  try {
    await run({ requests, dir, env: { XDG_CONFIG_HOME: dir, FAKE_PROVIDER_SERVER: `http://127.0.0.1:${server.address().port}` } });
  } finally {
    server.closeAllConnections(); await new Promise((resolve) => server.close(resolve));
    rmSync(dir, { recursive: true, force: true });
  }
}
const configPath = (dir) => join(dir, 'scrapecreators-nodejs', 'config.json');

describe('actual command parsing and local fake-provider integration', () => {
  it.each(['login', 'signup'])('%s --help advertises providers and no-browser', async (action) => {
    const result = await command(['auth', action, '--help']);
    expect(result.code).toBe(0);
    expect(result.stdout).toContain('--provider');
    expect(result.stdout).toContain('google|microsoft|github|api-key');
    expect(result.stdout).toContain('--no-browser');
  });
  it.each(['login', 'signup'])('%s without provider rejects non-TTY instead of hanging', async (action) => {
    const result = await command(['auth', action]);
    expect(result.code).toBe(1);
    expect(result.stderr).toContain('--provider');
  });
  it('invalid provider is rejected by command parsing', async () => {
    const result = await command(['auth', 'login', '--provider', 'invalid']);
    expect(result.code).toBe(1);
    expect(result.stderr).toContain('Allowed choices');
  });
  it.each(['google', 'microsoft', 'github'])('real command signs in via fake %s service and securely saves after credit validation', async (provider) => {
    await fakeServer(async ({ requests, dir, env }) => {
      const result = await command(['auth', provider === 'microsoft' ? 'signup' : 'login', '--provider', provider, '--no-browser'], env);
      expect(result.code).toBe(0);
      expect(result.stdout).toBe('');
      expect(result.stderr).toContain('ABCDE-FGHIJ');
      expect(result.stderr).not.toMatch(/private-device-secret|private-access-token|private-api-key/);
      expect(requests.at(-1).path).toBe('/v1/credit-balance');
      expect(requests.at(-1).headers['x-api-key']).toBe('private-api-key');
      expect(JSON.parse(readFileSync(configPath(dir), 'utf8')).apiKey).toBe('private-api-key');
      expect(statSync(configPath(dir)).mode & 0o777).toBe(0o600);
      if (provider !== 'github') expect(requests[0].body).toEqual({ provider });
      else {
        expect(requests.at(-2).path).toBe('/api/cli-auth/github-key');
        expect(requests.at(-2).headers.authorization).toBe('Bearer private-access-token');
        expect(requests.at(-1).headers['x-api-key']).not.toBe('legacy-revoked-uid');
      }
    });
  });
  it('real command validates and stores an existing environment API key', async () => {
    await fakeServer(async ({ requests, env, dir }) => {
      const result = await command(['auth', 'login', '--provider', 'api-key'], { ...env, SCRAPECREATORS_API_KEY: 'existing-api-key' });
      expect(result.code).toBe(0);
      expect(requests.map((req) => req.path)).toEqual(['/v1/credit-balance']);
      expect(JSON.parse(readFileSync(configPath(dir), 'utf8')).apiKey).toBe('existing-api-key');
      expect(statSync(configPath(dir)).mode & 0o777).toBe(0o600);
      expect(result.stdout + result.stderr).not.toContain('existing-api-key');
    });
  });
  it('a resolved GitHub key rejected by balance is never stored', async () => {
    await fakeServer(async ({ env, dir }) => {
      const result = await command(['auth', 'login', '--provider', 'github', '--no-browser'], env);
      expect(result.code).toBe(1);
      expect(result.stderr).toContain('rejected');
      expect(result.stderr).not.toMatch(/private-api-key|private-access-token|private-device-secret/);
      if (existsSync(configPath(dir))) expect(JSON.parse(readFileSync(configPath(dir), 'utf8')).apiKey).not.toBe('private-api-key');
    }, { rejectedKey: true });
  });
  it('SIGINT cancels polling and exits 130 without storing a key', async () => {
    await fakeServer(async ({ requests, dir, env }) => {
      let sent = false;
      const result = await command(['auth', 'login', '--provider', 'google', '--no-browser'], env, (child, output) => {
        if (!sent && output.includes('ABCDE-FGHIJ')) { sent = true; child.kill('SIGINT'); }
      });
      expect(result.code).toBe(130);
      expect(result.stderr).toContain('Cancelled');
      expect(requests.map((req) => req.path)).toEqual(['/api/cli-auth/start']);
      if (existsSync(configPath(dir))) expect(JSON.parse(readFileSync(configPath(dir), 'utf8')).apiKey).toBeFalsy();
    });
  });
});
