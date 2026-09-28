import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages 项目站：https://purestone.github.io/journey/
// 本地开发仍用根路径 /
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/journey/' : '/',
  plugins: [react(), tailwindcss()],
})
