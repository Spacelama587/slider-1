import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '', // uses relative paths
  build: {
    rollupOptions: {
      input: ['index.html'].map(f => resolve(__dirname, f))
    }
  }
})