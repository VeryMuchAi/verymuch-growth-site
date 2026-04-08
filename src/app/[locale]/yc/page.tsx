import type { Metadata } from 'next'
import YCNav from '@/components/YCNav'

export const metadata: Metadata = {
  title: 'Verymuch.ai — AI Agents for B2B Sales | YC Startup School 2026',
  description:
    '8 production AI agents automating B2B sales pipelines. Built from Mexico City and Madrid. Serving US, Spain, and LATAM markets.',
  openGraph: {
    title: 'Verymuch.ai — AI Agents for B2B Sales | YC Startup School 2026',
    description:
      '8 production AI agents automating B2B sales pipelines. Built from Mexico City and Madrid. Serving US, Spain, and LATAM markets.',
    url: 'https://verymuch.ai/yc',
    siteName: 'Verymuch.ai',
    images: [
      {
        url: 'https://verymuch.ai/og_home_verymuch.png',
        width: 1200,
        height: 630,
        alt: 'Verymuch.ai — AI Agents for B2B Sales',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verymuch.ai — AI Agents for B2B Sales',
    description: '8 production AI agents automating B2B sales pipelines.',
    images: ['https://verymuch.ai/og_home_verymuch.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
}

// ── Data ──────────────────────────────────────────────────────────────────────

const agents = [
  {
    name: 'Signal-Based Prospecting',
    description:
      'Monitors LinkedIn signals, auto-enriches contacts, personalizes outreach at scale',
    metric: '2% → 5–8% reply rate',
    status: 'In Production' as const,
    url: null,
  },
  {
    name: 'Inbound Lead Router',
    description:
      'Responds in <60 sec, enriches and scores leads with AI, routes to the right rep',
    metric: '5× faster · 3× more meetings',
    status: 'In Production' as const,
    url: null,
  },
  {
    name: 'Pre-Call Intelligence',
    description:
      '1-page brief generated 30 min before every call — company, contacts, pain points',
    metric: 'Zero manual prep',
    status: 'In Production' as const,
    url: null,
  },
  {
    name: 'Nurturing & Follow-up',
    description:
      'Tracks engagement signals, triggers personalized follow-ups at the right moment',
    metric: '40% more pipeline recovered',
    status: 'In Production' as const,
    url: null,
  },
  {
    name: 'Content Production Engine',
    description:
      'Produces blog posts, social content, and lead magnets — brand-consistent, SEO-optimized',
    metric: 'Days → Hours',
    status: 'In Production' as const,
    url: null,
  },
  {
    name: 'Multi-Channel Publisher',
    description:
      'Distributes content across 5+ platforms automatically — LinkedIn, email, blog, WhatsApp',
    metric: 'Manual copy-paste eliminated',
    status: 'In Production' as const,
    url: null,
  },
  {
    name: 'ARRI™ AI Readiness Assessment',
    description:
      'Interactive diagnostic that scores companies on AI readiness and routes leads directly to CRM',
    metric: 'Live product',
    status: 'Live' as const,
    url: 'https://verymuch.ai/ai-readiness',
  },
  {
    name: 'Sales Intelligence Suite',
    description:
      '4 parallel AI agents: research target, analyze fit, write outreach, coordinate follow-up',
    metric: 'Live product',
    status: 'Live' as const,
    url: 'https://sales-intelligence.verymuch.ai',
  },
]

const metrics = [
  { value: '8', label: 'AI agents in production' },
  { value: '3', label: 'Countries (US · Spain · Mexico)' },
  { value: '~60%', label: 'Net margins' },
  { value: '$8K–$10K', label: 'Avg setup fee per agent' },
  { value: '$20K+', label: 'Weighted pipeline' },
  { value: '~$1,500', label: 'Monthly burn rate' },
  { value: 'Month 2', label: 'Revenue-generating since' },
  { value: '100%', label: 'Agents run in our pipeline first' },
]

const techStack = [
  'Claude / Anthropic',
  'N8N',
  'Supabase',
  'Vercel',
  'Next.js',
  'GoHighLevel',
  'Twilio',
  'Perplexity API',
]

const founders = [
  {
    name: 'Edwin Moreno',
    role: 'Co-founder & COO',
    tagline: 'Builds production AI systems from Mexico City',
    credentials: [
      'Singularity University (2× NASA campus)',
      'TEDx Speaker',
      'Forbes México Columnist — 40+ columns',
      'Coursera Instructor — AI Business Innovation',
    ],
    closer: 'Ships code. Every agent we sell, I build and test first.',
    linkedin: 'https://www.linkedin.com/in/edwinmorenovera/',
  },
  {
    name: 'Jorge Herrera',
    role: 'Co-founder & CEO',
    tagline: 'Designs sales playbooks that our AI agents execute',
    credentials: [
      'IE Business School EMBA',
      '15+ years building B2B sales teams',
      '700K+ LinkedIn impressions in 50 days',
      'Based in Madrid, Spain',
    ],
    closer: "The commercial brain. If an agent can't sell, it doesn't ship.",
    linkedin: 'https://www.linkedin.com/in/jorgeherreracruz/',
  },
]

// ── Component ──────────────────────────────────────────────────────────────────

const BOOKING_URL =
  'https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page'

export default function YCPage() {
  return (
    <div
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
      className="min-h-screen font-sans antialiased"
    >
      {/* ── Sticky Nav ──────────────────────────────────────────────────────── */}
      <YCNav />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-28 pt-24 text-center">
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(74,212,174,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
          className="absolute inset-0"
        />

        <div className="relative mx-auto max-w-4xl">
          <div
            style={{ borderColor: 'rgba(74,212,174,0.3)', color: 'var(--accent-cool)' }}
            className="badge-label mb-8 inline-flex"
          >
            YC Startup School 2026 · San Francisco, July 25–26
          </div>

          <h1
            className="font-display mb-6 text-balance"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: '1.1',
              fontWeight: 800,
              letterSpacing: '-0.025em',
            }}
          >
            We build AI agents that automate{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(90deg, #4AD4AE 0%, #F5A040 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              B2B sales and marketing pipelines
            </span>
          </h1>

          <p
            style={{ color: 'var(--text-secondary)' }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed"
          >
            8 production agents. Real companies. Real revenue.{' '}
            <span style={{ color: 'var(--text-primary)' }}>
              Built from Mexico City and Madrid.
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#agents"
              style={{
                background: 'linear-gradient(90deg, #4AD4AE 0%, #F5A040 100%)',
                color: '#0A0A0A',
              }}
              className="rounded-xl px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
            >
              See our agents in action →
            </a>
            <a
              href="#traction"
              style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              className="rounded-xl border px-8 py-4 text-base font-medium transition-colors hover:opacity-80"
            >
              View traction
            </a>
          </div>

          {/* Quick stats bar */}
          <div
            style={{ borderColor: 'var(--border)' }}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 rounded-2xl border sm:grid-cols-4"
          >
            {[
              { v: '8', l: 'agents live' },
              { v: '3', l: 'countries' },
              { v: '$20K+', l: 'pipeline' },
              { v: '~60%', l: 'net margin' },
            ].map((s, i) => (
              <div
                key={s.l}
                className="px-4 py-5 text-center"
                style={i > 0 ? { borderLeft: '1px solid var(--border)' } : undefined}
              >
                <div
                  style={{ color: 'var(--accent-cool)' }}
                  className="font-display text-2xl font-extrabold"
                >
                  {s.v}
                </div>
                <div style={{ color: 'var(--text-muted)' }} className="mt-1 text-xs uppercase tracking-widest">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem ─────────────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-3xl">
          <div
            style={{ borderColor: 'rgba(245,160,64,0.3)', color: 'var(--accent-warm)' }}
            className="badge-label mb-8 inline-flex"
          >
            The Problem
          </div>
          <p
            className="font-display mb-5 text-2xl font-bold leading-snug"
            style={{ letterSpacing: '-0.015em' }}
          >
            Mid-market B2B companies waste{' '}
            <span style={{ color: 'var(--accent-warm)' }}>70% of their sales team&apos;s time</span> on
            manual research, slow follow-ups, and zero personalization.
          </p>
          <p style={{ color: 'var(--text-secondary)' }} className="mb-4 text-lg leading-relaxed">
            The tools exist — but{' '}
            <span style={{ color: 'var(--text-primary)' }}>88% of AI projects fail because they never
            make it to production.</span> Most vendors sell workshops. We sell agents that run.
          </p>
          <p style={{ color: 'var(--text-secondary)' }} className="text-lg leading-relaxed">
            Our edge:{' '}
            <span style={{ color: 'var(--accent-cool)' }}>
              every agent we sell runs in our own sales pipeline first.
            </span>{' '}
            We don&apos;t pitch what we haven&apos;t shipped.
          </p>
        </div>
      </section>

      {/* ── Agents ──────────────────────────────────────────────────────────── */}
      <section id="agents" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4">
            <div
              style={{ borderColor: 'rgba(74,212,174,0.3)', color: 'var(--accent-cool)' }}
              className="badge-label inline-flex"
            >
              What We&apos;ve Built
            </div>
          </div>
          <h2
            className="font-display mb-3"
            style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            8 production AI agents
          </h2>
          <p style={{ color: 'var(--text-muted)' }} className="mb-12 text-base">
            Each agent solves one sales or marketing bottleneck. All in production. All generating revenue.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {agents.map((agent) => (
              <div
                key={agent.name}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
                className="group relative rounded-2xl p-6 transition-all duration-200 hover:opacity-90"
              >
                {/* Status badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    style={
                      agent.status === 'Live'
                        ? {
                            backgroundColor: 'rgba(74,212,174,0.12)',
                            color: '#4AD4AE',
                            border: '1px solid rgba(74,212,174,0.25)',
                          }
                        : {
                            backgroundColor: 'rgba(245,160,64,0.1)',
                            color: '#F5A040',
                            border: '1px solid rgba(245,160,64,0.2)',
                          }
                    }
                    className="rounded-full px-3 py-0.5 text-xs font-bold tracking-wide"
                  >
                    ● {agent.status}
                  </span>
                  {agent.url && (
                    <a
                      href={agent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent-cool)' }}
                      className="text-xs font-medium opacity-70 transition-opacity hover:opacity-100"
                    >
                      View live →
                    </a>
                  )}
                </div>

                <h3
                  className="font-display mb-2 text-lg font-semibold"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {agent.name}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }} className="mb-5 text-sm leading-relaxed">
                  {agent.description}
                </p>

                {/* Metric */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderTop: '1px solid var(--border)',
                  }}
                  className="-mx-6 -mb-6 rounded-b-2xl px-6 py-3"
                >
                  <span style={{ color: 'var(--text-primary)' }} className="text-sm font-semibold">
                    {agent.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traction ────────────────────────────────────────────────────────── */}
      <section
        id="traction"
        style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-4">
            <div
              style={{ borderColor: 'rgba(74,212,174,0.3)', color: 'var(--accent-cool)' }}
              className="badge-label inline-flex"
            >
              Traction
            </div>
          </div>
          <h2
            className="font-display mb-12"
            style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Numbers that matter
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
                className="rounded-2xl p-6 card-elevated"
              >
                <div
                  className="font-display mb-2 text-3xl font-extrabold"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #F5A040 0%, #4AD4AE 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {m.value}
                </div>
                <div style={{ color: 'var(--text-muted)' }} className="text-xs leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Now / Market ────────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4">
            <div
              style={{ borderColor: 'rgba(245,160,64,0.3)', color: 'var(--accent-warm)' }}
              className="badge-label inline-flex"
            >
              Why Now
            </div>
          </div>
          <h2
            className="font-display mb-3"
            style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            The world&apos;s largest untapped AI market speaks Spanish
          </h2>
          <p style={{ color: 'var(--text-muted)' }} className="mb-10 text-base">
            600M+ speakers. $500B+ in addressable B2B revenue. AI penetration below 10%. The tools exist — but nobody is building them in Spanish.
          </p>

          {/* Global macro stats */}
          <p style={{ color: 'var(--text-secondary)' }} className="mb-3 text-xs font-bold uppercase tracking-widest">
            Global picture
          </p>
          <div className="grid gap-3 sm:grid-cols-4 mb-10">
            {[
              { stat: '600M+', context: 'Native Spanish speakers', color: '#4AD4AE' },
              { stat: '<10%', context: 'LATAM SMBs using AI in sales', color: '#F5A040' },
              { stat: '$500B+', context: 'B2B revenue across Spanish markets', color: '#4AD4AE' },
              { stat: '7 countries', context: 'Where we can sell today', color: '#F5A040' },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
                className="rounded-2xl p-5 text-center"
              >
                <div
                  className="font-display mb-1 text-2xl font-extrabold"
                  style={{ color: item.color }}
                >
                  {item.stat}
                </div>
                <div style={{ color: 'var(--text-muted)' }} className="text-xs leading-snug">{item.context}</div>
              </div>
            ))}
          </div>

          {/* Individual markets */}
          <p style={{ color: 'var(--text-secondary)' }} className="mb-3 text-xs font-bold uppercase tracking-widest">
            Market by market
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {[
              {
                flag: '🇺🇸',
                market: 'United States',
                label: 'Primary market',
                labelColor: '#4AD4AE',
                stats: ['41M native Spanish speakers', '$2.7T Hispanic purchasing power', '62% of US Hispanics are business owners or decision-makers'],
                yc: 'Biggest B2B prize. Our agents close deals in English and Spanish — doubling reach for US sales teams targeting LATAM clients.',
              },
              {
                flag: '🇲🇽',
                market: 'Mexico',
                label: 'Operational base',
                labelColor: '#4AD4AE',
                stats: ['$3.7B AI market → $65B by 2030', '$43B nearshoring FDI (2025)', '7% of SMBs use AI in sales today'],
                yc: 'Where Edwin builds. 400K+ mid-market B2B companies. Nearshoring boom is creating hundreds of new sales teams that need automation — now.',
              },
              {
                flag: '🇪🇸',
                market: 'Spain',
                label: 'Operational base',
                labelColor: '#4AD4AE',
                stats: ['€150B+ B2B services market', 'EU headquarters for LATAM ops', '300K+ companies with €1M–€50M revenue'],
                yc: 'Where Jorge sells. Spain-based companies manage LATAM accounts from Madrid — one agent deployment serves both EU and LatAm markets.',
              },
              {
                flag: '🇦🇷',
                market: 'Argentina',
                label: 'High priority',
                labelColor: '#F5A040',
                stats: ['45M people, 98% literacy', '#1 LATAM tech talent density', 'Devaluation → SaaS costs 60–80% lower in USD'],
                yc: 'Best LATAM technical talent. Economic pressure creates urgency for automation. Strong startup ecosystem primed for AI sales tools.',
              },
              {
                flag: '🇵🇭',
                market: 'Philippines',
                label: 'Expansion target',
                labelColor: '#F5A040',
                stats: ['115M people, English + Spanish heritage', '$32B BPO industry', '1M+ outbound sales agents'],
                yc: 'BPO capital of the world. Sales teams already operate in Spanish and English. Our agents plug directly into existing outbound pipelines.',
              },
              {
                flag: '🌎',
                market: 'Colombia · Chile · Canada',
                label: 'Pipeline',
                labelColor: '#6B7280',
                stats: ['Colombia: $17B AI market by 2030', 'Chile: highest AI readiness in LATAM', 'Canada: 1.3M+ Spanish speakers, tech-forward'],
                yc: 'Pacific Alliance + diaspora markets. Colombia and Chile are the most AI-ready countries in LATAM after Mexico. Canada is a natural bridge to US enterprise.',
              },
            ].map((item) => (
              <div
                key={item.market}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
                className="rounded-2xl p-5 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.flag}</span>
                    <span className="font-display font-bold text-base">{item.market}</span>
                  </div>
                  <span
                    style={{ color: item.labelColor, borderColor: item.labelColor, opacity: 0.8 }}
                    className="text-xs font-bold border rounded-full px-2 py-0.5"
                  >
                    {item.label}
                  </span>
                </div>

                {/* Stats */}
                <ul className="mb-4 space-y-1">
                  {item.stats.map((s) => (
                    <li key={s} className="flex items-start gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#4AD4AE' }} className="shrink-0 mt-0.5">›</span>
                      {s}
                    </li>
                  ))}
                </ul>

                {/* YC angle */}
                <div
                  style={{ backgroundColor: 'rgba(74,212,174,0.05)', borderLeft: '2px solid rgba(74,212,174,0.3)' }}
                  className="mt-auto rounded-r-lg pl-3 py-2"
                >
                  <p style={{ color: 'var(--text-muted)' }} className="text-xs leading-relaxed italic">
                    {item.yc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ color: 'var(--text-muted)' }} className="text-sm">
            We&apos;re positioned at the intersection of{' '}
            <span style={{ color: 'var(--text-primary)' }}>AI + Spanish-speaking B2B + global sales automation</span>.
            The big players are building for English-first enterprise. We&apos;re building for the 600M they&apos;re ignoring.
          </p>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-4">
            <div
              style={{ borderColor: 'rgba(74,212,174,0.3)', color: 'var(--accent-cool)' }}
              className="badge-label inline-flex"
            >
              The Team
            </div>
          </div>
          <h2
            className="font-display mb-12"
            style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Technical builders who sell what they ship
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {founders.map((f) => (
              <div
                key={f.name}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
                className="rounded-2xl p-7 card-elevated"
              >
                <div className="mb-5">
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {f.name}
                  </h3>
                  <p style={{ color: 'var(--accent-warm)' }} className="mt-0.5 text-sm font-semibold">
                    {f.role}
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">
                    {f.tagline}
                  </p>
                </div>

                <ul className="mb-6 space-y-2">
                  {f.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm">
                      <span style={{ color: 'var(--accent-cool)' }} className="mt-0.5 shrink-0">
                        ›
                      </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{c}</span>
                    </li>
                  ))}
                </ul>

                <blockquote
                  style={{
                    borderLeft: '2px solid rgba(74,212,174,0.4)',
                    color: 'var(--text-primary)',
                  }}
                  className="mb-5 pl-4 text-sm italic leading-relaxed"
                >
                  &ldquo;{f.closer}&rdquo;
                </blockquote>

                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-cool)' }}
                  className="text-sm font-medium underline underline-offset-2 opacity-70 transition-opacity hover:opacity-100"
                >
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ──────────────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4">
            <div
              style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              className="badge-label inline-flex"
            >
              Our Stack
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)' }} className="mb-8 text-sm">
            Production-grade tools, no toy demos.
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
                className="rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────────── */}
      <section
        style={{ borderTop: '1px solid var(--border)' }}
        className="px-6 py-28 text-center"
      >
        <div className="relative mx-auto max-w-2xl">
          {/* Glow */}
          <div
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(245,160,64,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
            className="absolute inset-0"
          />

          <div className="relative">
            <div
              style={{ borderColor: 'rgba(245,160,64,0.3)', color: 'var(--accent-warm)' }}
              className="badge-label mb-8 inline-flex"
            >
              YC Startup School 2026
            </div>

            <h2
              className="font-display mb-5"
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Let&apos;s connect in San Francisco
            </h2>

            <p style={{ color: 'var(--text-secondary)' }} className="mx-auto mb-10 max-w-lg text-lg leading-relaxed">
              We&apos;re applying to YC Startup School 2026. If you&apos;re building at the
              intersection of AI and sales — or want to see our agents in action —
              book 20 minutes with us.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(90deg, #F5A040 0%, #4AD4AE 100%)',
                  color: '#0A0A0A',
                }}
                className="rounded-xl px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              >
                Book 20 minutes →
              </a>
              <a
                href="https://verymuch.ai"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                className="rounded-xl border px-8 py-4 text-base font-medium transition-opacity hover:opacity-80"
              >
                Explore verymuch.ai
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              {founders.map((f) => (
                <a
                  key={f.name}
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)' }}
                  className="text-sm transition-opacity hover:opacity-70"
                >
                  {f.name} on LinkedIn →
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          color: 'var(--text-muted)',
        }}
        className="px-6 py-8 text-center text-xs"
      >
        <p>
          © {new Date().getFullYear()} Verymuch.ai ·{' '}
          <a
            href="https://verymuch.ai"
            style={{ color: 'var(--text-secondary)' }}
            className="transition-opacity hover:opacity-70"
          >
            verymuch.ai
          </a>{' '}
          · Built in Mexico City & Madrid
        </p>
      </footer>
    </div>
  )
}
