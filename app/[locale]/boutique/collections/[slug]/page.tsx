import { AppLink as Link } from "@/components/AppLink";
import { notFound } from "next/navigation";
import { Eyebrow, Headline } from "@/components/shop/ds";
import { CategorySidebar } from "@/components/shop/category-sidebar";
import { CollectionsShell } from "../_components/collections-shell";
import { ProductGrid } from "../_components/product-grid";
import { SidebarFilters } from "../_components/sidebar-filters";
import {
  categories,
  categoryName,
  findCategoryBySlug,
  getChildren,
} from "@/lib/shop/catalog-categories";
import { hasVisibleProducts, productsInCategory } from "@/lib/shop/products";
import { routes } from "@/lib/shop/routes";
import { pluralTitle } from "../_components/types";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return categories
    .filter((c) => c.parent === null && hasVisibleProducts(c.slug))
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "fr" | "en"; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = findCategoryBySlug(slug);
  if (!category) return { title: "Collection · Dilamco" };
  return {
    title: `${categoryName(category, locale)} · Collections · Dilamco`,
  };
}

export default async function CollectionCategoryPage({
  params,
}: {
  params: Promise<{ locale: "fr" | "en"; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = findCategoryBySlug(slug);
  if (!category) notFound();

  const t = await getTranslations("shop.collections");
  // pluralTitle est indexé par le nom FR : on lui passe toujours le FR.
  const frName = categoryName(category, "fr");
  const title = pluralTitle(frName, locale);
  const children = getChildren(slug).filter((c) => hasVisibleProducts(c.slug));
  const total = productsInCategory(slug, { deep: true }).length;
  const scope = { slug, deep: true };

  return (
    <CollectionsShell
      activeSlug={slug}
      scope={scope}
      filters={
        <SidebarFilters
          scope={scope}
          activeSlug={slug}
          categories={<CategorySidebar activeSlug={slug} />}
        />
      }
    >
      <div className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground [&_a:hover]:text-primary">
        <Link href={routes.collections}>{t("breadcrumbRoot")}</Link> /{" "}
        <span className="text-foreground">{title}</span>
      </div>

      <header className="mt-4 border-b border-border pb-7">
        <Eyebrow>{t("categoryEyebrow")}</Eyebrow>
        <Headline level="headline" as="h1" className="mt-2">
          {title}
        </Headline>
        <p className="mt-3 font-mono text-xs tracking-[0.04em] text-muted-foreground">
          {t("moduleCount", { count: total })}
          {children.length > 0
            ? ` · ${t("subcategoryCount", { count: children.length })}`
            : ""}
        </p>
      </header>

      <ProductGrid scope={scope} />
    </CollectionsShell>
  );
}
