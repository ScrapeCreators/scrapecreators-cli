import config from "./config.js";

export function resolveApiKey(opts = {}) {
  if (opts.apiKey) return opts.apiKey;
  const stored = config.get("apiKey");
  if (stored) return stored;
  if (process.env.SCRAPECREATORS_API_KEY) return process.env.SCRAPECREATORS_API_KEY;
  return null;
}

export function storeApiKey(key) {
  config.set("apiKey", key);
}

export function clearApiKey() {
  config.delete("apiKey");
}

export function getStoredApiKey() {
  return config.get("apiKey") || null;
}

export function maskKey(key) {
  if (!key) return "(not set)";
  if (key.length <= 12) return key.slice(0, 2) + "…" + key.slice(-2);
  return key.slice(0, 6) + "…" + key.slice(-4);
}
