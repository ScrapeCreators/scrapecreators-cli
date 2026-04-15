import chalk from "chalk";
import ora from "ora";
import { resolveApiKey } from "../auth.js";
import { callApi } from "../api-client.js";
import { printResult } from "../output.js";

export async function balanceCommand(globalOpts) {
  const apiKey = resolveApiKey(globalOpts);
  if (!apiKey) {
    console.error(chalk.red("No API key found."));
    console.error(chalk.yellow("Run 'scrapecreators auth login' or set SCRAPECREATORS_API_KEY"));
    process.exitCode = 1;
    return;
  }

  const showSpinner = process.stdout.isTTY && !globalOpts.raw && !globalOpts.json;
  const spinner = showSpinner ? ora({ text: "Checking balance...", stream: process.stderr }).start() : null;

  try {
    const result = await callApi(apiKey, "GET", "/v1/credit-balance");
    if (spinner) spinner.stop();

    if (globalOpts.raw || globalOpts.json || !process.stdout.isTTY) {
      printResult(result, globalOpts);
    } else if (result.ok) {
      const credits = result.data?.creditCount ?? result.data?.credits ?? "unknown";
      console.log(`Credits remaining: ${chalk.green(chalk.bold(credits))}`);
    } else {
      printResult(result, globalOpts);
    }
  } catch (err) {
    if (spinner) spinner.stop();
    console.error(chalk.red("Request failed."));
    if (globalOpts.verbose) {
      console.error(chalk.dim(err.message));
      if (err.cause) console.error(chalk.dim(`Cause: ${err.cause.message || err.cause}`));
    }
    process.exitCode = 1;
  }
}
