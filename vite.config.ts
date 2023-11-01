import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@core' : path.resolve(__dirname, './src/core'),
      '@infrastructure' : path.resolve(__dirname, './src/infrastructure'),
      '@presentation' : path.resolve(__dirname, './src/presentation'),
    },
  },
})