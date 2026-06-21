import { getTranslations } from "next-intl/server";
import { Section, Container, Eyebrow } from "@/components/shop/ds";

export async function Testimonial() {
  const t = await getTranslations("shop.home");
  return (
    <Section surface="background" density="tall">
      <Container className="text-center">
        <p className="font-serif italic text-[clamp(28px,3.6vw,48px)] max-[700px]:text-[22px] leading-[1.2] max-[700px]:leading-[1.3] tracking-[-0.01em] max-w-[1000px] mx-auto text-foreground m-0">
          {t("testimonial.quote")}
        </p>
        <Eyebrow tone="muted" className="mt-8">
          {t("testimonial.author")}
        </Eyebrow>
      </Container>
    </Section>
  );
}
