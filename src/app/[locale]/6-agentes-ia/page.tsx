import type { Metadata } from "next";
import { sixAgentsConfig } from "@/lib/lead-magnet";
import LeadMagnetPage from "@/components/LeadMagnetPage";

const { seo, content } = sixAgentsConfig;

const BASE_URL = "https://verymuch.ai";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const esPath   = "/6-agentes-ia";
const enPath   = "/en/6-agentes-ia";
const ogTitle  = seo.ogTitle       ?? seo.title;
const ogDesc   = seo.ogDescription ?? seo.description;

export const metadata: Metadata = {
  title:       { absolute: seo.title },
  description: seo.description,
  alternates: {
    canonical: `${BASE_URL}${esPath}`,
    languages: {
      es:          `${BASE_URL}${esPath}`,
      en:          `${BASE_URL}${enPath}`,
      "x-default": `${BASE_URL}${esPath}`,
    },
  },
  openGraph: {
    type:        "website",
    siteName:    "VeryMuch.ai",
    locale:      "es_ES",
    url:         `${BASE_URL}${esPath}`,
    title:       ogTitle,
    description: ogDesc,
    images:      [{ url: OG_IMAGE, width: 1200, height: 630, alt: ogTitle }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       ogTitle,
    description: ogDesc,
    images:      [OG_IMAGE],
  },
};

// ─── JSON-LD structured data ───────────────────────────────────────────────────

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: seo.title,
  description: seo.description,
  url: `${BASE_URL}${esPath}`,
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: BASE_URL, name: "VeryMuch.ai" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Recursos", item: `${BASE_URL}/#resources` },
      { "@type": "ListItem", position: 3, name: content.headline, item: `${BASE_URL}${esPath}` },
    ],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: content.headline,
  description: content.subheadline,
  url: `${BASE_URL}${esPath}`,
  numberOfItems: content.bullets.length,
  itemListElement: content.bullets.map((bullet, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: bullet,
  })),
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SixAgentesIaPage() {
  const guideUrl = process.env.NOTION_URL_6_AGENTES ?? process.env.NOTION_URL ?? "#";
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <LeadMagnetPage config={sixAgentsConfig} guideUrl={guideUrl} />
    </>
  );
}
