import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://opticv.net",
  adapter: netlify(),
  integrations: [
    icon(), 
    sitemap(), 
    sentry({
      project: "opticv-javascript-astro",
      org: "opticv",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    })
  ]
});