import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLeadMagnetConfig, ALL_LEAD_MAGNETS } from "@/lib/lead-magnet";
import LeadMagnetPage from "@/components/LeadMagnetPage";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(ALL_LEAD_MAGNETS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const config = getLeadMagnetConfig(params.slug);
  if (!config) return {};
  const { seo } = config;
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      type: "website",
      siteName: "VeryMuch.ai",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
    },
  };
}

export default function LeadMagnetSlugPage({ params }: Props) {
  const config = getLeadMagnetConfig(params.slug);
  if (!config) notFound();

  // Priority: 1) config.notionUrl  2) slug-specific env var  3) generic NOTION_URL
  const envKey = `NOTION_URL_${params.slug.toUpperCase().replace(/-/g, "_")}`;
  const guideUrl =
    config.notionUrl ??
    process.env[envKey] ??
    process.env.NOTION_URL ??
    "#";

  return <LeadMagnetPage config={config} guideUrl={guideUrl} />;
}