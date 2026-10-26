import { defineConfig } from 'astro/config'

// GitHub Pages: sitio de proyecto en https://juanezzzzz.github.io/gamerzone/
export default defineConfig({
  site: 'https://juanezzzzz.github.io',
  base: '/gamerzone',
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  // El chunk de la apertura incluye Three.js (~640 KB sin comprimir): es esperado
  vite: { build: { chunkSizeWarningLimit: 700 } },
})
