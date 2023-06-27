// vite.config.js
import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    reactPlugin()
  ],
  build: {
    outDir: 'dist/client'
  }
})
