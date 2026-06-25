"use client";

import { ShoppingBag } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCartOptional } from "./cart-provider";

/**
 * Bouton panier compact (icône + badge count) pour le header UNIFIÉ. Rendu
 * partout, mais ne s'affiche QUE là où un CartProvider existe (boutique) — sur
 * la vitrine, le contexte est absent → null, donc aucune icône.
 */
export function CartButton({ className }: { className?: string }) {
  const cart = useCartOptional();
  const t = useTranslations("shop.chrome");
  if (!cart) return null;

  return (
    <button
      aria-label={t("myProject")}
      onClick={() => cart.setDrawerOpen(true)}
      className={
        "relative inline-flex size-9 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent text-foreground transition-colors hover:text-primary " +
        (className ?? "")
      }
    >
      <ShoppingBag className="size-[22px]" strokeWidth={1.5} />
      {cart.totalQty > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-primary-foreground">
          {cart.totalQty}
        </span>
      )}
    </button>
  );
}
