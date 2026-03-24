/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://verymuch.ai",
  generateRobotsTxt: false,       // using our own /public/robots.txt
  generateIndexSitemap: false,
  outDir: "public",
  exclude: ["/api/*", "/en/api/*"],

  /** Ensure dynamic locale routes (e.g. newsletter) are listed with alternates */
  additionalPaths: async (config) => {
    const a = await config.transform(config, "/newsletter");
    const b = await config.transform(config, "/en/newsletter");
    return [a, b].filter(Boolean);
  },

  transform: async (config, path) => {
    const isEn   = path.startsWith("/en");
    const esPath = isEn ? (path.replace(/^\/en/, "") || "/") : path;
    const enPath = isEn ? path : `/en${path === "/" ? "" : path}`;

    const priority =
      path === "/" || path === "/en" ? 1.0
      : path.includes("/lead/") || path.includes("/signals-linkedin") ? 0.9
      : path.includes("/newsletter") ? 0.85
      : 0.8;

    return {
      loc:        path,
      changefreq: "weekly",
      priority,
      lastmod:    new Date().toISOString(),
      alternateRefs: [
        { href: `https://verymuch.ai${esPath}`, hreflang: "es" },
        { href: `https://verymuch.ai${enPath}`, hreflang: "en" },
        { href: `https://verymuch.ai${esPath}`, hreflang: "x-default" },
      ],
    };
  },
};
