"use client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { AppLink as Link } from "@/components/AppLink";
import type { NavLinkItemProps } from "../navbar.types";

export function NavLinkItem({ link, variant }: NavLinkItemProps) {
  if (variant === "desktop") {
    return (
      <NavigationMenuLink
        asChild
        className="group/link flex-row items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-primary-soft focus-visible:bg-primary-soft"
      >
        <Link href={link.url}>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors duration-200 group-hover/link:bg-primary group-hover/link:text-primary-foreground">
            <link.icon className="size-4" strokeWidth={2} />
          </span>
          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="text-sm font-semibold leading-5 text-foreground">
              {link.label}
            </span>
            {link.description ? (
              <span className="text-xs leading-4 text-muted-foreground">
                {link.description}
              </span>
            ) : null}
          </span>
        </Link>
      </NavigationMenuLink>
    );
  }

  return (
    <Link
      href={link.url}
      className="flex h-12 items-center gap-3 rounded-xl px-3 text-base font-medium text-foreground/85 transition-colors duration-200 hover:bg-primary-soft hover:text-primary"
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
        <link.icon className="size-4" strokeWidth={2} />
      </span>
      {link.label}
    </Link>
  );
}
