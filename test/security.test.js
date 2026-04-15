import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from "fs";
import { join, resolve } from "path";
import { tmpdir } from "os";

import { safePath, writeOutputFile, csvEscape, stripAnsi, sanitizeData } from "../src/output.js";
import { maskKey } from "../src/auth.js";
import { resolveConfigPath, secureWriteJson, ensureGitignore } from "../src/commands/agent.js";
import { readBodyWithLimit, MAX_RESPONSE_BYTES } from "../src/api-client.js";

// ---------- safePath ----------

describe("safePath", () => {
  let originalCwd;
  let tempDir;

  beforeEach(() => {
    originalCwd = process.cwd();
    tempDir = mkdtempSync(join(tmpdir(), "sc-test-"));
    process.chdir(tempDir);
  });

  afterEach(() => {
    process.chdir(originalCwd);
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("accepts a valid filename in cwd", () => {
    const result = safePath("output.json");
    expect(result).toBe(resolve(tempDir, "output.json"));
  });

  it("accepts a file in a subdirectory", () => {
    mkdirSync(join(tempDir, "sub"));
    const result = safePath("sub/data.json");
    expect(result).toBe(resolve(tempDir, "sub", "data.json"));
  });

  it("rejects empty string", () => {
    expect(() => safePath("")).toThrow("cannot be empty");
  });

  it("rejects whitespace-only string", () => {
    expect(() => safePath("   ")).toThrow("cannot be empty");
  });

  it("rejects null/undefined", () => {
    expect(() => safePath(null)).toThrow("cannot be empty");
    expect(() => safePath(undefined)).toThrow("cannot be empty");
  });

  it("rejects ../ traversal", () => {
    expect(() => safePath("../escape.json")).toThrow("within the current directory");
  });

  it("rejects deeply nested traversal", () => {
    mkdirSync(join(tempDir, "a"));
    expect(() => safePath("a/../../escape.json")).toThrow("within the current directory");
  });

  it("rejects absolute path outside cwd", () => {
    expect(() => safePath("/tmp/evil.json")).toThrow("within the current directory");
  });

  it("rejects non-existent parent directory", () => {
    expect(() => safePath("no/such/dir/file.json")).toThrow("parent directory does not exist");
  });

  it("rejects symlinked output path", () => {
    const real = join(tempDir, "real.json");
    writeFileSync(real, "{}");
    symlinkSync(real, join(tempDir, "link.json"));
    expect(() => safePath("link.json")).toThrow("cannot be a symlink");
  });
});

// ---------- writeOutputFile ----------

describe("writeOutputFile", () => {
  let tempDir;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), "sc-test-write-"));
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("writes content and sets 0o600 permissions", () => {
    const dest = join(tempDir, "out.json");
    writeOutputFile(dest, '{"ok":true}');

    expect(readFileSync(dest, "utf-8")).toBe('{"ok":true}');
    const mode = statSync(dest).mode & 0o777;
    expect(mode).toBe(0o600);
  });

  it("overwrites an existing file", () => {
    const dest = join(tempDir, "out.json");
    writeFileSync(dest, "old");
    writeOutputFile(dest, "new");
    expect(readFileSync(dest, "utf-8")).toBe("new");
  });

  it("writes empty string without error", () => {
    const dest = join(tempDir, "empty.json");
    writeOutputFile(dest, "");
    expect(readFileSync(dest, "utf-8")).toBe("");
  });
});

// ---------- csvEscape ----------

describe("csvEscape", () => {
  it("passes through a normal string", () => {
    expect(csvEscape("hello")).toBe("hello");
  });

  it.each([
    ["=CMD()", "'=CMD()"],
    ["+CMD()", "'+CMD()"],
    ["-CMD()", "'-CMD()"],
    ["@SUM(A1)", "'@SUM(A1)"],
    ["\tcmd", "'\tcmd"],
    ["\rcmd", "'\rcmd"],
  ])("prefixes formula trigger: %s", (input, expected) => {
    expect(csvEscape(input)).toBe(expected);
  });

  it("quotes strings containing commas", () => {
    expect(csvEscape("a,b")).toBe('"a,b"');
  });

  it("escapes embedded double quotes", () => {
    expect(csvEscape('say "hi"')).toBe('"say ""hi"""');
  });

  it("quotes strings containing newlines", () => {
    expect(csvEscape("line1\nline2")).toBe('"line1\nline2"');
  });

  it("applies formula prefix then quoting when both needed", () => {
    expect(csvEscape("=1+1,more")).toBe("\"'=1+1,more\"");
  });
});

// ---------- maskKey ----------

