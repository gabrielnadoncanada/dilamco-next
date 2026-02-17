"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { DesktopMenuItemProps } from "../navbar.types";
import { NavLinkItem } from "./nav-link-item";
import { getMegaMenuWidth } from "../utils";

export function DesktopMenuItem({ item, index }: DesktopMenuItemProps) {
  if (item.groups) {
    return (
      <NavigationMenuItem
        key={`desktop-menu-item-${index}`}
        value={`${index}`}
      >
        <NavigationMenuTrigger className="h-fit bg-transparent px-2.5 text-sm leading-6 font-medium text-muted-foreground">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-xl !border !p-0">
          <ul className="flex p-2" style={{ width: getMegaMenuWidth(item.groups.length) }}>
            {item.groups.map((group, index1) => (
              <li className="flex-1" key={`desktop-group-${index1}`}>
                <ul>
                  <li className="px-3 py-2 text-sm leading-6 font-medium text-muted-foreground">
                    {group.title}
                  </li>
                  {group.links.map((link, index2) => (
                    <li key={`desktop-links-${index1}-${index2}`}>
                      <NavLinkItem link={link} variant="desktop" />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
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
        href={item.url}
        className={`${navigationMenuTriggerStyle()} h-fit bg-transparent px-2.5 text-sm leading-6 font-medium text-muted-foreground`}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
