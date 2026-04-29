import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-04-21";
const SLUG = "gohighlevel-vs-hubspot-ventas-ia";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

interface ComparisonRow {
  feature: string;
  ghl: string;
  hubspot: string;
  winner: "ghl" | "hubspot" | "tie";
}

interface FaqItem { q: string; a: string }

interface PageContent {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogLocale: string };
  breadcrumb: { home: string; blog: string; page: string };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  intro: { p1: string; p2: string };
  verdict: { heading: string; body: string };
  platforms: {
    ghl: { name: string; tagline: string; pros: string[]; cons: string[]; best_for: string };
    hubspot: { name: string; tagline: string; pros: string[]; cons: string[]; best_for: string };
  };
  comparison: {
    heading: string;
    rows: ComparisonRow[];
    legend: { ghl: string; hubspot: string; tie: string };
  };
  use_cases: { heading: string; items: { title: string; tool: string; why: string }[] };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; sub: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  author: { label: string; name: string; role: string; profileLink: string };
}

const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title: "GoHighLevel vs HubSpot para equipos de ventas con IA 2026 — VeryMuch.ai",
      description:
        "Comparativa completa de GoHighLevel y HubSpot para equipos de ventas B2B que implementan IA. Cuál elegir según tu tamaño, presupuesto y stack de automatización.",
      ogTitle: "GoHighLevel vs HubSpot para equipos de ventas con IA en 2026",
      ogDescription:
        "¿GHL o HubSpot para implementar agentes de IA en ventas B2B? Comparativa honesta basada en implementaciones reales con clientes en México, España y Colombia.",
      ogLocale: "es_ES",
    },
    breadcrumb: { home: "Inicio", blog: "Blog", page: "GHL vs HubSpot para IA en ventas" },
    hero: {
      badge: "✦ CRM + IA",
      h1: "GoHighLevel vs HubSpot para equipos de ventas con IA: la comparativa definitiva 2026",
      sub: "En VeryMuch.ai implementamos agentes de IA sobre ambas plataformas. Esta es nuestra evaluación honesta — con datos de proyectos reales, no de demos de laboratorio.",
      by: "Por",
      date: "21 de abril, 2026",
      readTime: "9 min de lectura",
    },
    intro: {
      p1: "La pregunta llega constantemente de nuestros clientes: \"¿Debería usar GoHighLevel o HubSpot?\" La respuesta no es universal — depende del tamaño de tu equipo, tu presupuesto, y sobre todo, de qué tan profunda quieres que sea la integración de IA con tu proceso comercial.",
      p2: "Hemos implementado agentes de IA (calificación de leads, seguimiento automático, investigación de prospectos) sobre ambas plataformas para empresas B2B en México, España y Colombia. Esta comparativa está basada en ese trabajo real — no en las páginas de marketing de cada producto.",
    },
    verdict: {
      heading: "Veredicto rápido",
      body: "Usa GoHighLevel si eres una agencia, una PYME con presupuesto ajustado, o si quieres todo en una sola plataforma (CRM + email + SMS + landing pages + funnels + agentes IA) sin pagar licencias separadas. Usa HubSpot si ya tienes un equipo de marketing digital maduro, necesitas integraciones enterprise con ERPs o Salesforce, o si tu proceso de ventas es complejo y requiere reporting avanzado nativo.",
    },
    platforms: {
      ghl: {
        name: "GoHighLevel (GHL)",
        tagline: "CRM todo-en-uno para agencias y PYMES — alta flexibilidad, bajo costo relativo",
        pros: [
          "Precio plano: desde $97/mes para uso ilimitado de contactos y pipelines",
          "CRM + email marketing + SMS + landing pages + funnels en una sola plataforma",
          "Webhooks nativos + API robusta — perfecta para conectar agentes de IA via n8n",
          "\"Sub-accounts\" para manejar múltiples clientes desde una sola instancia",
          "Workflows visuales de automatización muy potentes y fáciles de entender",
          "Comunidad activa y soporte técnico receptivo",
        ],
        cons: [
          "UI más densa — curva de aprendizaje inicial mayor que HubSpot",
          "Reporting nativo menos sofisticado (sin dashboards de atribución multi-touch nativo)",
          "Menos integraciones nativas con herramientas enterprise (Salesforce, SAP, NetSuite)",
          "Marca reconocible principalmente en mercado anglófono y agencias digitales",
        ],
        best_for: "Agencias digitales, consultoras de ventas, PYMES B2B con presupuesto de €0-500/mes en plataforma. Ideal cuando la automatización de marketing y CRM deben convivir sin costes adicionales por cada feature.",
      },
      hubspot: {
        name: "HubSpot",
        tagline: "CRM enterprise con ecosistema maduro — poderoso, pero el precio escala rápido",
        pros: [
          "Interfaz muy limpia y fácil de adoptar por equipos no técnicos",
          "Ecosistema de integraciones enorme (+1,400 apps nativas en el Marketplace)",
          "Sales Hub con forecasting, sequencias de email y call tracking nativo",
          "Reporting y dashboards de atribución avanzados incluidos en planes superiores",
          "Marca reconocida internacionalmente — facilita la adopción en empresas medianas y grandes",
          "HubSpot AI (Breeze) integrado nativamente para contenido, scoring y resúmenes de llamadas",
        ],
        cons: [
          "Precio escala agresivamente: el plan Starter ($15/usuario/mes) tiene funcionalidades muy limitadas; Professional cuesta $90+/usuario/mes",
          "Contactos y listas se cobran por separado — puede volverse caro rápido",
          "Automatizaciones avanzadas solo en Professional/Enterprise",
          "Para integrar agentes de IA externos, los webhooks son menos flexibles que en GHL",
        ],
        best_for: "Empresas medianas y grandes con equipos de ventas de 5+ personas, presupuesto de €200-1,500+/mes en CRM, y necesidad de integraciones con ERPs o reporting de marketing avanzado.",
      },
    },
    comparison: {
      heading: "Comparativa cara a cara",
      rows: [
        { feature: "Precio base mensual", ghl: "$97/mes ilimitado", hubspot: "$15/usuario/mes (Starter limitado)", winner: "ghl" },
        { feature: "Contactos ilimitados", ghl: "Sí — precio plano", hubspot: "No — escala por volumen", winner: "ghl" },
        { feature: "CRM + Marketing en uno", ghl: "Sí — todo incluido", hubspot: "Parcial — módulos separados", winner: "ghl" },
        { feature: "UI / Facilidad de adopción", ghl: "Moderada (requiere onboarding)", hubspot: "Alta (muy intuitivo)", winner: "hubspot" },
        { feature: "API para agentes de IA", ghl: "Excelente + webhooks flexibles", hubspot: "Buena pero más restrictiva", winner: "ghl" },
        { feature: "Automatización de workflows", ghl: "Muy potente y visual", hubspot: "Potente (solo en Pro+)", winner: "tie" },
        { feature: "Reporting / Analytics", ghl: "Básico-medio nativo", hubspot: "Avanzado nativo (Pro+)", winner: "hubspot" },
        { feature: "Integraciones enterprise", ghl: "Buenas vía Zapier/n8n", hubspot: "Nativas (+1,400 apps)", winner: "hubspot" },
        { feature: "SMS + Llamadas integradas", ghl: "Sí — nativo", hubspot: "Parcial (add-ons)", winner: "ghl" },
        { feature: "Sub-cuentas para agencias", ghl: "Sí — modelo nativo", hubspot: "No aplica", winner: "ghl" },
        { feature: "IA nativa", ghl: "Básica (en evolución)", hubspot: "HubSpot Breeze (maduro)", winner: "hubspot" },
      ],
      legend: { ghl: "Ventaja GHL", hubspot: "Ventaja HubSpot", tie: "Empate" },
    },
    use_cases: {
      heading: "¿Qué elegimos en VeryMuch.ai según el caso de uso?",
      items: [
        {
          title: "Agente de calificación automática de leads",
          tool: "GoHighLevel",
          why: "Los webhooks de GHL se conectan nativamente con n8n. Cuando un lead llena un formulario, el agente recibe los datos, hace la investigación de la empresa con Perplexity, score el lead con Claude, y actualiza el pipeline en GHL automáticamente — todo sin código adicional.",
        },
        {
          title: "Secuencias de seguimiento personalizadas con IA",
          tool: "GoHighLevel",
          why: "Los workflows de GHL permiten lanzar email + SMS + WhatsApp desde el mismo flow. Ideal para equipos de ventas que necesitan omnichannel sin pagar módulos adicionales. El agente personaliza el mensaje con datos del prospecto antes de enviarlo.",
        },
        {
          title: "Forecasting y reporting de pipeline para dirección",
          tool: "HubSpot",
          why: "Los dashboards nativos de HubSpot Sales Hub (Professional+) son difícilmente igualables para presentar a un consejo directivo. Forecasting por rep, atribución multi-touch, y métricas de ciclo de venta en tiempo real.",
        },
        {
          title: "Integración con ERP o sistemas legacy",
          tool: "HubSpot",
          why: "La librería de integraciones nativas de HubSpot es insuperable para empresas que ya tienen SAP, NetSuite, Salesforce o Shopify. Menos trabajo de ingeniería, menos mantenimiento, menos riesgo.",
        },
        {
          title: "Agencia con múltiples clientes PYME",
          tool: "GoHighLevel",
          why: "El modelo de sub-cuentas de GHL permite manejar 10, 20 o 50 clientes desde una instancia con su propio CRM, workflows y agentes — a un precio que no escala linealmente. Para una agencia, la diferencia de coste anual puede ser de $30,000-60,000 USD vs HubSpot.",
        },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Puedo migrar de HubSpot a GoHighLevel sin perder datos?",
          a: "Sí. GHL tiene importadores nativos para HubSpot (contactos, deals, notas, actividad). El proceso tarda 1-3 días dependiendo del volumen y la limpieza de datos. En VeryMuch.ai hacemos estas migraciones como parte de los proyectos de implementación de agentes.",
        },
        {
          q: "¿GoHighLevel tiene IA nativa como HubSpot Breeze?",
          a: "GHL está incorporando funciones de IA (conversational AI para chat en vivo, generación de contenido básico), pero en 2026 HubSpot Breeze sigue siendo más maduro en cuanto a integración nativa de IA para scoring, resúmenes de llamadas y sugerencias de siguiente acción. Sin embargo, para construir agentes de IA externos, GHL tiene mejor arquitectura de webhooks.",
        },
        {
          q: "¿Qué CRM usan la mayoría de clientes de VeryMuch.ai?",
          a: "El 65% de nuestros clientes usa GoHighLevel como plataforma principal. El 30% usa HubSpot. El 5% usa otras soluciones (Pipedrive, Salesforce). En todos los casos, los agentes de IA de VeryMuch.ai se integran vía API — la plataforma es el sistema de registro, el agente es la capa de inteligencia.",
        },
        {
          q: "¿Cuánto cuesta implementar un agente de IA sobre GHL o HubSpot?",
          a: "El coste de implementación es independiente del CRM. Un agente de calificación o seguimiento (Fase 1) en VeryMuch.ai parte de €4,500 de instalación + €1,200/mes de operación (AaaS). La plataforma CRM se factura por separado — GHL desde $97/mes, HubSpot Professional desde $90/usuario/mes.",
        },
        {
          q: "¿Es necesario un CRM para implementar agentes de IA en ventas?",
          a: "No es obligatorio, pero sí muy recomendable. El CRM es la memoria del agente — donde se registran los históricos, el estado de cada lead, y las acciones tomadas. Sin CRM, el agente puede calificar o responder, pero no tiene contexto longitudinal del prospecto. Recomendamos siempre empezar con uno.",
        },
      ],
    },
    cta: {
      heading: "¿No sabes si GHL o HubSpot es lo correcto para ti?",
      sub: "En el diagnóstico ARRI (30 min, gratuito) te decimos qué stack tiene más sentido para tu proceso y presupuesto — sin compromiso.",
      ctaPrimary: "Hacer el diagnóstico ARRI →",
      ctaSecondary: "Leer: ¿qué es un agente de IA para ventas?",
      ctaSecondaryLink: "/blog/que-es-agente-ia-ventas",
    },
    author: {
      label: "Escrito por",
      name: "Jorge Herrera Cruz",
      role: "CEO & Co-Fundador, VeryMuch.ai",
      profileLink: "/autor/jorge-herrera-cruz",
    },
  },
  en: {
    meta: {
      title: "GoHighLevel vs HubSpot for AI-powered sales teams 2026 — VeryMuch.ai",
      description:
        "Full comparison of GoHighLevel and HubSpot for B2B sales teams implementing AI. Which to choose based on your size, budget, and automation stack.",
      ogTitle: "GoHighLevel vs HubSpot for AI-powered sales teams in 2026",
      ogDescription:
        "GHL or HubSpot for AI agents in B2B sales? Honest comparison based on real client implementations across Mexico, Spain, and Colombia.",
      ogLocale: "en_US",
    },
    breadcrumb: { home: "Home", blog: "Blog", page: "GHL vs HubSpot for AI sales" },
    hero: {
      badge: "✦ CRM + AI",
      h1: "GoHighLevel vs HubSpot for AI-powered sales teams: the definitive 2026 comparison",
      sub: "At VeryMuch.ai we implement AI agents on both platforms. This is our honest evaluation — based on real project data, not lab demos.",
      by: "By",
      date: "April 21, 2026",
      readTime: "9 min read",
    },
    intro: {
      p1: "The question comes up constantly from our clients: \"Should I use GoHighLevel or HubSpot?\" The answer isn't universal — it depends on your team size, budget, and above all, how deeply you want AI integrated into your sales process.",
      p2: "We've implemented AI agents (lead qualification, automatic follow-up, prospect research) on both platforms for B2B companies in Mexico, Spain, and Colombia. This comparison is based on that real work — not on each product's marketing pages.",
    },
    verdict: {
      heading: "Quick verdict",
      body: "Use GoHighLevel if you're an agency, an SMB with a tight budget, or want everything in a single platform (CRM + email + SMS + landing pages + funnels + AI agents) without paying separate licenses. Use HubSpot if you already have a mature digital marketing team, need enterprise integrations with ERPs or Salesforce, or have a complex sales process requiring advanced native reporting.",
    },
    platforms: {
      ghl: {
        name: "GoHighLevel (GHL)",
        tagline: "All-in-one CRM for agencies and SMBs — high flexibility, low relative cost",
        pros: [
          "Flat pricing: from $97/month for unlimited contacts and pipelines",
          "CRM + email marketing + SMS + landing pages + funnels in one platform",
          "Native webhooks + robust API — perfect for connecting AI agents via n8n",
          "\"Sub-accounts\" to manage multiple clients from a single instance",
          "Very powerful and easy-to-understand visual automation workflows",
          "Active community and responsive technical support",
        ],
        cons: [
          "Denser UI — steeper initial learning curve than HubSpot",
          "Less sophisticated native reporting (no native multi-touch attribution dashboards)",
          "Fewer native integrations with enterprise tools (Salesforce, SAP, NetSuite)",
          "Brand mainly recognized in English-speaking market and digital agencies",
        ],
        best_for: "Digital agencies, sales consultancies, B2B SMBs with €0-500/month platform budget. Ideal when marketing automation and CRM must coexist without additional costs per feature.",
      },
      hubspot: {
        name: "HubSpot",
        tagline: "Enterprise CRM with mature ecosystem — powerful, but price scales fast",
        pros: [
          "Very clean interface, easy for non-technical teams to adopt",
          "Huge integration ecosystem (+1,400 native apps in Marketplace)",
          "Sales Hub with native forecasting, email sequences, and call tracking",
          "Advanced attribution reporting and dashboards included in higher plans",
          "Internationally recognized brand — facilitates adoption in mid-size and large companies",
          "HubSpot AI (Breeze) natively integrated for content, scoring, and call summaries",
        ],
        cons: [
          "Price scales aggressively: Starter plan ($15/user/month) has very limited functionality; Professional costs $90+/user/month",
          "Contacts and lists billed separately — can get expensive fast",
          "Advanced automations only in Professional/Enterprise",
          "For integrating external AI agents, webhooks are less flexible than in GHL",
        ],
        best_for: "Mid-size and large companies with 5+ person sales teams, €200-1,500+/month CRM budget, and need for ERP integrations or advanced marketing reporting.",
      },
    },
    comparison: {
      heading: "Head-to-head comparison",
      rows: [
        { feature: "Monthly base price", ghl: "$97/month unlimited", hubspot: "$15/user/month (limited Starter)", winner: "ghl" },
        { feature: "Unlimited contacts", ghl: "Yes — flat pricing", hubspot: "No — scales by volume", winner: "ghl" },
        { feature: "CRM + Marketing in one", ghl: "Yes — all included", hubspot: "Partial — separate modules", winner: "ghl" },
        { feature: "UI / Adoption ease", ghl: "Moderate (requires onboarding)", hubspot: "High (very intuitive)", winner: "hubspot" },
        { feature: "API for AI agents", ghl: "Excellent + flexible webhooks", hubspot: "Good but more restrictive", winner: "ghl" },
        { feature: "Workflow automation", ghl: "Very powerful and visual", hubspot: "Powerful (Pro+ only)", winner: "tie" },
        { feature: "Reporting / Analytics", ghl: "Basic-medium native", hubspot: "Advanced native (Pro+)", winner: "hubspot" },
        { feature: "Enterprise integrations", ghl: "Good via Zapier/n8n", hubspot: "Native (+1,400 apps)", winner: "hubspot" },
        { feature: "SMS + Calls integrated", ghl: "Yes — native", hubspot: "Partial (add-ons)", winner: "ghl" },
        { feature: "Sub-accounts for agencies", ghl: "Yes — native model", hubspot: "N/A", winner: "ghl" },
        { feature: "Native AI", ghl: "Basic (evolving)", hubspot: "HubSpot Breeze (mature)", winner: "hubspot" },
      ],
      legend: { ghl: "GHL advantage", hubspot: "HubSpot advantage", tie: "Tie" },
    },
    use_cases: {
      heading: "What we choose at VeryMuch.ai by use case",
      items: [
        {
          title: "Automatic lead qualification agent",
          tool: "GoHighLevel",
          why: "GHL webhooks connect natively with n8n. When a lead fills out a form, the agent receives the data, researches the company with Perplexity, scores the lead with Claude, and automatically updates the pipeline in GHL — all without additional code.",
        },
        {
          title: "AI-personalized follow-up sequences",
          tool: "GoHighLevel",
          why: "GHL workflows allow launching email + SMS + WhatsApp from the same flow. Ideal for sales teams needing omnichannel without paying additional modules. The agent personalizes the message with prospect data before sending.",
        },
        {
          title: "Pipeline forecasting and reporting for management",
          tool: "HubSpot",
          why: "HubSpot Sales Hub (Professional+) native dashboards are hard to match for executive presentations. Per-rep forecasting, multi-touch attribution, and real-time sales cycle metrics.",
        },
        {
          title: "Integration with ERP or legacy systems",
          tool: "HubSpot",
          why: "HubSpot's library of native integrations is unmatched for companies already running SAP, NetSuite, Salesforce, or Shopify. Less engineering work, less maintenance, less risk.",
        },
        {
          title: "Agency managing multiple SMB clients",
          tool: "GoHighLevel",
          why: "GHL's sub-account model allows managing 10, 20, or 50 clients from one instance with their own CRM, workflows, and agents — at a price that doesn't scale linearly. For an agency, the annual cost difference can be $30,000-60,000 USD vs HubSpot.",
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Can I migrate from HubSpot to GoHighLevel without losing data?",
          a: "Yes. GHL has native importers for HubSpot (contacts, deals, notes, activity). The process takes 1-3 days depending on volume and data quality. At VeryMuch.ai we do these migrations as part of AI agent implementation projects.",
        },
        {
          q: "Does GoHighLevel have native AI like HubSpot Breeze?",
          a: "GHL is incorporating AI features (conversational AI for live chat, basic content generation), but in 2026 HubSpot Breeze remains more mature for native AI integration — scoring, call summaries, and next-action suggestions. However, for building external AI agents, GHL has better webhook architecture.",
        },
        {
          q: "What CRM do most VeryMuch.ai clients use?",
          a: "65% of our clients use GoHighLevel as their primary platform. 30% use HubSpot. 5% use other solutions (Pipedrive, Salesforce). In all cases, VeryMuch.ai AI agents integrate via API — the platform is the system of record, the agent is the intelligence layer.",
        },
        {
          q: "How much does it cost to implement an AI agent on GHL or HubSpot?",
          a: "Implementation cost is independent of the CRM. A Phase 1 qualification or follow-up agent at VeryMuch.ai starts at €4,500 installation + €1,200/month operation (AaaS). The CRM platform is billed separately — GHL from $97/month, HubSpot Professional from $90/user/month.",
        },
        {
          q: "Do I need a CRM to implement AI agents in sales?",
          a: "It's not required, but highly recommended. The CRM is the agent's memory — where historical data, lead status, and actions taken are recorded. Without a CRM, the agent can qualify or respond, but has no longitudinal context on the prospect. We always recommend starting with one.",
        },
      ],
    },
    cta: {
      heading: "Not sure if GHL or HubSpot is right for you?",
      sub: "In the ARRI diagnostic (30 min, free) we tell you which stack makes most sense for your process and budget — no commitment required.",
      ctaPrimary: "Take the ARRI diagnostic →",
      ctaSecondary: "Read: what is an AI sales agent?",
      ctaSecondaryLink: "/blog/que-es-agente-ia-ventas",
    },
    author: {
      label: "Written by",
      name: "Jorge Herrera Cruz",
      role: "CEO & Co-Founder, VeryMuch.ai",
      profileLink: "/autor/jorge-herrera-cruz",
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
      authors: ["https://verymuch.ai/autor/jorge-herrera-cruz"],
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

const WINNER_COLORS: Record<string, string> = {
  ghl: "#5AD4AE",
  hubspot: "#F5A05E",
  tie: "#888",
};

export default async function GHLvsHubSpotPage({ params }: Props) {
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
      "@id": `${BASE_URL}/autor/jorge-herrera-cruz`,
      name: "Jorge Herrera Cruz",
      url: `${BASE_URL}/autor/jorge-herrera-cruz`,
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

          {/* Verdict box */}
          <div
            className="p-6 rounded-2xl mb-12"
            style={{ background: "linear-gradient(135deg, rgba(90,212,174,0.08) 0%, rgba(245,160,94,0.08) 100%)", border: "1px solid rgba(90,212,174,0.2)" }}
          >
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {c.verdict.heading}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.verdict.body}</p>
          </div>

          {/* Platform cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {(["ghl", "hubspot"] as const).map((key) => {
              const p = c.platforms[key];
              const accent = key === "ghl" ? "#5AD4AE" : "#F5A05E";
              return (
                <div
                  key={key}
                  className="p-6 rounded-2xl border flex flex-col gap-4"
                  style={{ border: `1px solid var(--border-color)`, background: "var(--bg-card)" }}
                >
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                      {p.name}
                    </h3>
                    <p className="text-xs italic" style={{ color: accent }}>{p.tagline}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
                      {locale === "en" ? "Pros" : "Ventajas"}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {p.pros.map((pro, i) => (
                        <li key={i} className="text-xs leading-relaxed flex gap-2" style={{ color: "var(--text-secondary)" }}>
                          <span style={{ color: accent, flexShrink: 0 }}>✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-secondary)" }}>
                      {locale === "en" ? "Cons" : "Limitaciones"}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {p.cons.map((con, i) => (
                        <li key={i} className="text-xs leading-relaxed flex gap-2" style={{ color: "var(--text-secondary)" }}>
                          <span style={{ opacity: 0.5, flexShrink: 0 }}>—</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-3 border-t" style={{ borderColor: "var(--border-color)" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: accent }}>
                      {locale === "en" ? "Best for:" : "Ideal para:"}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.best_for}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comparison table */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.comparison.heading}
          </h2>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-4 text-xs">
            {(["ghl", "hubspot", "tie"] as const).map((k) => (
              <span key={k} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: WINNER_COLORS[k] }} />
                <span style={{ color: "var(--text-secondary)" }}>{c.comparison.legend[k]}</span>
              </span>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border mb-12" style={{ borderColor: "var(--border-color)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--bg-card)" }}>
                  <th className="px-4 py-3 text-left font-semibold text-xs" style={{ color: "var(--text-secondary)" }}>
                    {locale === "en" ? "Feature" : "Característica"}
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-xs" style={{ color: "#5AD4AE" }}>GHL</th>
                  <th className="px-4 py-3 text-left font-semibold text-xs" style={{ color: "#F5A05E" }}>HubSpot</th>
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "var(--bg-primary)" : "var(--bg-card)",
                      borderTop: "1px solid var(--border-color)",
                    }}
                  >
                    <td className="px-4 py-3 text-xs font-medium" style={{ color: "var(--text-primary)" }}>
                      {row.winner !== "tie" && (
                        <span
                          className="w-1.5 h-1.5 rounded-full inline-block mr-2"
                          style={{ background: WINNER_COLORS[row.winner], verticalAlign: "middle" }}
                        />
                      )}
                      {row.feature}
                    </td>
                    <td
                      className="px-4 py-3 text-xs"
                      style={{
                        color: row.winner === "ghl" ? "#5AD4AE" : "var(--text-secondary)",
                        fontWeight: row.winner === "ghl" ? 600 : 400,
                      }}
                    >
                      {row.ghl}
                    </td>
                    <td
                      className="px-4 py-3 text-xs"
                      style={{
                        color: row.winner === "hubspot" ? "#F5A05E" : "var(--text-secondary)",
                        fontWeight: row.winner === "hubspot" ? 600 : 400,
                      }}
                    >
                      {row.hubspot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Use cases */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.use_cases.heading}
          </h2>

          <div className="flex flex-col gap-4 mb-12">
            {c.use_cases.items.map((uc, i) => {
              const isGHL = uc.tool === "GoHighLevel";
              const accent = isGHL ? "#5AD4AE" : "#F5A05E";
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl border"
                  style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                      style={{ background: `${accent}22`, color: accent }}
                    >
                      {uc.tool}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                        {uc.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{uc.why}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
              JH
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
              className="btn-vm-primary"
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
