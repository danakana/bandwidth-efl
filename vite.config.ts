import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works from any host path (preview or Vercel).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
