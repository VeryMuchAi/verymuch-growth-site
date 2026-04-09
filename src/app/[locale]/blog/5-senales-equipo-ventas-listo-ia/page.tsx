import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-04-09";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

interface FaqItem { q: string; a: string }

interface PageContent {
  meta: {
    title: string; description: string;
    ogTitle: string; ogDescription: string; ogLocale: string;
  };
  breadcrumb: { home: string; blog: string; page: string };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  intro: { p1: string; p2: string };
  signals: {
    heading: string;
    items: { num: string; title: string; body: string; stat?: string }[];
  };
  what_next: { heading: string; p1: string; p2: string };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; sub: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  author: { label: string; name: string; role: string; profileLink: string };
}

const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title: "5 señales de que tu equipo de ventas está listo para IA — VeryMuch.ai",
      description:
        "¿Tu equipo de ventas está preparado para implementar agentes de IA? Estas 5 señales te dicen si es el momento — y qué hacer si no lo es todavía.",
      ogTitle: "5 señales de que tu equipo de ventas está listo para IA",
      ogDescription:
        "Identifica si tu empresa está en el momento adecuado para implementar agentes de IA en ventas. 5 indicadores claros con datos reales.",
      ogLocale: "es_ES",
    },
    breadcrumb: { home: "Inicio", blog: "Blog", page: "5 señales para IA en ventas" },
    hero: {
      badge: "✦ VENTAS CON IA",
      h1: "5 señales de que tu equipo de ventas está listo para IA",
      sub: "Antes de implementar un agente de IA, hay indicadores claros que separan a los equipos que lo aprovecharán al máximo de los que van a desperdiciar presupuesto.",
      by: "Por",
      date: "9 de abril, 2026",
      readTime: "5 min de lectura",
    },
    intro: {
      p1: "Según McKinsey, las empresas que implementan IA en ventas sin estar preparadas reportan un 67% de proyectos fallidos en los primeros 12 meses. El problema casi siempre no es la tecnología — es el timing y el contexto organizacional.",
      p2: "Después de trabajar con más de una docena de equipos comerciales en México, España y Colombia, hemos identificado 5 señales concretas que predicen si la implementación de IA va a generar ROI real o va a convertirse en otro proyecto piloto abandonado.",
    },
    signals: {
      heading: "Las 5 señales",
      items: [
        {
          num: "01",
          title: "Tienes un proceso de ventas documentado (aunque sea básico)",
          body: "Los agentes de IA no crean procesos — los automatizan. Si tu equipo no tiene claridad sobre qué hace en cada etapa del ciclo de ventas, el agente va a automatizar el caos. No necesitas un manual de 100 páginas, pero sí necesitas responder: ¿cuántos pasos tiene tu proceso? ¿Qué información se captura en CRM? ¿Cuándo pasa un lead de calificado a oportunidad?",
          stat: "Equipos con proceso documentado tienen 2.8x más ROI en implementaciones de IA — Salesforce State of Sales, 2025.",
        },
        {
          num: "02",
          title: "Tu equipo pasa más de 3 horas al día en tareas repetitivas",
          body: "Investigar prospectos manualmente, copiar datos entre sistemas, escribir follow-ups genéricos, actualizar stages en el CRM — si tu equipo pasa más de 3 horas al día en este tipo de trabajo, tienes una oportunidad concreta de recuperar ese tiempo con IA. La señal está en la fricción diaria: si tus vendedores se quejan de las mismas tareas semana tras semana, hay trabajo para un agente.",
        },
        {
          num: "03",
          title: "Tu velocidad de respuesta a leads es mayor a 15 minutos",
          body: "Hay un dato que cambia cómo piensas en IA para ventas: según Harvard Business Review, las empresas que responden a un lead en menos de 5 minutos tienen 21 veces más probabilidad de calificarlo que las que esperan 30 minutos. Si tu tiempo promedio de respuesta es mayor a 15 minutos (y para la mayoría de equipos medianos es de horas), un agente de calificación automático puede triplicar tu tasa de contacto.",
          stat: "21x más probabilidad de calificación respondiendo en menos de 5 minutos — Harvard Business Review.",
        },
        {
          num: "04",
          title: "Tienes datos históricos de tus deals",
          body: "No necesitas big data ni un warehouse sofisticado. Pero sí necesitas al menos 3-6 meses de datos en tu CRM: ¿cuánto tarda un deal promedio? ¿Qué industrias convierten mejor? ¿Qué tamaño de empresa tiene más propensión a cerrar? Con esa información, los agentes de IA pueden priorizar, personalizar y predecir — sin ella, actúan a ciegas. Si tienes datos, tienes combustible para la IA.",
        },
        {
          num: "05",
          title: "Alguien en el equipo quiere que esto funcione",
          body: "Este es el más subestimado. La implementación de IA en ventas no es un proyecto de IT — es un cambio en cómo trabaja el equipo comercial. Sin un champion interno (puede ser el director comercial, el RevOps manager, o incluso un AE) que adopte la herramienta, la integre en su rutina y defienda el proceso ante el equipo, el agente queda abandonado en semanas. La tecnología es el 30% del éxito. Las personas son el 70%.",
        },
      ],
    },
    what_next: {
      heading: "¿Cumples 3 o más señales? Es el momento.",
      p1: "No necesitas cumplir las 5 para empezar. Pero si identificas 3 o más en tu equipo, la ventana está abierta. En VeryMuch.ai, el primer paso es siempre el diagnóstico ARRI — un análisis de 30 minutos que te dice exactamente en qué nivel de madurez estás y qué caso de uso de IA tiene mayor ROI potencial para tu situación específica.",
      p2: "Si solo cumples 1 o 2, no es un problema — es una hoja de ruta. Podemos ayudarte a construir el proceso o preparar los datos para que en 60-90 días la implementación tenga sentido.",
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito un CRM para implementar IA en ventas?",
          a: "No es obligatorio, pero sí muy recomendable. Sin un CRM donde centralizar datos y acciones, el agente de IA opera sin memoria histórica. El 80% de nuestros clientes usa GoHighLevel o HubSpot. Si no tienes CRM, podemos implementar uno como parte del proyecto.",
        },
        {
          q: "¿Cuánto tiempo tarda una implementación de IA para ventas?",
          a: "Una implementación de Fase 1 (un agente de calificación o de seguimiento) tarda entre 3 y 6 semanas desde el diagnóstico hasta producción. Los casos más complejos (multi-agente, integraciones con ERP o CRM customizados) pueden tomar 2-3 meses.",
        },
        {
          q: "¿Qué pasa si mi equipo resiste el cambio?",
          a: "Es el escenario más común. Nuestra metodología incluye sesiones de enablement con el equipo comercial para que entiendan qué hace el agente, qué no hace, y cómo trabajar junto a él. Los agentes de IA no reemplazan vendedores — les devuelven tiempo para lo que realmente importa: construir relaciones y cerrar.",
        },
        {
          q: "¿Cuánto cuesta un agente de IA para ventas?",
          a: "El modelo de VeryMuch.ai parte de una instalación (€4,500-8,500 dependiendo de complejidad) más operación mensual (AaaS desde €1,200/mes). Esto incluye el agente, las integraciones, el monitoring y los ajustes iterativos. El ROI típico se recupera en 2-4 meses.",
        },
      ],
    },
    cta: {
      heading: "¿Quieres saber si tu equipo está listo?",
      sub: "El diagnóstico ARRI es gratuito, dura 30 minutos, y te da un roadmap claro — sin compromiso.",
      ctaPrimary: "Hacer el diagnóstico ARRI →",
      ctaSecondary: "Leer la guía completa de agentes IA",
      ctaSecondaryLink: "/guia/agentes-ia-ventas-b2b",
    },
    author: {
      label: "Escrito por",
      name: "Edwin Moreno",
      role: "COO & Co-Fundador, VeryMuch.ai",
      profileLink: "/autor/edwin-moreno",
    },
  },
  en: {
    meta: {
      title: "5 signs your sales team is ready for AI — VeryMuch.ai",
      description:
        "Is your sales team prepared to implement AI agents? These 5 signals tell you if it's the right moment — and what to do if it's not yet.",
      ogTitle: "5 signs your sales team is ready for AI",
      ogDescription:
        "Identify if your company is at the right stage to implement AI agents in sales. 5 clear indicators with real data.",
      ogLocale: "en_US",
    },
    breadcrumb: { home: "Home", blog: "Blog", page: "5 signals for AI in sales" },
    hero: {
      badge: "✦ AI SALES",
      h1: "5 signs your sales team is ready for AI",
      sub: "Before implementing an AI agent, there are clear indicators that separate teams that will maximize its value from those that will waste their budget.",
      by: "By",
      date: "April 9, 2026",
      readTime: "5 min read",
    },
    intro: {
      p1: "According to McKinsey, companies that implement AI in sales without being ready report a 67% failure rate within the first 12 months. The problem is almost never the technology — it's the timing and organizational context.",
      p2: "After working with more than a dozen sales teams across Mexico, Spain, and Colombia, we've identified 5 concrete signals that predict whether AI implementation will generate real ROI or become another abandoned pilot.",
    },
    signals: {
      heading: "The 5 signals",
      items: [
        {
          num: "01",
          title: "You have a documented sales process (even a basic one)",
          body: "AI agents don't create processes — they automate them. If your team lacks clarity on what happens at each stage of the sales cycle, the agent will automate chaos. You don't need a 100-page manual, but you do need to answer: How many steps does your process have? What information is captured in the CRM? When does a lead move from qualified to opportunity?",
          stat: "Teams with documented processes get 2.8x more ROI from AI implementations — Salesforce State of Sales, 2025.",
        },
        {
          num: "02",
          title: "Your team spends more than 3 hours a day on repetitive tasks",
          body: "Researching prospects manually, copying data between systems, writing generic follow-ups, updating CRM stages — if your team spends more than 3 hours a day on this kind of work, you have a concrete opportunity to reclaim that time with AI. The signal is in daily friction: if your reps complain about the same tasks week after week, there's work for an agent.",
        },
        {
          num: "03",
          title: "Your lead response time is more than 15 minutes",
          body: "There's a stat that changes how you think about AI for sales: according to Harvard Business Review, companies that respond to a lead in under 5 minutes are 21 times more likely to qualify it than those that wait 30 minutes. If your average response time is over 15 minutes (and for most mid-size teams it's measured in hours), an automatic qualification agent can triple your contact rate.",
          stat: "21x more likely to qualify a lead by responding in under 5 minutes — Harvard Business Review.",
        },
        {
          num: "04",
          title: "You have historical deal data",
          body: "You don't need big data or a sophisticated warehouse. But you do need at least 3-6 months of data in your CRM: How long does an average deal take? Which industries convert best? What company size has the highest close propensity? With that information, AI agents can prioritize, personalize, and predict — without it, they operate blind. If you have data, you have fuel for AI.",
        },
        {
          num: "05",
          title: "Someone on the team wants this to work",
          body: "This is the most underestimated signal. AI implementation in sales isn't an IT project — it's a change in how the commercial team works. Without an internal champion (could be the sales director, RevOps manager, or even an AE) who adopts the tool, integrates it into their routine, and defends the process to the team, the agent gets abandoned within weeks. Technology is 30% of success. People are 70%.",
        },
      ],
    },
    what_next: {
      heading: "Check 3 or more signals? It's time.",
      p1: "You don't need all 5 to start. But if you identify 3 or more in your team, the window is open. At VeryMuch.ai, the first step is always the ARRI diagnostic — a 30-minute analysis that tells you exactly what maturity level you're at and which AI use case has the highest ROI potential for your specific situation.",
      p2: "If you only check 1 or 2, that's not a problem — it's a roadmap. We can help you build the process or prepare the data so that in 60-90 days, the implementation makes sense.",
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Do I need a CRM to implement AI in sales?",
          a: "It's not required, but highly recommended. Without a CRM to centralize data and actions, the AI agent operates without historical memory. 80% of our clients use GoHighLevel or HubSpot. If you don't have a CRM, we can implement one as part of the project.",
        },
        {
          q: "How long does an AI sales implementation take?",
          a: "A Phase 1 implementation (one qualification or follow-up agent) takes 3-6 weeks from diagnosis to production. More complex cases (multi-agent, integrations with ERP or custom CRMs) can take 2-3 months.",
        },
        {
          q: "What if my team resists the change?",
          a: "This is the most common scenario. Our methodology includes enablement sessions with the sales team so they understand what the agent does, what it doesn't do, and how to work alongside it. AI agents don't replace salespeople — they give them back time for what really matters: building relationships and closing.",
        },
        {
          q: "How much does an AI sales agent cost?",
          a: "VeryMuch.ai's model starts with an installation (€4,500-8,500 depending on complexity) plus monthly operation (AaaS from €1,200/month). This includes the agent, integrations, monitoring, and iterative adjustments. Typical ROI is recovered in 2-4 months.",
        },
      ],
    },
    cta: {
      heading: "Want to know if your team is ready?",
      sub: "The ARRI diagnostic is free, takes 30 minutes, and gives you a clear roadmap — no commitment required.",
      ctaPrimary: "Take the ARRI diagnostic →",
      ctaSecondary: "Read the complete AI agents guide",
      ctaSecondaryLink: "/guia/agentes-ia-ventas-b2b",
    },
    author: {
      label: "Written by",
      name: "Edwin Moreno",
      role: "COO & Co-Founder, VeryMuch.ai",
      profileLink: "/autor/edwin-moreno",
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = CONTENT[locale as "es" | "en"] ?? CONTENT.es;
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/blog/5-senales-equipo-ventas-listo-ia`
      : `${BASE_URL}/blog/5-senales-equipo-ventas-listo-ia`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/5-senales-equipo-ventas-listo-ia`,
        en: `${BASE_URL}/en/blog/5-senales-equipo-ventas-listo-ia`,
        "x-default": `${BASE_URL}/blog/5-senales-equipo-ventas-listo-ia`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "VeryMuch.ai",
      locale: c.meta.ogLocale,
      url: canonical,
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: c.meta.ogTitle }],
      publishedTime: PUBLISHED,
      authors: ["https://verymuch.ai/autor/edwin-moreno"],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export default async function SenalesEquipoVentasPage({ params }: Props) {
  const { locale } = await params;
  const c = CONTENT[locale as "es" | "en"] ?? CONTENT.es;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.meta.ogTitle,
    description: c.meta.description,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/autor/edwin-moreno`,
      name: "Edwin Moreno",
      url: `${BASE_URL}/autor/edwin-moreno`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Verymuch.ai",
      url: BASE_URL,
    },
    url: `${BASE_URL}/blog/5-senales-equipo-ventas-listo-ia`,
    image: OG_IMAGE,
    inLanguage: locale === "en" ? "en" : "es",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: c.breadcrumb.home, item: locale === "en" ? `${BASE_URL}/en` : BASE_URL },
      { "@type": "ListItem", position: 2, name: c.breadcrumb.blog, item: locale === "en" ? `${BASE_URL}/en/blog` : `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: c.breadcrumb.page, item: locale === "en" ? `${BASE_URL}/en/blog/5-senales-equipo-ventas-listo-ia` : `${BASE_URL}/blog/5-senales-equipo-ventas-listo-ia` },
    ],
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <HomeNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-36 pb-12 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 65% -15%, rgba(74,212,174,0.07) 0%, rgba(245,160,64,0.05) 45%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8 opacity-60" style={{ color: "var(--text-secondary)" }}>
            <Link href="/">{c.breadcrumb.home}</Link>
            <span>/</span>
            <Link href="/blog">{c.breadcrumb.blog}</Link>
            <span>/</span>
            <span>{c.breadcrumb.page}</span>
          </nav>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(180deg, #5AD4AE 0%, #F5A05E 100%)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5AD4AE" }}>
              {c.hero.badge}
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.hero.h1}
          </h1>

          <p className="text-lg leading-relaxed mb-8 opacity-80" style={{ color: "var(--text-secondary)" }}>
            {c.hero.sub}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm opacity-60 pb-8 border-b" style={{ color: "var(--text-secondary)", borderColor: "var(--border-color)" }}>
            <span>
              {c.hero.by}{" "}
              <Link href={c.author.profileLink} className="font-semibold hover:underline" style={{ color: "var(--text-primary)" }}>
                {c.author.name}
              </Link>
            </span>
            <span>·</span>
            <span>{c.hero.date}</span>
            <span>·</span>
            <span>{c.hero.readTime}</span>
          </div>
        </div>
      </header>

      {/* ── Article body ─────────────────────────────────────────────────── */}
      <article className="px-6 py-12">
        <div className="max-w-3xl mx-auto">

          {/* Intro */}
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{c.intro.p1}</p>
          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>{c.intro.p2}</p>

          {/* Signals */}
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.signals.heading}
          </h2>

          <div className="flex flex-col gap-10 mb-12">
            {c.signals.items.map((signal) => (
              <div
                key={signal.num}
                className="p-6 rounded-2xl border"
                style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-3xl font-extrabold flex-shrink-0 leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      background: "linear-gradient(135deg, #5AD4AE 0%, #F5A05E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {signal.num}
                  </span>
                  <div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                    >
                      {signal.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                      {signal.body}
                    </p>
                    {signal.stat && (
                      <blockquote
                        className="border-l-2 pl-4 text-sm italic opacity-80"
                        style={{ borderColor: "#5AD4AE", color: "var(--text-secondary)" }}
                      >
                        {signal.stat}
                      </blockquote>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What next */}
          <div
            className="p-6 rounded-2xl mb-12"
            style={{ background: "linear-gradient(135deg, rgba(90,212,174,0.08) 0%, rgba(245,160,94,0.08) 100%)", border: "1px solid rgba(90,212,174,0.2)" }}
          >
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {c.what_next.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{c.what_next.p1}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.what_next.p2}</p>
          </div>

          {/* FAQ */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.faq.heading}
          </h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.faq.items.map((item, i) => (
              <details
                key={i}
                className="group p-5 rounded-xl border cursor-pointer"
                style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
              >
                <summary
                  className="font-semibold text-sm list-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed opacity-80" style={{ color: "var(--text-secondary)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          {/* Author box */}
          <div
            className="p-5 rounded-xl flex items-start gap-4 mb-2"
            style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-white text-sm"
              style={{ background: "linear-gradient(135deg, #5AD4AE 0%, #F5A05E 100%)" }}
            >
              EM
            </div>
            <div>
              <p className="text-xs opacity-60 mb-0.5" style={{ color: "var(--text-secondary)" }}>{c.author.label}</p>
              <Link
                href={c.author.profileLink}
                className="font-semibold text-sm hover:underline"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
              >
                {c.author.name}
              </Link>
              <p className="text-xs opacity-60 mt-0.5" style={{ color: "var(--text-secondary)" }}>{c.author.role}</p>
            </div>
          </div>
        </div>
      </article>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.cta.heading}
          </h2>
          <p className="text-base mb-8 opacity-70" style={{ color: "var(--text-secondary)" }}>
            {c.cta.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #F5405E 0%, #F5A05E 100%)" }}
            >
              {c.cta.ctaPrimary}
            </a>
            <Link
              href={c.cta.ctaSecondaryLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all border hover:border-opacity-60"
              style={{
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                background: "transparent",
              }}
            >
              {c.cta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
