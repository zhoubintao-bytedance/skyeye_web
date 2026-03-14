# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for 天眼投资 (Tianyan Investment), a Beijing-based AI quantitative investment company. Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4. Deployed as a static site on GitHub Pages.

## Commands

```bash
npm run dev       # Dev server at localhost:3000
npm run build     # Static export (output: "export")
npm run lint      # ESLint 9
npm run deploy    # Build + deploy to GitHub Pages via gh-pages
```

## Architecture

- **Framework:** Next.js 16 with App Router (`app/` directory), static export mode
- **Styling:** Tailwind CSS 4 with custom CSS variables and utility classes defined in `app/globals.css`
- **Icons:** `@heroicons/react` (24px outline style)

### Routes

All pages are in `app/` using Next.js App Router conventions:
- `/` — Home (hero, core advantages, product preview)
- `/about` — Company info and vision
- `/products` — Four service offerings
- `/contact` — Contact form and company info

### GitHub Pages Configuration

`next.config.ts` sets `basePath: "/skyeye_web"` and `assetPrefix: "/skyeye_web/"` for GitHub Pages subfolder deployment. Images use `unoptimized: true` since static export doesn't support Next.js image optimization.

## Styling Conventions

- Dark theme with glassmorphism design (`.glass` class for backdrop-blur cards)
- Color palette via CSS custom properties: primary cyan (`#00d4ff`), secondary indigo (`#6366f1`), accent purple (`#8b5cf6`)
- Custom animations: `glow`, `float`, `pulse-glow` defined in `globals.css`
- Responsive: mobile-first with Tailwind breakpoints (sm/md/lg)
- Path alias: `@/*` maps to project root
