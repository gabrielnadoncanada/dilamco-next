import { heroBgImageOverlayProofs } from "./variants/bg-image-overlay-proofs";
import { heroCenteredBadgeActions } from "./variants/centered-badge-actions";
import { heroSplitImageBadges } from "./variants/split-image-badges";
import { heroSplitBadgesCardBullets } from "./variants/split-badges-card-bullets";

export const heroDefs = [
  heroBgImageOverlayProofs,
  heroCenteredBadgeActions,
  heroSplitImageBadges,
  heroSplitBadgesCardBullets,
] as const;
