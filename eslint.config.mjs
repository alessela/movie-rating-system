import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"]
  },
  {
    languageOptions: { 
      globals: { ...globals.browser, process: "readonly" }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "error",
      "no-unused-vars": "off",
      "react/jsx-key": "off",
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
          paths: ["src"]
        },
      }
    }
  }
];