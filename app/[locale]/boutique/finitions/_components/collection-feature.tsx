import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/shop/ui/button";
import { Headline, Body, ButtonGroup } from "@/components/shop/ds";
import type { Collection } from "./data";
import { cn } from "@/lib/shop/utils";
import { collectionsFilter, routes } from "@/lib/shop/routes";
import { getTranslations } from "next-intl/server";

interface Props {
  collection: Collection;
  reverse: boolean;
}

/** Texte éditorial localisé d'une finition (messages shop.finishes.items.<id>). */
interface FinishCopy {
  nom: string;
  taglines: string[];
  desc: string;
  specs: Array<{ label: string; value: string }>;
  primaryCta: string;
  secondaryCtaLabel: string;
  percentLabel: string;
}

export async function CollectionFeature({ collection: c, reverse }: Props) {
  const t = await getTranslations("shop.finishes");
  const copy = t.raw(`items.${c.id}`) as FinishCopy;
  return (
    <section className="grid grid-cols-[1.15fr_1fr] items-center gap-20 border-b border-border py-20 max-[1000px]:grid-cols-1 max-[1000px]:gap-12 max-[700px]:gap-7 max-[700px]:py-10">
      <div
        className={cn(
          "relative aspect-[4/5]",
          reverse && "order-2 max-[1000px]:order-1",
        )}
      >
        <div className="absolute inset-0 overflow-hidden border border-border">
          <Image
            src={c.ambient}
            alt={t("featureImageAlt", { name: copy.nom })}
            fill
            sizes="(max-width: 1000px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col gap-5",
          reverse && "order-1 max-[1000px]:order-2",
        )}
      >
        <span className="font-mono text-[11px] tracking-[0.1em] text-primary">
          {c.code} · {t("featureCodeSuffix")}
        </span>
        <Headline level="display" as="h2">
          {copy.nom}
        </Headline>
        <ul className="-mt-2 list-none space-y-1 font-serif text-[22px] italic tracking-[-0.01em] text-primary">
          {copy.taglines.map((line) => (
            <li key={line} className="flex gap-2.5">
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <Body size="default" tone="soft" className="leading-[1.65]">
          {copy.desc}
        </Body>

        <div className="grid grid-cols-3 gap-4 border-y border-border py-5 max-[700px]:gap-2 [&_span]:mb-1 [&_span]:block [&_span]:font-mono [&_span]:text-[10px] [&_span]:uppercase [&_span]:tracking-[0.1em] [&_span]:text-muted-foreground [&_strong]:text-[13px] [&_strong]:font-medium [&_strong]:leading-[1.3] [&_strong]:text-foreground">
          {copy.specs.map((row) => (
            <div key={row.label}>
              <span>{row.label}</span>
              <strong>{row.value}</strong>
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-4">
          <span className="font-serif text-[64px] leading-none tracking-[-0.03em] text-primary">
            {c.pourcentage}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
            {copy.percentLabel}
          </span>
        </div>

        <ButtonGroup className="mt-3">
          <Button asChild>
            <Link href={collectionsFilter.color(c.nom)}>
              {copy.primaryCta} <ButtonArrow />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={routes.quote}>{copy.secondaryCtaLabel}</Link>
          </Button>
        </ButtonGroup>
      </div>
    </section>
  );
}
