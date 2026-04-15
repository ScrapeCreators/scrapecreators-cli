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

import { safePath, writeOutputFile, csvEscape } from "../src/output.js";
import { maskKey } from "../src/auth.js";
import { resolveConfigPath, secureWriteJson } from "../src/commands/agent.js";

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
