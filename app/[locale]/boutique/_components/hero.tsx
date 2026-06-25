import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Headline, Body, ButtonGroup } from "@/components/shop/ds";
import { routes } from "@/lib/shop/routes";

const HERO_IMG = "/assets/hero_image.webp";

export async function Hero() {
  const t = await getTranslations("shop.home");
  return (
    <section className="relative min-[901px]:min-h-[78vh] grid grid-cols-1 min-[901px]:grid-cols-[1fr_1.1fr] bg-secondary border-b border-border overflow-hidden">
      <div className="px-[clamp(28px,5vw,80px)] py-[clamp(48px,7vw,110px)] max-[700px]:p-[40px_22px] flex flex-col justify-center gap-8 relative z-[2]">
        <Headline level="hero" as="h1" className="max-w-[900px]">
          {t("hero.titleLead")} <em>{t("hero.titleEm")}</em>
        </Headline>
        <div>
          <Body
            size="lead"
            tone="soft"
            className="max-w-[480px] leading-[1.55]"
          >
            {t("hero.subtitle")}
          </Body>
          <ul className="mt-6 flex flex-col gap-2">
            <li className="text-sm tracking-[0.06em]">{t("hero.bullets.0")}</li>
            <li className="text-sm tracking-[0.06em]">{t("hero.bullets.1")}</li>
            <li className="text-sm tracking-[0.06em]">{t("hero.bullets.2")}</li>
          </ul>
        </div>
        <ButtonGroup>
          <Button asChild>
            <Link href={routes.catalogue}>
              {t("hero.ctaPrimary")} <ButtonArrow />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={routes.quote}>{t("hero.ctaSecondary")}</Link>
          </Button>
        </ButtonGroup>
      </div>
      {/* Mobile : image plafonnée pour que la promesse + le CTA restent
          atteignables dans le premier écran et demi (conversion). */}
      <div className="max-[901px]:order-first relative bg-primary overflow-hidden max-[900px]:min-h-[320px] max-[900px]:max-h-[40vh] max-[700px]:min-h-[260px] before:content-[''] before:absolute before:inset-0 before:[background:radial-gradient(circle_at_30%_20%,rgba(200,184,144,0.18),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_60%)]">
        <Image
          src={HERO_IMG}
          alt={t("hero.imageAlt")}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
          className="object-cover [filter:contrast(0.96)_saturate(0.9)]"
        />
      </div>
    </section>
  );
}
