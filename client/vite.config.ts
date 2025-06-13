import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003, // ya se abrió este
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // cambia según el puerto real de tu backend
        changeOrigin: true,
        rewrite: (path) => path,
      }
    }
  }
});
