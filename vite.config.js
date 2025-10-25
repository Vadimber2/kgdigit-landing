import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // Brotli compression for production
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024, // Only compress files > 1KB
      deleteOriginFile: false
    }),

    // Gzip compression as fallback
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false
    })
  ],

  build: {
    // Minification options
    minify: 'esbuild',
    cssMinify: 'esbuild',

    // Rollup options for optimization
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunk for React and core libraries
          'vendor': [
            'react',
            'react-dom',
            'react/jsx-runtime'
          ],
          // Icons separately (lucide-react is big)
          'icons': ['lucide-react']
        },

        // Better chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },

    // Target modern browsers for smaller bundle
    target: 'es2020',

    // Sourcemaps only for debugging
    sourcemap: false,

    // Chunk size warnings
    chunkSizeWarningLimit: 500,

    // Improve module preload
    modulePreload: {
      polyfill: true
    }
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
})
