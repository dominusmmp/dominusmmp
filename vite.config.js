const { resolve, join } = require('path');
const { sync } = require('glob');

export default {
    // root: join(__dirname, "src"),
    build: {
        // outDir: join(__dirname, "dist"),
        // emptyOutDir: true,
        // publicDir: join(__dirname, "src", "public"), // Default: "<root>/public"
        assetsInlineLimit: 0,
        sourcemap: false,
        rollupOptions: {
            input: "./index.html",
            // input: sync(resolve(__dirname, "*.html")),
            output: {
                entryFileNames: `assets/js/[name].js`,
                chunkFileNames: `assets/js/[name].js`,
                assetFileNames: `assets/css/[name].[ext]`,
                manualChunks: {},
            }
        },
    },
    base: "./",
}