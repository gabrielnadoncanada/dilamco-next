import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { Heading } from "@/components/elements/heading";
import { PantryBuyButton } from "./PantryBuyButton";

export function PantryHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-tint-bg)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-4 py-1.5 text-xs font-medium text-foreground/75">
            Garde-manger modulaire · 24 po · Fini noyer
          </div>

          <Heading as="h1" variant="h1" className="mt-7 text-balance">
            Enfin de l&apos;<em>espace</em>
            <br />
            dans votre cuisine.
          </Heading>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Un garde-manger élégant au fini noyer véritable, monté en quelques
            minutes. Condo, appartement ou extension de cuisine : il trouve sa
            place partout.
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-serif text-4xl tracking-[-0.02em] text-foreground">
              895&nbsp;$
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Prix de lancement
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PantryBuyButton size="xl" label="Acheter" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-foreground/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              Fini noyer véritable
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              Monté en quelques minutes
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              5 tablettes pleine largeur
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <Image
              src="/images/landing/garde-manger/closed.webp"
              alt="Garde-manger Dilamco 24 po fermé, fini noyer"
              width={1122}
              height={1402}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>

          <div className="absolute -left-3 top-8 hidden max-w-[210px] rounded-xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur sm:block lg:-left-8">
            <p className="font-display text-lg font-medium tracking-[-0.01em] text-foreground">
              Sans vis apparentes
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Une silhouette nette, même à l&apos;intérieur.
            </p>
          </div>

          <div className="absolute -right-3 bottom-10 hidden max-w-[210px] rounded-xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur sm:block lg:-right-6">
            <p className="font-display text-lg font-medium tracking-[-0.01em] text-foreground">
              24 × 16 × 72 po
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Grand rangement, faible empreinte au sol.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
