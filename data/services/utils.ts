// data/services/utils.ts
// Helper functions for services

import { SERVICES } from "./main";
import { RENOVATION_SUB_SERVICES } from "./renovation";
import type { ServiceData, RenovationSubServiceData, RenovationType } from "./types";

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceCanonicalUrl(service: ServiceData): string {
  return service.metadata.canonical;
}

export function getRenovationSubServiceByType(
  type: string
): RenovationSubServiceData | undefined {
  return RENOVATION_SUB_SERVICES[type as RenovationType];
}
