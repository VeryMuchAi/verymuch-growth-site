import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://verymuch.ai";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

const META = {
  es: {
    title: "Blog — IA aplicada a ventas y marketing | VeryMuch.ai",
    description:
      "Artículos prácticos sobre agentes de IA, automatización de marketing y ventas B2B. Sin teoría — lo que funciona en producción.",
    heading: "Blog",
    sub: "Artículos prácticos sobre agentes de IA, automatización de marketing y ventas B2B.",
    badge: "RECURSOS · BLOG",
    readMore: "Leer artículo →",
    readTime: "de lectura",
  },
  en: {
    title: "Blog — AI for Sales & Marketing | VeryMuch.ai",
    description:
      "Practical articles on AI agents, marketing automation, and B2B sales. No theory — what works in production.",
    heading: "Blog",
    sub: "Practical articles on AI agents, marketing automation, and B2B sales.",
    badge: "RESOURCES · BLOG",
    readMore: "Read article →",
    readTime: "read",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale as "es" | "en"] ?? META.es;
  const canonical =
    locale === "en" ? `${BASE_URL}/en/blog` : `${BASE_URL}/blog`;

  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog`,
        en: `${BASE_URL}/en/blog`,
        "x-default": `${BASE_URL}/blog`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Verymuch.ai",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: canonical,
      title: m.title,
      description: m.description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "VeryMuch.ai" }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  const m = META[locale as "es" | "en"] ?? META.es;
  const lang = (locale as "es" | "en") === "en" ? "en" : "es";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: lang === "es" ? "Inicio" : "Home", item: locale === "en" ? `${BASE_URL}/en` : BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: locale === "en" ? `${BASE_URL}/en/blog` : `${BASE_URL}/blog` },
    ],
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <HomeNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-36 pb-20 px-6 vm-grain"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            right: "-10%",
            width: "55%",
            height: "70%",
            background:
              "radial-gradient(ellipse at center, rgba(172,237,235,0.18) 0%, rgba(218,184,130,0.12) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
        <div className="max-w-3xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--eyebrow)" }} />
            <span className="vm-eyebrow">{m.badge}</span>
          </div>
          <h1 className="vm-display-l mb-5" style={{ color: "var(--text-primary)" }}>
            {m.heading}
          </h1>
          <p className="vm-body-l max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {m.sub}
          </p>
        </div>
      </header>

      {/* ── Posts grid ───────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {blogPosts.filter((post) => !post.draft).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}` as `/blog/${string}`}
                className="vm-card p-6 flex flex-col gap-4 no-underline"
              >
                <span className="vm-eyebrow" style={{ color: "var(--eyebrow)" }}>
                  {post.tag[lang]}
                </span>

                <h2 className="vm-heading" style={{ color: "var(--text-primary)" }}>
                  {post.title[lang]}
                </h2>

                <p className="vm-body-s flex-1" style={{ color: "var(--text-secondary)" }}>
                  {post.description[lang]}
                </p>

                <div className="flex items-center gap-3 vm-caption" style={{ color: "var(--text-muted)" }}>
                  <span>{post.author}</span>
                  <span className="opacity-40">·</span>
                  <time dateTime={post.dateISO}>{post.date[lang]}</time>
                  <span className="opacity-40">·</span>
                  <span>{post.readTime[lang]} {m.readTime}</span>
                </div>

                <span
                  className="vm-body-s mt-auto"
                  style={{ color: "var(--text-primary)", fontWeight: 600 }}
                >
                  {m.readMore}
                </span>
              </Link>
            ))}
          </div>

          {/* ── Guías pillar (featured wash) ─────────────────────────────── */}
          <div className="mt-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--eyebrow)" }} />
              <span className="vm-eyebrow">
                {lang === "en" ? "GUÍAS · COMPLETAS" : "GUÍAS · COMPLETAS"}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/guia/agentes-ia-ventas-b2b"
                className="vm-card-featured p-6 flex flex-col sm:flex-row sm:items-center gap-4 no-underline"
              >
                <div className="flex-1 min-w-0">
                  <span className="vm-eyebrow mb-2 block" style={{ color: "var(--text-muted)" }}>
                    {lang === "en" ? "GUIDE · 18 MIN" : "GUÍA · 18 MIN"}
                  </span>
                  <h3 className="vm-heading mb-2" style={{ color: "var(--text-primary)" }}>
                    {lang === "en"
                      ? "AI Agents for B2B Sales: Complete Guide 2026"
                      : "Agentes de IA para Ventas B2B: Guía Completa 2026"}
                  </h3>
                  <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
                    {lang === "en"
                      ? "What they are, how they work, real ROI data and how to implement them. McKinsey, Gartner, Bain and 80+ sources."
                      : "Qué son, cómo funcionan, ROI real y cómo implementarlos. Datos de McKinsey, Gartner, Bain y +80 fuentes."}
                  </p>
                </div>
                <span className="shrink-0 vm-body-s" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  {lang === "en" ? "Read guide →" : "Leer guía →"}
                </span>
              </Link>

              <Link
                href="/guia/como-elegir-agencia-ia"
                className="vm-card-featured p-6 flex flex-col sm:flex-row sm:items-center gap-4 no-underline"
              >
                <div className="flex-1 min-w-0">
                  <span className="vm-eyebrow mb-2 block" style={{ color: "var(--text-muted)" }}>
                    {lang === "en" ? "GUIDE · 22 MIN" : "GUÍA · 22 MIN"}
                  </span>
                  <h3 className="vm-heading mb-2" style={{ color: "var(--text-primary)" }}>
                    {lang === "en"
                      ? "How to Choose an AI Agency: Complete Guide 2026"
                      : "Cómo elegir una agencia de IA: guía completa 2026"}
                  </h3>
                  <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
                    {lang === "en"
                      ? "88% of AI projects fail. 7 criteria, 5 red flags and a step-by-step framework. 60+ verified sources."
                      : "El 88% de los proyectos de IA fracasan. 7 criterios, 5 red flags y framework de evaluación. +60 fuentes verificadas."}
                  </p>
                </div>
                <span className="shrink-0 vm-body-s" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  {lang === "en" ? "Read guide →" : "Leer guía →"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
