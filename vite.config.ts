import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@views': path.resolve(__dirname, 'src/views')
    },
  },
  server: {
    port: 7456, // 将端口号改为你想要的，例如3000
    allowedHosts: ['frp.haoyang.asia'], // 添加允许的主机
    host: '::' // 监听所有网络接口，包括IPv6
  }
})
