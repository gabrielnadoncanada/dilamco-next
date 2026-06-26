export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  /**
   * Chemins localisés explicites (canonical + hreflang) quand la traduction ne
   * peut pas être dérivée de `path` par `localizePath` — typiquement un slug
   * dynamique traduit (fiche produit FR≠EN). Si absent, dérivé de `path`.
   */
  localizedPaths?: { fr: string; en: string };
  ogAlt?: string;
  ogImage?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}
