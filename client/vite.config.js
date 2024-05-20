import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Assurez-vous que le répertoire de sortie est bien "build"
    chunkSizeWarningLimit: 1000, // Ajustez la limite de taille des chunks si nécessaire
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'landingpage': ['./src/LandingPage/Landingpage.jsx'],
          // Ajoutez d'autres chunks personnalisés si nécessaire
        },
      },
    },
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
