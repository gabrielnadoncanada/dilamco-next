"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { AppLink as Link } from "@/components/AppLink";
import { useCart } from "./cart-provider";
import { Swatch } from "./swatch";
import { galleryViews, photoForProduct } from "@/lib/shop/photos";
import { findProduct, widthSiblings } from "@/lib/shop/products";
import { findModel, resolveVariant, slugForCode } from "@/lib/shop/models";
import { routes } from "@/lib/shop/routes";
import type { Product } from "@/lib/shop/types";
import { formatDim } from "@/lib/shop/format";
import {
  localizeProductLabel,
  localizeColor,
  dimUnit,
  type ShopLocale,
} from "@/lib/shop/catalog-i18n";
import { Price } from "./price";
import { AvailabilityDot } from "./availability-dot";

export function PCard({
  product,
  finish,
}: {
  product: Product;
  /** Couleur filtrée dans la grille (ex. "chene") : la carte prévisualise cette finition. */
  finish?: string | null;
}) {
  const defaultMolding = product.moldings[0] || "1 po";
  const cart = useCart();
  const t = useTranslations("shop.product.card");
  const locale = useLocale() as ShopLocale;

  // Couleurs disponibles du modèle (la fiche regroupe les finitions) : on
  // affiche une pastille par couleur, à titre indicatif (la sélection se fait
  // sur la fiche). La carte ne pointe qu'une URL : la fiche canonique.
  const model = findModel(product.code);
  const colorValues = model?.axes.find((a) => a.key === "couleur")?.values ?? [];

  // Si un filtre couleur est actif et que le modèle l'offre, la carte montre
  // cette variante (image + prix + libellé) ; sinon la couleur canonique.
  const activeColorId =
    finish && colorValues.some((c) => c.id === finish)
      ? finish
      : colorValues[0]?.id ?? "blanc";
  const previewVariant = model
    ? resolveVariant(model, { couleur: activeColorId })
    : undefined;
  const previewProduct =
    (previewVariant && findProduct(previewVariant.code)) || product;
  // Couleur + photo de la VARIANTE prévisualisée (Navi partage le code
  // catalogue du blanc : couleur/galerie vivent sur la variante, pas le code).
  const displayColor =
    previewVariant?.colors[0] || previewProduct.colors[0] || "Blanc Pur";
  const photo = previewVariant
    ? galleryViews(previewVariant.gallery)[0].src
    : photoForProduct(previewProduct, displayColor);

  // Prix : exact de la couleur filtrée si un filtre est actif, sinon le prix de
  // la couleur par défaut (canonique). Pas de « à partir de ».
  const finishActive = Boolean(finish && colorValues.some((c) => c.id === finish));
  const displayPrice = finishActive
    ? previewVariant?.price ?? product.price
    : model?.fromPrice ?? product.price;

  // URL fiche = slug mot-clé localisé (FR/EN), pas le code SKU.
  const productSlugPath = routes.product(slugForCode(product.id, locale));
  // Si une finition est filtrée (ex. page « chêne blanc »), le clic mène à la
  // fiche AVEC cette couleur pré-sélectionnée (?couleur=chene).
  const productHref = finishActive
    ? `${productSlugPath}?couleur=${activeColorId}`
    : productSlugPath;

  const label = localizeProductLabel(
    product.shortName || product.name,
    locale,
  );
  const colorLabel = localizeColor(displayColor, locale);

  // « Offert en d'autres largeurs » : la finition est un sélecteur sur la fiche
  // (même URL), donc seules les largeurs sœurs (fiches distinctes) sont liées ici.
  const widths = widthSiblings(product).filter((p) => p.code !== product.code);
  const variants = widths;
  const shownVariants = variants.slice(0, 4);
  const extraCount = variants.length - shownVariants.length;

  return (
    <article className="group flex flex-col border border-border bg-card text-card-foreground transition-[border-color] duration-200 hover:border-foreground">
      <div className="relative aspect-square overflow-hidden border-b border-border ">
        <Link
          href={productHref}
          aria-label={label}
          className="absolute inset-0 z-0 block overflow-hidden"
        >
          {photo && (
            <Image
              src={photo}
              alt={label}
              fill
              sizes="(max-width: 380px) 90vw, (max-width: 1100px) 45vw, (max-width: 1440px) 30vw, 22vw"
              className="object-cover transition-transform duration-[600ms] ease group-hover:scale-[1.04]"
            />
          )}
        </Link>
        <button
          aria-label={t("addAria", { name: label })}
          onClick={() =>
            cart.addItem(previewProduct, {
              color: displayColor,
              molding: defaultMolding,
            })
          }
          className="absolute bottom-3 right-3 z-10 cursor-pointer bg-primary px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] text-primary-foreground opacity-0 transition-opacity duration-200 hover:bg-foreground focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary group-hover:opacity-100 max-[700px]:px-3 max-[700px]:opacity-100"
        >
          {t("addShort")}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-[18px] pb-5 pt-[16px] max-[700px]:px-3 max-[700px]:pb-4">
        <Link
          href={productHref}
          className="flex flex-col gap-1 no-underline"
        >
          <span className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground">
            #{product.id}
          </span>
          <span className="font-serif text-lg leading-[1.2] tracking-[-0.01em] text-foreground max-[700px]:!text-[14px]">
            {label}
          </span>
          <span className="text-xs leading-[1.45] text-soft-foreground max-[700px]:text-[11px]">
            {colorLabel} · {formatDim(product.w)} × {formatDim(product.h)} ×{" "}
            {formatDim(product.d)} {dimUnit(locale)}
          </span>
        </Link>

        <div className="mt-1.5 flex items-center justify-between gap-2">
          <Price amount={displayPrice} size="md" />
          <span className="flex items-center gap-1.5">
            {colorValues.length > 0 ? (
              colorValues.map((c) => {
                const cLabel = localizeColor(c.label, locale);
                return (
                  <Link
                    key={c.id}
                    href={`${productSlugPath}?couleur=${c.id}`}
                    title={cLabel}
                    aria-label={cLabel}
                    className={
                      "inline-flex rounded-full transition-shadow hover:ring-1 hover:ring-foreground hover:ring-offset-1 hover:ring-offset-card" +
                      (c.id === activeColorId
                        ? " ring-1 ring-foreground ring-offset-1 ring-offset-card"
                        : "")
                    }
                  >
                    <Swatch color={c.label} title={cLabel} size="lg" />
                  </Link>
                );
              })
            ) : (
              <Swatch color={displayColor} title={colorLabel} size="lg" />
            )}
          </span>
        </div>

        <ul className="mt-1 flex flex-col gap-1 text-[11px] leading-[1.4] text-soft-foreground max-[700px]:text-[10px]">
          <li className="flex items-center gap-1.5">
            <AvailabilityDot />
            {t("inStock")}
          </li>
          <li className="flex items-center gap-1.5">
            <AvailabilityDot />
            {t("deliveryAvailable")}
          </li>
        </ul>

        {shownVariants.length > 0 && (
          <div className="mt-auto pt-3">
            <span className="text-[11px] text-muted-foreground max-[700px]:text-[10px]">
              {t("otherOptions", { count: variants.length })}
            </span>
            <div className="mt-1.5 flex items-center gap-1.5">
              {shownVariants.map((v) => (
                <Link
                  key={v.code}
                  href={routes.product(slugForCode(v.id, locale))}
                  title={`${localizeProductLabel(v.shortName || v.name, locale)} · ${localizeColor(v.colors[0] || "", locale)}`}
                  className="relative block size-[42px] overflow-hidden border border-border bg-secondary transition-colors hover:border-foreground max-[700px]:size-[34px]"
                >
                  <Image
                    src={photoForProduct(v, v.colors[0])}
                    alt={localizeProductLabel(v.shortName || v.name, locale)}
                    fill
                    sizes="42px"
                    className="object-cover"
                  />
                </Link>
              ))}
              {extraCount > 0 && (
                <Link
                  href={productSlugPath}
                  className="px-1 font-mono text-[11px] text-foreground underline underline-offset-2 hover:text-primary"
                >
                  +{extraCount}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