describe("maskKey", () => {
  it("returns '(not set)' for falsy values", () => {
    expect(maskKey(null)).toBe("(not set)");
    expect(maskKey("")).toBe("(not set)");
    expect(maskKey(undefined)).toBe("(not set)");
  });

  it("masks short key (<=12 chars): first 2 + last 2", () => {
    expect(maskKey("abcdef")).toBe("ab…ef");
    expect(maskKey("123456789012")).toBe("12…12");
  });

  it("masks long key (>12 chars): first 6 + last 4", () => {
    expect(maskKey("sk-live-1234567890abcdef")).toBe("sk-liv…cdef");
    expect(maskKey("1234567890123")).toBe("123456…0123");
  });

  it("never leaks full key in output", () => {
    const key = "sk-live-supersecretvalue1234";
    const masked = maskKey(key);
    expect(masked).not.toBe(key);
    expect(masked.length).toBeLessThan(key.length);
  });
});

// ---------- resolveConfigPath ----------

describe("resolveConfigPath", () => {
  let tempDir;
  let savedExitCode;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), "sc-test-cfg-"));
    savedExitCode = process.exitCode;
  });

  afterEach(() => {
    process.exitCode = savedExitCode;
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("accepts a valid path within the base directory", () => {
    const configPath = join(tempDir, ".cursor", "mcp.json");
    const result = resolveConfigPath(configPath, tempDir, "Test");
    expect(result).toBe(resolve(configPath));
  });

  it("returns null for null/undefined inputs", () => {
    expect(resolveConfigPath(null, tempDir, "Test")).toBeNull();
    expect(resolveConfigPath(join(tempDir, "x"), null, "Test")).toBeNull();
  });

  it("rejects path outside the base directory", () => {
    const outside = join(tmpdir(), "elsewhere", "mcp.json");
    const result = resolveConfigPath(outside, tempDir, "Test");
    expect(result).toBeNull();
  });

  it("rejects symlinked config path", () => {
    const real = join(tempDir, "real.json");
    writeFileSync(real, "{}");
    const link = join(tempDir, "link.json");
    symlinkSync(real, link);

    const result = resolveConfigPath(link, tempDir, "Test");
    expect(result).toBeNull();
  });
});

// ---------- secureWriteJson ----------

describe("secureWriteJson", () => {
  let tempDir;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), "sc-test-sw-"));
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("creates a file with 0o600 permissions", () => {
    const dest = join(tempDir, "config.json");
    secureWriteJson(dest, '{"key":"val"}\n');

    expect(readFileSync(dest, "utf-8")).toBe('{"key":"val"}\n');
    const mode = statSync(dest).mode & 0o777;
    expect(mode).toBe(0o600);
  });

  it("overwrites existing content", () => {
    const dest = join(tempDir, "config.json");
    writeFileSync(dest, "old");
    secureWriteJson(dest, "new");
    expect(readFileSync(dest, "utf-8")).toBe("new");
  });

  it("refuses to write through a symlink (O_NOFOLLOW)", () => {
    const real = join(tempDir, "real.json");
    writeFileSync(real, "{}");
    const link = join(tempDir, "link.json");
    symlinkSync(real, link);

    // O_NOFOLLOW causes ELOOP on linux when target is a symlink
    expect(() => secureWriteJson(link, "evil")).toThrow();
    // original file should be unchanged
    expect(readFileSync(real, "utf-8")).toBe("{}");
  });
});

// ---------- ensureGitignore ----------

describe("ensureGitignore", () => {
  let tempDir;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), "sc-test-gi-"));
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("returns null when not inside a git repo", () => {
    const configPath = join(tempDir, ".cursor", "mcp.json");
    expect(ensureGitignore(configPath)).toBeNull();
  });

  it("creates .gitignore entry when inside a git repo", () => {
    mkdirSync(join(tempDir, ".git"));
    const configPath = join(tempDir, ".cursor", "mcp.json");

    const result = ensureGitignore(configPath);
    expect(result).toBe(".cursor/mcp.json");

    const content = readFileSync(join(tempDir, ".gitignore"), "utf-8");
    expect(content).toContain(".cursor/mcp.json");
  });

  it("appends to existing .gitignore without duplicating", () => {
    mkdirSync(join(tempDir, ".git"));
    writeFileSync(join(tempDir, ".gitignore"), "node_modules/\n");
    const configPath = join(tempDir, ".cursor", "mcp.json");

    ensureGitignore(configPath);
    const result2 = ensureGitignore(configPath);

    expect(result2).toBeNull();
    const lines = readFileSync(join(tempDir, ".gitignore"), "utf-8").split("\n");
    const matches = lines.filter((l) => l.trim() === ".cursor/mcp.json");
    expect(matches).toHaveLength(1);
  });

  it("skips if entry is already present", () => {
    mkdirSync(join(tempDir, ".git"));
    writeFileSync(join(tempDir, ".gitignore"), ".cursor/mcp.json\n");
    const configPath = join(tempDir, ".cursor", "mcp.json");

    expect(ensureGitignore(configPath)).toBeNull();
  });

  it("handles .gitignore without trailing newline", () => {
    mkdirSync(join(tempDir, ".git"));
    writeFileSync(join(tempDir, ".gitignore"), "node_modules/");
    const configPath = join(tempDir, ".cursor", "mcp.json");

    ensureGitignore(configPath);
    const content = readFileSync(join(tempDir, ".gitignore"), "utf-8");
    expect(content).toBe("node_modules/\n.cursor/mcp.json\n");
  });
});

