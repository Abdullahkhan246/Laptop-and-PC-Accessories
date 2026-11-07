import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config - React plugin only, nothing else needed for this frontend project
export default defineConfig({
  plugins: [react()],
})
