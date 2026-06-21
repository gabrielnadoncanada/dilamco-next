"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container, Section, SectionHeading } from "@/components/shop/ds";
import { Eyebrow, Headline, Body } from "@/components/shop/ds";
import { SoumissionForm } from "./_components/soumission-form";
import { SoumissionSuccess } from "./_components/soumission-success";
import { SoumissionSummary } from "./_components/soumission-summary";
import { INITIAL_FORM, type SoumissionForm as Form } from "./_components/types";

export default function SoumissionPage() {
  const t = useTranslations("shop.quote");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Form>(INITIAL_FORM);

  if (submitted) {
    return <SoumissionSuccess tel={form.tel} />;
  }

  return (
    <>
      <Section density="compact" divider={false}>
        <Container>
          <SectionHeading
            className="max-w-4xl mr-auto"
            eyebrow={t("intro.eyebrow")}
            title={t("intro.title")}
            description={t("intro.description")}
          />
        </Container>
      </Section>
      <Section className="pt-0">
        <Container className="mx-auto grid grid-cols-[1fr_380px] gap-y-10 [column-gap:64px] max-[1000px]:grid-cols-1 max-[700px]:gap-y-6">
          <SoumissionForm
            form={form}
            setForm={setForm}
            onSubmit={() => {
              setSubmitted(true);
              window.scrollTo(0, 0);
            }}
          />

          <SoumissionSummary />
        </Container>
      </Section>
    </>
  );
}
