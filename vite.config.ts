import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.tsx"),
      name: "MossoftUI",
      fileName: "mossoft-ui",
    },
    rollupOptions: {
      external: [
        "react",
        /^react\/.*/,
        "react-dom",
        /react-dom\/.*/,
        "react/jsx-runtime",
        "tailwindcss",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      include: ["src/", "src/index.ts"],
      exclude: ["src/stories.tsx", "src/styles.ts"],
    }),
  ],
});
