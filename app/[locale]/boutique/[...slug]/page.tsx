import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { COLLECTIONS } from "@/lib/shop/collections";
import { CollectionLanding } from "../_collection/landing";
import { collectionMetadata } from "../_collection/meta";

type Params = { locale: "fr" | "en"; slug: string[] };

export const dynamicParams = false;

/** Une route pour TOUTES les collections : /boutique/<slug imbriqué>. */
export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return collectionMetadata(slug.join("/"), locale);
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <CollectionLanding slug={slug.join("/")} locale={locale} />;
}
