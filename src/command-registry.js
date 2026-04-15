import { apis } from "../api-config/apis.js";
import { handleApiCommand } from "./commands/api.js";

function buildParamDescription(p) {
  const base = p.description || "";
  if (p.placeholder === undefined || p.placeholder === "") return base;
  const val = String(p.placeholder);
  if (p.type === "boolean" || val === "null" || val === "false" || val === "true") return base;
  return `${base} (e.g. ${val})`;
}

const toolDefs = apis.flatMap((api) =>
  api.endpoints.map((ep) => ({
    name: ep.path.replace(/^\//, "").replace(/\//g, "_").replace(/-/g, "_"),
    title: `${api.name} - ${ep.name}`,
    description: ep.fullDescription || ep.description,
    method: ep.method,
    path: ep.path,
    params: (ep.params || []).map((p) => ({
      name: p.name,
      type: p.type,
      required: !!p.required,
      description: buildParamDescription(p),
      ...(p.type === "select" && p.options ? { options: p.options } : {}),
      ...(p.default !== undefined ? { default: p.default } : {}),
    })),
    ...(ep.paginationField ? { paginationField: ep.paginationField } : {}),
    ...(ep.credits ? { credits: ep.credits } : {}),
  }))
);

// /v1/tiktok/profile -> { platform: "tiktok", action: "profile" }
// /v3/tiktok/profile/videos -> { platform: "tiktok", action: "profile-videos" }
// /v1/facebook/adLibrary/search/ads -> { platform: "facebook", action: "adlibrary-search-ads" }
// /v1/linktree -> { platform: "linktree", action: "get" }
// /v1/detect-age-gender -> { platform: "detect", action: "age-gender" }
// /v1/credit-balance -> { platform: "credit", action: "balance" }
function parseToolPath(path) {
  // handle hyphenated single-segment paths like /v1/detect-age-gender, /v1/credit-balance
  const stripped = path.replace(/^\//, "");
  const parts = stripped.split("/");

  if (parts.length === 2 && parts[1].includes("-")) {
    const idx = parts[1].indexOf("-");
    return {
      platform: parts[1].slice(0, idx),
      action: parts[1].slice(idx + 1),
    };
  }

  const platform = parts[1];
  const actionParts = parts.slice(2);
  // if no action segments (e.g. /v1/linktree), use "get" as default
  const action = actionParts.length > 0
    ? actionParts.join("-").toLowerCase()
    : "get";
  return { platform, action };
}

// pick latest version when multiple exist for same platform+action
function deduplicateTools(tools) {
  const map = new Map();
  for (const tool of tools) {
    const { platform, action } = parseToolPath(tool.path);
    const key = `${platform}/${action}`;
    const existing = map.get(key);
    if (!existing) {
      map.set(key, tool);
    } else {
      const existingVersion = parseInt(existing.path.match(/^\/v(\d+)/)?.[1] || "1");
      const newVersion = parseInt(tool.path.match(/^\/v(\d+)/)?.[1] || "1");
      if (newVersion > existingVersion) {
        map.set(key, tool);
      }
    }
  }
  return [...map.values()];
}

function snakeToCli(name) {
  return name.replace(/_/g, "-");
}

function cliToCamel(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

export function registerApiCommands(program, globalOptsGetter) {
  const tools = deduplicateTools(toolDefs);

  // group by platform
  const platforms = new Map();
  for (const tool of tools) {
    const { platform, action } = parseToolPath(tool.path);
    if (!platforms.has(platform)) platforms.set(platform, []);
    platforms.get(platform).push({ ...tool, _action: action });
  }

  for (const [platform, tools] of platforms) {
    // skip credit/balance - handled as `scrapecreators balance`
    if (platform === "credit") continue;

    const platCmd = program
      .command(platform)
      .description(`${platform} endpoints`);

    for (const tool of tools) {
      const actionCmd = platCmd
        .command(tool._action)
        .description(tool.title);

      for (const param of tool.params) {
        const flag = snakeToCli(param.name);
        const camel = cliToCamel(flag);

        if (param.type === "boolean") {
          actionCmd.option(`--${flag}`, param.description);
        } else if (param.type === "select" && param.options?.length) {
          actionCmd.option(
            `--${flag} <value>`,
            `${param.description} (${param.options.join("|")})`,
          );
        } else {
          const bracket = param.required ? `<${flag}>` : `[${flag}]`;
          actionCmd.option(`--${flag} ${bracket}`, param.description);
        }
      }

      actionCmd.action(async (cmdOpts) => {
        const globalOpts = globalOptsGetter();
        await handleApiCommand(tool, cmdOpts, globalOpts);
      });
    }
  }

  return platforms;
}

export function getToolDefs() {
  return toolDefs;
}

export function getDeduplicatedTools() {
  return deduplicateTools(toolDefs);
}

export function getPlatformMap() {
  const tools = deduplicateTools(toolDefs);
  const platforms = new Map();
  for (const tool of tools) {
    const { platform, action } = parseToolPath(tool.path);
    if (!platforms.has(platform)) platforms.set(platform, []);
    platforms.get(platform).push({ ...tool, _action: action });
  }
  return platforms;
}
