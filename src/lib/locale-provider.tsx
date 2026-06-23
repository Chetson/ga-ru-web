import { headers } from "next/headers";
import {
  defaultLocale,
  isSupportedLocale,
  type Locale,
} from "@/lib/translations/dictionaries";

export async function getRequestLocale(): Promise<Locale> {
  try {
    const heads = await headers();
    const xLocale = heads.get("x-locale");
    if (xLocale && isSupportedLocale(xLocale)) {
      return xLocale;
    }
  } catch {
    // headers() not available (e.g. in generateStaticParams)
  }
  return defaultLocale;
}
