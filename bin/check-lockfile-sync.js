#!/usr/bin/env node
import { readFileSync } from "fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf-8"));
}

function normalizeDeps(deps) {
  return Object.fromEntries(Object.entries(deps || {}).sort(([a], [b]) => a.localeCompare(b)));
}

const pkg = readJson(new URL("../package.json", import.meta.url));
const lock = readJson(new URL("../package-lock.json", import.meta.url));

const pkgDeps = normalizeDeps(pkg.dependencies);
const lockDeps = normalizeDeps(lock?.packages?.[""]?.dependencies);

const errors = [];

for (const [name, version] of Object.entries(pkgDeps)) {
  if (!(name in lockDeps)) {
    errors.push(`missing in lockfile root deps: ${name}`);
    continue;
  }
  if (lockDeps[name] !== version) {
    errors.push(`version mismatch for ${name}: package.json=${version}, package-lock.json=${lockDeps[name]}`);
  }
}

for (const name of Object.keys(lockDeps)) {
  if (!(name in pkgDeps)) {
    errors.push(`extra lockfile root dependency not in package.json: ${name}`);
  }
}

if (errors.length > 0) {
  console.error("lockfile check failed:");
  for (const err of errors) console.error(`- ${err}`);
  process.exit(1);
}

console.log("lockfile check passed.");
