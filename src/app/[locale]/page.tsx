import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import BrandMarquee from "@/components/BrandMarquee";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const BASE_URL = "https://verymuch.ai";
const OG_HOME_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = locale === "es" ? `${BASE_URL}/` : `${BASE_URL}/en`;
  const title = "Verymuch.ai — Agentes de IA para ventas y marketing";
  const description =
    "Diseñamos e implementamos IA que se integra con tus herramientas y habla como tu marca. ~8 semanas de la idea al agente en producción.";
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Verymuch.ai",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: canonical,
      title,
      description,
      images: [{ url: OG_HOME_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_HOME_IMAGE] },
  };
}

// ─── Reusable primitives ─────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-6">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--eyebrow)" }} />
      <span className="vm-eyebrow">{children}</span>
    </div>
  );
}

function Avatar({ initials, tone = "teal" }: { initials: string; tone?: "teal" | "orange" | "honey" | "ink" }) {
  const map = {
    teal:   { bg: "#2C6B65", color: "#F0EEE8" },
    orange: { bg: "#D97757", color: "#F0EEE8" },
    honey:  { bg: "#DAB882", color: "#151514" },
    ink:    { bg: "#151514", color: "#F0EEE8" },
  };
  const s = map[tone];
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 vm-caption"
      style={{ background: s.bg, color: s.color, fontWeight: 700 }}
    >
      {initials}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function HomePage({ params }: Props) {
  await params;

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <HomeNav />

      {/* ═══ HERO · split with live chat mock ═══════════════════════════════ */}
      <section className="relative overflow-hidden pt-36 pb-24 px-6 lg:px-10 vm-grain">
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            right: "-15%",
            width: "60%",
            height: "70%",
            background:
              "radial-gradient(ellipse at center, rgba(172,237,235,0.18) 0%, rgba(218,184,130,0.12) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — copy */}
            <div className="pt-6">
              <Eyebrow>EN VIVO · VENTAS-AGENT</Eyebrow>
              <h1 className="vm-display-xl mb-7" style={{ color: "var(--text-primary)" }}>
                Tu próximo mejor empleado{" "}
                <span className="vm-grad-highlight">no duerme</span>.
              </h1>
              <p
                className="vm-body-l mb-10 max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Agentes de IA a medida. Conectados a tus herramientas. Formados con tu contexto.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-12">
                <a
                  href={GHL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg"
                >
                  Ver demo →
                </a>
                <a href="#proceso" className="btn-ghost btn-lg">
                  Leer proceso
                </a>
              </div>

              <div
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-[13px]"
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>$</span>
                <span>npm i @verymuch/agent</span>
              </div>
            </div>

            {/* Right — chat mock card */}
            <div className="lg:pl-6">
              <div className="vm-card p-5 lg:p-6 max-w-md lg:ml-auto w-full">
                <div
                  className="flex items-center justify-between pb-3.5 mb-5 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#BCDAC7" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#D7CCA0" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#DAB882" }} />
                  </div>
                  <span className="font-mono text-xs" style={{ color: "var(--text-muted)", letterSpacing: "0.06em" }}>
                    ventas-agent · online
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <div
                    className="max-w-[88%] rounded-2xl rounded-tl-sm px-4 py-3 vm-body-s"
                    style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                  >
                    Hola, vi que descargaste la guía de los 6 agentes. ¿Te ayudo a calcular tu ROI?
                  </div>
                  <div
                    className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 vm-body-s font-medium"
                    style={{ background: "var(--vm-grad)", color: "#151514" }}
                  >
                    Dale
                  </div>
                  <div
                    className="max-w-[88%] rounded-2xl rounded-tl-sm px-4 py-3 vm-body-s"
                    style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                  >
                    ¿Cuántos leads procesas al mes?
                  </div>
                </div>

                <div
                  className="mt-5 pt-3.5 flex items-center gap-2 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--success)" }} />
                  <span className="vm-caption" style={{ color: "var(--text-muted)" }}>
                    Activo · 247 chats hoy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandMarquee variant="adaptive" />

      {/* ═══ MÉTRICAS · dato clave destacado ════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow>IMPACTO · EN PRODUCCIÓN</Eyebrow>
          <h2 className="vm-display-l mb-14 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            De 200 tickets al día a 40.{" "}
            <span className="vm-grad-highlight">El agente</span> gestiona el resto.
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="vm-card-featured p-7 flex flex-col">
              <span className="vm-eyebrow mb-5 block" style={{ color: "var(--text-muted)" }}>
                DATO CLAVE · 01
              </span>
              <p className="vm-display-l mb-4" style={{ color: "var(--text-primary)" }}>+78%</p>
              <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
                En clientes que desplegaron el agente de captación.
              </p>
            </div>

            <div className="vm-card p-7 flex flex-col">
              <span className="vm-eyebrow mb-5 block" style={{ color: "var(--text-muted)" }}>
                TIEMPO · 02
              </span>
              <p className="vm-display-l mb-4" style={{ color: "var(--text-primary)" }}>32h</p>
              <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
                Ahorradas por semana en soporte.
              </p>
            </div>

            <div className="vm-card p-7 flex flex-col">
              <span className="vm-eyebrow mb-5 block" style={{ color: "var(--text-muted)" }}>
                PLAZO · 03
              </span>
              <p className="vm-display-l mb-4" style={{ color: "var(--text-primary)" }}>~8 sem</p>
              <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
                De la idea al agente en producción. Sprint cerrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESO · 5 pasos en flow ══════════════════════════════════════ */}
      <section id="proceso" className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow>PROCESO · 2026</Eyebrow>
          <h2 className="vm-display-l mb-5 max-w-3xl" style={{ color: "var(--text-primary)" }}>
            Cómo trabajamos.
          </h2>
          <p className="vm-body-l mb-14 max-w-2xl font-mono text-[15px]" style={{ color: "var(--text-secondary)", letterSpacing: "0.02em" }}>
            Discovery → diseño del agente → entrenamiento → despliegue → mejora continua.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { n: "01", t: "Discovery", d: "Mapeamos tu proceso y elegimos el agente con mejor ROI." },
              { n: "02", t: "Diseño",    d: "Arquitectura, tono de voz, integraciones con tu stack." },
              { n: "03", t: "Entreno",   d: "Formamos el agente con tu contexto, datos y casos reales." },
              { n: "04", t: "Despliegue",d: "Piloto con usuarios reales. Medimos KPIs desde el día 1." },
              { n: "05", t: "Mejora",    d: "Automation-as-a-Service. Iteramos sobre datos de producción." },
            ].map((s, i) => (
              <div key={s.n} className="vm-card p-6 flex flex-col relative">
                <span
                  className="font-mono text-xs mb-4"
                  style={{ color: "var(--text-muted)", letterSpacing: "0.14em" }}
                >
                  {s.n}
                </span>
                <h3 className="vm-heading mb-2" style={{ color: "var(--text-primary)" }}>{s.t}</h3>
                <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>{s.d}</p>
                {i < 4 && (
                  <span
                    aria-hidden
                    className="hidden lg:block absolute top-1/2 -right-3 font-mono text-xl"
                    style={{ color: "var(--text-muted)", transform: "translateY(-50%)" }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AGENTES · service cards + featured ═════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow>AGENTES · EN PRODUCCIÓN</Eyebrow>
          <h2 className="vm-display-l mb-5 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Agentes que{" "}
            <span className="vm-grad-highlight">convierten clientes</span>.
          </h2>
          <p className="vm-body-l mb-14 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Cada uno hace una cosa. Bien. Conectado a tu stack{" "}
            <span className="font-mono text-[15px]" style={{ color: "var(--text-primary)" }}>
              (n8n · claude · supabase · hubspot)
            </span>
            .
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { eyebrow: "SERVICIO · 01", t: "Agente de captación 24/7", d: "Califica leads en tu web y los pasa a ventas ya listos para cerrar." },
              { eyebrow: "SERVICIO · 02", t: "Agente de investigación",  d: "Investiga cuentas, detecta señales y prepara briefings antes de cada call." },
              { eyebrow: "SERVICIO · 03", t: "Agente de soporte",        d: "Responde tickets con tu tono. Los complejos los escala al equipo." },
              { eyebrow: "SERVICIO · 04", t: "Agente de contenido",      d: "Escribe posts, emails y propuestas usando casos y datos reales tuyos." },
            ].map((c) => (
              <div key={c.t} className="vm-card p-7 flex flex-col">
                <span className="vm-eyebrow mb-4 block" style={{ color: "var(--text-muted)" }}>
                  {c.eyebrow}
                </span>
                <h3 className="vm-heading mb-3" style={{ color: "var(--text-primary)" }}>{c.t}</h3>
                <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>{c.d}</p>
              </div>
            ))}

            {/* Featured — agent avatar card */}
            <div className="vm-card-featured p-7 flex flex-col lg:col-span-2">
              <span className="vm-eyebrow mb-4 block" style={{ color: "var(--text-muted)" }}>
                AGENTE · SDR
              </span>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ background: "var(--vm-grad)", color: "#151514" }}
                >
                  A
                </div>
                <div>
                  <h3 className="vm-heading" style={{ color: "var(--text-primary)" }}>Ana · Agente SDR</h3>
                  <p className="vm-caption" style={{ color: "var(--text-muted)" }}>VENTAS · OUTBOUND</p>
                </div>
              </div>
              <p className="vm-body-s mb-5" style={{ color: "var(--text-secondary)" }}>
                Prospecta en LinkedIn, personaliza cada mensaje con contexto real de la cuenta y reserva reuniones sin intervención humana.
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--success)" }} />
                <span className="vm-caption" style={{ color: "var(--text-muted)" }}>
                  Activo · 247 chats hoy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS · masonry ══════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow>TESTIMONIOS · CLIENTES</Eyebrow>
          <h2 className="vm-display-l mb-14 max-w-3xl" style={{ color: "var(--text-primary)" }}>
            Lo que dicen los equipos que{" "}
            <span className="vm-grad-highlight">ya lo usan</span>.
          </h2>

          <div className="grid lg:grid-cols-3 gap-5">
            {/* Big serif quote — spans two rows */}
            <div className="vm-card p-7 lg:row-span-2 flex flex-col">
              <p className="vm-quote-serif mb-7 flex-1">
                &ldquo;Diseñaron el agente como diseñaron el proceso: entendiendo a nuestro cliente primero.&rdquo;
              </p>
              <div
                className="flex items-center gap-3 pt-5 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <Avatar initials="MP" tone="orange" />
                <div>
                  <p className="vm-body-s" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                    María Puigdellívol
                  </p>
                  <p className="vm-caption" style={{ color: "var(--text-muted)" }}>
                    COO · Clinísima
                  </p>
                </div>
              </div>
            </div>

            {/* KPI card — featured wash */}
            <div className="vm-card-featured p-7 flex flex-col justify-center">
              <p
                className="mb-5"
                style={{
                  fontSize: "clamp(56px, 6vw, 88px)",
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: "-0.045em",
                  color: "var(--text-primary)",
                }}
              >
                32h
              </p>
              <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
                Ahorradas por semana en soporte.
              </p>
            </div>

            {/* Small quote 1 */}
            <div className="vm-card p-6">
              <div aria-hidden className="h-0.5 w-10 mb-4 rounded-full" style={{ background: "var(--vm-grad)" }} />
              <p className="vm-body mb-5" style={{ color: "var(--text-primary)" }}>
                &ldquo;El Sprint valió cada euro.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar initials="JM" tone="teal" />
                <p className="vm-body-s" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  Jordi Martí
                </p>
              </div>
            </div>

            {/* Small quote 2 */}
            <div className="vm-card p-6">
              <div aria-hidden className="h-0.5 w-10 mb-4 rounded-full" style={{ background: "var(--vm-grad)" }} />
              <p className="vm-body mb-5" style={{ color: "var(--text-primary)" }}>
                &ldquo;Son parte del equipo durante 6 semanas.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar initials="LS" tone="honey" />
                <p className="vm-body-s" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  Laia Soler
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL · agenda 30 min ══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 px-6 lg:px-10" style={{ background: "var(--bg-secondary)" }}>
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: "0%",
            left: "50%",
            width: "60%",
            height: "100%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse at center, rgba(172,237,235,0.14) 0%, rgba(218,184,130,0.08) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--eyebrow)" }} />
            <span className="vm-eyebrow">AGENDA · 30 MIN</span>
          </div>
          <h2 className="vm-display-l mb-5" style={{ color: "var(--text-primary)" }}>
            Agenda 30 min.{" "}
            <span className="vm-grad-highlight">Sin slides</span>, sin compromiso.
          </h2>
          <p className="vm-body-l mb-10 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Te mostramos un agente real funcionando en tu sector. Si no te sirve, lo dices y ya.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={GHL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
              Hablamos →
            </a>
            <Link href="/newsletter" className="btn-ghost btn-lg">
              Suscribirme a la newsletter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
