import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
   resolve:{
    alias:{

      "@src":path.resolve(__dirname, "./src"),
      "@components":path.resolve(__dirname, "./src/components"),
      "@containers":path.resolve(__dirname, "./src/containers"),
      "@layouts":path.resolve(__dirname, "./src/layouts"),
      "@pages":path.resolve(__dirname, "./src/pages"),
      "@contexts":path.resolve(__dirname, "./src/contexts"),

      "@constants":path.resolve(__dirname, "./src/core/constants"),
      "@assets":path.resolve(__dirname, "./src/core/assets"),
      "@sass":path.resolve(__dirname, "./src/core/sass"),
      "@services":path.resolve(__dirname, "./src/Physics/services"),

    }
  },
})
