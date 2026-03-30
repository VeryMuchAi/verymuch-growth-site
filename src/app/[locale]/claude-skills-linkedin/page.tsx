import type { Metadata } from "next";
import { claudeSkillsLinkedinConfig } from "@/lib/lead-magnet";
import LeadMagnetPage from "@/components/LeadMagnetPage";

const { seo } = claudeSkillsLinkedinConfig;

const BASE_URL  = "https://verymuch.ai";
const OG_IMAGE  = `${BASE_URL}/og_home_verymuch.png`;
const esPath    = "/claude-skills-linkedin";
const enPath    = "/en/claude-skills-linkedin";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn      = locale === "en";
  const title     = isEn ? (seo.enTitle       ?? seo.title)       : seo.title;
  const desc      = isEn ? (seo.enDescription  ?? seo.description) : seo.description;
  const ogTitle   = isEn ? (seo.enOgTitle      ?? seo.ogTitle    ?? title) : (seo.ogTitle    ?? seo.title);
  const ogDesc    = isEn ? (seo.enOgDescription ?? seo.ogDescription ?? desc) : (seo.ogDescription ?? seo.description);
  const canonical = isEn ? `${BASE_URL}${enPath}` : `${BASE_URL}${esPath}`;
  const ogLocale  = isEn ? "en_US" : "es_ES";

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

export default function ClaudeSkillsLinkedinPage() {
  const guideUrl =
    claudeSkillsLinkedinConfig.notionUrl ??
    process.env.NOTION_URL_CLAUDE_SKILLS_LINKEDIN ??
    process.env.NOTION_URL ??
    "#";

  return <LeadMagnetPage config={claudeSkillsLinkedinConfig} guideUrl={guideUrl} />;
}
