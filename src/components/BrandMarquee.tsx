"use client";

// ─── Brand data ───────────────────────────────────────────────────────────────

interface Brand { name: string; logo: string; dot: string }

const ROW1: Brand[] = [
  { name: "Claude",      logo: "/logos/claude.svg",      dot: "#E8832A" },
  { name: "ChatGPT",     logo: "/logos/chatgpt.svg",     dot: "#10A37F" },
  { name: "Gemini",      logo: "/logos/gemini.svg",      dot: "#4285F4" },
  { name: "Perplexity",  logo: "/logos/perplexity.svg",  dot: "#1FB8CD" },
  { name: "Google",      logo: "/logos/google.svg",      dot: "#EA4335" },
  { name: "n8n",         logo: "/logos/n8n.svg",         dot: "#EA4B71" },
  { name: "Make",        logo: "/logos/make.svg",        dot: "#7B2CFF" },
  { name: "Zapier",      logo: "/logos/zapier.svg",      dot: "#FF4A00" },
  { name: "Supabase",    logo: "/logos/supabase.svg",    dot: "#3ECF8E" },
  { name: "Vercel",      logo: "/logos/vercel.svg",      dot: "#888888" },
];

const ROW2: Brand[] = [
  { name: "GoHighLevel", logo: "/logos/gohighlevel.svg", dot: "#F97316" },
  { name: "HubSpot",     logo: "/logos/hubspot.svg",     dot: "#FF7A59" },
  { name: "Salesforce",  logo: "/logos/salesforce.svg",  dot: "#00A1E0" },
  { name: "Pipedrive",   logo: "/logos/pipedrive.svg",   dot: "#067279" },
  { name: "Clay",        logo: "/logos/clay.svg",        dot: "#C084FC" },
  { name: "Trigify",     logo: "/logos/trigify.svg",     dot: "#F5A040" },
  { name: "Instantly",   logo: "/logos/instantly.svg",   dot: "#6366F1" },
  { name: "Anthropic",   logo: "/logos/anthropic.svg",   dot: "#E8832A" },
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  /** "adaptive" uses CSS vars (homepage / newsletter — light + dark aware)
   *  "dark" forces dark treatment (standalone lead magnet pages) */
  variant?: "adaptive" | "dark";
  /** Optional label above the marquee. Pass null to hide. */
  label?: string | null;
  /** Override which brands to show (e.g. for lead magnet pages) */
  brands?: { row1?: Brand[]; row2?: Brand[] };
}

export type { Brand };
export { ROW1, ROW2 };

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
      <img
        src={brand.logo}
        alt={brand.name}
        width={18}
        height={18}
        className="w-[18px] h-[18px] object-contain flex-shrink-0"
        style={{ filter: dark ? "brightness(0) invert(0.6)" : undefined }}
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const dot = target.nextElementSibling as HTMLElement | null;
          if (dot) dot.style.display = "inline-block";
        }}
      />
      <span
        className="inline-block w-[7px] h-[7px] rounded-full flex-shrink-0"
        style={{ backgroundColor: brand.dot, display: "none" }}
      />
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
  brands,
}: Props) {
  const dark = variant === "dark";
  const row1 = brands?.row1 ?? ROW1;
  const row2 = brands?.row2 ?? ROW2;

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
        <MarqueeRow brands={row1} direction="left"  duration={28} dark={dark} />

        {/* Row 2 — scrolls right (offset cadence) */}
        <div className="mt-3">
          <MarqueeRow brands={row2} direction="right" duration={34} dark={dark} />
        </div>
      </div>
    </section>
  );
}
