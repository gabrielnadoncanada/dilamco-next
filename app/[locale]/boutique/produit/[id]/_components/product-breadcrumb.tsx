"use client";

import { useTranslations, useLocale } from "next-intl";
import { AppLink as Link } from "@/components/AppLink";
import type { Product } from "@/lib/shop/types";
import { routes } from "@/lib/shop/routes";
import { pillarForCategory, collectionContent } from "@/lib/shop/collections";
import { localizeProductLabel, type ShopLocale } from "@/lib/shop/catalog-i18n";

export function ProductBreadcrumb({ product }: { product: Product }) {
  const t = useTranslations("shop.product");
  const locale = useLocale() as ShopLocale;
  // Pilier de taxonomie (Armoires de cuisine / Garde-manger / Vanités) — jamais
  // le jargon catalogue « Armoire du bas » (que personne ne cherche).
  const pillar = pillarForCategory(product.category);
  const name = localizeProductLabel(product.shortName || product.name, locale);

  return (
    <div className="flex flex-wrap py-4 pb-8 font-mono text-[11px] tracking-[0.04em] gap-1 text-muted-foreground [&_a:hover]:text-primary [&_span]:text-foreground max-[700px]:text-[11px]">
      <Link href={routes.home}>{t("breadcrumb.shop")}</Link> /{" "}
      {pillar && (
        <>
          <Link href={`/boutique/${pillar.slug}`}>
            {collectionContent(pillar, locale).crumb}
          </Link>{" "}
          /{" "}
        </>
      )}
      <span>{name}</span>
    </div>
  );
}
