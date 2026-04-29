import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import NewsletterForm from "@/components/NewsletterForm";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-03-29";
const OG_IMAGE = `${BASE_URL}/og_como_elegir_agencia_ia.png`;

type Props = { params: Promise<{ locale: string }> };

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatItem { stat: string; label: string; source: string }
interface CriterionItem { num: string; title: string; desc: string; question: string; questionLabel: string }
interface RedFlagItem { title: string; desc: string }
interface PricingRow { model: string; range: string; bestFor: string; risk: string }
interface FailureCaseItem { title: string; why: string; whyLabel: string; lesson: string; lessonLabel: string }
interface StepItem { num: string; title: string; timeframe: string; desc: string }
interface MarketItem { flag: string; name: string; desc: string }
interface FaqItem { q: string; a: string }
interface BreadcrumbItem { name: string; item: string }

interface PageContent {
  meta: {
    title: string; description: string;
    ogTitle: string; ogDescription: string; twitterDesc: string; ogLocale: string;
  };
  breadcrumb: { home: string; guide: string; page: string };
  jsonld: { articleHeadline: string; articleDescription: string; breadcrumb: BreadcrumbItem[] };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  toc: { label: string; items: { id: string; label: string }[] };
  intro: { p1: string; p2: string; p3: string };
  s1: {
    heading: string; intro: string;
    stats: StatItem[];
    p1: string; p2: string;
    quoteText: string; quoteSource: string;
    statsNote: string; statsNoteLink: string;
  };
  s2: {
    heading: string; intro: string;
    col1Title: string; col1Items: string[][];
    col2Title: string; col2Items: string[][];
    closingParagraph: string;
  };
  s3: {
    heading: string; intro: string;
    questionLabel: string;
    criteria: CriterionItem[];
  };
  s4: {
    heading: string;
    flags: RedFlagItem[];
  };
  s5: {
    heading: string;
    thModel: string; thRange: string; thBestFor: string; thRisk: string;
    rows: PricingRow[];
    tcoTitle: string; tcoText: string;
    sdrTitle: string; sdrText: string;
    vmHighlight: string; vmLinkLabel: string;
    statsNote: string; statsNoteLink: string;
  };
  s6: {
    heading: string; intro: string;
    cases: FailureCaseItem[];
  };
  s7: {
    heading: string;
    steps: StepItem[];
  };
  s8: {
    heading: string;
    markets: MarketItem[];
    regionalText: string;
  };
  faq: { heading: string; items: FaqItem[] };
  newsletter: { badge: string; heading: string; sub: string };
  cta: { badge: string; heading: string; sub: string; ctaPrimary: string; ctaSecondary: string };
  sourcesTitle: string;
  sourcesText: string;
  footer: { home: string; privacy: string; terms: string };
}

// ─── Bilingual content ────────────────────────────────────────────────────────

