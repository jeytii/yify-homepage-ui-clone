import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import postCssColorMod from 'postcss-color-mod-function';
import postCssPresetEnv from 'postcss-preset-env';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    css: {
        postcss: {
            plugins: [
                postCssPresetEnv({
                    stage: 3,
                    features: {
                        'nesting-rules': true,
                    },
                }),
                postCssColorMod(),
            ],
        },
    },
    server: {
        open: false,
        port: 3000,
    },
    resolve: {
        alias: {
            '~': join(__dirname, 'src'),
            '@': join(__dirname, 'src/components'),
        },
    },
});
