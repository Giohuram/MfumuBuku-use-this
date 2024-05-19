import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/logout': {
        target: 'https://mfumubuku-kids.onrender.com', // URL de votre backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'build' // Spécifiez ici le répertoire de publication souhaité
  }
});
