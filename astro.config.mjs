import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://limegreen-fox-593309.hostingersite.com",
  adapter: netlify(),
  integrations: [icon(), sitemap()],
});
