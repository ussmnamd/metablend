# Meta Blend

A modern, production-ready website for Meta Blend, a remote staffing and outstaffing agency. Built with Next.js 16, React 19, and Tailwind CSS v4.

## Overview

Meta Blend connects ambitious companies with top-tier remote talent across customer support, tech and engineering, design and creative, and back-office operations. This website serves as the company's primary digital presence, showcasing services, client testimonials, and providing a contact form for lead generation.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | React framework with App Router, SSG, and server components |
| React | 19.2.3 | UI component library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first CSS framework |
| Framer Motion | 12.x | Animation library |
| React Hook Form | 7.x | Form state management |
| Zod | 4.x | Schema validation |
| Lenis | 1.x | Smooth scrolling |
| Lucide React | 0.575 | Icon library |

## Project Structure

```
src/
  app/                     # Next.js App Router pages
    about/                 # About page
    blog/                  # Blog listing and dynamic slug pages
    contact/               # Contact form (client component)
    privacy/               # Privacy policy
    services/              # Services listing and dynamic slug pages
    terms/                 # Terms of service
    testimonials/          # Client testimonials (client component)
    globals.css            # Design system and global styles
    layout.tsx             # Root layout with metadata, JSON-LD, fonts
    page.tsx               # Homepage
    sitemap.ts             # Dynamic sitemap.xml generation
    robots.ts              # robots.txt generation
  components/
    layout/                # Layout components (Navbar, Footer, SmoothScroll)
    sections/              # Homepage section components
    ui/                    # Reusable UI primitives (Button, Card, Badge, FadeIn)
  content/                 # Static data (services, testimonials)
  lib/                     # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm 9 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The development server starts at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Linting

```bash
npm run lint
```

## Pages

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage with hero, services, testimonials, stats |
| `/about` | Static | Company story, values, team, global presence |
| `/services` | Static | Service listing with links to detail pages |
| `/services/[slug]` | SSG | Individual service detail pages |
| `/blog` | Static | Blog post listing |
| `/blog/[slug]` | SSG | Individual blog posts |
| `/testimonials` | Client | Filterable client testimonials |
| `/contact` | Client | Contact form with Zod validation |
| `/privacy` | Static | Privacy policy |
| `/terms` | Static | Terms of service |

## Design System

The design system is defined in `globals.css` using Tailwind CSS v4's `@theme` directive. Key design tokens:

### Colors

- **Primary Green:** `#15803D` (WCAG AA compliant, 4.6:1 contrast ratio on white)
- **Text Primary:** `#0F172A` (15.4:1 contrast ratio on white)
- **Text Secondary:** `#475569` (7.1:1 contrast ratio on white)
- **Text Muted:** `#64748B` (4.6:1 contrast ratio on white)
- **Background Dark:** `#0A0F1C`
- **Background Light:** `#F9FAFB`

### Typography

- **Font Family:** Plus Jakarta Sans (Google Fonts)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Components

- **Button** - Primary, secondary, ghost, outline variants with loading state
- **Card** - Content container with optional hover effect
- **Badge** - Inline label with default, green, outline variants
- **FadeIn** - Scroll-triggered fade animation wrapper
- **AnimatedCounter** - Spring-based number counter animation

## SEO

- Title tags and meta descriptions on every page
- Open Graph tags (title, description, url, site_name, locale, type)
- Twitter Card tags (card, title, description)
- Robots meta tag (index, follow)
- Canonical URL
- JSON-LD structured data (Organization schema)
- Dynamic `sitemap.xml` generation covering all routes
- `robots.txt` with sitemap reference

## Accessibility

All pages meet WCAG AA standards:

- Color contrast ratios of 4.5:1 or greater for all text
- Proper heading hierarchy (h1, h2, h3 in order)
- ARIA labels on form select elements
- Semantic HTML elements throughout
- Keyboard-navigable interactive elements
- Alt text patterns for icons and images
- Skip navigation support via proper heading structure

## Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

1. Push the repository to GitHub
2. Import the repository in the Vercel dashboard
3. Vercel auto-detects Next.js and configures the build settings
4. Deploy

No environment variables are required for the static site.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

All rights reserved. This project is proprietary software owned by Meta Blend.
