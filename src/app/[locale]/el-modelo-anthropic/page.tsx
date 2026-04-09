import type { Metadata } from "next";
import { modeloAnthropicAgentesConfig } from "@/lib/lead-magnet";
import LeadMagnetPage from "@/components/LeadMagnetPage";

const { seo } = modeloAnthropicAgentesConfig;

const BASE_URL = "https://verymuch.ai";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const esPath   = "/el-modelo-anthropic";
const enPath   = "/en/el-modelo-anthropic";
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

export default function ElModeloAnthropicPage() {
  const guideUrl =
    process.env.NOTION_URL_MODELO_ANTHROPIC_AGENTES ??
    process.env.NOTION_URL ??
    "#";
  return <LeadMagnetPage config={modeloAnthropicAgentesConfig} guideUrl={guideUrl} />;
}
