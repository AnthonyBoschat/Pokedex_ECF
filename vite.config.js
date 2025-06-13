import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve:{
    alias:{

      "@src":path.resolve(__dirname, "./src"),
      "@Components":path.resolve(__dirname, "./src/components"),
      "@Containers":path.resolve(__dirname, "./src/containers"),
      "@Layouts":path.resolve(__dirname, "./src/layoutc"),
      "@Pages":path.resolve(__dirname, "./src/pages"),
      "@Contexts":path.resolve(__dirname, "./src/contexts"),

      "@Constants":path.resolve(__dirname, "./src/core/constants"),
      "@Assets":path.resolve(__dirname, "./src/core/assets"),
      "@Sass":path.resolve(__dirname, "./src/core/sass"),
      "@Services":path.resolve(__dirname, "./src/Physics/services"),

    }
  },
})
