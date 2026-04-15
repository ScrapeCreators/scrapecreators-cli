import * as prompts from "@clack/prompts";
import chalk from "chalk";
import { resolveApiKey, storeApiKey, clearApiKey, getStoredApiKey, maskKey } from "../auth.js";
import { callApi } from "../api-client.js";

export async function authLogin() {
  prompts.intro(chalk.bold("ScrapeCreators Authentication"));

  const apiKey = await prompts.text({
    message: "Enter your API key",
    placeholder: "paste your key from https://app.scrapecreators.com",
    validate: (v) => (v.length < 5 ? "API key seems too short" : undefined),
  });

  if (prompts.isCancel(apiKey)) {
    prompts.cancel("Cancelled.");
    return;
  }

  const spinner = prompts.spinner();
  spinner.start("Validating API key...");

  try {
    const result = await callApi(apiKey, "GET", "/v1/credit-balance");
    if (!result.ok) {
      spinner.stop("Invalid API key.");
      console.error(chalk.red("The API key was rejected. Check it and try again."));
      process.exitCode = 1;
      return;
    }

    storeApiKey(apiKey);
    const credits = result.data?.creditCount ?? result.data?.credits ?? "unknown";
    spinner.stop(`Authenticated. Balance: ${credits} credits.`);
    prompts.outro(chalk.green("API key saved."));
  } catch {
    spinner.stop("Connection failed.");
    console.error(chalk.red("Could not reach API. Check your network and try again."));
    process.exitCode = 1;
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
