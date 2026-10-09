import * as clackPrompts from "@clack/prompts";
import chalk from "chalk";
import { resolveApiKey, storeApiKey, clearApiKey, getStoredApiKey, maskKey } from "../auth.js";
import { callApi } from "../api-client.js";
import { AuthError, AUTH_TIMEOUT_MS, REQUEST_TIMEOUT_MS, PROVIDERS, obtainProviderKey, validSecret } from "../guided-auth.js";

export async function authLogin(options = {}, dependencies = {}) {
  const {
    prompts = clackPrompts, isTTY = Boolean(process.stdin.isTTY), env = process.env,
    write = (message) => console.error(message),
    obtainProviderKey: obtain = obtainProviderKey, callApi: validate = callApi,
    storeApiKey: save = storeApiKey, signal: externalSignal,
  } = dependencies;
  const controller = new AbortController();
  const signal = externalSignal ? AbortSignal.any([externalSignal, controller.signal]) : controller.signal;
  const onInterrupt = () => controller.abort();
  const checkCancellation = () => { if (signal.aborted) throw new AuthError('cancelled'); };
  const cancelled = () => {
    write('Cancelled.');
    process.exitCode = 130;
    return false;
  };
  try {
    checkCancellation();
    let provider = options.provider;
    if (!provider) {
      if (!isTTY) {
        write('Non-interactive login requires --provider google|microsoft|github|api-key. For an existing key, set SCRAPECREATORS_API_KEY and use --provider api-key.');
        process.exitCode = 1;
        return false;
      }
      write('ScrapeCreators Authentication');
      provider = await prompts.select({
        message: 'How would you like to sign in or sign up?',
        options: [
          { value: 'google', label: 'Google' },
          { value: 'microsoft', label: 'Microsoft' },
          { value: 'github', label: 'GitHub' },
          { value: 'api-key', label: 'Use an existing API key' },
        ],
      });
      if (prompts.isCancel(provider)) return cancelled();
    }
    if (!PROVIDERS.includes(provider)) throw new AuthError('invalid_response');
    let apiKey;
    if (provider === 'api-key') {
      if (isTTY) {
        apiKey = await prompts.password({
          message: 'Enter your API key',
          validate: (value) => validSecret(value.trim()) ? undefined : 'Enter a valid API key (at least 5 characters, no spaces)',
        });
        if (prompts.isCancel(apiKey)) return cancelled();
      } else {
        apiKey = env.SCRAPECREATORS_API_KEY;
        if (!apiKey) {
          write('Set SCRAPECREATORS_API_KEY for non-interactive --provider api-key login, or run in a terminal to enter your existing key.');
          process.exitCode = 1;
          return false;
        }
      }
      apiKey = apiKey.trim();
    }
    // Clack handles Ctrl-C while prompting. Once prompts finish, cancel fetch/sleep explicitly.
    process.on('SIGINT', onInterrupt);
    const deadlineSignal = AbortSignal.timeout(dependencies.overallTimeoutMs ?? AUTH_TIMEOUT_MS);
    const authSignal = AbortSignal.any([signal, deadlineSignal]);
    checkCancellation();
    if (provider !== 'api-key') {
      apiKey = await obtain(provider, { signal: authSignal, browser: options.browser, write });
    }
    if (!validSecret(apiKey)) throw new AuthError('missing_key');
    checkCancellation();
    write('Validating API key...');
    const validationSignal = AbortSignal.any([authSignal, AbortSignal.timeout(dependencies.requestTimeoutMs ?? REQUEST_TIMEOUT_MS)]);
    const result = await validate(apiKey, 'GET', '/v1/credit-balance', {}, { signal: validationSignal });
    checkCancellation();
    if (validationSignal.aborted) throw new AuthError('timeout');
    if (!result?.ok || !result.data || typeof result.data !== 'object' || Array.isArray(result.data)
        || result.data.error || result.data.success !== true
        || typeof result.data.creditCount !== 'number' || !Number.isFinite(result.data.creditCount)) throw new AuthError('rejected_key');
    try { save(apiKey); } catch { throw new AuthError('storage'); }
    const balance = result.data.creditCount ?? result.data.credits;
    // Display numbers only: upstream fields can contain credentials or terminal control sequences.
    const credits = typeof balance === 'number' && Number.isFinite(balance) ? balance : 'unknown';
    write(`Authenticated. Balance: ${credits} credits. API key saved.`);
    return true;
  } catch (error) {
    if (signal.aborted) return cancelled();
    write(error instanceof AuthError ? error.message : 'Authentication failed. No API key was saved. Check your connection and try again.');
    process.exitCode = 1;
    return false;
  } finally {
    process.removeListener('SIGINT', onInterrupt);
  }
}

export async function authStatus() {
  const key = resolveApiKey();
  if (!key) {
    console.log(chalk.yellow("Not authenticated. Run 'scrapecreators auth login'."));
    return;
  }

  const stored = getStoredApiKey();
  const source = stored ? "stored config" : process.env.SCRAPECREATORS_API_KEY ? "environment variable" : "unknown";

  console.log(`API key: ${chalk.cyan(maskKey(key))} (from ${source})`);

  try {
    const result = await callApi(key, "GET", "/v1/credit-balance");
    if (result.ok) {
      const credits = result.data?.creditCount ?? result.data?.credits ?? "unknown";
      console.log(`Credits: ${chalk.green(credits)}`);
    }
  } catch {
    // non-critical, just skip
  }
}

export async function authLogout() {
  clearApiKey();
  console.log(chalk.green("API key removed from stored config."));
}
