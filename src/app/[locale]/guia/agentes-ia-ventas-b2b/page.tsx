import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";
const PUBLISHED = "2026-03-22";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

// ─── Types ────────────────────────────────────────────────────────────────────

interface Agent {
  num: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
}
interface Phase { num: string; title: string; weeks: string; desc: string }
interface ErrorItem { title: string; desc: string }
interface Trend { num: string; title: string; desc: string }
interface FaqItem { q: string; a: string }
interface StatItem { stat: string; label: string }
interface BreadcrumbItem { name: string; item: string }

interface PageContent {
  meta: {
    title: string; description: string;
    ogTitle: string; ogDescription: string; twitterDesc: string; ogLocale: string;
  };
  breadcrumb: { home: string; guide: string; page: string };
  jsonld: { articleHeadline: string; articleDescription: string; breadcrumb: BreadcrumbItem[] };
  hero: { badge: string; h1Pre: string; h1Gradient: string; sub: string; by: string; date: string; readTime: string };
  toc: { label: string; items: { id: string; label: string }[] };
  intro: { p1: string; p2: string; p3: string; sources: string };
  s2: {
    heading: string; p1: string; p2: string;
    tradTitle: string; tradItems: string[];
    agentTitle: string; agentItems: string[];
    layersTitle: string; layers: string[][];
    agentWashTitle: string; agentWashText: string;
  };
  s3: {
    heading: string; intro: string; stats: StatItem[];
    paradoxTitle: string; paradox: string[];
    roundsTitle: string; rounds: string;
    statsNote: string; statsNoteLink: string;
  };
  s4: {
    heading: string; intro: string;
    stats: StatItem[];
    nuanceTitle: string; nuances: string[];
    caseTitle: string; caseText: string;
    highlight: string;
    statsNote: string; statsNoteLink: string;
  };
  s5: {
    heading: string; intro: string;
    problemLabel: string; solutionLabel: string; resultLabel: string;
    agents: Agent[];
  };
  s6: {
    heading: string; intro: string;
    thModel: string; thPipeline: string; thWinRate: string;
    rows: string[][];
    stat1: string; stat2: string; stat3: string;
    statsNote: string; statsNoteLink: string;
    gartnerTitle: string; gartnerText: string;
  };
  s7: {
    heading: string; intro: string;
    phases: Phase[];
    modalitiesTitle: string;
    modality1Title: string; modality1Desc: string;
    modality2Title: string; modality2Desc: string;
    highlight: string;
  };
  s8: {
    heading: string; intro: string;
    errors: ErrorItem[];
  };
  s9: {
    heading: string; intro: string;
    markets: { flag: string; name: string; desc: string; source: string }[];
    highlight: string;
    sourceLabel: string;
    sourceLinkLabel: string;
  };
  s10: {
    heading: string; intro: string;
    trends: Trend[];
  };
  faq: { heading: string; items: FaqItem[] };
  cta: { badge: string; heading: string; sub: string; ctaPrimary: string; ctaSecondary: string };
  sourcesTitle: string;
  sourcesText: string;
  footer: { home: string; privacy: string; terms: string };
}

// ─── Bilingual content ────────────────────────────────────────────────────────

