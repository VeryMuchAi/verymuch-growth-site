"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";

export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme }  = useTheme();
  const t       = useTranslations("Nav");
  const locale  = useLocale();
  const pathname = usePathname();
  const router   = useRouter();

  const otherLocale = routing.locales.find((l) => l !== locale) as string;

  const NAV_LINKS = [
    { label: locale === "es" ? "Servicios"      : "Services",      href: "#services" },
    { label: locale === "es" ? "Cómo funciona"  : "How it works",  href: "#how" },
    { label: locale === "es" ? "Agentes"        : "Agents",        href: "#agents" },
    { label: locale === "es" ? "Recursos"       : "Resources",     href: "#resources" },
    { label: locale === "es" ? "Test de IA"     : "AI Readiness",  href: "/ai-readiness", highlight: true },
    { label: "Marketplace", href: "https://app.verymuch.ai", external: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Sticky nav ───────────────────────────────────────────────────── */}
      <nav
        aria-label="Navegación principal"
        className={[
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl border-b"
            : "bg-transparent",
        ].join(" ")}
        style={{
          top: 0,
          height: 64,
          background: scrolled ? "color-mix(in srgb, var(--bg-primary) 92%, transparent)" : undefined,
          borderColor: scrolled ? "var(--border)" : undefined,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between gap-6">
          {/* Logo — white for dark mode, color for light mode */}
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="/logo-white.png"
              alt="VeryMuch.ai"
              width={148}
              height={36}
              className="logo-white h-7 w-auto object-contain"
              priority
            />
            <Image
              src="/Verymuch_Logo_transparent_real.png"
              alt="VeryMuch.ai"
              width={148}
              height={36}
              className="logo-color h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7" role="list">
            {NAV_LINKS.map((l) => (
              l.highlight ? (
                <a
                  key={l.label}
                  href={l.href}
                  role="listitem"
                  className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #F5A040 0%, #4AD4AE 100%)", color: "#fff" }}
                >
                  {l.label}
                </a>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  role="listitem"
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm font-medium transition-opacity duration-200 hover:opacity-100 opacity-60"
                  style={{ color: "var(--text-primary)" }}
                >
                  {l.label}
                </a>
              )
            ))}
          </div>

          {/* Desktop right: locale switcher + theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <button
              onClick={() => router.replace(pathname, { locale: otherLocale })}
              aria-label={`Switch to ${otherLocale === "en" ? "English" : "Español"}`}
              className="px-3 py-1.5 rounded-lg text-xs font-bold border uppercase tracking-widest transition-opacity opacity-50 hover:opacity-100"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "var(--bg-card)" }}
            >
              {otherLocale === "en" ? "EN" : "ES"}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 opacity-50 hover:opacity-100 border"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-primary)" }}>
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-primary)" }}>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            <a href={GHL} target="_blank" rel="noopener noreferrer" className="btn-gradient-sm">
              {t("cta")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {[
              menuOpen ? "translate-y-[7px] rotate-45" : "",
              menuOpen ? "opacity-0 scale-x-0" : "",
              menuOpen ? "-translate-y-[7px] -rotate-45" : "",
            ].map((extra, i) => (
              <span
                key={i}
                className={`block w-6 h-[2px] rounded transition-all duration-300 ${extra}`}
                style={{ background: "var(--text-primary)" }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ───────────────────────────────────────────────── */}
      <div
        aria-modal="true"
        aria-label="Menú móvil"
        role="dialog"
        className={[
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-7",
          "transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ background: "var(--bg-primary)", paddingTop: 80 }}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={
              l.highlight
                ? "text-xl font-bold px-6 py-2 rounded-full transition-opacity hover:opacity-90"
                : "text-2xl font-semibold transition-opacity hover:opacity-100 opacity-60"
            }
            style={
              l.highlight
                ? { background: "linear-gradient(90deg, #F5A040 0%, #4AD4AE 100%)", color: "#fff" }
                : { color: "var(--text-primary)" }
            }
          >
            {l.label}
          </a>
        ))}
        <a
          href={GHL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="btn-gradient mt-2"
        >
          {t("cta")}
        </a>
        {/* Mobile locale switcher */}
        <button
          onClick={() => { router.replace(pathname, { locale: otherLocale }); setMenuOpen(false); }}
          className="text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-80 transition-opacity"
          style={{ color: "var(--text-primary)" }}
        >
          {otherLocale === "en" ? "Switch to English" : "Cambiar a Español"}
        </button>
        <button
          onClick={() => { toggleTheme(); setMenuOpen(false); }}
          aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          className="flex items-center gap-2 text-sm opacity-50 hover:opacity-80 transition-opacity"
          style={{ color: "var(--text-primary)" }}
        >
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
          {theme === "dark" ? "Modo claro" : "Modo oscuro"}
        </button>
      </div>
    </>
  );
}
