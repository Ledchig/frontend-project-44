import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js, '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/brace-style': ['error', '1tbs'],
    },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
]);
