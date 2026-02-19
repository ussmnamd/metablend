# Skill Readiness Report

## Premium Outstaffing Agency Website Project

---

## 1. Next.js 14 App Router ✅

### Key Patterns to Use

- **File-based routing conventions**: `layout.tsx` (shared UI, fonts, metadata), `page.tsx` (route components), `loading.tsx` (loading states), `error.tsx` (error boundaries)
- **Server vs Client Components**: Use Server Components by default for data fetching/SEO; add `'use client'` directive only when needed for interactivity (useState, useEffect, event handlers)
- **generateStaticParams**: For dynamic routes like `/services/[slug]` and `/blog/[slug]` to enable SSG
- **generateMetadata**: For per-page SEO with title, description, Open Graph tags
- **next/font**: Load Plus Jakarta Sans via `next/font/google` with `display: swap`
- **next/image**: Use `<Image>` component with width/height, priority for above-fold images
- **Route Handlers**: Create `/api/contact/route.ts` for contact form POST endpoint

### Version Compatibility Notes

- Next.js 14+ uses React 19 by default in App Router
- Ensure TypeScript is configured in `tsconfig.json`
- Use `output: 'export'` if static export needed (not required for Vercel)

### Open Questions

- Brand name to use in metadata templates
- Whether to use Server Actions instead of Route Handlers for form submission

---

## 2. Tailwind CSS v3 ✅

### Key Patterns to Use

- **tailwind.config.ts customization**: Extend colors, fontFamily, borderRadius from design tokens
- **JIT Engine**: All utility classes available by default in v3
- **Responsive prefixes**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:` for breakpoints
- **group and peer modifiers**: For interactive states (`group-hover:`, `peer-checked:`)
- **Arbitrary values**: `[color:#16A34A]` for one-off values
- **@tailwindcss/typography**: Install and configure for blog MDX prose styling

### Design Tokens from Plan

```typescript
colors: {
  background: { dark: '#0A0F1C', light: '#F9FAFB' },
  surface: { DEFAULT: '#FFFFFF', dark2: '#111827' },
  primary: { DEFAULT: '#16A34A', light: '#22C55E' },
  greenTint: '#F0FDF4',
  text: { primary: '#0F172A', secondary: '#64748B', muted: '#94A3B8' },
  border: '#E2E8F0',
}
```

### Version Compatibility Notes

- Tailwind v3.4+ has improved CSS variables support
- Use PostCSS with autoprefixer

---

## 3. Framer Motion 11 ✅

### Key Patterns to Use

- **motion components**: Replace `<div>` with `<motion.div>` for animations
- **variants and staggerChildren**: For list animations

```typescript
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}
```

- **useInView**: For scroll-triggered reveals (`useInView({ once: true, amount: 0.2 })`)
- **useMotionValue + useSpring + useTransform**: For animated counter in Stats section
- **AnimatePresence**: For page transitions with exit animations
- **layout prop**: For smooth layout changes

### Version Compatibility Notes

- Framer Motion 11+ works with React 18/19
- No special configuration needed

---

## 4. Lenis Smooth Scroll ✅

### Key Patterns to Use

- **Installation**: `npm install lenis`
- **Initialization**: Create client component wrapper

```typescript
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return children
}
```

- **Integration**: Wrap layout children in `SmoothScroll` component
- **Connect to Framer Motion**: Use `lenis.on('scroll', ScrollTrigger.update)` if using scroll triggers

### Version Compatibility Notes

- Lenis v1.x is stable and widely used
- Works with any scroll-based animations

---

## 5. React Hook Form + Zod ✅

### Key Patterns to Use

- **useForm hook**: Core form management

```typescript
const { register, handleSubmit, formState: { errors } } = useForm()
```

- **register and Controller**: `register('fieldName')` for simple inputs, `<Controller>` for complex components
- **Zod schema validation**:

```typescript
const schema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  company: z.string().min(2, 'Company is required'),
  service: z.enum(['support', 'tech', 'design', 'backoffice']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})
```

- **zodResolver**: Connect Zod schema to React Hook Form
- **Error display**: `{errors.fieldName?.message}`
- **Loading/success states**: Use `useState` for submission status
- **Prevent double-submission**: Disable button while `isSubmitting`

### Version Compatibility Notes

- react-hook-form v7+ with zod v3+
- @hookform/resolvers package needed

---

## 6. Resend + react-email ✅

### Key Patterns to Use

- **API Key**: Get from Resend dashboard, set in `.env.local` as `RESEND_API_KEY`
- **Route Handler**: `/app/api/contact/route.ts`

```typescript
import { Resend } from 'resend'
import { render } from '@react-email/render'
import ContactEmail from '@/emails/ContactEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const data = await request.json()
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'agency@company.com',
    subject: 'New Contact Form Submission',
    html: await render(ContactEmail({ data })),
  })
  return Response.json({ success: true })
}
```

- **Email template**: Use react-email components

```typescript
import { Html, Head, Preview, Body, Container, Heading, Text } from '@react-email/components'

export default function ContactEmail({ data }) {
  return (
    <Html>
      <Head />
      <Preview>New contact from {data.fullName}</Preview>
      <Body>
        <Container>
          <Heading>New Contact Form Submission</Heading>
          <Text>Name: {data.fullName}</Text>
          <Text>Email: {data.email}</Text>
        </Container>
      </Body>
    </Html>
  )
}
```

- **Error handling**: Try-catch block with error response

### Version Compatibility Notes

- Resend SDK v3+
- react-email v1.x
- For development, use Resend's test domain or add verified domain

---

## 7. MDX for Blog Posts ✅

### Key Patterns to Use

- **Setup**: Install `@next/mdx` or `next-mdx-remote`

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

- **next.config.js**: Configure MDX

```javascript
const withMDX = require('@next/mdx')()
module.exports = withMDX({ pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'] })
```

- **Read frontmatter**: Use `gray-matter` package

```typescript
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  return { frontmatter: data, content }
}
```

- **Render MDX**: Use `next-mdx-remote/rsc` for Server Components
- **Custom components**: Map HTML elements to Tailwind-styled components
- **generateStaticParams**: For static generation of blog posts

### Version Compatibility Notes

- @next/mdx v14+ supports App Router
- Use `next-mdx-remote/rsc` for server-side MDX in App Router

---

## 8. next-sitemap ✅

### Key Patterns to Use

- **Installation**: `npm install next-sitemap`
- **Configuration**: Create `next-sitemap.config.js`

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourdomain.com',
  generateRobotsTxt: true,
  outDir: './out',
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
}
```

- **Build integration**: Add to `package.json`

```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

