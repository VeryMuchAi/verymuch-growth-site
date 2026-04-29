import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Theme-aware CSS variable colors (light / dark) ──────────────────
        vm: {
          bg:      "var(--bg-primary)",
          "bg-2":  "var(--bg-secondary)",
          card:    "var(--bg-card)",
          fg:      "var(--text-primary)",
          "fg-2":  "var(--text-secondary)",
          accent:  "var(--accent)",
          warm:    "var(--accent-warm)",
          success: "var(--success)",
          error:   "var(--error)",
        },
        // ── Lead-magnet component palette (fixed, dark-theme only) ──────────
        brand: {
          dark:       "#0C0C0E",
          "dark-2":   "#111113",
          "dark-3":   "#1A1A1D",
          mint:       "#4AD4AE",
          "mint-dim": "#DDEAEE",
          amber:      "#F5A040",
          gray:       "#363536",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(172,237,235,0.15) 0%, transparent 60%)",
      },
      fontFamily: {
        // Inter — all text (brand guideline)
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // JetBrains Mono — eyebrows / mono
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
