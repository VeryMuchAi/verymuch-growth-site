# CLAUDE.md — Verymuch Growth Site

## Project Overview

This is the **Verymuch.ai public-facing website and lead generation hub**. It includes the main landing page, lead magnet pages, and the ARRI diagnostic tool. The site is bilingual (ES/EN) and targets B2B mid-market companies in Spain, Mexico, Colombia, and the US Hispanic market.

**Live URL:** `verymuch.ai` (Vercel)
**Repo:** `Morenazzo/verymuch-growth-site` (GitHub → auto-deploys to Vercel under VeryMuchAi org)

## Tech Stack

- **Framework:** Next.js 14.2.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Hosting:** Vercel (VeryMuchAi org)
- **DNS:** GoDaddy
- **Backend/DB:** Supabase (auth + `arri_submissions` table for diagnostics)
- **Automation:** N8N (`n8n.verymuch.ai`) webhooks for lead processing
- **CRM:** GoHighLevel (GHL) receives leads via N8N
- **Fonts:** Inter (display + body), JetBrains Mono (eyebrows/mono) — Google Fonts
- **No component library** — custom components, no shadcn/ui here

## Brand Design Tokens — Brand Book v1 (Abril 2026)

**Two-mode system: Day (paper) + Night (ink). Same tokens, different canvas.**
Full reference: `/Users/jh/Downloads/Verymuch.ai Design System (3)/README.md`.

```
DAY (paper mode):
  Paper:        #F0EEE8  (primary background)
  Paper soft:   #EAE6D9  (filled inputs)
  Paper line:   #D8D2C2  (borders)
  Paper card:   #FDFCF8  (cards)
  Ink (text):   #151514  (primary text)
  FG-2:         #4A4A4A  (secondary text)
  FG-3:         #7A7A7A  (tertiary text)
  Eyebrow:      #2C6B65  (teal deep)

NIGHT (ink mode):
  Ink:          #151514  (primary background)
  Ink raised:   #1D1D1C  (cards)
  Ink line:     #2A2A28  (borders)
  FG-1:         #F0EEE8  (primary text)
  FG-2:         #D8D2C2  (secondary text)
  FG-3:         #9A958A  (tertiary text)
  Eyebrow:      #ACEDEB  (teal light)

ACCENTS (both modes):
  Orange:       #D97757  (focus ring, error/terracotta)
  Teal deep:    #2C6B65  (day eyebrow)
  Teal light:   #ACEDEB  (night eyebrow)
  Success:      #2E7D5B (day) / #3FB87F (night)
  Error:        #B8452C (day) / #E5484D (night)

SIGNATURE GRADIENT (from logo badge — NEVER alter):
  linear-gradient(90deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)
  Rules:
    - Max 1 use per screen (highlight OR CTA OR stat — never 2 competing)
    - Always left→right (90°) or diagonal (135°). NEVER inverted
    - Not "the corporate color" — an accent/signature
    - As keyword highlight: solid gradient behind 1–2 words, dark text on top
    - As CTA: wash (soft) primary, intensifies to full gradient on hover

Typography:
  Display + Body: Inter (800 display, 400–700 body)
  Mono/Eyebrow:   JetBrains Mono (400–600)
  Scale:
    Display XL:  48–96px, weight 800, tracking -0.045em
    Display L:   36–56px, weight 800, tracking -0.035em
    Display M:   32px,    weight 800, tracking -0.025em
    Heading:     22px,    weight 700, tracking -0.015em
    Body L:      19px,    weight 400
    Body:        16px,    weight 400
    Body S:      14px,    weight 400
    Eyebrow:     12px,    JetBrains Mono 500, uppercase, tracking 0.14em

Components:
  Buttons:  radius 10px, wash-gradient primary (hover → full gradient)
  Cards:    raised (shadow) standard, featured (wash gradient) for emphasis.
            Radius 14–16px.
  Inputs:   bordered 1.5px, radius 10px, focus ring orange #D97757
  Nav:      horizontal links, underline 2px gradient on active
  Hero:     split layout — text left, chat/demo mock right
```

**Theme toggle:** `data-theme="light"` (Day) or `data-theme="dark"` (Night) on
`<html>`. Persisted in `localStorage` under `vm-theme-preference`. No-FOUC init
script runs synchronously in `src/app/[locale]/layout.tsx`.

