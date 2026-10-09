import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

export const PROVIDERS = ['google', 'microsoft', 'github', 'api-key'];
export const AUTH_TIMEOUT_MS = 10 * 60_000;
export const REQUEST_TIMEOUT_MS = 15_000;
const API_BASE = 'https://api.scrapecreators.com';
const AUTH_BASE = 'https://long-running-server.onrender.com';

// Only locally defined messages may reach the terminal. Never echo an upstream error/body.
export class AuthError extends Error {
  constructor(code) {
    const messages = {
      cancelled: 'Cancelled.',
      timeout: 'Authentication timed out or expired. Run the login command again.',
      invalid_response: 'Authentication service returned an invalid response. No API key was saved.',
      invalid_url: 'Authentication service returned an invalid browser URL. No browser was opened.',
      network: 'Could not reach the authentication service. Check your network and try again.',
      request_failed: 'Authentication request failed. Try again later.',
      access_denied: 'Authorization was denied. No API key was saved.',
      expired_token: 'Authorization expired. Run the login command again.',
      invalid_grant: 'Authorization is invalid. Run the login command again.',
      missing_key: 'The account did not return a usable API key. No key was saved; contact ScrapeCreators support.',
      rejected_key: 'The API key was rejected. No key was saved. For a linked or rotated account, contact ScrapeCreators support.',
      storage: 'Could not securely save the API key. Authentication was not completed.',
    };
    super(messages[code] ?? messages.request_failed);
    this.code = code;
  }
}

export function validSecret(value) {
  return typeof value === 'string' && /^[\x21-\x7e]{5,4096}$/.test(value);
}

export function verificationUrl(provider, data) {
  try {
    const raw = data.verification_uri;
    if (typeof raw !== 'string' || /\s/.test(raw)) throw new Error();
    const url = new URL(raw);
    if (url.protocol !== 'https:' || url.username || url.password || url.port || url.hash) throw new Error();
    if (provider === 'github') {
      if (url.hostname !== 'github.com' || url.pathname !== '/login/device' || url.search) throw new Error();
    } else {
      if (!['google', 'microsoft'].includes(provider)) throw new Error();
      if (typeof data.request_id !== 'string' || !/^[A-Za-z0-9_-]{16,256}$/.test(data.request_id)) throw new Error();
      if (url.origin !== 'https://app.scrapecreators.com' || url.pathname !== '/cli-auth') throw new Error();
      const entries = [...url.searchParams];
      if (entries.length !== 1 || entries[0][0] !== 'request_id' || entries[0][1] !== data.request_id) throw new Error();
    }
    return url.toString();
  } catch {
    throw new AuthError('invalid_url');
  }
}

// The login command/provider selection is the user's consent to open this fixed-origin URL.
// No shell, no cmd /c start, and no interpolation of untrusted data into executable code.
export function openBrowser(url, { platform = process.platform, spawnImpl = spawn, timeoutMs = 2000 } = {}) {
  const command = platform === 'darwin' ? 'open' : platform === 'win32' ? 'rundll32.exe' : 'xdg-open';
  const args = platform === 'win32' ? ['url.dll,FileProtocolHandler', url] : [url];
  return new Promise((resolve) => {
    let child;
    let timer;
    let done = false;
    const finish = (success) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      resolve(success);
    };
    try {
      child = spawnImpl(command, args, { shell: false, stdio: 'ignore', windowsHide: true });
      child.once('error', () => finish(false));
      child.once('close', (code) => finish(code === 0));
      timer = setTimeout(() => { child.kill(); finish(false); }, timeoutMs);
    } catch { finish(false); }
  });
}

