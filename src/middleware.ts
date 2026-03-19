import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Exclude static files, api, legal pages, and the sales-intelligence proxy route
  matcher: [
    "/((?!api|_next|_vercel|favicon\\.ico|icon\\.png|logo.*|Verymuch.*|.*\\..*|privacidad|terminos|sales-intelligence).*)",
    "/en/:path*",
  ],
};
