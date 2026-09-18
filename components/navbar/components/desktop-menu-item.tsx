"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { AppLink as Link } from "@/components/AppLink";
import type { DesktopMenuItemProps } from "../navbar.types";
import { NavLinkItem } from "./nav-link-item";
import { DESKTOP_GROUP_WIDTH } from "../navbar.constants";

// Au-delà de ce nombre de liens, le groupe s'affiche sur 2 colonnes.
const TWO_COLUMN_THRESHOLD = 4;
const groupColumns = (linksCount: number) =>
  linksCount > TWO_COLUMN_THRESHOLD ? 2 : 1;

const triggerClass =
  "h-10 rounded-full bg-transparent px-3.5 text-[0.9375rem] font-medium text-foreground/80 transition-ui focus-ring hover:bg-primary-soft hover:text-primary data-open:bg-primary-soft data-open:text-primary data-popup-open:bg-primary-soft";

export function DesktopMenuItem({ item, index }: DesktopMenuItemProps) {
  if (item.groups) {
    const totalColumns = item.groups.reduce(
      (sum, group) => sum + groupColumns(group.links.length),
      0,
    );
    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger className={triggerClass}>
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-card !border-border/70 !p-0 !shadow-[0_24px_60px_-24px_rgb(21_25_26/35%)]">
          <ul
            className="flex gap-1 p-2.5"
            style={{ width: totalColumns * DESKTOP_GROUP_WIDTH }}
          >
            {item.groups.map((group, index1) => {
              const columns = groupColumns(group.links.length);
              return (
                <li
                  className="flex-1"
                  style={{ flexGrow: columns }}
                  key={`desktop-group-${index1}`}
                >
                  <ul
                    className={
                      columns === 2 ? "grid grid-cols-2 gap-x-1" : undefined
                    }
                  >
                    <li className="col-span-full px-3 pb-1.5 pt-2 text-label text-muted-foreground">
                      {group.title}
                    </li>
                    {group.links.map((link, index2) => (
                      <li key={`desktop-links-${index1}-${index2}`}>
                        <NavLinkItem link={link} variant="desktop" />
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
      <NavigationMenuLink
        asChild
        className={`inline-flex items-center justify-center transition-colors ${triggerClass}`}
      >
        <Link href={item.url ?? "/"}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
