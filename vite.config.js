import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // DO NOT REMOVE.
  // This code overwrites build files used in ./server.js
  // To publish a library:
  // 1. uncomment code
  // 2. yarn dist
  // 3. npm publish

  // build: {
  // lib: {
  //   entry: path.resolve(__dirname, "index.ts"),
  //   name: "npm-ts-231027",
  //   fileName: (format) => `index.${format}.js`,
  // },
  // rollupOptions: {
  //   external: ["react", "react-dom"],
  //   output: {
  //     globals: {
  //       react: "React",
  //       "react-dom": "ReactDOM",
  //     },
  //   },
  // },
  // sourcemap: true,
  // emptyOutDir: true,
  // },
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
