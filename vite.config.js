import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/uuid-generator/",
  build: { sourcemap: false },
  plugins: [react()],
});
