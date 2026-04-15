const API_BASE = "https://api.scrapecreators.com";

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
  const text = await res.text();

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
