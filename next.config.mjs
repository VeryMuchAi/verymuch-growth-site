import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/ai-readiness",
        has: [{ type: "query", key: "lang", value: "en" }],
        destination: "/en/ai-readiness",
        permanent: true,
      },
      {
        source: "/ai-readiness",
        has: [{ type: "query", key: "lang", value: "es" }],
        destination: "/es/ai-readiness",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
