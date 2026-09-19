"use client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { AppLink as Link } from "@/components/AppLink";
import { cn } from "@/lib/utils";
import type { NavLinkItemProps } from "../navbar.types";

export function NavLinkItem({
  link,
  variant,
  active = false,
}: NavLinkItemProps & { active?: boolean }) {
  if (variant === "desktop") {
    return (
      <NavigationMenuLink
        asChild
        className={cn(
          "group/link flex-row items-start gap-3 rounded-control px-3 py-2.5 transition-ui hover:bg-primary-soft focus-visible:bg-primary-soft",
          active && "bg-primary-soft/70",
        )}
      >
        <Link href={link.url} aria-current={active ? "page" : undefined}>
          <span
            className={cn(
              "icon-pill size-9 group-hover/link:bg-primary group-hover/link:text-primary-foreground",
              active && "bg-primary text-primary-foreground",
            )}
          >
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
      className="flex h-12 items-center gap-3 rounded-control px-3 text-base font-medium text-foreground/85 transition-ui focus-ring hover:bg-primary-soft hover:text-primary"
    >
      <span className="icon-pill size-8">
        <link.icon className="size-4" strokeWidth={2} />
      </span>
      {link.label}
    </Link>
  );
}
