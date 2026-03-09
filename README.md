# Axync Landing Page

Marketing website for the [Axync](https://axync.xyz) cross-chain settlement protocol. Axync enables trustless P2P trading across any chain, verified by zero-knowledge proofs -- no bridges, no intermediaries.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with static export (`output: "export"`)
- **UI:** [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss`
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (monospace)
- **Linting:** ESLint 9 with `eslint-config-next`

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

The static site is exported to the `out/` directory.

### Linting

```bash
npm run lint
```

## Project Structure

```
landing/
├── public/                     # Static assets
├── src/
│   └── app/
│       ├── components/
│       │   ├── AxyncMark.tsx   # SVG logo mark component
│       │   ├── Chains.tsx      # Supported chains section
│       │   ├── Contact.tsx     # Contact / CTA section
│       │   ├── Features.tsx    # Feature grid section
│       │   ├── Footer.tsx      # Site footer
│       │   ├── Header.tsx      # Fixed header with navigation
│       │   ├── Hero.tsx        # Hero section with tagline
│       │   ├── HowItWorks.tsx  # Three-step flow section
│       │   ├── Roadmap.tsx     # Phased roadmap section
│       │   └── Team.tsx        # About / team section
│       ├── globals.css         # Tailwind imports, fonts, theme tokens
│       ├── layout.tsx          # Root layout with SEO metadata
│       ├── page.tsx            # Landing page (composes all sections)
│       └── sitemap.ts          # Sitemap generation for axync.xyz
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration (static export)
├── postcss.config.mjs          # PostCSS / Tailwind CSS plugin
├── tsconfig.json               # TypeScript configuration
└── package.json
```

## Page Sections

| Section       | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| **Header**    | Fixed navigation bar with logo, nav links, and "Launch App" CTA |
| **Hero**      | Full-screen intro with tagline, description, and action buttons |
| **Features**  | Six feature cards covering ZK proofs, cross-chain, privacy, etc. |
| **How It Works** | Three-step flow: Deposit, Trade, Withdraw                  |
| **Chains**    | Grid of supported EVM chains with status badges               |
| **Roadmap**   | Four-phase roadmap with progress indicators                   |
| **Team**      | About section with project description and GitHub link        |
| **Contact**   | Contact section with Twitter/X, email, and trading CTA        |
| **Footer**    | Footer with nav links and social icons                        |

## Design

- Dark-first color scheme with a custom token palette defined in `globals.css`
- Responsive layout (mobile hamburger menu, adaptive grids)
- Silver gradient accents for CTAs and the logo mark
- SEO-optimized with Open Graph and Twitter Card metadata
- Auto-generated `sitemap.xml` via Next.js Metadata API

## Deployment

The project is configured for static export. Deploy the `out/` directory to any static hosting provider:

```bash
npm run build
# Deploy the "out/" directory
```

Compatible with Vercel, Cloudflare Pages, Netlify, GitHub Pages, or any static file server.

## License

All rights reserved.
