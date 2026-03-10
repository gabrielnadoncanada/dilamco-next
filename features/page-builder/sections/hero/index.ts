import { heroImageOverlay } from "./variants/image-overlay";
import { heroCentered } from "./variants/centered";
import { heroSplitImage } from "./variants/split-image";
import { heroFeatureListImage } from "./variants/feature-list-image";

export const heroDefs = [
  heroImageOverlay,
  heroCentered,
  heroSplitImage,
  heroFeatureListImage,
] as const;
