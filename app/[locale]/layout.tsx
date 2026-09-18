import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { GoogleTagManager } from "@next/third-parties/google";
import "../globals.css";
import { fontBodyClassName } from "../fonts";
import { JsonLd } from "@/seo/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/lib/metadata";
import {
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { routing, type AppLocale } from "@/i18n/routing";

export const metadataBase = new URL(SITE.url);

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const HOME = {
  fr: {
    title: "Entrepreneur général en rénovation — Ouest-de-l'Île | Dilamco",
    description:
      "Entrepreneur général licencié RBQ depuis 2004 : rénovation de cuisine, salle de bain, sous-sol, agrandissement et après sinistre à Pierrefonds, Ouest-de-l'Île, Montréal et Laval.",
    ogAlt: "Dilamco — Entrepreneur général, rénovation résidentielle",
    ogLocale: "fr_CA",
  },
  en: {
    title: "General contractor for home renovation — West Island | Dilamco",
    description:
      "RBQ-licensed general contractor since 2004: kitchen, bathroom, basement, home addition and disaster-recovery renovation in Pierrefonds, the West Island, Montréal and Laval.",
    ogAlt: "Dilamco — General contractor, residential renovation",
    ogLocale: "en_CA",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: AppLocale = hasLocale(routing.locales, locale) ? locale : "fr";
  const h = HOME[l];
  const frUrl = SITE.url;
  const enUrl = `${SITE.url}/en`;
  return {
    metadataBase,
    title: { default: h.title, template: "%s | Dilamco" },
    description: h.description,
    openGraph: {
      type: "website",
      url: l === "fr" ? frUrl : enUrl,
      siteName: SITE.name,
      locale: h.ogLocale,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: h.ogAlt }],
    },
    twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE] },
    alternates: {
      canonical: l === "fr" ? frUrl : enUrl,
      languages: { "fr-CA": frUrl, "en-CA": enUrl, "x-default": frUrl },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale === "fr" ? "fr-CA" : "en-CA"} suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-K36WBQW" />
      <body className={fontBodyClassName}>
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={organizationJsonLd(locale as AppLocale)} />
          <JsonLd data={localBusinessJsonLd(locale as AppLocale)} />
          <JsonLd data={websiteJsonLd(locale as AppLocale)} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
