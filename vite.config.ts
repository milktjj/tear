import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import globalstyle from '@originjs/vite-plugin-global-style';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), reactRefresh(), globalstyle({
        sourcePath: './src/assets/css',
        lessEnabled: true
    })],
})
