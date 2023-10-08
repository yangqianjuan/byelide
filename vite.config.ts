import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import veauryVitePlugins from 'veaury/vite/index.js'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    // vueJsx(),
    veauryVitePlugins({
      type: 'vue'
    })
  ],
  server: {
    host: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
