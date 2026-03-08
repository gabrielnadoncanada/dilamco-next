import { defineBlock } from "@/page-builder/model/defineBlock";

import { HeroCenteredBadgeActionsSchema } from "./schema";
import { HeroCenteredBadgeActions } from "./ui";

export const heroCenteredBadgeActions = defineBlock({
  type: "hero",
  variant: "centered-badge-actions",
  schema: HeroCenteredBadgeActionsSchema,
  Component: HeroCenteredBadgeActions,
  defaultFrame: {
    container: "2xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "center",
    contentAlign: "center",
  },
});
