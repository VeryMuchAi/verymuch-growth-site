import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
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
    badge: "✦ RECURSOS",
    readMore: "Leer artículo →",
    readTime: "de lectura",
  },
  en: {
    title: "Blog — AI for Sales & Marketing | VeryMuch.ai",
    description:
      "Practical articles on AI agents, marketing automation, and B2B sales. No theory — what works in production.",
    heading: "Blog",
    sub: "Practical articles on AI agents, marketing automation, and B2B sales.",
    badge: "✦ RESOURCES",
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
        className="relative overflow-hidden pt-36 pb-16 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 65% -15%, rgba(74,212,174,0.07) 0%, rgba(245,160,64,0.05) 45%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative text-center">
          <p className="mb-4">
            <span className="badge-label" style={{ color: "var(--accent-text)" }}>{m.badge}</span>
          </p>
          <h1
            className="font-extrabold leading-tight mb-4"
            style={{ fontSize: "clamp(2rem,5vw,3rem)", letterSpacing: "-0.025em", color: "var(--text-primary)" }}
          >
            {m.heading}
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {m.sub}
          </p>
        </div>
      </header>

      {/* ── Posts grid ───────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}` as `/blog/${string}`}
                className="group rounded-2xl p-6 border card-elevated transition-all duration-200 hover:scale-[1.01] flex flex-col gap-4"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                {/* Tag */}
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--accent-text)" }}
                >
                  {post.tag[lang]}
                </span>

                {/* Title */}
                <h2
                  className="text-lg font-bold leading-snug group-hover:opacity-80 transition-opacity"
                  style={{ color: "var(--text-primary)" }}
                >
                  {post.title[lang]}
                </h2>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                  {post.description[lang]}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span>{post.author}</span>
                  <span className="opacity-30">·</span>
                  <time dateTime={post.dateISO}>{post.date[lang]}</time>
                  <span className="opacity-30">·</span>
                  <span>{post.readTime[lang]} {m.readTime}</span>
                </div>

                {/* Read more */}
                <span
                  className="text-sm font-semibold mt-auto transition-colors"
                  style={{ color: "var(--accent-text)" }}
                >
                  {m.readMore}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
