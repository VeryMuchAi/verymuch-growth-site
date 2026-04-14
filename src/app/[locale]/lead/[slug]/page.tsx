import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLeadMagnetConfig, ALL_LEAD_MAGNETS } from "@/lib/lead-magnet";
import LeadMagnetPage from "@/components/LeadMagnetPage";
import { routing } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const slug of Object.keys(ALL_LEAD_MAGNETS)) {
      params.push({ locale, slug });
    }
  }
  return params;
}

const BASE_URL = "https://verymuch.ai";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const config = getLeadMagnetConfig(slug);
  if (!config) return {};
  const { seo }    = config;
  const isEn       = locale === "en";
  const title      = isEn ? (seo.enTitle       ?? seo.title)       : seo.title;
  const desc       = isEn ? (seo.enDescription  ?? seo.description) : seo.description;
  const ogTitle    = isEn ? (seo.enOgTitle      ?? seo.ogTitle    ?? title) : (seo.ogTitle    ?? seo.title);
  const ogDesc     = isEn ? (seo.enOgDescription ?? seo.ogDescription ?? desc) : (seo.ogDescription ?? seo.description);
  const esPath     = `/lead/${slug}`;
  const enPath     = `/en/lead/${slug}`;
  const canonical  = locale === "es" ? `${BASE_URL}${esPath}` : `${BASE_URL}${enPath}`;
  const ogLocale   = locale === "es" ? "es_ES" : "en_US";

  return {
    title:       { absolute: title },
    description: desc,
    alternates: {
      canonical,
      languages: {
        es:          `${BASE_URL}${esPath}`,
        en:          `${BASE_URL}${enPath}`,
        "x-default": `${BASE_URL}${esPath}`,
      },
    },
    openGraph: {
      type:        "website",
      siteName:    "VeryMuch.ai",
      locale:      ogLocale,
      url:         canonical,
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
}

export default async function LeadMagnetSlugPage({ params }: Props) {
  const { slug } = await params;
  const config = getLeadMagnetConfig(slug);
  if (!config) notFound();

  return <LeadMagnetPage config={config} />;
}
