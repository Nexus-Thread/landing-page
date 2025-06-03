import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import { FileSystemIconLoader } from "unplugin-icons/loaders";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  // Enable experimental features
  experimental: {
    contentIntellisense: true,
  },
  // Set static output for static site generation
  output: "static",
  // Directory for publicly served assets
  publicDir: "public",
  site: "https://nexusthread.it",
  // Configure link prefetching strategy
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  // Vite-specific configuration options
  vite: {
    // Dependencies to exclude from Vite's dependency optimization
    optimizeDeps: {
      exclude: ["fsevents"],
    },
    // Automatically inject clsx into JSX files
    esbuild: {
      jsxInject: `import { clsx } from 'clsx'`,
    },
    // Rollup options for custom chunking behavior
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("clsx")) return "vendor";
          },
        },
      },
    },
    // Vite plugins used, including custom icon/image loaders
    plugins: [
      Icons({
        compiler: "jsx",
        jsx: "react",
        customCollections: {
          // Load icons and images from local directories as custom icon sets
          "my-icons": FileSystemIconLoader("./src/assets/icons"),
          "my-images-collection": FileSystemIconLoader("./src/assets/images"),
        },
      }),
    ],
  },
  // Enable React integration
  integrations: [react()],
});
