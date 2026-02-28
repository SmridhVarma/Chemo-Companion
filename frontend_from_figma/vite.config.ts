import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Resolve Figma's custom asset imports to the local assets directory
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        timeout: 120000, // 2 min timeout for multi-agent pipeline
      },
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
