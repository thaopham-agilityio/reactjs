import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      constants: path.resolve(__dirname, './src/constants'),
      layouts: path.resolve(__dirname, './src/layouts'),
      helpers: path.resolve(__dirname, './src/helpers'),
      interface: path.resolve(__dirname, './src/interface'),
      services: path.resolve(__dirname, './src/services'),
      hooks: path.resolve(__dirname, './src/hooks'),
      image: path.resolve(__dirname, './src/assets/images'),
      stylesheets: path.resolve(__dirname, './src/assets/stylesheets'),
    },
  },
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all')],
})
