import type { NavAction } from "./navbar.types";

export function getActionButtonVariant(
  action: NavAction,
): "primary" | "ghost" {
  return action.isPrimary ? "primary" : "ghost";
}
