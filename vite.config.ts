
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Polyfill process.env for the browser environment as required by the Gemini SDK guidelines
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
