import ora from "ora";
import chalk from "chalk";
import { resolveApiKey } from "../auth.js";
import { callApi } from "../api-client.js";
import { printResult } from "../output.js";

export async function handleApiCommand(tool, args, globalOpts) {
  const apiKey = resolveApiKey(globalOpts);
  if (!apiKey) {
    console.error(chalk.red("No API key found."));
    console.error(chalk.yellow("Run 'scrapecreators auth login' or set SCRAPECREATORS_API_KEY"));
    process.exitCode = 1;
    return;
  }

  if (tool.credits && tool.credits > 1 && process.stdout.isTTY) {
    console.error(chalk.yellow(`Note: this endpoint costs ${tool.credits} credits per request.`));
  }

  const params = {};
  for (const param of tool.params) {
    const cliFlag = param.name.replace(/_/g, "-");
    const value = args[camelCase(cliFlag)];
    if (value !== undefined) {
      params[param.name] = value;
    }
  }

  if (globalOpts.trim) params.trim = true;
  if (globalOpts.region) params.region = globalOpts.region;

  const showSpinner = process.stdout.isTTY && !globalOpts.raw && !globalOpts.json;
  const spinner = showSpinner ? ora({ text: "Fetching...", stream: process.stderr }).start() : null;

  try {
    const result = await callApi(apiKey, tool.method, tool.path, params);
    if (spinner) spinner.stop();
    printResult(result, globalOpts);
  } catch (err) {
    if (spinner) spinner.stop();
    console.error(chalk.red("Request failed."));
    if (globalOpts.verbose) console.error(chalk.dim(err.message));
    process.exitCode = 1;
  }
}

function camelCase(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
