const dictionaries = {
  en: () => import("./en.json").then((m) => m.default),
  ru: () => import("./ru.json").then((m) => m.default),
} as const;

export type Locale = keyof typeof dictionaries;

export const defaultLocale: Locale = "ru";
export const supportedLocales: Locale[] = ["ru", "en"];

export function isSupportedLocale(locale: string): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
