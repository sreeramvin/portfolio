import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                blog: resolve(__dirname, 'blog.html'),
                post1: resolve(__dirname, 'posts/welcome.html'),
                post2: resolve(__dirname, 'posts/tech-stack.html'),
            },
        },
    },
});
