import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Restaurante',
        short_name: 'Restaurante',
        description: 'Aplicación del restaurante para realizar pedidos online.',
        theme_color: 'transparent',
        background_color: '#99F6E4',
        icons: [
          {
            src: 'assets/vite.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/vite.svg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
