"use client";

import { useTheme } from "@/hooks/useTheme";
import BrandLogo from "@/components/BrandLogo";

const BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";

export default function YCNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: theme === "dark" ? "rgba(10,10,10,0.85)" : "rgba(248,245,240,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="https://verymuch.ai" aria-label="Back to Verymuch.ai homepage">
          <BrandLogo size="sm" />
        </a>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border opacity-60 transition-all duration-200 hover:opacity-100"
            style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-primary)" }}>
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-primary)" }}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(90deg, #F5A040 0%, #4AD4AE 100%)",
              color: "#0A0A0A",
            }}
            className="rounded-lg px-5 py-2 text-sm font-bold transition-opacity hover:opacity-90"
          >
            Book a call →
          </a>
        </div>
      </div>
    </header>
  );
}
