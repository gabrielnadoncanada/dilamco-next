import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/shop/routes";
import { SoumissionClient } from "./soumission-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "fr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shop.quote" });
  const meta = createPageMetadata(
    {
      title: t("intro.title"),
      description: t("intro.description"),
      path: routes.quote,
    },
    locale,
  );
  // Page de conversion (formulaire) : hors index, mais crawlable (follow).
  // Le canonical redevient auto-référent (corrige l'ancien canonical vers la home).
  return { ...meta, robots: { index: false, follow: true } };
}

export default async function SoumissionPage({
  params,
}: {
  params: Promise<{ locale: "fr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SoumissionClient />;
}
