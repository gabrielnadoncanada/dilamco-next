"use client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import type { NavLinkItemProps } from "../navbar.types";

export function NavLinkItem({ link, variant }: NavLinkItemProps) {
  if (variant === "desktop") {
    return (
      <NavigationMenuLink
        asChild
        className="group/link flex-row gap-2 px-3 py-2 transition-colors duration-200"
      >
        <a href={link.url}>
          <div className="flex size-8 shrink-0 rounded-lg border duration-400 fade-in group-hover/link:bg-background">
            <link.icon className="m-auto size-4 group-hover/link:stroke-black" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="text-sm font-medium">{link.label}</div>
            <div className="text-xs text-muted-foreground group-hover/link:text-foreground">
              {link.description}
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    );
  }

  return (
    <a
      href={link.url}
      className="flex h-12 items-center gap-2 rounded-lg px-4 text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground"
    >
      <link.icon className="size-4 stroke-muted-foreground" />
      {link.label}
    </a>
  );
}
