import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import copy from 'rollup-plugin-copy';

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
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    ViteRestart({
      reload: ['./templates/**/*']
    }),
    ViteSvgSpriteWrapper({
      icons: 'assets/icons/*.svg',
      outputDir: './assets/sprite'
    }),
    copy({
      targets: [
        {
          src: 'assets/favicon',
          dest: './dist/'
        },
        {
          src: 'assets/fonts/**/*',
          dest: './dist/'
        },
        {
          src: 'assets/icons/**/*',
          dest: './dist/'
        },
        {
          src: 'assets/images',
          dest: './dist/'
        },
        {
          src: 'assets/sprite/sprite.svg',
          dest: './dist/'
        }
      ],
      hook: command === 'serve' ? 'buildStart' : 'writeBundle'
    }),
    {
      name: 'html-twig',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.html') || file.endsWith('.twig')) {
          server.ws.send({ type: 'full-reload', path: '*' });
        }
      }
    }
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