**Voice & tone (Brand Book v1):** direct, data-rich, anti-hype. Peninsular
Spanish (tú, pretérito perfecto compuesto). Every claim has a number. Never
em dashes (—). Never "revolucionario/disruptivo/sinergia". No decorative
emoji — only ✓ and →. Accepted anglicisms: lead magnet, outbound, engagement,
CRM, stack, DM, funnel, pipeline.

**Do NOT use** (removed from Brand Book v1):
- Old mint `#5AD4AE` or amber `#F5A05E` as primary colors
- Red-to-amber CTA gradient (CTAs now use signature gradient wash)
- Plus Jakarta Sans or DM Sans (replaced by Inter)
- Purple-blue AI gradients, floating 3D icons, emoji decoration
- Em dashes (—) or en dashes (–) — use short hyphens or periods

## Project Structure

```
verymuch-growth-site/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Main landing page (all sections)
│   ├── globals.css             # Tailwind + custom styles
│   └── api/
│       └── assessment/
│           └── route.ts        # ARRI diagnostic → Supabase + N8N webhook
├── src/
│   ├── components/
│   │   ├── HomeNav.tsx         # Top navigation bar
│   │   ├── AgentsSection.tsx   # Interactive agents grid with filters
│   │   ├── LeadMagnetPage.tsx  # Reusable lead magnet template
│   │   ├── LeadMagnetForm.tsx  # Form component for lead magnets
│   │   └── ...
│   └── lib/
│       └── lead-magnet.ts      # Types + config for lead magnet pages
├── public/
│   ├── arri.html               # ARRI diagnostic tool (standalone HTML)
│   └── Reference/
│       └── poe-preview.html    # Reference design for the previous landing
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Key Pages & Routes

- `/` — Main landing page (Hero, Problems, Services, How Agents Work, Process, Agents Grid, ROI Calculator, Why Us, Team, Pricing, CTA)
- `/arri` → serves `public/arri.html` — AI Readiness diagnostic
- `/lead-magnets/signals-linkedin` — Lead magnet example page
- `/api/assessment` — POST endpoint for ARRI submissions

## Architecture Decisions

- **Single-page landing:** The main page (`page.tsx`) contains all sections as a long-scroll single page with anchor navigation
- **Bilingual:** The main landing uses inline i18n with ES/EN toggle. ARRI tool has its own i18n system
- **Lead magnets** use a reusable `LeadMagnetPage` + `LeadMagnetForm` component system with config objects
- **GHL booking widget** embedded via iframe URL: `https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page`
- **ARRI pipeline:** Form → `/api/assessment` → Supabase `arri_submissions` → N8N webhook (`https://n8n.verymuch.ai/webhook/LM-Forms`) → GHL with tags + custom fields

## Coding Conventions

- All UI text in **Spanish** by default (bilingual where implemented)
- Use Tailwind utility classes — no external CSS libraries
- Use CSS variables for brand colors when possible
- Components are React Server Components by default; add `"use client"` only when needed
- Keep inline styles minimal — prefer Tailwind. Exception: gradient backgrounds use `style={{ backgroundImage: ... }}`
- Semantic HTML: proper heading hierarchy, alt texts, aria labels
- File naming: PascalCase for components, kebab-case for utility files

## Important Integration Details

### N8N Webhook
- **Production URL:** `https://n8n.verymuch.ai/webhook/LM-Forms`
- N8N wraps POST body inside `$json.body` — all field references in N8N must use this path
- Tags field in GHL node requires explicit `fx` expression mode
- Every N8N workflow change requires clicking **Publish** (not just Save)

### Supabase
- ARRI submissions go to `arri_submissions` table
- Uses `SUPABASE_SERVICE_ROLE_KEY` for server-side inserts (bypasses RLS)
- Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

### Vercel Deployment
- Auto-deploys on push to `main` branch
- Environment variables configured in Vercel dashboard
- Domain: `verymuch.ai` (root domain)

## Design Reference

- Target aesthetic: nicomanzaneque.com — clean, generous negative space, strong typographic hierarchy, warm off-white light mode
- Dark sections use `#1A1A1A` or `#111111` backgrounds
- Light sections use `#FDF6EE` (cream) or white
- CTAs always use the red-to-amber gradient with white text
- Section tags use mint color with gradient bar prefix
- Cards have subtle borders (`border-white/10` dark, `border-gray-200` light) with gentle hover states

## Common Tasks

