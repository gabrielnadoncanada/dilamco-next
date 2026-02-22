import { isPageVisibleWithoutPreview } from "@/lib/page-features";
import type { PageFeatures } from "@/types/page-features";

type WithFeatures = { features?: PageFeatures };

export function getPublicKeys<T extends string, V extends WithFeatures>(
  record: Record<T, V>,
): T[] {
  return (Object.keys(record) as T[]).filter((key) =>
    isPageVisibleWithoutPreview(record[key].features),
  );
}

export function getRecordItem<T extends string, V extends WithFeatures>(
  record: Record<T, V>,
  key: string,
  options?: { includeDrafts?: boolean },
): V | null {
  if (!Object.prototype.hasOwnProperty.call(record, key)) return null;
  const value = record[key as T];
  if (options?.includeDrafts) return value;
  if (!isPageVisibleWithoutPreview(value.features)) return null;
  return value;
}

export function getPublicItems<T extends WithFeatures>(items: T[]): T[] {
  return items.filter((item) => isPageVisibleWithoutPreview(item.features));
}

export function getVisibleItem<T extends WithFeatures>(
  item: T | undefined,
  options?: { includeDrafts?: boolean },
): T | undefined {
  if (!item) return undefined;
  if (options?.includeDrafts) return item;
  if (!isPageVisibleWithoutPreview(item.features)) return undefined;
  return item;
}
