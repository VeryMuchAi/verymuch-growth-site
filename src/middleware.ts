import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Run middleware on all paths EXCEPT static files, api, and legal pages
  matcher: [
    "/((?!api|_next|_vercel|favicon\\.ico|icon\\.png|logo.*|Verymuch.*|.*\\..*|privacidad|terminos).*)",
    "/en/:path*",
  ],
};
