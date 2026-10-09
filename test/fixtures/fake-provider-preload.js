// Test-only network remapping; production code has no configurable auth hosts.
const realFetch = globalThis.fetch;
globalThis.fetch = (input, options) => {
  const url = new URL(input);
  if (!['api.scrapecreators.com', 'long-running-server.onrender.com'].includes(url.hostname)) {
    throw new Error('Unexpected host in fake-provider test');
  }
  return realFetch(new URL(url.pathname + url.search, process.env.FAKE_PROVIDER_SERVER), options);
};
