import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    target: "es2020",
    lib: {
      entry:'src/main.tsx',
      formats: ['es','cjs']
    }
  }
})
