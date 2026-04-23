"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import BrandLogo from "@/components/BrandLogo";

const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";

const SERVICE_LINKS = [
  {
    labelEs: "Agentes & Automatización",
    labelEn: "Agents & Automation",
    href: "/servicios/agentes-automatizacion",
  },
  {
    labelEs: "Consultoría de IA",
    labelEn: "AI Consulting",
    href: "/servicios/consultoria-ia",
  },
  {
    labelEs: "Talent Marketplace",
    labelEn: "Talent Marketplace",
    href: "/servicios/talent-marketplace",
  },
];

export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme }  = useTheme();
  const t       = useTranslations("Nav");
  const locale  = useLocale();
  const pathname = usePathname();
  const router   = useRouter();

  const otherLocale = routing.locales.find((l) => l !== locale) as string;

  const NAV_LINKS: { label: string; href: string; highlight?: boolean; external?: boolean; isServices?: boolean }[] = [
    { label: locale === "es" ? "Servicios"      : "Services",      href: "/#services", isServices: true },
    { label: locale === "es" ? "Cómo funciona"  : "How it works",  href: "/#how" },
    { label: locale === "es" ? "Agentes"        : "Agents",        href: "/#agents" },
    { label: locale === "es" ? "Recursos"       : "Resources",     href: "/#resources" },
    { label: locale === "es" ? "Blog"           : "Blog",          href: "/blog" },
    { label: t("nav_newsletter"), href: "/newsletter" },
    { label: locale === "es" ? "Test de IA"     : "AI Readiness",  href: `/ai-readiness?lang=${locale}`, highlight: true },
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          height: 76,
          background: scrolled ? "color-mix(in srgb, var(--bg-primary) 92%, transparent)" : undefined,
          borderColor: scrolled ? "var(--border)" : undefined,
        }}
      >
        <div className="w-full max-w-[1800px] mx-auto px-8 md:px-10 xl:px-16 2xl:px-24 h-full flex items-center justify-between gap-8 xl:gap-12">
          {/* Logo — inline Brand Book wordmark with .Ai gradient badge */}
          <Link href="/" className="flex-shrink-0 z-10" aria-label="Verymuch.ai · Inicio">
            <BrandLogo size="md" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9 xl:gap-11" role="list">
            {NAV_LINKS.map((l) => (
              l.highlight ? (
                <a
                  key={l.label}
                  href={l.href}
                  role="listitem"
                  className="vm-caption font-mono font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all hover:brightness-95 bg-vm-grad"
                  style={{ color: "#151514", letterSpacing: "0.08em" }}
                >
                  {l.label}
                </a>
              ) : l.isServices ? (
                <div key={l.label} className="relative" ref={dropdownRef} role="listitem">
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-1 text-sm xl:text-[15px] font-medium transition-opacity duration-200 hover:opacity-100 opacity-60 whitespace-nowrap"
                    style={{ color: "var(--text-primary)" }}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {l.label}
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl border overflow-hidden shadow-lg z-50"
                      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                    >
                      {SERVICE_LINKS.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-150 hover:opacity-100 opacity-70 border-b last:border-0"
                          style={{ color: "var(--text-primary)", borderColor: "var(--border)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-vm-grad"
                          />
                          {locale === "es" ? s.labelEs : s.labelEn}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                (() => {
                  const isRoute  = !l.href.startsWith("#") && !l.href.startsWith("/#");
                  const isActive = isRoute && pathname === l.href.split("?")[0];
                  return (
                    <a
                      key={l.label}
                      href={l.href}
                      role="listitem"
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`relative text-sm xl:text-[15px] font-medium transition-opacity duration-200 hover:opacity-100 whitespace-nowrap ${isActive ? "opacity-100" : "opacity-60"}`}
                      style={{ color: "var(--text-primary)" }}
                    >
                      {l.label}
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute left-0 right-0 -bottom-1.5 h-0.5 rounded-full"
                          style={{ background: "var(--vm-grad)" }}
                        />
                      )}
                    </a>
                  );
                })()
              )
            ))}
          </div>

          {/* Desktop right: locale switcher + theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3 xl:gap-5">
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

            <a href={GHL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
              {t("cta")} →
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
          l.isServices ? (
            <div key={l.label} className="flex flex-col items-center gap-3">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center gap-2 text-2xl font-semibold transition-opacity hover:opacity-100 opacity-60"
                style={{ color: "var(--text-primary)" }}
              >
                {l.label}
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="flex flex-col items-center gap-2">
                  {SERVICE_LINKS.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                      className="text-lg font-medium transition-opacity hover:opacity-100 opacity-50"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {locale === "es" ? s.labelEs : s.labelEn}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={
              l.highlight
                ? "vm-heading px-6 py-2 rounded-full transition-all hover:brightness-95 bg-vm-grad"
                : "vm-display-m transition-opacity hover:opacity-100 opacity-60"
            }
            style={
              l.highlight
                ? { color: "#151514" }
                : { color: "var(--text-primary)", fontSize: "26px" }
            }
          >
            {l.label}
          </a>
          )
        ))}
        <a
          href={GHL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="btn-primary btn-lg mt-2"
        >
          {t("cta")} →
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
