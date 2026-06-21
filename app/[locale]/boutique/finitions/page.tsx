import type { Metadata } from "next";
import { Container, Eyebrow, Headline, Body } from "@/components/shop/ds";
import { COLLECTIONS } from "./_components/data";
import { CollectionFeature } from "./_components/collection-feature";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shop.finishes" });
  return { title: t("metaTitle") };
}

export default async function FinitionsPage() {
  const t = await getTranslations("shop.finishes");
  return (
    <Container padded className="max-[700px]:pb-[60px]">
      <header className="border-b border-border py-[60px] pb-20 max-[700px]:py-8">
        <Eyebrow>{t("heroEyebrow")}</Eyebrow>
        <Headline level="hero" as="h1" className="my-4">
          {t("heroTitleLead")} <br />
          <em>{t("heroTitleEmphasis")}</em>
        </Headline>
        <Body size="lead" tone="soft" className="max-w-[720px]">
          {t("heroIntro")}
        </Body>
      </header>

      {COLLECTIONS.map((c, i) => (
        <CollectionFeature key={c.id} collection={c} reverse={i % 2 === 1} />
      ))}
    </Container>
  );
}
