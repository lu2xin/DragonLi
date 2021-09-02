/* eslint-env node */
import { chrome } from '../../electron-vendors.config.json';
import { join } from 'path';
import { builtinModules } from 'module';
import vue from '@vitejs/plugin-vue';
import { BUILD_ROOT } from '../../vite.config.global'
import { resolve } from 'path';

const PACKAGE_ROOT = __dirname;

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/',
      '/MK/': join(PACKAGE_ROOT, 'markdown', 'src') + '/'
    },
  },
  plugins: [vue()],
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: `${BUILD_ROOT}/renderer`,
    assetsDir: '.',
    terserOptions: {
      ecma: 2020,
      compress: {
        passes: 2,
      },
      safari10: false,
    },
    rollupOptions: {
      external: [
        ...builtinModules,
      ],
      input: {
        index: resolve(__dirname, 'index.html'),
        markdown: resolve(__dirname, 'markdown/index.html'),
      }
    },
    emptyOutDir: true,
    brotliSize: false,
  },
};

export default config;
