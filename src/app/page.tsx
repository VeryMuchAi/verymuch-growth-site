import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeNav from "@/components/HomeNav";
import AgentsSection from "@/components/AgentsSection";

export const metadata: Metadata = {
  title: "VeryMuch.ai — IA que vende",
  description:
    "Instalamos agentes de IA y sistemas de automatización para marketing y ventas. IA en producción real, no pilotos experimentales.",
  openGraph: {
    title: "VeryMuch.ai — Instalamos agentes de IA que venden",
    description:
      "Agentes de inteligencia artificial para marketing y ventas. Todo lo que vendemos lo probamos primero en nuestra propia empresa.",
    type: "website",
    siteName: "VeryMuch.ai",
  },
};

const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";

// ─── Shared design tokens (inline) ───────────────────────────────────────────
const GRAD_BRAND = "linear-gradient(135deg,#5AD4AE 0%,#F5A05E 100%)";
const GRAD_TEXT  = "linear-gradient(90deg,#5AD4AE 0%,#F5A05E 100%)";
const GRAD_CTA   = "linear-gradient(135deg,#F5405E 0%,#F5A05E 100%)";

// ─── Reusable micro-components (server-only) ─────────────────────────────────

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD_TEXT }}>
      {children}
    </span>
  );
}

// Section tag for DARK sections (teal text + gradient line)
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#5AD4AE] uppercase tracking-[0.08em] mb-4">
      <span aria-hidden className="inline-block w-6 h-[2px] rounded" style={{ background: GRAD_BRAND }} />
      {children}
    </span>
  );
}

// Section tag for LIGHT sections
function SectionTagDark({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#5AD4AE] uppercase tracking-[0.08em] mb-4">
      <span aria-hidden className="inline-block w-6 h-[2px] rounded" style={{ background: GRAD_BRAND }} />
      {children}
    </span>
  );
}

function CtaPrimary({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(245,64,94,0.35)]";
  const style = { background: GRAD_CTA, boxShadow: "0 4px 20px rgba(245,64,94,0.25)" };
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{children}<ArrowRight /></a>;
  return <a href={href} className={cls} style={style}>{children}<ArrowRight /></a>;
}

function CtaSecondary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white/80 border border-white/20 hover:bg-white/[0.06] hover:border-white/40 transition-all duration-300"
    >
      {children}
    </a>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-[0.9rem] text-[rgba(255,255,255,0.6)]">
      <span className="mt-0.5 text-[#5AD4AE] font-bold">✓</span>
      {children}
    </li>
  );
}

// ─── Section data ─────────────────────────────────────────────────────────────

const HOW_AGENTS = [
  {
    num: "01", title: "Tú defines el trabajo",
    desc: "Nos dices qué trabajo manual quieres automatizar — responder leads, limpiar el CRM, investigar prospectos, enviar follow-ups, generar propuestas. Cualquier flujo repetitivo.",
    tags: ["Ventas", "Marketing", "Operaciones", "Soporte"],
  },
  {
    num: "02", title: "Entrenamos al agente",
    desc: "Configuramos la IA con tus instrucciones exactas, tono de voz, criterios de cualificación y herramientas. Aprende tu proceso — no plantillas genéricas.",
    tags: ["Tus reglas", "Tus criterios", "Tu voz"],
  },
  {
    num: "03", title: "Trabaja de forma autónoma",
    desc: "Una vez desplegado, el agente opera 24/7. Monitorea señales, procesa datos, toma decisiones y ejecuta acciones — todo dentro de los límites que estableces.",
    tags: ["24/7", "Respuesta instantánea", "Cero errores"],
  },
  {
    num: "04", title: "Tú eres el dueño de todo",
    desc: "Sin lock-in de proveedor. Sin cuotas mensuales de plataforma. Eres dueño de los flujos, automatizaciones, prompts de IA y toda la infraestructura. Cancela cuando quieras.",
    tags: ["Tu infraestructura", "Entrega completa", "Sin lock-in"],
  },
];

