# Arigo Website

Production-ready marketing site built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**,
using a feature-based architecture and the Arigo brand design system.

Figma: https://www.figma.com/design/41xtzZOpsnFGRn8OC5zLSv/Arigo

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev                  # http://localhost:3000
```

| Script                 | Purpose                                |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Dev server with HMR                    |
| `npm run build`        | Production build (also type-checks)    |
| `npm run start`        | Serve the production build             |
| `npm run lint`         | ESLint (Next core-web-vitals + TS)     |
| `npm run type-check`   | `tsc --noEmit`                         |
| `npm run format`       | Prettier (with Tailwind class sorting) |

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the folder structure, conventions, and how to add a feature.
