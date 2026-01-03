import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      external: [
        '@noble/curves',
        '@noble/hashes',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // Force Vite to use CJS entry for semver to avoid ESM resolution issues
      semver: path.resolve(__dirname, 'node_modules/semver/classes/semver.js'),
    },
  },
});
