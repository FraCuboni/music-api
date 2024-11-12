import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Puoi anche aggiungere variabili globali qui se necessario
        // esempio: additionalData: `@import './src/styles/variables.scss';`
      },
    },
  },
})