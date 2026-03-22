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
- **Fonts:** Plus Jakarta Sans (headings), DM Sans (body) — Google Fonts
- **No component library** — custom components, no shadcn/ui here

## Brand Design Tokens

```
Colors:
  Charcoal:    #363536  (text, dark backgrounds)
  Amber:       #F5A05E  (CTAs, accents, gradients)
  Mint:        #5AD4AE  (primary brand, success states)
  Ice:         #DDEAEE  (light backgrounds, secondary)
  Cream:       #FDF6EE  (light mode background)
  Almost Black:#1A1A1A  (dark sections)
  Error Red:   #F5405E

Gradients:
  Brand:  linear-gradient(135deg, #5AD4AE 0%, #F5A05E 100%)  — mint to amber
  Text:   linear-gradient(90deg, #5AD4AE 0%, #F5A05E 100%)
  CTA:    linear-gradient(135deg, #F5405E 0%, #F5A05E 100%)  — red to amber

Typography:
  Headings: Plus Jakarta Sans (bold/extrabold)
  Body/UI:  DM Sans (regular/medium)
  Scale:    Display 48/56, H1 36/44, H2 28/36, H3 22/30, Body 16/26, Caption 13/20
```

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
