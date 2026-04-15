import chalk from "chalk";
import Table from "cli-table3";
import { closeSync, constants, existsSync, lstatSync, openSync, realpathSync, renameSync, unlinkSync, writeFileSync } from "fs";
import { basename, dirname, isAbsolute, relative, resolve } from "path";

const isTTY = process.stdout.isTTY;

// strips CSI, OSC, and single-character C1 escape sequences
const ANSI_RE = /[\x1b\x9b](?:\[[0-9;]*[A-Za-z]|\][^\x07\x1b]*(?:\x07|\x1b\\)?|[A-Z@[\\\]^_])/g;

export function stripAnsi(str) {
  return typeof str === "string" ? str.replace(ANSI_RE, "") : str;
}

export function sanitizeData(obj) {
  if (typeof obj === "string") return stripAnsi(obj);
  if (Array.isArray(obj)) return obj.map(sanitizeData);
  if (typeof obj === "object" && obj !== null) {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = sanitizeData(v);
    return out;
  }
  return obj;
}

export function safePath(outputPath) {
  if (!outputPath || !outputPath.trim()) {
    throw new Error("--output path cannot be empty");
  }

  const cwdReal = realpathSync(process.cwd());
  const resolved = resolve(outputPath);
  const parent = dirname(resolved);

  if (!existsSync(parent)) {
    throw new Error(`--output parent directory does not exist (got: ${outputPath})`);
  }

  const parentReal = realpathSync(parent);
  const dest = resolve(parentReal, basename(resolved));
  const rel = relative(cwdReal, dest);
  if (isAbsolute(rel) || rel.startsWith("..")) {
    throw new Error(`--output path must be within the current directory (got: ${outputPath})`);
  }

  if (existsSync(resolved) && lstatSync(resolved).isSymbolicLink()) {
    throw new Error(`--output path cannot be a symlink (got: ${outputPath})`);
  }

  return dest;
}

