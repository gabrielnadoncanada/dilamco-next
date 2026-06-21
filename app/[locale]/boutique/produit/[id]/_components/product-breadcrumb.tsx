"use client";

import { useTranslations } from "next-intl";
import { AppLink as Link } from "@/components/AppLink";
import type { Product } from "@/lib/shop/types";
import { collectionsFilter, routes } from "@/lib/shop/routes";

export function ProductBreadcrumb({ product }: { product: Product }) {
  const t = useTranslations("shop.product");
  return (
    <div className="flex flex-wrap py-4 pb-8 font-mono text-[11px] tracking-[0.04em] gap-1 text-muted-foreground [&_a:hover]:text-primary [&_span]:text-foreground max-[700px]:text-[11px]">
      <Link href={routes.home}>{t("breadcrumb.home")}</Link> /{" "}
      <Link href={routes.collections}>{t("breadcrumb.collections")}</Link> /{" "}
      <Link href={collectionsFilter.family(product.family)}>
        {product.family}
      </Link>{" "}
      / <span>{product.id}</span>
    </div>
  );
}
