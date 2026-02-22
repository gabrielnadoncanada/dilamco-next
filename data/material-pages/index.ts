import type { MaterialSlug } from "@/types/page-slugs";
import type { MaterialPageDefinition } from "@/types/page-definitions";
import { getPublicKeys, getRecordItem } from "@/lib/feature-collections";
import {
  metadata as boisMassifMetadata,
  pageData as boisMassifPageData,
} from "@/data/material-pages/bois-massif";
import {
  metadata as comparatifMetadata,
  pageData as comparatifPageData,
} from "@/data/material-pages/comparatif";
import {
  metadata as contreplaqueMetadata,
  pageData as contreplaquePageData,
} from "@/data/material-pages/contreplaque";
import {
  metadata as couleursMetadata,
  pageData as couleursPageData,
} from "@/data/material-pages/couleurs";
import {
  metadata as mdfMetadata,
  pageData as mdfPageData,
} from "@/data/material-pages/mdf";
import {
  metadata as melamineMetadata,
  pageData as melaminePageData,
} from "@/data/material-pages/melamine";
import {
  metadata as quincaillerieMetadata,
  pageData as quincailleriePageData,
} from "@/data/material-pages/quincaillerie";

export type { MaterialSlug } from "@/types/page-slugs";

export const MATERIAL_PAGES: Record<MaterialSlug, MaterialPageDefinition> = {
  "bois-massif": { metadata: boisMassifMetadata, pageData: boisMassifPageData },
  comparatif: { metadata: comparatifMetadata, pageData: comparatifPageData },
  contreplaque: {
    metadata: contreplaqueMetadata,
    pageData: contreplaquePageData,
  },
  couleurs: { metadata: couleursMetadata, pageData: couleursPageData },
  mdf: { metadata: mdfMetadata, pageData: mdfPageData },
  melamine: { metadata: melamineMetadata, pageData: melaminePageData },
  quincaillerie: {
    metadata: quincaillerieMetadata,
    pageData: quincailleriePageData,
  },
};

export const MATERIAL_PAGE_SLUGS = Object.keys(
  MATERIAL_PAGES,
) as MaterialSlug[];

export const PUBLIC_MATERIAL_PAGE_SLUGS = getPublicKeys(MATERIAL_PAGES);

export function getMaterialPageBySlug(
  slug: string,
  options?: { includeDrafts?: boolean },
) {
  return getRecordItem(MATERIAL_PAGES, slug, options);
}
