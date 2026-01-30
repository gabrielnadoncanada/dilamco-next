"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavAction } from "../navbar.types";
import { getActionButtonVariant } from "../utils";

interface ActionButtonsProps {
  actions: NavAction[];
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function ActionButtons({
  actions,
  className,
  size,
}: ActionButtonsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {actions.map((action, index) => (
        <Button
          size={size}
          variant={getActionButtonVariant(action)}
          className={
            action.isPrimary
              ? "text-primary-foreground"
              : "text-foreground"
          }
          asChild
          key={`navbar-btn-${index}`}
        >
          <a href={action.url}>{action.label}</a>
        </Button>
      ))}
    </div>
  );
}
