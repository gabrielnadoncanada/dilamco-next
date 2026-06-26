import { getTranslations } from "next-intl/server";
import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/ui/button";
import {
  Section,
  Container,
  SectionHeading,
  HairlineGrid,
  HairlineCell,
  Body,
} from "@/components/shop/ds";
import { products } from "@/lib/shop/products";
import { routes } from "@/lib/shop/routes";

export async function Trust() {
  const t = await getTranslations("shop.home");
  const STATS: Array<[string, string]> = [
    ["20+", t("trust.stats.0.label")],
    [String(products.length), t("trust.stats.1.label")],
    ["48h", t("trust.stats.2.label")],
    [t("trust.stats.3.value"), t("trust.stats.3.label")],
  ];
  return (
    <Section surface="primary" divider={false}>
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-20">
          <div>
            <SectionHeading
              surface="primary"
              eyebrow={t("trust.eyebrow")}
              title={t("trust.title")}
            />
            <Body
              size="default"
              tone="on-primary"
              className="mt-6 max-w-[480px] leading-[1.65]"
            >
              {t("trust.body")}
            </Body>
            <Button
              asChild
              variant="paper"
              className="mt-8 uppercase tracking-wider"
            >
              <Link href={routes.catalogue}>
                {t("trust.cta")} <ButtonArrow />
              </Link>
            </Button>
          </div>
          <HairlineGrid cols="2" tone="onPrimary">
            {STATS.map(([num, lbl]) => (
              <HairlineCell
                key={num}
                surface="primary"
                className="p-8 max-[700px]:p-[22px]"
              >
                <div className="font-serif text-[64px] leading-none tracking-[-0.02em] text-primary-foreground max-[700px]:text-[44px]">
                  {num}
                </div>
                <Body
                  size="compact"
                  tone="on-primary"
                  className="mt-3 leading-[1.5]"
                >
                  {lbl}
                </Body>
              </HairlineCell>
            ))}
          </HairlineGrid>
        </div>
      </Container>
    </Section>
  );
}
