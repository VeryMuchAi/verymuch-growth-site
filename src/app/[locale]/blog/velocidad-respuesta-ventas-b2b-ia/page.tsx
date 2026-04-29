import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-05-05";
const SLUG = "velocidad-respuesta-ventas-b2b-ia";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

interface StatCard {
  stat: string;
  label: string;
  source: string;
}

interface FaqItem { q: string; a: string }

interface StrategyItem {
  number: string;
  title: string;
  description: string;
  impact: string;
}

interface MistakeItem {
  title: string;
  description: string;
}

interface PageContent {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogLocale: string };
  breadcrumb: { home: string; blog: string; page: string };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  intro: { p1: string; p2: string };
  problem: { heading: string; body: string; stats: StatCard[] };
  why_speed: { heading: string; body: string };
  strategies: { heading: string; items: StrategyItem[] };
  results: { heading: string; body: string; items: { metric: string; description: string }[] };
  mistakes: { heading: string; items: MistakeItem[] };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; sub: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  author: { label: string; name: string; role: string; profileLink: string; initials: string };
}

const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title: "Velocidad de respuesta en ventas B2B: el impacto real de la IA en 2026 — VeryMuch.ai",
      description:
        "La velocidad de respuesta es el factor #1 en la tasa de conversión B2B. Descubre cómo la IA reduce el tiempo de respuesta de horas a minutos y qué impacto real tiene en tus ventas.",
      ogTitle: "Velocidad de respuesta en ventas B2B: el impacto de la IA",
      ogDescription:
        "El equipo que responde primero gana el 78% de los deals B2B. En VeryMuch.ai usamos IA para garantizar respuesta en menos de 5 minutos. Así funciona — con datos reales.",
      ogLocale: "es_ES",
    },
    breadcrumb: { home: "Inicio", blog: "Blog", page: "Velocidad de respuesta en ventas B2B con IA" },
    hero: {
      badge: "✦ Ventas B2B con IA",
      h1: "Velocidad de respuesta en ventas B2B: el impacto real de la IA en 2026",
      sub: "No gana el que tiene el mejor producto. Gana el que responde primero — de forma relevante. La IA convierte ese principio en una ventaja estructural que tus competidores sin IA no pueden igualar.",
      by: "Por",
      date: "5 de mayo, 2026",
      readTime: "9 min de lectura",
    },
    intro: {
      p1: "Hay un estudio de InsideSales.com que cambió cómo los mejores equipos de ventas del mundo piensan sobre el follow-up: si llamas a un lead en los primeros 5 minutos después de que expresa interés, tienes 21 veces más probabilidad de conectar que si esperas 30 minutos. Y 100 veces más que si esperas 24 horas.",
      p2: "El problema es que la mayoría de los equipos de ventas B2B responde en un promedio de 42 horas. Para cuando llaman, el prospecto ya investigó alternativas, habló con competidores y probablemente tomó una decisión provisional. La IA no solo acelera la respuesta — redefine completamente qué es posible en términos de velocidad operativa.",
    },
    problem: {
      heading: "El costo oculto de responder tarde: datos que no puedes ignorar",
      body: "La lentitud de respuesta no es un problema de actitud del equipo de ventas — es un problema estructural. Los SDRs tienen que calificar leads manualmente, priorizar entre decenas de contactos, redactar emails personalizados y coordinar agendas. Sin IA, la velocidad tiene un techo físico. Con IA, ese techo desaparece.",
      stats: [
        { stat: "21x", label: "más probabilidad de conversión si respondes en < 5 min vs 30 min", source: "InsideSales.com" },
        { stat: "42h", label: "tiempo promedio de respuesta de equipos B2B tradicionales", source: "Harvard Business Review" },
        { stat: "78%", label: "de compradores B2B eligen al primer proveedor relevante que responde", source: "Drift / Salesforce" },
      ],
    },
    why_speed: {
      heading: "Por qué la velocidad de respuesta domina el B2B moderno",
      body: "El comportamiento del comprador B2B cambió radicalmente en los últimos 5 años. Los prospectos hacen su investigación solos — visitan 4-6 sitios web, leen reviews, comparan propuestas — y cuando finalmente contactan a un proveedor, ya están en modo decisión. Ese momento de contacto inicial es una ventana de intención alta que se cierra en minutos, no en horas. Si tu equipo no está disponible en ese instante exacto, la ventana se cierra y el lead pasa al siguiente proveedor en su lista. La IA es la única tecnología que puede garantizar presencia en ese momento crítico, 24 horas al día, 7 días a la semana, sin costo adicional por disponibilidad.",
    },
    strategies: {
      heading: "4 formas en que la IA acelera la velocidad de respuesta B2B",
      items: [
        {
          number: "01",
          title: "Calificación instantánea en el momento del contacto",
          description: "Cuando un lead llena un formulario, la IA califica el prospecto en segundos — sector, tamaño de empresa, cargo, fit con tu ICP — y produce un score con un resumen de 3 líneas. Tu SDR recibe una notificación Slack con toda la información necesaria para responder de forma inteligente en los siguientes 2 minutos. Sin esperar a que alguien revise la bandeja de entrada.",
          impact: "Tiempo de calificación: de 15 min → 30 seg",
        },
        {
          number: "02",
          title: "Primer contacto personalizado automatizado",
          description: "Si el lead tiene score medio o alto, el agente de IA envía un primer email personalizado en menos de 5 minutos — usando datos reales de la empresa del prospecto: sector, tamaño, cargo, e incluso menciones de noticias recientes si las hay. No es una plantilla genérica. Es un mensaje que suena como si tu mejor SDR lo hubiera escrito después de 20 minutos de investigación.",
          impact: "Tiempo de primer contacto: de 42h → < 5 min",
        },
        {
          number: "03",
          title: "Nurturing asíncrono sin fricción",
          description: "Si el prospecto no responde en 24–48h, la secuencia de seguimiento continúa automáticamente con ángulos diferentes — valor nuevo, referencia a un caso de éxito relevante, o una pregunta de diagnóstico. Cada mensaje está calibrado para no sonar como spam. El SDR no toca nada hasta que el lead entra en fase activa (abre, hace clic, responde).",
          impact: "Leads nutridos sin tiempo SDR: hasta 80% del pipeline",
        },
        {
          number: "04",
          title: "Escalada al vendedor en el momento exacto",
          description: "Cuando el prospecto muestra una señal de intención alta — responde un email, hace clic en el link de agenda, o visita la página de precios dos veces — el agente detecta la señal, actualiza el CRM, asigna la tarea al vendedor correcto y envía una alerta en tiempo real. El vendedor entra en la conversación con todo el contexto, no desde cero.",
          impact: "Conversaciones con contexto completo: 100% de los casos",
        },
      ],
    },
    results: {
      heading: "Impacto medido en clientes de VeryMuch.ai",
      body: "Resultados observados en implementaciones de Fase 1 para empresas B2B en México, España y Colombia. Los números varían según el sector, el volumen de leads y la calidad del ICP definido.",
      items: [
        { metric: "< 5 min", description: "Tiempo de primer contacto garantizado tras captación del lead" },
        { metric: "3–5x", description: "Mejora en tasa de conexión lead → conversación calificada" },
        { metric: "60%", description: "Reducción en carga manual de calificación y seguimiento" },
        { metric: "Mes 3", description: "ROI positivo típico en implementaciones Fase 1" },
      ],
    },
    mistakes: {
      heading: "Los 3 errores que arruinan la velocidad de respuesta con IA",
      items: [
        {
          title: "Automatizar la velocidad sin personalizar el contenido",
          description: "Responder en 5 minutos con un email genérico es casi tan malo como no responder. La velocidad sin relevancia genera spam. El sistema de IA debe combinar velocidad con personalización real — datos del prospecto, contexto de su empresa, referencia al problema específico que expresó. Si no, aceleras el camino hacia el unsubscribe.",
        },
        {
          title: "No definir qué leads merecen respuesta inmediata",
          description: "No todos los leads tienen la misma urgencia. Un sistema de IA bien configurado distingue entre un lead de alta intención (descargó el lead magnet + visitó la página de precios + empresa de 50+ empleados en tu ICP) y uno de baja intención (suscripción al newsletter de un freelancer). Sin esa segmentación, sobrecargas al equipo de ventas con ruido.",
        },
        {
          title: "Medir solo la velocidad, no la tasa de conversación",
          description: "La métrica que importa no es cuántos emails envías en 5 minutos — es cuántos de esos emails generan una conversación real. Si tu tasa de respuesta de leads es < 10%, el problema no es la velocidad: es la relevancia del mensaje o la calidad del targeting. Optimiza las dos variables juntas, no solo una.",
        },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cuánto tiempo tarda en implementarse un sistema de respuesta rápida con IA?",
          a: "Una implementación de Fase 1 con VeryMuch.ai (calificación automática + primer contacto + nurturing básico) tarda entre 4 y 6 semanas desde el kick-off hasta el primer lead en producción. Las primeras 2 semanas son de diagnóstico y diseño del ICP; las siguientes 2, de construcción e integración con el CRM; las últimas 2, de pruebas y ajuste fino.",
        },
        {
          q: "¿La IA puede manejar prospectos que escriben en español e inglés?",
          a: "Sí. Los modelos de lenguaje que usamos (Claude de Anthropic y GPT-4o) tienen excelente manejo del español formal de negocios y del inglés. Los sistemas que implementamos para clientes en México, España y Colombia funcionan en ambos idiomas de forma nativa, sin traducciones automáticas que suenen artificiales.",
        },
        {
          q: "¿Qué CRM necesito para implementar respuesta rápida con IA?",
          a: "Trabajamos con los principales CRMs del mercado: GoHighLevel, HubSpot, Salesforce, Pipedrive. GoHighLevel es nuestra primera recomendación para empresas que empiezan, por su relación funcionalidad/precio. Si ya tienes un CRM, lo integramos — no es necesario cambiarlo para implementar la capa de IA.",
        },
        {
          q: "¿La velocidad de respuesta con IA funciona fuera del horario laboral?",
          a: "Exactamente ese es uno de los mayores beneficios. El agente de IA opera 24/7, sin límite de horario ni geografía. Un lead que llega a las 11pm del domingo recibe un primer contacto personalizado en menos de 5 minutos — algo que ningún equipo humano puede garantizar de forma consistente sin costo prohibitivo.",
        },
        {
          q: "¿Cuánto cuesta implementar un sistema de respuesta rápida con IA en VeryMuch.ai?",
          a: "Una Fase 1 parte de €4,500 de instalación + €1,200/mes de operación (AaaS). Esto incluye diseño del flujo de calificación, integración con el CRM, configuración de los modelos de IA, pruebas con leads reales y monitoreo mensual. La plataforma CRM se factura aparte. El ROI positivo típico se alcanza en el mes 3 de operación.",
        },
      ],
    },
    cta: {
      heading: "¿Cuántos leads estás perdiendo mientras tu equipo duerme?",
      sub: "En el diagnóstico ARRI (30 min, gratuito) evaluamos tu proceso actual de respuesta a leads y te decimos exactamente cómo implementar velocidad B2B con IA para tu caso específico.",
      ctaPrimary: "Hacer el diagnóstico ARRI →",
      ctaSecondary: "Leer: Cómo automatizar el seguimiento de leads con IA",
      ctaSecondaryLink: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      label: "Escrito por",
      name: "Jorge Herrera Cruz",
      role: "CEO & Co-Fundador, VeryMuch.ai",
      profileLink: "/autor/jorge-herrera-cruz",
      initials: "JH",
    },
  },
  en: {
    meta: {
      title: "B2B Sales Response Speed: The Real Impact of AI in 2026 — VeryMuch.ai",
      description:
        "Response speed is the #1 factor in B2B conversion rates. Discover how AI reduces response time from hours to minutes and the real impact it has on your sales outcomes.",
      ogTitle: "B2B Sales Response Speed: The Impact of AI",
      ogDescription:
        "The team that responds first wins 78% of B2B deals. At VeryMuch.ai we use AI to guarantee a response in under 5 minutes. Here's how it works — with real data.",
      ogLocale: "en_US",
    },
    breadcrumb: { home: "Home", blog: "Blog", page: "B2B Sales Response Speed with AI" },
    hero: {
      badge: "✦ B2B Sales with AI",
      h1: "B2B sales response speed: the real impact of AI in 2026",
      sub: "The winner isn't the one with the best product. It's the one who responds first — relevantly. AI turns that principle into a structural advantage your competitors without AI simply cannot match.",
      by: "By",
      date: "May 5, 2026",
      readTime: "9 min read",
    },
    intro: {
      p1: "There's an InsideSales.com study that changed how the world's best sales teams think about follow-up: if you call a lead within the first 5 minutes of them expressing interest, you're 21 times more likely to connect than if you wait 30 minutes. And 100 times more likely than if you wait 24 hours.",
      p2: "The problem is that most B2B sales teams respond in an average of 42 hours. By the time they call, the prospect has already researched alternatives, talked to competitors, and probably made a provisional decision. AI doesn't just speed up the response — it completely redefines what's possible in terms of operational speed.",
    },
    problem: {
      heading: "The hidden cost of slow response: data you can't ignore",
      body: "Slow response isn't an attitude problem with your sales team — it's a structural problem. SDRs have to manually qualify leads, prioritize among dozens of contacts, draft personalized emails, and coordinate schedules. Without AI, speed has a physical ceiling. With AI, that ceiling disappears.",
      stats: [
        { stat: "21x", label: "more likely to convert if you respond in < 5 min vs 30 min", source: "InsideSales.com" },
        { stat: "42h", label: "average response time for traditional B2B sales teams", source: "Harvard Business Review" },
        { stat: "78%", label: "of B2B buyers choose the first relevant vendor to respond", source: "Drift / Salesforce" },
      ],
    },
    why_speed: {
      heading: "Why response speed dominates modern B2B",
      body: "B2B buyer behavior has changed radically in the last 5 years. Prospects do their own research — they visit 4–6 websites, read reviews, compare proposals — and when they finally contact a vendor, they're already in decision mode. That initial contact moment is a high-intent window that closes in minutes, not hours. If your team isn't available at that exact instant, the window closes and the lead moves to the next vendor on their list. AI is the only technology that can guarantee presence at that critical moment, 24 hours a day, 7 days a week, with no additional availability cost.",
    },
    strategies: {
      heading: "4 ways AI accelerates B2B response speed",
      items: [
        {
          number: "01",
          title: "Instant qualification at the moment of contact",
          description: "When a lead fills out a form, AI qualifies the prospect in seconds — sector, company size, job title, ICP fit — and produces a score with a 3-line summary. Your SDR receives a Slack notification with all the information needed to respond intelligently in the next 2 minutes. No waiting for someone to check their inbox.",
          impact: "Qualification time: from 15 min → 30 sec",
        },
        {
          number: "02",
          title: "Automated personalized first contact",
          description: "If the lead scores medium or high, the AI agent sends a personalized first email in under 5 minutes — using real data from the prospect's company: sector, size, job title, and even mentions of recent news if available. It's not a generic template. It's a message that sounds like your best SDR wrote it after 20 minutes of research.",
          impact: "First contact time: from 42h → < 5 min",
        },
        {
          number: "03",
          title: "Frictionless asynchronous nurturing",
          description: "If the prospect doesn't respond in 24–48h, the follow-up sequence continues automatically with different angles — new value, a relevant case study reference, or a diagnostic question. Each message is calibrated to not sound like spam. The SDR doesn't touch anything until the lead enters active phase (opens, clicks, responds).",
          impact: "Leads nurtured without SDR time: up to 80% of pipeline",
        },
        {
          number: "04",
          title: "Sales escalation at the exact right moment",
          description: "When the prospect shows a high-intent signal — replies to an email, clicks the scheduling link, or visits the pricing page twice — the agent detects the signal, updates the CRM, assigns the task to the right salesperson, and sends a real-time alert. The salesperson enters the conversation with full context, not starting from scratch.",
          impact: "Conversations with full context: 100% of cases",
        },
      ],
    },
    results: {
      heading: "Measured impact for VeryMuch.ai clients",
      body: "Results observed in Phase 1 implementations for B2B companies in Mexico, Spain, and Colombia. Numbers vary by sector, lead volume, and quality of the defined ICP.",
      items: [
        { metric: "< 5 min", description: "Guaranteed first contact time after lead capture" },
        { metric: "3–5x", description: "Improvement in lead → qualified conversation connection rate" },
        { metric: "60%", description: "Reduction in manual qualification and follow-up workload" },
        { metric: "Month 3", description: "Typical positive ROI in Phase 1 implementations" },
      ],
    },
    mistakes: {
      heading: "The 3 mistakes that ruin AI response speed",
      items: [
        {
          title: "Automating speed without personalizing content",
          description: "Responding in 5 minutes with a generic email is almost as bad as not responding. Speed without relevance generates spam. The AI system must combine speed with real personalization — prospect data, company context, reference to the specific problem they expressed. Otherwise, you're just accelerating the path to unsubscribe.",
        },
        {
          title: "Not defining which leads deserve immediate response",
          description: "Not all leads have the same urgency. A well-configured AI system distinguishes between a high-intent lead (downloaded the lead magnet + visited the pricing page + 50+ employee company in your ICP) and a low-intent one (newsletter subscription from a freelancer). Without that segmentation, you overload the sales team with noise.",
        },
        {
          title: "Measuring only speed, not conversation rate",
          description: "The metric that matters isn't how many emails you send in 5 minutes — it's how many of those emails generate a real conversation. If your lead response rate is < 10%, the problem isn't speed: it's message relevance or targeting quality. Optimize both variables together, not just one.",
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "How long does it take to implement an AI rapid response system?",
          a: "A Phase 1 implementation with VeryMuch.ai (automatic qualification + first contact + basic nurturing) takes 4–6 weeks from kickoff to the first live lead. The first 2 weeks are diagnosis and ICP design; the next 2, building and CRM integration; the last 2, testing and fine-tuning.",
        },
        {
          q: "Can AI handle prospects who write in both Spanish and English?",
          a: "Yes. The language models we use (Anthropic's Claude and GPT-4o) handle both formal business Spanish and English excellently. The systems we implement for clients in Mexico, Spain, and Colombia work natively in both languages — no artificial-sounding automatic translations.",
        },
        {
          q: "What CRM do I need for AI rapid response?",
          a: "We work with the major CRMs on the market: GoHighLevel, HubSpot, Salesforce, Pipedrive. GoHighLevel is our first recommendation for companies starting out, for its functionality-to-price ratio. If you already have a CRM, we integrate with it — you don't need to change it to implement the AI layer.",
        },
        {
          q: "Does AI response speed work outside business hours?",
          a: "That's actually one of the biggest benefits. The AI agent operates 24/7, with no time or geography limits. A lead that arrives at 11pm on Sunday receives a personalized first contact in under 5 minutes — something no human team can consistently guarantee without prohibitive cost.",
        },
        {
          q: "How much does it cost to implement an AI rapid response system with VeryMuch.ai?",
          a: "A Phase 1 starts at €4,500 installation + €1,200/month operation (AaaS). This includes qualification flow design, CRM integration, AI model configuration, testing with real leads, and monthly monitoring. The CRM platform is billed separately. Typical positive ROI is reached in month 3 of operation.",
        },
      ],
    },
    cta: {
      heading: "How many leads are you losing while your team sleeps?",
      sub: "In the ARRI diagnostic (30 min, free) we evaluate your current lead response process and tell you exactly how to implement B2B response speed with AI for your specific case.",
      ctaPrimary: "Take the ARRI diagnostic →",
      ctaSecondary: "Read: How to automate lead follow-up with AI",
      ctaSecondaryLink: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      label: "Written by",
      name: "Jorge Herrera Cruz",
      role: "CEO & Co-Founder, VeryMuch.ai",
      profileLink: "/autor/jorge-herrera-cruz",
      initials: "JH",
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

export default async function VelocidadRespuestaVentasPage({ params }: Props) {
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
              "radial-gradient(ellipse 90% 55% at 35% -15%, rgba(74,212,174,0.07) 0%, rgba(167,139,250,0.05) 45%, transparent 70%)",
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
            <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(180deg, #5AD4AE 0%, #A78BFA 100%)" }} />
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

          {/* Problem + Stats */}
          <div
            className="p-6 rounded-2xl mb-12"
            style={{ background: "linear-gradient(135deg, rgba(90,212,174,0.06) 0%, rgba(167,139,250,0.06) 100%)", border: "1px solid rgba(90,212,174,0.15)" }}
          >
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {c.problem.heading}
            </h2>
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

          {/* Why speed */}
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.why_speed.heading}
          </h2>
          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>{c.why_speed.body}</p>

          {/* Strategies */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.strategies.heading}
          </h2>

          <div className="flex flex-col gap-4 mb-12">
            {c.strategies.items.map((strategy, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border"
                style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="text-2xl font-extrabold flex-shrink-0 w-10 leading-none mt-0.5"
                    style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}
                  >
                    {strategy.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                      {strategy.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{strategy.description}</p>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "rgba(90,212,174,0.1)", color: "#5AD4AE" }}
                    >
                      {strategy.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.results.heading}
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{c.results.body}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {c.results.items.map((r, i) => (
              <div
                key={i}
                className="p-4 rounded-xl text-center"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              >
                <div className="text-2xl font-extrabold mb-2" style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}>{r.metric}</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{r.description}</p>
              </div>
            ))}
          </div>

          {/* Mistakes */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.mistakes.heading}
          </h2>

          <div className="flex flex-col gap-4 mb-12">
            {c.mistakes.items.map((m, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border"
                style={{ border: "1px solid rgba(245,160,94,0.3)", background: "rgba(245,160,94,0.04)" }}
              >
                <h3 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                  <span style={{ color: "#F5A05E" }}>⚠</span>
                  {m.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{m.description}</p>
              </div>
            ))}
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
              style={{ background: "linear-gradient(135deg, #5AD4AE 0%, #A78BFA 100%)" }}
            >
              {c.author.initials}
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
