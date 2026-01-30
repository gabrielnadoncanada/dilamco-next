import type { NavAction } from "./navbar.types";
import { DESKTOP_GROUP_WIDTH } from "./navbar.constants";

export function getMegaMenuWidth(groupsCount: number): number {
  return groupsCount * DESKTOP_GROUP_WIDTH;
}

export function getActionButtonVariant(
  action: NavAction,
): "default" | "outline" {
  return action.isPrimary ? "default" : "outline";
}