const PROBLEMS = [
  {
    num: "01", title: "No saben por dónde empezar",
    desc: "Ni cómo priorizar lo que realmente impacta en negocio. La oferta de herramientas IA es abrumadora y cambia cada semana.",
  },
  {
    num: "02", title: "No tienen talento interno",
    desc: "Para diseñar, construir y operar agentes de IA ni automatizaciones. El 45% cita falta de personal cualificado como barrera principal.",
  },
  {
    num: "03", title: "Las opciones son arriesgadas",
    desc: "Freelancers sin verificar, agencias generalistas o consultores teóricos que no implementan. El riesgo es perder tiempo y dinero.",
  },
];

const LITMUS = [
  {
    num: "01", title: "Repetitivo",
    desc: "Se ejecuta diaria o semanalmente con los mismos pasos. Si tu equipo lo hace en piloto automático, una máquina debería hacerlo literalmente.",
    example: "Cada lead inbound pasa por el mismo flujo: enriquecer → puntuar → asignar",
  },
  {
    num: "02", title: "Consume tiempo, no cerebro",
    desc: "Consume horas pero no requiere pensamiento estratégico. Entrada de datos, búsquedas, construcción de listas, actualizaciones de estado.",
    example: "Los reps pasan 20 min investigando cada prospecto antes de llamar",
  },
  {
    num: "03", title: "Sensible a velocidad",
    desc: "Una respuesta más rápida cambia el resultado. El 78% de los compradores eligen al primero que responde.",
    example: "Los leads inbound esperan +4 horas porque el equipo está ocupado",
  },
  {
    num: "04", title: "Multi-herramienta",
    desc: "El flujo implica copiar datos entre 2+ plataformas. Más traspasos = más ROI del agente.",
    example: "Después de cada llamada: actualizar HubSpot, avisar en Slack, registrar en ClickUp",
  },
  {
    num: "05", title: "Propenso a errores",
    desc: "Cuando los humanos se apresuran u olvidan, se pierde revenue. Follow-ups perdidos, datos obsoletos, propuestas tardías.",
    example: "El 30% de los registros del CRM están desactualizados porque nadie los mantiene",
  },
];

const HOW_STEPS = [
  { num: "01", icon: "📞", title: "Discovery Call",           desc: "Entendemos tus procesos y mapeamos el flujo ideal del agente",                                      time: "30 min" },
  { num: "02", icon: "📐", title: "Diseño del Agente",        desc: "Arquitectura, integraciones y flujo de trabajo a medida",                                          time: "2–3 días" },
  { num: "03", icon: "🚀", title: "Construcción y Deploy",    desc: "Construimos, probamos y desplegamos el agente en tu empresa",                                       time: "1–2 semanas" },
  { num: "04", icon: "🤝", title: "Entrega + Capacitación",   desc: "Te entregamos todo. Documentación, training y soporte post-lanzamiento",                            time: "Es tuyo" },
];

const SERVICES = [
  {
    icon: "🧭",
    title: "Consultoría Estratégica",
    desc: "Diagnosticamos tus procesos, identificamos áreas de mayor impacto y definimos una hoja de ruta de implementación.",
    items: ["Análisis de procesos comerciales", "Identificación de oportunidades IA", "Hoja de ruta personalizada"],
  },
  {
    icon: "🤖",
    title: "Agentes de IA y Automatización",
    desc: "Diseñamos, construimos e instalamos agentes de IA y sistemas de automatización para todo el funnel comercial.",
    items: ["Inbound: detección, contenido, captación", "Outbound: prospección, secuencias, seguimiento", "Nurturing, conversión y handoff comercial"],
  },
  {
    icon: "👥",
    title: "Marketplace de Talento IA",
    desc: "Si necesitas algo que no cubrimos directamente, te conectamos con especialistas verificados de nuestro marketplace.",
    items: ["Talento verificado, no autodeclarado", "Automatizaciones, chatbots, CRM y más", "Pago por hitos con supervisión"],
    cta: { label: "Explorar Marketplace", href: "https://www.verymuch.ai" },
  },
];

