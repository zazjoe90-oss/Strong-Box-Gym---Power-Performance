import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Stringify the API key to ensure it is injected as a valid JS string
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000 // Increase limit to handle larger React 19 / Lucide bundles
  },
  server: {
    port: 3000,
    strictPort: true
  }
});