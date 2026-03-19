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

const BASE_URL = "https://www.verymuch.ai";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const config = getLeadMagnetConfig(slug);
  if (!config) return {};
  const { seo } = config;
  const esPath = `/lead/${slug}`;
  const enPath = `/en/lead/${slug}`;
  const canonical = locale === "es" ? `${BASE_URL}${esPath}` : `${BASE_URL}${enPath}`;
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        es:          `${BASE_URL}${esPath}`,
        en:          `${BASE_URL}${enPath}`,
        "x-default": `${BASE_URL}${esPath}`,
      },
    },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      type: "website",
      siteName: "VeryMuch.ai",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
    },
  };
}

export default async function LeadMagnetSlugPage({ params }: Props) {
  const { slug } = await params;
  const config = getLeadMagnetConfig(slug);
  if (!config) notFound();

  const envKey = `NOTION_URL_${slug.toUpperCase().replace(/-/g, "_")}`;
  const guideUrl =
    config.notionUrl ??
    process.env[envKey] ??
    process.env.NOTION_URL ??
    "#";

  return <LeadMagnetPage config={config} guideUrl={guideUrl} />;
}
