import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";

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

export default function PrivacidadLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
