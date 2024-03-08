import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  server: {port: 4800},
  build: {
    sourcemap: true,
  },
  plugins: [react(), tsconfigPaths(), TanStackRouterVite(),],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      models: path.resolve(__dirname, 'src', 'models'),
      "msw/native": path.resolve(__dirname, "./node_modules/msw/lib/native/index.mjs"),
      '@support': path.resolve(__dirname, 'cypress', 'support'),
      '@fixtures': path.resolve(__dirname, 'cypress', 'fixtures'),
      '@cypress': path.resolve(__dirname, 'cypress'),
    },
  },
})