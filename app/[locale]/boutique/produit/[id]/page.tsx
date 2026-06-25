import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { findProduct } from "@/lib/shop/products";
import { models, findModel, modelForVariantCode } from "@/lib/shop/models";
import { photoForProduct } from "@/lib/shop/photos";
import { routes } from "@/lib/shop/routes";
import { pillarForCategory, collectionContent } from "@/lib/shop/collections";
import { productDescription } from "@/lib/shop/product-description";
import { createPageMetadata } from "@/lib/metadata";
import { localizePath } from "@/seo/i18n-path";
import { SITE } from "@/seo/schema/site";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, productJsonLd } from "@/seo/schema/builders";
import {
  localizeProductLabel,
  localizeFamily,
  localizeColor,
} from "@/lib/shop/catalog-i18n";
import ProduitClient from "./produit-client";

type MetaLocale = "fr" | "en";

/**
 * Fiches prérendues (SSG) : une par ProductModel (≈197), pas par variante. Les
 * codes contenant des caractères interdits dans un nom de fichier (ex.
 * `S8-BDD37.5*36`) cassent l'export sur Windows : rendus à la demande.
 */
export function generateStaticParams() {
  return models
    .filter((m) => !/[*?"<>|:\\]/.test(m.id))
    .map((m) => ({ id: m.id }));
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
  // Tolère une vieille URL de variante (`-muf`) : on émet le canonical du modèle.
  const model = findModel(id) ?? modelForVariantCode(id);
  if (!model) return { title: t("notFoundTitle") };

  const product = findProduct(model.id);
  if (!product) return { title: t("notFoundTitle") };

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
      path: routes.product(model.id),
      ogImage: image ? { url: image } : undefined,
    },
    locale,
  );

  return { ...meta, title: `${localName} · Dilamco` };
}

export default async function ProduitPage({
  params,
}: {
  params: Promise<{ locale: MetaLocale; id: string }>;
}) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "shop.product" });
  const model = findModel(id) ?? modelForVariantCode(id);

  // Ancienne URL de variante (ex. `S8-DB12-muf`) → 308 vers la fiche canonique.
  if (model && model.id !== id) {
    permanentRedirect(localizePath(routes.product(model.id), locale));
  }

  // Produit inconnu ou désactivé (catégorie non vendue en ligne) → 404.
  if (!model) {
    notFound();
  }

  const product = findProduct(model.id)!;
  const productUrl = `${SITE.url}${localizePath(routes.product(model.id), locale)}`;
  const localName = localizeProductLabel(product.name, locale);
  const localFamily = localizeFamily(product.family, locale);

  // Fil d'Ariane par PILIER de collection (pas le jargon catalogue « Armoire du bas »).
  const pillar = pillarForCategory(product.category);
  const pillarCrumb = pillar
    ? {
        name: collectionContent(pillar, locale).crumb,
        url: `${SITE.url}${localizePath(`/boutique/${pillar.slug}`, locale)}`,
      }
    : null;

  // 1 Offer par SKU catalogue réel (les variantes profil partagent un code) :
  // on dédoublonne par code pour ne pas émettre deux offres identiques.
  const offerSeen = new Set<string>();
  const offerVariants = model.variants.filter((v) => {
    if (offerSeen.has(v.code)) return false;
    offerSeen.add(v.code);
    return true;
  });

  // Prix valide ~1 an (rich results / free listings). new Date au build (SSG).
  const priceValidUntil = new Date(Date.now() + 365 * 86400000)
    .toISOString()
    .slice(0, 10);
  // Attributs structurés (additionalProperty) — labels non-UI, locale-aware.
  const PL =
    locale === "en"
      ? { dims: "Dimensions", doors: "Doors", drawers: "Drawers", colors: "Colours" }
      : { dims: "Dimensions", doors: "Portes", drawers: "Tiroirs", colors: "Couleurs" };
  const colourAxis = model.axes.find((a) => a.key === "couleur");
  const additionalProperties = [
    product.w && product.h && product.d
      ? { name: PL.dims, value: `${product.w}″ × ${product.h}″ × ${product.d}″` }
      : null,
    product.doors ? { name: PL.doors, value: String(product.doors) } : null,
    product.drawers ? { name: PL.drawers, value: String(product.drawers) } : null,
    colourAxis
      ? {
          name: PL.colors,
          value: colourAxis.values
            .map((v) => localizeColor(v.label, locale))
            .join(", "),
        }
      : null,
  ].filter((p): p is { name: string; value: string } => Boolean(p));

  return (
    <>
      <JsonLd
        data={productJsonLd({
          name: localName,
          description: productDescription(model, locale),
          sku: product.sku ?? product.code ?? product.id,
          category: localFamily,
          image: photoForProduct(product),
          price: model.fromPrice,
          availability: product.visible && model.fromPrice > 0,
          url: productUrl,
          width: product.w,
          height: product.h,
          depth: product.d,
          // 1 Product, N Offers : prix/SKU propres à chaque couleur catalogue.
          offers: offerVariants.map((v) => ({
            price: v.price,
            sku: v.sku,
            availability: v.available,
            url: productUrl,
            name: localizeColor(v.colors[0] ?? "", locale) || undefined,
          })),
          priceValidUntil,
          additionalProperties,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("breadcrumb.home"), url: `${SITE.url}/` },
          {
            name: t("breadcrumb.shop"),
            url: `${SITE.url}${localizePath(routes.home, locale)}`,
          },
          ...(pillarCrumb ? [pillarCrumb] : []),
          { name: localName, url: productUrl },
        ])}
      />
      <Suspense fallback={null}>
        <ProduitClient id={model.id} />
      </Suspense>
    </>
  );
}
