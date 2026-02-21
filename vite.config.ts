import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Target modern browsers for smaller output
    target: "es2020",
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunk splitting to separate vendor libs from app code
        manualChunks(id) {
          // Core React runtime — loaded first, cached forever
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "react-core";
          }
          // Framer Motion is large — isolate so it doesn't block initial paint
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
          // Radix UI primitives used by shadcn components
          if (id.includes("node_modules/@radix-ui")) {
            return "radix-ui";
          }
          // Lucide icons
          if (id.includes("node_modules/lucide-react")) {
            return "lucide";
          }
          // Everything else from node_modules → vendor chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    // Minify with esbuild (fastest)
    minify: "esbuild",
  },
}));
