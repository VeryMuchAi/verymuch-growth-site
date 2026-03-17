"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "vm-theme-preference";

/** Returns the theme based on local time (light 07:00–19:00, dark otherwise). */
function getAutoTheme(): Theme {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

/**
 * useTheme — theme management hook (client-only, no SSR).
 *
 * Priority:
 *  1. Manual preference stored in localStorage ("vm-theme-preference")
 *  2. Time-based auto: light 07:00–19:00, dark 19:00–07:00
 *
 * Returns:
 *  - theme:       current 'light' | 'dark'
 *  - toggleTheme: flip theme and persist as manual
 *  - isManual:    whether user has explicitly chosen a theme
 */
export function useTheme() {
  // Default to "dark" on server to avoid hydration mismatch.
  // The inline script in layout.tsx corrects this before first paint.
  const [theme, setTheme]     = useState<Theme>("dark");
  const [isManual, setManual] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      setManual(true);
      applyTheme(saved);
    } else {
      const auto = getAutoTheme();
      setTheme(auto);
      setManual(false);
      applyTheme(auto);
    }
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setManual(true);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  return { theme, toggleTheme, isManual };
}
