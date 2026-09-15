# Architecture

## Principles

1. **Routes are thin.** `src/app/**/page.tsx` only wires metadata and renders a feature view.
2. **Features own their UI.** Everything specific to a page lives in `src/features/<name>` and is exposed through
   a single `index.ts` barrel. Routes never import from feature internals.
3. **Shared means used by 2+ features.** Promote a component to `src/components` only when a second feature needs it.
4. **Server by default.** Only files that need browser APIs, state, or Framer Motion carry `"use client"`.
   Motion wrappers (`components/motion`) hold that boundary so section components stay server components.
5. **Tokens, not hex.** Raw colours exist only in `src/styles/tokens.css`. Components use `bg-brand-primary` etc.

## Folder structure

```
src/
├── app/                        # Next.js App Router - routing, metadata files, global CSS
│   ├── layout.tsx              # Root layout: fonts, metadata defaults, providers, header/footer
│   ├── page.tsx                # "/" -> renders features/home
│   ├── not-found.tsx
│   ├── globals.css             # Tailwind entry + base layer
│   ├── sitemap.ts              # /sitemap.xml
│   ├── robots.ts               # /robots.txt
│   ├── manifest.ts             # /manifest.webmanifest
│   └── opengraph-image.tsx     # Default OG image (1200x630)
│
├── features/                   # Feature modules (one per route / domain)
│   └── home/
│       ├── index.ts            # PUBLIC API - the only import path for routes
│       ├── home.metadata.ts    # Route metadata (built with lib/seo/createMetadata)
│       ├── components/         # Sections + local components (hero, features, stats, cta, home-view)
│       ├── hooks/              # Feature-local hooks (use-count-up)
│       ├── content/            # Static content / copy (swap for CMS fetch later)
│       └── types/              # Feature-local TypeScript types
│
├── components/                 # Global / shared components
│   ├── ui/                     # Design-system primitives (Button, Container, SectionHeading)
│   ├── layout/                 # Header, Footer, Logo
│   └── motion/                 # Reveal / Stagger / RevealItem - the only Framer client boundary
│
├── config/                     # Static app configuration (site.ts, navigation.ts)
├── context/                    # Global providers (app-providers.tsx wraps MotionConfig, theme, etc.)
├── hooks/                      # Shared hooks (use-scrolled, use-media-query)
├── lib/                        # Framework-agnostic helpers
│   ├── utils/                  # cn(), absoluteUrl()
│   ├── seo/                    # createMetadata(), JsonLd + schema builders
│   └── motion/                 # Shared animation variants and transitions
├── services/                   # Data access (api-client.ts); feature services go in features/<x>/services
├── styles/                     # tokens.css - the brand design system (@theme)
└── types/                      # Global types (NavItem, WithChildren, ...)
```

## Adding a new feature / route

Example: an `/about` page.

```
src/features/about/
├── index.ts                    export { AboutView } from "./components/about-view";
│                               export { aboutMetadata } from "./about.metadata";
├── about.metadata.ts           createMetadata({ title: "About", path: "/about", description: "..." })
├── components/about-view.tsx
├── content/about.content.ts
└── types/index.ts
```

```tsx
// src/app/about/page.tsx
import type { Metadata } from "next";
import { AboutView, aboutMetadata } from "@/features/about";

export const metadata: Metadata = aboutMetadata;
export default function AboutPage() {
  return <AboutView />;
}
```

Then add `/about` to `staticRoutes` in `src/app/sitemap.ts` and to `src/config/navigation.ts`.

For dynamic routes (`/blog/[slug]`), export `generateMetadata` from the page, `await params`, fetch the entry
through a feature service, and pass the result to `createMetadata`. Add the slugs to the sitemap.

## Design tokens (Tailwind v4)

Tailwind v4 is configured in CSS, not `tailwind.config.ts`. `src/styles/tokens.css` declares an `@theme` block;
every variable becomes a utility:

| Token                         | Value     | Utilities                                      |
| ----------------------------- | --------- | ---------------------------------------------- |
| `--color-brand-primary`       | `#D85A44` | `bg-brand-primary`, `text-brand-primary`       |
| `--color-brand-secondary`     | `#151D32` | `bg-brand-secondary`, `text-brand-secondary`   |
| `--color-brand-tertiary`      | `#818181` | `text-brand-tertiary`, `border-brand-tertiary` |
| `--color-brand-primary-hover` | `#C14D38` | `hover:bg-brand-primary-hover`                 |
| `--color-brand-primary-soft`  | `#FBEEEB` | `bg-brand-primary-soft`                        |
| `--font-display`              | Manrope   | `font-display`                                 |
| `--font-sans`                 | Inter     | `font-sans`                                    |
| `--radius-card`               | 1.25rem   | `rounded-card`                                 |
| `--shadow-card`               |           | `shadow-card`, `hover:shadow-card-hover`       |
| `--container-content`         | 80rem     | `max-w-content`                                |

Opacity modifiers work on all colour tokens: `bg-brand-primary/10`, `border-brand-secondary/20`.

## SEO

- **Defaults** live in `app/layout.tsx` (`metadataBase`, title template, OG/Twitter, robots, icons, manifest).
- **Per-route** metadata is produced by `createMetadata()` in `lib/seo/metadata.ts`, which fills canonical,
  OpenGraph, Twitter, and robots consistently. Pass `noIndex: true` for utility pages.
- **OG image**: `app/opengraph-image.tsx` renders a branded 1200x630 PNG at build time. Any route can ship its own
  `opengraph-image.tsx` to override.
- **Structured data**: `JsonLd` + `organizationSchema` / `websiteSchema` are injected in the root layout.
- **Sitemap / robots**: generated from `siteConfig.url`. Robots disallows everything outside production so
  previews are never indexed.
- Set `NEXT_PUBLIC_SITE_URL` to the real domain in production - it drives every absolute URL.

## Motion

- Variants live in `lib/motion/variants.ts`; use `Reveal`, `Stagger`, `RevealItem` from `components/motion`.
- `MotionConfig reducedMotion="user"` in `AppProviders` honours OS accessibility settings globally.
- Keep `motion.*` usage inside `components/motion` or explicitly client-marked feature components.

## Conventions

- File names: `kebab-case.tsx`; exports: `PascalCase` components, `camelCase` hooks/utilities.
- Import order: framework -> third party -> `@/` aliases -> relative. Prettier + ESLint enforce formatting.
- Co-locate tests next to source as `*.test.tsx` when a test runner is added.
