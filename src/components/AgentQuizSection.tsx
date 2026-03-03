"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: "bottleneck",
    text: "¿Cuál es el mayor cuello de botella de tu equipo comercial?",
    options: [
      { label: "Respondemos leads demasiado lento",                rec: "signals-linkedin" },
      { label: "Conseguir respuestas en outreach",                  rec: "20-agentes-ia-b2b" },
      { label: "Investigar prospectos antes de cada llamada",        rec: "agente-investigacion-comercial" },
      { label: "El CRM siempre está desactualizado",                rec: "20-agentes-ia-b2b" },
      { label: "Los seguimientos y nurturing se nos escapan",        rec: "equipo-ventas-ia-30min" },
      { label: "Las propuestas tardan horas en salir",               rec: "equipo-ventas-ia-30min" },
      { label: "Coordinar al equipo sin perder contexto",            rec: "equipo-ventas-ia-30min" },
      { label: "Escalar el proceso sin contratar a nadie más",       rec: "20-agentes-ia-b2b" },
    ],
  },
  {
    id: "situation",
    text: "¿Cuál describe mejor tu situación hoy?",
    options: [
      { label: "LinkedIn es mi principal canal de prospección",                     rec: "signals-linkedin" },
      { label: "Tengo CRM pero el equipo no lo alimenta bien",                      rec: "20-agentes-ia-b2b" },
      { label: "Investigo cada empresa manualmente antes de contactar",              rec: "agente-investigacion-comercial" },
      { label: "Necesito que la IA trabaje en paralelo, no de forma secuencial",    rec: "equipo-ventas-ia-30min" },
      { label: "Mis ventas son en volumen, tickets medios o bajos",                 rec: "20-agentes-ia-b2b" },
      { label: "Mis ventas son enterprise, ciclos largos y decisiones complejas",   rec: "agente-investigacion-comercial" },
    ],
  },
  {
    id: "team",
    text: "¿Cuántas personas gestionan las ventas en tu empresa?",
    options: [
      { label: "Solo yo (founder que también vende)",  rec: "equipo-ventas-ia-30min" },
      { label: "2–4 personas",                         rec: "signals-linkedin" },
      { label: "5–15 personas",                        rec: "20-agentes-ia-b2b" },
      { label: "Más de 15 personas",                   rec: "agente-investigacion-comercial" },
    ],
  },
];

type Slug =
  | "signals-linkedin"
  | "agente-investigacion-comercial"
  | "equipo-ventas-ia-30min"
  | "20-agentes-ia-b2b";

