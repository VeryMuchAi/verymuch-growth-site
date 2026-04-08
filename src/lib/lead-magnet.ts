// ─── Types ────────────────────────────────────────────────────────────────────

// ── Extra section types (optional, only for lead magnets that need them) ──────

export interface SectionOpportunity {
  type: "opportunity";
  title: string;
  subtitle?: string;
  /** Each row: exactly 3 cells */
  tableRows: [string, string, string][];
}

export interface SectionChangelog {
  type: "changelog";
  title: string;
  items: { icon: string; title: string; description: string }[];
}

export interface SectionAgents {
  type: "agents";
  title: string;
  agents: { icon: string; name: string; role: string; description: string }[];
}

export type LeadMagnetSection =
  | SectionOpportunity
  | SectionChangelog
  | SectionAgents;

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder?: string;
  required?: boolean;
}

export interface IncludesItem {
  icon: string;       // emoji or short text icon
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  role: string;
  url?: string;
  /** Optional logo image URL (e.g. Simple Icons CDN). Shown in the tech stack card. */
  logoUrl?: string;
}

/** Brand entry for the marquee carousel — mirrors BrandMarquee.Brand */
export interface BrandEntry {
  name: string;
  /** Fallback dot color (hex) */
  dot: string;
  /** Simple Icons slug — renders real logo via cdn.simpleicons.org */
  iconSlug?: string;
}

export interface LeadMagnetSEO {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  /** English locale overrides — used when locale === "en" */
  enTitle?: string;
  enDescription?: string;
  enOgTitle?: string;
  enOgDescription?: string;
}

export interface LeadMagnetContent {
  badge?: string;
  headline: string;
  /** Words to highlight with the brand gradient inside the headline */
  highlightWords?: string;
  subheadline: string;
  bullets: string[];
  includes: IncludesItem[];
  techStack: TechStackItem[];
  form: {
    fields: FormFieldConfig[];
    ctaLabel: string;
    microcopy?: string;
  };
  success: {
    title: string;
    description?: string;
    ctaLabel: string;
  };
  /** Optional custom CTA headline (split into plain + highlighted part) */
  ctaHeadline?: string;
  ctaHighlight?: string;
  /** Extra sections rendered between "Qué incluye" and "Stack técnico" */
  extraSections?: LeadMagnetSection[];
}

export interface LeadMagnetConfig {
  /** Used as the `lead_magnet` field in the API payload */
  slug: string;
  source: string;
  campaign: string;
  seo: LeadMagnetSEO;
  content: LeadMagnetContent;
  /** Public Notion/guide URL — overrides the NOTION_URL_* env variable when set */
  notionUrl?: string;
  /**
   * Brands to show in the BrandMarquee carousel on this lead magnet's page.
   * When omitted, the marquee uses its default global brand set.
   */
  brands?: BrandEntry[];
  /** Hide the "Descargado por +300 growth builders" trust bar in the hero */
  hideSocialProof?: boolean;
}

// ─── Registry — built at the bottom of this file once all configs are defined ──

// Forward declaration — value is assigned after all configs are defined below.
// Do NOT use this directly during module init; use getLeadMagnetConfig() instead.
export let ALL_LEAD_MAGNETS: Record<string, LeadMagnetConfig> = {};

export function getLeadMagnetConfig(slug: string): LeadMagnetConfig | undefined {
  return ALL_LEAD_MAGNETS[slug];
}

// ─── Signals LinkedIn Config ──────────────────────────────────────────────────

