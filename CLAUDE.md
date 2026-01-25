# CLAUDE.md

## Project Overview

Premium founder portfolio website for **Umar Zeb** — a personal brand site designed to establish credibility with investors, clients, partners, and for immigration petitions.

- **Repository:** portfolio
- **Owner:** Umar Zeb
- **Type:** Single-page portfolio (founder/executive positioning)
- **Stack:** Next.js 16 + TypeScript + Tailwind CSS 4

## Design Philosophy

**Target aesthetic:** Stripe, Linear, Notion, YC founder sites

- **Premium** — clean, minimal, high-quality
- **Trustworthy** — professional, corporate, investor-grade
- **Credibility-focused** — metrics, outcomes, evidence

**Avoid:** colorful/childish design, freelancer tone, generic resume layouts

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS 4 | Utility-first styling |
| System fonts | Premium typography without external dependencies |

## Directory Structure

```
src/
├── app/
│   ├── globals.css      # Design system (colors, typography, spacing)
│   ├── layout.tsx       # Root layout with SEO metadata
│   └── page.tsx         # Main page assembling all sections
├── components/
│   ├── index.ts         # Barrel exports
│   ├── Navigation.tsx   # Sticky navigation with mobile menu
│   ├── Hero.tsx         # Strong positioning statement
│   ├── About.tsx        # Background story
│   ├── Ventures.tsx     # Companies founded/led
│   ├── Projects.tsx     # Technical products built
│   ├── Achievements.tsx # Metrics and milestones
│   ├── Expertise.tsx    # Skills by category
│   ├── Credentials.tsx  # Education, certs, publications
│   ├── Testimonials.tsx # Third-party validation
│   ├── Contact.tsx      # CTA and availability
│   └── Footer.tsx       # Minimal footer
├── data/
│   └── content.ts       # ALL site content centralized here
└── lib/                 # Utilities (if needed)
```

## Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

## Content Management

**All content is centralized in `src/data/content.ts`**

To customize the portfolio:

1. Edit `src/data/content.ts`
2. Update: `siteConfig`, `hero`, `about`, `ventures`, `projects`, `achievements`, `expertise`, `credentials`, `testimonials`, `contact`
3. Replace placeholder text with real information
4. Replace placeholder URLs with actual links

### Content Structure

```typescript
// Site-wide config
siteConfig: { name, title, description, email, social links }

// Sections
hero: { greeting, headline, subheadline, credentials[] }
about: { title, paragraphs[], facts[] }
ventures: { items[{ name, role, period, status, description, highlights[], url }] }
projects: { items[{ name, category, description, tech[], url, metrics }] }
achievements: { items[{ metric, label, description }], milestones[] }
expertise: { categories[{ name, skills[] }] }
credentials: { education[], certifications[], publications[] }
testimonials: { items[{ quote, author, role, company }] }
contact: { title, subtitle, cta, email, availability }
```

## Design System

### Colors (CSS Variables)

| Variable | Light | Dark | Usage |
|----------|-------|------|-------|
| `--background` | #ffffff | #09090b | Page background |
| `--foreground` | #0a0a0a | #fafafa | Primary text |
| `--muted` | #71717a | #a1a1aa | Secondary text |
| `--muted-foreground` | #a1a1aa | #71717a | Tertiary text |
| `--border` | #e4e4e7 | #27272a | Borders |
| `--border-subtle` | #f4f4f5 | #18181b | Subtle backgrounds |

### Typography

- **Font:** System font stack (San Francisco, Segoe UI, Roboto)
- **Headings:** Semibold, tight tracking
- **Body:** Regular weight, relaxed line-height (1.6)

### Spacing

- Section padding: `py-24 px-6`
- Max content width: `max-w-4xl`
- Component gaps: `gap-6` or `gap-8`

### Components

- **Cards:** `border border-border rounded-lg p-6`
- **Buttons:** `rounded-full px-6 py-3`
- **Tags/badges:** `text-xs px-2 py-1 rounded`

## Responsive Design

- Mobile-first approach
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Navigation collapses to hamburger on mobile
- Grid layouts stack on smaller screens

## SEO

Metadata configured in `src/app/layout.tsx`:
- Title, description, keywords
- Open Graph tags for social sharing
- Twitter card metadata
- Robots configuration

## Deployment

**Recommended: Vercel**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Alternative: Any Node.js host**

```bash
npm run build
npm run start
```

## Development Conventions

### Code Style
- Keep components focused and single-purpose
- Prefer editing existing files over creating new ones
- Only add comments where logic isn't self-evident
- Remove unused code completely

### Git Workflow
- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
- Keep commit messages focused on "why" not "what"
- Never commit secrets or credentials

### Adding New Sections

1. Create component in `src/components/YourSection.tsx`
2. Export from `src/components/index.ts`
3. Add content to `src/data/content.ts`
4. Import and add to `src/app/page.tsx`

## Customization Guide

### Adding Google Fonts (optional)

```typescript
// src/app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Use: className={inter.className}
```

### Adding Images

Place images in `public/` folder, reference as `/image-name.jpg`

### Adding PDF Documents

1. Place PDFs in `public/documents/`
2. Link: `<a href="/documents/resume.pdf">Download</a>`

### Dark Mode

Automatic via `prefers-color-scheme: dark` media query. System preference respected.

## Key Files to Edit

| Purpose | File |
|---------|------|
| All content | `src/data/content.ts` |
| Design tokens | `src/app/globals.css` |
| SEO metadata | `src/app/layout.tsx` |
| Page structure | `src/app/page.tsx` |
| Individual sections | `src/components/*.tsx` |

## Performance

- Static generation (no server required)
- System fonts (no external font loading)
- Minimal JavaScript (only Navigation is client component)
- Optimized for Core Web Vitals
