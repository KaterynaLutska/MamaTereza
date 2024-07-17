import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react(), dts()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@type": path.resolve(__dirname, "./src/type"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
