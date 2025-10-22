// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Ganti 'pastel-sister-birthday-bash' dengan nama repositori GitHub Anda
const REPO_NAME = 'pastel-sister-birthday-bash'; 

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    
    // === TAMBAHKAN BARIS INI UNTUK GITHUB PAGES ===
    base: `/${REPO_NAME}/`,
    // ===============================================

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));