const es: PageContent = {
  meta: {
    title: "Agentes de IA para Ventas B2B: Guía Completa 2026 | Verymuch.ai",
    description:
      "Qué son los agentes de IA para ventas B2B, cómo funcionan, qué ROI generan y cómo implementarlos. Datos de McKinsey, Gartner, Bain y más de 80 fuentes.",
    ogTitle: "Agentes de IA para Ventas B2B: Guía Completa 2026",
    ogDescription:
      "Qué son, cómo funcionan, qué ROI generan y cómo implementarlos. Cruzando McKinsey, Gartner, Bain y más de 80 fuentes verificadas.",
    twitterDesc: "Guía completa sobre agentes de IA para ventas B2B. Datos reales, sin teoría.",
    ogLocale: "es_ES",
  },
  breadcrumb: { home: "Inicio", guide: "Guía", page: "Agentes de IA para Ventas B2B" },
  jsonld: {
    articleHeadline: "Agentes de IA para Ventas B2B: Guía Completa 2026",
    articleDescription:
      "Qué son los agentes de IA para ventas B2B, cómo funcionan, qué ROI generan y cómo implementarlos. Datos de McKinsey, Gartner, Bain y más de 80 fuentes.",
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
    sub: "Datos reales. Sin teoría vacía. Cruzando McKinsey, Gartner, Bain y más de 80 fuentes verificadas con lo que nosotros mismos construimos e implementamos.",
    by: "Por",
    date: "22 de marzo, 2026",
    readTime: "18 min de lectura",
  },
  toc: {
    label: "En este artículo",
    items: [
      { id: "que-es",          label: "¿Qué es un agente de IA (y qué no es)?" },
      { id: "mercado",         label: "El mercado en números" },
      { id: "roi",             label: "ROI real: lo que dicen los datos" },
      { id: "5-agentes",       label: "Los 5 agentes que necesitas" },
      { id: "modelo-hibrido",  label: "El modelo híbrido gana" },
      { id: "implementar",     label: "Cómo implementar: las 3 fases" },
      { id: "errores",         label: "Los 4 errores que matan proyectos" },
      { id: "mercado-hispano", label: "El mercado hispano: la mayor oportunidad" },
      { id: "tendencias",      label: "Lo que viene" },
      { id: "faq",             label: "Preguntas frecuentes" },
    ],
  },
  intro: {
    p1: "¿Por qué Uber no vino de la industria del transporte? ¿Por qué Airbnb no nació de una cadena hotelera? La respuesta siempre es la misma: las empresas establecidas están tan ocupadas optimizando lo que ya tienen que no ven la disrupción hasta que les pasa por encima. En 2026, esa disrupción tiene un nombre concreto en ventas B2B: agentes de IA.",
    p2: "No hablamos de chatbots que responden preguntas frecuentes ni de automatizaciones que mueven leads entre etapas. Un agente de IA para ventas investiga prospectos en tiempo real, escribe outreach personalizado con contexto real, cualifica leads con criterio definido por ti, hace seguimiento con juicio, y lo hace mientras tu equipo duerme. La diferencia no es de velocidad. Es de naturaleza.",
    p3: "Esta guía cruza tres investigaciones independientes, datos de McKinsey, Gartner, Bain, Forrester y más de 80 fuentes verificadas con lo que nosotros mismos construimos e implementamos para equipos B2B en España, México, Colombia y el mercado hispano de EE.UU. No es teoría. Es lo que funciona.",
    sources: "Cruzando McKinsey, Gartner, Bain, Forrester, ResearchAndMarkets, SaaStr, Stanford SLEI, EY LATAM, IndesIA y más de 80 fuentes verificadas.",
  },
  s2: {
    heading: "1. ¿Qué es un agente de IA para ventas (y qué no es)?",
    p1: "La industria tiene un problema grave de vocabulario. Todo se llama \"IA\" y todo se llama \"agente\". Gartner lo llama agentwashing: de los miles de proveedores que dicen tener capacidades de agentes autónomos, solo ~130 tienen algo genuinamente diferente a una automatización con un modelo de IA encima.",
    p2: "La diferencia real está en la arquitectura:",
    tradTitle: "Automatización tradicional",
    tradItems: [
      "Ejecuta reglas fijas: IF-THEN",
      "Sin contexto ni memoria entre pasos",
      "Se rompe ante casos no previstos",
      "Necesita que alguien lo programe para cada variante",
    ],
    agentTitle: "Agente de IA",
    agentItems: [
      "Razona, planifica y decide cómo alcanzar un objetivo",
      "Mantiene contexto y aprende del histórico",
      "Gestiona excepciones con criterio definido",
      "Se adapta a casos nuevos dentro de su dominio",
    ],
    layersTitle: "Las tres capas de sofisticación",
    layers: [
      ["Nivel 1, Copilot", "Asiste al vendedor: sugiere respuestas, busca información, prepara briefings. El humano decide y ejecuta."],
      ["Nivel 2, Agente con tareas acotadas", "Ejecuta autónomamente dentro de un alcance definido: calificar leads, hacer seguimiento, enriquecer datos. El humano supervisa."],
      ["Nivel 3, representante de ventas digital de extremo a extremo", "Gestiona el ciclo completo desde señal hasta reunión agendada. Opera sin intervención humana salvo en escalados. Solo el ~3% de implementaciones llega aquí."],
    ],
    agentWashTitle: "El problema del agentwashing",
    agentWashText: "Gartner identifica que solo ~130 de los miles de proveedores que usan el término \"agente\" tienen capacidades genuinamente distintas a automatización con IA. Antes de comprar cualquier plataforma, pide ver qué hace el sistema cuando el prospecto responde algo inesperado. Si no puede manejarlo, no es un agente.",
  },
  s3: {
    heading: "2. El mercado en números",
    intro: "El contexto importa. Estos no son números de analistas entusiastas, son las señales que indican por qué equipos conservadores están empezando a moverse.",
    stats: [
      { stat: "$4.4B", label: "Mercado representantes de ventas IA en 2025" },
      { stat: "$15–18B", label: "Proyección para 2030" },
      { stat: "46.3%", label: "crecimiento anual proyectado del sector" },
      { stat: "$211B", label: "Inversión global en IA empresarial, 2025" },
    ],
    paradoxTitle: "La paradoja de la adopción",
    paradox: [
      "El 88% de los equipos de ventas B2B ya usa alguna forma de IA, pero solo el 4% tiene datos lo suficientemente limpios para que funcione bien.",
      "Gartner proyecta que más del 40% de los proyectos de IA iniciados en 2025-2026 se cancelarán antes de producción, principalmente por problemas de calidad de datos y expectativas mal gestionadas.",
      "El dinero de riesgo lo confirma: 11x.ai levantó $76M, Regie.ai $50.8M, Artisan $39–46M en los últimos 18 meses. Pero la mayoría de esas empresas venden herramientas, no resultados.",
    ],
    statsNote: "Cifras en dólares (USD). Fuentes: ResearchAndMarkets, Gartner, McKinsey",
    statsNoteLink: "ver fuentes completas",
    roundsTitle: "Lo que dice el dinero",
    rounds: "Las rondas de financiación reflejan donde está la apuesta, no donde está la ejecución. La oportunidad real no está en construir las herramientas, está en saber implementarlas. La mayoría de empresas que adoptan IA lo hacen sin un proceso claro. Ese es el gap.",
  },
  s4: {
    heading: "3. ROI real: lo que dicen los datos",
    intro: "Los titulares dicen que la IA reduce costes un 85%. La realidad es más matizada, y más interesante.",
    stats: [
      { stat: "$39", label: "Coste por lead con representante de ventas IA" },
      { stat: "$262", label: "Coste por lead con representante de ventas humano" },
      { stat: "3.2 meses", label: "Tiempo medio de recuperación de inversión" },
      { stat: "21×", label: "Más probabilidad de cualificar si respondes en <5 min" },
    ],
    nuanceTitle: "Los matices que los titulares no cuentan",
    nuances: [
      "La tasa de conversión lead → reunión es 21.3% para representantes de ventas humanos vs 8.2% para agentes de IA puro. Los agentes son mejores en volumen y velocidad; los humanos siguen ganando en conversión.",
      "Bain reporta +30% en tasas de cierre cuando los agentes gestionan la calificación y el resumen previo a la llamada mientras el humano cierra.",
      "El caso SaaStr es el más citado: $5M de pipeline generado, $2.4M cerrados en 8 meses. Pero requirió 15–20 horas semanales de supervisión senior. No funciona sin supervisión activa.",
    ],
    caseTitle: "El caso SaaStr en detalle",
    caseText: "$5M de pipeline generado, $2.4M cerrados en 8 meses con un agente de ventas. ROI positivo y claro. Pero el equipo dedicó 15–20 horas semanales a supervisión, ajuste de instrucciones del agente y revisión de calidad. Los mejores resultados vienen cuando alguien del equipo interno domina la herramienta y la va afinando con el tiempo. No es una instalación, es un proceso de mejora continua.",
    statsNote: "Cifras en dólares (USD). Fuentes: Gartner, McKinsey, Qualified, HubSpot State of Sales 2025",
    statsNoteLink: "ver fuentes completas",
    highlight: "Los agentes son mejores que un representante de ventas promedio. No superan a tus mejores vendedores. El modelo que gana es el híbrido: agente que genera volumen y contexto, humano que construye relación y cierra.",
  },
  s5: {
    heading: "4. Los 5 agentes que necesitas",
    intro: "No empieces con todos. Empieza por el que resuelve el mayor punto de pérdida de ingresos en tu equipo ahora mismo.",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    resultLabel: "Resultado",
    agents: [
      {
        num: "01",
        title: "Agente de Prospección por Señales",
        problem: "Tu equipo contacta en frío. Tasa de respuesta: ~2%. Los mensajes son genéricos aunque digan que son personalizados.",
        solution: "Monitoriza señales de compra en LinkedIn (cambios de cargo, nuevas contrataciones, publicaciones sobre retos específicos), CRM y señales de intención en la web. Activa outreach en el momento de mayor receptividad con contexto real.",
        result: "Tasa de respuesta 5–8%. Caso Sendoso: 20% de respuesta en señales de alta intención. El timing lo cambia todo.",
      },
      {
        num: "02",
        title: "Lead Router Inbound",
        problem: "El lead inbound tarda 42–47 horas en recibir respuesta en la empresa media. Para entonces, el 50% ya contactó a otro proveedor.",
        solution: "Responde en menos de 60 segundos, cualifica con preguntas de contexto, agenda reunión y notifica al ejecutivo de cuentas con briefing completo. Sin intervención humana hasta el momento de la llamada.",
        result: "Caso Demandbase: 2× pipeline inbound con el mismo volumen de leads. La velocidad de respuesta, no la calidad del mensaje, es la variable más importante en inbound.",
      },
      {
        num: "03",
        title: "Agente Pre-Llamada",
        problem: "Antes de cada reunión, el ejecutivo de cuentas invierte 20–30 minutos preparando contexto. Ese tiempo se multiplica por cada meeting del pipeline.",
        solution: "Briefing automático: resumen de la empresa y sector, noticias de los últimos 7 días, perfil del contacto (LinkedIn, publicaciones recientes), posibles objeciones, preguntas sugeridas, estado del deal en CRM.",
        result: "+66% en tasa de cierre cuando el ejecutivo de cuentas llega preparado con contexto real vs contexto genérico. Cero tiempo de preparación manual.",
      },
      {
        num: "04",
        title: "Agente de Nurturing y Follow-up",
        problem: "El 80% de los deals muertos se pierden por falta de seguimiento, no porque el prospecto dijera que no. El equipo está ocupado con los calientes.",
        solution: "Secuencias de follow-up personalizadas según el contexto del deal, el comportamiento del prospecto y el momento del ciclo. Sabe cuándo escalar al humano y cuándo continuar.",
        result: "40% más pipeline recuperado. Caso consultora española B2B: tasa de respuesta en nurturing del 45% al 78% tras implementar secuencias adaptativas.",
      },
      {
        num: "05",
        title: "Agente de Sales Intelligence",
        problem: "Los deals complejos requieren análisis que nadie hace porque tarda horas: análisis competitivo, mapa de quién decide, y las ocho preguntas clave de cada venta, quién tiene autoridad para firmar, qué presupuesto hay, contra quién compites, qué métricas importan al cliente, qué pasa si no hace nada, y quién dentro de la empresa quiere que ganes.",
        solution: "Genera automáticamente el análisis completo del deal: situación competitiva, mapa de quién tiene poder de decisión, señales de urgencia o riesgo, y respuestas a las preguntas clave de la venta. Antes de cada reunión importante.",
        result: "Los ejecutivos de cuentas que usan este agente cierran deals 22% más rápido según datos internos de usuarios de Gong + n8n. El análisis que antes no ocurría, ahora ocurre siempre.",
      },
    ],
  },
  s6: {
    heading: "5. El modelo híbrido gana",
    intro: "Los datos son inequívocos: ni los equipos que ignoran la IA ni los que la adoptan sin criterio ganan. El modelo que consistentemente supera a ambos es el híbrido.",
    thModel: "Modelo",
    thPipeline: "Pipeline generado",
    thWinRate: "Win rate",
    rows: [
      ["Solo humano (base)", "1×", "Base"],
      ["Solo IA (agente puro)", "1.5–2×", "–13pp"],
      ["Híbrido (IA + humano)", "2.8×", "+35pp"],
    ],
    stat1: "Solo el 22% de las empresas ha reemplazado representantes de ventas completamente por IA.",
    stat2: "El 55% usa modelo híbrido y reporta los mejores resultados.",
    stat3: "El 23% restante no ha adoptado IA significativa, y está perdiendo cuota.",
    statsNote: "Fuentes: McKinsey Global Institute, HubSpot State of Sales 2025, Gartner Sales Technology Report 2025",
    statsNoteLink: "ver fuentes completas",
    gartnerTitle: "La advertencia de Gartner",
    gartnerText: "Para 2028, los agentes de IA superarán a vendedores humanos en ratio 10:1 en cuanto a volumen gestionado. Pero Gartner también advierte que menos del 40% de las empresas reportará mejora real en productividad de ventas, porque la mayoría implementará sin proceso. El ratio de agentes por humano no es el problema. El diseño del proceso es el problema.",
  },
  s7: {
    heading: "6. Cómo implementar: las 3 fases",
    intro: "La tecnología es la parte más fácil. El diseño del proceso, la limpieza de datos y la gestión del cambio son donde el 40% de los proyectos muere.",
    phases: [
      {
        num: "01",
        title: "Preparación",
        weeks: "2–4 semanas",
        desc: "Define un objetivo único y medible: no 'mejorar ventas' sino 'reducir tiempo de respuesta inbound a <60s' o 'aumentar reuniones de prospección outbound en 30%'. Audita el CRM: si más del 30% de los registros tienen campos clave vacíos, el primer sprint es de limpieza de datos, no de IA. Revisa las obligaciones legales según tu mercado: GDPR en Europa (requiere base legal para procesar datos de contacto), CAN-SPAM y TCPA en EE.UU. (regula email comercial y mensajes automatizados, con opt-out obligatorio y restricciones en llamadas y SMS), CCPA en California (derechos de privacidad similares al GDPR para residentes del estado), y legislación local en México, Colombia y España para comunicaciones comerciales automatizadas.",
      },
      {
        num: "02",
        title: "Fase 1 de validación",
        weeks: "4–8 semanas",
        desc: "Implementa con el 10–20% del equipo, no con todos. Define las reglas de traspaso entre agente y humano: qué hace el agente solo, qué escala, y en cuánto tiempo debe responder un humano. Métricas mínimas desde el día 1: volumen de actividad, tasa de conversión en cada paso del funnel, coste por resultado. Sin datos de línea base, no puedes saber si el agente está funcionando.",
      },
      {
        num: "03",
        title: "Escalado",
        weeks: "8–12 semanas",
        desc: "Amplía la autonomía del agente donde ha demostrado precisión. No amplíes el alcance y la autonomía al mismo tiempo. Introduce el segundo o tercer agente solo cuando el primero esté estable y en producción. La arquitectura multi-agente es poderosa, y el punto de mayor riesgo si se hace antes de tiempo.",
      },
    ],
    modalitiesTitle: "Dos modalidades de trabajo",
    modality1Title: "Instalación (compra única)",
    modality1Desc: "El agente queda en tu infraestructura. Lo operas tú. Mayor control y menor coste a largo plazo. Requiere capacidad interna para mantener y mejorar.",
    modality2Title: "AaaS, Agent as a Service",
    modality2Desc: "Servicio gestionado mensual. Nosotros operamos, monitorizamos y mejoramos continuamente. Ideal si no tienes equipo técnico interno o quieres resultados desde el primer mes.",
    highlight: "Si en 30–60 días no puedes contestar qué métrica cambió, cuánto y a qué coste, no tienes un agente, tienes un experimento caro. El éxito de la implementación se mide antes de escribir una sola línea de código.",
  },
  s8: {
    heading: "7. Los 4 errores que matan proyectos de IA en ventas",
    intro: "No son errores de tecnología. Son errores de criterio. Y los hemos visto en equipos de todos los tamaños.",
    errors: [
      {
        title: "Automatizar un proceso que no funciona manualmente",
        desc: "Si tu proceso de prospección manual no convierte, el agente no lo va a arreglar, lo va a escalar a mayor velocidad. El resultado es más actividad con los mismos malos resultados, pero más visible. Primero valida el proceso con humanos. Cuando funciona manualmente, automatiza e implementa agentes.",
      },
      {
        title: "CRM con datos sucios",
        desc: "El 76% de las empresas admite que sus datos de CRM son imprecisos. El 37% reconoce que los propios representantes fabrican datos para cumplir KPIs. Un agente sobre datos sucios produce resultados sucios más rápido. El primer sprint de cualquier proyecto serio es auditoría de datos, no demos de IA.",
      },
      {
        title: "Expectativa de autonomía total desde el día uno",
        desc: "Los representantes de ventas IA puros tienen entre 50–70% de churn anual, no porque la tecnología falle, sino porque las expectativas se gestionan mal. Los agentes requieren supervisión activa, ajuste de instrucciones del agente y revisión continua, especialmente en los primeros 90 días. Operar sin supervisión no funciona.",
      },
      {
        title: "Comprar herramientas sin estrategia",
        desc: "Clay, Apollo, Instantly, Salesloft, Outreach, 11x, Artisan, cada semana aparece una nueva plataforma que promete resultados inmediatos. El problema no es la herramienta. Es no tener claro qué proceso quieres mejorar, qué métricas vas a medir y quién va a operar el sistema internamente. La herramienta es el último paso, no el primero.",
      },
    ],
  },
  s9: {
    heading: "8. El mercado hispano: la mayor oportunidad sin explotar",
    intro: "Mientras el debate sobre agentes de IA se da principalmente en inglés, el mercado hispanohablante combina alta adopción de tecnología con escasez de soluciones especializadas.",
    markets: [
      {
        flag: "🇪🇸",
        name: "España",
        desc: "El 70% de las empresas usa IA de forma diaria, pero solo el 21.6% tiene integración estratégica real. Kit Digital financia hasta 19.000€ para soluciones de IA. El gap entre adopción táctica y estratégica es la oportunidad.",
        source: "IndesIA Spain 2025, OECD AI Policy Observatory",
      },
      {
        flag: "🇲🇽",
        name: "México",
        desc: "El 72% de empresas medianas ya adoptó IA en alguna forma, pero solo el 14% tiene capacidades reales de agentes autónomos. WhatsApp domina la comunicación B2B, los agentes que integran WhatsApp como canal principal superan a los que solo hacen email.",
        source: "EY LATAM Digitalization Report, Stanford SLEI",
      },
      {
        flag: "🇨🇴",
        name: "Colombia",
        desc: "El 22% de empresas colombianas ya implementó IA en más del 40% de sus procesos, el doble del promedio regional latinoamericano. Mercado con mayor velocidad de adopción en la región.",
        source: "EY LATAM Digitalization Report",
      },
      {
        flag: "🇺🇸",
        name: "EE.UU. hispano",
        desc: "5M+ negocios hispanos. Tasa de adopción de IA al doble que empresas no hispanas en el mismo segmento. Cero agencias dedicadas que resuelvan ventas B2B con IA en español. La brecha es enorme.",
        source: "Stanford SLEI, US Small Business Administration",
      },
    ],
    sourceLabel: "Fuente:",
    sourceLinkLabel: "ver fuentes",
    highlight: "Quien construya la primera agencia de escala que resuelva ventas B2B con IA en español capturará un mercado enorme con competencia mínima. Nosotros ya lo estamos construyendo, trabajando con empresas de distintas industrias y países. Lo que vemos en el camino: las empresas más ágiles y con cultura tecnológica implementan más rápido, ajustan con más criterio y empiezan a ver resultados antes. No es solo velocidad, es la capacidad de aprender del agente y mejorarlo continuamente.",
  },
  s10: {
    heading: "9. Lo que viene: 5 tendencias que definirán los próximos 18 meses",
    intro: "No todo es especulación. Estas señales ya están en producción en los equipos más avanzados.",
    trends: [
      {
        num: "01",
        title: "Arquitecturas multi-agente con MCP y A2A",
        desc: "El protocolo MCP (Model Context Protocol) de Anthropic y el estándar A2A (Agent-to-Agent) están creando el primer lenguaje común para que agentes de distintos proveedores se coordinen. En ventas: el agente de prospección le pasa contexto al de preparación de reunión, que se lo pasa al de seguimiento. Sin intervención humana entre pasos. Nosotros hemos construido nuestro propio sistema de inteligencia comercial sobre esta arquitectura y estamos viendo algo que nos sorprende: cuando el agente entiende bien al prospecto en cada etapa, la conversión no termina en el cierre. El cliente satisfecho se convierte en alguien que quiere seguir trabajando contigo y que te recomienda. El pipeline se alimenta solo.",
      },
      {
        num: "02",
        title: "Voice AI entra en el proceso comercial",
        desc: "El mercado de Voice AI alcanzará $126B antes de 2030. Los agentes de voz actuales responden en 500–800ms, suficientemente rápido para conversaciones naturales. Los primeros casos de uso en ventas B2B no son llamadas en frío (ahí sigue ganando el humano) sino calificación inbound y seguimiento de leads de bajo ticket.",
      },
      {
        num: "03",
        title: "Cobrar por resultados reemplaza el pago por licencia",
        desc: "El modelo de cobrar una tarifa fija por usuario, sin importar los resultados, cayó del 21% al 15% del mercado en 18 meses. El modelo que crece: cobrar por reunión agendada, por deal calificado, por pipeline generado. Alinea incentivos correctamente. Obliga a los proveedores a mejorar la tecnología en lugar de vender licencias, y a mantener el agente actualizado con las mejores herramientas disponibles para que los resultados mejoren con el tiempo.",
      },
      {
        num: "04",
        title: "CRMs con IA nativa redefinen el stack",
        desc: "Salesforce Agentforce, HubSpot Breeze y Microsoft Copilot for Sales no son features, son apuestas de plataforma. GPT-5 integrado nativamente en el CRM cambia qué tiene sentido construir por separado. El stack de ventas se va a consolidar. Las herramientas punto-a-punto que no se integren van a desaparecer.",
      },
      {
        num: "05",
        title: "GEO redefine cómo llegan los leads B2B",
        desc: "El 60% de las búsquedas ya son zero-click, el usuario encuentra la respuesta en la SERP o en el resumen de IA sin visitar el sitio. ChatGPT, Perplexity y Google AI Overviews generan recomendaciones de proveedores. Las empresas que optimicen para ser citadas por IA (GEO) ganarán pipeline orgánico que las que solo hacen SEO tradicional no ven.",
      },
    ],
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cuánto cuesta implementar un agente de IA para ventas?",
        a: "Depende del alcance. Un agente básico (prospección o lead routing) puede implementarse en 2–3 semanas por €3.000–€8.000 en modalidad de instalación (el agente es tuyo). El modelo AaaS parte de €1.500/mes e incluye operación, iteraciones y soporte continuo. Los costes de uso de los modelos de IA suelen ser €50–€300/mes según volumen.",
      },
      {
        q: "¿Los agentes reemplazan al equipo de ventas?",
        a: "No. Eliminan el trabajo mecánico: investigación, enriquecimiento de datos, redacción de mensajes, seguimientos. El equipo se ocupa de lo que solo ellos pueden hacer: construir confianza, gestionar objeciones complejas, cerrar. El modelo que gana consistentemente es el híbrido: agente genera volumen y contexto, humano cierra.",
      },
      {
        q: "¿Cuánto tiempo tarda la implementación?",
        a: "Un agente bien definido tarda 2–6 semanas desde el inicio del proyecto hasta producción. La variable más importante no es la tecnología sino la calidad de los datos de entrada y la claridad del proceso. Si el proceso no está documentado, la implementación se alarga.",
      },
      {
        q: "¿Qué herramientas necesito tener antes?",
        a: "Lo mínimo viable: un CRM con datos medianamente limpios y un dominio de email con buena reputación. No necesitas n8n, Clay ni ninguna herramienta específica antes de empezar, eso forma parte del diseño de la solución.",
      },
      {
        q: "¿Los agentes funcionan en español?",
        a: "Sí, sin pérdida de calidad relevante. Claude y GPT-4o generan mensajes en español de la misma calidad que en inglés. Todos nuestros agentes para el mercado hispano operan en español nativo, incluyendo integración con WhatsApp para México y Colombia.",
      },
      {
        q: "¿Qué pasa si no tengo CRM?",
        a: "Podemos empezar con Google Sheets o Notion como punto de partida. Sin embargo, si tienes más de 3 personas en el equipo comercial, el primer paso real debería ser adoptar un CRM básico (HubSpot free es suficiente). Un agente sobre datos desorganizados produce resultados desorganizados.",
      },
      {
        q: "¿Qué es el modelo AaaS?",
        a: "Agent as a Service: en lugar de una instalación única, nosotros operamos, monitorizamos y mejoramos el agente continuamente como servicio mensual. Incluye ajuste de instrucciones del agente, revisión de calidad de outputs, iteraciones según resultados y soporte directo. Ideal para equipos sin capacidad técnica interna o que quieren resultados desde el mes 1.",
      },
      {
        q: "¿Cómo mido el ROI de un agente?",
        a: "Define la métrica antes de implementar: coste por lead, tiempo de respuesta, tasa de conversión en cada etapa, reuniones agendadas, pipeline generado. Mide línea base antes del agente durante 30 días. Compara después. Si en 60 días no puedes responder qué métrica cambió y cuánto, el problema es de definición, no de tecnología.",
      },
    ],
  },
  cta: {
    badge: "Siguiente paso",
    heading: "¿Listo para implementar tu primer agente?",
    sub: "En una sesión de 30 minutos identificamos el caso de uso con mayor ROI para tu equipo específico y te damos un plan de implementación concreto, sin compromiso.",
    ctaPrimary: "Agenda una consultoría gratuita",
    ctaSecondary: "Haz el Test de Madurez IA →",
  },
  sourcesTitle: "Fuentes y metodología",
  sourcesText:
    "Esta guía sintetiza datos de McKinsey Global Institute, Gartner Sales Technology Report 2025, Bain & Company B2B Sales AI Study, Forrester Research, ResearchAndMarkets AI SDR Market Report, SaaStr Annual 2025, Qualified Pipeline Report, UserGems Intent Data Research, Leads at Scale Conversion Study, Validity CRM Data Health Report 2025, OECD AI Policy Observatory, IndesIA Spain 2025, Stanford Social Learning & Education Institute, EY LATAM Digitalization Report y datos propios de implementaciones de Verymuch.ai, cruzados con Claude, ChatGPT y Gemini para verificación y triangulación.",
  footer: { home: "Inicio", privacy: "Privacidad", terms: "Términos" },
};

