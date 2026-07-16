import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(packageRoot, "dist");
const relativeImportPattern =
  /((?:from\s+|import\s*)["'])(\.{1,2}\/[^"']+)(["'])/g;

function listModules(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory()
      ? listModules(path)
      : path.endsWith(".mjs")
        ? [path]
        : [];
  });
}

function resolveEsmSpecifier(modulePath, specifier) {
  if (/\.(?:mjs|js|json)$/.test(specifier)) {
    return specifier;
  }

  const target = resolve(dirname(modulePath), specifier);
  if (existsSync(`${target}.mjs`)) {
    return `${specifier}.mjs`;
  }
  if (existsSync(join(target, "index.mjs"))) {
    return `${specifier}/index.mjs`;
  }

  throw new Error(`Cannot resolve ESM import ${specifier} from ${modulePath}`);
}

for (const modulePath of listModules(distDir)) {
  const source = readFileSync(modulePath, "utf8");
  const rewritten = source.replace(
    relativeImportPattern,
    (_, prefix, specifier, suffix) =>
      `${prefix}${resolveEsmSpecifier(modulePath, specifier)}${suffix}`,
  );
  writeFileSync(modulePath, rewritten);
}
