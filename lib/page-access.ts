import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { PageFeatures } from "@/types/page-features";
import { isPageVisibleWithoutPreview } from "@/lib/page-features";

export async function canAccessPage(features?: PageFeatures): Promise<boolean> {
  if (!features?.isDraft) return true;

  if (isPageVisibleWithoutPreview(features)) {
    return true;
  }

  const { isEnabled } = await draftMode();
  return isEnabled;
}

export async function ensurePageAccess(features?: PageFeatures): Promise<void> {
  if (!(await canAccessPage(features))) {
    notFound();
  }
}

export async function getAccessibleEntity<T extends { features?: PageFeatures }>(
  entity: T | null | undefined,
): Promise<T | null> {
  if (!entity) return null;
  if (!(await canAccessPage(entity.features))) return null;
  return entity;
}

export async function requireAccessibleEntity<T extends { features?: PageFeatures }>(
  entity: T | null | undefined,
): Promise<T> {
  if (!entity) notFound();
  if (!(await canAccessPage(entity.features))) notFound();
  return entity;
}
