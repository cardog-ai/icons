import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/types.ts",
    "src/components/**/*.tsx",
    "src/components/index.ts",
    "src/hooks/**/*.ts",
  ],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react"],
  bundle: false,
  splitting: false,
  clean: true,
  outExtension({ format }) {
    return { js: format === "esm" ? ".mjs" : ".js" };
  },
});
