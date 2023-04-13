import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: 'esbuild'
  },
  esbuild: {
    pure: ['console.assert']
  }
})