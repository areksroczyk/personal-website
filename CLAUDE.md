# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

There are no tests configured in this project.

## Architecture

**Next.js 15 App Router** personal portfolio site with a single page (`/`) plus a custom 404. All source lives under `src/`.

### Key directories

- `src/app/` — App Router pages, root layout, global styles, sitemap
- `src/components/` — UI components; `src/components/ui/` for primitives
- `src/content/` — Static data files (`work.ts`, `education.ts`, `technologies.ts`, `interests.ts`, `constants.ts`)
- `src/assets/` — SVG icon components and static images
- `src/utils/types.ts` — Shared TypeScript interfaces (e.g. `ExperienceItem`)

### Styling

Uses **Tailwind CSS v4** with CSS-first configuration — there is no `tailwind.config.js`. All theme tokens (colors, fonts, animations, easings) are defined in `src/app/globals.css` via `@theme inline`. Custom design tokens:

- Colors: `--color-background: #1f1f1f`, `--color-primary: #191919`, `--color-primary-800: #282828`, `--color-green: #aaf17b`, `--color-red: #e05555`
- Animations: `fade-in` (opacity + blur + translateY), `marquee`
- Easings: `fast-in-slow-out`, `in-out-quart`

Use `tailwind-merge` (`twMerge`) when conditionally composing class strings.

### Layout

The hero section uses a CSS bento grid defined with `grid-template-areas` in `globals.css`, responsive across mobile, `md`, and `lg` breakpoints. Grid areas include: avatar, map, book, featured-project, socials, etc.

### Notable patterns

- **Scroll animations** — `tailwindcss-intersect` toggles CSS classes on intersection; initialized in `IntersectObserverInit` client component. Add `intersect:` variant classes to trigger animations on scroll.
