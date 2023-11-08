import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
    open: true,
  },
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@core' : path.resolve(__dirname, './src/core'),
      '@infrastructure' : path.resolve(__dirname, './src/infrastructure'),
      '@presentation' : path.resolve(__dirname, './src/presentation'),
    },
  },
})