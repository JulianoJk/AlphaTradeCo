// vite.config.ts or vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Ensure this matches the container's exposed port
    host: "0.0.0.0", // Allows access from outside the container
  },
});
