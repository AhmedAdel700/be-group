import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const PROTECTED_ROUTES = ["/enrollment-status"];

const intlMiddleware = createMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localeDetection: false,
});

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const pathname = request.nextUrl.pathname;

  const locale = pathname.startsWith("/en") ? "en" : "ar";
  const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";

  const isProtectedRoute = PROTECTED_ROUTES.includes(pathWithoutLocale);

  if (token) {
    if (!isProtectedRoute) {
      return NextResponse.redirect(
        new URL(`/${locale}/enrollment-status`, request.url)
      );
    }
  } else {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