const en: PageContent = {
  meta: {
    title: "AI Agents for B2B Sales: Complete Guide 2026 | Verymuch.ai",
    description:
      "What AI agents for B2B sales are, how they work, what ROI they generate, and how to implement them. Data from McKinsey, Gartner, Bain and 80+ verified sources.",
    ogTitle: "AI Agents for B2B Sales: Complete Guide 2026",
    ogDescription:
      "What they are, how they work, what ROI they generate and how to implement them. Crossing McKinsey, Gartner, Bain and 80+ verified sources.",
    twitterDesc: "Complete guide to AI agents for B2B sales. Real data, no empty theory.",
    ogLocale: "en_US",
  },
  breadcrumb: { home: "Home", guide: "Guide", page: "AI Agents for B2B Sales" },
  jsonld: {
    articleHeadline: "AI Agents for B2B Sales: Complete Guide 2026",
    articleDescription:
      "What AI agents for B2B sales are, how they work, what ROI they generate, and how to implement them. Data from McKinsey, Gartner, Bain and 80+ verified sources.",
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
    sub: "Real data. No empty theory. Crossing McKinsey, Gartner, Bain and 80+ verified sources with what we actually build and deploy.",
    by: "By",
    date: "March 22, 2026",
    readTime: "18 min read",
  },
  toc: {
    label: "In this article",
    items: [
      { id: "que-es",          label: "What is an AI agent (and what it isn't)" },
      { id: "mercado",         label: "The market in numbers" },
      { id: "roi",             label: "Real ROI: what the data says" },
      { id: "5-agentes",       label: "The 5 agents you need" },
      { id: "modelo-hibrido",  label: "The hybrid model wins" },
      { id: "implementar",     label: "How to implement: the 3 phases" },
      { id: "errores",         label: "The 4 mistakes that kill projects" },
      { id: "mercado-hispano", label: "The Hispanic market: the biggest opportunity" },
      { id: "tendencias",      label: "What's coming next" },
      { id: "faq",             label: "Frequently asked questions" },
    ],
  },
  intro: {
    p1: "Why didn't Uber come from the transportation industry? Why wasn't Airbnb founded by a hotel chain? The answer is always the same: established companies are so busy optimizing what they already have that they don't see disruption until it runs them over. In 2026, that disruption has a specific name in B2B sales: AI agents.",
    p2: "We're not talking about chatbots that answer FAQs or automations that move leads between pipeline stages. An AI sales agent researches prospects in real time, writes personalized outreach with actual context, qualifies leads according to criteria you define, follows up with judgment, and does all of this while your team sleeps. The difference isn't one of speed. It's one of nature.",
    p3: "This guide crosses three independent research streams, data from McKinsey, Gartner, Bain, Forrester and 80+ verified sources with what we actually build and deploy for B2B teams in Spain, Mexico, Colombia and the US Hispanic market. This isn't theory. It's what works.",
    sources: "Crossing McKinsey, Gartner, Bain, Forrester, ResearchAndMarkets, SaaStr, Stanford SLEI, EY LATAM, IndesIA and 80+ verified sources.",
  },
  s2: {
    heading: "1. What is an AI sales agent (and what it isn't)",
    p1: "The industry has a serious vocabulary problem. Everything is called 'AI' and everything is called 'agent.' Gartner calls it agentwashing: of the thousands of vendors claiming agentic capabilities, only ~130 have something genuinely different from automation with an AI model on top.",
    p2: "The real difference is in the architecture:",
    tradTitle: "Traditional automation",
    tradItems: [
      "Executes fixed rules: IF-THEN",
      "No context or memory between steps",
      "Breaks on unforeseen cases",
      "Needs to be programmed for each variant",
    ],
    agentTitle: "AI Agent",
    agentItems: [
      "Reasons, plans and decides how to reach a goal",
      "Maintains context and learns from history",
      "Handles exceptions with defined criteria",
      "Adapts to new cases within its domain",
    ],
    layersTitle: "The three sophistication layers",
    layers: [
      ["Level 1, Copilot", "Assists the seller: suggests responses, finds information, prepares briefings. The human decides and executes."],
      ["Level 2, Agent with bounded tasks", "Executes autonomously within a defined scope: qualifying leads, following up, enriching data. The human supervises."],
      ["Level 3, End-to-end digital sales rep", "Manages the full cycle from signal to booked meeting. Operates without human intervention except on escalations. Only ~3% of implementations reach this level."],
    ],
    agentWashTitle: "The agentwashing problem",
    agentWashText: "Gartner identifies that only ~130 of the thousands of vendors using the term 'agent' have capabilities genuinely different from AI-enhanced automation. Before buying any platform, ask what the system does when a prospect responds with something unexpected. If it can't handle it, it isn't an agent.",
  },
  s3: {
    heading: "2. The market in numbers",
    intro: "Context matters. These aren't numbers from enthusiastic analysts, they're signals indicating why conservative teams are starting to move.",
    stats: [
      { stat: "$4.4B", label: "AI sales rep market in 2025" },
      { stat: "$15–18B", label: "Projection for 2030" },
      { stat: "46.3%", label: "Annual growth rate" },
      { stat: "$211B", label: "Global enterprise AI investment, 2025" },
    ],
    paradoxTitle: "The adoption paradox",
    paradox: [
      "88% of B2B sales teams already use some form of AI, but only 4% have data clean enough for it to work well.",
      "Gartner projects that more than 40% of AI projects started in 2025–2026 will be cancelled before production, mainly due to data quality issues and mismanaged expectations.",
      "Venture capital confirms the bet: 11x.ai raised $76M, Regie.ai $50.8M, Artisan $39–46M in the last 18 months. But most of those companies sell tools, not results.",
    ],
    statsNote: "Figures in USD. Sources: ResearchAndMarkets, Gartner, McKinsey",
    statsNoteLink: "see all sources",
    roundsTitle: "What the money says",
    rounds: "Funding rounds reflect where the bet is, not where the execution is. The real opportunity isn't building the tools, it's knowing how to implement them. Most companies adopting AI do so without a clear process. That's the gap.",
  },
  s4: {
    heading: "3. Real ROI: what the data says",
    intro: "Headlines say AI reduces costs by 85%. The reality is more nuanced, and more interesting.",
    stats: [
      { stat: "$39", label: "Cost per lead with AI sales rep" },
      { stat: "$262", label: "Cost per lead with human sales rep" },
      { stat: "3.2 months", label: "Average investment recovery time" },
      { stat: "21×", label: "More likely to qualify if you respond in <5 min" },
    ],
    nuanceTitle: "The nuances headlines miss",
    nuances: [
      "Lead → meeting conversion rate is 21.3% for human sales reps vs 8.2% for pure AI agents. Agents win on volume and speed; humans still win on conversion.",
      "Bain reports +30% win rates when agents handle qualification and pre-call briefing while humans close.",
      "The SaaStr case is the most cited: $5M pipeline generated, $2.4M closed in 8 months. But it required 15–20 hours of senior supervision per week. It requires active supervision.",
    ],
    caseTitle: "The SaaStr case in detail",
    caseText: "$5M in pipeline generated, $2.4M closed in 8 months with an AI sales rep agent. Clear, positive ROI. But the team spent 15–20 hours per week on supervision, prompt tuning, and quality review. The best results come when someone on the internal team masters the tool and keeps refining it over time. It's not an installation, it's a continuous improvement process.",
    statsNote: "Figures in USD. Sources: Gartner, McKinsey, Qualified, HubSpot State of Sales 2025",
    statsNoteLink: "see all sources",
    highlight: "Agents outperform the average sales rep. They don't beat your best performers. The winning model is hybrid: agent generates volume and context, human builds relationship and closes.",
  },
  s5: {
    heading: "4. The 5 agents you need",
    intro: "Don't start with all of them. Start with the one that solves the biggest revenue-loss point in your team right now.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    agents: [
      {
        num: "01",
        title: "Signal-Based Prospecting Agent",
        problem: "Your team reaches out cold. Response rate: ~2%. Messages are generic even when they claim to be personalized.",
        solution: "Monitors buying signals on LinkedIn (job changes, new hires, posts about specific challenges), CRM, and web-intent signals. Triggers outreach at peak receptivity with real context.",
        result: "Response rate 5–8%. Sendoso case: 20% response on high-intent signals. Timing changes everything.",
      },
      {
        num: "02",
        title: "Inbound Lead Router",
        problem: "The average inbound lead waits 42–47 hours for a response. By then, 50% have already contacted another vendor.",
        solution: "Responds in under 60 seconds, qualifies with context questions, books a meeting and notifies the account executive with a full briefing. No human intervention until the call.",
        result: "Demandbase case: 2× inbound pipeline with the same lead volume. Response speed, not message quality, is the most important variable in inbound.",
      },
      {
        num: "03",
        title: "Pre-Call Agent",
        problem: "Before each meeting, the account executive spends 20–30 minutes preparing context. That time multiplies across every pipeline meeting.",
        solution: "Automatic briefing: company and sector summary, last 7 days of news, contact profile (LinkedIn, recent posts), likely objections, suggested questions, CRM deal status.",
        result: "+66% win rate when the account executive arrives prepared with real context vs generic context. Zero manual prep time.",
      },
      {
        num: "04",
        title: "Nurturing & Follow-up Agent",
        problem: "80% of dead deals are lost due to lack of follow-up, not because the prospect said no. The team is busy with hot ones.",
        solution: "Personalized follow-up sequences based on deal context, prospect behavior, and cycle stage. Knows when to escalate to human and when to continue.",
        result: "40% more pipeline recovered. Spanish B2B consulting case: nurturing response rate from 45% to 78% after implementing adaptive sequences.",
      },
      {
        num: "05",
        title: "Sales Intelligence Agent",
        problem: "Complex deals need deep analysis that nobody does because it takes hours: competitive landscape, stakeholder map, and the eight deal-qualification questions every rep needs answered before a meeting, who has authority to sign, what budget exists, who you're competing against, what metrics matter to the buyer, what happens if they do nothing, and who inside the company wants you to win.",
        solution: "Automatically generates structured deal analysis: competitive landscape, decision-power map, urgency or risk signals, and answers to the eight deal-qualification questions. Before every important meeting.",
        result: "Account executives using this agent close deals 22% faster according to internal data from Gong + n8n users. The analysis that previously never happened now always happens.",
      },
    ],
  },
  s6: {
    heading: "5. The hybrid model wins",
    intro: "The data is unequivocal: neither teams that ignore AI nor those that adopt it without judgment win. The model that consistently outperforms both is the hybrid.",
    thModel: "Model",
    thPipeline: "Pipeline generated",
    thWinRate: "Win rate",
    rows: [
      ["Human only (baseline)", "1×", "Baseline"],
      ["AI only (pure agent)", "1.5–2×", "–13pp"],
      ["Hybrid (AI + human)", "2.8×", "+35pp"],
    ],
    stat1: "Only 22% of companies have fully replaced sales reps with AI.",
    stat2: "55% use the hybrid model and report the best results.",
    stat3: "The remaining 23% haven't adopted significant AI, and are losing market share.",
    statsNote: "Sources: McKinsey Global Institute, HubSpot State of Sales 2025, Gartner Sales Technology Report 2025",
    statsNoteLink: "see all sources",
    gartnerTitle: "Gartner's warning",
    gartnerText: "By 2028, AI agents will outnumber human sellers 10:1 in terms of managed volume. But Gartner also warns that fewer than 40% of companies will report actual improvement in sales productivity, because most will implement without process. The agent-to-human ratio isn't the problem. Process design is the problem.",
  },
  s7: {
    heading: "6. How to implement: the 3 phases",
    intro: "Technology is the easiest part. Process design, data cleanup, and change management are where 40% of projects die.",
    phases: [
      {
        num: "01",
        title: "Preparation",
        weeks: "2–4 weeks",
        desc: "Define one single measurable objective: not 'improve sales' but 'reduce inbound response time to <60s' or 'increase outbound prospecting meetings by 30%'. Audit the CRM: if more than 30% of records have key fields empty, the first sprint is data cleanup, not AI. Review your legal obligations by market: GDPR in Europe (requires a legal basis to process contact data), CAN-SPAM and TCPA in the US (regulates commercial email and automated messages, with mandatory opt-out and restrictions on automated calls and SMS), CCPA in California (privacy rights similar to GDPR for state residents), and local legislation in Mexico, Colombia and Spain for automated commercial communications.",
      },
      {
        num: "02",
        title: "Validation Phase 1",
        weeks: "4–8 weeks",
        desc: "Deploy with 10–20% of the team, not everyone. Define the handover rules between agent and human: what the agent does alone, what it escalates, and how quickly a human must respond. Minimum metrics from day 1: activity volume, conversion rate at each funnel step, cost per result. Without baseline data, you can't know if the agent is working.",
      },
      {
        num: "03",
        title: "Scaling",
        weeks: "8–12 weeks",
        desc: "Expand the agent's autonomy where it has proven precision. Don't expand scope and autonomy at the same time. Introduce the second or third agent only when the first is stable and in production. Multi-agent architecture is powerful, and the highest-risk point if done prematurely.",
      },
    ],
    modalitiesTitle: "Two engagement models",
    modality1Title: "Installation (one-time purchase)",
    modality1Desc: "The agent lives in your infrastructure. You operate it. More control and lower long-term cost. Requires internal capacity to maintain and improve.",
    modality2Title: "AaaS, Agent as a Service",
    modality2Desc: "Monthly managed service. We operate, monitor and continuously improve it. Ideal if you have no internal technical team or want results from month one.",
    highlight: "If after 30–60 days you can't answer which metric changed, by how much and at what cost, you don't have an agent, you have an expensive experiment. Implementation success is measured before writing a single line of code.",
  },
  s8: {
    heading: "7. The 4 mistakes that kill AI sales projects",
    intro: "These aren't technology mistakes. They're judgment mistakes. And we've seen them in teams of every size.",
    errors: [
      {
        title: "Automating a process that doesn't work manually",
        desc: "If your manual prospecting process doesn't convert, the agent won't fix it, it will scale it at higher speed. The result is more activity with the same bad results, but more visible. First validate the process with humans. When it works manually, automate and deploy agents.",
      },
      {
        title: "Dirty CRM data",
        desc: "76% of companies admit their CRM data is inaccurate. 37% acknowledge that reps themselves fabricate data to hit KPIs. An agent on dirty data produces dirty results faster. The first sprint of any serious project is data auditing, not AI demos.",
      },
      {
        title: "Expecting full autonomy from day one",
        desc: "pure AI sales reps see 50–70% annual churn, not because the technology fails, but because expectations are mismanaged. Agents require active supervision, prompt adjustment, and continuous review, especially in the first 90 days. Hands-off operation doesn't work.",
      },
      {
        title: "Buying tools without a strategy",
        desc: "Clay, Apollo, Instantly, Salesloft, Outreach, 11x, Artisan, every week a new platform promises immediate results. The problem isn't the tool. It's not being clear on which process you want to improve, which metrics you'll measure, and who will operate the system internally. The tool is the last step, not the first.",
      },
    ],
  },
  s9: {
    heading: "8. The Hispanic market: the biggest untapped opportunity",
    intro: "While the debate on AI agents happens mainly in English, the Spanish-speaking market combines high technology adoption with a scarcity of specialized solutions.",
    markets: [
      {
        flag: "🇪🇸",
        name: "Spain",
        desc: "70% of companies use AI daily, but only 21.6% have real strategic integration. Kit Digital funds up to €19,000 for AI solutions. The gap between tactical and strategic adoption is the opportunity.",
        source: "IndesIA Spain 2025, OECD AI Policy Observatory",
      },
      {
        flag: "🇲🇽",
        name: "Mexico",
        desc: "72% of mid-market companies already adopted AI in some form, but only 14% have real agentic capabilities. WhatsApp dominates B2B communication, agents that integrate WhatsApp as primary channel outperform email-only ones.",
        source: "EY LATAM Digitalization Report, Stanford SLEI",
      },
      {
        flag: "🇨🇴",
        name: "Colombia",
        desc: "22% of Colombian companies have already implemented AI in 40%+ of their processes, double the regional Latin American average. The fastest-adoption market in the region.",
        source: "EY LATAM Digitalization Report",
      },
      {
        flag: "🇺🇸",
        name: "US Hispanic",
        desc: "5M+ Hispanic businesses. AI adoption rate at twice that of non-Hispanic businesses in the same segment. Zero dedicated agencies solving B2B sales with AI in Spanish. The gap is enormous.",
      },
    ],
    sourceLabel: "Source:",
    sourceLinkLabel: "see all sources",
    highlight: "Whoever builds the first at-scale agency that solves B2B sales with AI in Spanish will capture an enormous market with minimal competition. We're already building it, working with companies across industries and countries. What we see along the way: the most agile, tech-forward companies implement faster, adjust with better judgment, and start seeing results sooner. It's not just speed, it's the ability to learn from the agent and keep improving it.",
  },
  s10: {
    heading: "9. What's coming: 5 trends that will define the next 18 months",
    intro: "This isn't speculation. These signals are already in production in the most advanced teams.",
    trends: [
      {
        num: "01",
        title: "Multi-agent architectures with MCP and A2A",
        desc: "Anthropic's MCP (Model Context Protocol) and the A2A (Agent-to-Agent) standard are creating the first common language for agents from different providers to coordinate. In sales: the prospecting agent passes context to the meeting-prep agent, which passes it to the follow-up agent. No human intervention between steps. We've built our own commercial intelligence system on this architecture and we're seeing something that surprises us: when the agent truly understands the prospect at every stage, conversion doesn't end at the close. The satisfied client becomes someone who wants to keep working with you and refers others. The pipeline feeds itself.",
      },
      {
        num: "02",
        title: "Voice AI enters the sales process",
        desc: "The Voice AI market will reach $126B before 2030. Current voice agents respond in 500–800ms, fast enough for natural conversations. The first B2B sales use cases aren't cold calls (humans still win there) but inbound qualification and low-ticket lead follow-up.",
      },
      {
        num: "03",
        title: "Results-based pricing replaces per-user flat fees",
        desc: "The flat per-user subscription model in sales software fell from 21% to 15% of the market in 18 months. The growing model: charging per meeting booked, per qualified deal, per pipeline generated. Correctly aligns incentives. Forces vendors to improve technology rather than sell licenses, and to keep the agent updated with the best available tools so results improve over time.",
      },
      {
        num: "04",
        title: "CRMs with native AI redefine the stack",
        desc: "Salesforce Agentforce, HubSpot Breeze and Microsoft Copilot for Sales aren't features, they're platform bets. GPT-5 natively integrated in the CRM changes what makes sense to build separately. The sales stack will consolidate. Point-to-point tools that don't integrate will disappear.",
      },
      {
        num: "05",
        title: "GEO redefines how B2B leads arrive",
        desc: "60% of searches are already zero-click, the user finds the answer in the SERP or AI summary without visiting the site. ChatGPT, Perplexity and Google AI Overviews generate vendor recommendations. Companies optimizing to be cited by AI (GEO) will win organic pipeline that SEO-only companies won't see.",
      },
    ],
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "How much does it cost to implement an AI sales agent?",
        a: "It depends on scope. A basic agent (prospecting or lead routing) can be implemented in 2–3 weeks for €3,000–€8,000 in installation mode (the agent is yours). The AaaS model starts at €1,500/month and includes operation, iterations and ongoing support. AI model running costs are typically €50–€300/month depending on volume.",
      },
      {
        q: "Do agents replace the sales team?",
        a: "No. They eliminate mechanical work: research, data enrichment, message drafting, follow-ups. The team focuses on what only they can do: build trust, handle complex objections, close. The consistently winning model is hybrid: agent generates volume and context, human closes.",
      },
      {
        q: "How long does implementation take?",
        a: "A well-defined agent takes 2–6 weeks from project start to production. The most important variable isn't the technology but the quality of input data and process clarity. If the process isn't documented, implementation takes longer.",
      },
      {
        q: "What tools do I need first?",
        a: "The minimum viable set: a CRM with reasonably clean data and an email domain with good reputation. You don't need n8n, Clay, or any specific tool before starting, that's part of the solution design.",
      },
      {
        q: "Do agents work in Spanish?",
        a: "Yes, without significant quality loss. Claude and GPT-4o generate messages in Spanish at the same quality as in English. All our agents for the Hispanic market operate in native Spanish, including WhatsApp integration for Mexico and Colombia.",
      },
      {
        q: "What if I don't have a CRM?",
        a: "We can start with Google Sheets or Notion as a starting point. However, if you have more than 3 people on the sales team, the real first step should be adopting a basic CRM (HubSpot free is sufficient). An agent on disorganized data produces disorganized results.",
      },
      {
        q: "What is the AaaS model?",
        a: "Agent as a Service: instead of a one-time installation, we operate, monitor and improve the agent continuously as a monthly service. Includes prompt adjustment, output quality review, result-driven iterations and direct support. Ideal for teams without internal technical capacity or those wanting results from month 1.",
      },
      {
        q: "How do I measure ROI from an agent?",
        a: "Define the metric before implementing: cost per lead, response time, conversion rate at each stage, meetings booked, pipeline generated. Measure baseline before the agent for 30 days. Compare afterward. If after 60 days you can't answer which metric changed and by how much, the problem is definition, not technology.",
      },
    ],
  },
  cta: {
    badge: "Next step",
    heading: "Ready to implement your first agent?",
    sub: "In a 30-minute session we identify the use case with the highest ROI for your specific team and give you a concrete implementation plan, no commitment.",
    ctaPrimary: "Book a free strategy call",
    ctaSecondary: "Take the AI Readiness Test →",
  },
  sourcesTitle: "Sources & methodology",
  sourcesText:
    "This guide synthesizes data from McKinsey Global Institute, Gartner Sales Technology Report 2025, Bain & Company B2B Sales AI Study, Forrester Research, ResearchAndMarkets AI SDR Market Report, SaaStr Annual 2025, Qualified Pipeline Report, UserGems Intent Data Research, Leads at Scale Conversion Study, Validity CRM Data Health Report 2025, OECD AI Policy Observatory, IndesIA Spain 2025, Stanford Social Learning & Education Institute, EY LATAM Digitalization Report, and Verymuch.ai's own implementation data, cross-verified using Claude, ChatGPT and Gemini.",
  footer: { home: "Home", privacy: "Privacy", terms: "Terms" },
};