export async function obtainProviderKey(provider, options = {}) {
  if (!['google', 'microsoft', 'github'].includes(provider)) throw new AuthError('invalid_response');
  const {
    fetchImpl = globalThis.fetch, now = Date.now,
    sleep = (ms, signal) => delay(ms, undefined, { signal }),
    write = (message) => console.error(message), openBrowser: launch = openBrowser,
    browser = true, signal, requestTimeoutMs = REQUEST_TIMEOUT_MS,
    overallTimeoutMs = AUTH_TIMEOUT_MS,
  } = options;
  const started = now();
  const overallSignal = AbortSignal.timeout(overallTimeoutMs);
  let deadline = started + overallTimeoutMs;
  const check = () => {
    if (signal?.aborted) throw new AuthError('cancelled');
    if (overallSignal.aborted || now() >= deadline) throw new AuthError('timeout');
  };
  const request = async (url, body, accessToken) => {
    check();
    const requestSignal = AbortSignal.timeout(Math.max(1, Math.min(requestTimeoutMs, deadline - now())));
    const combinedSignal = AbortSignal.any([overallSignal, requestSignal, ...(signal ? [signal] : [])]);
    try {
      const response = await fetchImpl(url, {
        method: accessToken ? 'GET' : 'POST', redirect: 'error', signal: combinedSignal,
        headers: { accept: 'application/json', ...(accessToken ? { authorization: `Bearer ${accessToken}` } : { 'content-type': 'application/json' }) },
        ...(accessToken ? {} : { body: JSON.stringify(body) }),
      });
      // Auth responses are small; bound the stream as well as its declared size.
      if (Number(response.headers.get('content-length')) > 65_536) throw new AuthError('invalid_response');
      let text = '', bytes = 0;
      const decoder = new TextDecoder();
      for await (const chunk of response.body) {
        bytes += chunk.byteLength;
        if (bytes > 65_536) throw new AuthError('invalid_response');
        text += decoder.decode(chunk, { stream: true });
      }
      text += decoder.decode();
      let data;
      try { data = JSON.parse(text); } catch { throw new AuthError('invalid_response'); }
      if (!data || typeof data !== 'object' || Array.isArray(data)) throw new AuthError('invalid_response');
      check();
      // RFC device-flow errors may arrive as 200 or 400. Other failed statuses are not pending.
      if (!response.ok && !(response.status === 400 && ['authorization_pending', 'slow_down', 'access_denied', 'expired_token', 'invalid_grant'].includes(data.error))) {
        throw new AuthError('request_failed');
      }
      return data;
    } catch (error) {
      if (signal?.aborted) throw new AuthError('cancelled');
      if (overallSignal.aborted || requestSignal.aborted || now() >= deadline) throw new AuthError('timeout');
      if (error instanceof AuthError) throw error;
      throw new AuthError('network');
    }
  };

  const github = provider === 'github';
  const base = github ? `${API_BASE}/v1/github/device` : `${AUTH_BASE}/api/cli-auth`;
  const data = await request(`${base}/${github ? 'code' : 'start'}`, github ? {} : { provider });
  if (!validSecret(data.device_code) || typeof data.user_code !== 'string' || !/^[A-Za-z0-9-]{4,32}$/.test(data.user_code)
      || !Number.isFinite(data.interval) || data.interval <= 0
      || !Number.isFinite(data.expires_in) || data.expires_in <= 0) throw new AuthError('invalid_response');
  const url = verificationUrl(provider, data);
  deadline = Math.min(deadline, started + data.expires_in * 1000);
  check();
  write(`Authorize ${provider === 'github' ? 'GitHub' : provider === 'google' ? 'Google' : 'Microsoft'} using code: ${data.user_code}`);
  write(`Open this URL if your browser does not open: ${url}`);
  write('Approve terminal access in your browser, then return here. Press Ctrl-C to cancel.');
  if (browser) {
    try { if (!(await launch(url))) write('Browser could not be opened automatically. Use the URL above.'); }
    catch { write('Browser could not be opened automatically. Use the URL above.'); }
  }
  let intervalMs = Math.min(data.interval * 1000, overallTimeoutMs);
  while (true) {
    check();
    const waitMs = Math.min(intervalMs, Math.max(0, deadline - now()));
    try {
      await sleep(waitMs, AbortSignal.any([overallSignal, ...(signal ? [signal] : [])]));
    } catch {
      check();
      throw new AuthError('timeout');
    }
    check();
    const token = await request(`${base}/token`, { device_code: data.device_code });
    if (token.error) {
      if (token.error === 'authorization_pending') continue;
      if (token.error === 'slow_down') { intervalMs = Math.min(intervalMs + 5000, overallTimeoutMs); continue; }
      if (['access_denied', 'expired_token', 'invalid_grant'].includes(token.error)) throw new AuthError(token.error);
      throw new AuthError('request_failed');
    }
    if (!github) {
      if (!validSecret(token.api_key)) throw new AuthError('missing_key');
      return token.api_key;
    }
    if (!validSecret(token.access_token)) throw new AuthError('invalid_response');
    const profile = await request(`${base}/profile`, undefined, token.access_token);
    if (!validSecret(profile.api_key)) throw new AuthError('missing_key');
    // The profile's UID key may have been rotated/revoked. Resolve an active key
    // using the same application-bound GitHub identity, never an email or UID fallback.
    const active = await request(`${AUTH_BASE}/api/cli-auth/github-key`, undefined, token.access_token);
    if (!validSecret(active.api_key)) throw new AuthError('missing_key');
    return active.api_key;
  }
}
