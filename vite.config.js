import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    build: {
        target: 'ESNext',
    },
    plugins: [vue(), eslintPlugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        proxy: {
            '^/api|^/websocket': {
                target: 'http://178.154.199.253/dsks-cmw',
                ws: true,
                changeOrigin: true,
                auth: ':',
            },
        },
    },
    define: {
        'process.env': process.env,
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
    },
});
