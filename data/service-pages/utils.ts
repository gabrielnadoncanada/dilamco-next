// data/services/utils.ts
// Helper functions for services

import { SERVICES } from "./main";
import { RENOVATION_SUB_SERVICES } from "./renovation";
import {
  getPublicItems,
  getPublicKeys,
  getVisibleItem,
} from "@/lib/feature-collections";
import type {
  ServiceData,
  RenovationSubServiceData,
  RenovationType,
  ServiceSlug,
} from "./types";

export function getServiceBySlug(
  slug: ServiceSlug,
  options?: { includeDrafts?: boolean },
): ServiceData | undefined {
  const service = SERVICES.find((s) => s.slug === slug);
  return getVisibleItem(service, options);
}

export function getServiceCanonicalUrl(service: ServiceData): string {
  return service.metadata.canonical;
}

export function getPublicServiceSlugs(): ServiceSlug[] {
  return getPublicItems(SERVICES).map((service) => service.slug);
}

export function getRenovationSubServiceByType(
  type: string,
  options?: { includeDrafts?: boolean },
): RenovationSubServiceData | undefined {
  const subService = RENOVATION_SUB_SERVICES[type as RenovationType];
  return getVisibleItem(subService, options);
}

export function getPublicRenovationSubServiceTypes(): RenovationType[] {
  return getPublicKeys(RENOVATION_SUB_SERVICES);
}
