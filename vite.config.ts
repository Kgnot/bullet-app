import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["chart.js"]
  },
  plugins: [react()],
  base: './',
  build: {
    outDir: "dist-react",
  },
  server : {
    port: 5173,
    strictPort:true,
  }
})
