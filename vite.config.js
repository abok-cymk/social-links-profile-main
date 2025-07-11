import { defineConfig } from "vite"

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
  base: "/social-links-profile-main/",
});