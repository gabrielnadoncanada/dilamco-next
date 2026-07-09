import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  Container,
  Eyebrow,
  Headline,
  Body,
  HairlineGrid,
  HairlineCell,
} from "@/components/shop/ds";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppLink } from "@/components/AppLink";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { localizePath } from "@/seo/i18n-path";
import { routes } from "@/lib/shop/routes";

// Ordre d'affichage des questions (clés du namespace shop.returns.faq).
const FAQ_KEYS = [
  "window",
  "how",
  "fee",
  "finalSale",
  "damaged",
  "exchange",
  "refund",
  "installed",
] as const;

const HIGHLIGHT_KEYS = ["window", "fee", "damage"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "fr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shop.returns" });
  const meta = createPageMetadata(
    {
      title: t("metaTitle"),
      description: t("metaDescription"),
      path: routes.returns,
    },
    locale,
  );
  // Page de confiance (retours/remboursements) : indexable + hreflang FR/EN.
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: meta.alternates,
    openGraph: meta.openGraph,
    twitter: meta.twitter,
  };
}

export default async function ConditionsRetourPage({
  params,
}: {
  params: Promise<{ locale: "fr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("shop.returns");

  const faqItems = FAQ_KEYS.map((k) => ({
    q: t(`faq.${k}.q`),
    a: t(`faq.${k}.a`),
  }));

  const url = (path: string) => `${SITE.url}${localizePath(path, locale)}`;
  const crumbs = [
    { name: locale === "en" ? "Shop" : "Boutique", url: url(routes.home) },
    { name: t("heroTitleLead") + " " + t("heroTitleEmphasis"), url: url(routes.returns) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />

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

        {/* Points saillants — l'essentiel en un coup d'œil */}
        <section className="py-16 max-[700px]:py-10">
          <HairlineGrid cols="3">
            {HIGHLIGHT_KEYS.map((k) => (
              <HairlineCell key={k}>
                <Headline level="subhead" as="h2" className="mb-3">
                  {t(`highlights.${k}.title`)}
                </Headline>
                <Body tone="soft">{t(`highlights.${k}.body`)}</Body>
              </HairlineCell>
            ))}
          </HairlineGrid>
        </section>

        {/* FAQ détaillée + FAQPage JSON-LD */}
        <section className="grid gap-12 border-t border-border py-16 max-[700px]:py-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>{t("sections.eyebrow")}</Eyebrow>
            <Headline level="display" as="h2" className="mt-4">
              {t("sections.title")}
            </Headline>

            <div className="mt-10 rounded-2xl border border-border bg-[var(--surface-tint-bg)] p-6">
              <Eyebrow>{t("help.eyebrow")}</Eyebrow>
              <p className="mt-3 text-base font-medium text-foreground">
                {t("help.title")}
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/80">
                {t("help.body")}
              </p>
              <div className="mt-5 space-y-2.5 text-sm">
                <a
                  href="tel:+15148200773"
                  className="group flex items-center gap-2.5 text-foreground transition-colors hover:text-foreground/70"
                >
                  <Phone className="h-3.5 w-3.5 text-foreground/60" strokeWidth={1.6} />
                  <span className="font-medium">(514) 820-0773</span>
                </a>
                <a
                  href="mailto:ventes@dilamco.com"
                  className="group flex items-center gap-2.5 text-foreground transition-colors hover:text-foreground/70"
                >
                  <Mail className="h-3.5 w-3.5 text-foreground/60" strokeWidth={1.6} />
                  <span className="font-medium">ventes@dilamco.com</span>
                </a>
                <p className="flex items-start gap-2.5 text-foreground/70">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/60" strokeWidth={1.6} />
                  <span>{t("help.showroom")}</span>
                </p>
              </div>
              <AppLink
                href={routes.quote}
                className="mt-6 inline-flex items-center text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-foreground/70"
              >
                {t("help.cta")}
              </AppLink>
            </div>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="divide-y divide-border border-y border-border"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={FAQ_KEYS[index]}
                value={`item-${index}`}
                className="border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline sm:text-[17px]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-7 text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </Container>
    </>
  );
}
