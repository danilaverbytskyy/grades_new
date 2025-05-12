import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import('dotenv').then((_) => _.config());

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['tests/**/*spec.js'],
        exclude: ['tests/e2e'],
        alias: {
            '@': path.resolve(__dirname, './src'),
            '~': 'tests',
        },
        reporters: ['junit'],
        outputFile: 'vitest/report/result.xml',
        setupFiles: ['./tests/setup.js'],
    },
});