export const signalsLinkedinConfig: LeadMagnetConfig = {
  slug: "signals-linkedin",
  source: "signals-linkedin",
  campaign: "signals-linkedin",
  brands: [
    { name: "Trigify",  dot: "#F5A040" },
    { name: "Claude",   dot: "#E8832A", iconSlug: "anthropic" },
    { name: "n8n",      dot: "#EA4B71", iconSlug: "n8n" },
    { name: "LinkedIn", dot: "#0A66C2", iconSlug: "linkedin" },
  ],

  seo: {
    title: "Agente de Ventas IA — Señales LinkedIn | VeryMuch.ai",
    description:
      "Blueprint completo para construir un sistema de ventas basado en señales de LinkedIn con Trigify, Claude Code y n8n. Gratis.",
    ogTitle:
      "Construye un Agente de Ventas IA que detecta intención real en LinkedIn",
    ogDescription:
      "Blueprint completo: convierte señales de engagement en outreach personalizado automático. Stack real · costes detallados · workflow n8n nodo por nodo.",
  },

  content: {
    badge: "Blueprint Gratuito",
    headline: "Construye un Agente de Ventas IA que detecta intención real en LinkedIn",
    highlightWords: "intención real en LinkedIn",
    subheadline:
      "Blueprint completo para convertir señales de engagement en outreach personalizado automático usando Trigify, Claude Code y n8n.",
    bullets: [
      "Monitorización 24/7 de señales de LinkedIn",
      "Scoring automático contra tu ICP",
      "Generación de outreach personalizado basado en la señal exacta",
      "Workflow completo en n8n (nodo por nodo)",
      "Stack real + costes detallados",
    ],
    includes: [
      {
        icon: "git-branch",
        title: "Flujo completo en n8n",
        description: "12+ nodos documentados paso a paso, listos para importar.",
      },
      {
        icon: "target",
        title: "Sistema de scoring ICP",
        description: "Ficha de puntuación para calificar señales contra tu cliente ideal.",
      },
      {
        icon: "mail",
        title: "Plantillas de outreach",
        description: "5 mensajes personalizados por tipo de señal, generados con Claude.",
      },
      {
        icon: "settings",
        title: "Stack técnico detallado",
        description: "Costos reales, límites de API y configuración de cada herramienta.",
      },
      {
        icon: "zap",
        title: "Guía de implementación",
        description: "De cero a sistema funcionando en un fin de semana.",
      },
    ],
    techStack: [
      {
        name: "Trigify",
        role: "Detección y tracking de señales de LinkedIn en tiempo real.",
        url: "https://trigify.io",
      },
      {
        name: "Claude Code",
        role: "Generación de outreach hiper-personalizado con IA de Anthropic.",
        url: "https://anthropic.com",
      },
      {
        name: "n8n",
        role: "Orquestación y automatización de todo el workflow, self-hosteable.",
        url: "https://n8n.io",
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Recibir el Blueprint",
      microcopy: "Gratis. Sin spam. Entrega inmediata.",
    },
    success: {
      title: "Tu Blueprint está listo",
      description:
        "Accede ahora a la guía completa. Encontrarás el flujo n8n, el sistema de scoring y todas las plantillas.",
      ctaLabel: "Abrir la guía →",
    },
  },
};

// ─── Equipo de Ventas IA en 30 Minutos Config ─────────────────────────────────

export const equipoVentasIa30minConfig: LeadMagnetConfig = {
  slug: "equipo-ventas-ia-30min",
  source: "equipo-ventas-ia-30min",
  campaign: "equipo-ventas-ia-30min",
  brands: [
    { name: "Claude Opus", dot: "#E8832A", iconSlug: "anthropic" },
    { name: "Claude.ai",   dot: "#4AD4AE", iconSlug: "anthropic" },
    { name: "n8n",         dot: "#EA4B71", iconSlug: "n8n" },
  ],

  seo: {
    title: "Equipo de Ventas IA en 30 Min — Opus 4.6 | VeryMuch.ai",
    description:
      "Guía completa para montar 4 agentes IA en paralelo con Claude Opus 4.6: investigar, analizar, escribir y coordinar. Gratis.",
    ogTitle:
      "Monta tu Equipo de Ventas IA en 30 Minutos con Claude Opus 4.6",
    ogDescription:
      "Agent Teams con Opus 4.6: 4 agentes IA en paralelo, 1M tokens de contexto, sin código complejo. Descarga la guía gratuita.",
  },

  content: {
    badge: "NUEVO · OPUS 4.6 · LANZADO FEB 2026",
    headline: "Monta tu Equipo de Ventas IA en 30 Minutos",
    highlightWords: "Equipo de Ventas IA en 30 Minutos",
    subheadline:
      "Usando Opus 4.6 Agent Teams para ejecutar 4 agentes IA en paralelo — investigar, analizar, escribir y coordinar.",
    bullets: [
      "4 agentes IA trabajando en paralelo con Claude Opus 4.6",
      "Contexto de 1M de tokens: toda tu empresa en una sesión",
      "Sistema montado en 30 minutos sin código complejo",
      "Roles definidos: Investigador, Analista, Escritor, Coordinador",
      "Configuración completa con costes reales incluida",
    ],
    includes: [
      {
        icon: "list",
        title: "Configuración de 4 agentes",
        description: "Prompts system listos para copiar, ajustar y lanzar de inmediato.",
      },
      {
        icon: "zap",
        title: "Workflow de coordinación",
        description: "Cómo los 4 agentes colaboran entre sí sin bloquearse.",
      },
      {
        icon: "trending-up",
        title: "Estimación de costes reales",
        description: "Tokens, llamadas API y límites de Opus 4.6 documentados.",
      },
      {
        icon: "target",
        title: "Casos de uso concretos",
        description: "Prospecting, nurturing y cierre con ejemplos de output real.",
      },
      {
        icon: "activity",
        title: "Guía paso a paso",
        description: "De cero a equipo funcionando en menos de 30 minutos.",
      },
    ],
    techStack: [
      {
        name: "Claude Opus 4.6",
        role: "Motor de los 4 agentes. Agent Teams nativos con contexto de 1M tokens.",
        url: "https://anthropic.com",
      },
      {
        name: "Claude.ai",
        role: "Interfaz para lanzar y coordinar los agentes sin infraestructura.",
        url: "https://claude.ai",
      },
      {
        name: "n8n (opcional)",
        role: "Orquestación externa si quieres automatizar el flujo completo.",
        url: "https://n8n.io",
      },
    ],
    extraSections: [
      {
        type: "opportunity",
        title: "La oportunidad: Opus 4.6 ha cambiado las reglas del juego",
        subtitle:
          "Por primera vez, puedes tener 4 agentes IA especializados trabajando juntos en tu proceso de ventas — sin código, sin infra, en 30 minutos.",
        tableRows: [
          ["Modelo IA #1 del mundo", "Contexto de 1M de tokens", "4 agentes en paralelo"],
          ["Mejor puntuación global", "+750.000 palabras por sesión", "Trabajando juntos"],
        ],
      },
      {
        type: "changelog",
        title: "Qué ha cambiado con Opus 4.6",
        items: [
          {
            icon: "users",
            title: "Agent Teams nativos",
            description:
              "Lanza múltiples agentes Claude en paralelo desde una sola sesión. Cada uno con su rol, contexto y objetivo.",
          },
          {
            icon: "cpu",
            title: "1M de tokens de contexto",
            description:
              "Carga toda tu base de clientes, CRM, emails y transcripciones en una sola sesión sin perder contexto.",
          },
          {
            icon: "bot",
            title: "Pensamiento adaptativo",
            description:
              "Opus 4.6 decide cuándo razonar en profundidad y cuándo responder directo. Resultados más precisos, menos tokens desperdiciados.",
          },
          {
            icon: "settings",
            title: "Compactación de contexto",
            description:
              "Cuando el contexto crece, Opus 4.6 lo comprime automáticamente para que el equipo nunca pierda el hilo de la conversación.",
          },
        ],
      },
      {
        type: "agents",
        title: "Tu equipo de ventas IA con 4 agentes",
        agents: [
          {
            icon: "search",
            name: "Investigador",
            role: "Recopila intel",
            description:
              "Analiza el perfil del prospecto, su empresa, noticias recientes y señales de compra en LinkedIn y web.",
          },
          {
            icon: "bar-chart",
            name: "Analista",
            role: "Califica y puntúa",
            description:
              "Evalúa el fit con tu ICP, prioriza leads por potencial y genera un scorecard por cada prospecto.",
          },
          {
            icon: "edit",
            name: "Escritor",
            role: "Genera outreach",
            description:
              "Crea mensajes personalizados basados en la señal exacta del prospecto. Tono, contexto y CTA afinados.",
          },
          {
            icon: "target",
            name: "Coordinador",
            role: "Orquesta el equipo",
            description:
              "Gestiona el flujo entre los 3 agentes, consolida resultados y entrega el output final listo para enviar.",
          },
        ],
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Descargar la guía gratis",
      microcopy: "Gratis. Sin spam. Entrega inmediata.",
    },
    success: {
      title: "Tu guía está lista",
      description:
        "Accede ahora a la configuración completa de los 4 agentes, los prompts y la estimación de costes.",
      ctaLabel: "Abrir la guía →",
    },
    ctaHeadline: "Monta tu equipo de ventas IA",
    ctaHighlight: "hoy mismo",
  },
};

// ─── Agente IA de Investigación Comercial Config ──────────────────────────────

export const agenteInvestigacionComercialConfig: LeadMagnetConfig = {
  slug: "agente-investigacion-comercial",
  source: "agente-investigacion-comercial",
  campaign: "agente-investigacion-comercial",
  brands: [
    { name: "Claude",   dot: "#E8832A", iconSlug: "anthropic" },
    { name: "n8n",      dot: "#EA4B71", iconSlug: "n8n" },
    { name: "Supabase", dot: "#3ECF8E", iconSlug: "supabase" },
  ],

  seo: {
    title: "Agente IA de Investigación Comercial — Guía Completa | VeryMuch.ai",
    description:
      "Guía paso a paso para construir un agente IA que investiga empresas en tiempo real y genera briefings comerciales completos con DAFO, MEDDPICC y outreach personalizado. Gratis.",
    ogTitle:
      "Construye un Agente IA que investiga cualquier empresa y genera briefings comerciales en minutos",
    ogDescription:
      "Guía completa: de un nombre de empresa a un briefing comercial con análisis DAFO, scoring MEDDPICC, puntos de conversación y próximos pasos. Stack real + implementación paso a paso.",
  },

  content: {
    badge: "Guía Gratuita",
    headline:
      "Construye un Agente IA de Investigación Comercial que genera briefings en minutos",
    highlightWords: "briefings en minutos",
    subheadline:
      "Guía completa para montar un sistema que investiga empresas en tiempo real usando IA y genera informes comerciales listos para vender.",
    bullets: [
      "Investigación automática de empresas con búsqueda web en tiempo real",
      "Análisis DAFO y scoring MEDDPICC generados por IA",
      "Puntos de conversación y manejo de objeciones personalizados",
      "Arquitectura completa: frontend + Supabase + n8n + Claude",
      "Listo para copiar, pegar y adaptar a tu negocio",
    ],
    includes: [
      {
        icon: "search",
        title: "Agente de investigación IA",
        description:
          "Investiga cualquier empresa usando búsqueda web en tiempo real y genera un perfil completo.",
      },
      {
        icon: "bar-chart",
        title: "Briefing comercial completo",
        description:
          "Análisis DAFO, marco MEDDPICC, señales de compra y puntos de dolor identificados automáticamente.",
      },
      {
        icon: "message",
        title: "Puntos de conversación",
        description:
          "Talking points personalizados, manejo de objeciones y próximos pasos listos para tu primera llamada.",
      },
      {
        icon: "settings",
        title: "Arquitectura paso a paso",
        description:
          "Frontend → Supabase → n8n → Claude. Cada componente explicado con configuración exacta.",
      },
      {
        icon: "zap",
        title: "Guía de implementación",
        description:
          "De cero a sistema funcionando en ~1 hora. Nivel principiante, usa capa gratuita de todas las herramientas.",
      },
    ],
    techStack: [
      {
        name: "Claude",
        role: "Motor de IA para investigación y generación de briefings comerciales.",
        url: "https://anthropic.com",
      },
      {
        name: "n8n",
        role: "Orquestación del workflow: recibe webhook, ejecuta agente, actualiza resultados.",
        url: "https://n8n.io",
      },
      {
        name: "Supabase",
        role: "Base de datos intermedia: almacena solicitudes y resultados del agente.",
        url: "https://supabase.com",
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Recibir la Guía",
      microcopy: "Gratis. Sin spam. Entrega inmediata.",
    },
    success: {
      title: "Tu guía está lista",
      description:
        "Accede ahora a la guía completa. Encontrarás la arquitectura, configuración de cada componente y el agente listo para implementar.",
      ctaLabel: "Abrir la guía →",
    },
  },
};

// ─── 20 Agentes IA para Estrategia Comercial B2B Config ──────────────────────

export const agentesIaB2bConfig: LeadMagnetConfig = {
  slug: "20-agentes-ia-b2b",
  source: "20-agentes-ia-b2b",
  campaign: "20-agentes-ia-b2b",
  brands: [
    { name: "Claude",    dot: "#E8832A", iconSlug: "anthropic" },
    { name: "n8n",       dot: "#EA4B71", iconSlug: "n8n" },
    { name: "Clay",      dot: "#C084FC" },
    { name: "Instantly", dot: "#6366F1" },
  ],

  seo: {
    title: "20 Agentes de IA para tu Estrategia Comercial B2B — Guía Completa | VeryMuch.ai",
    description:
      "Guía práctica con 20 agentes de IA listos para montar en tu equipo comercial B2B. Tech stack, paso a paso y resultados esperados para cada uno. Gratis.",
    ogTitle:
      "20 Agentes de IA que multiplican x10 los resultados de tu equipo comercial B2B",
    ogDescription:
      "Guía completa: 20 agentes de IA con tech stack, implementación paso a paso y resultados esperados. De principiante a intermedio, sin programar.",
  },

  content: {
    badge: "Guía Gratuita",
    headline: "20 Agentes de IA para multiplicar x10 tu Estrategia Comercial B2B",
    highlightWords: "multiplicar x10",
    subheadline:
      "Guía práctica con los 20 agentes de IA que un equipo comercial B2B puede usar hoy. Cada uno con tech stack, paso a paso y resultados esperados.",
    bullets: [
      "20 agentes de IA listos para implementar en tu pipeline comercial",
      "Tech stack detallado para cada agente (herramientas reales, no teoría)",
      "Paso a paso para montarlos sin saber programar",
      "Resultados esperados y métricas por cada agente",
      "De prospección a cierre: agentes para cada etapa del funnel",
    ],
    includes: [
      {
        icon: "target",
        title: "Agentes de prospección",
        description:
          "Investigación, scoring, señales de compra y enriquecimiento de datos automatizados.",
      },
      {
        icon: "mail",
        title: "Agentes de outreach",
        description:
          "Cold email personalizado, secuencias multi-canal y follow-up inteligente.",
      },
      {
        icon: "bar-chart",
        title: "Agentes de inteligencia",
        description:
          "CRM hygiene, briefings pre-llamada, análisis competitivo y reporting automático.",
      },
      {
        icon: "users",
        title: "Agentes de conversión",
        description:
          "Nurturing, propuestas automáticas, onboarding y gestión de pipeline.",
      },
      {
        icon: "settings",
        title: "Tech stack por agente",
        description:
          "Herramientas exactas, costes estimados y nivel de dificultad para cada implementación.",
      },
    ],
    techStack: [
      {
        name: "Claude",
        role: "Motor de IA para investigación, análisis y generación de contenido comercial.",
        url: "https://anthropic.com",
      },
      {
        name: "n8n",
        role: "Orquestación de workflows para automatizar cada agente de principio a fin.",
        url: "https://n8n.io",
      },
      {
        name: "Clay",
        role: "Enriquecimiento de datos y prospección a escala.",
        url: "https://clay.com",
      },
      {
        name: "Instantly",
        role: "Infraestructura de cold email con calentamiento automático.",
        url: "https://instantly.ai",
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Descargar la Guía",
      microcopy: "Gratis. Sin spam. Los 20 agentes en tu bandeja.",
    },
    success: {
      title: "Tu guía con 20 agentes está lista",
      description:
        "Accede ahora a la guía completa. Encontrarás cada agente con su tech stack, implementación y resultados esperados.",
      ctaLabel: "Abrir la guía →",
    },
    ctaHeadline: "Empieza a desplegar tus",
    ctaHighlight: "20 agentes comerciales",
  },
};

// ─── 2 Agentes IA que encuentran leads calientes Config ───────────────────────

export const dosAgentesLeadsCalientesConfig: LeadMagnetConfig = {
  slug: "2-agentes-leads-calientes",
  source: "2-agentes-leads-calientes",
  campaign: "2-agentes-leads-calientes",
  brands: [
    { name: "Trigify",  dot: "#F5A040" },
    { name: "Claude",   dot: "#E8832A", iconSlug: "anthropic" },
    { name: "n8n",      dot: "#EA4B71", iconSlug: "n8n" },
    { name: "LinkedIn", dot: "#0A66C2", iconSlug: "linkedin" },
  ],
  notionUrl:
    "https://www.notion.so/2-Agentes-IA-que-encuentran-leads-calientes-Gu-a-completa-de-montaje-3279fc1023f6817a8c21d8bfad3ec99f",

  seo: {
    title: "2 Agentes IA que encuentran leads calientes — Guía de montaje | VeryMuch.ai",
    description:
      "Guía completa para construir dos agentes IA que monitorizan 5 plataformas buscando señales de compra reales y escriben mensajes personalizados automáticamente. Sin llamadas en frío.",
    ogTitle:
      "2 Agentes IA que encuentran leads calientes sin llamadas en frío",
    ogDescription:
      "Un Cazador de Señales que monitoriza LinkedIn, X, Reddit, YouTube y Podcasts, y un Escritor de Contexto que redacta outreach basado en las palabras exactas del prospecto. Guía gratuita.",
  },

  content: {
    badge: "Guía Gratuita · Nivel Intermedio",
    headline: "2 Agentes IA que encuentran leads calientes sin llamadas en frío",
    highlightWords: "leads calientes sin llamadas en frío",
    subheadline:
      "Un Cazador de Señales que monitoriza 5 plataformas buscando intención de compra real, y un Escritor de Contexto que redacta outreach basado en las palabras exactas del prospecto.",
    bullets: [
      "Monitorización en tiempo real: LinkedIn, X/Twitter, Reddit, YouTube y Podcasts",
      "Detección de las 5 señales de compra clave (comentarios, preguntas, quejas, interacciones)",
      "Lista diaria de prospectos calientes con contexto exacto de qué dijeron",
      "Mensajes de outreach personalizados generados automáticamente",
      "Tiempo de montaje: ~2 horas · Sin necesidad de programar",
    ],
    includes: [
      {
        icon: "target",
        title: "Agente Cazador de Señales",
        description:
          "Monitoriza las 5 plataformas y entrega una lista diaria de prospectos calientes con el extracto exacto de lo que dijeron.",
      },
      {
        icon: "edit",
        title: "Agente Escritor de Contexto",
        description:
          "Redacta mensajes de outreach hiperpersonalizados basándose en las propias palabras del prospecto. Listos para enviar.",
      },
      {
        icon: "radio",
        title: "Configuración completa de Trigify",
        description:
          "Setup paso a paso para monitorizar LinkedIn, X, Reddit, YouTube y más de 4 millones de podcasts en tiempo real.",
      },
      {
        icon: "activity",
        title: "Framework de 5 señales de compra",
        description:
          "Las señales exactas que indican intención real: comentarios en competidores, preguntas sobre dolor, menciones de herramientas de tu categoría.",
      },
      {
        icon: "file-text",
        title: "Plantillas de outreach por señal",
        description:
          "Mensajes base para cada tipo de señal, adaptados por la IA al contexto concreto de cada prospecto.",
      },
    ],
    techStack: [
      {
        name: "Trigify",
        role: "Monitorización en tiempo real de señales en LinkedIn, X, Reddit, YouTube y 4M+ podcasts.",
        url: "https://trigify.io",
      },
      {
        name: "Claude",
        role: "Generación de mensajes de outreach hiperpersonalizados basados en el contexto exacto del prospecto.",
        url: "https://anthropic.com",
      },
      {
        name: "n8n",
        role: "Orquestación del pipeline completo: detección de señal → enriquecimiento → generación de mensaje.",
        url: "https://n8n.io",
      },
    ],
    extraSections: [
      {
        type: "opportunity",
        title: "5 plataformas monitorizadas en tiempo real",
        subtitle:
          "Trigify detecta cuándo alguien expresa intención de compra real — antes de que tu competencia lo contacte.",
        tableRows: [
          ["LinkedIn", "X / Twitter", "Reddit"],
          ["Posts, comentarios, artículos · Datos de contacto directos", "Tweets, respuestas, hilos · Localizar en LinkedIn", "Posts en subreddits relevantes · Localizar en LinkedIn"],
          ["YouTube", "Podcasts", ""],
          ["Comentarios en vídeos del sector · Localizar en LinkedIn", "4M+ podcasts · 38,5M+ episodios indexados", ""],
        ],
      },
      {
        type: "changelog",
        title: "Las 5 señales de compra que detectamos",
        items: [
          {
            icon: "users",
            title: "Comentarios en posts de competidores",
            description:
              "Interacción activa con tu competencia: señal directa de interés en la categoría. El timing es perfecto.",
          },
          {
            icon: "help-circle",
            title: "Preguntas sobre problemas que resuelves",
            description:
              "La señal más caliente: alguien buscando activamente una solución a un dolor que tú puedes resolver.",
          },
          {
            icon: "alert-triangle",
            title: "Quejas de pain points del sector",
            description:
              "Personas frustradas con soluciones actuales. Ventana de oportunidad perfecta para entrar con contexto.",
          },
          {
            icon: "star",
            title: "Interacción con thought leaders",
            description:
              "Seguimiento activo de referentes del sector: indica interés real, no casual, en la industria.",
          },
          {
            icon: "wrench",
            title: "Menciones de herramientas de tu categoría",
            description:
              "Están evaluando opciones. El timing es perfecto para un outreach contextualizado antes del cierre.",
          },
        ],
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Recibir la Guía Gratuita",
      microcopy: "Gratis. Sin spam. Acceso inmediato.",
    },
    success: {
      title: "Tu guía está lista",
      description:
        "Accede ahora a la guía completa. Encontrarás la configuración de ambos agentes, el setup de Trigify y las plantillas de outreach.",
      ctaLabel: "Abrir la guía →",
    },
    ctaHeadline: "Empieza a capturar leads calientes",
    ctaHighlight: "esta semana",
  },
};

// ─── Claude Remote Control Config ────────────────────────────────────────────

export const remoteControlConfig: LeadMagnetConfig = {
  slug: "claude-remote-control",
  source: "linkedin",
  campaign: "claude-remote-control",
  brands: [
    { name: "Claude Code", dot: "#E8832A", iconSlug: "anthropic" },
    { name: "Claude App",  dot: "#4AD4AE", iconSlug: "anthropic" },
    { name: "Node.js",     dot: "#339933", iconSlug: "nodedotjs" },
  ],
  notionUrl:
    "https://www.notion.so/Claude-Remote-Control-Construye-Agentes-IA-desde-tu-M-vil-Gu-a-Completa-de-Configuraci-n-32c9fc1023f681498d3ad64246ab5808",

  seo: {
    title: "Claude Remote Control — Construye Agentes IA desde tu Movil | VeryMuch.ai",
    description:
      "Guia paso a paso para configurar Claude Code Remote Control. Inicia sesiones en tu ordenador y continua construyendo agentes IA desde tu movil. Configuracion en 10 minutos.",
    ogTitle:
      "Construye Agentes IA desde tu Movil con Claude Remote Control",
    ogDescription:
      "Guia completa de configuracion: lanza Claude Code en tu ordenador, continua desde cualquier lugar. 10 minutos de setup, acceso remoto completo.",
  },

  content: {
    badge: "Guia Gratuita",
    headline: "Construye Agentes IA desde tu Movil con Claude Remote Control",
    highlightWords: "desde tu Movil",
    subheadline:
      "Guia completa para configurar Claude Code Remote Control en 10 minutos. Inicia una sesion en tu ordenador y continua construyendo desde cualquier lugar.",
    bullets: [
      "Configuracion paso a paso desde cero (incluso si nunca usaste el terminal)",
      "Acceso remoto completo: prompts, aprobaciones y diffs en tiempo real",
      "Casos de uso para equipos comerciales y builders",
      "Solucion de problemas y trucos avanzados",
      "Referencia rapida de comandos lista para copiar y pegar",
    ],
    includes: [
      {
        icon: "📱",
        title: "Guia de configuracion completa",
        description: "De cero a sesion remota funcionando en 10 minutos. Paso a paso con capturas.",
      },
      {
        icon: "⚡",
        title: "Referencia rapida de comandos",
        description: "Todos los comandos que necesitas en una sola pagina. Copia, pega y listo.",
      },
      {
        icon: "🛠️",
        title: "Solucion de problemas",
        description: "Los errores mas comunes y como resolverlos en segundos.",
      },
      {
        icon: "💡",
        title: "Casos de uso para equipos comerciales",
        description: "Como usar Remote Control para construir y supervisar agentes IA sobre la marcha.",
      },
      {
        icon: "✅",
        title: "Checklist de configuracion",
        description: "Lista verificable para asegurarte de que todo esta listo antes de empezar.",
      },
    ],
    techStack: [
      {
        name: "Claude Code",
        role: "CLI de Anthropic para coding con agentes IA. El motor que ejecuta todo.",
        url: "https://docs.anthropic.com/en/docs/claude-code",
      },
      {
        name: "Claude App (iOS/Android)",
        role: "Tu ventana remota a la sesion. Envia prompts y aprueba acciones.",
        url: "https://claude.ai/download",
      },
      {
        name: "Node.js",
        role: "Requisito previo para instalar Claude Code. Version 18 o superior.",
        url: "https://nodejs.org",
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
        },
      ],
      ctaLabel: "Recibir la Guia",
      microcopy: "Gratis. Sin spam. Acceso inmediato.",
    },
    success: {
      title: "Tu guia esta lista",
      description: "Accede ahora a la guia completa de configuracion de Remote Control.",
      ctaLabel: "Abrir la guia →",
    },
    ctaHeadline: "Construye agentes IA desde tu movil",
    ctaHighlight: "en 10 minutos",
  },
};

// ─── Claude Skills LinkedIn Config ────────────────────────────────────────────

export const claudeSkillsLinkedinConfig: LeadMagnetConfig = {
  slug: "claude-skills-linkedin",
  source: "linkedin",
  campaign: "claude-skills-linkedin",
  brands: [
    { name: "Claude.ai",      dot: "#E8832A", iconSlug: "anthropic" },
    { name: "Claude Projects", dot: "#4AD4AE", iconSlug: "anthropic" },
    { name: "LinkedIn",        dot: "#0A66C2", iconSlug: "linkedin" },
  ],

  seo: {
    title: "Skill de Claude para LinkedIn — Frameworks de +700K Impresiones | VeryMuch.ai",
    description:
      "Descarga la Skill personalizada de Claude con los frameworks exactos que generaron +700K impresiones y +500 comentarios por post en LinkedIn en 50 días. Gratis.",
    ogTitle:
      "La Skill de Claude que convierte cualquier tema en un post viral de LinkedIn",
    ogDescription:
      "6 hooks probados, estructura para móvil, guardarrails de tono, CTAs de conversión y 3 plantillas listas. Configúrala una vez, úsala siempre.",
    enTitle:
      "Claude Skill for LinkedIn — Frameworks Behind +700K Impressions | VeryMuch.ai",
    enDescription:
      "Download the custom Claude Skill with the exact frameworks that generated +700K impressions and +500 comments per post on LinkedIn in 50 days. Free.",
    enOgTitle:
      "The Claude Skill that turns any topic into a viral LinkedIn post",
    enOgDescription:
      "6 proven hooks, mobile-first structure, tone guardrails, conversion CTAs and 3 ready-to-use templates. Set it up once, use it forever.",
  },

  content: {
    badge: "NUEVO · CLAUDE SKILLS · LINKEDIN",
    headline:
      "La Skill de Claude que escribe posts de LinkedIn con los frameworks de +700K impresiones",
    highlightWords: "+700K impresiones",
    subheadline:
      "Configúrala una vez en Claude. Dile de qué quieres publicar. Obtén un post con tu voz, tu estructura y tus reglas — sin volver a explicar nada.",
    bullets: [
      "6 patrones de hook que frenan el scroll (probados en +700K impresiones reales)",
      "Estructura optimizada para lectura móvil: una idea por línea, flechas, frases cortas",
      "Guardarrails de tono para que tus posts nunca suenen a IA ni a relleno corporativo",
      "Fórmulas de CTA que generan comentarios de verdad, no solo likes",
      "3 plantillas listas: Sistema de Agentes, Nueva Herramienta, Tendencia/Cambio",
    ],
    includes: [
      {
        icon: "zap",
        title: "6 patrones de hook probados",
        description:
          "Número + resultado, declaración contraintuitiva, antes/después con datos, presentación personal, pregunta provocadora, historia + lección. Las 6 estructuras que detienen el scroll.",
      },
      {
        icon: "list",
        title: "Reglas de estructura para móvil",
        description:
          "Una idea por línea, saltos de línea deliberados, flechas (→) en lugar de viñetas, frases cortas y directas. El 'leer más' siempre cae en un punto de tensión.",
      },
      {
        icon: "settings",
        title: "Guardarrails de tono anti-IA",
        description:
          "Reglas explícitas para evitar lenguaje corporativo vacío, superlativos genéricos y tono de chatbot. Tu post suena a ti, no a ChatGPT.",
      },
      {
        icon: "target",
        title: "Fórmulas de CTA que convierten",
        description:
          "\"Comenta [PALABRA] y te lo envío\", \"Dale like + comenta\", \"Comparte si tu red necesita ver esto\". CTAs que convierten impresiones en leads reales.",
      },
      {
        icon: "file-text",
        title: "3 plantillas listas para usar",
        description:
          "Sistema de Agentes: resultado → agentes → CTA. Nueva Herramienta: problema → solución → CTA. Tendencia/Cambio: dato → por qué importa → CTA.",
      },
      {
        icon: "check",
        title: "Checklist final de publicación",
        description:
          "Hook, estructura, tono, formato Unicode para negritas en LinkedIn y CTA efectivo. Revisa cada post antes de publicar en menos de 60 segundos.",
      },
    ],
    techStack: [
      {
        name: "Claude.ai",
        logoUrl: "https://cdn.simpleicons.org/anthropic/E8832A",
        role: "Motor de escritura. Crea un Proyecto, sube la Skill y Claude escribe posts con tu voz y estructura sin que tengas que volver a explicar nada.",
        url: "https://claude.ai",
      },
      {
        name: "Claude Projects",
        logoUrl: "https://cdn.simpleicons.org/anthropic/4AD4AE",
        role: "El contenedor donde vive tu Skill. Sube el archivo .md a Project Knowledge y cada conversación nueva carga tus instrucciones automáticamente.",
        url: "https://claude.ai",
      },
      {
        name: "LinkedIn",
        logoUrl: "https://cdn.simpleicons.org/linkedin/0A66C2",
        role: "El canal donde publicas. La Skill escribe con la estructura exacta de LinkedIn: saltos de línea, flechas, punto de tensión y CTA que genera comentarios.",
        url: "https://linkedin.com",
      },
    ],
    extraSections: [
      {
        type: "changelog",
        title: "Los 6 patrones de hook que frenan el scroll",
        items: [
          {
            icon: "trending-up",
            title: "Número + resultado concreto",
            description:
              "\"700K impresiones en 50 días\". Los datos concretos detienen el scroll antes de que el cerebro procese el tema. El número ancla la credibilidad.",
          },
          {
            icon: "alert-triangle",
            title: "Declaración contraintuitiva",
            description:
              "\"Dejé de hacer outbound en frío\". Contradice lo que el lector espera → necesita saber por qué. Genera fricción cognitiva que obliga a seguir leyendo.",
          },
          {
            icon: "bar-chart",
            title: "Antes/después con datos",
            description:
              "\"De 200 impresiones a 300K en 6 semanas\". La transformación concreta genera credibilidad y curiosidad simultáneamente. El lector quiere saber el mecanismo.",
          },
          {
            icon: "users",
            title: "Presentación personal",
            description:
              "\"Os presento a mi nueva contratación\". El formato de presentación dispara el engagement por expectativa de contenido original. Patrón narrativo clásico.",
          },
          {
            icon: "help-circle",
            title: "Pregunta provocadora",
            description:
              "\"¿Sabíais que el 99% de los SDRs desaparecerán en 3 años?\". La pregunta retórica obliga al cerebro a buscar la respuesta. No se puede leer solo la primera línea.",
          },
          {
            icon: "star",
            title: "Historia + lección",
            description:
              "\"Hace 6 meses mis posts eran invisibles. Hoy tengo 300K impresiones.\". El formato narrativo genera empatía: la audiencia se ve reflejada en el punto de partida.",
          },
        ],
      },
      {
        type: "agents",
        title: "3 plantillas de post incluidas en la Skill",
        agents: [
          {
            icon: "bot",
            name: "Sistema de Agentes",
            role: "Post de caso de uso técnico",
            description:
              "Hook con resultado concreto → cómo funciona cada agente del sistema → resultado final medible → CTA con lead magnet o recurso descargable.",
          },
          {
            icon: "zap",
            name: "Nueva Herramienta",
            role: "Post de descubrimiento",
            description:
              "Problema específico que resuelve → qué hace la herramienta en términos concretos → cómo configurarla en X pasos → CTA con demo o recurso.",
          },
          {
            icon: "trending-up",
            name: "Tendencia / Cambio",
            role: "Post de perspectiva de mercado",
            description:
              "El cambio que está pasando → por qué importa para tu audiencia → datos concretos que lo respaldan → qué significa para ellos → CTA de conversación.",
          },
        ],
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Descargar la Skill Gratis",
      microcopy: "Gratis. Sin spam. Descarga inmediata del archivo .md.",
    },
    success: {
      title: "Tu Skill de LinkedIn está lista",
      description:
        "Descarga el archivo .md, ve a claude.ai, crea un Proyecto, súbelo a Project Knowledge y empieza a escribir posts con los frameworks de +700K impresiones.",
      ctaLabel: "Descargar la Skill →",
    },
    ctaHeadline: "Empieza a publicar posts con los frameworks que",
    ctaHighlight: "generaron +700K impresiones",
  },
};

// ─── 6 Agentes IA Config ──────────────────────────────────────────────────────

export const sixAgentsConfig: LeadMagnetConfig = {
  slug: "6-agentes-ia",
  source: "6-agentes-ia",
  campaign: "6-agentes-ia",
  brands: [
    { name: "Claude",   dot: "#E8832A", iconSlug: "anthropic" },
    { name: "n8n",      dot: "#EA4B71", iconSlug: "n8n" },
    { name: "Make",     dot: "#6D00CC", iconSlug: "make" },
    { name: "Notion",   dot: "#000000", iconSlug: "notion" },
  ],

  seo: {
    title: "Los 6 Agentes IA que gestionan tu negocio | VeryMuch.ai",
    description:
      "El sistema exacto para sustituir +100.000€ en contrataciones con 6 agentes IA por menos de 800€/mes. Workflows, prompts y costes incluidos. Gratis.",
    ogTitle:
      "Los 6 Agentes IA que gestionan tu negocio completo por menos de 800€/mes",
    ogDescription:
      "Sustituye +100.000€ en contrataciones con 6 agentes IA. Workflows listos para implementar, prompts detallados y desglose de costes reales incluidos.",
    enTitle: "The 6 AI Agents That Run Your Business | VeryMuch.ai",
    enDescription:
      "The exact system to replace +€100K in hiring with 6 AI agents for under €800/month. Workflows, prompts and costs included. Free.",
    enOgTitle: "The 6 AI Agents That Run Your Entire Business for Under €800/month",
    enOgDescription:
      "Replace +€100K in hiring with 6 AI agents. Ready-to-implement workflows, detailed prompts and real cost breakdown included.",
  },

  content: {
    badge: "Guía Gratuita · Sistema de 6 Agentes",
    headline: "Los 6 Agentes IA que gestionan tu negocio completo",
    highlightWords: "6 Agentes IA",
    subheadline:
      "El sistema exacto para sustituir más de 100.000€ en contrataciones con 6 agentes IA por menos de 800€/mes. Workflows, prompts y costes reales incluidos.",
    bullets: [
      "Los 6 agentes y su función exacta dentro del negocio",
      "Workflows listos para importar en n8n y Make",
      "Prompts detallados para cada agente, optimizados para Claude",
      "Desglose de costes reales: menos de 800€/mes para el sistema completo",
      "Casos de uso en ventas, marketing, operaciones y atención al cliente",
    ],
    includes: [
      {
        icon: "bot",
        title: "Agente de Prospección",
        description:
          "Identifica y cualifica leads automáticamente. Investiga empresas, detecta señales de compra y prioriza el pipeline sin intervención manual.",
      },
      {
        icon: "mail",
        title: "Agente de Outreach",
        description:
          "Redacta y envía secuencias de mensajes hiperpersonalizados basados en el contexto real de cada prospecto. Responde preguntas frecuentes de forma autónoma.",
      },
      {
        icon: "trending-up",
        title: "Agente de Marketing de Contenidos",
        description:
          "Genera posts, artículos y newsletters adaptados a tu voz. Repurposea un contenido en múltiples formatos y plataformas de forma automática.",
      },
      {
        icon: "settings",
        title: "Agente de Operaciones",
        description:
          "Gestiona tareas repetitivas: informes, seguimiento de proyectos, actualizaciones de CRM y coordinación interna sin fricción.",
      },
      {
        icon: "message",
        title: "Agente de Atención al Cliente",
        description:
          "Resuelve consultas frecuentes 24/7, escala casos complejos al equipo humano y mantiene un registro completo de cada interacción.",
      },
      {
        icon: "bar-chart",
        title: "Agente de Análisis e Informes",
        description:
          "Monitoriza métricas clave, detecta anomalías y genera informes semanales accionables con recomendaciones concretas.",
      },
    ],
    techStack: [
      {
        name: "Claude",
        role: "Motor de razonamiento de cada agente. Genera texto, analiza datos y toma decisiones complejas.",
        url: "https://anthropic.com",
      },
      {
        name: "n8n",
        role: "Orquestación de workflows. Conecta los agentes entre sí y con el resto de tu stack.",
        url: "https://n8n.io",
      },
      {
        name: "Make",
        role: "Automatizaciones visuales para conectar apps sin código. Complementa n8n en flujos más simples.",
        url: "https://make.com",
      },
      {
        name: "Notion",
        role: "Base de conocimiento de los agentes. Almacena contexto, plantillas y registros de cada flujo.",
        url: "https://notion.so",
      },
    ],
    extraSections: [
      {
        type: "agents",
        title: "Los 6 agentes y su rol en el sistema",
        agents: [
          {
            icon: "target",
            name: "Agente de Prospección",
            role: "Pipeline de ventas",
            description:
              "Investiga empresas, detecta señales de compra en LinkedIn y fuentes web, y entrega una lista diaria de prospectos cualificados con contexto completo.",
          },
          {
            icon: "mail",
            name: "Agente de Outreach",
            role: "Comunicación comercial",
            description:
              "Redacta mensajes personalizados basados en la señal exacta de cada prospecto, gestiona follow-ups y responde preguntas frecuentes de forma autónoma.",
          },
          {
            icon: "edit",
            name: "Agente de Contenidos",
            role: "Marketing y autoridad",
            description:
              "Convierte ideas y datos en posts de LinkedIn, artículos de blog y newsletters con tu voz. Un input, múltiples formatos en minutos.",
          },
          {
            icon: "settings",
            name: "Agente de Operaciones",
            role: "Eficiencia interna",
            description:
              "Automatiza informes, actualiza el CRM, gestiona seguimientos de proyectos y coordina tareas entre herramientas sin intervención manual.",
          },
          {
            icon: "message",
            name: "Agente de Soporte",
            role: "Atención al cliente 24/7",
            description:
              "Resuelve el 80% de las consultas frecuentes al instante, escala los casos complejos con contexto completo y mantiene satisfacción alta sin coste adicional.",
          },
          {
            icon: "activity",
            name: "Agente de Análisis",
            role: "Inteligencia del negocio",
            description:
              "Monitoriza KPIs, detecta caídas o anomalías en tiempo real y envía informes semanales con recomendaciones concretas y datos accionables.",
          },
        ],
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Descargar el sistema gratis",
      microcopy: "Gratis. Sin spam. Acceso inmediato.",
    },
    success: {
      title: "Tu guía está lista",
      description:
        "Accede ahora al sistema completo: los 6 agentes, sus workflows, prompts y desglose de costes reales.",
      ctaLabel: "Abrir la guía →",
    },
    ctaHeadline: "Monta tu equipo de agentes IA",
    ctaHighlight: "esta semana",
  },
};

// ─── Claude Code Remote Control Config ───────────────────────────────────────

export const claudeCodeConfig: LeadMagnetConfig = {
  slug: "claude-code-remote-control",
  source: "linkedin",
  campaign: "claude-code-remote-control",
  hideSocialProof: true,
  brands: [
    { name: "Claude Code", dot: "#D4A27F", iconSlug: "anthropic" },
    { name: "VS Code",     dot: "#007ACC", iconSlug: "visualstudiocode" },
    { name: "n8n",         dot: "#EA4B71", iconSlug: "n8n" },
  ],

  seo: {
    title: "Claude Code Remote Control — Guía Completa | VeryMuch.ai",
    description:
      "Guía paso a paso para instalar Claude Code, configurar tu primer agente de IA y construir automatizaciones reales. Framework incluido. Gratis.",
    ogTitle: "Claude Code Remote Control: De cero a tu primer agente de IA",
    ogDescription:
      "Instalación, configuración, framework para decidir qué construir, y 9 ideas de agentes listos para montar. Todo gratis.",
  },

  content: {
    badge: "Guía Gratuita",
    headline:
      "Deja de pagar por herramientas que puedes construir tú mismo",
    highlightWords: "construir tú mismo",
    subheadline:
      "Guía completa para instalar Claude Code, configurar tu workspace y construir tu primer agente de IA. Framework + ideas + comandos esenciales.",
    bullets: [
      "Instalación paso a paso en Mac y Windows",
      "Framework para identificar qué automatizar primero",
      "Plantilla CLAUDE.md lista para usar",
      "9 ideas de agentes que puedes montar hoy",
      "Comandos esenciales y trucos avanzados",
      "Stack de herramientas de terceros recomendadas",
    ],
    includes: [
      {
        icon: "🛠️",
        title: "Instalación completa",
        description:
          "Mac, Windows, VS Code, extensión oficial. De cero a Claude Code funcionando.",
      },
      {
        icon: "🧠",
        title: "Framework de decisión",
        description:
          "5 pasos para identificar tu cuello de botella y construir el agente exacto que necesitas.",
      },
      {
        icon: "📋",
        title: "Plantilla CLAUDE.md",
        description:
          "Archivo de configuración listo para copiar y personalizar. Tu agente arranca sabiendo tu contexto.",
      },
      {
        icon: "💡",
        title: "9 ideas de agentes",
        description:
          "Investigador de prospectos, personalizador de emails, lead scoring, monitor de competencia y más.",
      },
      {
        icon: "⚡",
        title: "Comandos y trucos",
        description:
          "Los atajos que usan los power users: /clear, Shift+Tab, think hard, subagentes.",
      },
      {
        icon: "🔌",
        title: "Stack de herramientas",
        description:
          "Apify, n8n, Make, Instantly, OpenClaw — cuándo usar cada una y costes reales.",
      },
    ],
    techStack: [
      {
        name: "Claude Code",
        role: "Agente de código IA de Anthropic. Tu builder principal.",
        url: "https://code.claude.com",
      },
      {
        name: "VS Code",
        role: "Editor de código gratuito con extensión oficial de Claude Code.",
        url: "https://code.visualstudio.com",
      },
      {
        name: "n8n",
        role: "Orquestación y automatización de workflows, self-hosteable.",
        url: "https://n8n.io",
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text" as const,
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email" as const,
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text" as const,
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Recibir la Guía",
      microcopy: "Gratis. Sin spam. Entrega inmediata.",
    },
    success: {
      title: "Tu guía está lista 🎉",
      description:
        "Accede ahora a Claude Code Remote Control. Encontrarás la instalación, el framework, la plantilla CLAUDE.md y todas las ideas de agentes.",
      ctaLabel: "Abrir la guía →",
    },
  },
};

// ─── Build registry — single immutable assignment, all configs present ─────────
// Adding a new lead magnet: just append it to this array. No other changes needed.

const _ALL_CONFIGS: LeadMagnetConfig[] = [
  signalsLinkedinConfig,
  equipoVentasIa30minConfig,
  agenteInvestigacionComercialConfig,
  agentesIaB2bConfig,
  dosAgentesLeadsCalientesConfig,
  remoteControlConfig,
  claudeSkillsLinkedinConfig,
  sixAgentsConfig,
  claudeCodeConfig,
];

ALL_LEAD_MAGNETS = Object.fromEntries(_ALL_CONFIGS.map((c) => [c.slug, c]));
