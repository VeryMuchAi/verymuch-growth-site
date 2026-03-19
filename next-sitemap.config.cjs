/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.verymuch.ai",
  generateRobotsTxt: false,       // using our own /public/robots.txt
  generateIndexSitemap: false,
  outDir: "public",
  exclude: ["/api/*", "/en/api/*"],

  transform: async (config, path) => {
    const isEn   = path.startsWith("/en");
    const esPath = isEn ? (path.replace(/^\/en/, "") || "/") : path;
    const enPath = isEn ? path : `/en${path === "/" ? "" : path}`;

    const priority =
      path === "/" || path === "/en" ? 1.0
      : path.includes("/lead/") || path.includes("/signals-linkedin") ? 0.9
      : 0.8;

    return {
      loc:        path,
      changefreq: "weekly",
      priority,
      lastmod:    new Date().toISOString(),
      alternateRefs: [
        { href: `https://www.verymuch.ai${esPath}`, hreflang: "es" },
        { href: `https://www.verymuch.ai${enPath}`, hreflang: "en" },
        { href: `https://www.verymuch.ai${esPath}`, hreflang: "x-default" },
      ],
    };
  },
};
