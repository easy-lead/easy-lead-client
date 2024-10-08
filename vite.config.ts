import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/app'),
            features: path.resolve(__dirname, 'src/features'),
            pages: path.resolve(__dirname, 'src/pages'),
            shared: path.resolve(__dirname, 'src/shared'),
        },
    },
})
