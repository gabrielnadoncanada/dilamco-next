import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import CollectionsClient from "./collections-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shop.collections" });
  return { title: t("metaTitle") };
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={null}>
      <CollectionsClient />
    </Suspense>
  );
}
