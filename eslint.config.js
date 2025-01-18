import path from "node:path";
import { fileURLToPath } from "node:url";
import { tanstackConfig } from "@tanstack/config/eslint";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import { includeIgnoreFile } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  includeIgnoreFile(gitignorePath),
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...tanstackConfig,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  eslintPluginJsxA11y.flatConfigs.recommended,
  {
    plugins: {
      "react-hooks": hooksPlugin,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",
    },
  },
  {
    // Custom rules go here
    ignores: ["eslint.config.js", "**/*.gen.ts"],
  },
];
