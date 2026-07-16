import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(
  await readFile(resolve(packageRoot, "package.json"), "utf8"),
);
const iconExport = packageJson.exports?.["./icons/*"];

assert.deepEqual(iconExport, {
  types: "./dist/components/*.d.ts",
  import: "./dist/components/*.mjs",
  require: "./dist/components/*.js",
});

const result = await build({
  absWorkingDir: packageRoot,
  stdin: {
    contents: `
      import BMWIcon from "@cardog-icons/react/icons/BMWIcon";
      console.log(BMWIcon);
    `,
    loader: "js",
    resolveDir: packageRoot,
  },
  bundle: true,
  external: ["react"],
  format: "esm",
  minify: true,
  platform: "browser",
  write: false,
});

const bundledBytes = result.outputFiles[0]?.contents.byteLength ?? Infinity;
assert.ok(
  bundledBytes <= 25_000,
  `A single icon produced a ${bundledBytes}-byte bundle; expected at most 25,000 bytes.`,
);

console.log(`Tree-shaking regression check passed (${bundledBytes} bytes).`);
