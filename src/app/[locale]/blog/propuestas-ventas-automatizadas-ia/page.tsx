import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-05-26";
const SLUG = "propuestas-ventas-automatizadas-ia";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

interface StatCard { stat: string; label: string; source: string }
interface FaqItem { q: string; a: string }
interface BenefitItem { icon: string; title: string; description: string }
interface StepItem { number: string; title: string; description: string; tool: string }

interface PageContent {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogLocale: string };
  breadcrumb: { home: string; blog: string; page: string };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  intro: { p1: string; p2: string };
  problem: { heading: string; body: string; stats: StatCard[] };
  what_is: { heading: string; body: string };
  benefits: { heading: string; items: BenefitItem[] };
  steps: { heading: string; items: StepItem[] };
  results: { heading: string; body: string; items: { metric: string; description: string }[] };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; sub: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  author: { label: string; name: string; role: string; profileLink: string; initials: string };
}

const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title: "Propuestas de ventas automatizadas con IA en 2026 — VeryMuch.ai",
      description:
        "Cómo automatizar la creación de propuestas comerciales con IA: desde el brief del cliente hasta el documento personalizado en minutos. Más cierres, menos tiempo de preparación.",
      ogTitle: "Propuestas de ventas automatizadas con IA en 2026",
      ogDescription:
        "En VeryMuch.ai automatizamos la generación de propuestas comerciales con IA. El sistema crea propuestas personalizadas en minutos usando datos reales del cliente. Así funciona.",
      ogLocale: "es_ES",
    },
    breadcrumb: { home: "Inicio", blog: "Blog", page: "Propuestas de ventas automatizadas con IA" },
    hero: {
      badge: "✦ Automatización Comercial",
      h1: "Propuestas de ventas automatizadas con IA: más cierres, menos tiempo en 2026",
      sub: "El 35% del tiempo de un equipo de ventas B2B se dedica a crear propuestas comerciales. La IA puede reducirlo al 10% — sin sacrificar personalización. El resultado: más tiempo cerrando, menos tiempo escribiendo.",
      by: "Por",
      date: "26 de mayo, 2026",
      readTime: "9 min de lectura",
    },
    intro: {
      p1: "Cada propuesta comercial que envía un equipo de ventas B2B representa entre 2 y 6 horas de trabajo: investigación del cliente, redacción del diagnóstico, estructuración de la solución, cálculo de precio, diseño del documento. Para un equipo que gestiona 15-20 oportunidades simultáneas, eso es una fracción enorme del tiempo productivo que no se dedica a vender.",
      p2: "Los agentes de IA para propuestas comerciales no generan documentos genéricos — generan propuestas que parecen escritas por el mejor vendedor de tu equipo después de dos horas de preparación. La diferencia está en cómo el sistema usa los datos reales del cliente para crear un documento que habla directamente de sus problemas, sus métricas y sus objetivos.",
    },
    problem: {
      heading: "El costo real de crear propuestas comerciales sin IA",
      body: "El problema no es solo el tiempo — es la inconsistencia. Cuando cada vendedor prepara propuestas a su manera, la calidad varía enormemente. Un cliente que habla con el mejor vendedor del equipo recibe una propuesta brillante. El que habla con alguien con mucha carga de trabajo recibe algo apresurado. La IA estandariza la calidad al nivel del mejor — para todos los clientes.",
      stats: [
        { stat: "35%", label: "del tiempo de ventas B2B se dedica a tareas administrativas como propuestas", source: "Salesforce State of Sales" },
        { stat: "2–6h", label: "tiempo promedio de preparación por propuesta comercial personalizada", source: "Gartner Sales Benchmark" },
        { stat: "28%", label: "más tasa de cierre con propuestas personalizadas vs propuestas plantilla genérica", source: "Qwilr Proposal Report 2025" },
      ],
    },
    what_is: {
      heading: "¿Qué es una propuesta de ventas automatizada con IA?",
      body: "Una propuesta de ventas automatizada con IA es un documento comercial generado por un agente que combina: (1) los datos reales del cliente potencial (empresa, sector, problema expresado, tamaño, objetivos), (2) el catálogo de servicios y casos de éxito de tu empresa, y (3) las mejores prácticas de estructura y persuasión comercial. El agente no rellena una plantilla — construye un argumento comercial personalizado que conecta el problema específico del cliente con la solución específica que tú ofreces, usando métricas reales cuando están disponibles.",
    },
    benefits: {
      heading: "4 ventajas concretas de automatizar propuestas con IA",
      items: [
        {
          icon: "⚡",
          title: "Velocidad: de horas a minutos",
          description: "Una propuesta que tomaba 3–4 horas de preparación se genera en 10–15 minutos. El vendedor revisa, ajusta el tono y aprueba — pero no empieza desde cero. Esto permite responder a oportunidades el mismo día en que llegan, en lugar de pedir al prospecto que espere 48 horas.",
        },
        {
          icon: "🎯",
          title: "Personalización consistente a escala",
          description: "Cada propuesta incluye referencias específicas a la empresa del cliente, su sector, los problemas que mencionó en la reunión, y cómo tu solución resuelve exactamente esos problemas. No hay una sola versión genérica — hay tantas versiones como clientes, generadas en el mismo tiempo que tomaba escribir una sola.",
        },
        {
          icon: "📊",
          title: "Datos reales en el argumento comercial",
          description: "El agente puede consultar automáticamente datos públicos del cliente (web, LinkedIn, noticias recientes, tecnologías que usa) e incorporarlos en la propuesta. Si el cliente acaba de levantar financiación, la propuesta puede hacer referencia a ese contexto. Si usa un CRM específico, la propuesta describe la integración con ese sistema.",
        },
        {
          icon: "🔄",
          title: "Aprendizaje continuo de lo que funciona",
          description: "El sistema registra qué propuestas se convierten en contratos y cuáles no, y aprende los patrones de las propuestas ganadoras. Con el tiempo, el agente incorpora automáticamente los elementos — estructura, frases clave, niveles de detalle — que históricamente generan más cierres en tu empresa específica.",
        },
      ],
    },
    steps: {
      heading: "El proceso en 5 pasos: cómo funciona en VeryMuch.ai",
      items: [
        {
          number: "01",
          title: "Brief de la reunión de ventas",
          description: "Después de cada llamada o reunión de ventas, el vendedor completa un brief estructurado en 5 minutos: problema principal del cliente, métricas actuales vs deseadas, presupuesto aproximado, plazos, y decisores involucrados. Este brief puede ser un formulario, una nota de voz transcrita por IA, o incluso el resumen automático de una llamada grabada con Fireflies o Otter.",
          tool: "Fireflies / Otter + n8n",
        },
        {
          number: "02",
          title: "Enriquecimiento automático del contexto del cliente",
          description: "El agente complementa el brief con datos externos: perfil de la empresa en LinkedIn, noticias recientes, tecnologías que usa (detectadas vía Clearbit o BuiltWith), tamaño del equipo y estructura organizacional. Esta investigación que tomaría 45 minutos al vendedor se completa en segundos.",
          tool: "Perplexity API + Clay / Apollo",
        },
        {
          number: "03",
          title: "Generación de la propuesta personalizada",
          description: "Con el brief y los datos de contexto, el agente genera la propuesta completa: diagnóstico del problema del cliente, solución propuesta con detalle técnico y de proceso, cronograma de implementación, inversión requerida (con desglose de fases), casos de éxito relevantes del sector del cliente, y una sección de ROI esperado con las métricas del cliente. El documento tiene entre 4 y 8 páginas según la complejidad.",
          tool: "Claude (Anthropic) + plantilla branded",
        },
        {
          number: "04",
          title: "Revisión y personalización final por el vendedor",
          description: "El vendedor recibe el borrador y dedica 15–20 minutos a revisar el tono, ajustar precios si aplica, añadir contexto de la relación personal con el cliente, y verificar que los números sean correctos. El 80% del trabajo ya está hecho — el vendedor aporta el 20% que requiere juicio humano y conocimiento de la relación.",
          tool: "Google Docs / Notion con acceso compartido",
        },
        {
          number: "05",
          title: "Envío inteligente y seguimiento automatizado",
          description: "La propuesta se envía con un link de tracking que notifica al vendedor cuando el cliente la abre, cuánto tiempo dedica a cada sección, y si la comparte con otras personas. Si el cliente no abre en 48 horas, el sistema envía un recordatorio automático. Si la abre varias veces la página de precio, el vendedor recibe una alerta para llamar ese mismo día.",
          tool: "Qwilr / PandaDoc + n8n + CRM",
        },
      ],
    },
    results: {
      heading: "Resultados reales en clientes de VeryMuch.ai",
      body: "Métricas observadas en implementaciones de propuestas automatizadas con IA para equipos de ventas B2B en México y España.",
      items: [
        { metric: "85%", description: "Reducción en tiempo de preparación de propuestas (de 3–4h a 20–30 min)" },
        { metric: "28%", description: "Mejora en tasa de cierre vs propuestas plantilla genérica" },
        { metric: "2x", description: "Más propuestas enviadas por vendedor en el mismo período" },
        { metric: "Semana 3", description: "Primera propuesta generada con el sistema en producción" },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Las propuestas generadas por IA suenan artificiales o genéricas?",
          a: "No, si el sistema está bien configurado. La clave es el brief detallado y los datos de contexto del cliente. Una propuesta bien generada incluye referencias específicas al problema del cliente, métricas reales de su empresa, y casos de éxito del mismo sector. El cliente no puede distinguirla de una propuesta escrita manualmente porque habla directamente de su situación — no de situaciones hipotéticas.",
        },
        {
          q: "¿El sistema funciona para cualquier tipo de servicio?",
          a: "Funciona mejor para servicios B2B con componente de consultoría o personalización: agencias, consultoras, empresas de software a medida, integradores tecnológicos, firmas de servicios profesionales. Para productos con precio fijo y sin personalización, el valor de la automatización es menor porque las propuestas son prácticamente iguales para todos los clientes.",
        },
        {
          q: "¿Puedo integrar el sistema con el CRM que ya tengo?",
          a: "Sí. El sistema que implementamos se conecta con GoHighLevel, HubSpot, Salesforce y Pipedrive vía API. El brief del vendedor puede completarse directamente en el CRM, y la propuesta generada se guarda automáticamente como documento adjunto a la oportunidad. El vendedor no sale del CRM para gestionar propuestas.",
        },
        {
          q: "¿Cómo se mantiene actualizado el catálogo de servicios y casos de éxito?",
          a: "El sistema incluye una base de conocimiento que el equipo actualiza periódicamente — nuevos servicios, nuevos casos de éxito, nuevos precios. Esta actualización toma 30–60 minutos al mes y se hace en un documento compartido (Notion o Google Docs) que el agente consulta automáticamente al generar cada propuesta. No requiere conocimientos técnicos para actualizar.",
        },
        {
          q: "¿Cuánto cuesta implementar propuestas automatizadas con IA en VeryMuch.ai?",
          a: "Una implementación de Fase 1 (brief + enriquecimiento + generación + tracking) parte de €4,500 de instalación + €1,200/mes de operación (AaaS). Esto incluye configuración de la plantilla de propuesta con tu branding, integración con el CRM, base de conocimiento con tus servicios y casos de éxito, y monitoreo mensual. El ROI positivo típico se alcanza en el primer mes — el ahorro de tiempo del equipo de ventas cubre la inversión.",
        },
      ],
    },
    cta: {
      heading: "¿Tu equipo pasa más tiempo preparando propuestas que cerrando?",
      sub: "En el diagnóstico ARRI (30 min, gratuito) auditamos tu proceso actual de propuestas y te decimos exactamente cómo automatizarlo para que tu equipo dedique más tiempo a lo que importa: cerrar.",
      ctaPrimary: "Hacer el diagnóstico ARRI →",
      ctaSecondary: "Leer: Automatizar el seguimiento de leads con IA",
      ctaSecondaryLink: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      label: "Escrito por",
      name: "Edwin Moreno",
      role: "COO & Co-Fundador, VeryMuch.ai",
      profileLink: "/autor/edwin-moreno",
      initials: "EM",
    },
  },
  en: {
    meta: {
      title: "Automated Sales Proposals with AI in 2026 — VeryMuch.ai",
      description:
        "How to automate sales proposal creation with AI: from client brief to personalized document in minutes. More closes, less preparation time.",
      ogTitle: "Automated Sales Proposals with AI in 2026",
      ogDescription:
        "At VeryMuch.ai we automate sales proposal generation with AI. The system creates personalized proposals in minutes using real client data. Here's how it works.",
      ogLocale: "en_US",
    },
    breadcrumb: { home: "Home", blog: "Blog", page: "Automated Sales Proposals with AI" },
    hero: {
      badge: "✦ Sales Automation",
      h1: "Automated sales proposals with AI: more closes, less time in 2026",
      sub: "35% of a B2B sales team's time is spent creating sales proposals. AI can reduce that to 10% — without sacrificing personalization. The result: more time closing, less time writing.",
      by: "By",
      date: "May 26, 2026",
      readTime: "9 min read",
    },
    intro: {
      p1: "Every sales proposal a B2B sales team sends represents 2–6 hours of work: client research, diagnostic writing, solution structuring, pricing calculations, document design. For a team managing 15–20 simultaneous opportunities, that's a huge fraction of productive time not spent actually selling.",
      p2: "AI agents for sales proposals don't generate generic documents — they generate proposals that look like they were written by your best salesperson after two hours of preparation. The difference is in how the system uses real client data to create a document that speaks directly to their problems, their metrics, and their objectives.",
    },
    problem: {
      heading: "The real cost of creating sales proposals without AI",
      body: "The problem isn't just time — it's inconsistency. When every salesperson prepares proposals their own way, quality varies enormously. A client who talks to the team's best salesperson gets a brilliant proposal. One who talks to someone with a heavy workload gets something rushed. AI standardizes quality to the best level — for every client.",
      stats: [
        { stat: "35%", label: "of B2B sales time is spent on administrative tasks like proposals", source: "Salesforce State of Sales" },
        { stat: "2–6h", label: "average preparation time per personalized sales proposal", source: "Gartner Sales Benchmark" },
        { stat: "28%", label: "higher close rate with personalized proposals vs generic templates", source: "Qwilr Proposal Report 2025" },
      ],
    },
    what_is: {
      heading: "What is an AI-automated sales proposal?",
      body: "An AI-automated sales proposal is a commercial document generated by an agent that combines: (1) real data about the prospective client (company, sector, expressed problem, size, objectives), (2) your company's service catalog and success cases, and (3) best practices for commercial structure and persuasion. The agent doesn't fill in a template — it builds a personalized commercial argument that connects the client's specific problem with the specific solution you offer, using real metrics when available.",
    },
    benefits: {
      heading: "4 concrete advantages of automating proposals with AI",
      items: [
        {
          icon: "⚡",
          title: "Speed: from hours to minutes",
          description: "A proposal that took 3–4 hours to prepare is generated in 10–15 minutes. The salesperson reviews, adjusts the tone, and approves — but doesn't start from scratch. This allows responding to opportunities the same day they arrive, instead of asking the prospect to wait 48 hours.",
        },
        {
          icon: "🎯",
          title: "Consistent personalization at scale",
          description: "Every proposal includes specific references to the client's company, their sector, the problems they mentioned in the meeting, and how your solution solves exactly those problems. There's no single generic version — there are as many versions as there are clients, generated in the same time it took to write just one.",
        },
        {
          icon: "📊",
          title: "Real data in the commercial argument",
          description: "The agent can automatically query public client data (website, LinkedIn, recent news, technologies used) and incorporate them into the proposal. If the client just raised funding, the proposal can reference that context. If they use a specific CRM, the proposal describes the integration with that system.",
        },
        {
          icon: "🔄",
          title: "Continuous learning from what works",
          description: "The system records which proposals convert into contracts and which don't, and learns the patterns of winning proposals. Over time, the agent automatically incorporates the elements — structure, key phrases, detail levels — that historically generate more closes at your specific company.",
        },
      ],
    },
    steps: {
      heading: "The 5-step process: how it works at VeryMuch.ai",
      items: [
        {
          number: "01",
          title: "Sales meeting brief",
          description: "After each sales call or meeting, the salesperson completes a structured brief in 5 minutes: client's main problem, current vs desired metrics, approximate budget, timelines, and decision-makers involved. This brief can be a form, an AI-transcribed voice note, or even the automatic summary of a recorded call with Fireflies or Otter.",
          tool: "Fireflies / Otter + n8n",
        },
        {
          number: "02",
          title: "Automatic client context enrichment",
          description: "The agent supplements the brief with external data: LinkedIn company profile, recent news, technologies used (detected via Clearbit or BuiltWith), team size and organizational structure. This research that would take the salesperson 45 minutes is completed in seconds.",
          tool: "Perplexity API + Clay / Apollo",
        },
        {
          number: "03",
          title: "Personalized proposal generation",
          description: "With the brief and context data, the agent generates the complete proposal: client problem diagnosis, proposed solution with technical and process detail, implementation timeline, required investment (with phase breakdown), relevant success cases from the client's sector, and an expected ROI section using the client's metrics. The document is 4–8 pages depending on complexity.",
          tool: "Claude (Anthropic) + branded template",
        },
        {
          number: "04",
          title: "Final review and personalization by the salesperson",
          description: "The salesperson receives the draft and spends 15–20 minutes reviewing tone, adjusting prices if applicable, adding context about the personal relationship with the client, and verifying numbers are correct. 80% of the work is already done — the salesperson contributes the 20% that requires human judgment and relationship knowledge.",
          tool: "Google Docs / Notion with shared access",
        },
        {
          number: "05",
          title: "Smart sending and automated follow-up",
          description: "The proposal is sent with a tracking link that notifies the salesperson when the client opens it, how much time they spend on each section, and if they share it with others. If the client doesn't open within 48 hours, the system sends an automatic reminder. If they open the pricing page multiple times, the salesperson gets an alert to call that same day.",
          tool: "Qwilr / PandaDoc + n8n + CRM",
        },
      ],
    },
    results: {
      heading: "Real results for VeryMuch.ai clients",
      body: "Metrics observed in AI-automated proposal implementations for B2B sales teams in Mexico and Spain.",
      items: [
        { metric: "85%", description: "Reduction in proposal preparation time (from 3–4h to 20–30 min)" },
        { metric: "28%", description: "Improvement in close rate vs generic template proposals" },
        { metric: "2x", description: "More proposals sent per salesperson in the same period" },
        { metric: "Week 3", description: "First proposal generated with the system in production" },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Do AI-generated proposals sound artificial or generic?",
          a: "No, if the system is well configured. The key is the detailed brief and client context data. A well-generated proposal includes specific references to the client's problem, real metrics from their company, and success cases from the same sector. The client can't distinguish it from a manually written proposal because it speaks directly to their situation — not hypothetical situations.",
        },
        {
          q: "Does the system work for any type of service?",
          a: "It works best for B2B services with a consulting or customization component: agencies, consulting firms, custom software companies, technology integrators, professional services firms. For products with fixed pricing and no customization, the value of automation is lower because proposals are essentially the same for all clients.",
        },
        {
          q: "Can I integrate the system with my existing CRM?",
          a: "Yes. The system we implement connects with GoHighLevel, HubSpot, Salesforce, and Pipedrive via API. The salesperson's brief can be completed directly in the CRM, and the generated proposal is automatically saved as an attached document to the opportunity. The salesperson doesn't leave the CRM to manage proposals.",
        },
        {
          q: "How is the service catalog and success cases kept up to date?",
          a: "The system includes a knowledge base that the team updates periodically — new services, new success cases, new prices. This update takes 30–60 minutes per month and is done in a shared document (Notion or Google Docs) that the agent consults automatically when generating each proposal. No technical knowledge required to update.",
        },
        {
          q: "How much does it cost to implement AI-automated proposals with VeryMuch.ai?",
          a: "A Phase 1 implementation (brief + enrichment + generation + tracking) starts at €4,500 installation + €1,200/month operation (AaaS). This includes proposal template setup with your branding, CRM integration, knowledge base with your services and success cases, and monthly monitoring. Typical positive ROI is reached in the first month — the savings in sales team time cover the investment.",
        },
      ],
    },
    cta: {
      heading: "Is your team spending more time preparing proposals than closing?",
      sub: "In the ARRI diagnostic (30 min, free) we audit your current proposal process and tell you exactly how to automate it so your team can dedicate more time to what matters: closing.",
      ctaPrimary: "Take the ARRI diagnostic →",
      ctaSecondary: "Read: How to automate lead follow-up with AI",
      ctaSecondaryLink: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      label: "Written by",
      name: "Edwin Moreno",
      role: "COO & Co-Founder, VeryMuch.ai",
      profileLink: "/autor/edwin-moreno",
      initials: "EM",
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = CONTENT[locale as "es" | "en"] ?? CONTENT.es;
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/blog/${SLUG}`
      : `${BASE_URL}/blog/${SLUG}`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/${SLUG}`,
        en: `${BASE_URL}/en/blog/${SLUG}`,
        "x-default": `${BASE_URL}/blog/${SLUG}`,
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

export default async function PropuestasVentasAutomatizadasPage({ params }: Props) {
  notFound();
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
    url: `${BASE_URL}/blog/${SLUG}`,
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
      { "@type": "ListItem", position: 3, name: c.breadcrumb.page, item: locale === "en" ? `${BASE_URL}/en/blog/${SLUG}` : `${BASE_URL}/blog/${SLUG}` },
    ],
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <HomeNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-36 pb-12 px-6" style={{ background: "var(--bg-primary)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 90% 55% at 35% -15%, rgba(74,212,174,0.07) 0%, rgba(167,139,250,0.05) 45%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs mb-8 opacity-60" style={{ color: "var(--text-secondary)" }}>
            <Link href="/">{c.breadcrumb.home}</Link>
            <span>/</span>
            <Link href="/blog">{c.breadcrumb.blog}</Link>
            <span>/</span>
            <span>{c.breadcrumb.page}</span>
          </nav>

          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(180deg, #5AD4AE 0%, #A78BFA 100%)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5AD4AE" }}>{c.hero.badge}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.hero.h1}
          </h1>

          <p className="text-lg leading-relaxed mb-8 opacity-80" style={{ color: "var(--text-secondary)" }}>{c.hero.sub}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm opacity-60 pb-8 border-b" style={{ color: "var(--text-secondary)", borderColor: "var(--border-color)" }}>
            <span>
              {c.hero.by}{" "}
              <Link href={c.author.profileLink} className="font-semibold hover:underline" style={{ color: "var(--text-primary)" }}>{c.author.name}</Link>
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

          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{c.intro.p1}</p>
          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>{c.intro.p2}</p>

          {/* Problem + Stats */}
          <div className="p-6 rounded-2xl mb-12" style={{ background: "linear-gradient(135deg, rgba(90,212,174,0.06) 0%, rgba(167,139,250,0.06) 100%)", border: "1px solid rgba(90,212,174,0.15)" }}>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{c.problem.heading}</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{c.problem.body}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {c.problem.stats.map((s, i) => (
                <div key={i} className="text-center p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                  <div className="text-3xl font-extrabold mb-1" style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}>{s.stat}</div>
                  <div className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>{s.label}</div>
                  <div className="text-xs opacity-50 italic" style={{ color: "var(--text-secondary)" }}>— {s.source}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What is it */}
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{c.what_is.heading}</h2>
          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>{c.what_is.body}</p>

          {/* Benefits */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{c.benefits.heading}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {c.benefits.items.map((b, i) => (
              <div key={i} className="p-5 rounded-2xl border" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
                <div className="text-2xl mb-3">{b.icon}</div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>{b.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{b.description}</p>
              </div>
            ))}
          </div>

          {/* Steps */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{c.steps.heading}</h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.steps.items.map((step, i) => (
              <div key={i} className="p-6 rounded-2xl border" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-extrabold flex-shrink-0 w-10 leading-none mt-0.5" style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}>{step.number}</div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(90,212,174,0.1)", color: "#5AD4AE" }}>{step.tool}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{c.results.heading}</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{c.results.body}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {c.results.items.map((r, i) => (
              <div key={i} className="p-4 rounded-xl text-center" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                <div className="text-2xl font-extrabold mb-2" style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}>{r.metric}</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{r.description}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{c.faq.heading}</h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.faq.items.map((item, i) => (
              <details key={i} className="group p-5 rounded-xl border cursor-pointer" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
                <summary className="font-semibold text-sm list-none" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed opacity-80" style={{ color: "var(--text-secondary)" }}>{item.a}</p>
              </details>
            ))}
          </div>

          {/* Author box */}
          <div className="p-5 rounded-xl flex items-start gap-4 mb-2" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-white text-sm" style={{ background: "linear-gradient(135deg, #5AD4AE 0%, #A78BFA 100%)" }}>
              {c.author.initials}
            </div>
            <div>
              <p className="text-xs opacity-60 mb-0.5" style={{ color: "var(--text-secondary)" }}>{c.author.label}</p>
              <Link href={c.author.profileLink} className="font-semibold text-sm hover:underline" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                {c.author.name}
              </Link>
              <p className="text-xs opacity-60 mt-0.5" style={{ color: "var(--text-secondary)" }}>{c.author.role}</p>
            </div>
          </div>
        </div>
      </article>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 text-center" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{c.cta.heading}</h2>
          <p className="text-base mb-8 opacity-70" style={{ color: "var(--text-secondary)" }}>{c.cta.sub}</p>
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
              style={{ border: "1px solid var(--border-color)", color: "var(--text-primary)", background: "transparent" }}
            >
              {c.cta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
