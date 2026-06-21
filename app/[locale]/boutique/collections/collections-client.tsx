"use client";

import { useTranslations } from "next-intl";
import { Eyebrow, Headline, Body } from "@/components/shop/ds";
import { CategorySidebar } from "@/components/shop/category-sidebar";
import { CollectionsShell } from "./_components/collections-shell";
import { ProductGrid } from "./_components/product-grid";
import { SidebarFilters } from "./_components/sidebar-filters";

export default function CollectionsClient() {
  const t = useTranslations("shop.collections");
  return (
    <CollectionsShell
      filters={
        <SidebarFilters categories={<CategorySidebar />} />
      }
    >
      <header className="border-b border-border pb-7">
        <Eyebrow>{t("indexEyebrow")}</Eyebrow>
        <Headline level="headline" as="h1" className="mt-2">
          {t("indexTitle")}
        </Headline>
        <Body size="default" tone="soft" className="mt-4 max-w-[640px] leading-[1.6]">
          {t("indexIntro")}
        </Body>
      </header>
      <ProductGrid groupByFamily />
    </CollectionsShell>
  );
}
