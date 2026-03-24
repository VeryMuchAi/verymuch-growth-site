import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  // Default locale (es) has no prefix: / → Spanish, /en → English
  localePrefix: "as-needed",
  localeDetection: false,
});
