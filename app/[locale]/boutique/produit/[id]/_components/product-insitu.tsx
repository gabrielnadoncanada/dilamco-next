"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Eyebrow, Headline } from "@/components/shop/ds";

export function ProductInSitu({ photos }: { photos: string[] }) {
  const t = useTranslations("shop.product");
  const CAPTIONS = [
    t("insitu.caption1"),
    t("insitu.caption2"),
    t("insitu.caption3"),
  ];
  return (
    <section className="mt-[90px] border-t border-border pt-14">
      <div className="mb-8">
        <Eyebrow>{t("insitu.eyebrow")}</Eyebrow>
        <Headline level="subhead" as="h2" className="mt-3">
          {t("insitu.title")}
        </Headline>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 max-[900px]:grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:gap-3">
        {photos.map((src, i) => (
          <figure key={i} className={i === 0 ? "m-0 max-[900px]:col-span-2 max-[700px]:col-auto" : "m-0"}>
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src={src}
                alt={CAPTIONS[i] ?? t("insitu.fallbackAlt", { n: i + 1 })}
                fill
                sizes={
                  i === 0
                    ? "(max-width: 700px) 100vw, 50vw"
                    : "(max-width: 700px) 100vw, (max-width: 900px) 50vw, 25vw"
                }
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline gap-3 text-xs text-muted-foreground">
              <span className="font-mono text-[10px] tracking-[0.08em] text-primary">
                FIG.{String(i + 1).padStart(2, "0")}
              </span>
              <span>{CAPTIONS[i]}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
