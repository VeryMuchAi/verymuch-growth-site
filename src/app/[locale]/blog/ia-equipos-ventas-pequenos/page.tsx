import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface StatCard {
  value: string;
  label: string;
}
interface StepItem {
  number: string;
  title: string;
  body: string;
}
interface MistakeItem {
  title: string;
  body: string;
}
interface FAQItem {
  q: string;
  a: string;
}
interface PageContent {
  meta: { title: string; description: string };
  breadcrumb: { home: string; blog: string; current: string };
  tag: string;
  hero: { title: string; subtitle: string };
  intro: string;
  stats: StatCard[];
  stats_label: string;
  section_why: { heading: string; body: string };
  steps: { heading: string; items: StepItem[] };
  tools: { heading: string; body: string; items: string[] };
  mistakes: { heading: string; items: MistakeItem[] };
  results: { heading: string; body: string; items: string[] };
  faq: { heading: string; items: FAQItem[] };
  cta: {
    heading: string;
    body: string;
    primary: string;
    secondary: string;
    secondaryHref: string;
  };
  author: {
    name: string;
    role: string;
    bio: string;
    href: string;
  };
  published: string;
  dateISO: string;
  readTime: string;
}

/* ─── Content ────────────────────────────────────────────────────────────── */
const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title:
        "IA para equipos de ventas pequeños: por dónde empezar en 2026 | VeryMuch.ai",
      description:
        "Guía práctica para equipos de ventas de 1 a 5 personas que quieren implementar IA sin complejidad técnica ni grandes presupuestos. Los 3 primeros pasos que generan impacto inmediato.",
    },
    breadcrumb: {
      home: "Inicio",
      blog: "Blog",
      current: "IA para equipos de ventas pequeños",
    },
    tag: "Ventas con IA",
    hero: {
      title: "IA para equipos de ventas pequeños: por dónde empezar en 2026",
      subtitle:
        "Guía práctica para equipos de 1 a 5 personas que quieren implementar IA sin complejidad técnica ni grandes presupuestos.",
    },
    intro:
      "Si tienes un equipo de ventas pequeño — una persona, dos, cinco — la presión para hacer más con menos es constante. No puedes contratar a alguien más para cada función. Necesitas que cada persona en el equipo rinda al máximo. La inteligencia artificial no es solo para grandes empresas con equipos de datos y presupuestos millonarios. En 2026, los equipos de ventas de 1 a 5 personas tienen acceso a herramientas de IA que antes eran exclusivas de las Fortune 500. El desafío no es la tecnología — es saber por dónde empezar.",
    stats: [
      { value: "47%", label: "Más reuniones por vendedor con automatización de prospección" },
      { value: "3×", label: "Más leads calificados con el mismo equipo tras 90 días de IA" },
      { value: "2–4 h", label: "Tiempo recuperado diario por vendedor al automatizar tareas repetitivas" },
      { value: "60%", label: "Reducción en tiempo de respuesta a leads usando IA en WhatsApp/email" },
    ],
    stats_label: "Resultados en equipos B2B pequeños con IA — datos reales",
    section_why: {
      heading: "Por qué la IA es especialmente poderosa para equipos pequeños",
      body: "En equipos grandes, la IA compite con headcount. En equipos pequeños, la IA reemplaza funciones que simplemente no existen. Un equipo de 3 personas no tiene un SDR dedicado a prospección fría, ni un especialista en lead nurturing, ni un analista de datos comerciales. Con IA, esas funciones aparecen sin necesidad de contratar. Cada agente de IA actúa como un miembro del equipo que trabaja 24/7, no tiene días malos, y escala sin coste marginal. Para un equipo pequeño, eso no es una ventaja competitiva — es una igualación del campo de juego frente a competidores más grandes.",
    },
    steps: {
      heading: "Los 3 primeros pasos que generan impacto inmediato",
      items: [
        {
          number: "01",
          title: "Automatiza la respuesta inicial a leads entrantes",
          body: "El primer punto de contacto con un lead es el más crítico. Harvard Business Review demuestra que responder en menos de 5 minutos incrementa 21× la probabilidad de calificación. Para un equipo pequeño donde nadie monitorea el inbox las 24 horas, un agente de IA puede responder automáticamente por WhatsApp, email o formulario web: presenta la empresa, hace las preguntas de calificación básicas (tamaño, urgencia, presupuesto), y agenda la llamada con el vendedor humano — todo sin intervención manual. Herramienta: GoHighLevel + N8N o Make. Tiempo de implementación: 1–2 semanas.",
        },
        {
          number: "02",
          title: "Implementa seguimiento automatizado post-reunión",
          body: "El seguimiento es donde la mayoría de los deals mueren — no porque el cliente diga no, sino porque nadie hizo el seguimiento a tiempo. Un agente de IA puede enviar el resumen de la reunión, el próximo paso acordado, y recordatorios escalonados (24h, 72h, 7 días) sin que el vendedor tenga que recordarlo manualmente. Resultado típico: 35–40% más de oportunidades que avanzan en el pipeline. Herramienta: HubSpot Sequences o GoHighLevel Workflows. Tiempo de implementación: 3–5 días.",
        },
        {
          number: "03",
          title: "Crea tu primer agente de contenido para LinkedIn",
          body: "En ventas B2B, la presencia en LinkedIn genera inbound de calidad — pero publicar consistentemente requiere tiempo que los equipos pequeños no tienen. Un agente de IA puede generar borradores de posts a partir de conversaciones con clientes, casos de éxito, o artículos del sector. El vendedor revisa y publica — el agente hace el 80% del trabajo. Con 3–4 posts semanales bien escritos, un equipo pequeño puede construir una marca personal que genera leads sin inversión publicitaria. Herramienta: Claude API + N8N. Tiempo de implementación: 1 semana.",
        },
      ],
    },
    tools: {
      heading: "Stack recomendado para equipos pequeños (menos de €500/mes)",
      body: "No necesitas las herramientas más caras para empezar. Este stack cubre los tres pasos anteriores con un coste mensual accesible:",
      items: [
        "GoHighLevel (~$97/mes): CRM + automatización + WhatsApp + calendario — todo en uno para equipos pequeños",
        "N8N (~$20/mes en cloud): motor de automatización sin código para conectar todas las herramientas",
        "Claude API (~$30–80/mes según uso): inteligencia del agente para respuestas, calificación y contenido",
        "Apollo.io (~$49/mes): prospección outbound con datos verificados de empresas y contactos B2B",
        "Total estimado: €200–350/mes para un sistema completo de IA de ventas",
      ],
    },
    mistakes: {
      heading: "Los 3 errores más comunes en equipos pequeños que implementan IA",
      items: [
        {
          title: "Empezar con demasiadas herramientas a la vez",
          body: "Los equipos pequeños se paralizan intentando implementar 10 herramientas simultáneamente. Resultado: ninguna se implementa bien. Mejor enfoque: un caso de uso, una herramienta, 30 días de operación real antes de añadir la siguiente.",
        },
        {
          title: "Automatizar sin definir el proceso manual primero",
          body: "Si tu proceso de seguimiento manual es inconsistente, automatizarlo solo hará que sea inconsistente a escala. Antes de automatizar, documenta el proceso ideal en papel: qué dice el mensaje, cuándo se envía, qué busca como respuesta. La automatización es la ejecución perfecta del proceso — no su diseño.",
        },
        {
          title: "Esperar a tener 'suficiente volumen' para justificar la IA",
          body: "Este es el error más costoso. La IA no solo escala volumen existente — crea volumen nuevo al capturar leads que antes se perdían por falta de respuesta rápida. Un equipo de una sola persona que responde en 5 minutos con IA compite directamente con equipos de 10 personas que responden en 4 horas.",
        },
      ],
    },
    results: {
      heading: "Qué esperar en los primeros 90 días",
      body: "Basado en implementaciones reales en equipos B2B de 1–5 personas:",
      items: [
        "Semana 1–2: Agente de respuesta inicial live. Primer lead calificado automáticamente.",
        "Semana 3–4: Secuencias de seguimiento activas. Reducción visible en leads sin respuesta.",
        "Mes 2: Pipeline más limpio. Más oportunidades avanzando. Menos tareas administrativas para el equipo.",
        "Mes 3: ROI medible. Típicamente 3–5× el coste de las herramientas en valor de pipeline generado.",
        "Señal de éxito: El equipo deja de sentir que 'no hay tiempo' para hacer las cosas bien.",
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito conocimientos técnicos para implementar IA en mi equipo de ventas?",
          a: "No. Las herramientas actuales como GoHighLevel, N8N y Make están diseñadas para perfiles no técnicos. El mayor requisito es claridad sobre tu proceso de ventas — la parte técnica es más accesible que nunca. Puedes implementar el primer agente en 1–2 semanas sin saber programar.",
        },
        {
          q: "¿Cuánto tiempo tarda en verse el retorno de inversión?",
          a: "En equipos pequeños, el ROI suele ser visible en 30–60 días. El primer impacto es la reducción de leads perdidos por falta de respuesta rápida — que en la mayoría de los equipos representa entre el 30% y el 50% del volumen entrante. Recuperar ese porcentaje cubre el coste de las herramientas desde el primer mes.",
        },
        {
          q: "¿La IA reemplazará a mi equipo de ventas?",
          a: "No — y especialmente no en B2B. La IA automatiza las tareas repetitivas (respuesta inicial, seguimiento, calificación básica, contenido) para que el equipo humano se enfoque en lo que solo los humanos pueden hacer: construir relaciones, negociar, entender problemas complejos y cerrar. La IA hace que cada vendedor sea más productivo, no prescindible.",
        },
        {
          q: "¿Por dónde empiezo si nunca he usado IA en ventas?",
          a: "El punto de entrada más rápido con impacto inmediato: automatizar la respuesta a leads entrantes. Es el caso de uso con mayor ROI, menor complejidad técnica, y resultados medibles desde la primera semana. Puedes hacerlo con GoHighLevel + un workflow simple en N8N en menos de dos semanas.",
        },
        {
          q: "¿Funciona para empresas que venden servicios, no solo productos?",
          a: "Sí, y de hecho los servicios B2B son uno de los mejores casos de uso. El proceso de calificación (¿cuál es el problema? ¿cuánto cuesta no resolverlo? ¿hay presupuesto?) es perfectamente automatizable, y el volumen de seguimiento post-reunión es donde más tiempo se pierde en equipos de servicios.",
        },
      ],
    },
    cta: {
      heading: "¿Listo para implementar IA en tu equipo de ventas?",
      body: "Hacemos un diagnóstico de 30 minutos para identificar los 3 casos de uso de mayor impacto para tu equipo específico — y te mostramos cómo implementarlos.",
      primary: "Agendar diagnóstico gratuito",
      secondary: "Ver cómo automatizar el seguimiento de leads →",
      secondaryHref: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      name: "Edwin Moreno",
      role: "COO & Co-fundador, VeryMuch.ai",
      bio: "Experto en automatización de procesos y agentes de IA para revenue operations. Mencionado en Forbes México. Speaker TEDx en productividad e IA. Lidera la implementación de agentes de IA en equipos comerciales B2B en México, España y Colombia.",
      href: "/autor/edwin-moreno",
    },
    published: "9 de junio, 2026",
    dateISO: "2026-06-09",
    readTime: "8 min",
  },

  en: {
    meta: {
      title:
        "AI for Small Sales Teams: Where to Start in 2026 | VeryMuch.ai",
      description:
        "Practical guide for sales teams of 1–5 people who want to implement AI without technical complexity or big budgets. The 3 first steps that generate immediate impact.",
    },
    breadcrumb: {
      home: "Home",
      blog: "Blog",
      current: "AI for small sales teams",
    },
    tag: "AI Sales",
    hero: {
      title: "AI for small sales teams: where to start in 2026",
      subtitle:
        "Practical guide for teams of 1–5 people who want to implement AI without technical complexity or big budgets.",
    },
    intro:
      "If you have a small sales team — one person, two, five — the pressure to do more with less is constant. You can't hire someone new for every function. You need each person on the team performing at their maximum. Artificial intelligence is not just for large companies with data teams and million-dollar budgets. In 2026, sales teams of 1 to 5 people have access to AI tools that were previously exclusive to Fortune 500 companies. The challenge is not the technology — it's knowing where to start.",
    stats: [
      { value: "47%", label: "More meetings per rep with prospecting automation" },
      { value: "3×", label: "More qualified leads with the same team after 90 days of AI" },
      { value: "2–4 h", label: "Time recovered daily per rep by automating repetitive tasks" },
      { value: "60%", label: "Reduction in lead response time using AI in WhatsApp/email" },
    ],
    stats_label: "Results in small B2B teams with AI — real data",
    section_why: {
      heading: "Why AI is especially powerful for small teams",
      body: "In large teams, AI competes with headcount. In small teams, AI replaces functions that simply don't exist. A 3-person team doesn't have a dedicated SDR for cold prospecting, nor a lead nurturing specialist, nor a commercial data analyst. With AI, those functions appear without needing to hire. Each AI agent acts as a team member that works 24/7, never has bad days, and scales at no marginal cost. For a small team, that's not a competitive advantage — it's a leveling of the playing field against larger competitors.",
    },
    steps: {
      heading: "The 3 first steps that generate immediate impact",
      items: [
        {
          number: "01",
          title: "Automate the initial response to inbound leads",
          body: "The first point of contact with a lead is the most critical. Harvard Business Review shows that responding in under 5 minutes increases qualification probability by 21×. For a small team where no one monitors the inbox 24 hours, an AI agent can automatically respond via WhatsApp, email, or web form: introduces the company, asks basic qualification questions (size, urgency, budget), and schedules the call with the human rep — all without manual intervention. Tool: GoHighLevel + N8N or Make. Implementation time: 1–2 weeks.",
        },
        {
          number: "02",
          title: "Implement automated post-meeting follow-up",
          body: "Follow-up is where most deals die — not because the client says no, but because nobody followed up in time. An AI agent can send the meeting summary, the agreed next step, and staggered reminders (24h, 72h, 7 days) without the rep having to remember manually. Typical result: 35–40% more opportunities advancing in the pipeline. Tool: HubSpot Sequences or GoHighLevel Workflows. Implementation time: 3–5 days.",
        },
        {
          number: "03",
          title: "Create your first LinkedIn content agent",
          body: "In B2B sales, LinkedIn presence generates quality inbound — but publishing consistently requires time that small teams don't have. An AI agent can generate post drafts from client conversations, success cases, or industry articles. The rep reviews and publishes — the agent does 80% of the work. With 3–4 well-written weekly posts, a small team can build a personal brand that generates leads without advertising spend. Tool: Claude API + N8N. Implementation time: 1 week.",
        },
      ],
    },
    tools: {
      heading: "Recommended stack for small teams (under €500/month)",
      body: "You don't need the most expensive tools to start. This stack covers the three steps above at an accessible monthly cost:",
      items: [
        "GoHighLevel (~$97/mo): CRM + automation + WhatsApp + calendar — all-in-one for small teams",
        "N8N (~$20/mo cloud): no-code automation engine to connect all tools",
        "Claude API (~$30–80/mo by usage): agent intelligence for responses, qualification, and content",
        "Apollo.io (~$49/mo): outbound prospecting with verified B2B company and contact data",
        "Estimated total: €200–350/month for a complete AI sales system",
      ],
    },
    mistakes: {
      heading: "The 3 most common mistakes small teams make implementing AI",
      items: [
        {
          title: "Starting with too many tools at once",
          body: "Small teams get paralyzed trying to implement 10 tools simultaneously. Result: none are implemented well. Better approach: one use case, one tool, 30 days of real operation before adding the next.",
        },
        {
          title: "Automating without defining the manual process first",
          body: "If your manual follow-up process is inconsistent, automating it will only make it inconsistent at scale. Before automating, document the ideal process on paper: what the message says, when it's sent, what response it's looking for. Automation is the perfect execution of the process — not its design.",
        },
        {
          title: "Waiting until you have 'enough volume' to justify AI",
          body: "This is the most costly mistake. AI doesn't just scale existing volume — it creates new volume by capturing leads that were previously lost due to slow response. A one-person team that responds in 5 minutes with AI competes directly with 10-person teams that respond in 4 hours.",
        },
      ],
    },
    results: {
      heading: "What to expect in the first 90 days",
      body: "Based on real implementations in B2B teams of 1–5 people:",
      items: [
        "Week 1–2: Initial response agent live. First lead automatically qualified.",
        "Week 3–4: Follow-up sequences active. Visible reduction in uncontacted leads.",
        "Month 2: Cleaner pipeline. More opportunities advancing. Fewer admin tasks for the team.",
        "Month 3: Measurable ROI. Typically 3–5× the tool cost in pipeline value generated.",
        "Success signal: The team stops feeling like there's 'never enough time' to do things right.",
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Do I need technical knowledge to implement AI in my sales team?",
          a: "No. Current tools like GoHighLevel, N8N, and Make are designed for non-technical profiles. The biggest requirement is clarity about your sales process — the technical part is more accessible than ever. You can implement the first agent in 1–2 weeks without knowing how to code.",
        },
        {
          q: "How long does it take to see return on investment?",
          a: "In small teams, ROI is usually visible in 30–60 days. The first impact is the reduction of leads lost due to slow response — which in most teams represents between 30% and 50% of inbound volume. Recovering that percentage covers the tool cost from the first month.",
        },
        {
          q: "Will AI replace my sales team?",
          a: "No — and especially not in B2B. AI automates repetitive tasks (initial response, follow-up, basic qualification, content) so the human team can focus on what only humans can do: build relationships, negotiate, understand complex problems, and close. AI makes each rep more productive, not dispensable.",
        },
        {
          q: "Where do I start if I've never used AI in sales?",
          a: "The fastest entry point with immediate impact: automating the response to inbound leads. It's the use case with the highest ROI, lowest technical complexity, and measurable results from the first week. You can do it with GoHighLevel + a simple N8N workflow in less than two weeks.",
        },
        {
          q: "Does it work for companies selling services, not just products?",
          a: "Yes, and in fact B2B services are one of the best use cases. The qualification process (what's the problem? how much does it cost not to solve it? is there budget?) is perfectly automatable, and the post-meeting follow-up volume is where service teams lose the most time.",
        },
      ],
    },
    cta: {
      heading: "Ready to implement AI in your sales team?",
      body: "We run a 30-minute diagnostic to identify the 3 highest-impact use cases for your specific team — and show you how to implement them.",
      primary: "Schedule free diagnostic",
      secondary: "See how to automate lead follow-up →",
      secondaryHref: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      name: "Edwin Moreno",
      role: "COO & Co-founder, VeryMuch.ai",
      bio: "Expert in process automation and AI agents for revenue operations. Featured in Forbes Mexico. TEDx speaker on productivity and AI. Leads AI agent implementation in B2B commercial teams in Mexico, Spain, and Colombia.",
      href: "/autor/edwin-moreno",
    },
    published: "June 9, 2026",
    dateISO: "2026-06-09",
    readTime: "8 min",
  },
};

