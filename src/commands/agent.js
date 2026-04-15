import {
  chmodSync,
  closeSync,
  constants,
  existsSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  realpathSync,
  unlinkSync,
  writeFileSync,
} from "fs";
import { dirname, isAbsolute, relative, resolve } from "path";
import { homedir } from "os";
import chalk from "chalk";
import * as prompts from "@clack/prompts";
import { resolveApiKey, storeApiKey } from "../auth.js";
import { callApi } from "../api-client.js";

const MCP_URL = "https://api.scrapecreators.com/mcp";

const TARGETS = {
  cursor: {
    name: "Cursor",
    configPath: () => resolve(process.cwd(), ".cursor", "mcp.json"),
    basePath: () => process.cwd(),
    buildConfig: (apiKey) => ({
      mcpServers: {
        scrapecreators: {
          url: MCP_URL,
          headers: { "x-api-key": apiKey },
        },
      },
    }),
  },
  claude: {
    name: "Claude Desktop",
    configPath: () => {
      if (process.platform === "win32") {
        const appData = process.env.APPDATA;
        if (!appData) return null;
        return resolve(appData, "Claude", "claude_desktop_config.json");
      }
      return resolve(homedir(), ".claude", "claude_desktop_config.json");
    },
    basePath: () => {
      if (process.platform === "win32") return process.env.APPDATA || null;
      return homedir();
    },
    buildConfig: (apiKey) => ({
      mcpServers: {
        scrapecreators: {
          url: MCP_URL,
          headers: { "x-api-key": apiKey },
        },
      },
    }),
  },
  codex: {
    name: "Codex",
    configPath: () => resolve(homedir(), ".codex", "mcp.json"),
    basePath: () => homedir(),
    buildConfig: (apiKey) => ({
      mcpServers: {
        scrapecreators: {
          url: MCP_URL,
          headers: { "x-api-key": apiKey },
        },
      },
    }),
  },
};

function isPlainObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function isWithinBase(basePath, candidatePath) {
  const rel = relative(basePath, candidatePath);
  return rel === "" || (!isAbsolute(rel) && !rel.startsWith(".."));
}

export function resolveConfigPath(rawPath, rawBasePath, targetName) {
  if (!rawPath || !rawBasePath) {
    console.error(chalk.red(`Could not resolve ${targetName} config path on this system.`));
    process.exitCode = 1;
    return null;
  }

  const baseReal = realpathSync(rawBasePath);
  const resolvedPath = resolve(rawPath);
  const resolvedParent = dirname(resolvedPath);

  let existingAncestor = resolvedParent;
  while (!existsSync(existingAncestor) && dirname(existingAncestor) !== existingAncestor) {
    existingAncestor = dirname(existingAncestor);
  }

  if (!existsSync(existingAncestor)) {
    console.error(chalk.red(`Could not validate parent directory for ${targetName} config.`));
    process.exitCode = 1;
    return null;
  }

  const ancestorReal = realpathSync(existingAncestor);
  if (!isWithinBase(baseReal, ancestorReal) || !isWithinBase(baseReal, resolvedPath)) {
    console.error(chalk.red(`${targetName} config path resolves outside the expected base directory.`));
    process.exitCode = 1;
    return null;
  }

  if (existsSync(resolvedPath) && lstatSync(resolvedPath).isSymbolicLink()) {
    console.error(chalk.red(`${targetName} config path is a symlink. Refusing to write secrets to symlinked files.`));
    process.exitCode = 1;
    return null;
  }

  return resolvedPath;
}

export function secureWriteJson(configPath, contents) {
  const noFollow = typeof constants.O_NOFOLLOW === "number" ? constants.O_NOFOLLOW : 0;
  const flags = constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | noFollow;
  let fd;

  try {
    fd = openSync(configPath, flags, 0o600);
  } catch (err) {
    const noFollowUnsupported = noFollow && (
      err?.code === "EINVAL" ||
      err?.code === "ENOTSUP" ||
      err?.code === "EOPNOTSUPP"
    );
    if (noFollowUnsupported) {
      const tmpPath = `${configPath}.${process.pid}.${Date.now()}.tmp`;
      writeFileSync(tmpPath, contents, { encoding: "utf-8", mode: 0o600, flag: "wx" });
      try {
        if (existsSync(configPath) && lstatSync(configPath).isSymbolicLink()) {
          throw new Error("refusing to overwrite symlinked config path");
        }
        renameSync(tmpPath, configPath);
      } catch (fallbackErr) {
        try {
          if (existsSync(tmpPath)) unlinkSync(tmpPath);
        } catch {
          // ignore cleanup errors
        }
        throw fallbackErr;
      }
      return;
    }
    throw err;
  }

  try {
    writeFileSync(fd, contents, "utf-8");
  } finally {
    closeSync(fd);
  }
}

