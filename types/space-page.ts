import type { serviceJsonLd } from "@/seo/schema/builders";
import type { ArticlePageData } from "@/types/article-page";
import type { RenderableSectionWithContent } from "@/lib/render-section";

type ServiceData = Parameters<typeof serviceJsonLd>[0];

export type SpacePageData = Omit<ArticlePageData, "extraJsonLd" | "sections"> & {
  sections: RenderableSectionWithContent[];
  service: ServiceData;
};
