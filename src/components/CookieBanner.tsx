"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "vm-cookie-consent";

export default function CookieBanner() {
  const t = useTranslations("Cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage not available (SSR edge case)
    }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, "all"); } catch { /* noop */ }
    setVisible(false);
  }

  function reject() {
    try { localStorage.setItem(STORAGE_KEY, "essential"); } catch { /* noop */ }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] px-4 pb-4 sm:px-6 sm:pb-6"
      role="region"
      aria-label="Cookie consent"
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl border p-5 sm:p-6 shadow-2xl flex flex-col sm:flex-row gap-4 sm:items-center backdrop-blur-md"
        style={{
          background: "var(--bg-card)",
          borderColor: "var(--border)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
        }}
      >
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {t("message")}{" "}
            <a
              href="/privacidad"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity font-medium"
              style={{ color: "var(--accent-text)" }}
            >
              {t("learnMore")}
            </a>
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 rounded-xl text-sm font-semibold border transition-opacity hover:opacity-80"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            {t("reject")}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #F5A040 0%, #4AD4AE 100%)" }}
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
