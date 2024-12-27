import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    rules: {
      "react/react-in-jsx-scope": "off", // Desabilita a regra que exige React no escopo
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "eqeqeq": "error",
      "no-console": "warn", // Avise sobre console.log, pode ser útil apenas em debug
      "curly": "error", // Exige o uso de chaves em blocos (if, for, etc.)
      "no-shadow": "warn", // Evita variáveis que sombreiam outras no escopo externo
      "no-var": "error", // Incentiva o uso de let/const em vez de var
      "prefer-const": "warn", // Sugere const para variáveis não reassinadas
      "no-debugger": "warn", // Evita deixar o debugger no código
      "arrow-body-style": ["warn", "as-needed"], // Usa corpo de arrow functions apenas quando necessário

    },
  }
];