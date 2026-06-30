import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  // 使用相对路径，这样构建产物可以直接打开 index.html
  // 或部署到 GitHub Pages 子目录 (如 /repo-name/) 而不会 404
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    // 将所有 JS/CSS 内联到单个 HTML 文件中，
    // 这样双击 index.html 也能正常打开（不依赖 file:// 加载模块）
    viteSingleFile(),
  ],
  build: {
    // 内联所有资源，不生成单独的 assets 文件
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
})
