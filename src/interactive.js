import * as prompts from "@clack/prompts";
import chalk from "chalk";
import { resolveApiKey, storeApiKey } from "./auth.js";
import { callApi } from "./api-client.js";
import { printResult } from "./output.js";
import { getPlatformMap } from "./command-registry.js";

export async function runInteractive(globalOpts) {
  prompts.intro(chalk.bold("ScrapeCreators CLI"));

  let apiKey = resolveApiKey(globalOpts);
  if (!apiKey) {
    const key = await prompts.text({
      message: "Enter your API key to get started",
      placeholder: "paste from https://app.scrapecreators.com",
      validate: (v) => (v.length < 5 ? "Too short" : undefined),
    });

    if (prompts.isCancel(key)) {
      prompts.cancel("Cancelled.");
      return;
    }

    storeApiKey(key);
    apiKey = key;
    console.log(chalk.green("  API key saved.\n"));
  }

  const platforms = getPlatformMap();
  const platformChoices = [...platforms.keys()]
    .filter((p) => p !== "credit")
    .sort()
    .map((p) => ({ value: p, label: p }));

  const platform = await prompts.select({
    message: "Select a platform",
    options: platformChoices,
  });

  if (prompts.isCancel(platform)) {
    prompts.cancel("Cancelled.");
    return;
  }

  const tools = platforms.get(platform);
  const actionChoices = tools.map((t) => ({
    value: t._action,
    label: t._action,
    hint: t.title,
  }));

  const action = await prompts.select({
    message: "Select an action",
    options: actionChoices,
  });

  if (prompts.isCancel(action)) {
    prompts.cancel("Cancelled.");
    return;
  }

  const tool = tools.find((t) => t._action === action);
  const params = {};

  // collect required params
  const requiredParams = tool.params.filter((p) => p.required);
  for (const param of requiredParams) {
    if (param.type === "boolean") {
      const val = await prompts.confirm({
        message: param.description || param.name,
      });
      if (prompts.isCancel(val)) { prompts.cancel("Cancelled."); return; }
      params[param.name] = val;
    } else if (param.type === "select" && param.options?.length) {
      const val = await prompts.select({
        message: param.description || param.name,
        options: param.options.map((o) => ({ value: o, label: o })),
      });
      if (prompts.isCancel(val)) { prompts.cancel("Cancelled."); return; }
      params[param.name] = val;
    } else {
      const val = await prompts.text({
        message: `${param.name}${param.description ? ` (${param.description})` : ""}`,
        placeholder: param.default ? String(param.default) : undefined,
      });
      if (prompts.isCancel(val)) { prompts.cancel("Cancelled."); return; }
      params[param.name] = val;
    }
  }

  // ask if they want to set optional params
  const optionalParams = tool.params.filter((p) => !p.required);
  if (optionalParams.length > 0) {
    const setOptional = await prompts.confirm({
      message: `Set optional parameters? (${optionalParams.length} available)`,
      initialValue: false,
    });

    if (!prompts.isCancel(setOptional) && setOptional) {
      for (const param of optionalParams) {
        if (param.type === "boolean") {
          const val = await prompts.confirm({
            message: param.description || param.name,
            initialValue: param.default ?? false,
          });
          if (prompts.isCancel(val)) break;
          if (val) params[param.name] = val;
        } else if (param.type === "select" && param.options?.length) {
          const val = await prompts.select({
            message: param.description || param.name,
            options: [
              { value: "__skip__", label: "(skip)" },
              ...param.options.map((o) => ({ value: o, label: o })),
            ],
          });
          if (prompts.isCancel(val)) break;
          if (val !== "__skip__") params[param.name] = val;
        } else {
          const val = await prompts.text({
            message: `${param.name}${param.description ? ` (${param.description})` : ""}`,
            placeholder: "leave empty to skip",
          });
          if (prompts.isCancel(val)) break;
          if (val) params[param.name] = val;
        }
      }
    }
  }

  if (globalOpts.trim) params.trim = true;
  if (globalOpts.region) params.region = globalOpts.region;

  const spinner = prompts.spinner();
  spinner.start("Fetching...");

  try {
    const result = await callApi(apiKey, tool.method, tool.path, params);
    spinner.stop("Done.");
    printResult(result, globalOpts);
  } catch (err) {
    spinner.stop("Failed.");
    console.error(chalk.red("Request failed."));
    if (globalOpts.verbose && err?.message) console.error(chalk.dim(err.message));
    process.exitCode = 1;
  }

  prompts.outro(chalk.dim("scrapecreators.com"));
}
