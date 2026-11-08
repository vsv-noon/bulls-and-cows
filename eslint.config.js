import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist']),
  {
    ignores: ['coverage/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,ts}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    linterOptions: {
      noInlineConfig: true,
    },
  },
  {
    ignores: ['dist/', 'coverage/', 'node_modules/'],
  },
]);
