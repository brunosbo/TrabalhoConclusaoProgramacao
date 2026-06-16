import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // Isto avisa o ESLint que você usa import/export
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha // Adicionado para ele reconhecer os testes do Mocha
      }
    }
  }
];
