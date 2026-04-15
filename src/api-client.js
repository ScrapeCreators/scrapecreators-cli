const API_BASE = "https://api.scrapecreators.com";

// 50 MB — generous for JSON API responses, prevents memory exhaustion
const MAX_RESPONSE_BYTES = 50 * 1024 * 1024;

export { MAX_RESPONSE_BYTES };

export async function readBodyWithLimit(res) {
  const contentLength = parseInt(res.headers.get("content-length"), 10);
  if (contentLength > MAX_RESPONSE_BYTES) {
    throw new Error(`Response Content-Length (${contentLength}) exceeds ${MAX_RESPONSE_BYTES} byte limit`);
  }

  const chunks = [];
  let total = 0;
  for await (const chunk of res.body) {
    total += chunk.length;
    if (total > MAX_RESPONSE_BYTES) {
      throw new Error(`Response body exceeded ${MAX_RESPONSE_BYTES} byte limit`);
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
}

export async function callApi(apiKey, method, path, params = {}) {
  const url = new URL(`${API_BASE}${path}`);

  if (method === "GET" && params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    }
  }

  const options = {
    method,
    headers: {
      "x-api-key": apiKey,
      accept: "application/json",
    },
  };

  if (method !== "GET" && params && Object.keys(params).length > 0) {
    options.headers["content-type"] = "application/json";
    options.body = JSON.stringify(params);
  }

  options.signal = AbortSignal.timeout(60_000);

  const start = Date.now();
  const res = await fetch(url.toString(), options);
  const elapsed = Date.now() - start;
  const text = await readBodyWithLimit(res);

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  return {
    ok: res.ok,
    status: res.status,
    data,
    elapsed,
    url: url.toString(),
  };
}
