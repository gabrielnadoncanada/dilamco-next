"use client";

import { useLocale } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MAIN_NAV } from "@/constants/navigation";
import { MAIN_NAV_EN } from "@/constants/navigation.en";
import { DesktopMenuItem } from "./desktop-menu-item";

export function DesktopNavigation() {
  const locale = useLocale();
  const nav = locale === "en" ? MAIN_NAV_EN : MAIN_NAV;
  return (
    <NavigationMenu className="hidden xl:flex" viewport={false}>
      <NavigationMenuList>
        {nav.map((item, index) => (
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
