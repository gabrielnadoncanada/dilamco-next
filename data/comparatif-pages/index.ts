import type { ComparatifSlug } from "@/types/page-slugs";
import type { ArticlePageDefinition } from "@/types/page-definitions";
import { createCollection } from "@/lib/create-collection";
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

const collection = createCollection<ComparatifSlug, ArticlePageDefinition>({
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
});

export const PUBLIC_COMPARATIF_PAGE_SLUGS = collection.publicSlugs;
export const getComparatifPageBySlug = collection.getBySlug;
