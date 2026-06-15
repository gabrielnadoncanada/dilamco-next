"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/**
 * Bascule FR/EN. `usePathname` (next-intl) renvoie le chemin SANS préfixe de
 * locale, donc on pointe vers la version équivalente de la page courante.
 */
export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const active = useLocale();
  const t = useTranslations("localeSwitcher");

  return (
    <div
      className={cn("flex items-center gap-1 text-sm font-medium", className)}
      aria-label={t("label")}
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 ? (
            <span aria-hidden className="px-1 text-muted-foreground/40">
              /
            </span>
          ) : null}
          <Link
            href={pathname}
            locale={loc}
            aria-current={loc === active ? "true" : undefined}
            className={cn(
              "rounded px-1.5 py-0.5 transition-colors",
              loc === active
                ? "text-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t(loc)}
          </Link>
        </span>
      ))}
    </div>
  );
}
