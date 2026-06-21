"use client";

import { useTranslations, useLocale } from "next-intl";
import { isDoorPanel, isFlatPart } from "@/lib/shop/products";
import type { Product } from "@/lib/shop/types";
import {
  dimUnit,
  localizeCeiling,
  localizeCorner,
  type ShopLocale,
} from "@/lib/shop/catalog-i18n";

export function ProductSpecs({ product }: { product: Product }) {
  const t = useTranslations("shop.product");
  const locale = useLocale() as ShopLocale;
  const u = dimUnit(locale);
  const flat = isFlatPart(product) || isDoorPanel(product);
  const oak = product.code.endsWith("-muf");
  return (
    <dl className="grid grid-cols-[1fr_1.3fr] gap-y-2 max-[700px]:grid-cols-1 max-[700px]:gap-y-2 [&_dd]:m-0 [&_dd]:font-mono [&_dd]:text-xs [&_dd]:text-foreground [&_dt]:border-b [&_dt]:border-border [&_dt]:py-2.5 [&_dt]:text-xs [&_dt]:text-muted-foreground [&_dd]:border-b [&_dd]:border-border [&_dd]:py-2.5">
        <dt>{t("specs.width")}</dt>
        <dd>{product.w} {u}</dd>
        <dt>{t("specs.depth")}</dt>
        <dd>{product.d} {u}</dd>
        <dt>{t("specs.height")}</dt>
        <dd>{product.h} {u}</dd>
        <dt>{t("specs.ceiling")}</dt>
        <dd>{product.ceiling ? localizeCeiling(product.ceiling, locale) : "—"}</dd>
        {!flat ? (
          <>
            <dt>{t("specs.doors")}</dt>
            <dd>{product.doors || "—"}</dd>
            <dt>{t("specs.drawers")}</dt>
            <dd>{product.drawers || "—"}</dd>
            <dt>{t("specs.configuration")}</dt>
            <dd>
              {product.corner === "Non" || !product.corner
                ? t("specs.straight")
                : localizeCorner(product.corner, locale)}
            </dd>
            <dt>{t("specs.cabinet")}</dt>
            <dd>{t("specs.cabinetValue")}</dd>
            <dt>{t("specs.door")}</dt>
            <dd>{oak ? t("specs.doorOak") : t("specs.doorPainted")}</dd>
            <dt>{t("specs.hardware")}</dt>
            <dd>{t("specs.hardwareValue")}</dd>
          </>
        ) : (
          <>
            <dt>{t("specs.material")}</dt>
            <dd>{t("specs.materialValue")}</dd>
            <dt>{t("specs.installation")}</dt>
            <dd>{t("specs.installationValue")}</dd>
          </>
        )}
        <dt>{t("specs.warranty")}</dt>
        <dd>{t("specs.warrantyValue")}</dd>
    </dl>
  );
}
