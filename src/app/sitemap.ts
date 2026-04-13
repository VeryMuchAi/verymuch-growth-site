import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

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
  { path: "/lead/claude-skills-linkedin",         changeFrequency: "monthly", priority: 0.8 },
  { path: "/6-agentes-ia",                        changeFrequency: "monthly", priority: 0.8 },
  { path: "/legal/privacidad",                    changeFrequency: "monthly", priority: 0.8 },
  { path: "/legal/terminos",                      changeFrequency: "monthly", priority: 0.8 },
  { path: "/guia/agentes-ia-ventas-b2b",              changeFrequency: "monthly", priority: 0.9 },
  { path: "/guia/como-elegir-agencia-ia",             changeFrequency: "monthly", priority: 0.9 },
  { path: "/servicios/talent-marketplace",            changeFrequency: "weekly",  priority: 0.9 },
  { path: "/blog",                                             changeFrequency: "weekly",  priority: 0.8 },
  { path: "/servicios/consultoria-ia",                       changeFrequency: "monthly", priority: 0.9 },
  { path: "/servicios/agentes-automatizacion",               changeFrequency: "monthly", priority: 0.9 },
  { path: "/autor/edwin-moreno",                             changeFrequency: "monthly", priority: 0.7 },
  { path: "/autor/jorge-herrera-cruz",                       changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = routes.flatMap(({ path, changeFrequency, priority }) => [
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

  const blogEntries = blogPosts
    .filter((post) => !post.draft)
    .flatMap((post) => [
      {
        url: `${BASE}/blog/${post.slug}`,
        lastModified: new Date(post.dateISO),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${BASE}/en/blog/${post.slug}`,
        lastModified: new Date(post.dateISO),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
    ]);

  return [...staticEntries, ...blogEntries];
}
