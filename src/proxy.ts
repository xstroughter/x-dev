import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es", "fr"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase());

  for (const pref of preferred) {
    const base = pref.split("-")[0];
    if (locales.includes(base)) return base;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
