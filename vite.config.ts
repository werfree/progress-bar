import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import * as packageJson from "./package.json";
import string from "vite-plugin-string";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[local]__[hash:base64:5]",
    },
  },
  build: {
    lib: {
      entry: resolve("src", "main.ts"),
      name: "progress-bar",
      formats: ["es", "umd"],
      fileName: (format) => `progress-bar.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        // Specify globals for external dependencies here
        globals: {
          react: "React",
        },
      },
    },
    // emptyOutDir: false,
  },
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      outDir: "dist/types",
      include: ["src"],
    }),
    string({
      include: "**/*.css",
    }),
  ],
});
