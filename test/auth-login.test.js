// UI, provider and credit-balance mocks. Storage is exercised separately in the command integration tests.
import { describe, it, expect, vi, afterEach } from 'vitest';
import { authLogin } from '../src/commands/auth.js';

function harness(overrides = {}) {
  const prompts = {
    intro: vi.fn(), outro: vi.fn(), cancel: vi.fn(), isCancel: (v) => typeof v === 'symbol',
    select: vi.fn(async () => 'google'), password: vi.fn(async () => 'existing-api-key'),
  };
  return {
    prompts, isTTY: true, obtainProviderKey: vi.fn(async () => 'provider-api-key'),
    callApi: vi.fn(async () => ({ ok: true, data: { success: true, creditCount: 42 } })),
    storeApiKey: vi.fn(), write: vi.fn(), ...overrides,
  };
}
afterEach(() => { process.exitCode = undefined; });

describe('auth login menu and validation (mock UI/services)', () => {
  it.each(['google', 'microsoft', 'github', 'api-key'])('dispatches menu selection %s and validates before saving', async (provider) => {
    const h = harness(); h.prompts.select.mockResolvedValue(provider);
    expect(await authLogin({}, h)).toBe(true);
    const menu = h.prompts.select.mock.calls[0][0].options;
    expect(menu.map((option) => option.label)).toEqual(['Google', 'Microsoft', 'GitHub', 'Use an existing API key']);
    const key = provider === 'api-key' ? 'existing-api-key' : 'provider-api-key';
    if (provider === 'api-key') {
      expect(h.prompts.password).toHaveBeenCalled();
      expect(h.obtainProviderKey).not.toHaveBeenCalled();
    } else expect(h.obtainProviderKey).toHaveBeenCalledWith(provider, expect.any(Object));
    expect(h.callApi).toHaveBeenCalledWith(key, 'GET', '/v1/credit-balance', {}, expect.objectContaining({ signal: expect.any(AbortSignal) }));
    expect(h.storeApiKey).toHaveBeenCalledWith(key);
    expect(h.callApi.mock.invocationCallOrder[0]).toBeLessThan(h.storeApiKey.mock.invocationCallOrder[0]);
    expect(h.write.mock.calls.flat().join('\n')).not.toContain(key);
  });
  it('explicit provider skips the menu in a non-TTY', async () => {
    const h = harness({ isTTY: false });
    expect(await authLogin({ provider: 'github' }, h)).toBe(true);
    expect(h.prompts.select).not.toHaveBeenCalled();
  });
  it('non-TTY without a provider exits without prompts/network', async () => {
    const h = harness({ isTTY: false });
    expect(await authLogin({}, h)).toBe(false);
    expect(h.prompts.select).not.toHaveBeenCalled();
    expect(h.obtainProviderKey).not.toHaveBeenCalled();
    expect(h.write.mock.calls.flat().join('\n')).toContain('--provider');
    expect(process.exitCode).toBe(1);
  });
  it('uses the environment key for explicit non-TTY api-key login', async () => {
    const h = harness({ isTTY: false, env: { SCRAPECREATORS_API_KEY: 'environment-api-key' } });
    expect(await authLogin({ provider: 'api-key' }, h)).toBe(true);
    expect(h.prompts.password).not.toHaveBeenCalled();
    expect(h.storeApiKey).toHaveBeenCalledWith('environment-api-key');
  });
  it('non-TTY existing-key login without a key errors instead of hanging', async () => {
    const h = harness({ isTTY: false, env: {} });
    expect(await authLogin({ provider: 'api-key' }, h)).toBe(false);
    expect(h.prompts.password).not.toHaveBeenCalled();
    expect(h.callApi).not.toHaveBeenCalled();
  });
  it.each([{}, { ok: false }, { ok: true, data: { success: false } }, { ok: true, data: {} }, { ok: true, data: { success: true } }, { ok: true, data: { success: true, creditCount: 'secret' } }, { ok: true, data: { success: true, creditCount: NaN } }])('does not save a rejected/malformed validation response', async (response) => {
    const h = harness({ callApi: vi.fn(async () => response) });
    expect(await authLogin({ provider: 'github' }, h)).toBe(false);
    expect(h.storeApiKey).not.toHaveBeenCalled();
    expect(process.exitCode).toBe(1);
  });
  it('does not save when provider fails and never prints thrown secrets', async () => {
    const h = harness({ obtainProviderKey: vi.fn(async () => { throw new Error('private-access-token'); }) });
    expect(await authLogin({ provider: 'github' }, h)).toBe(false);
    expect(h.storeApiKey).not.toHaveBeenCalled();
    expect(h.write.mock.calls.flat().join('\n')).not.toContain('private-access-token');
  });
  it('cancelled menu performs no network requests', async () => {
    const h = harness(); h.prompts.select.mockResolvedValue(Symbol('cancel'));
    expect(await authLogin({}, h)).toBe(false);
    expect(h.obtainProviderKey).not.toHaveBeenCalled();
    expect(h.callApi).not.toHaveBeenCalled();
    expect(process.exitCode).toBe(130);
  });
  it('cancelled password performs no network requests', async () => {
    const h = harness(); h.prompts.password.mockResolvedValue(Symbol('cancel'));
    expect(await authLogin({ provider: 'api-key' }, h)).toBe(false);
    expect(h.callApi).not.toHaveBeenCalled();
  });
  it('validation receives a cancellable, finite signal and abort prevents save', async () => {
    const controller = new AbortController();
    const h = harness({ signal: controller.signal, callApi: vi.fn(async () => { controller.abort(); return { ok: true }; }) });
    expect(await authLogin({ provider: 'google' }, h)).toBe(false);
    expect(h.storeApiKey).not.toHaveBeenCalled();
    expect(process.exitCode).toBe(130);
  });
  it('storage errors do not report successful authentication', async () => {
    const h = harness({ storeApiKey: vi.fn(() => { throw new Error('disk failure provider-api-key'); }) });
    expect(await authLogin({ provider: 'google' }, h)).toBe(false);
    expect(h.prompts.outro).not.toHaveBeenCalled();
    expect(h.write.mock.calls.flat().join('\n')).not.toContain('provider-api-key');
  });
});
