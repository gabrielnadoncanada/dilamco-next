"use client";

import { useCart } from "@/components/shop/cart-provider";
import { useTranslations } from "next-intl";
import { AppLink as Link } from "@/components/AppLink";
import { Button } from "@/components/shop/ui/button";
import { Eyebrow, Headline, Body } from "@/components/shop/ds";
import { routes } from "@/lib/shop/routes";

export function SoumissionSuccess({ tel }: { tel: string }) {
  const cart = useCart();
  const t = useTranslations("shop.quote.success");
  return (
    <div className="mx-auto my-20 max-w-[720px] px-6 text-center">
      <Eyebrow>{t("eyebrow")}</Eyebrow>
      <Headline level="headline" as="h1" className="mt-4">
        {t("title")}
      </Headline>
      <Body size="lead" tone="muted" className="mt-6">
        {t("body", { tel: tel || t("telFallback") })}
      </Body>
      <div className="mt-10">
        <Button asChild onClick={() => cart.clear()}>
          <Link href={routes.home}>{t("backHome")}</Link>
        </Button>
      </div>
    </div>
  );
}
