// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                exercise1: resolve(__dirname, 'exercise1/index.html'),
                exercise2: resolve(__dirname, 'exercise2/index.html'),
                exercise3: resolve(__dirname, 'exercise3/index.html')
            }
        }
    }
})
