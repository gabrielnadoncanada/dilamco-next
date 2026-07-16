"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useCart } from "@/components/shop/cart-provider";
import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";
import { Button } from "@/components/ui/button";
import { Container, Headline } from "@/components/shop/ds";
import { findProduct } from "@/lib/shop/products";
import {
  findModel,
  models,
  resolveVariant,
  variantById,
} from "@/lib/shop/models";
import { galleryViews } from "@/lib/shop/photos";
import { localizeProductLabel, localizeColor } from "@/lib/shop/catalog-i18n";
import { routes } from "@/lib/shop/routes";
import type { ColorName, Molding } from "@/lib/shop/types";
import { ProductBreadcrumb } from "./_components/product-breadcrumb";
import {
  ProductGallery,
  type GalleryView,
} from "./_components/product-gallery";
import { ProductDetails, ProductInfo } from "./_components/product-info";
import { ProductRelated } from "./_components/product-related";
import { ShowroomCta } from "@/components/shop/showroom-cta";
import { productFaq } from "@/lib/shop/product-faq";
import type { ProductModel } from "@/lib/shop/types";

/**
 * Bande « construction et qualité » : l'information des anciens blocs
 * éditoriaux pleine largeur, à l'échelle utilitaire de la fiche.
 */
function QualityHighlights() {
  const t = useTranslations("shop.product");
  const QUALITY_POINTS = [
    {
      src: "/assets/cabinet.webp",
      title: t("quality.point1.title"),
      body: t("quality.point1.body"),
    },
    {
      src: "/assets/drawer.webp",
      title: t("quality.point2.title"),
      body: t("quality.point2.body"),
    },
    {
      src: "/assets/dovetail.webp",
      title: t("quality.point3.title"),
      body: t("quality.point3.body"),
    },
    {
      src: "/assets/warehouse.webp",
      title: t("quality.point4.title"),
      body: t("quality.point4.body"),
    },
  ] as const;
  return (
    <section className="mt-20 border-t border-border pt-10 max-[700px]:mt-12 max-[700px]:pt-7">
      <h2 className="font-serif text-[22px] tracking-[-0.01em] text-foreground">
        {t("quality.title")}
      </h2>
      <div className="mt-6 grid grid-cols-4 gap-6 max-[1000px]:grid-cols-2 max-[520px]:grid-cols-1">
        {QUALITY_POINTS.map((point) => (
          <div key={point.title} className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-secondary">
              <Image
                src={point.src}
                alt={point.title}
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 1000px) 50vw, 25vw"
                className="object-cover [filter:saturate(0.78)_sepia(0.06)]"
              />
            </div>
            <h3 className="text-[14px] font-medium leading-[1.3] text-foreground">
              {point.title}
            </h3>
            <p className="m-0 text-[12px] leading-[1.55] text-soft-foreground">
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * FAQ spec-driven de la fiche (mêmes Q/R que le FAQPage JSON-LD émis côté
 * serveur). Texte visible dans le HTML statique — PAS d'accordéon Radix : le
 * contenu fermé serait absent du HTML serveur, donc invisible pour Google.
 */
function ProductFaq({ model }: { model: ProductModel }) {
  const locale = useLocale() as "fr" | "en";
  const items = productFaq(model, locale);
  return (
    <section className="mt-20 border-t border-border pt-10 max-[700px]:mt-12 max-[700px]:pt-7">
      <h2 className="font-serif text-[22px] tracking-[-0.01em] text-foreground">
        {locale === "fr" ? "Questions fréquentes" : "Frequently asked questions"}
      </h2>
      <dl className="mt-6 grid max-w-[760px] gap-7">
        {items.map((item) => (
          <div key={item.q} className="flex flex-col gap-2">
            <dt className="text-[14px] font-medium leading-[1.4] text-foreground">
              {item.q}
            </dt>
            <dd className="m-0 text-[13px] leading-[1.65] text-soft-foreground">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function ProduitClient({ id }: { id: string }) {
  const t = useTranslations("shop.product");
  const locale = useLocale() as "fr" | "en";
  const cart = useCart();
  const model = findModel(id);
  // Variante active = combinaison profil/couleur choisie ; tout (prix, SKU,
  // render, specs, panier) en découle. Pas de changement d'URL.
  const [activeVariantId, setActiveVariantId] = useState(
    model?.defaultVariantId ?? id,
  );
  // Couleur pré-sélectionnée via ?couleur= (deep-link depuis une pastille de
  // carte). Lue APRÈS montage plutôt que via useSearchParams : ce dernier
  // forçait tout le sous-arbre en rendu client (HTML serveur vide → fiche non
  // indexée). En useEffect, la fiche se rend côté serveur et la pré-sélection
  // s'applique à l'hydratation.
  useEffect(() => {
    if (!model) return;
    const couleur = new URLSearchParams(window.location.search).get("couleur");
    if (couleur) setActiveVariantId(resolveVariant(model, { couleur }).id);
  }, [model]);
  const [qty, setQty] = useState(1);
  const [view, setView] = useState(0);

  const activeVariant = model ? variantById(model, activeVariantId) : undefined;
  const product =
    (activeVariant && findProduct(activeVariant.code)) ??
    (model ? findProduct(model.id) : undefined);

  if (!model || !product || !activeVariant) {
    return (
      <Container className="py-20 text-center">
        <Headline level="title" as="h2">
          {t("notFound.title")}
        </Headline>
        <Button asChild variant="ghost" className="mt-6">
          <Link href={routes.catalogue}>{t("notFound.back")}</Link>
        </Button>
      </Container>
    );
  }

  // Couleur de la VARIANTE, pas du code catalogue : la variante Navi partage
  // le code (et donc le `product`) de la ligne blanche.
  const color =
    (activeVariant.colors[0] as ColorName) ||
    (product.colors[0] as ColorName) ||
    "Blanc Pur";
  // Profil de porte choisi → reporté dans le panier comme moulure (1 po / 3 po).
  const molding: Molding =
    activeVariant.options.profil === "shaker-3" ? "3 po" : "1 po";

  // Changer de variante remet la galerie sur la première vue (chaque variante a
  // son propre render).
  const selectVariant = (variantId: string) => {
    setActiveVariantId(variantId);
    setView(0);
  };

  // « Produits liés » : un par modèle de la même famille (pas de doublon de finition).
  const related = models
    .filter((m) => m.family === model.family && m.id !== model.id)
    .map((m) => findProduct(m.id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  // Alt descriptif (SEO image) : nom produit localisé + couleur, distinct de la
  // légende UI décorative (« Produit », « Dessin technique »). La vue technique
  // reçoit un qualificatif explicite.
  const localName = localizeProductLabel(product.name, locale);
  const localColor = localizeColor(color, locale);
  const baseAlt = localColor ? `${localName} — ${localColor}` : localName;
  const technicalSuffix =
    locale === "en" ? " (technical drawing)" : " (dessin technique)";
  // Galerie de la VARIANTE active (profil/couleur) : changer de sélection
  // bascule sur le rendu dédié. PAS de repli sur la galerie du produit : la
  // variante Navi sans rendu doit montrer le placeholder, pas le caisson blanc
  // (les autres variantes portent déjà leur propre repli via expandVariants).
  const views: GalleryView[] = galleryViews(activeVariant.gallery).map((v) => ({
    ...v,
    alt: /techni|dessin/i.test(v.label)
      ? `${baseAlt}${technicalSuffix}`
      : baseAlt,
  }));

  return (
    <Container
      padded
      className="pb-[100px] pt-8 max-[700px]:pb-14 max-[700px]:pt-4"
    >
      <ProductBreadcrumb product={product} />
      <div className="grid grid-cols-[1.15fr_1fr] items-start gap-16 max-[1000px]:grid-cols-1 max-[1000px]:gap-10 max-[700px]:gap-7">
        <div className="flex min-w-0 flex-col gap-8 max-[700px]:gap-6">
          <ProductGallery
            product={product}
            color={color}
            molding={molding}
            views={views}
            view={view}
            onSelectView={setView}
          />
          <div className="max-[1000px]:hidden">
            <ProductDetails product={product} />
          </div>
        </div>
        {/* Colonne d'achat collante (pattern IKEA) ; la galerie défile librement. */}
        <div className="sticky top-[110px] max-[1000px]:static">
          <ProductInfo
            product={product}
            model={model}
            activeVariantId={activeVariantId}
            onSelectVariant={selectVariant}
            qty={qty}
            setQty={setQty}
            onAdd={() => cart.addItem(product, { color, molding, qty })}
          />
        </div>
      </div>
      <div className="mt-8 hidden max-[1000px]:block">
        <ProductDetails product={product} />
      </div>
      <QualityHighlights />
      <ProductFaq model={model} />
      <ProductRelated products={related} />
      <div className="mt-[100px] max-[700px]:mt-14">
        <ShowroomCta />
      </div>
    </Container>
  );
}
