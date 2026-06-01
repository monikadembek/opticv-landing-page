# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # TypeScript check + build to ./dist/
npm run preview    # Preview production build locally
```

No test runner is configured. TypeScript checking is done as part of `build` via `@astrojs/check`.

## Architecture

This is an **Astro v6 static site** (marketing/landing page theme) with Tailwind CSS v3 and TypeScript.

**Key integrations:** `@astrojs/sitemap`, `astro-icon` (SVG icons from `src/icons/`), MDX blog via content collections.

### Content flow

- `src/config/` — site-wide settings: `config.ts` (site name, URL, metadata), `navigationBar.ts`, `footerNavigation.ts`, `socialLinks.ts`, `analytics.ts`
- `src/data/json-files/` — structured content (features, testimonials, pricing, FAQ) loaded into block components
- `src/content/blog/` — MDX blog posts, managed via Astro content collections

### Component layers

- `src/components/blocks/` — full page sections (Hero, Features, Pricing, Testimonials, CTA, etc.) that consume data from `src/data/`
- `src/components/ui/` — reusable primitives (buttons, badges, cards, modals, inputs, etc.)
- `src/components/scripts/` — client-side scripts (theme toggle, mobile menu, etc.)
- `src/layouts/` — page wrappers

### Pages

`src/pages/` contains: `index.astro`, `features.astro`, `pricing.astro`, `faq.astro`, `blog/`, `changelog.astro`, `contact.astro`, `terms.astro`, `404.astro`, `robots.txt.ts`

### Styling

Tailwind config (`tailwind.config.mjs`) defines:
- **Primary color:** pink (`#E2187D` as `primary-600`)
- **Neutral:** slate scale
- **Fonts:** Inter Variable (body), Outfit Variable (headings)
- **Custom animations:** `dropdown`, `fadeUp`, `fadeInShadow`

Dark mode is class-based (`darkMode: 'class'`), toggled via a client script.

### Icons

Place SVG files in `src/icons/` and reference them with `<Icon name="filename" />` via `astro-icon`.

## Configuration

To customize the site, edit `src/config/config.ts` (site identity/SEO) and `tailwind.config.mjs` (colors/fonts). Content sections are driven by JSON in `src/data/json-files/` — edit those to change copy without touching component code.