function ensureOwnerOnly(pathToFile) {
  try {
    chmodSync(pathToFile, 0o600);
  } catch (err) {
    console.error(chalk.yellow(`Warning: could not set 0600 on ${pathToFile}: ${err.message}`));
  }
}

export async function agentAddCommand(target, globalOpts) {
  const targetLower = target?.toLowerCase();
  const targetDef = TARGETS[targetLower];

  if (!targetDef) {
    console.error(chalk.red("Unknown target."));
    console.error(`Available targets: ${Object.keys(TARGETS).join(", ")}`);
    process.exitCode = 1;
    return;
  }

  let apiKey = resolveApiKey(globalOpts);
  if (!apiKey) {
    const key = await prompts.text({
      message: "Enter your ScrapeCreators API key",
      placeholder: "paste from https://app.scrapecreators.com",
      validate: (v) => (v.length < 5 ? "Too short" : undefined),
    });

    if (prompts.isCancel(key)) {
      prompts.cancel("Cancelled.");
      return;
    }

    const result = await callApi(key, "GET", "/v1/credit-balance");
    if (!result.ok) {
      console.error(chalk.red("Invalid API key."));
      process.exitCode = 1;
      return;
    }

    storeApiKey(key);
    apiKey = key;
    console.log(chalk.green("API key validated and saved."));
  }

  const configPath = resolveConfigPath(targetDef.configPath(), targetDef.basePath(), targetDef.name);
  if (!configPath) return;
  const newConfig = targetDef.buildConfig(apiKey);

  // warn if config lands inside a git repo (key could be committed)
  let dir = dirname(configPath);
  while (dir !== dirname(dir)) {
    if (existsSync(resolve(dir, ".git"))) {
      console.error(chalk.yellow(`Warning: ${configPath} is inside a git repo.`));
      console.error(chalk.yellow("Make sure this file is gitignored to avoid committing your API key."));
      break;
    }
    dir = dirname(dir);
  }

  let existing = {};
  if (existsSync(configPath)) {
    let raw;
    try {
      raw = readFileSync(configPath, "utf-8");
    } catch (err) {
      console.error(chalk.red(`Could not read existing config at ${configPath}: ${err.message}`));
      process.exitCode = 1;
      return;
    }

    try {
      existing = JSON.parse(raw);
    } catch (err) {
      console.error(chalk.red(`Existing config is not valid JSON: ${configPath}`));
      console.error(chalk.yellow("Fix the file or back it up before running this command again."));
      if (err?.message) console.error(chalk.dim(err.message));
      process.exitCode = 1;
      return;
    }

    if (!isPlainObject(existing)) {
      console.error(chalk.red(`Expected a JSON object at root in ${configPath}.`));
      process.exitCode = 1;
      return;
    }
  }

  if (existing.mcpServers !== undefined && !isPlainObject(existing.mcpServers)) {
    console.error(chalk.red(`Expected "mcpServers" to be an object in ${configPath}.`));
    process.exitCode = 1;
    return;
  }

  // merge: preserve other MCP servers
  existing.mcpServers = {
    ...(existing.mcpServers || {}),
    ...newConfig.mcpServers,
  };

  mkdirSync(dirname(configPath), { recursive: true, mode: 0o700 });
  try {
    secureWriteJson(configPath, JSON.stringify(existing, null, 2) + "\n");
  } catch (err) {
    console.error(chalk.red(`Could not write config file ${configPath}: ${err.message}`));
    process.exitCode = 1;
    return;
  }
  ensureOwnerOnly(configPath);

  console.log(chalk.green(`\n${targetDef.name} MCP config written to ${configPath}`));
  console.log(chalk.dim("Make sure the scrapecreators MCP server is enabled in your editor settings."));
}
