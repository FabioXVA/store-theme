import js from "@eslint/js"
import tseslint from "typescript-eslint"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import importPlugin from "eslint-plugin-import"
import jsxA11y from "eslint-plugin-jsx-a11y"
import prettier from "eslint-plugin-prettier"
import unusedImports from "eslint-plugin-unused-imports"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import boundaries from "eslint-plugin-boundaries"

export default [
  {
    ignores: ["dist", "build", "coverage", "node_modules"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parserOptions: {
        project: "./tsconfig.app.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      prettier,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      boundaries,
    },

    rules: {
      /* 🔥 TYPESCRIPT RIGOR */
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/consistent-type-imports": "error",

      /* 🔥 REMOVE IMPORTS MORTOS */
      "unused-imports/no-unused-imports": "error",

      /* 🔥 REACT */
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-key": "error",

      /* 🔥 HOOKS */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      /* 🔥 IMPORTS ORGANIZADOS */
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/no-cycle": "error",

      /* 🔥 CLEAN CODE */
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      /* 🔥 PRETTIER */
      "prettier/prettier": "error",
    },
  },
]