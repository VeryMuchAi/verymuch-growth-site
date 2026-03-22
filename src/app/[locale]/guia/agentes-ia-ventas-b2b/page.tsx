import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";
const PUBLISHED = "2026-03-22";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

// ─── Bilingual content ────────────────────────────────────────────────────────

const CONTENT = {
  es: {
    meta: {
      title: "Agentes de IA para Ventas B2B: Guía Completa 2026 | Verymuch.ai",
      description:
        "Guía práctica sobre agentes de IA para equipos de ventas B2B. Qué son, cómo funcionan, qué resultados generan y cómo implementarlos. Con datos reales y casos de uso.",
      ogTitle: "Agentes de IA para Ventas B2B: Guía Completa 2026",
      ogDescription:
        "Guía práctica sobre agentes de IA para equipos de ventas B2B. Qué son, cómo funcionan, qué resultados generan y cómo implementarlos.",
      twitterDesc: "Guía práctica sobre agentes de IA para equipos de ventas B2B.",
      ogLocale: "es_ES",
    },
    breadcrumb: {
      home: "Inicio",
      guide: "Guía",
      page: "Agentes de IA para Ventas B2B",
    },
    jsonld: {
      articleHeadline: "Agentes de IA para Ventas B2B: Guía Completa 2026",
      articleDescription:
        "Guía práctica sobre agentes de IA para equipos de ventas B2B. Qué son, cómo funcionan, qué resultados generan y cómo implementarlos.",
      breadcrumb: [
        { name: "Inicio", item: BASE_URL },
        { name: "Guía", item: `${BASE_URL}/guia` },
        { name: "Agentes de IA para Ventas B2B", item: `${BASE_URL}/guia/agentes-ia-ventas-b2b` },
      ],
    },
    hero: {
      badge: "Guía completa · 2026",
      h1Pre: "Agentes de IA para Ventas B2B: ",
      h1Gradient: "Guía Completa 2026",
      sub: "Qué son, cómo funcionan, qué resultados generan y cómo implementarlos. Con datos reales — sin teoría vacía.",
      by: "Por",
      date: "22 de marzo, 2026",
      readTime: "12 min de lectura",
    },
    toc: {
      label: "En este artículo",
      items: [
        { id: "que-es",         label: "Qué es un agente de IA para ventas" },
        { id: "por-que",        label: "Por qué los equipos B2B los necesitan en 2026" },
        { id: "5-agentes",      label: "5 agentes que todo equipo debería tener" },
        { id: "como-funcionan", label: "Cómo funcionan (sin jerga técnica)" },
        { id: "automatizacion", label: "Automatización vs agentes: cuándo usar cada uno" },
        { id: "implementar",    label: "Cómo implementar agentes en tu empresa" },
        { id: "errores",        label: "Errores comunes al implementar IA en ventas" },
        { id: "faq",            label: "Preguntas frecuentes" },
        { id: "cta",            label: "Siguiente paso" },
      ],
    },
    s1: {
      heading: "1. Qué es un agente de IA para ventas",
      p1: "Un agente de IA es un sistema de software que tiene un objetivo, acceso a herramientas y capacidad para razonar sobre cómo conseguirlo. No ejecuta un script fijo — toma decisiones.",
      p2: "La diferencia con la automatización tradicional (Zapier, Make) es fundamental:",
      tradTitle: "Automatización tradicional",
      tradItems: ["Si pasa X → haz Y", "Sin contexto ni memoria", "Se rompe ante casos no previstos", "Velocidad: rápida, repetible"],
      agentTitle: "Agente de IA",
      agentItems: ["Objetivo → planifica → ejecuta", "Entiende contexto y adapta", "Gestiona excepciones con criterio", "Velocidad + juicio"],
      highlight: "Un SDR humano decide a quién contactar, qué decir y cuándo seguir. Un agente de IA hace exactamente lo mismo — con criterio definido por ti, escala infinita y coste fijo.",
    },
    s2: {
      heading: "2. Por qué los equipos de ventas B2B necesitan agentes de IA en 2026",
      intro: "Tres problemas que tienen todos los equipos comerciales medianos, sin excepción:",
      problems: [
        "El 78% de los compradores B2B elige al proveedor que responde primero. La mayoría de equipos tarda horas.",
        "Los SDRs dedican el 70% de su tiempo a investigación manual: buscar en LinkedIn, enriquecer datos, preparar briefings.",
        "El 80% de los deals muertos se pierden por falta de seguimiento — no porque el prospecto dijera que no.",
      ],
      statsTitle: "Los datos cuando se implementan agentes:",
      stats: [
        { stat: "$39",  label: "Coste por lead con AI SDR" },
        { stat: "$262", label: "Coste por lead con SDR humano" },
        { stat: "−85%", label: "Reducción de coste por lead" },
        { stat: "86%",  label: "Empresas con ROI positivo en el primer año" },
      ],
      sources: "Fuentes: Gartner Sales Technology Report 2025, HubSpot State of Sales 2025, McKinsey B2B AI Adoption 2025.",
    },
    s3: {
      heading: "3. 5 agentes de IA que todo equipo de ventas debería tener",
      intro: "No es necesario empezar con todos. Pero estos cinco cubren los puntos de mayor pérdida de ingresos en equipos B2B de mercado medio.",
      problemLabel: "Problema: ",
      resultLabel: "Resultado: ",
      agents: [
        {
          num: "01",
          title: "Agente de Prospección por Señales",
          problem: "Tus SDRs contactan en frío. La tasa de respuesta ronda el 2%.",
          result: "Monitoriza señales en LinkedIn (cambios de cargo, nuevas contrataciones, publicaciones) y activa outreach en el momento de mayor receptividad. Tasa de respuesta: 5–8%.",
        },
        {
          num: "02",
          title: "Lead Router Inbound",
          problem: "Los leads inbound esperan horas antes de recibir respuesta. El 50% ya ha contactado a otro proveedor.",
          result: "Responde en menos de 60 segundos, califica con preguntas de contexto y agenda reunión automáticamente. Resultado: 5× más rápido, 3× más reuniones cerradas.",
        },
        {
          num: "03",
          title: "Agente Pre-Llamada",
          problem: "Antes de cada reunión, el AE pasa 20–30 minutos preparando contexto que podría tener en segundos.",
          result: "Briefing automático con resumen de la empresa, noticias recientes, perfil del contacto, posibles objeciones y preguntas sugeridas. Cero preparación manual.",
        },
        {
          num: "04",
          title: "Agente de Nurturing y Follow-up",
          problem: "El pipeline tiene deals estancados que nadie sigue porque el equipo está ocupado con los calientes.",
          result: "Secuencias de follow-up personalizadas por contexto. 40% más pipeline recuperado de deals que estaban \"muertos\".",
        },
        {
          num: "05",
          title: "Agente de Investigación Comercial",
          problem: "Los deals complejos requieren análisis profundo (DAFO, MEDDPICC, stakeholders) que nadie hace porque tarda horas.",
          result: "Genera automáticamente análisis estructurado del deal: situación competitiva, poder de decisión, señales de urgencia. Antes de cada reunión importante.",
        },
      ],
    },
    s4: {
      heading: "4. Cómo funcionan los agentes de IA (sin jerga técnica)",
      intro: "Piénsalo como contratar a un empleado digital. Haces exactamente lo mismo que cuando contratas a alguien:",
      steps: [
        ["Le defines el trabajo", "Qué tiene que hacer, cuándo, con qué criterio y qué resultado se espera. Esto es el system prompt + las reglas del agente."],
        ["Le das acceso a herramientas", "CRM, LinkedIn, email, base de datos de leads, calendario. El agente puede leer y escribir en estos sistemas, igual que haría un humano."],
        ["Le estableces límites", "Qué puede hacer solo y qué requiere aprobación humana. Ningún agente bien diseñado opera sin supervisión en decisiones de alto impacto."],
        ["Trabaja 24/7", "Sin vacaciones, sin distracciones, sin variabilidad. El volumen que antes requería 5 SDRs, ahora lo gestiona el agente con consistencia."],
      ],
      stackTitle: "Stack técnico típico",
      stack: [
        ["LLM", "Claude / GPT-4o", "El cerebro que razona"],
        ["Orquestador", "n8n / Make", "El sistema nervioso"],
        ["CRM", "HubSpot / Salesforce", "La memoria"],
        ["Datos", "LinkedIn / Clay", "Los ojos"],
      ],
    },
    s5: {
      heading: "5. Automatización vs agentes: cuándo usar cada uno",
      intro: "No son excluyentes. La mayoría de los sistemas bien diseñados combinan los dos. La regla es simple: automatización para tareas predecibles, agentes para tareas que requieren juicio.",
      thCriteria: "Criterio",
      thAutomation: "Automatización",
      thAgent: "Agente de IA",
      rows: [
        ["Tipo de tarea", "Reglas fijas, IF-THEN", "Requiere contexto y criterio"],
        ["Variabilidad", "Baja — siempre igual", "Alta — cada caso es distinto"],
        ["Ejemplo ventas", "Mover lead a etapa si abre email", "Decidir qué decir en el follow-up"],
        ["Coste", "Muy bajo", "Bajo-medio"],
        ["Mantenimiento", "Mínimo", "Iteración continua"],
        ["Cuándo falla", "Cuando el caso no estaba previsto", "Cuando el objetivo no está claro"],
      ],
      highlight: "El 90% de los proyectos de IA para ventas que fracasan habían intentado usar un agente donde una automatización simple era suficiente — o viceversa. El diagnóstico previo vale más que la herramienta.",
    },
    s6: {
      heading: "6. Cómo implementar agentes de IA en tu empresa",
      intro: "El proceso en 4 fases. La tecnología es la parte fácil — el diseño del proceso es donde está el valor.",
      phases: [
        { num: "01", title: "Discovery", desc: "Auditoría del proceso comercial actual. Identificamos los 2-3 puntos de mayor pérdida de ingresos. Definimos el caso de uso con mayor ROI para empezar. Output: brief técnico y estimación de impacto." },
        { num: "02", title: "Diseño", desc: "Arquitectura del agente: objetivo, herramientas, reglas de negocio, criterios de escalado a humano, KPIs de éxito. No escribimos código hasta que el diseño está validado." },
        { num: "03", title: "Build & Deploy", desc: "Construcción en n8n o Make, integración con CRM y fuentes de datos, pruebas con datos reales, iteración rápida. Primeras semanas en producción con supervisión estrecha." },
        { num: "04", title: "Operación continua", desc: "Monitorización de KPIs, ajuste de prompts y lógica, ampliación del alcance según resultados. Un agente bien diseñado mejora con el tiempo." },
      ],
      modalitiesTitle: "Dos modalidades de trabajo",
      modality1Title: "Instalación (compra única)",
      modality1Desc: "El agente queda en tu infraestructura. Lo operas tú. Mayor control, menor coste a largo plazo. Requiere capacidad interna para mantenerlo.",
      modality2Title: "AaaS — Agent as a Service",
      modality2Desc: "Servicio gestionado mensual. Nosotros operamos, monitorizamos y mejoramos el agente continuamente. Sin fricción interna.",
    },
    s7: {
      heading: "7. Errores comunes al implementar IA en ventas",
      intro: "Hemos visto los mismos errores repetirse. No son errores de tecnología — son errores de criterio.",
      errors: [
        {
          title: "Datos sucios en el CRM",
          desc: "Un agente que trabaja sobre datos incorrectos produce resultados incorrectos con más velocidad. Antes de automatizar, limpia. Si no tienes datos de calidad, el primer sprint debería ser de higiene de datos, no de IA.",
        },
        {
          title: "Automatizar un proceso que no funciona manualmente",
          desc: "Si tu proceso de prospección manual no convierte, el agente no lo va a arreglar — lo va a escalar. Primero valida el proceso con humanos. Luego automatiza lo que ya funciona.",
        },
        {
          title: "Esperar resultados sin involucrar al equipo",
          desc: "El equipo de ventas tiene que entender qué hace el agente, cuándo interviene y cómo escalar casos. Los agentes que se implementan «de arriba hacia abajo» sin adopción del equipo acaban sin usar.",
        },
        {
          title: "Comprar herramientas sin estrategia",
          desc: "Clay, Apollo, Instantly, Salesloft, Outreach — cada semana aparece una nueva herramienta de IA para ventas. El problema no es la herramienta, es tener un proceso claro antes de elegirla. La herramienta es el último paso, no el primero.",
        },
      ],
    },
    s8: {
      heading: "8. Preguntas frecuentes",
      faq: [
        {
          q: "¿Cuánto cuesta implementar un agente de IA?",
          a: "Depende del alcance. Un agente de prospección básico puede implementarse en 2–3 semanas por entre €3.000 y €8.000 en modalidad de instalación (el agente es tuyo). El modelo AaaS (servicio gestionado) parte de €1.500/mes e incluye mantenimiento, iteraciones y soporte. Los costes operativos de los LLMs suelen ser €50–€300/mes según volumen.",
        },
        {
          q: "¿Los agentes de IA reemplazan al equipo de ventas?",
          a: "No. Los agentes eliminan el trabajo mecánico: investigación, enriquecimiento de datos, redacción de mensajes, seguimientos automáticos. El equipo de ventas se ocupa de lo que solo ellos pueden hacer: construir relaciones, gestionar objeciones complejas y cerrar. La mayoría de nuestros clientes consiguen que sus SDRs tengan el doble de conversaciones con el mismo headcount.",
        },
        {
          q: "¿Cuánto tiempo tarda la implementación?",
          a: "Un agente bien definido tarda entre 2 y 6 semanas desde el kick-off hasta producción. La variable más importante no es la tecnología — es la calidad de los datos de entrada y la claridad del proceso que se va a automatizar. Si el proceso no está documentado, la implementación se alarga.",
        },
        {
          q: "¿Qué herramientas necesito tener primero?",
          a: "Lo mínimo viable: un CRM con datos medianamente limpios y un dominio de email con reputación sana. A partir de ahí, el stack se construye encima. No necesitas tener n8n, Clay ni ninguna herramienta específica antes de empezar — eso forma parte del diseño.",
        },
        {
          q: "¿Los agentes funcionan en español?",
          a: "Sí, sin pérdida de calidad relevante. Claude y GPT-4o generan mensajes en español de la misma calidad que en inglés. Los flujos de señales, enriquecimiento y CRM son agnósticos al idioma. Todos nuestros agentes para el mercado hispano operan en español nativo.",
        },
        {
          q: "¿Qué pasa si no tengo CRM?",
          a: "Podemos implementar el agente y conectarlo a Google Sheets o Notion como punto de partida. Sin embargo, si tienes más de 3 personas en el equipo comercial, el primer paso debería ser adoptar un CRM básico (HubSpot free es suficiente). Un agente sobre datos desorganizados produce resultados desorganizados.",
        },
        {
          q: "¿Cómo sé si mi empresa está lista para IA en ventas?",
          a: "La señal más clara es que ya tienes un proceso de ventas que funciona manualmente — aunque sea lento. Si no sabes cómo conviertes leads en clientes, la IA no lo resolverá. El ARRI (AI Readiness & Rationality Index) es el diagnóstico que usamos: 5 preguntas, 3 minutos, resultado inmediato.",
        },
        {
          q: "¿Cuál es la diferencia entre instalar un agente y contratar AaaS?",
          a: "En la instalación (compra única), el agente queda en tu infraestructura y lo operas tú. En AaaS (Agent as a Service), nosotros lo operamos, monitorizamos y mejoramos continuamente. La instalación tiene menor coste total a largo plazo. El AaaS tiene menor fricción operativa y tiempo de respuesta garantizado.",
        },
      ],
    },
    s9: {
      badge: "Siguiente paso",
      heading: "¿Listo para implementar tu primer agente?",
      sub: "En una sesión de 30 minutos identificamos el caso de uso con mayor ROI para tu equipo y te damos un plan de implementación concreto.",
      ctaPrimary: "Agenda una consultoría gratuita",
      ctaSecondary: "Haz el Test de Madurez IA →",
    },
    footer: {
      home: "Inicio",
      privacy: "Privacidad",
      terms: "Términos",
    },
  },

  en: {
    meta: {
      title: "AI Agents for B2B Sales: Complete Guide 2026 | Verymuch.ai",
      description:
        "Practical guide on AI agents for B2B sales teams. What they are, how they work, what results they drive, and how to implement them. With real data and use cases.",
      ogTitle: "AI Agents for B2B Sales: Complete Guide 2026",
      ogDescription:
        "Practical guide on AI agents for B2B sales teams. What they are, how they work, what results they drive, and how to implement them.",
      twitterDesc: "Practical guide on AI agents for B2B sales teams.",
      ogLocale: "en_US",
    },
    breadcrumb: {
      home: "Home",
      guide: "Guide",
      page: "AI Agents for B2B Sales",
    },
    jsonld: {
      articleHeadline: "AI Agents for B2B Sales: Complete Guide 2026",
      articleDescription:
        "Practical guide on AI agents for B2B sales teams. What they are, how they work, what results they drive, and how to implement them.",
      breadcrumb: [
        { name: "Home", item: `${BASE_URL}/en` },
        { name: "Guide", item: `${BASE_URL}/en/guia` },
        { name: "AI Agents for B2B Sales", item: `${BASE_URL}/en/guia/agentes-ia-ventas-b2b` },
      ],
    },
    hero: {
      badge: "Complete guide · 2026",
      h1Pre: "AI Agents for B2B Sales: ",
      h1Gradient: "Complete Guide 2026",
      sub: "What they are, how they work, what results they drive, and how to implement them. Real data — no empty theory.",
      by: "By",
      date: "March 22, 2026",
      readTime: "12 min read",
    },
    toc: {
      label: "In this article",
      items: [
        { id: "que-es",         label: "What is an AI agent for sales" },
        { id: "por-que",        label: "Why B2B teams need them in 2026" },
        { id: "5-agentes",      label: "5 agents every team should have" },
        { id: "como-funcionan", label: "How they work (no tech jargon)" },
        { id: "automatizacion", label: "Automation vs agents: when to use each" },
        { id: "implementar",    label: "How to implement agents in your company" },
        { id: "errores",        label: "Common mistakes when implementing AI in sales" },
        { id: "faq",            label: "Frequently asked questions" },
        { id: "cta",            label: "Next step" },
      ],
    },
    s1: {
      heading: "1. What is an AI agent for sales",
      p1: "An AI agent is a software system with an objective, access to tools, and the ability to reason about how to achieve it. It does not run a fixed script — it makes decisions.",
      p2: "The difference from traditional automation (Zapier, Make) is fundamental:",
      tradTitle: "Traditional automation",
      tradItems: ["If X happens → do Y", "No context or memory", "Breaks on unforeseen cases", "Speed: fast, repeatable"],
      agentTitle: "AI Agent",
      agentItems: ["Goal → plans → executes", "Understands context and adapts", "Handles exceptions with judgment", "Speed + judgment"],
      highlight: "A human SDR decides who to contact, what to say, and when to follow up. An AI agent does exactly the same — with criteria defined by you, infinite scale, and fixed cost.",
    },
    s2: {
      heading: "2. Why B2B sales teams need AI agents in 2026",
      intro: "Three problems every mid-market sales team has, without exception:",
      problems: [
        "78% of B2B buyers choose the vendor that responds first. Most teams take hours.",
        "SDRs spend 70% of their time on manual research: searching LinkedIn, enriching data, preparing briefings.",
        "80% of dead deals are lost due to lack of follow-up — not because the prospect said no.",
      ],
      statsTitle: "The numbers when agents are deployed:",
      stats: [
        { stat: "$39",  label: "Cost per lead with AI SDR" },
        { stat: "$262", label: "Cost per lead with human SDR" },
        { stat: "−85%", label: "Reduction in cost per lead" },
        { stat: "86%",  label: "Companies with positive ROI in year one" },
      ],
      sources: "Sources: Gartner Sales Technology Report 2025, HubSpot State of Sales 2025, McKinsey B2B AI Adoption 2025.",
    },
    s3: {
      heading: "3. 5 AI agents every sales team should have",
      intro: "You don't need to start with all of them. But these five cover the highest revenue-loss points in mid-market B2B teams.",
      problemLabel: "Problem: ",
      resultLabel: "Result: ",
      agents: [
        {
          num: "01",
          title: "Signal-Based Prospecting Agent",
          problem: "Your SDRs reach out cold. Response rates hover around 2%.",
          result: "Monitors LinkedIn signals (job changes, new hires, posts) and triggers outreach at peak receptivity. Response rate: 5–8%.",
        },
        {
          num: "02",
          title: "Inbound Lead Router",
          problem: "Inbound leads wait hours for a response. 50% have already contacted another vendor.",
          result: "Responds in under 60 seconds, qualifies with context questions, and books a meeting automatically. Result: 5× faster, 3× more meetings closed.",
        },
        {
          num: "03",
          title: "Pre-Call Agent",
          problem: "Before each meeting, the AE spends 20–30 minutes preparing context they could have in seconds.",
          result: "Automatic briefing with company summary, recent news, contact profile, likely objections, and suggested questions. Zero manual prep.",
        },
        {
          num: "04",
          title: "Nurturing & Follow-up Agent",
          problem: "The pipeline has stalled deals nobody follows up on because the team is busy with hot ones.",
          result: "Context-personalized follow-up sequences. 40% more pipeline recovered from deals that were considered dead.",
        },
        {
          num: "05",
          title: "Commercial Research Agent",
          problem: "Complex deals require deep analysis (SWOT, MEDDPICC, stakeholders) that nobody does because it takes hours.",
          result: "Automatically generates structured deal analysis: competitive landscape, decision power, urgency signals. Before every important meeting.",
        },
      ],
    },
    s4: {
      heading: "4. How AI agents work (no tech jargon)",
      intro: "Think of it like hiring a digital employee. You do exactly the same as when you hire someone:",
      steps: [
        ["Define the job", "What it needs to do, when, with what criteria, and what outcome is expected. This is the system prompt + the agent's rules."],
        ["Give it access to tools", "CRM, LinkedIn, email, lead database, calendar. The agent can read and write in these systems, just like a human would."],
        ["Set boundaries", "What it can do autonomously and what requires human approval. No well-designed agent operates without supervision on high-impact decisions."],
        ["Works 24/7", "No vacations, no distractions, no variability. The volume that used to require 5 SDRs is now handled by the agent with consistency."],
      ],
      stackTitle: "Typical tech stack",
      stack: [
        ["LLM", "Claude / GPT-4o", "The reasoning brain"],
        ["Orchestrator", "n8n / Make", "The nervous system"],
        ["CRM", "HubSpot / Salesforce", "The memory"],
        ["Data", "LinkedIn / Clay", "The eyes"],
      ],
    },
    s5: {
      heading: "5. Automation vs agents: when to use each",
      intro: "They are not mutually exclusive. Most well-designed systems combine both. The rule is simple: automation for predictable tasks, agents for tasks that require judgment.",
      thCriteria: "Criteria",
      thAutomation: "Automation",
      thAgent: "AI Agent",
      rows: [
        ["Task type", "Fixed rules, IF-THEN", "Requires context and judgment"],
        ["Variability", "Low — always the same", "High — every case is different"],
        ["Sales example", "Move lead to stage if email is opened", "Decide what to say in the follow-up"],
        ["Cost", "Very low", "Low-medium"],
        ["Maintenance", "Minimal", "Continuous iteration"],
        ["When it fails", "When the case wasn't anticipated", "When the objective isn't clear"],
      ],
      highlight: "90% of AI for sales projects that fail tried to use an agent where simple automation was sufficient — or vice versa. The upfront diagnosis is worth more than the tool.",
    },
    s6: {
      heading: "6. How to implement AI agents in your company",
      intro: "The process in 4 phases. The technology is the easy part — process design is where the value lives.",
      phases: [
        { num: "01", title: "Discovery", desc: "Audit of the current sales process. We identify the 2–3 highest revenue-loss points. We define the use case with the highest ROI to start. Output: technical brief and impact estimate." },
        { num: "02", title: "Design", desc: "Agent architecture: objective, tools, business rules, human escalation criteria, success KPIs. We don't write code until the design is validated." },
        { num: "03", title: "Build & Deploy", desc: "Built in n8n or Make, integrated with CRM and data sources, tested with real data, rapid iteration. First weeks in production with close supervision." },
        { num: "04", title: "Continuous operation", desc: "KPI monitoring, prompt and logic tuning, scope expansion based on results. A well-designed agent improves over time." },
      ],
      modalitiesTitle: "Two engagement models",
      modality1Title: "Installation (one-time purchase)",
      modality1Desc: "The agent lives in your infrastructure. You operate it. More control, lower long-term cost. Requires internal capacity to maintain it.",
      modality2Title: "AaaS — Agent as a Service",
      modality2Desc: "Monthly managed service. We operate, monitor, and continuously improve the agent. No internal friction.",
    },
    s7: {
      heading: "7. Common mistakes when implementing AI in sales",
      intro: "We have seen the same mistakes repeat. These are not technology mistakes — they are judgment mistakes.",
      errors: [
        {
          title: "Dirty CRM data",
          desc: "An agent working on bad data produces bad results faster. Clean first, then automate. If you don't have quality data, the first sprint should be data hygiene, not AI.",
        },
        {
          title: "Automating a process that doesn't work manually",
          desc: "If your manual prospecting process doesn't convert, the agent won't fix it — it will scale it. First validate the process with humans. Then automate what already works.",
        },
        {
          title: "Expecting results without involving the team",
          desc: "The sales team must understand what the agent does, when it intervenes, and how to escalate cases. Agents deployed top-down without team adoption end up unused.",
        },
        {
          title: "Buying tools without a strategy",
          desc: "Clay, Apollo, Instantly, Salesloft, Outreach — every week a new AI sales tool appears. The problem isn't the tool, it's having a clear process before choosing it. The tool is the last step, not the first.",
        },
      ],
    },
    s8: {
      heading: "8. Frequently asked questions",
      faq: [
        {
          q: "How much does it cost to implement an AI agent?",
          a: "It depends on scope. A basic prospecting agent can be implemented in 2–3 weeks for between €3,000 and €8,000 in installation mode (the agent is yours). The AaaS (managed service) model starts at €1,500/month and includes maintenance, iterations, and support. LLM operating costs are typically €50–€300/month depending on volume.",
        },
        {
          q: "Do AI agents replace the sales team?",
          a: "No. Agents eliminate mechanical work: research, data enrichment, message drafting, automated follow-ups. The sales team focuses on what only they can do: build relationships, handle complex objections, and close. Most of our clients get their SDRs to have twice as many conversations with the same headcount.",
        },
        {
          q: "How long does implementation take?",
          a: "A well-defined agent takes 2 to 6 weeks from kick-off to production. The most important variable is not the technology — it is the quality of the input data and the clarity of the process being automated. If the process isn't documented, implementation takes longer.",
        },
        {
          q: "What tools do I need to have first?",
          a: "The minimum viable set: a CRM with reasonably clean data and an email domain with healthy reputation. From there, the stack is built on top. You don't need n8n, Clay, or any specific tool before starting — that's part of the design.",
        },
        {
          q: "Do agents work in Spanish?",
          a: "Yes, without any significant quality loss. Claude and GPT-4o generate messages in Spanish at the same quality as in English. Signal flows, enrichment, and CRM are language-agnostic. All our agents for the Hispanic market operate in native Spanish.",
        },
        {
          q: "What if I don't have a CRM?",
          a: "We can implement the agent and connect it to Google Sheets or Notion as a starting point. However, if you have more than 3 people on the sales team, the first step should be adopting a basic CRM (HubSpot free is sufficient). An agent on disorganized data produces disorganized results.",
        },
        {
          q: "How do I know if my company is ready for AI in sales?",
          a: "The clearest signal is that you already have a sales process that works manually — even if it's slow. If you don't know how you convert leads into customers, AI won't solve it. The ARRI (AI Readiness & Rationality Index) is the diagnostic we use: 5 questions, 3 minutes, immediate result.",
        },
        {
          q: "What's the difference between installing an agent and subscribing to AaaS?",
          a: "In installation (one-time purchase), the agent stays in your infrastructure and you operate it. In AaaS (Agent as a Service), we operate, monitor, and continuously improve it. Installation has a lower total long-term cost. AaaS has lower operational friction and a guaranteed response time.",
        },
      ],
    },
    s9: {
      badge: "Next step",
      heading: "Ready to implement your first agent?",
      sub: "In a 30-minute session we identify the use case with the highest ROI for your team and give you a concrete implementation plan.",
      ctaPrimary: "Book a free strategy call",
      ctaSecondary: "Take the AI Readiness Test →",
    },
    footer: {
      home: "Home",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
} as const;

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = locale === "en" ? CONTENT.en : CONTENT.es;
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/guia/agentes-ia-ventas-b2b`
      : `${BASE_URL}/guia/agentes-ia-ventas-b2b`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/guia/agentes-ia-ventas-b2b`,
        en: `${BASE_URL}/en/guia/agentes-ia-ventas-b2b`,
        "x-default": `${BASE_URL}/guia/agentes-ia-ventas-b2b`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "Verymuch.ai",
      locale: c.meta.ogLocale,
      url: canonical,
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Verymuch.ai" }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.ogTitle,
      description: c.meta.twitterDesc,
      images: [OG_IMAGE],
    },
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div
      className="rounded-xl p-5 text-center border"
      style={{
        background: "rgba(74,212,174,0.06)",
        borderColor: "rgba(74,212,174,0.18)",
      }}
    >
      <div
        className="text-2xl font-extrabold leading-none mb-2"
        style={{ color: "var(--accent-text)" }}
      >
        {stat}
      </div>
      <div className="text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
        {label}
      </div>
    </div>
  );
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="rounded-xl p-5 border-l-4 my-6"
      style={{
        background: "rgba(245,160,64,0.06)",
        borderLeftColor: "var(--accent-warm)",
      }}
    >
      <div className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
        {children}
      </div>
    </blockquote>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PillarPage({ params }: Props) {
  const { locale } = await params;
  const c = locale === "en" ? CONTENT.en : CONTENT.es;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonld.articleHeadline,
    description: c.jsonld.articleDescription,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { "@type": "Organization", name: "Verymuch.ai", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Verymuch.ai",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": locale === "en"
        ? `${BASE_URL}/en/guia/agentes-ia-ventas-b2b`
        : `${BASE_URL}/guia/agentes-ia-ventas-b2b`,
    },
    image: OG_IMAGE,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.s8.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: c.jsonld.breadcrumb.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <HomeNav />

      {/* Hero / header */}
      <header
        className="relative overflow-hidden pt-36 pb-12 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 60% -10%, rgba(74,212,174,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-2xl mx-auto relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-xs" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="hover:underline transition-opacity hover:opacity-100 opacity-70">{c.breadcrumb.home}</Link>
            <span className="opacity-30">/</span>
            <span className="opacity-50">{c.breadcrumb.guide}</span>
            <span className="opacity-30">/</span>
            <span style={{ color: "var(--accent-text)" }}>{c.breadcrumb.page}</span>
          </nav>

          <p className="mb-4">
            <span className="badge-label" style={{ color: "var(--accent-text)" }}>
              {c.hero.badge}
            </span>
          </p>
          <h1
            className="font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem,4.5vw,2.8rem)", letterSpacing: "-0.025em" }}
          >
            {c.hero.h1Pre}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {c.hero.h1Gradient}
            </span>
          </h1>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {c.hero.sub}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
            <span>{c.hero.by} <strong style={{ color: "var(--text-primary)" }}>Verymuch.ai</strong></span>
            <span className="opacity-30">·</span>
            <time dateTime={PUBLISHED}>{c.hero.date}</time>
            <span className="opacity-30">·</span>
            <span>{c.hero.readTime}</span>
          </div>
        </div>
      </header>

      <div className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">

          {/* TOC */}
          <nav
            aria-label={c.toc.label}
            className="rounded-2xl p-6 border mb-12"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <p className="caption uppercase tracking-widest font-bold mb-4" style={{ color: "var(--text-secondary)" }}>
              {c.toc.label}
            </p>
            <ol className="flex flex-col gap-2">
              {c.toc.items.map((item, i) => (
                <li key={item.id} className="flex items-baseline gap-3">
                  <span className="text-xs font-bold w-5 shrink-0 text-right" style={{ color: "var(--accent-text)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-sm transition-opacity hover:opacity-100 opacity-70 hover:underline"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── Section 1 ─────────────────────────────────────────────────── */}
          <section id="que-es" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s1.heading}
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              {c.s1.p1}
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              {c.s1.p2}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <h3 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  {c.s1.tradTitle}
                </h3>
                <ul className="flex flex-col gap-2">
                  {c.s1.tradItems.map((t) => (
                    <li key={t} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span className="shrink-0 opacity-50">—</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-xl p-5 border"
                style={{ background: "rgba(74,212,174,0.04)", borderColor: "rgba(74,212,174,0.2)" }}
              >
                <h3 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  {c.s1.agentTitle}
                </h3>
                <ul className="flex flex-col gap-2">
                  {c.s1.agentItems.map((t) => (
                    <li key={t} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span className="shrink-0" style={{ color: "var(--accent-text)" }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <HighlightBox>{c.s1.highlight}</HighlightBox>
          </section>

          {/* ── Section 2 ─────────────────────────────────────────────────── */}
          <section id="por-que" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s2.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s2.intro}
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {c.s2.problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(245,160,64,0.15)", color: "var(--accent-warm-text)" }}>!</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.s2.statsTitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {c.s2.stats.map((s) => (
                <StatCard key={s.stat} stat={s.stat} label={s.label} />
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.s2.sources}
            </p>
          </section>

          {/* ── Section 3 ─────────────────────────────────────────────────── */}
          <section id="5-agentes" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s3.heading}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {c.s3.intro}
            </p>
            <div className="flex flex-col gap-5">
              {c.s3.agents.map((agent) => (
                <div
                  key={agent.num}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-extrabold shrink-0 leading-none mt-0.5" style={{ color: "var(--accent-text)" }}>
                      {agent.num}
                    </span>
                    <div>
                      <h3 className="text-base font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                        {agent.title}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          <span className="font-semibold" style={{ color: "var(--error)" }}>{c.s3.problemLabel}</span>
                          {agent.problem}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          <span className="font-semibold" style={{ color: "var(--accent-text)" }}>{c.s3.resultLabel}</span>
                          {agent.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4 ─────────────────────────────────────────────────── */}
          <section id="como-funcionan" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s4.heading}
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              {c.s4.intro}
            </p>
            <ol className="flex flex-col gap-4 mb-8">
              {c.s4.steps.map(([title, desc], i) => (
                <li key={title} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: "rgba(74,212,174,0.15)", color: "var(--accent-text)" }}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div
              className="rounded-xl p-5 border"
              style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
            >
              <p className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                {c.s4.stackTitle}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {c.s4.stack.map(([layer, tool, desc]) => (
                  <div key={layer} className="text-center">
                    <p className="text-xs font-bold mb-0.5" style={{ color: "var(--accent-text)" }}>{layer}</p>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>{tool}</p>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 5 ─────────────────────────────────────────────────── */}
          <section id="automatizacion" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s5.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s5.intro}
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: `1px solid var(--border)` }}>
                    <th className="text-left py-3 pr-4 font-bold" style={{ color: "var(--text-primary)" }}>{c.s5.thCriteria}</th>
                    <th className="text-left py-3 pr-4 font-bold" style={{ color: "var(--text-secondary)" }}>{c.s5.thAutomation}</th>
                    <th className="text-left py-3 font-bold" style={{ color: "var(--accent-text)" }}>{c.s5.thAgent}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.s5.rows.map(([criteria, auto, agent]) => (
                    <tr key={criteria} style={{ borderBottom: `1px solid var(--border)` }}>
                      <td className="py-3 pr-4 font-medium" style={{ color: "var(--text-primary)" }}>{criteria}</td>
                      <td className="py-3 pr-4" style={{ color: "var(--text-secondary)" }}>{auto}</td>
                      <td className="py-3" style={{ color: "var(--text-secondary)" }}>{agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <HighlightBox>{c.s5.highlight}</HighlightBox>
          </section>

          {/* ── Section 6 ─────────────────────────────────────────────────── */}
          <section id="implementar" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s6.heading}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {c.s6.intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {c.s6.phases.map((phase) => (
                <div
                  key={phase.num}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <span className="text-3xl font-extrabold block mb-3 leading-none" style={{ color: "var(--accent-text)" }}>
                    {phase.num}
                  </span>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>{phase.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{phase.desc}</p>
                </div>
              ))}
            </div>
            <div
              className="rounded-xl p-5 border-l-4"
              style={{ background: "var(--bg-secondary)", borderColor: "var(--border)", borderLeftColor: "var(--accent-text)" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{c.s6.modalitiesTitle}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-text)" }}>{c.s6.modality1Title}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.s6.modality1Desc}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-warm-text)" }}>{c.s6.modality2Title}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.s6.modality2Desc}</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 7 ─────────────────────────────────────────────────── */}
          <section id="errores" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s7.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s7.intro}
            </p>
            <div className="flex flex-col gap-4">
              {c.s7.errors.map((error) => (
                <div
                  key={error.title}
                  className="rounded-xl p-5 border-l-4 border"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "var(--border)",
                    borderLeftColor: "var(--error)",
                  }}
                >
                  <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    ✕ {error.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{error.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 8 — FAQ ───────────────────────────────────────────── */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.s8.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {c.s8.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border p-5"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <summary
                    className="font-semibold cursor-pointer list-none flex justify-between gap-4 text-left text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span>{item.q}</span>
                    <span
                      className="shrink-0 group-open:rotate-180 transition-transform"
                      style={{ color: "var(--accent-text)" }}
                    >
                      ▼
                    </span>
                  </summary>
                  <p
                    className="mt-4 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ── Section 9 — CTA ───────────────────────────────────────────── */}
          <section id="cta" className="scroll-mt-24">
            <div
              className="rounded-2xl p-8 text-center border"
              style={{
                background:
                  "radial-gradient(ellipse 120% 100% at 50% 0%, rgba(74,212,174,0.08) 0%, transparent 60%), var(--bg-secondary)",
                borderColor: "var(--border)",
              }}
            >
              <p className="mb-3">
                <span className="badge-label" style={{ color: "var(--accent-text)" }}>
                  {c.s9.badge}
                </span>
              </p>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                {c.s9.heading}
              </h2>
              <p className="text-sm leading-relaxed max-w-md mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
                {c.s9.sub}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={GHL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient text-sm"
                >
                  {c.s9.ctaPrimary}
                </a>
                <a
                  href="/ai-readiness"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] text-sm font-semibold btn-outline-mint"
                >
                  {c.s9.ctaSecondary}
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Footer minimal */}
      <footer
        className="border-t px-6 py-8"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="caption" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Verymuch.ai
          </p>
          <div className="flex items-center gap-5">
            <Link href="/" className="caption transition-opacity hover:opacity-100 opacity-50" style={{ color: "var(--text-primary)" }}>
              {c.footer.home}
            </Link>
            <Link href="/legal/privacidad" className="caption transition-opacity hover:opacity-100 opacity-50" style={{ color: "var(--text-primary)" }}>
              {c.footer.privacy}
            </Link>
            <Link href="/legal/terminos" className="caption transition-opacity hover:opacity-100 opacity-50" style={{ color: "var(--text-primary)" }}>
              {c.footer.terms}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
