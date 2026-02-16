import type { serviceJsonLd } from "@/seo/schema/builders";
import type { ArticlePageData } from "@/types/article-page";
import type { ContentSection } from "@/types/sections";

type ServiceData = Parameters<typeof serviceJsonLd>[0];

export type SpacePageData = Omit<ArticlePageData, "extraJsonLd" | "sections"> & {
  sections: ContentSection[];
  service: ServiceData;
};