export function writeOutputFile(dest, output) {
  const noFollow = typeof constants.O_NOFOLLOW === "number" ? constants.O_NOFOLLOW : 0;
  const flags = constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | noFollow;
  let fd;

  try {
    fd = openSync(dest, flags, 0o600);
  } catch (err) {
    const noFollowUnsupported = noFollow && (
      err?.code === "EINVAL" ||
      err?.code === "ENOTSUP" ||
      err?.code === "EOPNOTSUPP"
    );
    if (noFollowUnsupported) {
      const tmpPath = `${dest}.${process.pid}.${Date.now()}.tmp`;
      writeFileSync(tmpPath, output, { encoding: "utf-8", mode: 0o600, flag: "wx" });
      try {
        if (existsSync(dest) && lstatSync(dest).isSymbolicLink()) {
          throw new Error("refusing to overwrite symlinked output path");
        }
        renameSync(tmpPath, dest);
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
    writeFileSync(fd, output, "utf-8");
  } finally {
    closeSync(fd);
  }
}

function redactUrlForLog(urlString) {
  try {
    const url = new URL(urlString);
    return `${url.origin}${url.pathname}`;
  } catch {
    return "(invalid request url)";
  }
}

export function resolveFormat(opts) {
  if (opts.pretty) return "pretty";
  if (opts.json) return "json";
  if (opts.format && opts.format !== "auto") return opts.format;
  return "json";
}

export function formatOutput(data, format, opts = {}) {
  const d = opts.clean && format !== "csv" ? cleanData(data) ?? {} : data;
  switch (format) {
    case "json":
      return JSON.stringify(d);
    case "pretty":
      return JSON.stringify(d, null, 2);
    case "table":
      return formatTable(d);
    case "csv":
      return formatCsv(data, opts);
    case "markdown":
      return formatMarkdown(d);
    default:
      return JSON.stringify(d);
  }
}

export function printResult(result, opts = {}) {
  const format = resolveFormat(opts);

  if (!result.ok) {
    printError(result, opts);
    return;
  }

  const output = formatOutput(sanitizeData(result.data), format, opts);

  if (opts.output) {
    const dest = safePath(opts.output);
    writeOutputFile(dest, output);
    console.log(opts.output);
    return;
  }

  console.log(output);

  if (opts.verbose && isTTY) {
    console.error(chalk.dim(`\n${result.status} ${redactUrlForLog(result.url)} (${result.elapsed}ms)`));
  }
}

export function printError(result, opts = {}) {
  const format = resolveFormat(opts);
  const data = sanitizeData(result.data);

  if (format === "json" || format === "pretty" || !isTTY) {
    const structured = {
      error: true,
      code: `HTTP_${result.status}`,
      message: typeof data === "object" ? data.message || data.error || JSON.stringify(data) : String(data),
      status: result.status,
      suggestion: getSuggestion(result.status),
    };
    console.error(JSON.stringify(structured, null, format === "pretty" ? 2 : 0));
  } else {
    console.error(chalk.red(`\nError ${result.status}: ${formatErrorMessage(data)}`));
    const suggestion = getSuggestion(result.status);
    if (suggestion) console.error(chalk.yellow(`Suggestion: ${suggestion}`));
  }

  process.exitCode = 1;
}

function getSuggestion(status) {
  switch (status) {
    case 401: return "Run 'scrapecreators auth login' to set your API key, or pass --api-key";
    case 402: return "No credits remaining. Purchase more at https://app.scrapecreators.com/billing";
    case 429: return "Rate limited. Wait a moment and retry.";
    case 404: return "Endpoint or resource not found. Run 'scrapecreators list' to see available endpoints.";
    default: return status >= 500 ? "Server error. Retry in a few seconds." : null;
  }
}

function formatErrorMessage(data) {
  if (typeof data === "string") return data;
  return data.message || data.error || JSON.stringify(data);
}

function isNoisy(key, value) {
  if (value === "" || value === null || value === undefined) return true;
  if (typeof value === "boolean") return true;
  if (typeof key === "string" && /setting/i.test(key)) return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if ((value === 0 || value === "0") && !/like|count|heart|follower|comment|repl|repost|post|tag|up|score|rat|view|down/i.test(key)) return true;
  return false;
}

function cleanData(obj) {
  if (Array.isArray(obj)) {
    const cleaned = obj.map(cleanData).filter((v) => v !== undefined);
    return cleaned.length ? cleaned : undefined;
  }
  if (typeof obj === "object" && obj !== null) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && value !== null) {
        const nested = cleanData(value);
        if (nested !== undefined) result[key] = nested;
      } else if (!isNoisy(key, value)) {
        result[key] = value;
      }
    }
    return Object.keys(result).length ? result : undefined;
  }
  return obj;
}

function flattenObject(obj, prefix = "") {
  const rows = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (isNoisy(key, value)) continue;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      rows.push(...flattenObject(value, fullKey));
    } else if (Array.isArray(value)) {
      rows.push([fullKey, `[${value.length} items]`]);
    } else {
      rows.push([fullKey, String(value)]);
    }
  }
  return rows;
}

function formatTable(data) {
  if (Array.isArray(data)) {
    if (data.length === 0) return chalk.dim("(empty array)");
    return formatArrayAsTable(data);
  }

  if (typeof data === "object" && data !== null) {
    const arrayKey = Object.keys(data).find((k) => Array.isArray(data[k]) && data[k].length > 0);
    if (arrayKey) {
      const meta = Object.entries(data)
        .filter(([k]) => k !== arrayKey)
        .map(([k, v]) => `${chalk.bold(k)}: ${typeof v === "object" ? JSON.stringify(v) : v}`)
        .join("  ");
      if (meta) console.error(chalk.dim(meta));
      return formatArrayAsTable(data[arrayKey]);
    }

    return formatObjectAsTable(data);
  }

  return String(data);
}

