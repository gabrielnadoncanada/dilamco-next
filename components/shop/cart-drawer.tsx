"use client";

import Image from "next/image";
import { useRouter } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useCart } from "./cart-provider";
import {
  localizeProductLabel,
  localizeColor,
  localizeMolding,
  type ShopLocale,
} from "@/lib/shop/catalog-i18n";
import { Button, ButtonArrow } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from "./ui/drawer";
import { findProduct } from "@/lib/shop/products";
import { photoForProduct } from "@/lib/shop/photos";
import { Price } from "./price";
import { routes } from "@/lib/shop/routes";
import type { CartItem } from "@/lib/shop/types";

export function CartDrawer() {
  const cart = useCart();
  const router = useRouter();
  const t = useTranslations("shop.chrome");

  const goto = (path: string) => {
    cart.setDrawerOpen(false);
    // Les chemins boutique sont des pathnames internes déclarés dans
    // i18n/routing.ts ; next-intl les localise (EN -> /en/shop/...).
    router.push(path as Parameters<typeof router.push>[0]);
  };

  return (
    <Drawer
      direction="right"
      open={cart.drawerOpen}
      onOpenChange={cart.setDrawerOpen}
    >
      <DrawerContent
        className="bg-background w-[min(440px,100vw)] sm:max-w-none border-l-0 p-0 flex flex-col"
        aria-describedby={undefined}
      >
        <div className="px-7 py-5 flex justify-between items-center border-b border-border max-[700px]:px-5 max-[700px]:py-4">
          <DrawerTitle className="font-serif text-xl tracking-[-0.01em] text-foreground font-normal">
            {t("myProject")} ·{" "}
            {t("cart.moduleCount", { count: cart.totalQty })}
          </DrawerTitle>
          <DrawerClose
            aria-label={t("cart.close")}
            className="text-[28px] leading-none text-foreground w-8 h-8 inline-flex items-center justify-center cursor-pointer hover:text-primary"
          >
            ×
          </DrawerClose>
        </div>
        <div className="flex-1 overflow-y-auto px-7 py-2 max-[700px]:px-5">
          {cart.items.length === 0 ? (
            <div className="py-[60px] text-center">
              <span className="font-serif text-[22px] tracking-[-0.01em] text-foreground block">
                {t("cart.emptyTitle")}
              </span>
              <p className="text-[13px] text-muted-foreground mt-3 leading-[1.5]">
                {t("cart.emptyBody")}
              </p>
              <Button
                variant="ghost"
                size="small"
                className="mt-6"
                onClick={() => goto(routes.collections)}
              >
                {t("cart.browse")}
              </Button>
            </div>
          ) : (
            cart.items.map((item) => <LineItem key={item.key} item={item} />)
          )}
        </div>
        {cart.items.length > 0 && (
          <div className="px-7 py-5 border-t border-border bg-secondary max-[700px]:px-5 max-[700px]:py-4">
            <div className="mb-4 flex items-baseline justify-between group-data-[show-prices=false]/body:hidden">
              <span className="font-serif text-lg text-foreground">
                {t("cart.estimate")}
                <span className="ml-2 font-sans text-xs text-muted-foreground">
                  · {t("cart.moduleCount", { count: cart.totalQty })}
                </span>
              </span>
              <Price amount={cart.subtotal} size="md" />
            </div>
            <Button block onClick={() => goto(routes.quote)}>
              {t("cart.requestQuote")} <ButtonArrow />
            </Button>
            <p className="mt-3 text-center text-[11px] leading-[1.5] text-muted-foreground">
              {t("cart.reassurance")}
            </p>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}

function LineItem({ item }: { item: CartItem }) {
  const cart = useCart();
  const t = useTranslations("shop.chrome.cart");
  const locale = useLocale() as ShopLocale;
  const product = findProduct(item.productId);
  return (
    <div className="grid grid-cols-[70px_1fr_auto] gap-3 border-b border-border py-4 last:border-b-0 max-[700px]:grid-cols-[56px_1fr_auto] max-[700px]:gap-2.5 max-[700px]:py-3.5">
      <div className="relative aspect-square overflow-hidden border border-border bg-secondary">
        {product && (
          <Image
            src={photoForProduct(product, item.color)}
            alt={item.name}
            fill
            sizes="70px"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <span className="line-clamp-2 font-serif text-base leading-[1.2] tracking-[-0.01em] text-foreground">
          {localizeProductLabel(item.name, locale)}
        </span>
        <span className="text-xs leading-[1.4] text-muted-foreground">
          {localizeColor(item.color, locale)} · Shaker{" "}
          {localizeMolding(item.molding, locale)}
        </span>
        <div className="mt-1.5 flex items-center gap-1">
          <button
            className="size-[26px] cursor-pointer border border-border-strong text-foreground hover:border-foreground"
            onClick={() => cart.updateQty(item.key, item.qty - 1)}
          >
            −
          </button>
          <span className="min-w-6 text-center font-mono text-xs">{item.qty}</span>
          <button
            className="size-[26px] cursor-pointer border border-border-strong text-foreground hover:border-foreground"
            onClick={() => cart.updateQty(item.key, item.qty + 1)}
          >
            +
          </button>
          <button
            className="ml-2 cursor-pointer border-b border-current text-[11px] uppercase tracking-[0.08em] text-destructive"
            onClick={() => cart.removeItem(item.key)}
          >
            {t("remove")}
          </button>
        </div>
      </div>
      <Price amount={item.price * item.qty} size="sm" />
    </div>
  );
}
