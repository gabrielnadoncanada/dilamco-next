import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import {
  metadata as cuisineVsHomeDepotMetadata,
  pageData as cuisineVsHomeDepotPageData,
} from "@/data/comparatif-pages/cuisine-sur-mesure-vs-home-depot";
import {
  metadata as cuisineVsIkeaMetadata,
  pageData as cuisineVsIkeaPageData,
} from "@/data/comparatif-pages/cuisine-sur-mesure-vs-ikea";
import {
  metadata as cuisinisteVsEntrepreneurMetadata,
  pageData as cuisinisteVsEntrepreneurPageData,
} from "@/data/comparatif-pages/cuisiniste-vs-entrepreneur-general";

export type ComparatifSlug =
  | "cuisine-sur-mesure-vs-home-depot"
  | "cuisine-sur-mesure-vs-ikea"
  | "cuisiniste-vs-entrepreneur-general";

interface ComparatifPageDefinition {
  metadata: Metadata;
  pageData: ArticlePageData;
}

export const COMPARATIF_PAGES: Record<ComparatifSlug, ComparatifPageDefinition> = {
  "cuisine-sur-mesure-vs-home-depot": {
    metadata: cuisineVsHomeDepotMetadata,
    pageData: cuisineVsHomeDepotPageData,
  },
  "cuisine-sur-mesure-vs-ikea": {
    metadata: cuisineVsIkeaMetadata,
    pageData: cuisineVsIkeaPageData,
  },
  "cuisiniste-vs-entrepreneur-general": {
    metadata: cuisinisteVsEntrepreneurMetadata,
    pageData: cuisinisteVsEntrepreneurPageData,
  },
};

export const COMPARATIF_PAGE_SLUGS = Object.keys(
  COMPARATIF_PAGES
) as ComparatifSlug[];

export function getComparatifPageBySlug(slug: string) {
  return COMPARATIF_PAGES[slug as ComparatifSlug] ?? null;
}
