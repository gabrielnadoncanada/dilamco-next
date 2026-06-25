"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { AppLink as Link } from "@/components/AppLink";
import { Store, Truck, Warehouse } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Headline, Body } from "@/components/shop/ds";
import { photoForProduct } from "@/lib/shop/photos";
import { Price } from "@/components/shop/price";
import { AvailabilityDot } from "@/components/shop/availability-dot";
import { ProductSpecs } from "./product-specs";
import {
  findProduct,
  isDoorPanel,
  isFlatPart,
  widthSiblings,
} from "@/lib/shop/products";
import {
  IN_PAGE_AXES,
  isAxisValueAvailable,
  modelForVariantCode,
  selectAxisValue,
  variantById,
} from "@/lib/shop/models";
import { productDescription } from "@/lib/shop/product-description";
import { routes } from "@/lib/shop/routes";
import type { Product, ProductModel } from "@/lib/shop/types";
import { cn } from "@/lib/shop/utils";
import { formatPrice } from "@/lib/shop/format";
import {
  localizeProductLabel,
  localizeColor,
  localizeFamily,
  dimUnit,
  type ShopLocale,
} from "@/lib/shop/catalog-i18n";

/** En-tête de section du panneau d'achat : label medium + valeur en sourdine. */
function SectionLabel({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-[13px] font-medium tracking-[0.01em] text-foreground">
        {label}
      </span>
      {value && (
        <span className="text-[13px] text-muted-foreground">— {value}</span>
      )}
    </div>
  );
}

function descriptionKey(p: Product): string {
  if (isDoorPanel(p)) return "description.doorPanel";
  if (isFlatPart(p)) return "description.flatPart";
  if (p.code.endsWith("-muf")) return "description.oak";
  return "description.standard";
}

interface Props {
  /** Produit de la VARIANTE active (prix/SKU/render/specs). */
  product: Product;
  model: ProductModel;
  activeVariantId: string;
  onSelectVariant: (id: string) => void;
  qty: number;
  setQty: (fn: (q: number) => number) => void;
  onAdd: () => void;
}

export function ProductInfo({
  product,
  model,
  activeVariantId,
  onSelectVariant,
  qty,
  setQty,
  onAdd,
}: Props) {
  const t = useTranslations("shop.product");
  const locale = useLocale() as ShopLocale;
  // Les largeurs sont des fiches séparées : on ancre le sélecteur de largeur
  // sur le code canonique du modèle pour que les liens pointent les URLs canoniques.
  const widthAnchor = findProduct(model.id) ?? product;
  return (
    <div className="flex flex-col gap-7 pt-2 max-[700px]:gap-5">
      {/* Hiérarchie : une seule dominante — le prix. Le titre reste serif
          mais plus discret ; l'eyebrow et le SKU sont tertiaires. */}
      <div className="flex flex-col">
        <Headline
          level="headline2"
          as="h1"
          className="!text-[26px] !leading-[1.2] text-foreground/90 max-[700px]:!text-[20px]"
        >
          {localizeProductLabel(product.name, locale)}
        </Headline>
        <Price amount={product.price} size="lg" className="mt-3" />
      </div>

      <VariantAxes
        model={model}
        activeId={activeVariantId}
        onSelect={onSelectVariant}
      />

      <WidthSelector product={widthAnchor} />

      <HowToGetIt />

      <div className="flex flex-col gap-1.5 pt-2 max-[700px]:sticky max-[700px]:bottom-0 max-[700px]:z-10 max-[700px]:-mx-[18px] max-[700px]:border-t max-[700px]:border-border max-[700px]:bg-background max-[700px]:px-[18px] max-[700px]:py-2.5">
        <div className="flex items-stretch gap-3 max-[700px]:gap-2">
          <div className="inline-flex items-center border border-border-strong bg-card">
            <button
              className="h-full w-11 cursor-pointer bg-transparent text-lg text-foreground hover:bg-secondary max-[700px]:w-9"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              −
            </button>
            <input
              name="quantite"
              aria-label={t("quantity")}
              className="h-full w-11 border-x border-border bg-transparent text-center font-mono text-sm text-foreground outline-none max-[700px]:w-9"
              value={qty}
              onChange={(e) => {
                const next = Math.max(1, parseInt(e.target.value, 10) || 1);
                setQty(() => next);
              }}
            />
            <button
              className="h-full w-11 cursor-pointer bg-transparent text-lg text-foreground hover:bg-secondary max-[700px]:w-9"
              onClick={() => setQty((q) => q + 1)}
            >
              +
            </button>
          </div>
          <Button
            className="flex-1 whitespace-nowrap text-[13px] font-semibold max-[700px]:text-[12px]"
            onClick={onAdd}
          >
            {t("addToCart")} — {formatPrice(product.price * qty)}{" "}
            <ButtonArrow />
          </Button>
        </div>
        <span className="text-center text-[10.5px] tracking-[0.02em] text-muted-foreground">
          {t("addReassurance")}
        </span>
      </div>
    </div>
  );
}

