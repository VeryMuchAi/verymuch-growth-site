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
interface PhaseItem {
  day: string;
  title: string;
  body: string;
  auto: string;
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
  phases: { heading: string; intro: string; items: PhaseItem[] };
  steps: { heading: string; items: StepItem[] };
  mistakes: { heading: string; items: { title: string; body: string }[] };
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
        "Automatización de onboarding de clientes con IA: guía completa 2026 | VeryMuch.ai",
      description:
        "Cómo automatizar el onboarding de clientes con IA para reducir el tiempo de activación, aumentar la retención y liberar al equipo de tareas repetitivas. Guía con flujos, herramientas y casos reales.",
    },
    breadcrumb: {
      home: "Inicio",
      blog: "Blog",
      current: "Onboarding de clientes con IA",
    },
    tag: "Automatización con IA",
    hero: {
      title: "Automatización de onboarding de clientes con IA: guía completa 2026",
      subtitle:
        "Reduce el tiempo de activación, aumenta la retención y libera a tu equipo de tareas repetitivas. Flujos, herramientas y casos reales.",
    },
    intro:
      "El onboarding es el momento más crítico en la relación con un cliente. Los primeros 30 días determinan si un cliente se convierte en un caso de éxito o en una cancelación prematura. Y sin embargo, en la mayoría de las empresas B2B, el onboarding sigue siendo manual, inconsistente y dependiente de que alguien recuerde hacer las cosas a tiempo. La IA cambia esta ecuación por completo. No solo automatiza las tareas repetitivas del onboarding — crea una experiencia personalizada y proactiva que hace que cada cliente sienta que tiene un equipo dedicado exclusivamente a su éxito, incluso cuando eres un equipo de 3 personas.",
    stats: [
      { value: "40%", label: "Reducción en churn cuando el onboarding está estructurado con IA" },
      { value: "3.2×", label: "Más probabilidad de expansión de cuenta en clientes con onboarding automatizado" },
      { value: "67%", label: "Del tiempo de onboarding puede automatizarse sin perder calidad de experiencia" },
      { value: "< 48 h", label: "Tiempo promedio para completar el primer hito de valor con onboarding de IA" },
    ],
    stats_label: "Impacto de la automatización de onboarding en retención B2B",
    section_why: {
      heading: "Por qué el onboarding manual falla (y qué pierde tu empresa cada día)",
      body: "El onboarding manual falla por tres razones sistemáticas: (1) Depende de la memoria y disponibilidad de personas específicas — cuando ese Customer Success Manager está de vacaciones, el cliente nuevo queda sin atención. (2) Es inconsistente por naturaleza — cada cliente recibe una experiencia diferente según quién le toque. (3) No escala — con 5 clientes funciona; con 50, colapsa. Cada día que un cliente nuevo no llega a su 'primer momento de valor' es un día que acumula dudas sobre si tomó la decisión correcta. Los datos son claros: el 70% del churn en SaaS y servicios B2B se origina en los primeros 90 días, y la mayoría es prevenible con un onboarding estructurado.",
    },
    phases: {
      heading: "Las 4 fases del onboarding automatizado con IA",
      intro: "Un sistema de onboarding con IA cubre cuatro fases secuenciales, cada una con tareas automatizadas y momentos de intervención humana estratégica:",
      items: [
        {
          day: "Día 0–2",
          title: "Bienvenida y configuración inicial",
          body: "El cliente firma el contrato y el sistema de IA se activa automáticamente. Se envía la bienvenida personalizada con el nombre del cliente, el nombre del proyecto y los próximos pasos específicos para su caso. Se genera automáticamente el acceso, las credenciales y el material de onboarding. Se agenda la reunión de kickoff en el calendario del cliente sin intervención manual.",
          auto: "Automatizable al 95%: welcome email, acceso, agenda kickoff",
        },
        {
          day: "Día 3–7",
          title: "Activación y primer hito de valor",
          body: "El objetivo es que el cliente complete la primera acción significativa en el producto o servicio. La IA monitorea el progreso y envía recordatorios contextuales si detecta inactividad. Si el cliente completa el hito, envía un mensaje de celebración y presenta el siguiente paso. Si no lo completa en 48 horas, escala al Customer Success Manager para intervención humana.",
          auto: "Automatizable al 70%: seguimiento, recordatorios, escalación inteligente",
        },
        {
          day: "Día 8–21",
          title: "Adopción y expansión de uso",
          body: "La IA identifica qué funcionalidades o capacidades el cliente aún no ha utilizado y genera contenido educativo personalizado (videos cortos, FAQs, casos de uso relevantes para su industria). Envía check-ins semanales automatizados con resúmenes de progreso y sugerencias de próximos pasos. Detecta señales de riesgo (inactividad, tickets sin resolver, métricas por debajo del benchmark) y alerta al equipo.",
          auto: "Automatizable al 80%: educación contextual, check-ins, detección de riesgo",
        },
        {
          day: "Día 22–30",
          title: "Revisión de valor y transición a cuenta activa",
          body: "Al final del primer mes, la IA genera automáticamente un reporte de valor: qué logró el cliente en los primeros 30 días, comparado con el baseline inicial. Este reporte se usa en la reunión de revisión mensual. Si el cliente alcanzó los objetivos, se presenta la oportunidad de expansión (upsell o cross-sell). Si no los alcanzó, se activa un plan de rescate estructurado.",
          auto: "Automatizable al 60%: reporte de valor, identificación de oportunidad de expansión",
        },
      ],
    },
    steps: {
      heading: "Cómo implementar el sistema en 3 semanas",
      items: [
        {
          number: "01",
          title: "Documenta el proceso ideal de onboarding",
          body: "Antes de automatizar, define el proceso perfecto: ¿Cuáles son los 5 hitos que un cliente debe alcanzar en los primeros 30 días? ¿Cuáles son las señales de éxito en cada hito? ¿Cuándo debe intervenir el equipo humano? Este mapa de proceso es el blueprint que la IA va a ejecutar. Sin él, la automatización reproducirá el caos del proceso manual — solo que más rápido.",
        },
        {
          number: "02",
          title: "Configura los flujos de automatización por canal",
          body: "Implementa los flujos en tu CRM o herramienta de automatización (GoHighLevel, HubSpot, N8N). Cada hito del proceso tiene: (a) trigger que lo activa (fecha, acción del cliente, inactividad), (b) mensaje personalizado con nombre, empresa y contexto específico, (c) lógica de bifurcación según el comportamiento del cliente, (d) escalación al humano cuando se necesita. La clave es que los mensajes no parezcan automatizados — deben sonar como si los escribiera el Customer Success Manager personalmente.",
        },
        {
          number: "03",
          title: "Integra la IA para personalización y detección de riesgo",
          body: "Conecta una IA (Claude API, GPT-4) para dos funciones críticas: (1) Personalización de mensajes — la IA adapta el contenido genérico al contexto específico del cliente (industria, tamaño, caso de uso). (2) Detección de riesgo — la IA analiza los patrones de comportamiento del cliente y alerta al equipo cuando detecta señales de posible churn. Esta capa de inteligencia es lo que transforma un sistema de automatización estándar en un sistema de onboarding genuinamente proactivo.",
        },
      ],
    },
    mistakes: {
      heading: "Los 3 errores más costosos en onboarding con IA",
      items: [
        {
          title: "Automatizar el onboarding sin haber mapeado el proceso manual primero",
          body: "Si tu proceso de onboarding manual es inconsistente o está mal definido, automatizarlo solo escalará esa inconsistencia. El primer paso siempre es documentar el proceso ideal — qué debe pasar, en qué orden, con qué métricas de éxito. La automatización viene después.",
        },
        {
          title: "Eliminar todos los puntos de contacto humano",
          body: "La automatización debe amplificar la capacidad humana, no reemplazarla en los momentos críticos. Los clientes B2B de alto valor esperan y necesitan interacción humana en puntos clave: kickoff, revisión de mes 1, situaciones de riesgo. El error es automatizar esos momentos. El acierto es automatizar todo lo que rodea esos momentos para que el humano llegue más preparado y el cliente se sienta más atendido.",
        },
        {
          title: "No medir el tiempo hasta el primer valor (Time to First Value)",
          body: "Si no mides el Time to First Value (TTFV), no sabes si tu onboarding funciona. Este KPI — el tiempo que tarda el cliente en completar el primer hito significativo — es el predictor más poderoso de retención a 12 meses. Con onboarding manual, el TTFV promedio en servicios B2B es de 14–21 días. Con automatización con IA, puede reducirse a 3–5 días.",
        },
      ],
    },
    results: {
      heading: "Resultados reales en los primeros 90 días",
      body: "Empresas B2B de servicios que implementan onboarding automatizado con IA reportan:",
      items: [
        "Reducción del TTFV (Time to First Value) de 14–21 días a 3–5 días",
        "Aumento del NPS en los primeros 30 días: de 32 a 58 puntos promedio",
        "Reducción del churn en los primeros 90 días: del 18% al 8–10%",
        "Liberación de 60–70% del tiempo del equipo de Customer Success para trabajo de alto valor",
        "Aumento en tasa de upsell/cross-sell en mes 2: del 12% al 28% en cuentas con onboarding estructurado",
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Qué herramientas necesito para automatizar el onboarding con IA?",
          a: "El stack mínimo viable incluye: (1) CRM con capacidades de automatización (HubSpot, GoHighLevel, o similar), (2) herramienta de automatización de flujos (N8N o Make), (3) API de IA para personalización (Claude o GPT-4). Para equipos pequeños, GoHighLevel cubre el 80% de las funcionalidades necesarias sin necesidad de stack adicional. El coste total oscila entre $150 y $400/mes dependiendo del volumen de clientes.",
        },
        {
          q: "¿Cuánto tiempo tarda en implementarse el sistema?",
          a: "Un sistema de onboarding automatizado básico (bienvenida + seguimiento de hitos + escalación) puede estar operativo en 2–3 semanas. El sistema completo con personalización por IA y detección de riesgo requiere 4–6 semanas. El tiempo real depende principalmente de si el proceso manual ya está documentado — si no lo está, agregar 1–2 semanas de diseño de proceso.",
        },
        {
          q: "¿Funciona para servicios con onboarding complejo o largo (6+ meses)?",
          a: "Sí, especialmente en esos casos. Los onboardings largos son donde más tiempo se pierde en seguimiento manual y donde más valor tiene la detección temprana de riesgo. Para proyectos de 6+ meses, el sistema de IA se convierte en el 'hilo conductor' que garantiza que los hitos se cumplan y que el cliente sienta progreso constante, incluso en etapas donde el trabajo principal está ocurriendo en el backend.",
        },
        {
          q: "¿Cómo personalizo los mensajes para que no suenen a plantilla?",
          a: "La clave es el nivel de personalización en los datos que la IA tiene disponibles. Si el sistema conoce la industria del cliente, su caso de uso específico, el nombre de su proyecto, y los hitos que ha completado, puede generar mensajes que se sienten genuinamente personales. El truco técnico es incluir esos campos dinámicos en el prompt de la IA junto con instrucciones de tono: 'escribe como si fuera el Customer Success Manager que conoce a este cliente, no como un sistema automatizado'.",
        },
        {
          q: "¿Qué métricas debo trackear para saber si el sistema funciona?",
          a: "Las 4 métricas clave son: (1) TTFV — Time to First Value: días hasta el primer hito completado. (2) Completion rate de hitos: % de clientes que completan cada paso del onboarding. (3) Churn en los primeros 90 días: comparado con el baseline pre-automatización. (4) NPS al día 30: satisfacción en el momento más crítico. Estas 4 métricas juntas dan una imagen completa de si el onboarding está funcionando o dónde se rompe.",
        },
      ],
    },
    cta: {
      heading: "¿Quieres automatizar el onboarding de tus clientes?",
      body: "Diseñamos el sistema completo: mapeo de proceso, flujos de automatización, integración de IA y métricas de seguimiento. Implementación en 3–6 semanas.",
      primary: "Agendar diagnóstico gratuito",
      secondary: "Ver cómo automatizar el seguimiento de leads →",
      secondaryHref: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      name: "Jorge Herrera Cruz",
      role: "CEO & Co-fundador, VeryMuch.ai",
      bio: "CEO de VeryMuch.ai, agencia especializada en agentes de IA para empresas B2B en habla hispana. Más de 10 años liderando transformación digital en empresas de México, España y Colombia. Experto en automatización de procesos comerciales con inteligencia artificial.",
      href: "/autor/jorge-herrera-cruz",
    },
    published: "23 de junio, 2026",
    dateISO: "2026-06-23",
    readTime: "10 min",
  },

  en: {
    meta: {
      title:
        "AI Customer Onboarding Automation: Complete Guide 2026 | VeryMuch.ai",
      description:
        "How to automate customer onboarding with AI to reduce activation time, increase retention, and free your team from repetitive tasks. Guide with flows, tools, and real cases.",
    },
    breadcrumb: {
      home: "Home",
      blog: "Blog",
      current: "AI customer onboarding",
    },
    tag: "AI Automation",
    hero: {
      title: "AI customer onboarding automation: complete guide 2026",
      subtitle:
        "Reduce activation time, increase retention, and free your team from repetitive tasks. Flows, tools, and real cases.",
    },
    intro:
      "Onboarding is the most critical moment in the relationship with a customer. The first 30 days determine whether a customer becomes a success story or an early cancellation. And yet, in most B2B companies, onboarding remains manual, inconsistent, and dependent on someone remembering to do things on time. AI completely changes this equation. It doesn't just automate the repetitive tasks of onboarding — it creates a personalized and proactive experience that makes every customer feel like they have a team dedicated exclusively to their success, even when you're a 3-person team.",
    stats: [
      { value: "40%", label: "Reduction in churn when onboarding is structured with AI" },
      { value: "3.2×", label: "More likely account expansion for customers with automated onboarding" },
      { value: "67%", label: "Of onboarding time can be automated without losing experience quality" },
      { value: "< 48 h", label: "Average time to complete first value milestone with AI onboarding" },
    ],
    stats_label: "Impact of onboarding automation on B2B retention",
    section_why: {
      heading: "Why manual onboarding fails (and what your company loses every day)",
      body: "Manual onboarding fails for three systematic reasons: (1) It depends on the memory and availability of specific people — when that Customer Success Manager is on vacation, the new customer goes unattended. (2) It's inherently inconsistent — each customer gets a different experience depending on who handles them. (3) It doesn't scale — with 5 customers it works; with 50, it collapses. Every day a new customer doesn't reach their 'first moment of value' is a day they accumulate doubts about whether they made the right decision. The data is clear: 70% of churn in SaaS and B2B services originates in the first 90 days, and most of it is preventable with structured onboarding.",
    },
    phases: {
      heading: "The 4 phases of AI-automated onboarding",
      intro: "An AI onboarding system covers four sequential phases, each with automated tasks and strategic human intervention moments:",
      items: [
        {
          day: "Day 0–2",
          title: "Welcome and initial setup",
          body: "The customer signs the contract and the AI system activates automatically. A personalized welcome is sent with the customer's name, project name, and specific next steps for their case. Access, credentials, and onboarding materials are automatically generated. The kickoff meeting is scheduled in the customer's calendar without manual intervention.",
          auto: "95% automatable: welcome email, access, kickoff scheduling",
        },
        {
          day: "Day 3–7",
          title: "Activation and first value milestone",
          body: "The goal is for the customer to complete the first significant action in the product or service. AI monitors progress and sends contextual reminders if it detects inactivity. If the customer completes the milestone, it sends a celebration message and presents the next step. If not completed within 48 hours, it escalates to the Customer Success Manager for human intervention.",
          auto: "70% automatable: tracking, reminders, intelligent escalation",
        },
        {
          day: "Day 8–21",
          title: "Adoption and usage expansion",
          body: "AI identifies what features or capabilities the customer hasn't yet used and generates personalized educational content (short videos, FAQs, use cases relevant to their industry). Sends automated weekly check-ins with progress summaries and next step suggestions. Detects risk signals (inactivity, unresolved tickets, metrics below benchmark) and alerts the team.",
          auto: "80% automatable: contextual education, check-ins, risk detection",
        },
        {
          day: "Day 22–30",
          title: "Value review and transition to active account",
          body: "At the end of the first month, AI automatically generates a value report: what the customer achieved in the first 30 days, compared to the initial baseline. This report is used in the monthly review meeting. If the customer reached their goals, the expansion opportunity is presented (upsell or cross-sell). If not, a structured recovery plan is activated.",
          auto: "60% automatable: value report, expansion opportunity identification",
        },
      ],
    },
    steps: {
      heading: "How to implement the system in 3 weeks",
      items: [
        {
          number: "01",
          title: "Document the ideal onboarding process",
          body: "Before automating, define the perfect process: What are the 5 milestones a customer must reach in the first 30 days? What are the success signals at each milestone? When should the human team intervene? This process map is the blueprint that AI will execute. Without it, automation will reproduce the chaos of the manual process — just faster.",
        },
        {
          number: "02",
          title: "Configure automation flows by channel",
          body: "Implement flows in your CRM or automation tool (GoHighLevel, HubSpot, N8N). Each process milestone has: (a) trigger that activates it (date, customer action, inactivity), (b) personalized message with name, company, and specific context, (c) branching logic based on customer behavior, (d) escalation to the human when needed. The key is that messages don't seem automated — they should sound as if the Customer Success Manager wrote them personally.",
        },
        {
          number: "03",
          title: "Integrate AI for personalization and risk detection",
          body: "Connect an AI (Claude API, GPT-4) for two critical functions: (1) Message personalization — AI adapts generic content to the customer's specific context (industry, size, use case). (2) Risk detection — AI analyzes customer behavior patterns and alerts the team when it detects potential churn signals. This intelligence layer is what transforms a standard automation system into a genuinely proactive onboarding system.",
        },
      ],
    },
    mistakes: {
      heading: "The 3 most costly mistakes in AI onboarding",
      items: [
        {
          title: "Automating onboarding without mapping the manual process first",
          body: "If your manual onboarding process is inconsistent or poorly defined, automating it will only scale that inconsistency. The first step is always to document the ideal process — what should happen, in what order, with what success metrics. Automation comes after.",
        },
        {
          title: "Eliminating all human touchpoints",
          body: "Automation should amplify human capacity, not replace it at critical moments. High-value B2B customers expect and need human interaction at key points: kickoff, month 1 review, risk situations. The mistake is automating those moments. The right approach is to automate everything around those moments so the human arrives better prepared and the customer feels more attended to.",
        },
        {
          title: "Not measuring Time to First Value",
          body: "If you don't measure Time to First Value (TTFV), you don't know if your onboarding works. This KPI — the time it takes the customer to complete the first significant milestone — is the most powerful predictor of 12-month retention. With manual onboarding, average TTFV in B2B services is 14–21 days. With AI automation, it can be reduced to 3–5 days.",
        },
      ],
    },
    results: {
      heading: "Real results in the first 90 days",
      body: "B2B service companies implementing AI-automated onboarding consistently report:",
      items: [
        "TTFV (Time to First Value) reduction from 14–21 days to 3–5 days",
        "NPS increase in the first 30 days: from 32 to 58 points average",
        "Churn reduction in the first 90 days: from 18% to 8–10%",
        "60–70% of Customer Success team time freed for high-value work",
        "Upsell/cross-sell rate increase in month 2: from 12% to 28% in accounts with structured onboarding",
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "What tools do I need to automate onboarding with AI?",
          a: "The minimum viable stack includes: (1) CRM with automation capabilities (HubSpot, GoHighLevel, or similar), (2) flow automation tool (N8N or Make), (3) AI API for personalization (Claude or GPT-4). For small teams, GoHighLevel covers 80% of the necessary features without additional stack. Total cost ranges from $150 to $400/month depending on customer volume.",
        },
        {
          q: "How long does it take to implement the system?",
          a: "A basic automated onboarding system (welcome + milestone tracking + escalation) can be operational in 2–3 weeks. The complete system with AI personalization and risk detection requires 4–6 weeks. The actual time depends mainly on whether the manual process is already documented — if not, add 1–2 weeks for process design.",
        },
        {
          q: "Does it work for services with complex or long onboarding (6+ months)?",
          a: "Yes, especially in those cases. Long onboardings are where the most time is lost in manual follow-up and where early risk detection has the most value. For 6+ month projects, the AI system becomes the 'connecting thread' that ensures milestones are met and the customer feels constant progress, even in stages where the main work is happening in the backend.",
        },
        {
          q: "How do I personalize messages so they don't sound like templates?",
          a: "The key is the level of personalization in the data available to AI. If the system knows the customer's industry, their specific use case, their project name, and the milestones they've completed, it can generate messages that feel genuinely personal. The technical trick is including those dynamic fields in the AI prompt along with tone instructions: 'write as if you were the Customer Success Manager who knows this customer, not an automated system'.",
        },
        {
          q: "What metrics should I track to know if the system works?",
          a: "The 4 key metrics are: (1) TTFV — Time to First Value: days until the first milestone completed. (2) Milestone completion rate: % of customers completing each onboarding step. (3) Churn in the first 90 days: compared to the pre-automation baseline. (4) NPS at day 30: satisfaction at the most critical moment. These 4 metrics together give a complete picture of whether onboarding is working or where it breaks.",
        },
      ],
    },
    cta: {
      heading: "Want to automate your customer onboarding?",
      body: "We design the complete system: process mapping, automation flows, AI integration, and tracking metrics. Implementation in 3–6 weeks.",
      primary: "Schedule free diagnostic",
      secondary: "See how to automate lead follow-up →",
      secondaryHref: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      name: "Jorge Herrera Cruz",
      role: "CEO & Co-founder, VeryMuch.ai",
      bio: "CEO of VeryMuch.ai, an agency specializing in AI agents for Spanish-speaking B2B companies. Over 10 years leading digital transformation in companies in Mexico, Spain, and Colombia. Expert in automating commercial processes with artificial intelligence.",
      href: "/autor/jorge-herrera-cruz",
    },
    published: "June 23, 2026",
    dateISO: "2026-06-23",
    readTime: "10 min",
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
      ? `${BASE_URL}/en/blog/automatizacion-onboarding-clientes-ia`
      : `${BASE_URL}/blog/automatizacion-onboarding-clientes-ia`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/automatizacion-onboarding-clientes-ia`,
        en: `${BASE_URL}/en/blog/automatizacion-onboarding-clientes-ia`,
        "x-default": `${BASE_URL}/blog/automatizacion-onboarding-clientes-ia`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "Verymuch.ai",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: canonical,
      title: c.meta.title,
      description: c.meta.description,
      publishedTime: "2026-06-23",
      authors: ["Jorge Herrera Cruz"],
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
          ? `${BASE_URL}/en/blog/automatizacion-onboarding-clientes-ia`
          : `${BASE_URL}/blog/automatizacion-onboarding-clientes-ia`,
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
            ? `${BASE_URL}/en/blog/automatizacion-onboarding-clientes-ia`
            : `${BASE_URL}/blog/automatizacion-onboarding-clientes-ia`,
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

          {/* Why manual fails */}
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

          {/* 4 Phases */}
          <section>
            <h2
              className="font-bold mb-3"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.phases.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.phases.intro}
            </p>
            <div className="space-y-5">
              {c.phases.items.map((phase) => (
                <div
                  key={phase.day}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: "rgba(172,237,235,0.1)", color: "var(--accent-text)" }}
                    >
                      {phase.day}
                    </span>
                    <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                    {phase.body}
                  </p>
                  <p className="text-xs font-semibold" style={{ color: "var(--accent-text)" }}>
                    ✓ {phase.auto}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3 Steps implementation */}
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
