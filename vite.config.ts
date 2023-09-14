import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'IMG_0003.jpeg') {
            return 'TOTO.jpeg';
          }
          // Pour les autres fichiers, utilisez le comportement par défaut
          return `[name].[hash][extname]`;
        },
      },
    },
  },
});
