import type { MetadataRoute } from "next";

const BASE = "https://verymuch.ai";

type Route = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

// All paths in their canonical (Spanish, no-prefix) form.
// Each generates two entries: es (no prefix) + en (/en prefix).
const routes: Route[] = [
  { path: "",                                     changeFrequency: "weekly",  priority: 1.0 },
  { path: "/newsletter",                          changeFrequency: "monthly", priority: 0.8 },
  { path: "/signals-linkedin",                    changeFrequency: "monthly", priority: 0.8 },
  { path: "/lead/equipo-ventas-ia-30min",         changeFrequency: "monthly", priority: 0.8 },
  { path: "/lead/agente-investigacion-comercial", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lead/20-agentes-ia-b2b",              changeFrequency: "monthly", priority: 0.8 },
  { path: "/lead/2-agentes-leads-calientes",      changeFrequency: "monthly", priority: 0.8 },
  { path: "/lead/claude-remote-control",          changeFrequency: "monthly", priority: 0.8 },
  { path: "/legal/privacidad",                    changeFrequency: "monthly", priority: 0.8 },
  { path: "/legal/terminos",                      changeFrequency: "monthly", priority: 0.8 },
  { path: "/guia/agentes-ia-ventas-b2b",          changeFrequency: "monthly", priority: 0.9 },
];

// Pages without locale variants — single entry, no /en duplicate.
const standaloneRoutes: Route[] = [
  { path: "/ai-readiness", changeFrequency: "monthly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const bilingual = routes.flatMap(({ path, changeFrequency, priority }) => [
    // Spanish — default locale, no prefix (home → "/", rest → "/path")
    {
      url: `${BASE}${path || "/"}`,
      lastModified: now,
      changeFrequency,
      priority,
    },
    // English — /en prefix (home → "/en", rest → "/en/path")
    {
      url: `${BASE}/en${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    },
  ]);

  const standalone = standaloneRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  return [...bilingual, ...standalone];
}
