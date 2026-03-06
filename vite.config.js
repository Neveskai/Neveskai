import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Obrigatório para GitHub Pages: site fica em https://neveskai.github.io/Neveskai/
  base: '/Neveskai/',
})
