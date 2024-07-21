import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
    },
  },
},
  plugins: [react(),
    nodePolyfills({
      include: ['crypto', 'process', 'stream', 'util'],
      globals: { global: true, process: true },
    }),      
  ],
})
