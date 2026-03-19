import type { Config } from "tailwindcss";

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
        "brand-gradient": "linear-gradient(90deg, #F5A040 0%, #4AD4AE 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(74,212,174,0.15) 0%, transparent 60%)",
      },
      fontFamily: {
        // DM Sans — body text (brand guideline)
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
        // Plus Jakarta Sans — headings / display (brand guideline)
        display: ["var(--font-display)", "system-ui", "sans-serif"],
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
  plugins: [],
};

export default config;
