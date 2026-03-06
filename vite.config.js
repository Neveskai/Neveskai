import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Caminhos relativos para funcionar no GitHub Pages (https://neveskai.github.io/Neveskai/)
  base: './',
})
