import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://verymuch.ai";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const headersList = await headers();
  const rawPathname = headersList.get("x-pathname") ?? "/";

  // Strip locale prefix — "as-needed" means /en/... for English, / for Spanish
  const pathWithoutLocale = rawPathname.replace(/^\/(es|en)(\/|$)/, "/").replace(/\/$/, "") || "/";
  const trailingPath = pathWithoutLocale === "/" ? "" : pathWithoutLocale;

  const esUrl = `${BASE_URL}${trailingPath || "/"}`;
  const enUrl = `${BASE_URL}/en${trailingPath}`;

  return {
    alternates: {
      canonical: locale === "en" ? enUrl : esUrl,
      languages: {
        "es-ES": esUrl,
        "es-MX": esUrl,
        "es-CO": esUrl,
        "en-US": enUrl,
        "x-default": esUrl,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://verymuch.ai/#organization",
                  name: "Verymuch.ai",
                  url: "https://verymuch.ai",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://verymuch.ai/logo.png",
                  },
                  description:
                    "Instalamos agentes de IA y sistemas de automatización para que las empresas vendan más con menos fricción",
                  founder: [
                    {
                      "@type": "Person",
                      name: "Jorge Herrera Cruz",
                      jobTitle: "CEO",
                    },
                    {
                      "@type": "Person",
                      name: "Edwin Moreno",
                      jobTitle: "COO",
                    },
                  ],
                  sameAs: [
                    "https://www.linkedin.com/company/verymuch-ai",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://verymuch.ai/#website",
                  url: "https://verymuch.ai",
                  name: "Verymuch.ai",
                  publisher: {
                    "@id": "https://verymuch.ai/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://verymuch.ai/?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        {/* No-FOUC theme init — priority: localStorage → time-based */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('vm-theme-preference');if(s==='light'||s==='dark'){document.documentElement.setAttribute('data-theme',s);return;}var h=new Date().getHours();document.documentElement.setAttribute('data-theme',(h>=7&&h<19)?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
