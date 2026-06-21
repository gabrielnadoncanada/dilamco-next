import { getTranslations } from "next-intl/server";
import {
  Section,
  Container,
  SectionHeading,
  HairlineGrid,
  HairlineCell,
  StepLabel,
  Headline,
} from "@/components/shop/ds";

export async function Pillars() {
  const t = await getTranslations("shop.home");
  const pillars = [
    { num: "01", index: 0 },
    { num: "02", index: 1 },
    { num: "03", index: 2 },
    { num: "04", index: 3 },
  ];
  return (
    <Section surface="background">
      <Container>
        <SectionHeading
          eyebrow={t("pillars.eyebrow")}
          title={t("pillars.title")}
          className="mb-14 max-[700px]:mb-10"
        />
        <HairlineGrid cols="4">
          {pillars.map((p) => (
            <HairlineCell key={p.num}>
              <StepLabel className="mb-7">
                {t("pillars.stepLabel")} {p.num}
              </StepLabel>
              <Headline level="title" as="h3" className="mb-4">
                {t(`pillars.items.${p.index}.title`)}
              </Headline>
              <p className="text-sm leading-[1.6] text-muted-foreground flex-1">
                {t(`pillars.items.${p.index}.body`)}
              </p>
            </HairlineCell>
          ))}
        </HairlineGrid>
      </Container>
    </Section>
  );
}
