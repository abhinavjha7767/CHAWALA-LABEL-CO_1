import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
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
  plugins: [react(), imagetools(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Core React runtime — must all live together so scheduler,
          // react, and react-dom initialize as one atomic chunk
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react-router") ||
            id.includes("node_modules/scheduler/")
          ) {
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
    minify: "esbuild",
  },
}));