import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface StatCard {
  value: string;
  label: string;
}
interface UseCaseItem {
  number: string;
  title: string;
  body: string;
  impact: string;
}
interface StepItem {
  number: string;
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
  section_problem: { heading: string; body: string };
  usecases: { heading: string; intro: string; items: UseCaseItem[] };
  steps: { heading: string; items: StepItem[] };
  tools: { heading: string; body: string; items: string[] };
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
        "IA para gestión de cuentas B2B: cómo retener y hacer crecer clientes en 2026 | VeryMuch.ai",
      description:
        "Cómo usar inteligencia artificial para gestionar cuentas B2B: detectar riesgo de churn, identificar oportunidades de expansión, automatizar check-ins y aumentar el LTV de cada cliente.",
    },
    breadcrumb: {
      home: "Inicio",
      blog: "Blog",
      current: "IA para gestión de cuentas B2B",
    },
    tag: "Ventas con IA",
    hero: {
      title: "IA para gestión de cuentas B2B: cómo retener y hacer crecer clientes en 2026",
      subtitle:
        "Detecta churn antes de que ocurra, identifica oportunidades de expansión y automatiza la gestión de relaciones para aumentar el LTV de cada cuenta.",
    },
    intro:
      "En ventas B2B, cerrar un cliente es solo el principio. El verdadero valor está en retenerlo, hacerlo crecer y convertirlo en un caso de éxito que genera referencias. Pero la mayoría de los equipos de Account Management operan de forma reactiva: responden cuando hay un problema, pero no detectan el problema antes de que ocurra. La inteligencia artificial cambia esto fundamentalmente. Los sistemas de IA para gestión de cuentas analizan patrones de comportamiento, uso del servicio, comunicaciones y datos financieros para predecir qué va a pasar antes de que pase — y actuar en consecuencia. En 2026, los equipos B2B que usan IA en account management reportan hasta un 35% más de NRR (Net Revenue Retention) que los que no lo hacen.",
    stats: [
      { value: "35%", label: "Más NRR en equipos B2B que usan IA en account management" },
      { value: "4.2×", label: "Más probabilidad de detectar churn a tiempo con señales de IA vs. intuición" },
      { value: "28%", label: "Aumento promedio en tasa de expansión de cuenta con IA en seguimiento" },
      { value: "60%", label: "Reducción en tiempo dedicado a tareas administrativas por Account Manager" },
    ],
    stats_label: "Impacto de la IA en Account Management B2B — datos 2026",
    section_problem: {
      heading: "El problema del account management reactivo (y su coste real)",
      body: "El account management reactivo tiene un coste enorme que pocas empresas calculan correctamente. Cuando un cliente cancela, el equipo pregunta '¿por qué no lo vimos venir?'. La respuesta casi siempre es la misma: las señales estaban ahí — inactividad gradual, tickets sin resolver, menor asistencia a reuniones, preguntas sobre precios de la competencia — pero nadie tenía el sistema para detectarlas y conectarlas. Un buen Account Manager gestiona entre 15 y 30 cuentas simultáneamente. Es humanamente imposible monitorear en profundidad todas las cuentas al mismo tiempo. La IA no tiene ese límite: puede analizar 300 cuentas con la misma profundidad que un humano dedicado a una sola.",
    },
    usecases: {
      heading: "Los 5 casos de uso de IA en gestión de cuentas B2B",
      intro: "Estos son los casos de uso con mayor ROI, ordenados por impacto en retención y crecimiento:",
      items: [
        {
          number: "01",
          title: "Detección temprana de riesgo de churn",
          body: "La IA monitorea señales de comportamiento en tiempo real: frecuencia de login, uso de funcionalidades clave, patrones de tickets de soporte, participación en reuniones de revisión, tiempo de respuesta a comunicaciones. Cuando detecta un patrón de riesgo (combinación de señales negativas que históricamente precede a cancelaciones), alerta al Account Manager con suficiente anticipación para intervenir efectivamente.",
          impact: "Impacto: Reducción del 40–55% en churn no anticipado",
        },
        {
          number: "02",
          title: "Identificación de oportunidades de expansión",
          body: "La IA analiza el comportamiento de uso del cliente y lo compara con el patrón de las cuentas que han hecho upsell históricamente. Cuando detecta similitudes (uso intensivo de una funcionalidad que tiene upgrade disponible, crecimiento en el equipo del cliente, expansión a nuevos mercados), genera una alerta de oportunidad y sugiere el timing y el ángulo óptimo para la conversación de expansión.",
          impact: "Impacto: Aumento del 25–35% en tasa de expansión de cuenta",
        },
        {
          number: "03",
          title: "Automatización de check-ins y seguimiento",
          body: "La IA genera y envía automáticamente los check-ins periódicos (semanales, mensuales) con contenido personalizado basado en el estado real de la cuenta: logros recientes, métricas de uso, próximos hitos. El Account Manager revisa y aprueba antes del envío (o configura envío automático para cuentas de menor valor). Esto garantiza que ninguna cuenta quede sin comunicación regular, independientemente del volumen.",
          impact: "Impacto: 100% de cobertura de check-ins; 60% reducción en tiempo administrativo",
        },
        {
          number: "04",
          title: "Generación de reportes de valor personalizados",
          body: "La IA genera automáticamente reportes de valor mensuales o trimestrales que muestran al cliente el ROI tangible de su inversión: métricas de uso, tiempo ahorrado, resultados conseguidos, comparación con benchmarks del sector. Estos reportes son el argumento más poderoso para renovaciones y expansiones — y normalmente requieren horas de trabajo manual para prepararse.",
          impact: "Impacto: Aumento del 20% en tasa de renovación; reducción de 4–6h de trabajo por reporte",
        },
        {
          number: "05",
          title: "Priorización inteligente de la cartera de cuentas",
          body: "Con 20+ cuentas activas, un Account Manager siempre enfrenta la pregunta: ¿a qué cuenta dedico tiempo hoy? La IA prioriza la cartera diariamente basándose en: nivel de riesgo, potencial de expansión, eventos recientes (nuevo contacto en la cuenta, cambio en el organigrama, lanzamiento de producto del cliente) y momentum de la relación. El resultado es una lista de acciones priorizadas, no una lista de cuentas.",
          impact: "Impacto: 40% más de tiempo dedicado a cuentas de alto impacto",
        },
      ],
    },
    steps: {
      heading: "Cómo implementar IA en tu gestión de cuentas en 4 semanas",
      items: [
        {
          number: "01",
          title: "Define los indicadores de salud de cuenta (Health Score)",
          body: "El primer paso es definir qué significa que una cuenta esté 'sana' en tu contexto específico. Típicamente incluye: frecuencia de uso del producto/servicio, NPS o satisfacción declarada, nivel de engagement en comunicaciones, progreso hacia los objetivos acordados, historial de pagos. Cada indicador tiene un peso según su correlación histórica con retención. Este health score es el que la IA va a monitorear y sobre el que va a generar alertas.",
        },
        {
          number: "02",
          title: "Conecta las fuentes de datos al sistema",
          body: "La IA necesita datos para funcionar. Conecta: CRM (HubSpot, Salesforce, GoHighLevel), plataforma de producto (datos de uso y login), sistema de tickets/soporte, historial de comunicaciones (email, WhatsApp), y datos financieros (facturación, estado de pagos). La integración técnica suele tomar 1–2 semanas con N8N o Make como capa de orquestación. Una vez conectado, el sistema tiene visibilidad completa de cada cuenta sin trabajo manual.",
        },
        {
          number: "03",
          title: "Configura los flujos de alerta e intervención",
          body: "Define qué pasa cuando la IA detecta un evento: alerta de riesgo → notificación al Account Manager + sugerencia de acción + borrador de mensaje de outreach. Oportunidad de expansión → notificación al Account Manager + argumentario personalizado + sugerencia de timing. Health score bajo → escalación automática al manager si no hay respuesta del Account Manager en 48h. Estos flujos garantizan que las alertas de la IA se traduzcan en acciones concretas, no en notificaciones ignoradas.",
        },
      ],
    },
    tools: {
      heading: "Stack recomendado para account management con IA",
      body: "El stack que cubre los 5 casos de uso con un coste mensual accesible para equipos medianos:",
      items: [
        "HubSpot o GoHighLevel: CRM central donde vive el health score y las alertas de cuenta",
        "N8N (~$20/mes): orquestación de datos entre CRM, producto, soporte y comunicaciones",
        "Claude API (~$50–150/mes): motor de IA para análisis de patrones, generación de reportes y redacción de comunicaciones",
        "ChurnZero o Gainsight (enterprise): plataformas especializadas en customer success con IA integrada (~$500–2,000/mes para equipos de 5+ CSMs)",
        "Alternativa lean: HubSpot + N8N + Claude API cubre el 80% de funcionalidad a <$250/mes",
      ],
    },
    mistakes: {
      heading: "Los 3 errores más costosos en account management con IA",
      items: [
        {
          title: "Usar el health score como único indicador de riesgo",
          body: "El health score agrega múltiples señales en un número, lo que facilita la gestión pero puede ocultar información crítica. Una cuenta puede tener health score medio-alto mientras un decision maker clave está buscando alternativas activamente. La IA debe monitorear señales cualitativas además del score: cambios en el organigrama del cliente, menciones de la competencia en conversaciones, cambios en el presupuesto del área.",
        },
        {
          title: "Automatizar comunicaciones sin capa humana de revisión",
          body: "En cuentas de alto valor (>$2,000/mes), los mensajes automatizados sin revisión humana son un riesgo. Un mensaje de check-in que llegue en mal momento o con tono incorrecto puede dañar una relación que llevó meses construir. La regla: IA genera el 80% del trabajo (borrador, timing, contexto), humano valida antes del envío en cuentas estratégicas.",
        },
        {
          title: "No cerrar el ciclo de feedback",
          body: "Si el Account Manager ignora sistemáticamente las alertas de la IA (porque son ruidosas, incorrectas o irrelevantes), el sistema deja de ser útil. Es esencial registrar qué alertas resultaron en acciones exitosas y cuáles fueron falsas alarmas — y usar ese feedback para refinar los modelos. Sin este ciclo, la IA se convierte en ruido de fondo en lugar de inteligencia accionable.",
        },
      ],
    },
    results: {
      heading: "Resultados esperados en los primeros 6 meses",
      body: "Equipos de Account Management B2B con IA implementada reportan consistentemente:",
      items: [
        "Mes 1–2: Health scores activos para todas las cuentas. Primeras alertas de riesgo detectadas.",
        "Mes 3: Reducción visible en tiempo dedicado a tareas administrativas (check-ins, reportes). Más tiempo para trabajo de alto valor.",
        "Mes 4–5: Primeros datos de impacto en churn y expansión. Refinamiento de los modelos de alerta.",
        "Mes 6: NRR mediblemente mejorado. Benchmark: de 90% a 105–115% NRR con IA bien implementada.",
        "KPI principal: NRR (Net Revenue Retention) — el mejor indicador único de la salud del account management.",
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Es la IA para account management solo para empresas grandes?",
          a: "No. Aunque las plataformas enterprise como Gainsight son costosas, el stack lean (HubSpot + N8N + Claude API) permite implementar las mismas capacidades esenciales por menos de $250/mes. Para equipos con 10–50 cuentas activas, este stack es suficiente para cubrir los casos de uso de mayor ROI: detección de riesgo, identificación de expansión y automatización de check-ins.",
        },
        {
          q: "¿Cuántos datos históricos necesito para que la IA funcione bien?",
          a: "Para detección de churn, idealmente necesitas 12+ meses de datos históricos que incluyan casos de cancelación real. Sin esos datos, la IA puede usar benchmarks del sector como punto de partida. Para identificación de expansión y automatización de check-ins, el sistema puede empezar a funcionar con datos desde el día 1 del cliente. La calidad mejora progresivamente con el tiempo.",
        },
        {
          q: "¿Cómo afecta la IA al rol del Account Manager?",
          a: "La IA no reemplaza al Account Manager — cambia en qué invierte su tiempo. Con IA, el Account Manager dedica menos tiempo a tareas administrativas (preparar reportes, enviar check-ins de rutina, monitorear métricas) y más tiempo a trabajo de alto valor: conversaciones estratégicas con decision makers, gestión de situaciones de riesgo complejas y desarrollo de relaciones. El Account Manager de IA es más estratégico y productivo, no obsoleto.",
        },
        {
          q: "¿Qué es el NRR y por qué es el KPI más importante?",
          a: "NRR (Net Revenue Retention) mide el porcentaje de ingresos que retienes de la cohorte de clientes existentes, incluyendo expansiones y descontando cancelaciones y downgrades. Un NRR >100% significa que tus clientes actuales generan más ingresos este año que el anterior, incluso sin adquirir nuevos clientes. NRR 90% = estás perdiendo dinero incluso si adquieres. NRR 115% = tu base existente financia tu crecimiento. Es el indicador más poderoso de un modelo de negocio B2B sano.",
        },
        {
          q: "¿Se puede aplicar en negocios de servicios donde no hay 'uso del producto' que medir?",
          a: "Sí. En servicios B2B donde no hay una plataforma digital que medir, el health score se construye con otras señales: frecuencia y calidad de las reuniones de revisión, tiempo de respuesta a comunicaciones, feedback en encuestas de satisfacción, progreso en los hitos del proyecto, referencias generadas. La IA puede monitorear y analizar estas señales igual de efectivamente que los datos de uso de producto.",
        },
      ],
    },
    cta: {
      heading: "¿Quieres implementar IA en tu gestión de cuentas?",
      body: "Diseñamos el sistema completo: health score, flujos de alerta, automatización de check-ins y reportes de valor. Implementación en 4–6 semanas con métricas de impacto desde el mes 3.",
      primary: "Agendar diagnóstico gratuito",
      secondary: "Ver cómo automatizar el onboarding de clientes →",
      secondaryHref: "/blog/automatizacion-onboarding-clientes-ia",
    },
    author: {
      name: "Edwin Moreno",
      role: "COO & Co-fundador, VeryMuch.ai",
      bio: "Experto en automatización de procesos y agentes de IA para revenue operations. Mencionado en Forbes México. Speaker TEDx en productividad e IA. Lidera la implementación de agentes de IA en equipos comerciales B2B en México, España y Colombia.",
      href: "/autor/edwin-moreno",
    },
    published: "30 de junio, 2026",
    dateISO: "2026-06-30",
    readTime: "10 min",
  },

  en: {
    meta: {
      title:
        "AI for B2B Account Management: How to Retain and Grow Clients in 2026 | VeryMuch.ai",
      description:
        "How to use artificial intelligence to manage B2B accounts: detect churn risk, identify expansion opportunities, automate check-ins, and increase the LTV of every customer.",
    },
    breadcrumb: {
      home: "Home",
      blog: "Blog",
      current: "AI for B2B account management",
    },
    tag: "AI Sales",
    hero: {
      title: "AI for B2B account management: how to retain and grow clients in 2026",
      subtitle:
        "Detect churn before it happens, identify expansion opportunities, and automate relationship management to increase the LTV of every account.",
    },
    intro:
      "In B2B sales, closing a customer is just the beginning. The real value is in retaining them, growing them, and turning them into a success story that generates referrals. But most Account Management teams operate reactively: they respond when there's a problem, but don't detect the problem before it occurs. Artificial intelligence fundamentally changes this. AI systems for account management analyze behavioral patterns, service usage, communications, and financial data to predict what's going to happen before it happens — and act accordingly. In 2026, B2B teams that use AI in account management report up to 35% higher NRR (Net Revenue Retention) than those that don't.",
    stats: [
      { value: "35%", label: "Higher NRR in B2B teams using AI in account management" },
      { value: "4.2×", label: "More likely to detect churn in time with AI signals vs. intuition" },
      { value: "28%", label: "Average increase in account expansion rate with AI follow-up" },
      { value: "60%", label: "Reduction in time spent on admin tasks per Account Manager" },
    ],
    stats_label: "AI impact on B2B Account Management — 2026 data",
    section_problem: {
      heading: "The reactive account management problem (and its real cost)",
      body: "Reactive account management has an enormous cost that few companies calculate correctly. When a customer cancels, the team asks 'why didn't we see it coming?'. The answer is almost always the same: the signals were there — gradual inactivity, unresolved tickets, lower meeting attendance, questions about competitor pricing — but nobody had the system to detect them and connect them. A good Account Manager handles between 15 and 30 accounts simultaneously. It's humanly impossible to monitor all accounts in depth at the same time. AI doesn't have that limit: it can analyze 300 accounts with the same depth as a human dedicated to just one.",
    },
    usecases: {
      heading: "The 5 AI use cases in B2B account management",
      intro: "These are the highest-ROI use cases, ordered by impact on retention and growth:",
      items: [
        {
          number: "01",
          title: "Early churn risk detection",
          body: "AI monitors behavioral signals in real time: login frequency, use of key features, support ticket patterns, participation in review meetings, response time to communications. When it detects a risk pattern (combination of negative signals that historically precedes cancellations), it alerts the Account Manager with enough advance notice to intervene effectively.",
          impact: "Impact: 40–55% reduction in unanticipated churn",
        },
        {
          number: "02",
          title: "Expansion opportunity identification",
          body: "AI analyzes the customer's usage behavior and compares it with the pattern of accounts that have historically upsold. When it detects similarities (heavy use of a feature that has an upgrade available, growth in the customer's team, expansion to new markets), it generates an opportunity alert and suggests the optimal timing and angle for the expansion conversation.",
          impact: "Impact: 25–35% increase in account expansion rate",
        },
        {
          number: "03",
          title: "Check-in and follow-up automation",
          body: "AI automatically generates and sends periodic check-ins (weekly, monthly) with personalized content based on the actual state of the account: recent achievements, usage metrics, upcoming milestones. The Account Manager reviews and approves before sending (or configures automatic sending for lower-value accounts). This ensures no account goes without regular communication, regardless of volume.",
          impact: "Impact: 100% check-in coverage; 60% reduction in admin time",
        },
        {
          number: "04",
          title: "Personalized value report generation",
          body: "AI automatically generates monthly or quarterly value reports that show the customer the tangible ROI of their investment: usage metrics, time saved, results achieved, comparison with sector benchmarks. These reports are the most powerful argument for renewals and expansions — and normally require hours of manual work to prepare.",
          impact: "Impact: 20% increase in renewal rate; 4–6h work reduction per report",
        },
        {
          number: "05",
          title: "Intelligent portfolio prioritization",
          body: "With 20+ active accounts, an Account Manager always faces the question: which account do I spend time on today? AI prioritizes the portfolio daily based on: risk level, expansion potential, recent events (new contact in the account, org chart change, customer product launch) and relationship momentum. The result is a list of prioritized actions, not a list of accounts.",
          impact: "Impact: 40% more time dedicated to high-impact accounts",
        },
      ],
    },
    steps: {
      heading: "How to implement AI in your account management in 4 weeks",
      items: [
        {
          number: "01",
          title: "Define account health indicators (Health Score)",
          body: "The first step is defining what it means for an account to be 'healthy' in your specific context. Typically includes: product/service usage frequency, NPS or stated satisfaction, engagement level in communications, progress toward agreed objectives, payment history. Each indicator has a weight based on its historical correlation with retention. This health score is what AI will monitor and generate alerts on.",
        },
        {
          number: "02",
          title: "Connect data sources to the system",
          body: "AI needs data to work. Connect: CRM (HubSpot, Salesforce, GoHighLevel), product platform (usage and login data), tickets/support system, communication history (email, WhatsApp), and financial data (billing, payment status). Technical integration usually takes 1–2 weeks with N8N or Make as the orchestration layer. Once connected, the system has complete visibility into every account without manual work.",
        },
        {
          number: "03",
          title: "Configure alert and intervention flows",
          body: "Define what happens when AI detects an event: risk alert → notification to Account Manager + action suggestion + outreach message draft. Expansion opportunity → notification to Account Manager + personalized argument + timing suggestion. Low health score → automatic escalation to manager if no Account Manager response within 48h. These flows ensure AI alerts translate into concrete actions, not ignored notifications.",
        },
      ],
    },
    tools: {
      heading: "Recommended stack for AI account management",
      body: "The stack covering the 5 use cases at an accessible monthly cost for mid-size teams:",
      items: [
        "HubSpot or GoHighLevel: central CRM where health score and account alerts live",
        "N8N (~$20/mo): data orchestration between CRM, product, support, and communications",
        "Claude API (~$50–150/mo): AI engine for pattern analysis, report generation, and communications drafting",
        "ChurnZero or Gainsight (enterprise): specialized customer success platforms with integrated AI (~$500–2,000/mo for 5+ CSM teams)",
        "Lean alternative: HubSpot + N8N + Claude API covers 80% of functionality at <$250/mo",
      ],
    },
    mistakes: {
      heading: "The 3 most costly mistakes in AI account management",
      items: [
        {
          title: "Using health score as the only risk indicator",
          body: "The health score aggregates multiple signals into a number, which makes management easier but can hide critical information. An account can have a medium-high health score while a key decision maker is actively looking for alternatives. AI should monitor qualitative signals beyond the score: changes in the customer's org chart, competitor mentions in conversations, budget changes in the area.",
        },
        {
          title: "Automating communications without a human review layer",
          body: "In high-value accounts (>$2,000/mo), automated messages without human review are a risk. A check-in message that arrives at the wrong moment or with the wrong tone can damage a relationship that took months to build. The rule: AI generates 80% of the work (draft, timing, context), human validates before sending for strategic accounts.",
        },
        {
          title: "Not closing the feedback loop",
          body: "If the Account Manager systematically ignores AI alerts (because they're noisy, incorrect, or irrelevant), the system stops being useful. It's essential to record which alerts resulted in successful actions and which were false alarms — and use that feedback to refine the models. Without this cycle, AI becomes background noise rather than actionable intelligence.",
        },
      ],
    },
    results: {
      heading: "Expected results in the first 6 months",
      body: "B2B Account Management teams with AI implemented consistently report:",
      items: [
        "Month 1–2: Active health scores for all accounts. First risk alerts detected.",
        "Month 3: Visible reduction in time spent on admin tasks (check-ins, reports). More time for high-value work.",
        "Month 4–5: First impact data on churn and expansion. Alert model refinement.",
        "Month 6: Measurably improved NRR. Benchmark: from 90% to 105–115% NRR with well-implemented AI.",
        "Main KPI: NRR (Net Revenue Retention) — the single best indicator of healthy B2B account management.",
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Is AI for account management only for large companies?",
          a: "No. While enterprise platforms like Gainsight are expensive, the lean stack (HubSpot + N8N + Claude API) enables the same essential capabilities for under $250/month. For teams with 10–50 active accounts, this stack is sufficient to cover the highest-ROI use cases: risk detection, expansion identification, and check-in automation.",
        },
        {
          q: "How much historical data do I need for AI to work well?",
          a: "For churn detection, you ideally need 12+ months of historical data including real cancellation cases. Without that data, AI can use industry benchmarks as a starting point. For expansion identification and check-in automation, the system can start working with data from day 1 of the customer. Quality improves progressively over time.",
        },
        {
          q: "How does AI affect the Account Manager's role?",
          a: "AI doesn't replace the Account Manager — it changes where they invest their time. With AI, the Account Manager spends less time on admin tasks (preparing reports, sending routine check-ins, monitoring metrics) and more time on high-value work: strategic conversations with decision makers, managing complex risk situations, and relationship development. The AI Account Manager is more strategic and productive, not obsolete.",
        },
        {
          q: "What is NRR and why is it the most important KPI?",
          a: "NRR (Net Revenue Retention) measures the percentage of revenue you retain from existing customer cohorts, including expansions and discounting cancellations and downgrades. NRR >100% means existing customers generate more revenue this year than last, even without acquiring new customers. NRR 90% = you're losing money even if you're acquiring. NRR 115% = your existing base funds your growth. It's the most powerful indicator of a healthy B2B business model.",
        },
        {
          q: "Can it be applied in service businesses where there is no 'product usage' to measure?",
          a: "Yes. In B2B services where there's no digital platform to measure, the health score is built with other signals: frequency and quality of review meetings, response time to communications, satisfaction survey feedback, project milestone progress, referrals generated. AI can monitor and analyze these signals just as effectively as product usage data.",
        },
      ],
    },
    cta: {
      heading: "Want to implement AI in your account management?",
      body: "We design the complete system: health score, alert flows, check-in automation, and value reports. Implementation in 4–6 weeks with impact metrics from month 3.",
      primary: "Schedule free diagnostic",
      secondary: "See how to automate customer onboarding →",
      secondaryHref: "/blog/automatizacion-onboarding-clientes-ia",
    },
    author: {
      name: "Edwin Moreno",
      role: "COO & Co-founder, VeryMuch.ai",
      bio: "Expert in process automation and AI agents for revenue operations. Featured in Forbes Mexico. TEDx speaker on productivity and AI. Leads AI agent implementation in B2B commercial teams in Mexico, Spain, and Colombia.",
      href: "/autor/edwin-moreno",
    },
    published: "June 30, 2026",
    dateISO: "2026-06-30",
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
      ? `${BASE_URL}/en/blog/ia-gestion-cuentas-b2b`
      : `${BASE_URL}/blog/ia-gestion-cuentas-b2b`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/ia-gestion-cuentas-b2b`,
        en: `${BASE_URL}/en/blog/ia-gestion-cuentas-b2b`,
        "x-default": `${BASE_URL}/blog/ia-gestion-cuentas-b2b`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "Verymuch.ai",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: canonical,
      title: c.meta.title,
      description: c.meta.description,
      publishedTime: "2026-06-30",
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
          ? `${BASE_URL}/en/blog/ia-gestion-cuentas-b2b`
          : `${BASE_URL}/blog/ia-gestion-cuentas-b2b`,
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
            ? `${BASE_URL}/en/blog/ia-gestion-cuentas-b2b`
            : `${BASE_URL}/blog/ia-gestion-cuentas-b2b`,
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
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" style={{ color: "var(--text-secondary)" }}>{c.breadcrumb.home}</Link>
            <span className="opacity-40">›</span>
            <Link href="/blog" style={{ color: "var(--text-secondary)" }}>{c.breadcrumb.blog}</Link>
            <span className="opacity-40">›</span>
            <span style={{ color: "var(--accent-text)" }}>{c.breadcrumb.current}</span>
          </nav>

          <p className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent-text)" }}>
              {c.tag}
            </span>
          </p>
          <h1
            className="font-extrabold leading-tight mb-6"
            style={{ fontSize: "clamp(1.75rem,4.5vw,2.75rem)", letterSpacing: "-0.025em", color: "var(--text-primary)" }}
          >
            {c.hero.title}
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            {c.hero.subtitle}
          </p>
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
                <div key={s.value} className="rounded-2xl p-5 border text-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="font-extrabold mb-1" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--accent-text)" }}>
                    {s.value}
                  </p>
                  <p className="text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Problem */}
          <section>
            <h2 className="font-bold mb-4" style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}>
              {c.section_problem.heading}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.section_problem.body}
            </p>
          </section>

          {/* 5 Use Cases */}
          <section>
            <h2 className="font-bold mb-3" style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}>
              {c.usecases.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{c.usecases.intro}</p>
            <div className="space-y-5">
              {c.usecases.items.map((uc) => (
                <div key={uc.number} className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-start gap-4">
                    <span className="font-extrabold text-2xl shrink-0 mt-0.5" style={{ color: "var(--accent-text)", opacity: 0.5 }}>
                      {uc.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>{uc.title}</h3>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{uc.body}</p>
                      <p className="text-xs font-semibold" style={{ color: "var(--accent-text)" }}>→ {uc.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Steps */}
          <section>
            <h2 className="font-bold mb-8" style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}>
              {c.steps.heading}
            </h2>
            <div className="space-y-6">
              {c.steps.items.map((step) => (
                <div key={step.number} className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-start gap-4">
                    <span className="font-extrabold text-2xl shrink-0 mt-0.5" style={{ color: "var(--accent-text)", opacity: 0.5 }}>
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section>
            <h2 className="font-bold mb-4" style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}>
              {c.tools.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{c.tools.body}</p>
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
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}>
              {c.mistakes.heading}
            </h2>
            <div className="space-y-4">
              {c.mistakes.items.map((m, i) => (
                <div key={i} className="rounded-2xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>{m.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{m.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="font-bold mb-4" style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}>
              {c.results.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{c.results.body}</p>
            <ul className="space-y-3">
              {c.results.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm rounded-xl px-4 py-3 border" style={{ color: "var(--text-secondary)", background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--accent-text)" }} className="shrink-0 mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}>
              {c.faq.heading}
            </h2>
            <div className="space-y-4">
              {c.faq.items.map((item, i) => (
                <details key={i} className="rounded-2xl border overflow-hidden" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-sm select-none" style={{ color: "var(--text-primary)" }}>
                    {item.q}
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Author */}
          <section className="rounded-2xl p-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
              {lang === "es" ? "Sobre el autor" : "About the author"}
            </p>
            <Link href={c.author.href} className="font-bold text-base hover:opacity-80" style={{ color: "var(--text-primary)" }}>
              {c.author.name}
            </Link>
            <p className="text-xs mb-2" style={{ color: "var(--accent-text)" }}>{c.author.role}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.author.bio}</p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl p-8 border text-center" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
            <h2 className="font-bold mb-3" style={{ fontSize: "clamp(1.2rem,2.5vw,1.5rem)", color: "var(--text-primary)" }}>
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
