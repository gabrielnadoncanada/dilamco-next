"use client";

import { AppLink as Link } from "@/components/AppLink";
import { usePathname } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ChevronRight } from "lucide-react";
import {
  categoryName,
  getChildren,
  getTopLevelCategories,
  type Category,
  type Locale,
} from "@/lib/shop/catalog-categories";
import { hasVisibleProducts, productsInCategory } from "@/lib/shop/products";
import { routes } from "@/lib/shop/routes";
import { cn } from "@/lib/shop/utils";

interface Props {
  /** Slug courant (catégorie ou sous-catégorie) — détermine l'élément actif. */
  activeSlug?: string;
}

export function CategorySidebar({ activeSlug }: Props) {
  const t = useTranslations("shop.chrome");
  const tops = getTopLevelCategories().filter((c) =>
    hasVisibleProducts(c.slug),
  );
  return (
    <nav
      aria-label={t("sidebar.nav")}
      className="flex flex-col gap-1 text-[13px]"
    >
      <Link
        href={routes.collections}
        className={cn(
          "px-2 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary",
          !activeSlug && "text-foreground",
        )}
      >
        {t("allCollections")}
      </Link>
      <ul className="flex flex-col">
        {tops.map((cat) => (
          <SidebarItem key={cat.slug} cat={cat} activeSlug={activeSlug} />
        ))}
      </ul>
    </nav>
  );
}

function SidebarItem({
  cat,
  activeSlug,
}: {
  cat: Category;
  activeSlug?: string;
}) {
  const t = useTranslations("shop.chrome.sidebar");
  const locale = useLocale() as Locale;
  const children = getChildren(cat.slug).filter((c) =>
    hasVisibleProducts(c.slug),
  );
  const isInBranch =
    activeSlug === cat.slug ||
    children.some((c) => c.slug === activeSlug);
  const [open, setOpen] = useState(isInBranch);
  const expanded = open || isInBranch;
  const hasChildren = children.length > 0;
  const totalCount = productsInCategory(cat.slug, { deep: true }).length;

  return (
    <li className="border-b border-border/60 last:border-b-0">
      <div className="flex items-stretch">
        <Link
          href={routes.collection(cat.slug)}
          className={cn(
            "flex flex-1 items-center justify-between gap-3 py-2.5 text-soft-foreground transition-colors hover:text-primary",
            activeSlug === cat.slug && "font-medium text-foreground",
          )}
        >
          <span>{categoryName(cat, locale)}</span>
          <span className="font-mono text-[11px] text-muted-foreground">
            {totalCount}
          </span>
        </Link>
        {hasChildren && (
          <button
            type="button"
            aria-expanded={expanded}
            aria-label={expanded ? t("collapse") : t("expand")}
            onClick={() => setOpen((v) => !v)}
            className="flex w-8 cursor-pointer items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronRight
              className={cn(
                "size-3.5 transition-transform duration-200",
                expanded && "rotate-90",
              )}
            />
          </button>
        )}
      </div>
      {hasChildren && expanded && (
        <ul className="flex flex-col border-l border-border pl-3 pb-2">
          {children.map((child) => {
            const childCount = productsInCategory(child.slug).length;
            return (
              <li key={child.slug}>
                <Link
                  href={routes.subcollection(cat.slug, child.slug)}
                  className={cn(
                    "flex items-center justify-between gap-3 py-1.5 text-[12px] text-soft-foreground transition-colors hover:text-primary",
                    activeSlug === child.slug && "font-medium text-foreground",
                  )}
                >
                  <span>{categoryName(child, locale)}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {childCount}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

/** Variante client qui détecte activeSlug depuis le pathname. */
export function CategorySidebarAuto() {
  const pathname = usePathname();
  const parts = pathname.replace(/^\/collections\/?/, "").split("/").filter(Boolean);
  const activeSlug = parts[1] ?? parts[0];
  return <CategorySidebar activeSlug={activeSlug} />;
}
