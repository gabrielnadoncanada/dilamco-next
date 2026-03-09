import { splitTextDividerCards } from "./variants/text-divider-cards";
import { splitSteps2x2Cta } from "./variants/steps-2x2-cta";
import { splitBadgesChecklistCta } from "./variants/badges-checklist-cta";
import { splitListActionsImageCard } from "./variants/list-actions-image-card";
import { splitDetailsFormCard } from "./variants/details-form-card";

export const splitDefs = [
  splitTextDividerCards,
  splitSteps2x2Cta,
  splitBadgesChecklistCta,
  splitListActionsImageCard,
  splitDetailsFormCard,
] as const;
