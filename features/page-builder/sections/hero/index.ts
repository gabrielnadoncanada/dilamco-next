import { heroImageOverlay } from "./variants/image-overlay";
import { heroCentered } from "./variants/centered";
import { heroSplitImage } from "./variants/split-image";

export const heroDefs = [
  heroImageOverlay,
  heroCentered,
  heroSplitImage,
] as const;
