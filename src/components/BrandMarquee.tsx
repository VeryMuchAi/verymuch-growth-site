"use client";

// ─── Brand type (also used in lead-magnet.ts via BrandEntry) ─────────────────

export interface Brand {
  name: string;
  /** Fallback dot color (hex) — used when no iconSlug or image fails to load */
  dot: string;
  /** Simple Icons slug — renders real logo via cdn.simpleicons.org */
  iconSlug?: string;
}

// ─── Default brand sets (homepage / newsletter) ───────────────────────────────

const ROW1: Brand[] = [
  { name: "Claude",      dot: "#E8832A", iconSlug: "anthropic" },
  { name: "ChatGPT",     dot: "#10A37F", iconSlug: "openai" },
  { name: "Gemini",      dot: "#4285F4", iconSlug: "googlegemini" },
  { name: "Perplexity",  dot: "#1FB8CD", iconSlug: "perplexity" },
  { name: "Google",      dot: "#EA4335", iconSlug: "google" },
  { name: "n8n",         dot: "#EA4B71", iconSlug: "n8n" },
  { name: "Zapier",      dot: "#FF4A00", iconSlug: "zapier" },
  { name: "Supabase",    dot: "#3ECF8E", iconSlug: "supabase" },
  { name: "Vercel",      dot: "#888888", iconSlug: "vercel" },
  { name: "Make",        dot: "#7B2CFF", iconSlug: "make" },
];

const ROW2: Brand[] = [
  { name: "HubSpot",     dot: "#FF7A59", iconSlug: "hubspot" },
  { name: "Salesforce",  dot: "#00A1E0", iconSlug: "salesforce" },
  { name: "Pipedrive",   dot: "#067279", iconSlug: "pipedrive" },
  { name: "LinkedIn",    dot: "#0A66C2", iconSlug: "linkedin" },
  { name: "GoHighLevel", dot: "#F97316", iconSlug: "gohighlevel" },
  { name: "Clay",        dot: "#C084FC", iconSlug: "clay" },
  { name: "Trigify",     dot: "#F5A040", iconSlug: "trigify" },
  { name: "Instantly",   dot: "#6366F1", iconSlug: "instantly" },
];

// ─── Component props ──────────────────────────────────────────────────────────

interface Props {
  /** "adaptive" uses CSS vars (homepage / newsletter — light + dark aware)
   *  "dark" forces dark treatment (standalone lead magnet pages) */
  variant?: "adaptive" | "dark";
  /** Optional label above the marquee. Pass null to hide completely. */
  label?: string | null;
  /**
   * Custom brand list for lead-magnet pages.
   * When provided, overrides default ROW1/ROW2 and shows two rows
   * with the same set (one left, one right) for a focused stack display.
   */
  brands?: Brand[];
}

// ─── Single brand chip ────────────────────────────────────────────────────────

// Map Simple Icons slugs to local SVG files in /public/logos.
// CDN (cdn.simpleicons.org) has proven unreliable — we self-host.
const SLUG_TO_LOCAL: Record<string, string> = {
  anthropic:    "/logos/anthropic.svg",
  openai:       "/logos/chatgpt.svg",
  googlegemini: "/logos/gemini.svg",
  perplexity:   "/logos/perplexity.svg",
  google:       "/logos/google.svg",
  n8n:          "/logos/n8n.svg",
  zapier:       "/logos/zapier.svg",
  supabase:     "/logos/supabase.svg",
  vercel:       "/logos/vercel.svg",
  make:         "/logos/make.svg",
  hubspot:      "/logos/hubspot.svg",
  salesforce:   "/logos/salesforce.svg",
  pipedrive:    "/logos/pipedrive.svg",
  linkedin:     "/logos/linkedin.svg",
  gohighlevel:  "/logos/gohighlevel.svg",
  clay:         "/logos/clay.svg",
  trigify:      "/logos/trigify.svg",
  instantly:    "/logos/instantly.svg",
  claude:       "/logos/claude.svg",
  chatgpt:      "/logos/chatgpt.svg",
};

function BrandChip({ brand, dark }: { brand: Brand; dark: boolean }) {
  const localPath = brand.iconSlug ? SLUG_TO_LOCAL[brand.iconSlug] : null;
  const logoUrl = localPath
    ? dark && brand.iconSlug === "linkedin"
      ? "/logos/linkedin-white.svg"
      : localPath
    : null;

  return (
    <span
      className="inline-flex items-center justify-center flex-shrink-0 select-none px-6"
      title={brand.name}
      style={{ height: 40 }}
    >
      {logoUrl ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={logoUrl}
          alt={brand.name}
          className="h-8 w-auto object-contain"
          style={{
            opacity: dark ? 0.85 : 0.9,
            filter: dark ? "brightness(0) invert(1)" : undefined,
          }}
          loading="lazy"
        />
      ) : (
        <span
          className="text-base font-semibold whitespace-nowrap"
          style={{ color: dark ? "rgba(255,255,255,0.55)" : "var(--text-secondary)" }}
        >
          {brand.name}
        </span>
      )}
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

  const allBrands = brands ?? [...ROW1, ...ROW2];
  const dur = Math.max(30, allBrands.length * 3.5);

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
              color:   dark ? "rgba(255,255,255,0.20)" : "var(--text-secondary)",
              opacity: 0.7,
            }}
          >
            {label}
          </p>
        )}

        <MarqueeRow brands={allBrands} direction="left" duration={dur} dark={dark} />
      </div>
    </section>
  );
}