// ---------- readBodyWithLimit ----------

function fakeResponse(body, contentLength) {
  const encoder = new TextEncoder();
  const chunks = typeof body === "string" ? [encoder.encode(body)] : body;
  return {
    headers: {
      get(name) {
        if (name === "content-length" && contentLength !== undefined) return String(contentLength);
        return null;
      },
    },
    body: (async function* () { for (const c of chunks) yield c; })(),
  };
}

describe("readBodyWithLimit", () => {
  it("reads a normal response", async () => {
    const res = fakeResponse('{"ok":true}');
    const text = await readBodyWithLimit(res);
    expect(text).toBe('{"ok":true}');
  });

  it("rejects when content-length header exceeds limit", async () => {
    const res = fakeResponse("x", MAX_RESPONSE_BYTES + 1);
    await expect(readBodyWithLimit(res)).rejects.toThrow("Content-Length");
  });

  it("rejects when streamed body exceeds limit", async () => {
    const chunk = new Uint8Array(1024 * 1024); // 1 MB
    const chunks = Array.from({ length: 52 }, () => chunk); // 52 MB
    const res = fakeResponse(chunks);
    await expect(readBodyWithLimit(res)).rejects.toThrow("body exceeded");
  });

  it("accepts response exactly at limit", async () => {
    const buf = Buffer.alloc(128, 0x41); // small buffer, well under limit
    const res = fakeResponse([buf]);
    const text = await readBodyWithLimit(res);
    expect(text).toHaveLength(128);
  });

  it("reads empty body without error", async () => {
    const res = fakeResponse("");
    const text = await readBodyWithLimit(res);
    expect(text).toBe("");
  });
});

// ---------- stripAnsi ----------

describe("stripAnsi", () => {
  it("passes through a clean string", () => {
    expect(stripAnsi("hello world")).toBe("hello world");
  });

  it("strips CSI color codes", () => {
    expect(stripAnsi("\x1b[31mred text\x1b[0m")).toBe("red text");
  });

  it("strips cursor movement sequences", () => {
    expect(stripAnsi("\x1b[2Jcleared\x1b[H")).toBe("cleared");
  });

  it("strips OSC title-set sequences (BEL terminated)", () => {
    expect(stripAnsi("\x1b]0;evil title\x07safe")).toBe("safe");
  });

  it("strips OSC title-set sequences (ST terminated)", () => {
    expect(stripAnsi("\x1b]0;evil title\x1b\\safe")).toBe("safe");
  });

  it("returns non-string values unchanged", () => {
    expect(stripAnsi(42)).toBe(42);
    expect(stripAnsi(null)).toBe(null);
    expect(stripAnsi(undefined)).toBe(undefined);
  });
});

// ---------- sanitizeData ----------

describe("sanitizeData", () => {
  it("strips ANSI from a plain string", () => {
    expect(sanitizeData("\x1b[31mhello\x1b[0m")).toBe("hello");
  });

  it("strips ANSI from nested object values", () => {
    const input = { name: "\x1b[1mbold\x1b[0m", meta: { bio: "\x1b[32mgreen\x1b[0m" } };
    expect(sanitizeData(input)).toEqual({ name: "bold", meta: { bio: "green" } });
  });

  it("strips ANSI from strings inside arrays", () => {
    const input = ["\x1b[31mred\x1b[0m", "\x1b[34mblue\x1b[0m"];
    expect(sanitizeData(input)).toEqual(["red", "blue"]);
  });

  it("strips ANSI from mixed nested structures", () => {
    const input = {
      users: [
        { handle: "alice", bio: "\x1b]0;pwned\x07real bio" },
        { handle: "bob", bio: "clean" },
      ],
      count: 2,
    };
    expect(sanitizeData(input)).toEqual({
      users: [
        { handle: "alice", bio: "real bio" },
        { handle: "bob", bio: "clean" },
      ],
      count: 2,
    });
  });

  it("preserves non-string primitives", () => {
    expect(sanitizeData(42)).toBe(42);
    expect(sanitizeData(true)).toBe(true);
    expect(sanitizeData(null)).toBe(null);
  });
});