const es: PageContent = {
  meta: {
    title: "Cómo Elegir una Agencia de IA para tu Empresa: Guía Completa 2026 | VeryMuch.ai",
    description:
      "El 88% de los proyectos de IA fracasan. Esta guía te muestra exactamente qué evaluar, qué preguntar y qué red flags detectar antes de contratar una agencia de IA. Con datos de Gartner, Forrester, McKinsey y +60 fuentes verificadas.",
    ogTitle: "Cómo Elegir una Agencia de IA: Guía Completa 2026",
    ogDescription:
      "El 88% de los proyectos de IA fracasan. Qué evaluar, qué preguntar y qué red flags detectar antes de contratar una agencia de IA. +60 fuentes verificadas.",
    twitterDesc: "Guía para elegir agencia de IA. 7 criterios, 5 red flags, framework de evaluación. Datos reales.",
    ogLocale: "es_ES",
  },
  breadcrumb: { home: "Inicio", guide: "Guía", page: "Cómo elegir una agencia de IA" },
  jsonld: {
    articleHeadline: "Cómo Elegir una Agencia de IA para tu Empresa: Guía Completa 2026",
    articleDescription:
      "El 88% de los proyectos de IA fracasan. Esta guía te muestra exactamente qué evaluar, qué preguntar y qué red flags detectar antes de contratar una agencia de IA.",
    breadcrumb: [
      { name: "Inicio", item: BASE_URL },
      { name: "Guía", item: `${BASE_URL}/guia` },
      { name: "Cómo elegir una agencia de IA", item: `${BASE_URL}/guia/como-elegir-agencia-ia` },
    ],
  },
  hero: {
    badge: "Guía completa · 2026",
    h1: "Cómo elegir una agencia de IA para tu empresa: guía completa 2026",
    sub: "El 88% de los proyectos de IA fracasan. Esta guía cruza datos de Gartner, Forrester, McKinsey, MIT y más de 60 fuentes verificadas con lo que hemos aprendido implementando agentes en España, México, Colombia, Argentina, Uruguay y el mercado hispano de EE.UU.",
    by: "Por",
    date: "29 de marzo, 2026",
    readTime: "22 min de lectura",
  },
  toc: {
    label: "En este artículo",
    items: [
      { id: "mercado",    label: "El mercado en números" },
      { id: "dos-tipos",  label: "Los dos tipos de agencia" },
      { id: "criterios",  label: "Los 7 criterios que importan" },
      { id: "red-flags",  label: "Los 5 red flags que descalifican" },
      { id: "pricing",    label: "Modelos de pricing" },
      { id: "fracasos",   label: "Casos reales de fracaso" },
      { id: "framework",  label: "Framework de evaluación paso a paso" },
      { id: "regiones",   label: "El mercado por región" },
      { id: "faq",        label: "Preguntas frecuentes" },
      { id: "cta",        label: "Siguiente paso" },
    ],
  },
  intro: {
    p1: "¿Por qué las empresas que más invierten en inteligencia artificial son las que más fracasan? El MIT reveló que el 95% de los pilotos de IA empresariales no logran impacto medible en ingresos. La tasa de abandono de iniciativas de IA se disparó del 17% en 2024 al 42% en 2025. Y según datos de la industria, el 67% de las empresas en Estados Unidos reporta arrepentimiento severo con su proveedor de IA en los primeros 12 meses. El problema no es la tecnología — es quién la implementa y cómo se selecciona al partner.",
    p2: "El mercado global de consultoría de IA alcanzó entre $11 y $14 mil millones de dólares en 2025 y crece a una tasa anual del 21% (Grand View Research, Mordor Intelligence). Pero está saturado de agencias de marketing digital que se rebrandearon como \"consultoras de IA\" sin cambiar sus capacidades reales. Gartner lo llama agentwashing: de los miles de proveedores que dicen tener capacidades de agentes autónomos, solo unos 130 tienen algo genuinamente diferente a una automatización con un modelo de IA encima. Cuando el coste total de una implementación fallida llega a 3.2 veces el precio original cotizado, la selección del proveedor se convierte en la decisión más crítica del año.",
    p3: "Esta guía cruza datos de Gartner, Forrester, McKinsey, MIT, Carnegie Mellon y más de 60 fuentes verificadas con lo que nosotros mismos hemos aprendido implementando agentes de IA para equipos B2B en España, México, Colombia, Argentina, Uruguay y el mercado hispano de Estados Unidos. Si estás evaluando contratar una agencia de IA, léela antes de firmar cualquier contrato.",
  },
  s1: {
    heading: "1. El mercado en números",
    intro: "El mercado es enorme pero la tasa de fracaso también lo es. Estos datos contextualizan la decisión que estás por tomar.",
    stats: [
      { stat: "$11–14B", label: "Mercado global consultoría IA, 2025", source: "Grand View Research, Mordor Intelligence" },
      { stat: "88%",     label: "Tasa de fracaso de iniciativas de agentes IA", source: "Industry aggregate, 2025" },
      { stat: "42%",     label: "Proyectos de IA abandonados antes de producción", source: "Corporate AI initiative tracking, 2025" },
      { stat: "$340K",   label: "Coste promedio directo de un proyecto de IA fracasado", source: "Industry post-mortem analysis, 2025-2026" },
    ],
    p1: "Solo el 12% de los proyectos de IA llegan a producción (Gartner). El 91% de los ejecutivos mid-market reporta usar alguna forma de IA, pero la gran mayoría permanece atrapada en la fase de \"experimentación\" sin impacto real en el negocio. La paradoja es reveladora: el 88% de los equipos B2B ya usa alguna herramienta de IA, pero solo el 4% tiene datos lo suficientemente limpios para que funcione bien.",
    p2: "Las organizaciones que trabajan con consultores externos especializados reportan cumplir o superar sus expectativas de ROI en el 74% de los casos — una estadística que contrasta dramáticamente con las tasas de fracaso de iniciativas gestionadas internamente sin guía experta. Las alucinaciones de modelos de lenguaje por sí solas costaron a las empresas más de $67 mil millones en pérdidas durante 2024 (MIT NANDA Initiative). El gasto corporativo en IA se duplicará en 2026, pasando del 0.8% al 1.7% del total de ingresos (Gartner). Lo que está en juego no es si tu empresa va a invertir en IA — es si esa inversión va a generar retorno.",
    quoteText: "El 95% de los pilotos de IA empresariales no logran impacto medible en ingresos. La tolerancia corporativa para experimentos caros y localizados se ha desplomado.",
    quoteSource: "MIT NANDA Initiative",
    statsNote: "Cifras en USD. Fuentes: Grand View Research, Mordor Intelligence, Gartner, MIT",
    statsNoteLink: "ver fuentes completas",
  },
  s2: {
    heading: "2. Los dos tipos de agencia (y cuál necesitas)",
    intro: "El ecosistema de agencias de IA se divide en dos categorías fundamentales, cada una con ventajas y riesgos estructurales distintos. La elección correcta depende del tamaño de tu empresa, la complejidad de tu entorno regulatorio y tu presupuesto.",
    col1Title: "Consultoras globales",
    col1Items: [
      ["Tarifa", "$300–900 USD/hora. Implementaciones frecuentemente superan $500,000."],
      ["Ideal para", "Empresas reguladas (banca, salud, sector público), implementaciones enterprise complejas, roadmaps estratégicos multi-año."],
      ["Ventajas", "Frameworks de compliance robustos, capacidad de escala masiva, credenciales institucionales."],
      ["Desventajas", "Lento, burocrático, compromisos de capital enormes, capas de gestión que diluyen el acceso a expertos senior."],
    ],
    col2Title: "Agencias boutique especializadas",
    col2Items: [
      ["Tarifa", "$100–300 USD/hora. Proyectos desde $10,000."],
      ["Ideal para", "Empresas mid-market ($1M–$50M), equipos de 5–50 personas, implementaciones ágiles con time-to-value rápido."],
      ["Ventajas", "Acceso directo a fundadores y seniors, decisiones rápidas, precio accesible, especialización vertical."],
      ["Desventajas", "Requiere mayor escrutinio de profundidad técnica; algunas carecen de los fundamentos de compliance necesarios para escalar."],
    ],
    closingParagraph: "Para la gran mayoría de empresas mid-market hispanohablantes que necesitan IA en ventas y marketing, una agencia boutique especializada es la opción correcta — siempre que pase los 7 criterios de evaluación que describimos a continuación. El error más común es asumir que \"boutique\" significa \"menos capaz\"; en realidad, las mejores boutiques ofrecen profundidad técnica comparable a una consultora global en su nicho específico, con menos burocracia y a una fracción del coste.",
  },
  s3: {
    heading: "3. Los 7 criterios que importan",
    intro: "Estos son los 7 criterios que separan a un partner que puede transformar tus operaciones de uno que va a quemar tu presupuesto en un piloto que nunca llega a producción. Para cada criterio, incluimos la pregunta exacta que debes hacer en la primera reunión.",
    questionLabel: "Pregunta clave",
    criteria: [
      {
        num: "01",
        title: "Orquestación multi-agente, no herramientas aisladas",
        desc: "Para 2026, el 40% de las aplicaciones enterprise integrarán agentes de IA específicos (Gartner). La diferencia entre un proveedor elemental y uno enterprise-grade es su capacidad para diseñar ecosistemas donde múltiples agentes especializados colaboran: un agente de prospección pasa contexto al de cualificación, que lo pasa al de seguimiento. Sin intervención humana entre pasos. Una agencia que solo ofrece instalar un bot de email o una interfaz de chat está vendiendo automatización superficial, no orquestación. Si quieres profundizar en qué es realmente un agente de IA para ventas, consulta nuestra guía completa de agentes de IA para ventas B2B.",
        question: "¿Cómo se comunican tus agentes entre sí cuando un lead pasa de una etapa a otra del funnel? Si no tienen respuesta clara, están vendiendo herramientas sueltas, no un sistema.",
        questionLabel: "Pregunta clave",
      },
      {
        num: "02",
        title: "Profundidad real en plataformas (no \"somos agnósticos\")",
        desc: "Toda agencia dice ser \"agnóstica de plataforma\". Pero HubSpot Breeze y Salesforce Agentforce requieren capacidades técnicas completamente distintas. Una agencia competente recomienda la plataforma correcta basándose en la madurez de datos del cliente, no en la que le da mayor comisión.",
        question: "¿Cuántas implementaciones de [mi CRM] han completado en los últimos 12 meses y qué métricas de negocio movieron?",
        questionLabel: "Pregunta clave",
      },
      {
        num: "03",
        title: "Obsesión por la calidad de datos (el criterio que predice el éxito)",
        desc: "El 43% de las organizaciones cita la calidad de datos como el obstáculo principal para el éxito de IA. Un partner serio dedicará entre el 50% y 70% del timeline y presupuesto estrictamente a preparación de datos — extracción, normalización y gobernanza — antes de desplegar un solo modelo.",
        question: "¿Qué porcentaje del proyecto dedicas a auditoría y limpieza de datos antes de construir? Si dicen menos del 30%, red flag seria.",
        questionLabel: "Pregunta clave",
      },
      {
        num: "04",
        title: "Explicabilidad y transparencia (no \"cajas negras\")",
        desc: "Con el EU AI Act en vigor desde 2026 y multas de hasta €35 millones para sistemas de alto riesgo no conformes, los sistemas que operan como cajas negras representan un riesgo legal real. La agencia debe implementar attribution de datos de entrenamiento, audit trails completos y contestabilidad — la capacidad de los humanos de cuestionar y corregir decisiones algorítmicas.",
        question: "Si tu agente descalifica un lead o toma una decisión autónoma, ¿mi equipo puede ver exactamente por qué y corregirlo?",
        questionLabel: "Pregunta clave",
      },
      {
        num: "05",
        title: "Referencias en producción, no demos impresionantes",
        desc: "Cualquiera puede hacer una demo espectacular. Lo que importa es: ¿tienen sistemas funcionando en producción real, con métricas medibles, durante más de 6 meses? La distancia entre un piloto y producción es donde el 46% de los POCs muere. Carnegie Mellon demostró que los agentes autónomos fallan en aproximadamente el 70% de las tareas multi-paso en entornos de oficina.",
        question: "Dame 2–3 clientes donde el sistema lleve más de 6 meses en producción y muéstrame las métricas de negocio que movió.",
        questionLabel: "Pregunta clave",
      },
      {
        num: "06",
        title: "Transferencia de conocimiento, no dependencia permanente",
        desc: "Un sello distintivo de prácticas predatorias en consultoría es la creación deliberada de dependencias permanentes: sistemas propietarios que ocultan la lógica, sin acceso al código fuente, y retainers caros por ajustes menores. La propuesta debe detallar explícitamente procedimientos de handoff, documentación completa y programas de training para que el equipo interno pueda mantener y optimizar el sistema.",
        question: "¿Qué documentación me entregas? ¿Mi equipo puede operar y mantener el sistema sin ustedes?",
        questionLabel: "Pregunta clave",
      },
      {
        num: "07",
        title: "Monitoreo y mantenimiento continuo (no \"instalar y listo\")",
        desc: "Los modelos de IA se degradan silenciosamente con el tiempo por cambios en distribución de datos, dinámicas de mercado y comportamiento de usuarios. El partner correcto establece protocolos semanales de detección de drift, calendarios trimestrales de reentrenamiento y supervisión humana continua para predicciones de baja confianza.",
        question: "¿Qué protocolo tienen para detectar degradación del modelo y con qué frecuencia reentrenan?",
        questionLabel: "Pregunta clave",
      },
    ],
  },
  s4: {
    heading: "4. Los 5 red flags que descalifican",
    flags: [
      {
        title: "Garantizan resultados antes de auditar tus datos",
        desc: "Cualquier agencia que promete \"95% de precisión\" o \"10x eficiencia\" sin haber visto tu CRM, tus datos ni tus procesos, está adivinando o mintiendo. Las soluciones cookie-cutter son responsables del 34% de los fracasos por scope creep. Los ecosistemas B2B son idiosincráticos — lo que funciona en ciberseguridad enterprise puede alienar completamente a compradores en manufactura industrial.",
      },
      {
        title: "No pueden explicar cómo funciona su sistema en lenguaje de negocio",
        desc: "Si la agencia se esconde detrás de jerga técnica, o si todo es \"propietario\" y no muestran arquitectura, hay dos posibilidades: no entienden lo suficiente para explicarlo simple, o están ocultando la fragilidad de su sistema. Una agencia que descarta preguntas sobre model drift o mitigación de alucinaciones está demostrando una ausencia peligrosa de experiencia en producción.",
      },
      {
        title: "Saltan directo a desarrollo sin hacer discovery",
        desc: "Las agencias que no hacen un sprint de prototipo de 4 semanas o una auditoría de datos antes de construir caen en el modo \"big bang\" — el mismo que causó $8 millones en ventas perdidas cuando un retailer desplegó IA en 200 ubicaciones sin piloto. El 46% de los POCs se descartan cuando se ignoran protocolos de testing por fases.",
      },
      {
        title: "No tienen plan post-lanzamiento",
        desc: "Los modelos se degradan. Los datos cambian. El mercado se mueve. Si la propuesta termina en \"deployment\" sin protocolos de retraining, drift detection ni monitoreo, estás comprando un sistema con fecha de caducidad invisible. La acumulación silenciosa de alucinaciones costó $67 mil millones en 2024.",
      },
      {
        title: "Crean dependencia permanente en lugar de transferir conocimiento",
        desc: "Si ocultan el código fuente, no dan acceso a configuraciones, y cada ajuste menor requiere un retainer caro, están arquitectando una relación extractiva. Exige en el contrato: acceso completo al source code, documentación exhaustiva, y cláusulas de transferencia de IP en caso de terminación.",
      },
    ],
  },
  s5: {
    heading: "5. Modelos de pricing: qué pagar y qué no",
    thModel: "Modelo",
    thRange: "Rango de precios",
    thBestFor: "Mejor para",
    thRisk: "Riesgo principal",
    rows: [
      {
        model: "Hourly / T&M",
        range: "$100–500/hora (juniors $100–150, seniors $300–500, élite hasta $900)",
        bestFor: "Discovery, auditorías, consultoría estratégica donde el alcance es impredecible",
        risk: "Penaliza la eficiencia — el consultor más rápido cobra menos",
      },
      {
        model: "Proyecto fijo",
        range: "$10K–500K+ (baja complejidad $10–50K, media $50–200K, alta $200K+, agéntica $75–500K)",
        bestFor: "Entregables bien definidos con scope documentado",
        risk: "Scope creep si no se documenta rigurosamente — responsable del 34% de fracasos",
      },
      {
        model: "Value-based",
        range: "10–25% del valor anual creado",
        bestFor: "Cuando el ROI es claramente medible (ej: $300K ahorro → fee de $60K = 5× ROI)",
        risk: "Requiere métricas claras pre-acuerdo y medición rigurosa",
      },
      {
        model: "Pay-per-meeting",
        range: "$300–600/reunión B2B estándar, $500–800 enterprise, $200–400 SMB",
        bestFor: "Outbound y lead generation — el riesgo se traslada a la agencia",
        risk: "Necesita definición contractual estricta de \"reunión cualificada\"",
      },
      {
        model: "Retainer / AaaS",
        range: "$3K–15K/mes (básico $3–5K, activo $5–10K, partnership integral $10–50K)",
        bestFor: "Operación continua, monitoreo, optimización y reentrenamiento de modelos",
        risk: "Verificar qué incluye exactamente y que hay cláusulas de salida",
      },
    ],
    tcoTitle: "Coste total de propiedad",
    tcoText: "El fee de implementación es solo una fracción del gasto total. El TCO a 3 años para una implementación mid-market está entre $50,000 y $200,000. Las agencias prudentes agregan un 15–20% de buffer por fluctuaciones en costes de APIs, tokens e infraestructura cloud. Si el pricing parece demasiado barato, están cortando esquinas en datos o en monitoreo post-lanzamiento. Pide siempre un desglose de: costes de APIs/tokens, hosting, labeling de datos, reentrenamiento y soporte.",
    sdrTitle: "SDR humano vs agente IA: comparativa real",
    sdrText: "Un SDR humano in-house cuesta entre $9,800 y $14,200 al mes cargado. Con tasas de conversión estándar, el coste real interno equivale a $821–1,150 por reunión cualificada. Una agencia con IA en modelo PPM cobra $300–600 por reunión, reduciendo el coste de adquisición efectivamente a la mitad.",
    vmHighlight: "En Verymuch.ai usamos un modelo de Setup + AaaS: fee de instalación (desde €500 para un agente específico hasta €10,000 para sistemas multi-agente) + retainer mensual (desde €400/mes). Setup cubre diseño, construcción e instalación. AaaS cubre operación, monitoreo, optimización y mejora continua. Todo con pago por hitos verificados — si no entregamos, no cobras.",
    vmLinkLabel: "Ver nuestro servicio de agentes de IA y automatización →",
    statsNote: "Cifras orientativas en USD/EUR. Fuentes: análisis de mercado, datos propios Verymuch.ai",
    statsNoteLink: "ver fuentes completas",
  },
  s6: {
    heading: "6. Casos reales de fracaso (y por qué fracasaron)",
    intro: "No analizamos estos casos para generar miedo sino para ilustrar exactamente qué sale mal cuando se ignoran los criterios de evaluación.",
    cases: [
      {
        title: "El colapso del SDR automatizado",
        why: "En 2025, el 96% de los equipos de marketing B2B adoptó herramientas de IA para acelerar su outbound. Paradójicamente, las tasas de conversión de email frío cayeron del 1–2% histórico a un desastroso 0.5–1.5% en el mismo período. El proveedor líder de AI SDRs experimentó tasas de churn devastadoras del 70–80%. Las agencias asumieron que la generación de pipeline era un ejercicio lineal fácilmente replicable por software — la \"falacia de la tarea simple\". Los agentes ejecutaron personalización superficial y cayeron en la \"trampa del trigger\": como el 70% de los compradores B2B ya ha avanzado un 70% en su proceso de decisión antes de emitir señales digitales, los agentes que solo reaccionaban a señales abandonaron el 95% del mercado direccionable.",
        whyLabel: "¿Por qué fracasó?",
        lesson: "Los agentes no reemplazan un proceso comercial completo. Dominan micro-tareas específicas dentro de un sistema diseñado por humanos.",
        lessonLabel: "Lección",
      },
      {
        title: "$2.3 millones, 95% de precisión, 0% de adopción",
        why: "Una empresa manufacturera invirtió $2.3 millones con una consultora de IA para construir un sistema de control de calidad predictivo. El modelo alcanzó 95% de precisión algorítmica. Sin embargo, a los seis meses, menos del 10% de los problemas de calidad pasaban por el sistema autónomo. La agencia construyó una solución aislada del workflow operativo real: el software añadía pasos engorrosos a las rutinas diarias de los inspectores. Al no implementar explicabilidad básica, los inspectores no confiaban en las decisiones autónomas y las sobreescribían continuamente.",
        whyLabel: "¿Por qué fracasó?",
        lesson: "La precisión técnica sin adopción humana y explicabilidad genera cero ROI. Optimiza para flujo de trabajo, no para métricas algorítmicas.",
        lessonLabel: "Lección",
      },
      {
        title: "El retailer que se saltó el piloto — $8 millones en ventas perdidas",
        why: "Una cadena retail saltó completamente la fase de piloto y desplegó IA de gestión de inventario en 200 ubicaciones simultáneamente. Los modelos, entrenados con datos históricos agregados, no contemplaron variaciones de demanda hiper-regionales ni micro-disrupciones de cadena de suministro. Resultado: 35% más stock-outs en demografías clave, $8 millones en ventas perdidas, y rollback total de emergencia.",
        whyLabel: "¿Por qué fracasó?",
        lesson: "Nunca escales sin validar primero en un entorno controlado. Un piloto de 4–8 semanas con el 10–20% del equipo hubiera evitado esta catástrofe.",
        lessonLabel: "Lección",
      },
      {
        title: "$12 millones en silos que no se hablan",
        why: "Una empresa multinacional de servicios financieros gastó $12 millones contratando 7 agencias boutique diferentes para 7 iniciativas de IA separadas. Sin estrategia de orquestación central, cada agencia construyó herramientas aisladas con pipelines, ontologías y protocolos completamente diferentes. El agente de soporte detectaba riesgo de churn en una cuenta mientras el agente de ventas ejecutaba secuencias agresivas de cross-selling al mismo cliente frustrado.",
        whyLabel: "¿Por qué fracasó?",
        lesson: "La orquestación centralizada no es opcional. Sin un framework unificado que permita a los agentes compartir contexto, múltiples herramientas de IA se anulan entre sí.",
        lessonLabel: "Lección",
      },
    ],
  },
  s7: {
    heading: "7. Cómo evaluar una agencia en 5 pasos (antes de gastar un centavo)",
    steps: [
      {
        num: "01",
        title: "Define el problema, no la solución",
        timeframe: "Semana 1",
        desc: "Antes de hablar con cualquier agencia, documenta: qué proceso quieres mejorar, qué métrica quieres mover, y cuál es tu baseline actual. \"Implementar IA\" no es un objetivo — \"reducir el tiempo de respuesta a leads inbound de 47 horas a menos de 60 segundos\" sí lo es. Los equipos de élite rediseñan workflows antes de seleccionar tecnología.",
      },
      {
        num: "02",
        title: "Audita tu propia data readiness",
        timeframe: "Semana 1–2",
        desc: "¿Tu CRM tiene más de 30% de registros con campos clave vacíos? ¿Tus datos están en silos sin identificadores unificados? Si la respuesta es sí, tu primer proyecto no es de IA — es de limpieza de datos. El 27% de los fracasos se atribuyen directamente a campos faltantes en el 15–40% de los registros. Haz esta auditoría internamente o pide al proveedor que la haga como primer entregable pagado. ¿Quieres saber en 5 minutos qué tan lista está tu empresa? Haz el diagnóstico ARRI gratuito en /ai-readiness.",
      },
      {
        num: "03",
        title: "Pide un discovery pagado, no un demo gratis",
        timeframe: "Semana 2–3",
        desc: "Las mejores agencias cobran entre $5,000 y $25,000 por un discovery/readiness audit que te da un roadmap antes de implementar. Este \"gateway engagement\" entrega un mapa de tareas automatizables y ROI proyectado. Si la agencia no ofrece este paso, probablemente va a saltar directo a vender una solución genérica. Un discovery pagado alinea incentivos: la agencia demuestra competencia y tú obtienes valor antes de comprometer capital significativo. Nosotros ofrecemos esto como parte de nuestra consultoría estratégica de IA.",
      },
      {
        num: "04",
        title: "Evalúa con los 7 criterios",
        timeframe: "Semana 3–4",
        desc: "Puntúa cada agencia candidata del 1 al 5 en cada uno de los 7 criterios de la sección anterior. Si alguna puntúa menos de 3 en \"referencias en producción\" o \"calidad de datos\", descártala. La decisión final no debe basarse en quién tiene la demo más impresionante sino en quién demuestra dominio estructural en orquestación, gobernanza de datos y alineación estratégica con tu negocio.",
      },
      {
        num: "05",
        title: "Negocia pricing alineado a resultados",
        timeframe: "Semana 4",
        desc: "Prioriza modelos value-based o AaaS con KPIs claros definidos antes de la implementación. Evita contratos de largo plazo sin cláusulas de salida. Exige documentación, transferencia de conocimiento y acceso al código fuente como parte del contrato base. Verifica que las cláusulas de indemnización cubran pérdidas financieras directas por acciones autónomas del agente, bias no verificado y alucinaciones algorítmicas.",
      },
    ],
  },
  s8: {
    heading: "8. El mercado por región",
    markets: [
      {
        flag: "🇺🇸",
        name: "Estados Unidos",
        desc: "Hub global de transformación con IA. Mercado de $132 mil millones en 2025, proyectado a $750 mil millones para 2035 (Grand View Research). Proyectos enterprise frecuentemente superan $5 millones. La oportunidad más grande e inexplorada: el mercado hispano con 5M+ negocios y $3.2 billones en output económico. El 86% de propietarios hispanos usa IA, pero existe un 79% de brecha en uso avanzado vs negocios no-hispanos.",
      },
      {
        flag: "🇪🇸",
        name: "España",
        desc: "Gateway digital del sur de Europa. La agenda \"Digital Spain 2026\" ha impulsado la adopción al 41.8% de la población activa, con €1.5 mil millones de inversión pública. El Kit Digital financia hasta €19,000 para soluciones de IA. Déficit de 30,000 especialistas ICT que impulsa un aumento del 15–20% anual en costes salariales de talento IA.",
      },
      {
        flag: "🇲🇽",
        name: "México",
        desc: "El 83% de las empresas reporta breakeven o ROI positivo en inversiones de IA. WhatsApp domina la comunicación B2B — los agentes que integran WhatsApp como canal principal superan consistentemente a los que solo hacen email. El 50% de consumidores expresa incomodidad con agentes que reemplazan presencia humana sin transparencia.",
      },
      {
        flag: "🇨🇴",
        name: "Colombia",
        desc: "El 22% de las empresas colombianas ya ha implementado IA en más del 40% de sus procesos — el doble del promedio regional latinoamericano. Medellín y Bogotá son hubs de innovación con la mayor velocidad de adopción en la región.",
      },
      {
        flag: "🇦🇷",
        name: "Argentina",
        desc: "Ecosistema tech maduro con una de las bases de talento en ingeniería de software más fuertes de Latinoamérica. Las empresas argentinas destacan por creatividad técnica a precios competitivos. Desafío principal: la volatilidad económica complica contratos de largo plazo en USD.",
      },
      {
        flag: "🇺🇾",
        name: "Uruguay",
        desc: "Mercado pequeño con la tasa de digitalización más alta de LATAM per cápita. Montevideo es hub de empresas tech. Regulación favorable para servicios digitales. Tamaño de mercado reducido pero ticket promedio por proyecto más alto que el promedio LATAM.",
      },
    ],
    regionalText: "En toda Latinoamérica, el 85% de los profesionales está dispuesto a integrar IA en su trabajo (vs 62% del promedio global). Pero existe una \"brecha de curiosidad\": la gente experimenta con IA pragmáticamente, pero la confianza permanece condicional — solo el 23% de las organizaciones genera valor económico significativo. Esto ha dado lugar al \"Shadow AI\", donde empleados usan herramientas personales de IA para saltarse sistemas corporativos, una tendencia que forzará conversaciones agresivas de gobernanza en 2026.",
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cuánto cuesta contratar una agencia de IA?",
        a: "Depende del alcance. Discovery y auditoría: $5,000–25,000. Implementación: $10,000–500,000+. Retainer mensual: $3,000–15,000. Para empresas mid-market B2B que necesitan un agente de ventas con operación continua (AaaS), un proyecto típico cuesta $1,000–8,000 de setup + $400–1,500/mes. Las consultoras globales arrancan en $500,000+ para implementaciones enterprise.",
      },
      {
        q: "¿Cuánto tarda una implementación?",
        a: "Un agente específico y bien definido: 2–6 semanas. Un sistema multi-agente complejo: 2–4 meses. La variable más importante no es la tecnología sino la calidad de tus datos. Si tu CRM tiene más del 30% de registros incompletos, agrega 2–4 semanas de limpieza de datos antes de empezar.",
      },
      {
        q: "¿Necesito un equipo técnico interno para trabajar con una agencia de IA?",
        a: "No necesariamente. El modelo AaaS existe precisamente para empresas sin equipo técnico. La agencia opera, monitorea y mejora los agentes por ti como servicio gestionado mensual. Sin embargo, necesitas al menos una persona interna que entienda tus procesos de negocio y pueda supervisar al agente durante los primeros 90 días.",
      },
      {
        q: "¿Qué pasa si la agencia desaparece o quiero cambiar de proveedor?",
        a: "Negocia desde el día 1: cláusulas de transferencia de IP, acceso al código fuente, documentación completa y derecho a extraer componentes del modelo fine-tuned y datos enriquecidos durante el off-boarding. Sin estas protecciones, estás construyendo sobre arena.",
      },
      {
        q: "¿Cómo mido si la agencia está dando resultados?",
        a: "Define la métrica antes de implementar. Las métricas de mayor prioridad: precisión de cualificación (impacta directamente en confianza del equipo), reuniones agendadas por agente (pipeline directo), reducción de horas manuales (eficiencia operativa), y coste por lead outbound (viabilidad económica). Si en 60 días no puedes responder qué métrica cambió y cuánto, el problema es de definición, no de tecnología.",
      },
      {
        q: "¿Las agencias de IA reemplazan a mi equipo de ventas?",
        a: "No. Automatizan el trabajo mecánico: investigación, enriquecimiento de datos, redacción de mensajes, seguimientos. Tu equipo se enfoca en lo que solo los humanos pueden hacer: construir confianza, gestionar objeciones complejas y cerrar. El modelo híbrido (agente genera volumen y contexto, humano cierra) supera consistentemente tanto al modelo solo-humano como al solo-IA.",
      },
      {
        q: "¿Puedo empezar con algo pequeño antes de hacer una implementación grande?",
        a: "Sí, y deberías. El 46% de los POCs se descartan cuando se ignoran pruebas por fases. Empieza con un agente que resuelva un dolor específico: respuesta rápida a leads inbound, investigación pre-llamada, follow-up automático. Valida resultados con el 10–20% del equipo durante 4–8 semanas. Después escala.",
      },
      {
        q: "¿Qué diferencia a Verymuch.ai de otras agencias de IA?",
        a: "Usamos internamente todo lo que vendemos — si un agente no funciona para nosotros, no lo vendemos. Pago por hitos verificados: solo cobras cuando entregamos resultados. Especialización exclusiva en ventas y marketing B2B mid-market. Presencia en EE.UU., España, México, Colombia, Argentina y Uruguay. Bilingüe ES/EN. Setup desde €500 + AaaS desde €400/mes.",
      },
    ],
  },
  newsletter: {
    badge: "Mantente al día",
    heading: "Guías, datos y casos reales de IA en ventas B2B",
    sub: "Sin spam. Una vez por semana. Lo que realmente funciona en implementaciones de agentes de IA para equipos comerciales.",
  },
  cta: {
    badge: "Siguiente paso",
    heading: "¿Listo para elegir la agencia correcta?",
    sub: "Antes de evaluar opciones, diagnostica dónde está tu empresa hoy. El diagnóstico ARRI te dice en 5 minutos qué tan lista está tu empresa para implementar agentes de IA — y te da un roadmap personalizado con recomendaciones.",
    ctaPrimary: "Haz el diagnóstico ARRI gratuito →",
    ctaSecondary: "O agenda una consultoría gratuita de 30 min →",
  },
  sourcesTitle: "Fuentes y metodología",
  sourcesText:
    "Esta guía sintetiza datos de MIT NANDA Initiative, Gartner Sales Technology Report 2025–2026, Forrester Wave AI Services 2025, McKinsey Global Institute, Carnegie Mellon University (autonomous agent task completion research), Salesforce (CRM multi-turn task success rates), Deutsche Bank Research Institute, EU AI Act / ISO/IEC 42001, Digital Spain 2026 agenda, Grand View Research (global AI consulting market sizing), Mordor Intelligence (AaaS market projections), HubSpot State of Sales 2025, PayPal Small Business Survey 2025, y datos propios de implementaciones de Verymuch.ai, cruzados con Claude y GPT-4o para verificación y triangulación.",
  footer: { home: "Inicio", privacy: "Privacidad", terms: "Términos" },
};

