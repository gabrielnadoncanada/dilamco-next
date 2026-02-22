import type { MaterialSlug } from "@/types/page-slugs";
import type { ArticlePageDefinition } from "@/types/page-definitions";
import { createCollection } from "@/lib/create-collection";
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

const collection = createCollection<MaterialSlug, ArticlePageDefinition>({
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
});

export const PUBLIC_MATERIAL_PAGE_SLUGS = collection.publicSlugs;
export const getMaterialPageBySlug = collection.getBySlug;
