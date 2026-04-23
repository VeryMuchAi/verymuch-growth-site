"use client";

import { useState } from "react";

type Cat = "all" | "captacion" | "inteligencia" | "conversion" | "operaciones";

const FILTERS: { id: Cat; label: string }[] = [
  { id: "all",          label: "Todos" },
  { id: "captacion",    label: "Captación" },
  { id: "inteligencia", label: "Inteligencia" },
  { id: "conversion",   label: "Conversión" },
  { id: "operaciones",  label: "Operaciones" },
];

const BADGE: Record<Cat, string> = {
  all:          "",
  captacion:    "text-[#2C6B65] bg-[rgba(172,237,235,0.1)] border-[rgba(172,237,235,0.2)]",
  inteligencia: "text-[#818CF8] bg-[rgba(129,140,248,0.1)] border-[rgba(129,140,248,0.2)]",
  conversion:   "text-[#D97757] bg-[rgba(218,184,130,0.1)] border-[rgba(218,184,130,0.2)]",
  operaciones:  "text-[#B8452C] bg-[rgba(245,64,94,0.1)] border-[rgba(245,64,94,0.2)]",
};

const AGENTS = [
  {
    id: "a1", cat: "captacion" as Cat, catLabel: "Captación",
    title: "Lead Router Inbound",
    problem: "Los leads esperan +4 horas. El 78% compra al primero que responde.",
    solution: "Responde en <60 s. Enriquece datos. Puntúa con IA. Alta puntuación → agenda. Baja → nurturing.",
    result: "5× más rápido → 3× más reuniones",
  },
  {
    id: "a2", cat: "captacion" as Cat, catLabel: "Captación",
    title: "Prospección por Señales",
    problem: "SDRs pierden el 70% del tiempo en investigación manual.",
    solution: "Monitorea señales, auto-enriquece contactos, personaliza con IA y envía por infraestructura calentada.",
    result: "De 2% a 5-8% tasa de respuesta",
  },
  {
    id: "a3", cat: "inteligencia" as Cat, catLabel: "Inteligencia",
    title: "CRM Hygiene Bot",
    problem: "CRM con 40% de datos obsoletos. Reportes poco fiables.",
    solution: "Escanea datos obsoletos, enriquece desde 100+ fuentes, detecta duplicados, actualiza cambios de empleo.",
    result: "95%+ de precisión, cero carga manual",
  },
  {
    id: "a4", cat: "inteligencia" as Cat, catLabel: "Inteligencia",
    title: "Agente Pre-Llamada",
    problem: "20-30 min de investigación por cada llamada de ventas.",
    solution: "Extrae noticias, LinkedIn, tech stack, funding, competencia. Briefing de 1 página 30 min antes de la llamada.",
    result: "Cero preparación, mejores conversaciones",
  },
  {
    id: "a5", cat: "conversion" as Cat, catLabel: "Conversión",
    title: "Nurturing & Follow-up",
    problem: "Follow-ups que se pierden. Leads que se enfrían.",
    solution: "Rastrea señales de engagement, dispara follow-ups personalizados, reactiva leads fríos con contexto fresco.",
    result: "40% más pipeline recuperado",
  },
  {
    id: "a6", cat: "conversion" as Cat, catLabel: "Conversión",
    title: "Generador de Propuestas",
    problem: "Propuestas personalizadas tardan +3 horas cada una.",
    solution: "Extrae notas, datos CRM y tarifas. La IA genera propuesta personalizada. El humano revisa y envía.",
    result: "90% menos tiempo por propuesta",
  },
  {
    id: "a7", cat: "operaciones" as Cat, catLabel: "Operaciones",
    title: "Agente de Onboarding",
    problem: "El onboarding es desordenado. Se pierden pasos clave.",
    solution: "Se activa al cerrar el deal. Crea workspace, envía bienvenida, agenda kickoff y provisiona cuentas.",
    result: "Tiempo de onboarding reducido 60%",
  },
  {
    id: "a8", cat: "operaciones" as Cat, catLabel: "Operaciones",
    title: "Ops Interno & Reportes",
    problem: "Hojas de cálculo manuales consumen horas cada semana.",
    solution: "Monitorea herramientas, sincroniza datos, genera reportes semanales, detecta anomalías y alerta al equipo.",
    result: "+10 h/semana ahorradas en ops",
  },
];

export default function AgentsSection() {
  const [active, setActive] = useState<Cat>("all");
  const visible = AGENTS.filter((a) => active === "all" || a.cat === active);

  return (
    <section id="agents" className="py-24 bg-[#FAFBFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionTagLight>Agentes en producción</SectionTagLight>
          <h2 className="text-3xl lg:text-[2.4rem] font-extrabold text-gray-900 mt-4 mb-4 leading-tight tracking-tight">
            Agentes funcionando{" "}
            <GradientText>ahora mismo</GradientText>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            No son conceptos. Son sistemas vivos generando resultados.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filtrar por categoría">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              aria-pressed={active === f.id}
              className={[
                "px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
                active === f.id
                  ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700",
              ].join(" ")}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
          {visible.map((agent) => (
            <li key={agent.id}>
              <article className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 h-full hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                {/* Hover top border */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(135deg,#B8452C,#D97757)" }}
                />

                {/* Category badge */}
                <span
                  className={`self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${BADGE[agent.cat]}`}
                >
                  {agent.catLabel}
                </span>

                <h3 className="text-sm font-bold text-gray-900 leading-snug">{agent.title}</h3>

                <div className="flex flex-col gap-2 flex-1 text-xs">
                  <p className="font-bold text-red-500 uppercase tracking-wider text-[10px]">Problema</p>
                  <p className="text-gray-500 leading-relaxed">{agent.problem}</p>
                  <p className="font-bold text-blue-500 uppercase tracking-wider text-[10px] mt-1">Solución</p>
                  <p className="text-gray-500 leading-relaxed">{agent.solution}</p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-1">Resultado</p>
                  <p
                    className="text-sm font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)" }}
                  >
                    {agent.result}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Shared helpers (used only inside this file) ──────────────────────────────
function SectionTagLight({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#2C6B65] uppercase tracking-[0.08em]">
      <span
        aria-hidden="true"
        className="inline-block w-6 h-[2px] rounded"
        style={{ background: "linear-gradient(135deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)" }}
      />
      {children}
    </span>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: "linear-gradient(90deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)" }}
    >
      {children}
    </span>
  );
}
