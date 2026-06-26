import type { Metadata } from "next";
import { SITE } from "@/seo/schema/site";
import type { PageMetadataOptions } from "@/types/metadata";
import { localizePath } from "@/seo/i18n-path";

export const DEFAULT_OG_IMAGE = "/images/generated/spaces/espaces-hero-overview-01.webp";

type MetaLocale = "fr" | "en";
const OG_LOCALE: Record<MetaLocale, string> = { fr: "fr_CA", en: "en_CA" };

export function createPageMetadata(
  { title, description, path, localizedPaths, ogAlt, ogImage }: PageMetadataOptions,
  locale: MetaLocale = "fr",
): Metadata {
  const frUrl = `${SITE.url}${localizedPaths?.fr ?? localizePath(path, "fr")}`;
  const enUrl = `${SITE.url}${localizedPaths?.en ?? localizePath(path, "en")}`;
  const url = locale === "fr" ? frUrl : enUrl;
  const alt = ogAlt ?? `${title} | ${SITE.name}`;
  const defaultImage = {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt,
  };
  const resolvedImage = ogImage
    ? {
        url: ogImage.url,
        width: ogImage.width ?? defaultImage.width,
        height: ogImage.height ?? defaultImage.height,
        alt: ogImage.alt ?? alt,
      }
    : defaultImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "fr-CA": frUrl,
        "en-CA": enUrl,
        "x-default": frUrl,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${SITE.name}`,
      description,
      siteName: SITE.name,
      locale: OG_LOCALE[locale],
      images: [resolvedImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [resolvedImage.url],
    },
  };
}
