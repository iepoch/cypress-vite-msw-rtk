import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'development');
return {
  server: {port: 3000},
  build: {
    sourcemap: true,
  },
  plugins: [react(), tsconfigPaths(), TanStackRouterVite(),   
  EnvironmentPlugin('all',{ prefix: 'REACT_APP_' }),
  EnvironmentPlugin({APP_VERSION: 'development',}),
],
envPrefix:'REACT_APP_',
define: {
  'process.env.YOUR_STRING_VARIABLE': JSON.stringify(env.YOUR_STRING_VARIABLE),
  'process.env.YOUR_BOOLEAN_VARIABLE': env.YOUR_BOOLEAN_VARIABLE,
},

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
}
})