// vite.config.ts (Corrected and Simplified)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This tells Vite that your project's code is in the 'client' folder.
  root: 'client',

  plugins: [react()],

  // This is the critical line that tells Vite your GitHub pages URL.
  base: '/Gemgemgemgame/',

  build: {
    // This tells Vite to put the final built files into a 'dist' folder
    // inside the 'client' folder. The path will be 'client/dist'.
    outDir: 'dist',
    emptyOutDir: true,
  },
});