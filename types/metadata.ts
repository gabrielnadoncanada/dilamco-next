export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogAlt?: string;
  ogImage?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}