const WHY = [
  { icon: "🍳", title: "Comemos nuestra propia comida",   desc: "Todo lo que vendemos lo usamos primero internamente. Si no funciona para nosotros, no lo vendemos." },
  { icon: "🛡️", title: "Pago por hitos verificados",      desc: "No pagas por promesas. Pagas por resultados verificados. Siempre velamos por los intereses del cliente." },
  { icon: "⚡",  title: "IA en producción real",           desc: "El cliente recibe un sistema que ya funciona en producción, no un piloto experimental. Riesgo mínimo." },
  { icon: "✅", title: "Talento verificado",              desc: "Cada especialista pasa un proceso de verificación. No es un directorio abierto donde cualquiera se registra." },
  { icon: "💰", title: "Precios competitivos",            desc: "Talento LATAM verificado permite precios significativamente más competitivos sin comprometer calidad." },
  { icon: "🌎", title: "España + México + EUA",           desc: "Presencia en los mercados clave del mundo hispanohablante y angloparlante. Operamos en español e inglés." },
];

const LEAD_MAGNETS = [
  {
    id: "signals-linkedin", status: "live" as const,
    badge: "Disponible ahora", icon: "🎯", category: "Prospección",
    title: "Agente de Ventas IA Basado en Señales de LinkedIn",
    description: "Detecta intención real, scoring ICP automático y outreach personalizado. Workflow n8n nodo por nodo.",
    href: "/signals-linkedin", ctaLabel: "Acceder al Blueprint",
    stack: ["Trigify", "Claude Code", "n8n"],
  },
  {
    id: "equipo-ventas-ia-30min", status: "live" as const,
    badge: "NUEVO · Feb 2026", icon: "🤖", category: "Agent Teams",
    title: "Monta tu Equipo de Ventas IA en 30 Minutos",
    description: "4 agentes IA en paralelo con Claude Opus 4.6: Investigador, Analista, Escritor y Coordinador. Sin código, en 30 min.",
    href: "/lead/equipo-ventas-ia-30min", ctaLabel: "Descargar guía gratis",
    stack: ["Claude Opus 4.6", "Agent Teams", "Claude.ai"],
  },
  {
    id: "agente-investigacion-comercial", status: "live" as const,
    badge: "Disponible ahora", icon: "🔍", category: "Inteligencia Comercial",
    title: "Agente IA de Investigación Comercial",
    description: "Investiga cualquier empresa con IA y genera briefings comerciales completos con DAFO, MEDDPICC y outreach personalizado.",
    href: "/lead/agente-investigacion-comercial", ctaLabel: "Acceder a la Guía",
    stack: ["Claude", "n8n", "Supabase"],
  },
  {
    id: "20-agentes-ia-b2b", status: "live" as const,
    badge: "Disponible ahora", icon: "🤖", category: "Estrategia Comercial",
    title: "20 Agentes de IA para tu Estrategia Comercial B2B",
    description: "Guía práctica con 20 agentes listos para montar. Tech stack, paso a paso y resultados esperados para cada uno.",
    href: "/lead/20-agentes-ia-b2b", ctaLabel: "Descargar la Guía",
    stack: ["Claude", "n8n", "Clay", "Instantly"],
  },
  {
    id: "cold-email", status: "soon" as const,
    badge: "Próximamente", icon: "✉️", category: "Outreach",
    title: "Sistema de Cold Email con IA",
    description: "Genera y envía cold emails hiper-personalizados a escala usando IA y tu propia infraestructura.",
    href: null, ctaLabel: "Próximamente",
    stack: ["Clay", "Claude", "Instantly"],
  },
  {
    id: "lead-scoring", status: "soon" as const,
    badge: "Próximamente", icon: "📊", category: "CRM & Scoring",
    title: "Lead Scoring Automático en tu CRM",
    description: "Conecta señales de intención con tu CRM y puntúa leads en tiempo real según tu ICP.",
    href: null, ctaLabel: "Próximamente",
    stack: ["n8n", "HubSpot", "GPT-4o"],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0B] text-white overflow-x-hidden">

      {/* ════ ANNOUNCEMENT BAR ══════════════════════════════════════════════ */}
      <a
        href="/signals-linkedin"
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-3 px-4 py-2.5 text-center transition-opacity hover:opacity-90"
        style={{ height: 40, background: "linear-gradient(105deg,#F5405E 0%,#F5A05E 45%,#5AD4AE 100%)" }}
      >
        <span className="text-white text-[0.82rem] font-medium">
          🎯 Nuevo: Blueprint gratuito — Agente de Ventas IA por Señales de LinkedIn
        </span>
        <span
          className="hidden sm:inline-flex items-center px-3 py-1 rounded-md text-white text-[0.75rem] font-semibold border border-white/30"
          style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}
        >
          Acceder →
        </span>
      </a>

      {/* ════ NAV ════════════════════════════════════════════════════════════ */}
      <HomeNav />

      {/* ════ HERO ══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex items-center justify-center min-h-screen overflow-hidden"
        style={{ paddingTop: 200, paddingBottom: 80 }}
      >
        {/* Orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute rounded-full blur-[80px]" style={{ width:600, height:600, background:"rgba(90,212,174,0.08)", top:"-10%", right:"-10%" }} />
          <div className="absolute rounded-full blur-[80px]" style={{ width:500, height:500, background:"rgba(245,160,94,0.06)", bottom:"-15%", left:"-10%" }} />
          <div className="absolute rounded-full blur-[80px]" style={{ width:300, height:300, background:"rgba(245,64,94,0.05)", top:"40%", left:"50%" }} />
        </div>
        {/* Grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(90,212,174,0.15)] px-5 py-2 mb-7"
            style={{ background: "rgba(90,212,174,0.08)" }}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#5AD4AE]" style={{ animation: "pulse 2s ease-in-out infinite" }} aria-hidden />
            <span className="text-[0.8rem] font-semibold text-[#5AD4AE] uppercase tracking-[0.06em]">
              IA aplicada a Marketing y Ventas
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white mb-6">
            Instalamos <GradientText>agentes de IA</GradientText>{" "}
            que venden mientras tú creces
          </h1>

          <p className="text-[clamp(1.05rem,2vw,1.2rem)] text-[rgba(255,255,255,0.55)] max-w-[620px] mx-auto leading-[1.75] mb-10">
            Agentes de inteligencia artificial y sistemas de automatización para marketing y ventas.
            Todo lo que vendemos lo probamos primero en nuestra propia empresa.
            IA en producción real, no pilotos experimentales.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <CtaPrimary href={GHL} external>Agenda una consultoría gratuita</CtaPrimary>
            <CtaSecondary href="#how">Ver cómo funciona ↓</CtaSecondary>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 justify-center">
            {[
              { val: "2-3 Semanas", label: "Tiempo de construcción" },
              { val: "100%",        label: "Propiedad" },
              { val: "3x+",        label: "ROI en el Año 1" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[1.8rem] font-extrabold text-white leading-tight">{s.val}</div>
                <div className="text-[0.8rem] text-[rgba(255,255,255,0.4)] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ HOW AI AGENTS WORK ════════════════════════════════════════════ */}
      <section className="py-24 bg-[#111115]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Cómo funcionan</SectionTag>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight text-white">
              Cómo funcionan <GradientText>realmente</GradientText> los agentes de IA
            </h2>
            <p className="mt-4 text-[rgba(255,255,255,0.45)] max-w-lg mx-auto leading-relaxed">
              Piénsalo como contratar un nuevo empleado — uno que nunca duerme.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_AGENTS.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 flex flex-col gap-4 hover:border-[rgba(90,212,174,0.2)] hover:bg-white/[0.05] transition-all duration-300"
              >
                <div
                  className="text-[3rem] font-extrabold leading-none bg-clip-text text-transparent opacity-15"
                  style={{ backgroundImage: GRAD_TEXT }}
                >
                  {s.num}
                </div>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-[0.88rem] text-[rgba(255,255,255,0.45)] leading-relaxed flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[0.72rem] font-semibold text-[#5AD4AE] bg-[rgba(90,212,174,0.08)] border border-[rgba(90,212,174,0.15)] rounded-full px-2.5 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PROBLEMS ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTagDark>El desafío</SectionTagDark>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight text-gray-900 mt-2">
              Tu empresa quiere implementar IA<br />
              pero se enfrenta a <GradientText>tres obstáculos</GradientText>
            </h2>
            <p className="mt-4 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Las empresas mid-market necesitan IA en sus procesos comerciales pero encuentran barreras reales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROBLEMS.map((p) => (
              <div
                key={p.num}
                className="relative bg-white border border-gray-100 rounded-2xl p-9 overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Hover top accent */}
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: GRAD_CTA }}
                />
                <div
                  className="text-[3rem] font-extrabold leading-none bg-clip-text text-transparent opacity-15 mb-4"
                  style={{ backgroundImage: GRAD_TEXT }}
                >
                  {p.num}
                </div>
                <h3 className="text-[1.1rem] font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-500 text-[0.92rem] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ AGENTS (CLIENT COMPONENT) ═════════════════════════════════════ */}
      <AgentsSection />

      {/* ════ LITMUS TEST ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Test de viabilidad</SectionTag>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight text-white mt-2">
              El test de <GradientText>viabilidad</GradientText> del agente de IA
            </h2>
            <p className="mt-4 text-[rgba(255,255,255,0.45)] max-w-lg mx-auto leading-relaxed">
              Evalúa cualquier flujo de trabajo con estos 5 criterios. Si cumple 3+, estás dejando dinero sobre la mesa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {LITMUS.map((c) => (
              <div
                key={c.num}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 hover:border-[rgba(90,212,174,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-[2.5rem] font-extrabold leading-none bg-clip-text text-transparent opacity-20 mb-3" style={{ backgroundImage: GRAD_TEXT }}>{c.num}</div>
                <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                <p className="text-[0.88rem] text-[rgba(255,255,255,0.45)] leading-relaxed mb-3">{c.desc}</p>
                <p className="text-[0.78rem] text-[rgba(255,255,255,0.25)] italic border-l-2 border-[rgba(90,212,174,0.3)] pl-3">{c.example}</p>
              </div>
            ))}
          </div>

          {/* Score CTA box */}
          <div className="max-w-xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 text-center">
            <p className="text-xl font-bold text-white mb-1">¿3 de 5? Es luz verde.</p>
            <p className="text-[rgba(255,255,255,0.45)] text-sm mb-6">→ Agenda una llamada. Lo evaluamos en 30 min.</p>
            <CtaPrimary href={GHL} external>Agenda tu llamada</CtaPrimary>
          </div>
        </div>
      </section>

      {/* ════ HOW IT WORKS / TIMELINE ══════════════════════════════════════ */}
      <section id="how" className="py-24 bg-[#FAFBFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTagDark>Proceso</SectionTagDark>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight text-gray-900 mt-2">
              De llamada a <GradientText>agente funcionando</GradientText> en 2-3 semanas
            </h2>
            <p className="mt-4 text-gray-500 max-w-md mx-auto leading-relaxed">
              Un proceso claro, medible y sin sorpresas. Pago por hitos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_STEPS.map((s, i) => (
              <div key={s.num} className="relative flex flex-col items-center text-center gap-4">
                {/* Connector line */}
                {i < HOW_STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden lg:block absolute top-[28px] left-[calc(50%+36px)] right-[-calc(50%-36px)] h-[2px]"
                    style={{ background: "linear-gradient(90deg,rgba(90,212,174,0.3),rgba(245,160,94,0.3))" }}
                  />
                )}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl relative z-10"
                  style={{ background: "linear-gradient(135deg,rgba(90,212,174,0.15),rgba(245,160,94,0.1))", border: "2px solid rgba(90,212,174,0.2)" }}
                >
                  {s.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                <p className="text-gray-500 text-[0.88rem] leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#5AD4AE]">
                  ⏱ {s.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SERVICES ══════════════════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-[#0A0A0B] relative overflow-hidden">
        {/* Orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute rounded-full blur-[120px] opacity-[0.08]" style={{ width:500, height:500, background:"#5AD4AE", top:"-20%", left:"-10%" }} />
          <div className="absolute rounded-full blur-[120px] opacity-[0.08]" style={{ width:500, height:500, background:"#F5A05E", bottom:"-20%", right:"-10%" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Nuestras soluciones</SectionTag>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight text-white mt-2">
              Resolvemos los tres. <GradientText>Así.</GradientText>
            </h2>
            <p className="mt-4 text-[rgba(255,255,255,0.45)] max-w-lg mx-auto leading-relaxed">
              Combinamos consultoría estratégica, implementación técnica y talento verificado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-10 flex flex-col gap-5 hover:border-[rgba(90,212,174,0.2)] hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(90,212,174,0.1)" }}
                >
                  {svc.icon}
                </div>
                <h3 className="text-[1.1rem] font-bold text-white">{svc.title}</h3>
                <p className="text-[rgba(255,255,255,0.45)] text-[0.92rem] leading-relaxed">{svc.desc}</p>
                <ul className="flex flex-col gap-2">
                  {svc.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                </ul>
                {svc.cta && (
                  <a
                    href={svc.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#5AD4AE] hover:text-[#3BA88A] transition-colors"
                  >
                    {svc.cta.label} ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ RESOURCES / LEAD MAGNETS HUB ═════════════════════════════════ */}
      <section id="resources" className="py-24 bg-[#111115]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-lg mb-14">
            <SectionTag>Recursos gratuitos</SectionTag>
            <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold tracking-tight text-white mt-2 mb-3">
              Blueprints para construir tus propios agentes
            </h2>
            <p className="text-[rgba(255,255,255,0.40)] text-sm leading-relaxed">
              Workflows completos, stack técnico real y costes detallados. Sin relleno, todo accionable.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {LEAD_MAGNETS.map((lm) => {
              const isLive = lm.status === "live";
              return (
                <li key={lm.id}>
                  <article
                    className={[
                      "group relative h-full rounded-2xl border flex flex-col gap-5 p-6 transition-all duration-300",
                      isLive
                        ? "border-white/10 bg-white/[0.04] hover:border-[rgba(90,212,174,0.3)] hover:bg-white/[0.06] hover:-translate-y-1"
                        : "border-white/[0.05] bg-white/[0.02] opacity-60",
                    ].join(" ")}
                  >
                    {isLive && (
                      <div aria-hidden className="absolute top-0 left-8 right-8 h-px rounded-full opacity-50" style={{ background: "linear-gradient(90deg,#5AD4AE,#F5A05E)" }} />
                    )}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-xl text-lg" style={{ background: isLive ? "rgba(90,212,174,0.1)" : "rgba(255,255,255,0.04)" }}>
                          {lm.icon}
                        </span>
                        <span className="text-[10px] font-semibold text-white/35 uppercase tracking-wider">{lm.category}</span>
                      </div>
                      <span className={["shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border", isLive ? "text-[#5AD4AE] border-[rgba(90,212,174,0.3)] bg-[rgba(90,212,174,0.1)]" : "text-white/25 border-white/[0.08]"].join(" ")}>
                        {lm.badge}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="text-base font-bold text-white leading-snug">{lm.title}</h3>
                      <p className="text-xs text-white/40 leading-relaxed">{lm.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {lm.stack.map((t) => (
                        <span key={t} className="text-[10px] font-medium text-white/25 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                    {isLive && lm.href ? (
                      <Link
                        href={lm.href}
                        className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-[#0A0A0B] hover:opacity-90 transition-opacity"
                        style={{ background: GRAD_BRAND }}
                        aria-label={`${lm.ctaLabel}: ${lm.title}`}
                      >
                        {lm.ctaLabel} <ArrowRight />
                      </Link>
                    ) : (
                      <button disabled aria-disabled className="mt-auto w-full py-3 rounded-xl text-sm font-bold text-white/20 border border-white/[0.06] cursor-not-allowed">
                        {lm.ctaLabel}
                      </button>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ════ WHY US ════════════════════════════════════════════════════════ */}
      <section id="why" className="py-24 bg-[#FAFBFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTagDark>Diferenciadores</SectionTagDark>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight text-gray-900 mt-2">
              ¿Por qué <GradientText>Verymuch.ai</GradientText>?
            </h2>
            <p className="mt-4 text-gray-500 max-w-md mx-auto leading-relaxed">
              No son claims de marketing. Son hechos operativos que nos diferencian.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ background: "linear-gradient(135deg,rgba(90,212,174,0.12),rgba(245,160,94,0.08))" }}
                >
                  {w.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-500 text-[0.88rem] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FINAL CTA ═════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#111115] relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(90,212,174,0.06) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionTag>Empecemos</SectionTag>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight text-white mt-2 mb-6">
            ¿Listo para construir tu primer <GradientText>agente de IA</GradientText>?
          </h2>
          <p className="text-[rgba(255,255,255,0.45)] max-w-xl mx-auto leading-relaxed mb-10">
            Agenda una llamada de descubrimiento gratuita. Te mostramos exactamente cómo un agente de IA
            personalizado puede funcionar para tu negocio.
          </p>
          <CtaPrimary href={GHL} external>Agenda tu consultoría gratuita</CtaPrimary>
        </div>
      </section>

      {/* ════ FOOTER ════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.06] bg-[#0A0A0B]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
            <div className="max-w-xs">
              <Image src="/logo-white.png" alt="VeryMuch.ai" width={140} height={36} className="h-7 w-auto object-contain mb-4" />
              <p className="text-[rgba(255,255,255,0.35)] text-sm leading-relaxed">
                Instalamos agentes de IA y sistemas de automatización para que las empresas vendan más con menos fricción.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-10 gap-y-3">
              {[
                { label: "Servicios",        href: "#services" },
                { label: "Cómo funciona",   href: "#how" },
                { label: "Agentes",         href: "#agents" },
                { label: "Por qué nosotros",href: "#why" },
                { label: "Recursos",        href: "#resources" },
                { label: "Marketplace",     href: "https://www.verymuch.ai", ext: true },
              ].map((l) =>
                l.ext ? (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/35 hover:text-white/70 transition-colors">{l.label}</a>
                ) : (
                  <a key={l.label} href={l.href} className="text-sm text-white/35 hover:text-white/70 transition-colors">{l.label}</a>
                )
              )}
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.06]">
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} Verymuch.ai — Todos los derechos reservados
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a
                href="https://www.verymuch.ai/cms/view/2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/25 hover:text-white/60 transition-colors"
              >
                Términos y condiciones
              </a>
              <span className="text-white/15 text-xs">·</span>
              <a
                href="https://www.verymuch.ai/cms/view/3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/25 hover:text-white/60 transition-colors"
              >
                Aviso de privacidad
              </a>
              <span className="text-white/15 text-xs">·</span>
              <a
                href="https://www.linkedin.com/company/verymuch-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/25 hover:text-white/60 transition-colors text-xs font-semibold"
              >
                in LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
