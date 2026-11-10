/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  base: '/bulls-and-cows/',
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    globals: true,
    include: ['src/**/*.{test,spec}.ts'],
    exclude: ['node_modules', 'dist'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{js,ts}'],
      exclude: [
        'node_modules',
        'dist',
        'types',
        '**/config.*',
        '**/*.d.ts',
        '**/*.config.*',
        '**/*.types.*',
        '**/consts.*',
        '**/constants.*',
        '**/*.test.ts',
        '**/index.ts',
      ],
      thresholds: {
        statements: 80,
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
  },
});