function formatArrayAsTable(arr) {
  const sample = arr[0];
  if (typeof sample !== "object" || sample === null) {
    return arr.map((v) => String(v)).join("\n");
  }

  const keys = Object.keys(sample).filter((k) => {
    const val = sample[k];
    return (typeof val !== "object" || val === null) && !isNoisy(k, val);
  }).slice(0, 10);

  if (keys.length === 0) return JSON.stringify(arr, null, 2);

  const table = new Table({
    head: keys.map((k) => chalk.cyan(k)),
    wordWrap: true,
    wrapOnWordBoundary: false,
  });

  for (const row of arr.slice(0, 50)) {
    table.push(keys.map((k) => truncate(String(row[k] ?? ""), 60)));
  }

  let out = table.toString();
  if (arr.length > 50) out += chalk.dim(`\n... and ${arr.length - 50} more rows`);
  return out;
}

function formatObjectAsTable(obj) {
  const rows = flattenObject(obj);
  const table = new Table();
  for (const [key, value] of rows) {
    table.push({ [chalk.cyan(key)]: truncate(value, 80) });
  }
  return table.toString();
}

function flattenForCsv(obj, prefix = "") {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenForCsv(value, fullKey));
    } else if (Array.isArray(value)) {
      result[fullKey] = JSON.stringify(value);
    } else {
      result[fullKey] = String(value ?? "");
    }
  }
  return result;
}

function flattenForCsvTrimmed(obj, prefix = "") {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (isNoisy(key, value)) continue;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenForCsvTrimmed(value, fullKey));
    } else if (Array.isArray(value)) {
      result[fullKey] = `[${value.length} items]`;
    } else {
      result[fullKey] = String(value ?? "");
    }
  }
  return result;
}

function extractRows(data) {
  if (Array.isArray(data)) return data;

  if (typeof data === "object" && data !== null) {
    const arrayKey = Object.keys(data).find(
      (k) => Array.isArray(data[k]) && data[k].length > 0 && typeof data[k][0] === "object"
    );
    if (arrayKey) {
      const meta = {};
      for (const [k, v] of Object.entries(data)) {
        if (k === arrayKey) continue;
        if (typeof v !== "object" || v === null) meta[k] = String(v ?? "");
      }
      return data[arrayKey].map((item) => ({ ...meta, ...item }));
    }
    return [data];
  }

  return null;
}

function formatCsv(data, opts = {}) {
  const rows = extractRows(data);
  if (!rows) return String(data ?? "");
  if (rows.length === 0) return "";

  const flatten = opts.clean ? flattenForCsvTrimmed : flattenForCsv;
  const flatRows = rows.map(flatten);

  const keySet = new Set();
  for (const r of flatRows) for (const k of Object.keys(r)) keySet.add(k);
  const keys = [...keySet];

  const header = keys.map(csvEscape).join(",");
  const lines = flatRows.map((row) =>
    keys.map((k) => csvEscape(row[k] ?? "")).join(",")
  );
  return [header, ...lines].join("\n");
}

function formatMarkdown(data) {
  if (Array.isArray(data) && data.length > 0 && typeof data[0] === "object") {
    const flatRows = data.slice(0, 100).map(flattenForCsv);
    const keys = Object.keys(flatRows[0]).slice(0, 10);

    const header = `| ${keys.join(" | ")} |`;
    const sep = `| ${keys.map(() => "---").join(" | ")} |`;
    const rows = flatRows.map((row) =>
      `| ${keys.map((k) => (row[k] ?? "").replace(/\|/g, "\\|")).join(" | ")} |`
    );
    return [header, sep, ...rows].join("\n");
  }

  if (typeof data === "object" && data !== null && !Array.isArray(data)) {
    const flat = flattenForCsv(data);
    const rows = Object.entries(flat).map(([k, v]) =>
      `| ${k} | ${v.replace(/\|/g, "\\|")} |`
    );
    return ["| Key | Value |", "| --- | --- |", ...rows].join("\n");
  }

  return "```json\n" + JSON.stringify(data, null, 2) + "\n```";
}

export function csvEscape(str) {
  const cell = /^[=+\-@\t\r]/.test(str) ? `'${str}` : str;
  if (cell.includes(",") || cell.includes('"') || cell.includes("\n")) {
    return `"${cell.replace(/"/g, '""')}"`;
  }
  return cell;
}

function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 1) + "…" : str;
}
