import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import type { PageMetadataOptions } from "@/types/metadata";
import type { BuilderTemplatePage } from "./definitions";
import { getPageTemplate } from "./template-registry";
import { validateTemplatePage } from "./validate-template-page";

export type PageTemplateData = Omit<BuilderTemplatePage, "metadata"> & {
  metadata: PageMetadataOptions;
};

export function createPageTemplate(page: PageTemplateData) {
  const metadata: Metadata = createPageMetadata(page.metadata);
  const template = getPageTemplate(page.template);

  if (!template) {
    throw new Error(`Unknown page template "${page.template}".`);
  }

  validateTemplatePage(page, template.blockRegistry);

  async function Page() {
    return template.render(page);
  }

  return { metadata, Page };
}
