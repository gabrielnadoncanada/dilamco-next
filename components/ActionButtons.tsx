import { Button } from "@/components/ui/button";
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
      className={cn("flex flex-wrap w-full items-center justify-center gap-2 **:data-[slot=button]:shadow-none", className)}
      {...props}
    >
      {buttons.map((button, index) => {
        const { text, href, variant, icon: Icon, ...buttonProps } = button;
        return (
          <Button
            key={index}
            asChild
            variant={variant ?? "default"}
            className="w-full sm:w-auto"
            {...buttonProps}
          >
            <a href={href}>
              {text}
              {Icon && <Icon className="size-4" />}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
