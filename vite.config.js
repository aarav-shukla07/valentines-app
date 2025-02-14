import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5743-2405-201-6024-81e-a701-debc-32a0-d8a2.ngrok-free.app'
    ]
  }
})