- **Add a new landing section:** Create component in `src/components/`, import in `app/page.tsx`
- **Add a new lead magnet:** Create config in `src/lib/lead-magnet.ts`, create page under `app/lead-magnets/[slug]/page.tsx` using `LeadMagnetPage`
- **Update pricing:** Edit the pricing section in `app/page.tsx` or `public/Reference/poe-preview.html`
- **Update ARRI questions:** Edit `public/arri.html` directly (standalone HTML with embedded JS)

## Completed

- Legal pages: Privacy policy, Terms of service, Cookie policy (already live)

## Pending Tasks / Roadmap

### Website Redesign
- 8-section homepage rewrite per Jorge's brief
- DNS migration: `lp.verymuch.ai` → root `verymuch.ai`, marketplace `www.verymuch.ai` → `app.verymuch.ai`
- Single-day Cursor/Claude Code build: DNS + CSS/theme system + homepage rewrite + SEO + legal

### SEO/GEO — Phase 1: Technical Foundations (Weeks 1-4)

**Search Console & Indexing:**
- Google Search Console (GSC) setup + Bing Webmaster Tools
- `robots.txt` — allow all crawlers, point to sitemap, include `llms.txt` reference
- XML sitemap at `/sitemap.xml` — auto-generated, include all public pages + lead magnets
- Canonical tags on every page (`<link rel="canonical">`)

**URL Structure & i18n:**
- Subdirectory-based structure: `/es/`, `/en/` (NOT subdomains — subdirectories consolidate domain authority)
- hreflang tags for all pages: `es-ES`, `es-MX`, `es-CO`, `en-US`
- 301 redirects from old `lp.verymuch.ai` paths to new root paths
- Clean URL slugs (no trailing slashes, lowercase, hyphens)

**Structured Data (JSON-LD):**
- Organization schema on homepage (name, logo, URL, founders, sameAs LinkedIn)
- Service schema on service/agent pages
- FAQ schema on relevant sections
- BreadcrumbList schema on subpages
- LocalBusiness schema for Madrid office (for Google Business Profile)

**GEO Optimization (AI search engines):**
- `/llms.txt` file at root — structured summary of what Verymuch.ai does, services, differentiators
- Optimize for ChatGPT, Perplexity, Google AI Overviews citation
- Clear, factual, citation-worthy language in key pages (avoid marketing fluff that AI won't cite)
- Entity-rich content: mention specific tools, technologies, markets, pricing ranges

**Performance & Core Web Vitals:**
- Image optimization (WebP, lazy loading, proper sizing)
- Font subsetting (Plus Jakarta Sans + DM Sans — only needed weights)
- Minimize JavaScript bundles
- Target LCP < 2.5s, CLS < 0.1, INP < 200ms

### SEO/GEO — Phase 2: Content & Authority Building (Weeks 5-12)

**Content Hub (`/medios/`):**
- Blog/resources section as subdirectory under `verymuch.ai/medios/`
- Pillar page: "Guía completa de agentes de IA para ventas y marketing"
- Supporting blog posts targeting Spanish-language AI keywords
- Original research / data (e.g., AI adoption rates in LATAM mid-market)
- ROI calculator as interactive content piece (already have the logic in landing page)
- Case studies (Konfío, Securitas when ready)

**LinkedIn Satellite Pages:**
- Showcase Pages under Verymuch.ai LinkedIn: ChatGPT en Español, Agentes de IA, Noticias IA en Español
- Content hub built as subdirectories under `verymuch.ai/medios/`
- Cross-page amplification explicitly ruled out (LinkedIn detects and penalizes)
- Optimal cadence: 8-12 posts/month per page (not daily)

**Backlinks & Authority:**
- Directory listings (AI agency directories, LATAM tech directories)
- Google Business Profile for Madrid
- Guest posts / co-marketing with complementary tools (N8N, GHL partners)

**Monitoring:**
- Ubersuggest or SE Ranking for keyword tracking
- Otterly.AI for GEO monitoring (ChatGPT/Perplexity citation tracking)
- GSC weekly review for indexing issues, search queries, CTR

## Do NOT

- Do NOT use `www.verymuch.ai` — that's the marketplace (moving to `app.verymuch.ai`)
- Do NOT add external links in LinkedIn post bodies (algorithm penalty)
- Do NOT use "pilot" framing — use "Phase 1: Validation" instead
- Do NOT use buzzwords like "disruptive", "revolutionary", "end-to-end solution"
- Do NOT break the N8N webhook URL or change its path without coordinating
