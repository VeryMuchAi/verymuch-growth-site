"use client";

// ─── Brand data ───────────────────────────────────────────────────────────────

interface Brand { name: string; logo: string }

const ROW1: Brand[] = [
  { name: "Claude",      logo: "/logos/claude.svg" },
  { name: "ChatGPT",     logo: "/logos/chatgpt.svg" },
  { name: "Gemini",      logo: "/logos/gemini.svg" },
  { name: "Perplexity",  logo: "/logos/perplexity.svg" },
  { name: "Google",      logo: "/logos/google.svg" },
  { name: "n8n",         logo: "/logos/n8n.svg" },
  { name: "Make",        logo: "/logos/make.svg" },
  { name: "Zapier",      logo: "/logos/zapier.svg" },
  { name: "Supabase",    logo: "/logos/supabase.svg" },
  { name: "Vercel",      logo: "/logos/vercel.svg" },
];

const ROW2: Brand[] = [
  { name: "GoHighLevel", logo: "/logos/gohighlevel.svg" },
  { name: "HubSpot",     logo: "/logos/hubspot.svg" },
  { name: "Salesforce",  logo: "/logos/salesforce.svg" },
  { name: "Pipedrive",   logo: "/logos/pipedrive.svg" },
  { name: "Clay",        logo: "/logos/clay.svg" },
  { name: "Trigify",     logo: "/logos/trigify.svg" },
  { name: "Instantly",   logo: "/logos/instantly.svg" },
  { name: "Anthropic",   logo: "/logos/anthropic.svg" },
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  /** "adaptive" uses CSS vars (homepage / newsletter — light + dark aware)
   *  "dark" forces dark treatment (standalone lead magnet pages) */
  variant?: "adaptive" | "dark";
  /** Optional label above the marquee. Pass null to hide. */
  label?: string | null;
}

// ─── Single brand chip ────────────────────────────────────────────────────────

function BrandChip({ brand, dark }: { brand: Brand; dark: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold whitespace-nowrap flex-shrink-0 select-none"
      style={{
        background:  dark ? "rgba(255,255,255,0.04)" : "var(--bg-card)",
        borderColor: dark ? "rgba(255,255,255,0.08)" : "var(--border)",
        color:       dark ? "rgba(255,255,255,0.55)" : "var(--text-secondary)",
        boxShadow:   dark ? "none" : "var(--card-shadow)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={brand.logo} alt="" className="w-4 h-4 flex-shrink-0 object-contain" aria-hidden="true" />
      {brand.name}
    </span>
  );
}

// ─── One marquee row ──────────────────────────────────────────────────────────

function MarqueeRow({
  brands,
  direction,
  duration,
  dark,
}: {
  brands: Brand[];
  direction: "left" | "right";
  duration: number;
  dark: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...brands, ...brands];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-3 w-max marquee-wrap"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((b, i) => (
          <BrandChip key={`${b.name}-${i}`} brand={b} dark={dark} />
        ))}
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BrandMarquee({
  variant = "adaptive",
  label = "Stack tecnológico probado en producción",
}: Props) {
  const dark = variant === "dark";

  return (
    <section
      className="py-10 overflow-hidden"
      style={{ background: dark ? "rgba(0,0,0,0.2)" : "var(--bg-secondary)" }}
    >
      {/* Fade masks left + right */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
        }}
      >
        {/* Optional label */}
        {label !== null && (
          <p
            className="text-center caption mb-5 px-6"
            style={{
              color: dark ? "rgba(255,255,255,0.20)" : "var(--text-secondary)",
              opacity: 0.7,
            }}
          >
            {label}
          </p>
        )}

        {/* Row 1 — scrolls left */}
        <MarqueeRow brands={ROW1} direction="left"  duration={28} dark={dark} />

        {/* Row 2 — scrolls right (offset cadence) */}
        <div className="mt-3">
          <MarqueeRow brands={ROW2} direction="right" duration={34} dark={dark} />
        </div>
      </div>
    </section>
  );
}
