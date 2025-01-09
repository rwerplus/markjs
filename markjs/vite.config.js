// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: {
        'markjs': resolve(__dirname, './src/index.js'),
        'plugins/edit': resolve(__dirname, './src/plugins/edit.js'),
        'plugins/img': resolve(__dirname, './src/plugins/img.js'),
        'plugins/mouse': resolve(__dirname, './src/plugins/mouse.js'),
        'plugins/order': resolve(__dirname, './src/plugins/order.js'),
        'plugins/scale': resolve(__dirname, './src/plugins/scale.js'),
        'plugins/shape': resolve(__dirname, './src/plugins/shape.js')
      },
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
        }
      }
    }
  }
})