const RESULTS: Record<Slug, { icon: string; tag: string; title: string; desc: string; href: string; label: string }> = {
  "signals-linkedin": {
    icon: "🎯",
    tag: "Señales de intención",
    title: "Agente de Ventas por Señales de LinkedIn",
    desc: "Tu mayor ROI está en detectar señales de intención en LinkedIn antes que tu competencia. Blueprint completo con Trigify, Claude Code y n8n — nodo por nodo.",
    href: "/signals-linkedin",
    label: "Acceder al Blueprint →",
  },
  "agente-investigacion-comercial": {
    icon: "🔍",
    tag: "Inteligencia comercial",
    title: "Agente de Investigación Comercial",
    desc: "Automatiza la research pre-llamada. De un nombre de empresa a un briefing con análisis DAFO, scoring MEDDPICC y talking points en minutos.",
    href: "/lead/agente-investigacion-comercial",
    label: "Ver la guía →",
  },
  "equipo-ventas-ia-30min": {
    icon: "🤖",
    tag: "Opus 4.6 · Agent Teams",
    title: "Equipo de Ventas IA en 30 Minutos",
    desc: "Monta 4 agentes IA en paralelo con Claude Opus 4.6: Investigador, Analista, Escritor y Coordinador. Sin código, en 30 minutos.",
    href: "/lead/equipo-ventas-ia-30min",
    label: "Ver la guía →",
  },
  "20-agentes-ia-b2b": {
    icon: "📊",
    tag: "Estrategia B2B",
    title: "20 Agentes IA para tu Estrategia Comercial B2B",
    desc: "Guía práctica con 20 agentes listos para implementar en cada etapa de tu pipeline. Tech stack real, paso a paso y resultados esperados.",
    href: "/lead/20-agentes-ia-b2b",
    label: "Descargar la guía →",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getTopSlug(answers: (string | null)[]): Slug {
  const score: Record<string, number> = {};
  for (const rec of answers) {
    if (rec) score[rec] = (score[rec] ?? 0) + 1;
  }
  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
  return (sorted[0]?.[0] ?? "signals-linkedin") as Slug;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AgentQuizSection() {
  const [step, setStep]       = useState(0);           // 0 = intro, 1-3 = questions, 4 = result
  const [answers, setAnswers] = useState<(string | null)[]>([null, null, null]);
  const [selected, setSelected] = useState<string | null>(null);

  const isIntro    = step === 0;
  const isResult   = step === QUESTIONS.length + 1;
  const qIndex     = step - 1;
  const question   = !isIntro && !isResult ? QUESTIONS[qIndex] : null;
  const progress   = isResult ? 100 : isIntro ? 0 : Math.round((step / QUESTIONS.length) * 100);
  const resultSlug = isResult ? getTopSlug(answers) : null;
  const result     = resultSlug ? RESULTS[resultSlug] : null;

  function handleSelect(rec: string) {
    setSelected(rec);
  }

  function handleNext() {
    if (isIntro) {
      setStep(1);
      setSelected(null);
      return;
    }
    if (!selected) return;
    const updated = [...answers];
    updated[qIndex] = selected;
    setAnswers(updated);
    setSelected(null);
    setStep(step + 1);
  }

  function handleRestart() {
    setStep(0);
    setAnswers([null, null, null]);
    setSelected(null);
  }

  return (
    <section id="quiz" className="py-24 bg-[#0A0A0B]">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-widest mb-4"
            style={{ borderColor: "rgba(90,212,174,0.25)", background: "rgba(90,212,174,0.07)", color: "#5AD4AE" }}
          >
            ✦ Test de ROI
          </span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight text-white leading-tight">
            Encuentra tu Agente IA de{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#5AD4AE 0%,#F5A05E 100%)" }}
            >
              mayor ROI
            </span>
          </h2>
          <p className="mt-4 text-[rgba(255,255,255,0.45)] max-w-md mx-auto">
            3 preguntas. Una recomendación personalizada basada en tu situación real.
          </p>
        </div>

        {/* ── Quiz card ──────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">

          {/* Progress bar */}
          {!isIntro && (
            <div className="h-1 w-full bg-white/[0.05]">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: "linear-gradient(90deg,#5AD4AE,#F5A05E)" }}
              />
            </div>
          )}

          <div className="grid lg:grid-cols-[1fr_320px]">

            {/* ── Left panel ─────────────────────────────────────────── */}
            <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06]">

              {/* INTRO */}
              {isIntro && (
                <div className="flex flex-col gap-6 h-full justify-center min-h-[320px]">
                  <div className="text-5xl">🤖</div>
                  <h3 className="font-display text-2xl font-bold text-white leading-snug">
                    ¿Qué agente IA necesita<br />tu equipo comercial?
                  </h3>
                  <p className="text-[rgba(255,255,255,0.50)] text-sm leading-relaxed max-w-sm">
                    Responde 3 preguntas sobre tu situación actual y te recomendaremos el agente IA que más impacto tendría en tu pipeline hoy.
                  </p>
                  <button
                    onClick={handleNext}
                    className="self-start px-7 py-3.5 rounded-xl font-bold text-sm text-[#0A0A0B] transition-opacity hover:opacity-90"
                    style={{ background: "linear-gradient(135deg,#5AD4AE 0%,#F5A05E 100%)" }}
                  >
                    Empezar el test →
                  </button>
                </div>
              )}

              {/* QUESTION */}
              {question && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[0.72rem] font-semibold text-[rgba(255,255,255,0.30)] uppercase tracking-widest">
                      Pregunta {step} de {QUESTIONS.length}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white leading-snug">
                    {question.text}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {question.options.map((opt) => {
                      const isActive = selected === opt.rec + opt.label;
                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleSelect(opt.rec + opt.label)}
                          className={[
                            "text-left px-4 py-3.5 rounded-xl border text-sm transition-all duration-150",
                            isActive
                              ? "border-[rgba(90,212,174,0.6)] bg-[rgba(90,212,174,0.08)] text-white font-semibold"
                              : "border-white/[0.08] bg-white/[0.03] text-[rgba(255,255,255,0.65)] hover:border-white/20 hover:text-white",
                          ].join(" ")}
                        >
                          {isActive && (
                            <span className="text-[#5AD4AE] mr-2 text-xs">✓</span>
                          )}
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!selected}
                    className="self-start px-7 py-3.5 rounded-xl font-bold text-sm text-[#0A0A0B] transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg,#5AD4AE 0%,#F5A05E 100%)" }}
                  >
                    {step < QUESTIONS.length ? "Siguiente →" : "Ver mi recomendación →"}
                  </button>
                </div>
              )}

              {/* RESULT — left side */}
              {isResult && result && (
                <div className="flex flex-col gap-6 min-h-[320px] justify-center">
                  <span className="text-[0.72rem] font-semibold text-[#5AD4AE] uppercase tracking-widest">
                    Tu recomendación personalizada
                  </span>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1">{result.icon}</span>
                    <div>
                      <span
                        className="inline-block text-[0.7rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2"
                        style={{ background: "rgba(90,212,174,0.1)", color: "#5AD4AE", border: "1px solid rgba(90,212,174,0.25)" }}
                      >
                        {result.tag}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white leading-snug mb-3">
                        {result.title}
                      </h3>
                      <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">
                        {result.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <Link
                      href={result.href}
                      className="px-7 py-3.5 rounded-xl font-bold text-sm text-[#0A0A0B] hover:opacity-90 transition-opacity"
                      style={{ background: "linear-gradient(135deg,#5AD4AE 0%,#F5A05E 100%)" }}
                    >
                      {result.label}
                    </Link>
                    <button
                      onClick={handleRestart}
                      className="px-5 py-3.5 rounded-xl font-semibold text-sm text-white/40 border border-white/[0.08] hover:text-white/70 hover:border-white/20 transition-all"
                    >
                      Repetir test
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ── Right panel ────────────────────────────────────────── */}
            <div className="p-8 lg:p-10 flex flex-col gap-4 justify-center">
              {!isResult ? (
                <>
                  <p className="text-[0.72rem] font-semibold text-[rgba(255,255,255,0.25)] uppercase tracking-widest mb-2">
                    {isIntro ? "Lo que descubrirás" : "Progreso"}
                  </p>
                  {isIntro ? (
                    <ul className="flex flex-col gap-3">
                      {[
                        "El agente con mayor impacto en tu pipeline",
                        "Tech stack exacto para tu caso",
                        "Guía gratuita para empezar hoy",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.55)]">
                          <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-[#5AD4AE]"
                            style={{ background: "rgba(90,212,174,0.1)", border: "1px solid rgba(90,212,174,0.2)" }}>
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {QUESTIONS.map((q, i) => {
                        const done    = i < qIndex;
                        const current = i === qIndex;
                        return (
                          <div key={q.id} className="flex items-center gap-3">
                            <div
                              className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold transition-all"
                              style={{
                                background: done
                                  ? "linear-gradient(135deg,#5AD4AE,#F5A05E)"
                                  : current
                                  ? "rgba(90,212,174,0.12)"
                                  : "rgba(255,255,255,0.04)",
                                border: current
                                  ? "1.5px solid rgba(90,212,174,0.4)"
                                  : "1.5px solid rgba(255,255,255,0.07)",
                                color: done ? "#0A0A0B" : current ? "#5AD4AE" : "rgba(255,255,255,0.2)",
                              }}
                            >
                              {done ? "✓" : i + 1}
                            </div>
                            <span className={`text-sm ${done ? "text-white/60" : current ? "text-white font-semibold" : "text-white/20"}`}>
                              {["Tu cuello de botella", "Tu situación", "Tu equipo"][i]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <p className="mt-4 text-[0.75rem] text-[rgba(255,255,255,0.20)] leading-relaxed">
                    Basado en tus respuestas, te recomendamos el agente IA con mayor probabilidad de impacto en tu caso específico.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[0.72rem] font-semibold text-[rgba(255,255,255,0.25)] uppercase tracking-widest mb-2">
                    Más recursos
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {(Object.entries(RESULTS) as [Slug, typeof RESULTS[Slug]][])
                      .filter(([slug]) => slug !== resultSlug)
                      .map(([slug, r]) => (
                        <Link
                          key={slug}
                          href={r.href}
                          className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] hover:border-[rgba(90,212,174,0.2)] hover:bg-white/[0.03] transition-all group"
                        >
                          <span className="text-xl">{r.icon}</span>
                          <span className="text-[0.8rem] text-white/45 group-hover:text-white/70 transition-colors leading-snug line-clamp-2">
                            {r.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
