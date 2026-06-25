"use client";

import { Button } from "@/components/ui/button";
import { AppLink as Link } from "@/components/AppLink";
import { cn } from "@/lib/utils";
import type { NavAction } from "../navbar.types";
import { getActionButtonVariant } from "../utils";

interface ActionButtonsProps
  extends React.ComponentPropsWithoutRef<"div"> {
  actions: NavAction[];
  size?: "default" | "small" | "xl" | "icon" | "icon-xs";
}

export function ActionButtons({
  actions,
  className,
  size,
  ...rest
}: ActionButtonsProps) {
  return (
    <div
      className={cn("flex items-center gap-3", className)}
      {...rest}
    >
      {actions.map((action, index) => {
        const { label, isPrimary, url, buttonProps = {}, linkProps = {} } =
          action;
        return (
          <Button
            size={size}
            variant={getActionButtonVariant(action)}
            className={
              isPrimary ? "text-primary-foreground" : "text-foreground"
            }
            asChild
            key={`navbar-btn-${index}`}
            {...buttonProps}
          >
            <Link href={url} {...linkProps}>
              {label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
