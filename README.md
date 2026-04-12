# Axync Landing Page

Marketing website for the Axync cross-chain settlement protocol. Axync enables trustless P2P trading across any chain, verified by zero-knowledge proofs -- no bridges, no intermediaries.

## Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI**: [React 19](https://react.dev/), [Three.js](https://threejs.org/) / [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss`
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (monospace)
- **Linting**: ESLint 9 with `eslint-config-next`

## Getting Started

### Prerequisites
- Node.js 20+
- npm (or yarn / pnpm / bun)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
The build is optimized for performance with Next.js 16 features.

### Linting
```bash
npm run lint
```

## Project Structure
```text
axync_landing/
├── app/                        # Next.js App Router
│   ├── globals.css             # Tailwind imports, fonts, theme tokens
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Main entry point (Canvas & Scroll)
│   ├── robots.ts               # Robots.txt generation
│   └── sitemap.ts              # Sitemap generation for axync.xyz
├── components/                 # React components
│   ├── 3d/                     # Interactive Three.js/R3F components
│   │   ├── InteractiveSystem.tsx # Scene coordinator
│   │   ├── ObsidianPlanet.tsx    # Hero 3D planet
│   │   ├── CinematicStarfield.tsx
│   │   └── ...
│   └── ui/                     # Common UI components
│       ├── Header.tsx          # Fixed header with navigation
│       ├── Footer.tsx          # Site footer
│       ├── MainScrollOverlay.tsx # Content sections (Hero, Features, etc.)
│       └── ScrambleText.tsx    # Animated text effects
├── hooks/                      # Custom React hooks (Mobile, Sound, etc.)
├── public/                     # Static assets (Models, Textures)
├── utils/                      # Helper functions
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS / Tailwind CSS plugin
├── tsconfig.json               # TypeScript configuration
└── package.json
```

## Page Sections (via MainScrollOverlay)
| Section | Description |
| :--- | :--- |
| **Hero** | Institutional-grade intro with animated typography and trading CTA |
| **Problem** | Visual breakdown of liquidity fragmentation in the current market |
| **Solution** | Explanation of Axync's no-bridge, zero-trust approach |
| **How It Works** | Three-step flow: Lock, Match, Settle |
| **Security** | Technical summary of ZK-driven verified settlement |
| **Call to Action** | Links to App and GitHub documentation |

## Design
- **Cinematic Experience**: Dark-first institutional aesthetic with interactive 3D elements.
- **Responsive Navigation**: Adaptive layouts for mobile and desktop viewing.
- **Premium Accents**: Custom color tokens (Gold, Cyan, Magenta) for distinct visual sectors.
- **SEO Optimized**: Fully integrated Metadata API with Open Graph and auto-generated XML sitemap.

## License
All rights reserved. © Axync Protocol 2026