- **Auto-generation**: Runs after `next build`, creates sitemap.xml and robots.txt

### Version Compatibility Notes

- next-sitemap v4+ supports App Router
- Requires absolute URL for siteUrl

---

## 9. JSON-LD Structured Data ✅

### Key Patterns to Use

- **Organization Schema** (Homepage):

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '[Brand Name]',
  url: 'https://yourdomain.com',
  logo: 'https://yourdomain.com/logo.png',
  sameAs: ['https://linkedin.com/company/brand', 'https://twitter.com/brand'],
}
```

- **LocalBusiness Schema** (Contact Page):

```typescript
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '[Brand Name]',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA',
  },
  telephone: '+1-xxx-xxx-xxxx',
}
```

- **Article Schema** (Blog Posts):

```typescript
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  datePublished: post.date,
  author: { '@type': 'Organization', name: '[Brand]' },
}
```

- **Review Schema** (Testimonials):

```typescript
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  reviewBody: testimonial.quote,
  author: { '@type': 'Person', name: testimonial.author },
  reviewRating: { '@type': 'Rating', ratingValue: testimonial.rating },
}
```

- **Injection**: Add as inline script in page metadata or component

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

### Version Compatibility Notes

- Use valid JSON (not JS object literals)
- Test with Google's Rich Results Test tool

---

## 10. Vercel Deployment ✅

### Key Patterns to Use

- **GitHub Integration**: Connect repository in Vercel dashboard
- **Environment Variables**: Set in Vercel dashboard → Settings → Environment Variables
  - `RESEND_API_KEY` (from Resend)
  - `SITE_URL` (for next-sitemap)
- **Framework Preset**: Next.js auto-detected
- **Build Command**: `next build` (or `npm run build`)
- **Output Directory**: `.next` (auto-detected)
- **Preview Deployments**: Automatic on PR creation
- **Production Deployments**: On merge to main branch
- **Analytics**: Enable Vercel Analytics in dashboard
- **Core Web Vitals**: View in Vercel dashboard → Analytics

### Version Compatibility Notes

- Vercel automatically uses latest Next.js stable
- No additional configuration needed for Next.js 14

---

## Summary

| Domain | Status | Key Risk |
|--------|--------|----------|
| Next.js 14 App Router | ✅ Ready | None |
| Tailwind CSS v3 | ✅ Ready | None |
| Framer Motion 11 | ✅ Ready | None |
| Lenis Smooth Scroll | ✅ Ready | None |
| React Hook Form + Zod | ✅ Ready | None |
| Resend + react-email | ✅ Ready | API key setup |
| MDX for Blog Posts | ✅ Ready | None |
| next-sitemap | ✅ Ready | Need SITE_URL |
| JSON-LD Structured Data | ✅ Ready | Schema validation |
| Vercel Deployment | ✅ Ready | GitHub connection |

### Recommendations Before Phase 1

1. Confirm brand name for metadata templates
2. Gather real company information for schema (address, phone, social links)
3. Prepare logo file (SVG preferred) for OG images
4. Set up GitHub repository for Vercel integration
5. Sign up for Resend and get API key

---

*Skill Readiness Report - Ready for Phase 1 Implementation*
