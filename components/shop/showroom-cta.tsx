"use client";

import { useTranslations } from "next-intl";
import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/ui/button";
import { SplitMediaCta } from "@/components/shop/ds";
import { routes } from "@/lib/shop/routes";

export function ShowroomCta() {
  const t = useTranslations("shop.chrome.showroomCta");
  return (
    <SplitMediaCta
      imageSrc="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80"
      eyebrow={t("eyebrow")}
      headline={
        <>
          {t("headlineLine1")}
          <br />
          {t("headlineLine2")}
        </>
      }
      body={t("body")}
    >
      <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 max-[700px]:grid-cols-1 max-[700px]:gap-3.5">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
            {t("addressLabel")}
          </span>
          <br />
          <strong className="font-serif text-base font-normal text-foreground">
            275 rue Beaubien Ouest, Montréal H2T 1S2
          </strong>
        </div>
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
            {t("byAppointment")}
          </span>
          <br />
          <strong className="font-serif text-base font-normal text-foreground">
            {t("hours")}
          </strong>
        </div>
      </div>
      <Button asChild className="mt-8">
        <Link href={routes.quote}>
          {t("cta")} <ButtonArrow />
        </Link>
      </Button>
    </SplitMediaCta>
  );
}