const en: PageContent = {
  meta: {
    title: "How to Choose an AI Agency for Your Business: Complete Guide 2026 | VeryMuch.ai",
    description:
      "88% of AI projects fail. This guide shows you exactly what to evaluate, what to ask, and what red flags to detect before hiring an AI agency. With data from Gartner, Forrester, McKinsey and 60+ verified sources.",
    ogTitle: "How to Choose an AI Agency: Complete Guide 2026",
    ogDescription:
      "88% of AI projects fail. What to evaluate, what to ask, and what red flags to detect before hiring an AI agency. 60+ verified sources.",
    twitterDesc: "Guide to choosing an AI agency. 7 criteria, 5 red flags, step-by-step evaluation framework. Real data.",
    ogLocale: "en_US",
  },
  breadcrumb: { home: "Home", guide: "Guide", page: "How to choose an AI agency" },
  jsonld: {
    articleHeadline: "How to Choose an AI Agency for Your Business: Complete Guide 2026",
    articleDescription:
      "88% of AI projects fail. This guide shows you exactly what to evaluate, what to ask, and what red flags to detect before hiring an AI agency.",
    breadcrumb: [
      { name: "Home", item: `${BASE_URL}/en` },
      { name: "Guide", item: `${BASE_URL}/en/guia` },
      { name: "How to choose an AI agency", item: `${BASE_URL}/en/guia/como-elegir-agencia-ia` },
    ],
  },
  hero: {
    badge: "Complete guide · 2026",
    h1: "How to choose an AI agency for your business: complete guide 2026",
    sub: "88% of AI projects fail. This guide crosses data from Gartner, Forrester, McKinsey, MIT and 60+ verified sources with what we've learned deploying AI agents for B2B teams in Spain, Mexico, Colombia, Argentina, Uruguay and the US Hispanic market.",
    by: "By",
    date: "March 29, 2026",
    readTime: "22 min read",
  },
  toc: {
    label: "In this article",
    items: [
      { id: "mercado",    label: "The market in numbers" },
      { id: "dos-tipos",  label: "The two types of agency" },
      { id: "criterios",  label: "The 7 criteria that matter" },
      { id: "red-flags",  label: "The 5 red flags that disqualify" },
      { id: "pricing",    label: "Pricing models" },
      { id: "fracasos",   label: "Real failure cases" },
      { id: "framework",  label: "Step-by-step evaluation framework" },
      { id: "regiones",   label: "The market by region" },
      { id: "faq",        label: "Frequently asked questions" },
      { id: "cta",        label: "Next step" },
    ],
  },
  intro: {
    p1: "Why do the companies investing most heavily in artificial intelligence fail most often? MIT revealed that 95% of enterprise AI pilots fail to achieve measurable revenue impact. The abandonment rate for AI initiatives jumped from 17% in 2024 to 42% in 2025. And according to industry data, 67% of US companies report severe regret with their AI provider within the first 12 months. The problem isn't the technology — it's who implements it and how the partner is selected.",
    p2: "The global AI consulting market reached between $11 and $14 billion in 2025 and is growing at 21% annually (Grand View Research, Mordor Intelligence). But it's saturated with digital marketing agencies that rebranded as \"AI consultancies\" without actually changing their capabilities. Gartner calls it agentwashing: of the thousands of vendors claiming agentic capabilities, only about 130 have something genuinely different from automation with an AI model on top. When the total cost of a failed implementation reaches 3.2 times the originally quoted price, provider selection becomes the most critical decision of the year.",
    p3: "This guide crosses data from Gartner, Forrester, McKinsey, MIT, Carnegie Mellon and 60+ verified sources with what we've learned deploying AI agents for B2B teams in Spain, Mexico, Colombia, Argentina, Uruguay and the US Hispanic market. If you're evaluating an AI agency, read this before signing any contract.",
  },
  s1: {
    heading: "1. The market in numbers",
    intro: "The market is enormous but the failure rate is too. These numbers contextualize the decision you're about to make.",
    stats: [
      { stat: "$11–14B", label: "Global AI consulting market, 2025", source: "Grand View Research, Mordor Intelligence" },
      { stat: "88%",     label: "AI agent initiative failure rate", source: "Industry aggregate, 2025" },
      { stat: "42%",     label: "AI projects abandoned before production", source: "Corporate AI initiative tracking, 2025" },
      { stat: "$340K",   label: "Average direct cost of a failed AI project", source: "Industry post-mortem analysis, 2025-2026" },
    ],
    p1: "Only 12% of AI projects reach production (Gartner). 91% of mid-market executives report using some form of AI, but the vast majority remain stuck in the \"experimentation\" phase without real business impact. The paradox: 88% of B2B teams already use some AI tool, but only 4% have data clean enough for it to work well.",
    p2: "Organizations working with specialized external consultants report meeting or exceeding their ROI expectations in 74% of cases — a statistic that contrasts dramatically with failure rates for internally managed initiatives without expert guidance. Language model hallucinations alone cost companies more than $67 billion in losses during 2024 (MIT NANDA Initiative). Corporate AI spending will double in 2026, from 0.8% to 1.7% of total revenue (Gartner). What's at stake isn't whether your company will invest in AI — it's whether that investment will generate returns.",
    quoteText: "95% of enterprise AI pilots fail to achieve measurable revenue impact. Corporate tolerance for expensive, localized experiments has collapsed.",
    quoteSource: "MIT NANDA Initiative",
    statsNote: "Figures in USD. Sources: Grand View Research, Mordor Intelligence, Gartner, MIT",
    statsNoteLink: "see all sources",
  },
  s2: {
    heading: "2. The two types of agency (and which one you need)",
    intro: "The AI agency ecosystem splits into two fundamental categories, each with distinct structural advantages and risks. The right choice depends on your company size, regulatory complexity, and budget.",
    col1Title: "Global consultancies",
    col1Items: [
      ["Rate", "$300–900 USD/hour. Implementations frequently exceed $500,000."],
      ["Ideal for", "Regulated companies (banking, healthcare, public sector), complex enterprise implementations, multi-year strategic roadmaps."],
      ["Advantages", "Robust compliance frameworks, massive scale capacity, institutional credentials."],
      ["Disadvantages", "Slow, bureaucratic, enormous capital commitments, management layers that dilute access to senior experts."],
    ],
    col2Title: "Specialized boutique agencies",
    col2Items: [
      ["Rate", "$100–300 USD/hour. Projects starting from $10,000."],
      ["Ideal for", "Mid-market companies ($1M–$50M), teams of 5–50 people, agile implementations with fast time-to-value."],
      ["Advantages", "Direct access to founders and senior staff, fast decisions, affordable pricing, vertical specialization."],
      ["Disadvantages", "Requires more scrutiny of technical depth; some lack compliance foundations needed to scale from pilot to production."],
    ],
    closingParagraph: "For the vast majority of mid-market Spanish-speaking companies that need AI in sales and marketing, a specialized boutique agency is the right choice — provided it passes the 7 evaluation criteria described below. The most common mistake is assuming \"boutique\" means \"less capable\"; in reality, the best boutiques offer technical depth comparable to a global consultancy in their specific niche, with less bureaucracy and at a fraction of the cost.",
  },
  s3: {
    heading: "3. The 7 criteria that matter",
    intro: "These are the 7 criteria that separate a partner that can transform your operations from one that will burn your budget on a pilot that never reaches production. For each criterion, we include the exact question to ask in the first meeting.",
    questionLabel: "Key question",
    criteria: [
      {
        num: "01",
        title: "Multi-agent orchestration, not isolated tools",
        desc: "By 2026, 40% of enterprise applications will integrate specific AI agents (Gartner). The difference between a basic provider and an enterprise-grade one is their ability to design ecosystems where multiple specialized agents collaborate: a prospecting agent passes context to a qualification agent, which passes it to a follow-up agent. Without human intervention between steps. An agency that only offers installing an email bot or a chat interface is selling superficial automation, not orchestration. For a deeper understanding, see our complete guide to AI agents for B2B sales.",
        question: "How do your agents communicate with each other when a lead moves from one funnel stage to another? If they don't have a clear answer, they're selling loose tools, not a system.",
        questionLabel: "Key question",
      },
      {
        num: "02",
        title: "Real platform depth (not \"we're platform agnostic\")",
        desc: "Every agency claims to be \"platform agnostic.\" But HubSpot Breeze and Salesforce Agentforce require completely different technical capabilities. A competent agency recommends the right platform based on the client's data maturity, not which one gives them the highest commission.",
        question: "How many [my CRM] implementations have you completed in the last 12 months, and what business metrics did they move?",
        questionLabel: "Key question",
      },
      {
        num: "03",
        title: "Data quality obsession (the criterion that predicts success)",
        desc: "43% of organizations cite data quality as the primary obstacle to AI success. A serious partner will dedicate 50–70% of the timeline and budget strictly to data preparation — extraction, normalization, and governance — before deploying a single model.",
        question: "What percentage of the project do you dedicate to data auditing and cleanup before building? If they say less than 30%, that's a serious red flag.",
        questionLabel: "Key question",
      },
      {
        num: "04",
        title: "Explainability and transparency (no black boxes)",
        desc: "With the EU AI Act in force since 2026 and fines up to €35 million for non-compliant high-risk systems, black-box systems represent a real legal risk. The agency must implement training data attribution, complete audit trails, and contestability — the ability of humans to question and correct algorithmic decisions.",
        question: "If your agent disqualifies a lead or makes an autonomous decision, can my team see exactly why and correct it?",
        questionLabel: "Key question",
      },
      {
        num: "05",
        title: "Production references, not impressive demos",
        desc: "Anyone can build an impressive demo. What matters: do they have systems running in real production, with measurable metrics, for more than 6 months? The gap between a pilot and production is where 46% of POCs die. Carnegie Mellon demonstrated that autonomous agents fail on approximately 70% of multi-step tasks in office environments.",
        question: "Give me 2–3 clients where the system has been in production for more than 6 months and show me the business metrics it moved.",
        questionLabel: "Key question",
      },
      {
        num: "06",
        title: "Knowledge transfer, not permanent dependency",
        desc: "A hallmark of predatory consulting practices is the deliberate creation of permanent dependencies: proprietary systems that hide the logic, no source code access, and expensive retainers for minor adjustments. Effective consulting empowers the client. The proposal must explicitly detail handoff procedures, complete documentation, and training programs so the internal team can maintain and optimize the system.",
        question: "What documentation do you deliver? Can my team operate and maintain the system without you?",
        questionLabel: "Key question",
      },
      {
        num: "07",
        title: "Continuous monitoring and maintenance (not \"install and done\")",
        desc: "AI models silently degrade over time due to data distribution shifts, market dynamics, and user behavior changes. The right partner establishes weekly drift detection protocols, quarterly retraining schedules, and continuous human oversight for low-confidence predictions.",
        question: "What protocol do you have for detecting model degradation and how often do you retrain?",
        questionLabel: "Key question",
      },
    ],
  },
  s4: {
    heading: "4. The 5 red flags that disqualify",
    flags: [
      {
        title: "They guarantee results before auditing your data",
        desc: "Any agency that promises \"95% accuracy\" or \"10x efficiency\" without having seen your CRM, your data, or your processes is guessing or lying. Cookie-cutter solutions are responsible for 34% of failures due to scope creep. B2B ecosystems are idiosyncratic — what works in enterprise cybersecurity may completely alienate buyers in industrial manufacturing.",
      },
      {
        title: "They can't explain how their system works in business language",
        desc: "If the agency hides behind technical jargon, or if everything is \"proprietary\" and they won't show architecture, there are two possibilities: they don't understand it well enough to explain it simply, or they're hiding the fragility of their system. An agency that dismisses questions about model drift or hallucination mitigation is demonstrating a dangerously absent production experience.",
      },
      {
        title: "They jump straight to development without doing discovery",
        desc: "Agencies that skip a 4-week prototype sprint or data audit before building fall into \"big bang\" mode — the same one that caused $8 million in lost sales when a retailer deployed AI in 200 locations without a pilot. 46% of POCs are scrapped when phased testing protocols are ignored.",
      },
      {
        title: "They have no post-launch plan",
        desc: "Models degrade. Data changes. Markets move. If the proposal ends at \"deployment\" with no retraining protocols, drift detection, or monitoring, you're buying a system with an invisible expiration date. The silent accumulation of hallucinations cost $67 billion in 2024.",
      },
      {
        title: "They create permanent dependency instead of transferring knowledge",
        desc: "If they hide the source code, don't give access to configurations, and every minor adjustment requires an expensive retainer, they're architecting an extractive relationship. Demand in the contract: full source code access, exhaustive documentation, and IP transfer clauses in case of termination.",
      },
    ],
  },
  s5: {
    heading: "5. Pricing models: what to pay and what not to",
    thModel: "Model",
    thRange: "Price range",
    thBestFor: "Best for",
    thRisk: "Main risk",
    rows: [
      {
        model: "Hourly / T&M",
        range: "$100–500/hr (juniors $100–150, seniors $300–500, elite up to $900)",
        bestFor: "Discovery, audits, strategic consulting where scope is unpredictable",
        risk: "Penalizes efficiency — the faster consultant earns less",
      },
      {
        model: "Fixed project",
        range: "$10K–500K+ (low complexity $10–50K, medium $50–200K, high $200K+, agentic $75–500K)",
        bestFor: "Well-defined deliverables with documented scope",
        risk: "Scope creep if not rigorously documented — responsible for 34% of failures",
      },
      {
        model: "Value-based",
        range: "10–25% of annual value created",
        bestFor: "When ROI is clearly measurable (e.g., $300K savings → $60K fee = 5× ROI)",
        risk: "Requires clear metrics agreed before engagement and rigorous measurement",
      },
      {
        model: "Pay-per-meeting",
        range: "$300–600/standard B2B meeting, $500–800 enterprise, $200–400 SMB",
        bestFor: "Outbound and lead generation — risk transfers to the agency",
        risk: "Needs strict contractual definition of \"qualified meeting\"",
      },
      {
        model: "Retainer / AaaS",
        range: "$3K–15K/month (basic $3–5K, active $5–10K, full partnership $10–50K)",
        bestFor: "Continuous operation, monitoring, optimization and model retraining",
        risk: "Verify exactly what's included and that exit clauses exist",
      },
    ],
    tcoTitle: "Total cost of ownership",
    tcoText: "The implementation fee is only a fraction of total spend. The 3-year TCO for a mid-market implementation is between $50,000 and $200,000. Prudent agencies add a 15–20% buffer for API, token, and cloud infrastructure cost fluctuations. If pricing seems too cheap, they're cutting corners on data or post-launch monitoring. Always request a breakdown of: API/token costs, hosting, data labeling, retraining, and support.",
    sdrTitle: "Human SDR vs AI agent: real comparison",
    sdrText: "A fully-loaded in-house human SDR costs between $9,800 and $14,200 per month. At standard conversion rates, the real internal cost equals $821–1,150 per qualified meeting. An AI-first agency on a PPM model charges $300–600 per meeting, effectively cutting acquisition cost in half.",
    vmHighlight: "At Verymuch.ai we use a Setup + AaaS model: installation fee (from €500 for a specific agent to €10,000 for multi-agent systems) + monthly operating retainer (from €400/month). Setup covers design, build, and installation. AaaS covers operation, monitoring, optimization, and continuous improvement. All with milestone-verified payments — if we don't deliver, you don't pay.",
    vmLinkLabel: "See our AI agents & automation service →",
    statsNote: "Indicative figures in USD/EUR. Sources: market analysis, Verymuch.ai proprietary data",
    statsNoteLink: "see all sources",
  },
  s6: {
    heading: "6. Real failure cases (and why they failed)",
    intro: "We analyze these cases not to generate fear but to illustrate exactly what goes wrong when the evaluation criteria are ignored.",
    cases: [
      {
        title: "The AI SDR collapse",
        why: "In 2025, 96% of B2B marketing teams adopted AI tools to accelerate their outbound. Paradoxically, cold email conversion rates fell from the historical 1–2% to a disastrous 0.5–1.5% in the same period. The leading AI SDR vendor experienced devastating 70–80% churn rates. Agencies assumed that pipeline generation was a linear, software-replicable exercise — the \"simple task fallacy.\" Agents executed superficial personalization and fell into the \"trigger trap\": since 70% of B2B buyers have already advanced 70% in their decision process before emitting digital signals, agents that only reacted to signals abandoned 95% of the addressable market.",
        whyLabel: "Why it failed",
        lesson: "Agents don't replace a complete sales process. They dominate specific micro-tasks within a human-designed system.",
        lessonLabel: "Lesson",
      },
      {
        title: "$2.3 million, 95% accuracy, 0% adoption",
        why: "A manufacturing company invested $2.3 million with an AI consultancy to build a predictive quality control system. The model achieved 95% algorithmic accuracy. However, six months later, fewer than 10% of quality issues were going through the autonomous system. The agency built a solution isolated from the real operational workflow: the software added cumbersome steps to inspectors' daily routines. Without implementing basic explainability, inspectors didn't trust the autonomous decisions and continuously overrode them.",
        whyLabel: "Why it failed",
        lesson: "Technical accuracy without human adoption and explainability generates zero ROI. Optimize for workflow, not algorithmic metrics.",
        lessonLabel: "Lesson",
      },
      {
        title: "The retailer that skipped the pilot — $8 million in lost sales",
        why: "A retail chain skipped the pilot phase entirely and deployed AI inventory management across 200 locations simultaneously. The models, trained on aggregated historical data, didn't account for hyper-regional demand variations or micro supply chain disruptions. Result: 35% more stock-outs in key demographics, $8 million in lost sales, and an emergency full rollback.",
        whyLabel: "Why it failed",
        lesson: "Never scale without first validating in a controlled environment. A 4–8 week pilot with 10–20% of the team would have prevented this disaster.",
        lessonLabel: "Lesson",
      },
      {
        title: "$12 million in silos that don't talk to each other",
        why: "A multinational financial services company spent $12 million hiring 7 different boutique agencies for 7 separate AI initiatives. Without a central orchestration strategy, each agency built isolated tools with completely different pipelines, ontologies, and integration protocols. The support agent detected churn risk in an enterprise account while the sales agent — completely unaware of the support context — was running aggressive cross-selling sequences at the same frustrated customer.",
        whyLabel: "Why it failed",
        lesson: "Centralized orchestration is not optional. Without a unified framework that allows agents to share context, multiple AI tools cancel each other out.",
        lessonLabel: "Lesson",
      },
    ],
  },
  s7: {
    heading: "7. How to evaluate an agency in 5 steps (before spending a cent)",
    steps: [
      {
        num: "01",
        title: "Define the problem, not the solution",
        timeframe: "Week 1",
        desc: "Before talking to any agency, document: what process you want to improve, what metric you want to move, and what your current baseline is. \"Implement AI\" is not an objective — \"reduce inbound lead response time from 47 hours to under 60 seconds\" is. Elite teams redesign workflows before selecting technology.",
      },
      {
        num: "02",
        title: "Audit your own data readiness",
        timeframe: "Week 1–2",
        desc: "Does your CRM have more than 30% of records with key fields empty? Is your data in silos without unified identifiers? If the answer is yes, your first project isn't AI — it's data cleanup. 27% of failures are directly attributed to missing fields in 15–40% of records. Do this audit internally or ask the vendor to do it as a first paid deliverable. Want to know in 5 minutes how ready your company is? Take the free ARRI diagnostic at /ai-readiness.",
      },
      {
        num: "03",
        title: "Request a paid discovery, not a free demo",
        timeframe: "Week 2–3",
        desc: "The best agencies charge $5,000–$25,000 for a discovery/readiness audit that gives you a roadmap before implementing. This \"gateway engagement\" delivers a map of automatable tasks and projected ROI. If the agency doesn't offer this step, they'll probably jump straight to selling a generic solution. A paid discovery aligns incentives: the agency demonstrates competence and you get value before committing significant capital. We offer this as part of our strategic AI consulting.",
      },
      {
        num: "04",
        title: "Evaluate with the 7 criteria",
        timeframe: "Week 3–4",
        desc: "Score each candidate agency from 1 to 5 on each of the 7 criteria from the previous section. If any scores below 3 on \"production references\" or \"data quality,\" eliminate them. The final decision shouldn't be based on who has the most impressive demo but on who demonstrates structural mastery in orchestration, data governance, and strategic alignment with your business.",
      },
      {
        num: "05",
        title: "Negotiate results-aligned pricing",
        timeframe: "Week 4",
        desc: "Prioritize value-based or AaaS models with clear KPIs defined before implementation. Avoid long-term contracts without exit clauses. Require documentation, knowledge transfer, and source code access as part of the base contract. Verify that indemnification clauses cover direct financial losses from autonomous agent actions, unverified bias, and algorithmic hallucinations.",
      },
    ],
  },
  s8: {
    heading: "8. The market by region",
    markets: [
      {
        flag: "🇺🇸",
        name: "United States",
        desc: "Global AI transformation hub. $132 billion market in 2025, projected to $750 billion by 2035 (Grand View Research). Enterprise projects frequently exceed $5 million. The largest unexplored opportunity: the Hispanic market with 5M+ businesses and $3.2 trillion in economic output. 86% of Hispanic business owners use AI, but there's a 79% gap in advanced usage vs non-Hispanic businesses.",
      },
      {
        flag: "🇪🇸",
        name: "Spain",
        desc: "Digital gateway of southern Europe. The \"Digital Spain 2026\" agenda has driven adoption to 41.8% of the working population, with €1.5 billion in public investment. Kit Digital funds up to €19,000 for AI solutions. Deficit of 30,000 ICT specialists driving 15–20% annual wage inflation for AI talent.",
      },
      {
        flag: "🇲🇽",
        name: "Mexico",
        desc: "83% of companies report breakeven or positive ROI on AI investments. WhatsApp dominates B2B communication — agents integrating WhatsApp as a primary channel consistently outperform email-only ones. 50% of consumers express discomfort with agents that replace human presence without transparency.",
      },
      {
        flag: "🇨🇴",
        name: "Colombia",
        desc: "22% of Colombian companies have already implemented AI in more than 40% of their processes — double the regional Latin American average. Medellín and Bogotá are innovation hubs with the fastest adoption rate in the region.",
      },
      {
        flag: "🇦🇷",
        name: "Argentina",
        desc: "Mature tech ecosystem with one of the strongest software engineering talent bases in Latin America. Argentine companies stand out for technical creativity at competitive prices. Main challenge: economic volatility complicates long-term USD contracts.",
      },
      {
        flag: "🇺🇾",
        name: "Uruguay",
        desc: "Small market with the highest digitalization rate in LATAM per capita. Montevideo is a tech hub. Favorable regulation for digital services. Small market size but average project ticket higher than the LATAM average.",
      },
    ],
    regionalText: "Across Latin America, 85% of professionals are willing to integrate AI into their work (vs 62% global average). But there's a \"curiosity gap\": people experiment with AI pragmatically, but trust remains conditional — only 23% of organizations generate significant economic value. This has given rise to \"Shadow AI,\" where employees use personal AI tools to bypass corporate systems, a trend that will force aggressive governance conversations in 2026.",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "How much does it cost to hire an AI agency?",
        a: "It depends on scope. Discovery and audit: $5,000–25,000. Implementation: $10,000–500,000+. Monthly retainer: $3,000–15,000. For mid-market B2B companies needing a sales agent with continuous operation (AaaS), a typical project costs $1,000–8,000 setup + $400–1,500/month. Global consultancies start at $500,000+ for enterprise implementations.",
      },
      {
        q: "How long does an implementation take?",
        a: "A specific, well-defined agent: 2–6 weeks. A complex multi-agent system: 2–4 months. The most important variable isn't the technology but your data quality. If your CRM has more than 30% incomplete records, add 2–4 weeks of data cleanup before starting.",
      },
      {
        q: "Do I need an internal technical team to work with an AI agency?",
        a: "Not necessarily. The AaaS model exists precisely for companies without technical teams. The agency operates, monitors, and improves agents as a monthly managed service. However, you need at least one internal person who understands your business processes and can supervise the agent during the first 90 days.",
      },
      {
        q: "What happens if the agency disappears or I want to change providers?",
        a: "Negotiate from day 1: IP transfer clauses, source code access, complete documentation, and the right to extract fine-tuned model components and enriched data during off-boarding. Without these protections, you're building on sand.",
      },
      {
        q: "How do I measure if the agency is delivering results?",
        a: "Define the metric before implementing. Top-priority metrics: qualification accuracy (directly impacts team trust and time), meetings booked per agent (direct pipeline), manual hours reduced (operational efficiency), and outbound cost per lead (economic viability). If after 60 days you can't answer what metric changed and by how much, the problem is definition, not technology.",
      },
      {
        q: "Do AI agencies replace my sales team?",
        a: "No. They automate mechanical work: research, data enrichment, message writing, follow-ups. Your team focuses on what only humans can do: build trust, handle complex objections, and close. The hybrid model (agent generates volume and context, human closes) consistently outperforms both pure-human and pure-AI models.",
      },
      {
        q: "Can I start small before doing a large implementation?",
        a: "Yes, and you should. 46% of POCs are scrapped when phased testing is ignored. Start with an agent that solves one specific pain point: fast inbound lead response, pre-call research, automatic follow-up. Validate results with 10–20% of the team over 4–8 weeks. Then scale.",
      },
      {
        q: "What sets Verymuch.ai apart from other AI agencies?",
        a: "We use internally everything we sell — if an agent doesn't work for us, we don't sell it. Milestone-verified payments: you only pay when we deliver results. Exclusive specialization in B2B mid-market sales and marketing. Presence in the US, Spain, Mexico, Colombia, Argentina, and Uruguay. Bilingual ES/EN. Setup from €500 + AaaS from €400/month.",
      },
    ],
  },
  newsletter: {
    badge: "Stay up to date",
    heading: "Guides, data and real AI cases in B2B sales",
    sub: "No spam. Once a week. What actually works in AI agent implementations for sales teams.",
  },
  cta: {
    badge: "Next step",
    heading: "Ready to choose the right agency?",
    sub: "Before evaluating options, diagnose where your company stands today. The ARRI diagnostic tells you in 5 minutes how ready your company is to implement AI agents — and gives you a personalized roadmap with recommendations.",
    ctaPrimary: "Take the free ARRI diagnostic →",
    ctaSecondary: "Or book a free 30-min strategy call →",
  },
  sourcesTitle: "Sources & methodology",
  sourcesText:
    "This guide synthesizes data from MIT NANDA Initiative, Gartner Sales Technology Report 2025–2026, Forrester Wave AI Services 2025, McKinsey Global Institute, Carnegie Mellon University (autonomous agent task completion research), Salesforce (CRM multi-turn task success rates), Deutsche Bank Research Institute, EU AI Act / ISO/IEC 42001, Digital Spain 2026 agenda, Grand View Research (global AI consulting market sizing), Mordor Intelligence (AaaS market projections), HubSpot State of Sales 2025, PayPal Small Business Survey 2025, and Verymuch.ai proprietary implementation data, cross-verified using Claude and GPT-4o.",
  footer: { home: "Home", privacy: "Privacy", terms: "Terms" },
};

