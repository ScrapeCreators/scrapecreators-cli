import chalk from "chalk";
import Table from "cli-table3";
import { getPlatformMap } from "../command-registry.js";

export function listCommand(platform) {
  const platforms = getPlatformMap();

  if (platform) {
    const tools = platforms.get(platform);
    if (!tools) {
      console.error(chalk.red(`Unknown platform: ${platform}`));
      console.error(`Available: ${[...platforms.keys()].join(", ")}`);
      process.exitCode = 1;
      return;
    }

    console.log(chalk.bold(`\n${platform} endpoints:\n`));
    const table = new Table({
      head: [chalk.cyan("Command"), chalk.cyan("Description"), chalk.cyan("Required Params")],
    });

    for (const tool of tools) {
      const required = tool.params
        .filter((p) => p.required)
        .map((p) => `--${p.name.replace(/_/g, "-")}`)
        .join(", ");

      table.push([
        `scrapecreators ${platform} ${tool._action}`,
        tool.title,
        required || chalk.dim("none"),
      ]);
    }
    console.log(table.toString());
    return;
  }

  // list all platforms (skip credit — handled by `scrapecreators balance`)
  console.log(chalk.bold("\nAvailable platforms:\n"));
  const table = new Table({
    head: [chalk.cyan("Platform"), chalk.cyan("Endpoints")],
  });

  const sorted = [...platforms.entries()]
    .filter(([name]) => name !== "credit")
    .sort((a, b) => a[0].localeCompare(b[0]));
  for (const [name, tools] of sorted) {
    table.push([name, tools.length]);
  }
  console.log(table.toString());
  console.log(chalk.dim("\nRun 'scrapecreators list <platform>' for endpoint details."));
}
