import type { NavAction } from "./navbar.types";

export function getActionButtonVariant(
  action: NavAction,
): "default" | "outline" {
  return action.isPrimary ? "default" : "outline";
}
