import type { Metadata } from "next";
import { SITE } from "@/seo/schema/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogAlt?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogAlt,
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const alt = ogAlt ?? `${title} | ${SITE.name}`;

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
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
