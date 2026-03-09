import type { PageTemplateData } from "@/features/page-builder";
import { designPage } from "./design";
import { fabricationPage } from "./fabrication";
import { installationPage } from "./installation";
import { renovationPage } from "./renovation";

const servicePages = {
  design: designPage,
  fabrication: fabricationPage,
  installation: installationPage,
  renovation: renovationPage,
} satisfies Record<string, PageTemplateData>;

export const PUBLIC_SERVICE_PAGE_SLUGS = Object.keys(servicePages);

export function getServicePageBySlug(slug: string) {
  return servicePages[slug as keyof typeof servicePages] ?? null;
}
