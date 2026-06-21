import { getTranslations } from "next-intl/server";
import {
  Section,
  Container,
  SectionHeading,
  StepLabel,
  Headline,
  Body,
} from "@/components/shop/ds";

export async function Process() {
  const t = await getTranslations("shop.home");
  const steps = [
    { num: "01", index: 0 },
    { num: "02", index: 1 },
    { num: "03", index: 2 },
    { num: "04", index: 3 },
  ];
  return (
    <Section surface="background" density="compact">
      <Container>
        <SectionHeading
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          titleClassName="max-w-[700px]"
          className="mb-14 max-[700px]:mb-8"
        />
        <div className="grid grid-cols-1 min-[700px]:grid-cols-2 min-[900px]:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="pr-6 py-8 max-[700px]:py-[22px] max-[700px]:pr-0 border-t border-foreground relative"
            >
              <StepLabel className="text-xs tracking-[0.06em]">
                {t("process.stepLabel")} {s.num}
              </StepLabel>
              <Headline level="subtitle" as="h3" className="mt-3">
                {t(`process.steps.${s.index}.title`)}
              </Headline>
              <Body size="compact" tone="muted" className="mt-2.5">
                {t(`process.steps.${s.index}.body`)}
              </Body>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