const CONTENT: Record<string, PageContent> = { es, en };

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = CONTENT[locale] ?? CONTENT.es;
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/guia/como-elegir-agencia-ia`
      : `${BASE_URL}/guia/como-elegir-agencia-ia`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/guia/como-elegir-agencia-ia`,
        en: `${BASE_URL}/en/guia/como-elegir-agencia-ia`,
        "x-default": `${BASE_URL}/guia/como-elegir-agencia-ia`,
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

function StatCard({ stat, label, source }: { stat: string; label: string; source: string }) {
  return (
    <div
      className="rounded-xl p-5 text-center border flex flex-col gap-2"
      style={{ background: "rgba(74,212,174,0.06)", borderColor: "rgba(74,212,174,0.18)" }}
    >
      <div className="text-2xl font-extrabold leading-none" style={{ color: "var(--accent-text)" }}>
        {stat}
      </div>
      <div className="text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
        {label}
      </div>
      <div className="text-xs leading-snug opacity-50" style={{ color: "var(--text-secondary)" }}>
        {source}
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

export default async function ComoElegirAgenciaIaPage({ params }: Props) {
  const { locale } = await params;
  const c = CONTENT[locale] ?? CONTENT.es;
  const canonicalUrl =
    locale === "en"
      ? `${BASE_URL}/en/guia/como-elegir-agencia-ia`
      : `${BASE_URL}/guia/como-elegir-agencia-ia`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonld.articleHeadline,
    description: c.jsonld.articleDescription,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: {
      "@type": "Person",
      name: "Edwin Moreno",
      url: "https://www.linkedin.com/in/edwinmorenoai/",
    },
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
            {c.hero.h1}
          </h1>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {c.hero.sub}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
            <span>
              {c.hero.by}{" "}
              <a
                href="https://www.linkedin.com/in/edwinmorenoai/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
                style={{ color: "var(--text-primary)" }}
              >
                Edwin Moreno
              </a>
            </span>
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

          {/* ── Intro ───────────────────────────────────────────────────── */}
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

          {/* ── Section 1: Mercado ──────────────────────────────────────── */}
          <section id="mercado" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s1.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s1.intro}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {c.s1.stats.map((s) => (
                <StatCard key={s.stat} stat={s.stat} label={s.label} source={s.source} />
              ))}
            </div>
            <p className="text-xs mb-8" style={{ color: "var(--text-secondary)" }}>
              {c.s1.statsNote} ·{" "}
              <a href="#fuentes" className="hover:underline" style={{ color: "var(--accent-text)" }}>
                {c.s1.statsNoteLink} ↓
              </a>
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.s1.p1}
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s1.p2}
            </p>
            <blockquote
              className="rounded-xl p-5 border-l-4 my-2"
              style={{ background: "var(--bg-secondary)", borderLeftColor: "var(--accent-text)", borderColor: "var(--border)" }}
            >
              <p className="text-base leading-relaxed italic mb-3" style={{ color: "var(--text-primary)" }}>
                &ldquo;{c.s1.quoteText}&rdquo;
              </p>
              <p className="text-xs font-semibold" style={{ color: "var(--accent-text)" }}>
                — {c.s1.quoteSource}
              </p>
            </blockquote>
          </section>

          {/* ── Section 2: Dos tipos ────────────────────────────────────── */}
          <section id="dos-tipos" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s2.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s2.intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <h3 className="text-sm font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                  {c.s2.col1Title}
                </h3>
                <dl className="flex flex-col gap-3">
                  {c.s2.col1Items.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
                        {label}
                      </dt>
                      <dd className="text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "rgba(74,212,174,0.04)", borderColor: "rgba(74,212,174,0.2)" }}>
                <h3 className="text-sm font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                  {c.s2.col2Title}
                </h3>
                <dl className="flex flex-col gap-3">
                  {c.s2.col2Items.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold mb-0.5" style={{ color: "var(--accent-text)", opacity: 0.7 }}>
                        {label}
                      </dt>
                      <dd className="text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.s2.closingParagraph}
            </p>
          </section>

          {/* ── Section 3: 7 Criterios ──────────────────────────────────── */}
          <section id="criterios" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s3.heading}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {c.s3.intro}
            </p>
            <div className="flex flex-col gap-5">
              {c.s3.criteria.map((criterion) => (
                <div
                  key={criterion.num}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-extrabold shrink-0 leading-none mt-0.5" style={{ color: "var(--accent-text)" }}>
                      {criterion.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                        {criterion.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                        {criterion.desc}
                      </p>
                      <div
                        className="rounded-lg p-3 border-l-2"
                        style={{ background: "rgba(245,160,64,0.06)", borderLeftColor: "var(--accent-warm)" }}
                      >
                        <p className="text-xs font-bold mb-1" style={{ color: "var(--accent-warm-text)" }}>
                          {criterion.questionLabel}:
                        </p>
                        <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
                          {criterion.question}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4: Red Flags ────────────────────────────────────── */}
          <section id="red-flags" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.s4.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {c.s4.flags.map((flag) => (
                <div
                  key={flag.title}
                  className="rounded-xl p-5 border-l-4 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)", borderLeftColor: "var(--error)" }}
                >
                  <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>✕ {flag.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{flag.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 5: Pricing ──────────────────────────────────────── */}
          <section id="pricing" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.s5.heading}
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <th className="text-left py-3 pr-4 font-bold" style={{ color: "var(--text-primary)" }}>{c.s5.thModel}</th>
                    <th className="text-left py-3 pr-4 font-bold" style={{ color: "var(--text-secondary)" }}>{c.s5.thRange}</th>
                    <th className="text-left py-3 pr-4 font-bold" style={{ color: "var(--text-secondary)" }}>{c.s5.thBestFor}</th>
                    <th className="text-left py-3 font-bold" style={{ color: "var(--accent-text)" }}>{c.s5.thRisk}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.s5.rows.map((row) => (
                    <tr key={row.model} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td className="py-3 pr-4 font-medium" style={{ color: "var(--text-primary)" }}>{row.model}</td>
                      <td className="py-3 pr-4 text-xs" style={{ color: "var(--text-secondary)" }}>{row.range}</td>
                      <td className="py-3 pr-4 text-xs" style={{ color: "var(--text-secondary)" }}>{row.bestFor}</td>
                      <td className="py-3 text-xs" style={{ color: "var(--text-secondary)" }}>{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s5.statsNote} ·{" "}
              <a href="#fuentes" className="hover:underline" style={{ color: "var(--accent-text)" }}>
                {c.s5.statsNoteLink} ↓
              </a>
            </p>
            <div className="rounded-xl p-5 border mb-4" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{c.s5.tcoTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.s5.tcoText}</p>
            </div>
            <div className="rounded-xl p-5 border mb-4" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{c.s5.sdrTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.s5.sdrText}</p>
            </div>
            <div
              className="rounded-xl p-5 border-l-4"
              style={{ background: "rgba(74,212,174,0.05)", borderColor: "var(--border)", borderLeftColor: "var(--accent-text)" }}
            >
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                {c.s5.vmHighlight}
              </p>
              <a
                href="/servicios/agentes-automatizacion"
                className="text-sm font-semibold hover:underline"
                style={{ color: "var(--accent-text)" }}
              >
                {c.s5.vmLinkLabel}
              </a>
            </div>
          </section>

          {/* ── Section 6: Fracasos ─────────────────────────────────────── */}
          <section id="fracasos" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s6.heading}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {c.s6.intro}
            </p>
            <div className="flex flex-col gap-5">
              {c.s6.cases.map((cas) => (
                <div
                  key={cas.title}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <h3 className="text-base font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    {cas.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-xs font-bold mb-1" style={{ color: "var(--error)" }}>
                        {cas.whyLabel}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {cas.why}
                      </p>
                    </div>
                    <div
                      className="rounded-lg p-3"
                      style={{ background: "rgba(74,212,174,0.06)", borderLeft: "2px solid var(--accent-text)" }}
                    >
                      <p className="text-xs font-bold mb-1" style={{ color: "var(--accent-text)" }}>
                        {cas.lessonLabel}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {cas.lesson}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 7: Framework ────────────────────────────────────── */}
          <section id="framework" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
              {c.s7.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {c.s7.steps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-extrabold leading-none" style={{ color: "var(--accent-text)" }}>
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                      <p className="text-xs" style={{ color: "var(--accent-warm-text)" }}>{step.timeframe}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 8: Regiones ─────────────────────────────────────── */}
          <section id="regiones" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.s8.heading}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {c.s8.markets.map((market) => (
                <div
                  key={market.name}
                  className="rounded-xl p-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <p className="text-xl mb-2">{market.flag}</p>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{market.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{market.desc}</p>
                </div>
              ))}
            </div>
            <HighlightBox>{c.s8.regionalText}</HighlightBox>
          </section>

          {/* ── Section 9: FAQ ──────────────────────────────────────────── */}
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

          {/* ── Newsletter CTA ──────────────────────────────────────────── */}
          <section className="mb-12">
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border)",
              }}
            >
              <p className="mb-3">
                <span className="badge-label" style={{ color: "var(--accent-text)" }}>{c.newsletter.badge}</span>
              </p>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                {c.newsletter.heading}
              </h2>
              <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: "var(--text-secondary)" }}>
                {c.newsletter.sub}
              </p>
              <NewsletterForm locale={locale} />
            </div>
          </section>

          {/* ── CTA Final ───────────────────────────────────────────────── */}
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
                <a href="/ai-readiness" className="btn-vm-primary">
                  {c.cta.ctaPrimary}
                </a>
                <a
                  href={GHL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] text-sm font-semibold btn-outline-mint"
                >
                  {c.cta.ctaSecondary}
                </a>
              </div>
            </div>
          </section>

          {/* ── Sources ─────────────────────────────────────────────────── */}
          <div
            id="fuentes"
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
