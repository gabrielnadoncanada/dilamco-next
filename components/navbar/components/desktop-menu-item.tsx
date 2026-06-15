"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AppLink as Link } from "@/components/AppLink";
import type { DesktopMenuItemProps } from "../navbar.types";
import { NavLinkItem } from "./nav-link-item";
import { DESKTOP_GROUP_WIDTH } from "../navbar.constants";

// Au-delà de ce nombre de liens, le groupe s'affiche sur 2 colonnes.
const TWO_COLUMN_THRESHOLD = 4;
const groupColumns = (linksCount: number) =>
  linksCount > TWO_COLUMN_THRESHOLD ? 2 : 1;

export function DesktopMenuItem({ item, index }: DesktopMenuItemProps) {
  if (item.groups) {
    const totalColumns = item.groups.reduce(
      (sum, group) => sum + groupColumns(group.links.length),
      0,
    );
    return (
      <NavigationMenuItem
        key={`desktop-menu-item-${index}`}
        value={`${index}`}
      >
        <NavigationMenuTrigger className="h-fit bg-transparent px-2.5 text-sm leading-6 font-medium text-muted-foreground">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-xl !border !p-0">
          <ul
            className="flex p-2"
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
                      columns === 2 ? "grid grid-cols-2 gap-x-2" : undefined
                    }
                  >
                    <li className="px-3 py-2 text-sm leading-6 font-medium text-muted-foreground col-span-full">
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
    <NavigationMenuItem
      key={`desktop-menu-item-${index}`}
      value={`${index}`}
    >
      <NavigationMenuLink
        asChild
        className={`${navigationMenuTriggerStyle()} h-fit bg-transparent px-2.5 text-sm leading-6 font-medium text-muted-foreground`}
      >
        <Link href={item.url ?? "/"}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
