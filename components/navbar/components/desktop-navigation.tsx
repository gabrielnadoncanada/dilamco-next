"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MAIN_NAV } from "@/constants/navigation";
import { DesktopMenuItem } from "./desktop-menu-item";

export function DesktopNavigation() {
  return (
    <NavigationMenu className="hidden xl:flex" viewport={false}>
      <NavigationMenuList>
        {MAIN_NAV.map((item, index) => (
          <DesktopMenuItem
            key={`desktop-link-${index}`}
            item={item}
            index={index}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
