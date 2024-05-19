import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change 'dist' to 'build'
  },
  server: {
    proxy: {
      '/logout': {
        target: 'https://mfumubuku-kids.onrender.com', // URL de votre backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