/**
 * Contenu informatif de la fiche (description + accordéons) — affiché sous la
 * galerie, colonne de gauche : la colonne d'achat reste courte et focalisée
 * (pattern IKEA).
 */
export function ProductDetails({ product }: { product: Product }) {
  const t = useTranslations("shop.product");
  const locale = useLocale() as ShopLocale;
  // Description UNIQUE générée depuis les specs du modèle (anti duplicate-content).
  // Repli sur le texte i18n partagé pour les rares produits hors modèle (panneaux).
  const model = modelForVariantCode(product.code);
  const description = model
    ? productDescription(model, locale)
    : t(descriptionKey(product));
  return (
    <div className="flex flex-col gap-5 border-t border-border pt-7">
      <Body
        size="default"
        tone="soft"
        className="max-w-[560px] leading-[1.65] max-[700px]:text-sm"
      >
        {description}
      </Body>
      <div className="-mt-2.5 font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
        {t("sku")} · {product.id}
        {product.corner && product.corner !== "Non"
          ? " · " + t("configuration") + " " + product.corner.toLowerCase()
          : ""}
      </div>
      <ProductReassurance product={product} />
    </div>
  );
}

/** Specs + réassurance — mêmes engagements que la home/le footer. */
function ProductReassurance({ product }: { product: Product }) {
  const t = useTranslations("shop.product");
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      <AccordionItem value="specs" className="border-border">
        <AccordionTrigger className="py-4 text-[14px] font-medium tracking-[0.01em] hover:no-underline">
          {t("accordion.specs.title")}
        </AccordionTrigger>
        <AccordionContent>
          <ProductSpecs product={product} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="livraison" className="border-border">
        <AccordionTrigger className="py-4 text-[14px] font-medium tracking-[0.01em] hover:no-underline">
          {t("accordion.delivery.title")}
        </AccordionTrigger>
        <AccordionContent className="text-xs leading-[1.6] text-soft-foreground">
          {t("accordion.delivery.body")}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="garantie" className="border-border">
        <AccordionTrigger className="py-4 text-[14px] font-medium tracking-[0.01em] hover:no-underline">
          {t("accordion.warranty.title")}
        </AccordionTrigger>
        <AccordionContent className="text-xs leading-[1.6] text-soft-foreground">
          {t("accordion.warranty.body")}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="questions" className="border-border">
        <AccordionTrigger className="py-4 text-[14px] font-medium tracking-[0.01em] hover:no-underline">
          {t("accordion.questions.title")}
        </AccordionTrigger>
        <AccordionContent className="text-xs leading-[1.6] text-soft-foreground">
          {t("accordion.questions.callUs")}{" "}
          <a className="text-primary underline" href="tel:+15142225300">
            514-222-5300
          </a>{" "}
          {t("accordion.questions.orEmail")}{" "}
          <a className="text-primary underline" href="mailto:ventes@dilamco.ca">
            ventes@dilamco.ca
          </a>
          . {t("accordion.questions.showroom")}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

/**
 * Sélecteurs d'axes IN-PAGE (profil de porte, couleur) — pattern IKEA « Choose
 * front » : le caisson rendu change sans changer d'URL. Chaque combinaison a
 * son prix/SKU propres (variante). Un axe à une seule valeur est masqué.
 */
function VariantAxes({
  model,
  activeId,
  onSelect,
}: {
  model: ProductModel;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const locale = useLocale() as ShopLocale;
  const active = variantById(model, activeId);
  const inPage = model.axes.filter(
    (a) =>
      (IN_PAGE_AXES as readonly string[]).includes(a.key) &&
      a.values.length > 1,
  );
  if (inPage.length === 0) return null;

  const labelOf = (axisKey: string, raw: string) =>
    axisKey === "couleur" ? localizeColor(raw, locale) : raw;

  return (
    <div className="flex flex-col gap-6">
      {inPage.map((axis) => {
        const activeValueId = active.options[axis.key];
        const activeLabel =
          axis.values.find((v) => v.id === activeValueId)?.label ?? "";
        return (
          <div key={axis.key} className="flex flex-col gap-3">
            <SectionLabel
              label={axis.label}
              value={labelOf(axis.key, activeLabel)}
            />
            <div className="flex flex-wrap gap-2.5">
              {axis.values.map((val) => {
                // Sélection interdépendante : cliquer cette valeur garantit
                // qu'on atterrit sur une variante RÉELLE (prix/render exacts),
                // en « snapant » l'autre axe si besoin.
                const target = selectAxisValue(
                  model,
                  active.options,
                  axis.key,
                  val.id,
                );
                const targetProduct = findProduct(target.code);
                const isActive = val.id === activeValueId;
                // Disponible « ensemble » avec la sélection courante des autres axes.
                const available = isAxisValueAvailable(
                  model,
                  active.options,
                  axis.key,
                  val.id,
                );
                const label = labelOf(axis.key, val.label);
                const tile = (
                  <>
                    <span className="relative block size-[86px] overflow-hidden bg-secondary max-[700px]:size-[72px]">
                      {targetProduct && (
                        <Image
                          src={photoForProduct(targetProduct)}
                          alt={label}
                          fill
                          sizes="86px"
                          className="object-cover"
                        />
                      )}
                    </span>
                    <span className="block px-1.5 pb-1.5 pt-1 text-center">
                      <span className="block text-[12px] leading-[1.3] text-foreground">
                        {label}
                      </span>
                      <span className="block font-mono text-[11px] text-soft-foreground group-data-[show-prices=false]/body:hidden">
                        {formatPrice(target.price)}
                      </span>
                    </span>
                  </>
                );
                return isActive ? (
                  <span
                    key={val.id}
                    aria-current="true"
                    className="block border-2 border-foreground bg-card"
                  >
                    {tile}
                  </span>
                ) : (
                  <button
                    key={val.id}
                    type="button"
                    onClick={() => onSelect(target.id)}
                    title={
                      available
                        ? undefined
                        : `${label} · ${formatPrice(target.price)}`
                    }
                    className={cn(
                      "block cursor-pointer border bg-card transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                      available
                        ? "border-border-strong"
                        : // Combinaison qui n'existe pas avec la sélection courante :
                          // atténuée, mais cliquable (elle ajustera l'autre axe).
                          "border-border opacity-55",
                    )}
                  >
                    {tile}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Largeurs sœurs avec prix RELATIFS (pattern IKEA « Choose size ») : l'écart
 * par rapport à la sélection se compare d'un coup d'œil.
 */
function WidthSelector({ product }: { product: Product }) {
  const t = useTranslations("shop.product");
  const locale = useLocale() as ShopLocale;
  const siblings = widthSiblings(product);
  if (siblings.length < 2) return null;
  return (
    <div className="flex flex-col gap-3">
      <SectionLabel
        label={t("width")}
        value={`${product.w} ${dimUnit(locale)}`}
      />
      <div className="flex flex-wrap gap-2">
        {siblings.map((s) => {
          const delta = s.price - product.price;
          const deltaLabel =
            delta === 0
              ? t("samePrice")
              : `${delta > 0 ? "+" : "−"}${formatPrice(Math.abs(delta))}`;
          return s.code === product.code ? (
            <span
              key={s.code}
              aria-current="true"
              className="flex flex-col items-center gap-0.5 border-2 border-foreground bg-secondary px-4 py-2 text-center"
            >
              <span className="font-mono text-[13px] font-semibold text-foreground">
                {s.w} {dimUnit(locale)}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {t("selected")}
              </span>
            </span>
          ) : (
            <Link
              key={s.code}
              href={routes.product(s.id)}
              className="flex flex-col items-center gap-0.5 border border-border-strong bg-card px-4 py-2 text-center no-underline transition-colors hover:border-foreground"
            >
              <span className="font-mono text-[13px] text-soft-foreground">
                {s.w} {dimUnit(locale)}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground group-data-[show-prices=false]/body:hidden">
                {deltaLabel}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/** « Comment l'obtenir » — canaux concrets avec pastilles (pattern IKEA). */
function HowToGetIt() {
  const t = useTranslations("shop.product");
  return (
    <div className="flex flex-col gap-0 border border-border">
      <div className="flex items-start gap-3 border-b border-border px-4 py-3.5">
        <Truck className="mt-0.5 size-[18px] shrink-0 text-foreground" />
        <div className="flex flex-col gap-0.5">
          <span className="text-[13px] font-medium text-foreground">
            {t("howToGet.delivery.title")}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-soft-foreground">
            <span
              aria-hidden
              className="size-[7px] rounded-full bg-[#3f7a4e]"
            />
            {t("howToGet.delivery.status")}
          </span>
        </div>
      </div>
      <div className="flex items-start gap-3 border-b border-border px-4 py-3.5">
        <Warehouse className="mt-0.5 size-[18px] shrink-0 text-foreground" />
        <div className="flex flex-col gap-0.5">
          <span className="text-[13px] font-medium text-foreground">
            {t("howToGet.pickup.title")}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-soft-foreground">
            <span
              aria-hidden
              className="size-[7px] rounded-full bg-[#3f7a4e]"
            />
            {t("howToGet.pickup.status")}
          </span>
        </div>
      </div>
      <div className="flex items-start gap-3 px-4 py-3.5">
        <Store className="mt-0.5 size-[18px] shrink-0 text-foreground" />
        <div className="flex flex-col gap-0.5">
          <span className="text-[13px] font-medium text-foreground">
            {t("howToGet.showroom.title")}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-soft-foreground">
            <span
              aria-hidden
              className="size-[7px] rounded-full bg-[#3f7a4e]"
            />
            {t("howToGet.showroom.hours")}
          </span>
        </div>
      </div>
    </div>
  );
}
