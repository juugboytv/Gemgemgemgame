// vite.config.ts (Final Version for Deployment)

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(import.meta.dirname, 'client'),
  plugins: [react()],
  base: '/Gemgemgemgame/', // IMPORTANT: I changed this to match your likely repo name. If your GitHub repo has a different name, change it here.

  build: {
    // Build output will be in 'client/dist'. This is standard.
    outDir: path.resolve(import.meta.dirname, 'client', 'dist'),
    emptyOutDir: true,
  },
});
