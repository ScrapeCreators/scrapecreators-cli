import chalk from "chalk";
import config from "../config.js";
import { maskKey } from "../auth.js";

const ALLOWED_KEYS = ["apiKey", "defaultFormat"];
const VALID_FORMATS = ["auto", "json", "table", "csv", "markdown"];

export function configSet(key, value) {
  if (!ALLOWED_KEYS.includes(key)) {
    console.error(chalk.red("Unknown config key."));
    console.error(`Valid keys: ${ALLOWED_KEYS.join(", ")}`);
    process.exitCode = 1;
    return;
  }
  if (key === "defaultFormat" && !VALID_FORMATS.includes(value)) {
    console.error(chalk.red(`Invalid format: ${value}`));
    console.error(`Valid formats: ${VALID_FORMATS.join(", ")}`);
    process.exitCode = 1;
    return;
  }
  config.set(key, value);
  const display = key === "apiKey" ? maskKey(value) : value;
  console.log(chalk.green(`${key} = ${display}`));
}

export function configGet(key) {
  if (!ALLOWED_KEYS.includes(key)) {
    console.error(chalk.red("Unknown config key."));
    console.error(`Valid keys: ${ALLOWED_KEYS.join(", ")}`);
    process.exitCode = 1;
    return;
  }
  if (key === "apiKey") {
    printApiKeyStatus();
  } else {
    console.log(config.get(key) || chalk.dim("(not set)"));
  }
}

export function configList() {
  console.log(chalk.bold("Current configuration:\n"));

  process.stdout.write(`  ${chalk.cyan("apiKey")}: `);
  printApiKeyStatus();

  for (const key of ALLOWED_KEYS) {
    if (key === "apiKey") continue;
    console.log(`  ${chalk.cyan(key)}: ${config.get(key) || chalk.dim("(not set)")}`);
  }

  console.log(chalk.dim(`\nConfig file: ${config.path}`));
}

function printApiKeyStatus() {
  const stored = config.get("apiKey");
  const envKey = process.env.SCRAPECREATORS_API_KEY;

  if (stored) {
    console.log(`${maskKey(stored)} ${chalk.dim("(from stored config)")}`);
  } else if (envKey) {
    console.log(`${maskKey(envKey)} ${chalk.dim("(from SCRAPECREATORS_API_KEY env)")}`);
  } else {
    console.log(chalk.dim("(not set)"));
  }
}