/* ─── Metadata ────────────────────────────────────────────────────────────── */
type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "es";
  const c = CONTENT[lang];
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/blog/ia-equipos-ventas-pequenos`
      : `${BASE_URL}/blog/ia-equipos-ventas-pequenos`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/ia-equipos-ventas-pequenos`,
        en: `${BASE_URL}/en/blog/ia-equipos-ventas-pequenos`,
        "x-default": `${BASE_URL}/blog/ia-equipos-ventas-pequenos`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "Verymuch.ai",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: canonical,
      title: c.meta.title,
      description: c.meta.description,
      publishedTime: "2026-06-09",
      authors: ["Edwin Moreno"],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function Page({ params }: Props) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "es";
  const c = CONTENT[lang];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.hero.title,
    description: c.meta.description,
    datePublished: c.dateISO,
    dateModified: c.dateISO,
    author: {
      "@type": "Person",
      name: c.author.name,
      url: `${BASE_URL}${c.author.href}`,
    },
    publisher: {
      "@type": "Organization",
      name: "VeryMuch.ai",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        locale === "en"
          ? `${BASE_URL}/en/blog/ia-equipos-ventas-pequenos`
          : `${BASE_URL}/blog/ia-equipos-ventas-pequenos`,
    },
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
      {
        "@type": "ListItem",
        position: 1,
        name: c.breadcrumb.home,
        item: locale === "en" ? `${BASE_URL}/en` : BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.breadcrumb.blog,
        item: locale === "en" ? `${BASE_URL}/en/blog` : `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: c.breadcrumb.current,
        item:
          locale === "en"
            ? `${BASE_URL}/en/blog/ia-equipos-ventas-pequenos`
            : `${BASE_URL}/blog/ia-equipos-ventas-pequenos`,
      },
    ],
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HomeNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-36 pb-16 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 65% -15%, rgba(172,237,235,0.07) 0%, rgba(218,184,130,0.05) 45%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" style={{ color: "var(--text-secondary)" }}>{c.breadcrumb.home}</Link>
            <span className="opacity-40">›</span>
            <Link href="/blog" style={{ color: "var(--text-secondary)" }}>{c.breadcrumb.blog}</Link>
            <span className="opacity-40">›</span>
            <span style={{ color: "var(--accent-text)" }}>{c.breadcrumb.current}</span>
          </nav>

          <p className="mb-4">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--accent-text)" }}
            >
              {c.tag}
            </span>
          </p>
          <h1
            className="font-extrabold leading-tight mb-6"
            style={{
              fontSize: "clamp(1.75rem,4.5vw,2.75rem)",
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
            }}
          >
            {c.hero.title}
          </h1>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {c.hero.subtitle}
          </p>

          {/* Author / meta */}
          <div className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
            <Link href={c.author.href} className="font-semibold hover:opacity-80" style={{ color: "var(--text-primary)" }}>
              {c.author.name}
            </Link>
            <span className="opacity-30">·</span>
            <time dateTime={c.dateISO}>{c.published}</time>
            <span className="opacity-30">·</span>
            <span>{c.readTime} {lang === "es" ? "de lectura" : "read"}</span>
          </div>
        </div>
      </header>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">

          {/* Intro */}
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>
            {c.intro}
          </p>

          {/* Stats */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.stats_label}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {c.stats.map((s) => (
                <div
                  key={s.value}
                  className="rounded-2xl p-5 border text-center"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <p
                    className="font-extrabold mb-1"
                    style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--accent-text)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why small teams */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.section_why.heading}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.section_why.body}
            </p>
          </section>

          {/* 3 Steps */}
          <section>
            <h2
              className="font-bold mb-8"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.steps.heading}
            </h2>
            <div className="space-y-6">
              {c.steps.items.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-extrabold text-2xl shrink-0 mt-0.5"
                      style={{ color: "var(--accent-text)", opacity: 0.5 }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.tools.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.tools.body}
            </p>
            <ul className="space-y-2">
              {c.tools.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--accent-text)" }} className="mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Mistakes */}
          <section>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.mistakes.heading}
            </h2>
            <div className="space-y-4">
              {c.mistakes.items.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <h3 className="font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.results.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.results.body}
            </p>
            <ul className="space-y-3">
              {c.results.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm rounded-xl px-4 py-3 border"
                  style={{
                    color: "var(--text-secondary)",
                    background: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span style={{ color: "var(--accent-text)" }} className="shrink-0 mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.faq.heading}
            </h2>
            <div className="space-y-4">
              {c.faq.items.map((item, i) => (
                <details
                  key={i}
                  className="rounded-2xl border overflow-hidden"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <summary
                    className="px-6 py-4 cursor-pointer font-semibold text-sm select-none"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.q}
                  </summary>
                  <p
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Author */}
          <section
            className="rounded-2xl p-6 border"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
              {lang === "es" ? "Sobre el autor" : "About the author"}
            </p>
            <Link href={c.author.href} className="font-bold text-base hover:opacity-80" style={{ color: "var(--text-primary)" }}>
              {c.author.name}
            </Link>
            <p className="text-xs mb-2" style={{ color: "var(--accent-text)" }}>{c.author.role}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.author.bio}
            </p>
          </section>

          {/* CTA */}
          <section
            className="rounded-2xl p-8 border text-center"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <h2
              className="font-bold mb-3"
              style={{ fontSize: "clamp(1.2rem,2.5vw,1.5rem)", color: "var(--text-primary)" }}
            >
              {c.cta.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              {c.cta.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-block rounded-xl px-6 py-3 font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: "var(--accent-text)", color: "#0a0f14" }}
              >
                {c.cta.primary}
              </Link>
              <Link
                href={c.cta.secondaryHref as `/blog/${string}`}
                className="inline-block rounded-xl px-6 py-3 font-semibold text-sm border transition-opacity hover:opacity-80"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                {c.cta.secondary}
              </Link>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}
