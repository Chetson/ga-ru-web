"use client";

import { useState, useEffect, useCallback } from "react";
import { GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/translations/dictionaries";
import { supportedLocales } from "@/lib/translations/dictionaries";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

const localeLabels: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
};

export function LanguageSwitcher({
  currentLocale,
  className,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);

  const switchTo = useCallback((locale: Locale) => {
    setPendingLocale(locale);
  }, []);

  useEffect(() => {
    if (pendingLocale) {
      document.cookie = `NEXT_LOCALE=${pendingLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
      window.location.reload();
    }
  }, [pendingLocale]);

  const otherLocale: Locale = currentLocale === "ru" ? "en" : "ru";

  if (open) {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        {supportedLocales.map((loc) => (
          <Button
            key={loc}
            variant={loc === currentLocale ? "default" : "outline"}
            size="xs"
            onClick={() => {
              if (loc !== currentLocale) switchTo(loc);
              setOpen(false);
            }}
          >
            {localeLabels[loc]}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="xs"
      className={cn(
        "gap-1 text-muted-foreground hover:text-foreground",
        className,
      )}
      onClick={() => setOpen(true)}
      title={localeLabels[otherLocale]}
    >
      <GlobeIcon className="size-3" />
      {localeLabels[currentLocale]}
    </Button>
  );
}
