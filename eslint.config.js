import { tanstackConfig } from "@tanstack/config/eslint";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
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
  reactRefresh.configs.vite,
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    // Custom rules go here
    ignores: [".output/*", ".vinxi/*"],
  },
];
