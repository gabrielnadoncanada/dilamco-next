"use client";

import { useCart } from "@/components/shop/cart-provider";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { AppLink as Link } from "@/components/AppLink";
import {
  localizeProductLabel,
  localizeColor,
  localizeMolding,
  type ShopLocale,
} from "@/lib/shop/catalog-i18n";
import { Button } from "@/components/ui/button";
import { Eyebrow, Headline } from "@/components/shop/ds";
import { routes } from "@/lib/shop/routes";
import { findProduct } from "@/lib/shop/products";
import { photoForProduct, PLACEHOLDER_PRODUCT_SRC } from "@/lib/shop/photos";
import { Price } from "@/components/shop/price";

export function SoumissionSummary() {
  const cart = useCart();
  const t = useTranslations("shop.quote.summary");
  const locale = useLocale() as ShopLocale;

  return (
    <aside className="sticky top-[120px] self-start border border-border bg-secondary p-8 max-[1000px]:static">
      <Eyebrow>{t("eyebrow")}</Eyebrow>
      <Headline level="title" as="h3" className="mt-2">
        {t("selectedModules", { count: cart.totalQty })}
      </Headline>
      {cart.items.length === 0 ? (
        <div className="py-6 text-[13px] leading-[1.6] text-muted-foreground">
          {t("emptyHint")}
          <div className="mt-4">
            <Button asChild variant="ghost" size="small">
              <Link href={routes.catalogue}>{t("browse")}</Link>
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-col gap-3.5 border-b border-border pb-5 group-data-[show-prices=false]/body:hidden">
            {cart.items.map((it) => (
              <div
                key={it.key}
                className="grid grid-cols-[40px_1fr_auto] items-start gap-3 text-xs"
              >
                <span className="relative block aspect-square border border-border bg-card">
                  {(() => {
                    const product = findProduct(it.productId);
                    const src = product
                      ? photoForProduct(product, it.color)
                      : PLACEHOLDER_PRODUCT_SRC;
                    return (
                      <Image
                        src={src}
                        alt={it.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    );
                  })()}
                  <span className="absolute -right-1.5 -top-1.5 flex min-w-[18px] items-center justify-center rounded-full bg-foreground px-1 font-mono text-[10px] leading-[18px] text-background">
                    {it.qty}
                  </span>
                </span>
                <span>
                  <span className="font-serif text-sm leading-[1.2] text-foreground">
                    {localizeProductLabel(it.name, locale)}
                  </span>
                  <br />
                  <span className="text-[11px] text-muted-foreground">
                    {localizeColor(it.color, locale)} · Shaker{" "}
                    {localizeMolding(it.molding, locale)}
                  </span>
                </span>
                <Price amount={it.price * it.qty} size="sm" />
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-2.5 group-data-[show-prices=false]/body:hidden">
            <div className="flex justify-between text-[13px] text-soft-foreground">
              <span>{t("subtotal")}</span>
              <Price amount={cart.subtotal} size="sm" />
            </div>
            <div className="flex justify-between text-[13px] text-soft-foreground">
              <span>{t("panelsFillers")}</span>
              <span className="text-muted-foreground">{t("quoted")}</span>
            </div>
            <div className="flex justify-between text-[13px] text-soft-foreground">
              <span>{t("deliveryInstall")}</span>
              <span className="text-muted-foreground">{t("quoted")}</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-border pt-3.5 font-serif text-lg tracking-[-0.01em] text-foreground">
              <span>{t("modulesEstimate")}</span>
              <Price amount={cart.subtotal} size="md" />
            </div>
          </div>
          <p className="mt-4 text-[11px] leading-[1.5] text-muted-foreground">
            {t("disclaimer")}
          </p>
        </>
      )}
    </aside>
  );
}
