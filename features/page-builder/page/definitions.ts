import type { Metadata } from "next";
import type { PageMetadataOptions } from "@/types/metadata";
import type { PageFeatures } from "@/types/page-features";
import type { serviceJsonLd } from "@/seo/schema/builders";
import type { Block } from "../model/block-types";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type BuilderPageData = {
  breadcrumbs?: BreadcrumbItem[];
  blocks: Block[];
  extraJsonLd?: Array<Record<string, unknown>>;
  service?: Parameters<typeof serviceJsonLd>[0];
};

export type SupportedMetadata = Metadata | PageMetadataOptions;

export type MetadataResolverContext<TPage> = {
  params: Record<string, string>;
  page: TPage;
};

export type MetadataSource<TPage> =
  | SupportedMetadata
  | ((
      context: MetadataResolverContext<TPage>,
    ) => Promise<SupportedMetadata> | SupportedMetadata);

export type BuilderTemplatePage = BuilderPageData & {
  template: string;
  metadata: MetadataSource<BuilderTemplatePage>;
  features?: PageFeatures;
};

export type TemplatePageDefinition = BuilderTemplatePage;
export type PageTemplateKey = TemplatePageDefinition["template"];
