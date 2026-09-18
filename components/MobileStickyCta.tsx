"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { useLocale } from "next-intl";

import { AppLink as Link } from "@/components/AppLink";
import { SITE } from "@/seo/schema/site";
import { cn } from "@/lib/utils";

const PHONE_HREF = `tel:${SITE.telephone.replace(/[^+\d]/g, "")}`;

/**
 * Barre d'action collante, mobile seulement : « Appeler » + « Soumission ».
 * Apparaît après le hero, se retire à l'approche du pied de page pour ne pas
 * masquer le bouton final. Masquée sur la page contact (le formulaire y est).
 */
export function MobileStickyCta({ hidden = false }: { hidden?: boolean }) {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hidden) return;
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const footer = document.querySelector("footer");
      const nearFooter = footer
        ? footer.getBoundingClientRect().top < window.innerHeight - 40
        : false;
      setVisible(pastHero && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden]);

  if (hidden) return null;
  const t =
    locale === "en"
      ? { call: "Call", quote: "Free estimate" }
      : { call: "Appeler", quote: "Soumission gratuite" };

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-ui lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto flex max-w-md gap-2 px-3 pb-3">
        <a
          href={PHONE_HREF}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-background/95 px-5 text-sm font-semibold text-foreground shadow-[0_12px_30px_-12px_rgb(21_25_26/40%)] backdrop-blur transition-ui focus-ring"
        >
          <Phone className="size-4" strokeWidth={2.25} />
          {t.call}
        </a>
        <Link
          href="/contact"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-12px_rgb(37_59_47/70%)] transition-ui focus-ring hover:bg-primary-deep"
        >
          {t.quote}
          <ArrowUpRight className="size-4" strokeWidth={2.25} />
        </Link>
      </div>
    </div>
  );
}
