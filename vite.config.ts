// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": resolve(__dirname, "src/pages"),
      "@components": resolve(__dirname, "src/components"),
      "@utils": resolve(__dirname, "src/utils"),
      "@styles": resolve(__dirname, "src/styles"),
      "@contexts": resolve(__dirname, "src/contexts"),
    },
  },
});
