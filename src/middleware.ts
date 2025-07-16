import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localeDetection: false,
});

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  if (token) {
    const currentPath = request.nextUrl.pathname;

    if (currentPath.match(/^\/(ar|en)\/enrollment-status/)) {
      return intlMiddleware(request);
    }

    const locale = request.nextUrl.pathname.startsWith("/en") ? "en" : "ar";
    return NextResponse.redirect(
      new URL(`/${locale}/enrollment-status`, request.url)
    );
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
