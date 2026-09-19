"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "@/i18n/navigation";
import { MAIN_NAV } from "@/constants/navigation";
import { MAIN_NAV_EN } from "@/constants/navigation.en";
import { DesktopMenuItem } from "./desktop-menu-item";

/**
 * Reconstruit le chemin interne concret (FR, sans préfixe de locale) à partir
 * du template next-intl (`/zones/[zone]`) et des params, pour marquer l'entrée
 * de menu active dans les deux langues.
 */
function useInternalPath() {
  const template = usePathname();
  const params = useParams<Record<string, string | string[]>>();
  return template.replace(/\[([^\]]+)\]/g, (_, key: string) => {
    const v = params?.[key];
    return Array.isArray(v) ? v.join("/") : (v ?? "");
  });
}

export function DesktopNavigation() {
  const locale = useLocale();
  const nav = locale === "en" ? MAIN_NAV_EN : MAIN_NAV;
  const current = useInternalPath();
  return (
    <NavigationMenu className="hidden lg:flex" viewport={false}>
      <NavigationMenuList className="gap-0.5">
        {nav.map((item, index) => (
          <DesktopMenuItem
            key={`desktop-link-${index}`}
            item={item}
            index={index}
            currentPath={current}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
