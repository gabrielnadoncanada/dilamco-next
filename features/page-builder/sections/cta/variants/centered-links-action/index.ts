import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { CtaCenteredLinksActionSchema } from "./schema";
import { CtaCenteredLinksAction } from "./ui";

export const ctaCenteredLinksAction = defineBlock({
  type: "cta",
  variant: "centered-links-action",
  schema: CtaCenteredLinksActionSchema,
  Component: CtaCenteredLinksAction,
  defaultFrame: {
    container: "2xl",
    paddingY: "lg",
    surface: "muted",
    headerAlign: "center",
    contentAlign: "center",
  },
});