const CONTENT: Record<string, PageContent> = { es, en };

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = CONTENT[locale] ?? CONTENT.es;
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
      style={{ background: "rgba(74,212,174,0.06)", borderColor: "rgba(74,212,174,0.18)" }}
    >
      <div className="text-2xl font-extrabold leading-none mb-2" style={{ color: "var(--accent-text)" }}>
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
      style={{ background: "rgba(245,160,64,0.06)", borderLeftColor: "var(--accent-warm)" }}
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
  const c = CONTENT[locale] ?? CONTENT.es;
  const canonicalUrl =
    locale === "en"
      ? `${BASE_URL}/en/guia/agentes-ia-ventas-b2b`
      : `${BASE_URL}/guia/agentes-ia-ventas-b2b`;

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
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    image: OG_IMAGE,
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
    itemListElement: c.jsonld.breadcrumb.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <HomeNav />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
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
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-xs" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="hover:underline transition-opacity hover:opacity-100 opacity-70">
              {c.breadcrumb.home}
            </Link>
            <span className="opacity-30">/</span>
            <span className="opacity-50">{c.breadcrumb.guide}</span>
            <span className="opacity-30">/</span>
            <span style={{ color: "var(--accent-text)" }}>{c.breadcrumb.page}</span>
          </nav>

          <p className="mb-4">
            <span className="badge-label" style={{ color: "var(--accent-text)" }}>{c.hero.badge}</span>
          </p>
          <h1
            className="font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem,4.5vw,2.8rem)", letterSpacing: "-0.025em" }}
          >
            {c.hero.h1Pre}
            <span className="bg-brand-gradient bg-clip-text text-transparent">{c.hero.h1Gradient}</span>
          </h1>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {c.hero.sub}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
            <span>{c.hero.by} <strong style={{ color: "var(--text-primary)" }}>Edwin Moreno</strong></span>
            <span className="opacity-30">·</span>
            <time dateTime={PUBLISHED}>{c.hero.date}</time>
            <span className="opacity-30">·</span>
            <span>{c.hero.readTime}</span>
          </div>
        </div>
      </header>

      <div className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">

          {/* ── TOC ─────────────────────────────────────────────────────── */}
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

          {/* ── Intro (no section heading) ──────────────────────────────── */}
          <div className="mb-16">
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.intro.p1}
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.intro.p2}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.intro.p3}
            </p>
          </div>

          {/* ── Section 1, Qué es ──────────────────────────────────────── */}
          <section id="que-es" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s2.heading}
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              {c.s2.p1}
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              {c.s2.p2}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <h3 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>{c.s2.tradTitle}</h3>
                <ul className="flex flex-col gap-2">
                  {c.s2.tradItems.map((t) => (
                    <li key={t} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span className="shrink-0 opacity-50">—</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "rgba(74,212,174,0.04)", borderColor: "rgba(74,212,174,0.2)" }}>
                <h3 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>{c.s2.agentTitle}</h3>
                <ul className="flex flex-col gap-2">
                  {c.s2.agentItems.map((t) => (
                    <li key={t} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span className="shrink-0" style={{ color: "var(--accent-text)" }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm font-bold mb-4" style={{ color: "var(--text-primary)" }}>{c.s2.layersTitle}</p>
            <div className="flex flex-col gap-3 mb-6">
              {c.s2.layers.map(([title, desc]) => (
                <div key={title} className="rounded-xl p-4 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-text)" }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-5 border-l-4" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)", borderLeftColor: "var(--accent-warm)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{c.s2.agentWashTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.s2.agentWashText}</p>
            </div>
          </section>

          {/* ── Section 2, Mercado ─────────────────────────────────────── */}
          <section id="mercado" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s3.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s3.intro}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {c.s3.stats.map((s) => <StatCard key={s.stat} stat={s.stat} label={s.label} />)}
            </div>
            <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s3.statsNote} ·{" "}
              <a href="#fuentes" className="hover:underline" style={{ color: "var(--accent-text)" }}>
                {c.s3.statsNoteLink} ↓
              </a>
            </p>
            <p className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>{c.s3.paradoxTitle}</p>
            <ul className="flex flex-col gap-3 mb-6">
              {c.s3.paradox.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(245,160,64,0.15)", color: "var(--accent-warm-text)" }}>!</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-xl p-5 border" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{c.s3.roundsTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.s3.rounds}</p>
            </div>
          </section>

          {/* ── Section 3, ROI ─────────────────────────────────────────── */}
          <section id="roi" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s4.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s4.intro}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {c.s4.stats.map((s) => <StatCard key={s.label} stat={s.stat} label={s.label} />)}
            </div>
            <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s4.statsNote} ·{" "}
              <a href="#fuentes" className="hover:underline" style={{ color: "var(--accent-text)" }}>
                {c.s4.statsNoteLink} ↓
              </a>
            </p>
            <p className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>{c.s4.nuanceTitle}</p>
            <ul className="flex flex-col gap-3 mb-6">
              {c.s4.nuances.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="shrink-0 mt-1" style={{ color: "var(--accent-text)" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-xl p-5 border" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{c.s4.caseTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.s4.caseText}</p>
            </div>
            <HighlightBox>{c.s4.highlight}</HighlightBox>
          </section>

          {/* ── Section 4, 5 Agents ────────────────────────────────────── */}
          <section id="5-agentes" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s5.heading}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {c.s5.intro}
            </p>
            <div className="flex flex-col gap-5">
              {c.s5.agents.map((agent) => (
                <div
                  key={agent.num}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-extrabold shrink-0 leading-none mt-0.5" style={{ color: "var(--accent-text)" }}>
                      {agent.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                        {agent.title}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          <span className="font-semibold" style={{ color: "var(--error)" }}>{c.s5.problemLabel}: </span>
                          {agent.problem}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{c.s5.solutionLabel}: </span>
                          {agent.solution}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          <span className="font-semibold" style={{ color: "var(--accent-text)" }}>{c.s5.resultLabel}: </span>
                          {agent.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 5, Hybrid model ────────────────────────────────── */}
          <section id="modelo-hibrido" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s6.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s6.intro}
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <th className="text-left py-3 pr-4 font-bold" style={{ color: "var(--text-primary)" }}>{c.s6.thModel}</th>
                    <th className="text-left py-3 pr-4 font-bold" style={{ color: "var(--text-secondary)" }}>{c.s6.thPipeline}</th>
                    <th className="text-left py-3 font-bold" style={{ color: "var(--accent-text)" }}>{c.s6.thWinRate}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.s6.rows.map(([model, pipeline, winRate]) => (
                    <tr key={model} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td className="py-3 pr-4 font-medium" style={{ color: "var(--text-primary)" }}>{model}</td>
                      <td className="py-3 pr-4" style={{ color: "var(--text-secondary)" }}>{pipeline}</td>
                      <td className="py-3" style={{ color: "var(--text-secondary)" }}>{winRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="flex flex-col gap-2 mb-6">
              {[c.s6.stat1, c.s6.stat2, c.s6.stat3].map((stat) => (
                <li key={stat} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="shrink-0 mt-1" style={{ color: "var(--accent-text)" }}>→</span>{stat}
                </li>
              ))}
            </ul>
            <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s6.statsNote} ·{" "}
              <a href="#fuentes" className="hover:underline" style={{ color: "var(--accent-text)" }}>
                {c.s6.statsNoteLink} ↓
              </a>
            </p>
            <div className="rounded-xl p-5 border" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{c.s6.gartnerTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.s6.gartnerText}</p>
            </div>
          </section>

          {/* ── Section 6, Implementar ─────────────────────────────────── */}
          <section id="implementar" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s7.heading}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {c.s7.intro}
            </p>
            <div className="flex flex-col gap-4 mb-8">
              {c.s7.phases.map((phase) => (
                <div
                  key={phase.num}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-extrabold leading-none" style={{ color: "var(--accent-text)" }}>
                      {phase.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{phase.title}</h3>
                      <p className="text-xs" style={{ color: "var(--accent-warm-text)" }}>{phase.weeks}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{phase.desc}</p>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 border-l-4"
              style={{ background: "var(--bg-secondary)", borderColor: "var(--border)", borderLeftColor: "var(--accent-text)" }}
            >
              <p className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>{c.s7.modalitiesTitle}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-text)" }}>{c.s7.modality1Title}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.s7.modality1Desc}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-warm-text)" }}>{c.s7.modality2Title}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.s7.modality2Desc}</p>
                </div>
              </div>
            </div>
            <HighlightBox>{c.s7.highlight}</HighlightBox>
          </section>

          {/* ── Section 7, Errores ─────────────────────────────────────── */}
          <section id="errores" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s8.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s8.intro}
            </p>
            <div className="flex flex-col gap-4">
              {c.s8.errors.map((error) => (
                <div
                  key={error.title}
                  className="rounded-xl p-5 border-l-4 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)", borderLeftColor: "var(--error)" }}
                >
                  <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>✕ {error.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{error.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 8, Mercado hispano ─────────────────────────────── */}
          <section id="mercado-hispano" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s9.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s9.intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {c.s9.markets.map((market) => (
                <div
                  key={market.name}
                  className="rounded-xl p-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <p className="text-xl mb-2">{market.flag}</p>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{market.name}</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{market.desc}</p>
                  <p className="text-xs" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
                    {c.s9.sourceLabel} {market.source} ·{" "}
                    <a href="#fuentes" className="hover:underline" style={{ color: "var(--accent-text)" }}>
                      {c.s9.sourceLinkLabel} ↓
                    </a>
                  </p>
                </div>
              ))}
            </div>
            <HighlightBox>{c.s9.highlight}</HighlightBox>
          </section>

          {/* ── Section 9, Tendencias ──────────────────────────────────── */}
          <section id="tendencias" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s10.heading}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {c.s10.intro}
            </p>
            <div className="flex flex-col gap-4">
              {c.s10.trends.map((trend) => (
                <div
                  key={trend.num}
                  className="rounded-xl p-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-lg font-extrabold shrink-0 leading-none mt-0.5" style={{ color: "var(--accent-text)" }}>
                      {trend.num}
                    </span>
                    <div>
                      <p className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>{trend.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{trend.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 10, FAQ ────────────────────────────────────────── */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.faq.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {c.faq.items.map((item) => (
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
                    <span className="shrink-0 group-open:rotate-180 transition-transform" style={{ color: "var(--accent-text)" }}>
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA ─────────────────────────────────────────────────────── */}
          <section id="cta" className="mb-12 scroll-mt-24">
            <div
              className="rounded-2xl p-8 text-center border"
              style={{
                background:
                  "radial-gradient(ellipse 120% 100% at 50% 0%, rgba(74,212,174,0.08) 0%, transparent 60%), var(--bg-secondary)",
                borderColor: "var(--border)",
              }}
            >
              <p className="mb-3">
                <span className="badge-label" style={{ color: "var(--accent-text)" }}>{c.cta.badge}</span>
              </p>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                {c.cta.heading}
              </h2>
              <p className="text-sm leading-relaxed max-w-md mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
                {c.cta.sub}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={GHL} target="_blank" rel="noopener noreferrer" className="btn-gradient text-sm">
                  {c.cta.ctaPrimary}
                </a>
                <a
                  href="/ai-readiness"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] text-sm font-semibold btn-outline-mint"
                >
                  {c.cta.ctaSecondary}
                </a>
              </div>
            </div>
          </section>

          {/* ── Sources ─────────────────────────────────────────────────── */}
          <div
            className="rounded-xl p-5 border"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <p className="text-xs font-bold mb-2" style={{ color: "var(--text-secondary)" }}>{c.sourcesTitle}</p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              {c.sourcesText}
            </p>
          </div>

        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
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
