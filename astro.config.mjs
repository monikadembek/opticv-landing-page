import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://opti-cv.netlify.app",
  adapter: node({ mode: "standalone" }),
  integrations: [icon(), sitemap()],
});
