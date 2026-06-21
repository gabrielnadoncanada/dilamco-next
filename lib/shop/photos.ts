import type { Product, ColorName, ProductGalleryEntry } from "./types";

const DEFAULT_GALLERY_LABELS = ["Atelier", "Ambiance", "Détail · Moulure"] as const;

/** Placeholder neutre « image à venir » : affiché tel quel pour les produits
 *  sans rendu Blender, plutôt qu'une photo d'un autre meuble (qui trompe). */
export const PLACEHOLDER_PRODUCT_SRC = "/assets/products/placeholder.webp";

function gallerySrc(entry: ProductGalleryEntry): string {
  return typeof entry === "string" ? entry : entry.src;
}

function galleryLabel(entry: ProductGalleryEntry, index: number): string {
  if (typeof entry !== "string" && entry.label) return entry.label;
  return DEFAULT_GALLERY_LABELS[index] ?? `Vue ${index + 1}`;
}

export function photoForProduct(product: Product, _color?: ColorName): string {
  const firstGallery = product.gallery?.[0];
  if (firstGallery) return gallerySrc(firstGallery);
  return PLACEHOLDER_PRODUCT_SRC;
}

export function inSituFor(_product: Product): string[] {
  return [PLACEHOLDER_PRODUCT_SRC];
}

/** Vues carousel / lightbox : `product.gallery` si renseigné, sinon une seule
 *  vue placeholder « image à venir ». */
export function productGalleryViews(product: Product): Array<{
  type: "photo";
  src: string;
  label: string;
}> {
  const custom = product.gallery;
  if (custom?.length) {
    return custom.map((entry, i) => ({
      type: "photo" as const,
      src: gallerySrc(entry),
      label: galleryLabel(entry, i),
    }));
  }
  return [
    { type: "photo" as const, src: PLACEHOLDER_PRODUCT_SRC, label: "Image à venir" },
  ];
}
