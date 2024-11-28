import react from '@vitejs/plugin-react';
import path from 'path';
import analyze from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const ANALYZE_BUNDLE = true;

const root = path.resolve(process.cwd(), '.');
const cwd = path.resolve(process.cwd(), '../');

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      target: 'esnext',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/@babylonjs')) {
              return 'babylonjs';
            }
          },
        },
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCase', // Optional: Converts dashes to camelCase
      },
    },
    plugins: [
      tsconfigPaths({
        loose: true,
        root: `${root}/dev`,
      }),
      svgr(),
      react(),
      visualizer(),
    ],
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
    },
    resolve: {
      alias: {
        'shared-base': `${cwd}/packages/shared-base/src`,
        'redux-connected': `${cwd}/packages/redux-connected/src`,
        'redux-store-generator': `${cwd}/packages/redux-store-generator/src`,
        'react-redux/(.*)': `${cwd}node_modules/react-redux/$1`,
        'react/(.*)': `${cwd}node_modules/react/$1`,
        'react-dom/(.*)': `${cwd}node_modules/react-dom/$1`,
      },
    },
    define: {},
    server: {
      host: true,
      port: 3000,
      hmr: {
        overlay: false,
      },
      proxy: {},
    },
  };
});
