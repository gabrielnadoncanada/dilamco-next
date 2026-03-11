import type { Metadata } from "next";
import { SITE } from "@/seo/schema/site";
import type { PageMetadataOptions } from "@/types/metadata";

export const DEFAULT_OG_IMAGE = "/images/generated/spaces/espaces-hero-overview-01.webp";

export function createPageMetadata({
  title,
  description,
  path,
  ogAlt,
  ogImage,
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
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
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${SITE.name}`,
      description,
      siteName: SITE.name,
      locale: "fr_CA",
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
