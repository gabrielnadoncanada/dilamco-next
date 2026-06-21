import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { findProduct, products } from "@/lib/shop/products";
import { photoForProduct } from "@/lib/shop/photos";
import { routes, collectionsFilter } from "@/lib/shop/routes";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, productJsonLd } from "@/seo/schema/builders";
import { localizeProductLabel, localizeFamily } from "@/lib/shop/catalog-i18n";
import ProduitClient from "./produit-client";

type MetaLocale = "fr" | "en";

/**
 * Fiches produit prérendues (SSG) : TTFB instantané au lieu d'un rendu par
 * requête. Les codes contenant des caractères interdits dans un nom de
 * fichier (ex. `F9-BDD21.75*36`) cassent l'export sur Windows : ils restent
 * rendus à la demande.
 */
export function generateStaticParams() {
  return products
    .filter((p) => !/[*?"<>|:\\]/.test(p.id))
    .map((p) => ({ id: p.id }));
}

function dimsLabel(w?: number, h?: number, d?: number) {
  const parts = [w, h, d].filter(
    (v): v is number => typeof v === "number" && v > 0,
  );
  return parts.length ? `${parts.join("″ × ")}″ (L × H × P)` : "";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: MetaLocale; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "shop.product" });
  const product = findProduct(id);

  if (!product) {
    return { title: t("notFoundTitle") };
  }

  const dims = dimsLabel(product.w, product.h, product.d);
  const localName = localizeProductLabel(product.name, locale);
  const description = t("metaDescription", {
    name: localName,
    family: localizeFamily(product.family, locale).toLowerCase(),
    dims: dims ? ` ${dims}` : "",
  });
  const image = photoForProduct(product);

  const meta = createPageMetadata(
    {
      title: localName,
      description,
      path: routes.product(product.id),
      ogImage: image ? { url: image } : undefined,
    },
    locale,
  );

  // Title tag : on garde le suffixe de marque comme sur le reste du site,
  // tout en laissant createPageMetadata gérer canonical / hreflang / OG.
  return { ...meta, title: `${localName} · Dilamco` };
}

export default async function ProduitPage({
  params,
}: {
  params: Promise<{ locale: MetaLocale; id: string }>;
}) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "shop.product" });
  const product = findProduct(id);
  const productUrl = `${SITE.url}${routes.product(id)}`;
  const localName = product ? localizeProductLabel(product.name, locale) : "";
  const localFamily = product ? localizeFamily(product.family, locale) : "";

  return (
    <>
      {product ? (
        <>
          <JsonLd
            data={productJsonLd({
              name: localName,
              description: t("metaDescription", {
                name: localName,
                family: localFamily.toLowerCase(),
                dims: (() => {
                  const d = dimsLabel(product.w, product.h, product.d);
                  return d ? ` ${d}` : "";
                })(),
              }),
              sku: product.sku ?? product.code ?? product.id,
              category: localFamily,
              image: photoForProduct(product),
              price: product.price,
              availability: product.visible && product.price > 0,
              url: productUrl,
              width: product.w,
              height: product.h,
              depth: product.d,
            })}
          />
          <JsonLd
            data={breadcrumbJsonLd([
              { name: t("breadcrumb.home"), url: `${SITE.url}/` },
              { name: t("breadcrumb.shop"), url: `${SITE.url}${routes.home}` },
              {
                name: localFamily,
                url: `${SITE.url}${collectionsFilter.family(product.family)}`,
              },
              { name: localName, url: productUrl },
            ])}
          />
        </>
      ) : null}
      <ProduitClient id={id} />
    </>
  );
}
