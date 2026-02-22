import type { PageFeatures } from "@/types/page-features";

export function isDraftBuildEnabled(): boolean {
  return process.env.SHOW_DRAFTS === "1";
}

export function isPageVisibleWithoutPreview(features?: PageFeatures): boolean {
  return !features?.isDraft || isDraftBuildEnabled();
}
