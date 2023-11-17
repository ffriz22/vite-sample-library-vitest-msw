/// <reference types="vitest" />
/// <reference types="vite/client" />
// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "sample-library",
      fileName: "sample-library",
    },
  },
  plugins: [dts(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/utils/setup.ts"],
  },
});
