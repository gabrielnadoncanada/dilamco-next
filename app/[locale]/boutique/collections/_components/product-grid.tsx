"use client";

import { Fragment, Suspense, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryState,
} from "nuqs";
import { PCard } from "@/components/shop/pcard";
import type { Product } from "@/lib/shop/types";
import { familyRank, pluralTitle, SORT_VALUES } from "./types";
import {
  applyFilters,
  baseProducts,
  FINISH_VALUES,
  type CatalogScope,
} from "./filtering";

interface Props {
  scope?: CatalogScope;
  /** En-têtes de section par famille (index global, tri « Famille » seulement). */
  groupByFamily?: boolean;
}

/** nuqs (useSearchParams) exige un Suspense boundary pour le prerender statique. */
export function ProductGrid(props: Props) {
  return (
    <Suspense>
      <ProductGridInner {...props} />
    </Suspense>
  );
}

function ProductGridInner({ scope, groupByFamily = false }: Props) {
  const [sort] = useQueryState(
    "tri",
    parseAsStringLiteral(SORT_VALUES).withDefault("family"),
  );
  const [q] = useQueryState("q", parseAsString.withDefault(""));
  const [width] = useQueryState("largeur", parseAsInteger);
  const [finish] = useQueryState("fini", parseAsStringLiteral(FINISH_VALUES));
  const t = useTranslations("shop.collections");
  const locale = useLocale() as "fr" | "en";

  const base = useMemo(() => baseProducts(scope), [scope]);
  const total = base.length;

  const sorted = useMemo(() => {
    const filtered = applyFilters(base, { q, width, finish });
    return filtered.sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "width") return (a.w || 0) - (b.w || 0);
      const fa = familyRank(a.family);
      const fb = familyRank(b.family);
      if (fa !== fb) return fa - fb;
      return (a.w || 0) - (b.w || 0);
    });
  }, [base, q, width, finish, sort]);

  // Tous les produits sont rendus d'emblée : chaque fiche est un lien dans le
  // HTML initial (crawlable + indexable sans scroll), pas d'infinite-scroll.
  const visible = sorted;

  const familyTotals = useMemo(() => {
    const totals = new Map<string, number>();
    for (const p of sorted) {
      totals.set(p.family, (totals.get(p.family) ?? 0) + 1);
    }
    return totals;
  }, [sorted]);
  const sections =
    groupByFamily && sort === "family" ? sectionize(visible) : null;

  return (
    <div className="flex min-w-0 flex-col">
      {/* Le tri vit dans la sidebar (groupe « Trier ») — ici, le compte seulement. */}
      <div className="flex flex-wrap items-center justify-between gap-3 py-4">
        <span
          aria-live="polite"
          className="font-mono text-xs tracking-[0.04em] text-muted-foreground"
        >
          {sorted.length === total
            ? t("moduleCount", { count: total })
            : t("moduleCountOf", { count: sorted.length, total })}
        </span>
      </div>

      {sorted.length === 0 ? (
        <div className="mt-10 px-5 py-14 text-center text-muted-foreground">
          {t("noResults")}
        </div>
      ) : sections ? (
        <div className="grid grid-cols-3 gap-x-5 gap-y-7 min-[1440px]:grid-cols-4 max-[1100px]:grid-cols-2 max-[700px]:!grid-cols-2 max-[700px]:gap-x-3 max-[700px]:gap-y-[18px] max-[380px]:!grid-cols-1">
          {sections.map(({ family, items }) => (
            <Fragment key={family}>
              <h2 className="col-span-full mt-4 flex items-baseline justify-between gap-4 border-b border-border pb-2.5 first:mt-0">
                <span className="font-serif text-[22px] tracking-[-0.01em] text-foreground">
                  {pluralTitle(family, locale)}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {t("moduleCount", { count: familyTotals.get(family) ?? 0 })}
                </span>
              </h2>
              {items.map((p) => (
                <PCard key={p.code} product={p} finish={finish ?? scope?.couleur} />
              ))}
            </Fragment>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-x-5 gap-y-7 min-[1440px]:grid-cols-4 max-[1100px]:grid-cols-2 max-[700px]:!grid-cols-2 max-[700px]:gap-x-3 max-[700px]:gap-y-[18px] max-[380px]:!grid-cols-1">
          {visible.map((p) => (
            <PCard key={p.code} product={p} finish={finish ?? scope?.couleur} />
          ))}
        </div>
      )}
    </div>
  );
}

interface FamilySection {
  family: string;
  items: Product[];
}

function sectionize(list: Product[]): FamilySection[] {
  const sections: FamilySection[] = [];
  for (const p of list) {
    const last = sections[sections.length - 1];
    if (last && last.family === p.family) {
      last.items.push(p);
    } else {
      sections.push({ family: p.family, items: [p] });
    }
  }
  return sections;
}
