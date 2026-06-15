import { Button } from "@/components/ui/button";
import { AppLink } from "@/components/AppLink";
import { type LucideIcon } from "lucide-react";
import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ActionButton {
  text: string;
  href: string;
  variant?:
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "destructive";
  icon?: LucideIcon;
  [key: string]: unknown;
}

export interface ActionButtonsProps
  extends HTMLAttributes<HTMLDivElement> {
  buttons: ActionButton[];
}

export function ActionButtons({ buttons, className, ...props }: ActionButtonsProps) {
  return (
    <div
      className={cn("flex w-full flex-wrap items-center justify-center gap-3 **:data-[slot=button]:shadow-none", className)}
      {...props}
    >
      {buttons.map((button, index) => {
        const { text, href, variant, icon: Icon, ...buttonProps } = button;
        return (
          <Button
            key={index}
            asChild
            variant={variant ?? "default"}
            className="h-9 w-full px-4 sm:w-auto"
            {...buttonProps}
          >
            <AppLink href={href}>
              {text}
              {Icon && <Icon className="size-4" />}
            </AppLink>
          </Button>
        );
      })}
    </div>
  );
}
