// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './', // root folder gde je index.html
  build: {
    outDir: 'dist', // gde će build ići
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
      '@': path.resolve(__dirname, 'src'), // optional @ import
    },
  },
});
