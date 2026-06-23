import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import {
  supportedLocales,
  defaultLocale,
} from "@/lib/translations/dictionaries";

const PUBLIC_FILE = /\.(.*)$/;
const COOKIE_NAME = "NEXT_LOCALE";

function getLocale(request: NextRequest): string {
  // 1. Cookie
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (
    cookieLocale &&
    supportedLocales.includes(cookieLocale as (typeof supportedLocales)[number])
  ) {
    return cookieLocale;
  }

  // 2. Accept-Language header
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    const languages = new Negotiator({
      headers: { "accept-language": acceptLang },
    }).languages(supportedLocales.slice());
    if (languages.length > 0) {
      return languages[0];
    }
  }

  // 3. Default
  return defaultLocale;
}

export default function proxy(request: NextRequest) {
  // Skip static files, favicon, etc.
  if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  const response = NextResponse.next();

  // Set locale cookie for future requests
  response.cookies.set(COOKIE_NAME, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  // Attach locale to request headers so layout/page can read it
  response.headers.set("x-locale", locale);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
