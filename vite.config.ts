import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative paths so the build works on GitHub project pages
  // (https://<user>.github.io/ugctechgirl/) and locally.
  base: "./",
  plugins: [react(), tailwindcss()],
});
