import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/land1/",
  plugins: [tailwindcss()],
});
