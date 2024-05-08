import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: './dist/',
    rollupOptions: {
      input: {
        app: './assets/scripts/main.js'
      },
      output: {
        sourceMap: true
      }
    }
  },
  plugins: [
  ],
});
