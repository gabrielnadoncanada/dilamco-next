"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { MenuItem } from "../navbar.types";
import { NAVIGATION } from "../navbar.constants";
import { DesktopMenuItem } from "./desktop-menu-item";

interface DesktopNavigationProps {
  navigation?: MenuItem[];
}

export function DesktopNavigation({ navigation }: DesktopNavigationProps) {
  const navItems = navigation || NAVIGATION;
  
  return (
    <NavigationMenu className="hidden xl:flex" viewport={false}>
      <NavigationMenuList>
        {navItems.map((item, index) => (
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
