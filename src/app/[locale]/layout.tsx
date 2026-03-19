import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
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
