import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // listen on 0.0.0.0 so you can reach it from host
    watch: {
      usePolling: true,    // required for docker on windows/mac
      interval: 100,       // adjust if CPU gets too high
    },
  },
})

