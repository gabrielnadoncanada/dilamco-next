"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/**
 * Bascule FR/EN en pilule segmentée. `usePathname` (next-intl) renvoie le
 * pathname INTERNE sans préfixe de locale — pour une route dynamique c'est le
 * TEMPLATE (`/materiaux/[slug]`), pas le chemin concret. On passe donc
 * `params` (useParams) pour que next-intl substitue les segments dynamiques.
 */
export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const params = useParams();
  const active = useLocale();
  const t = useTranslations("localeSwitcher");

  return (
    <div
      className={cn(
        "inline-flex h-9 items-center rounded-full border border-border/80 bg-background p-0.5 text-xs font-semibold",
        className,
      )}
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={{ pathname, params } as ComponentProps<typeof Link>["href"]}
          locale={loc}
          aria-current={loc === active ? "true" : undefined}
          className={cn(
            "inline-flex h-full items-center rounded-full px-2.5 uppercase tracking-[0.06em] transition-ui focus-ring",
            loc === active
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {t(loc)}
        </Link>
      ))}
    </div>
  );
}
