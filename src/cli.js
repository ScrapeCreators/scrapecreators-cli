import { Command } from "commander";
import { registerApiCommands } from "./command-registry.js";
import { authLogin, authStatus, authLogout } from "./commands/auth.js";
import { configSet, configGet, configList } from "./commands/config.js";
import { balanceCommand } from "./commands/balance.js";
import { listCommand } from "./commands/list.js";
import { agentAddCommand } from "./commands/agent.js";
import { runInteractive } from "./interactive.js";

export function run(argv) {
  const program = new Command();

  program
    .name("scrapecreators")
    .description("CLI for the ScrapeCreators API — scrape 27+ social media platforms")
    .version("1.0.0")
    .option("--api-key <key>", "API key (overrides env and config)")
    .option("--format <format>", "output format: json, table, csv, markdown", "auto")
    .option("--json", "shorthand for compact JSON (default)")
    .option("--pretty", "pretty-print JSON with indentation")
    .option("--output <path>", "save response to file, print path only")
    .option("--clean", "strip noisy fields: booleans, empty values, settings (any format)")
    .option("--no-color", "disable ANSI colors")
    .option("--verbose", "show request URL, timing, credits used");

  const globalOptsGetter = () => program.opts();

  // --- API commands (dynamic from api-config) ---
  registerApiCommands(program, globalOptsGetter);

  // --- auth ---
  const authCmd = program.command("auth").description("manage authentication");
  authCmd.command("login").description("set your API key").action(() => authLogin());
  authCmd.command("status").description("show current auth status").action(() => authStatus());
  authCmd.command("logout").description("remove stored API key").action(() => authLogout());

  // --- balance ---
  program
    .command("balance")
    .description("check credit balance")
    .action(() => balanceCommand(globalOptsGetter()));

  // --- config ---
  const configCmd = program.command("config").description("manage CLI configuration");
  configCmd
    .command("set <key> <value>")
    .description("set a config value")
    .action((key, value) => configSet(key, value));
  configCmd
    .command("get <key>")
    .description("get a config value")
    .action((key) => configGet(key));
  configCmd
    .command("list")
    .description("show all config values")
    .action(() => configList());

  // --- list ---
  program
    .command("list [platform]")
    .description("list available platforms and endpoints")
    .action((platform) => listCommand(platform));

  // --- agent-first: agent add ---
  const agentCmd = program.command("agent").description("configure AI agent integrations");
  agentCmd
    .command("add <target>")
    .description("write MCP config into an agent (cursor, claude, codex)")
    .action((target) => agentAddCommand(target, globalOptsGetter()));

  // if no args and stdin is a TTY, launch interactive mode
  if (argv.length <= 2 && process.stdin.isTTY) {
    runInteractive(globalOptsGetter());
    return;
  }

  program.parse(argv);
}
