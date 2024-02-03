import { resolve } from 'path'
import { defineConig } from 'vite'

const root = resolvel(__dirname, 'src')
const outDir = resolvel(__dirname, 'dist')

export default defineConig ({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
        input: {
            main: resolve(root, 'index.html'),
            // nested: resolve(root, 'nested/index.html'),
        },
        },
    },
    server: {
        port: 3000,
    },
})