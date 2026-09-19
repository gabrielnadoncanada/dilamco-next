"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { AppLink as Link } from "@/components/AppLink";
import { cn } from "@/lib/utils";
import type { DesktopMenuItemProps } from "../navbar.types";
import { NavLinkItem } from "./nav-link-item";
import { DESKTOP_GROUP_WIDTH } from "../navbar.constants";

// Au-delà de ce nombre de liens, le groupe s'affiche sur 2 colonnes.
const TWO_COLUMN_THRESHOLD = 4;
const groupColumns = (linksCount: number) =>
  linksCount > TWO_COLUMN_THRESHOLD ? 2 : 1;

const strip = (p: string) => p.replace(/\/+$/, "");

const triggerClass =
  "relative h-10 rounded-full bg-transparent px-2.5 text-sm font-medium text-foreground/80 transition-ui focus-ring hover:bg-primary-soft hover:text-primary data-open:bg-primary-soft data-open:text-primary data-popup-open:bg-primary-soft xl:px-3.5 xl:text-[0.9375rem]";

// Entrée active : soulignement court en vert sous le libellé, indépendant du
// survol (qui reste la pilule pâle).
const activeClass =
  "text-foreground after:absolute after:inset-x-3 after:-bottom-[3px] after:h-0.5 after:rounded-full after:bg-primary";

export function DesktopMenuItem({
  item,
  index,
  currentPath = "",
}: DesktopMenuItemProps & { currentPath?: string }) {
  const here = strip(currentPath);

  if (item.groups) {
    const isActive = item.groups.some((g) =>
      g.links.some((l) => {
        const u = strip(l.url);
        return u !== "" && (here === u || here.startsWith(u + "/"));
      }),
    );
    const totalColumns = item.groups.reduce(
      (sum, group) => sum + groupColumns(group.links.length),
      0,
    );
    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger
          aria-current={isActive ? "true" : undefined}
          className={cn(triggerClass, isActive && activeClass)}
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-card !border-border/70 !p-0 !shadow-[0_24px_60px_-24px_rgb(21_25_26/35%)]">
          {/* Le panneau est ancré sous son onglet : à deux groupes côte à côte
              il sortait de l'écran sous 1920 px. On empile les groupes tant que
              la place manque, et on les met côte à côte seulement au-delà. */}
          <ul
            className="w-[var(--menu-w-min)] flex flex-wrap gap-1 p-2.5 min-[1920px]:w-[var(--menu-w)] min-[1920px]:flex-nowrap"
            style={{
              // largeur du groupe le plus large, puis largeur totale en 1920+
              ["--menu-w" as string]: `${totalColumns * DESKTOP_GROUP_WIDTH}px`,
              ["--menu-w-min" as string]: `${Math.min(totalColumns, 2) * DESKTOP_GROUP_WIDTH}px`,
            }}
          >
            {item.groups.map((group, index1) => {
              const columns = groupColumns(group.links.length);
              return (
                <li
                  className="min-w-[17rem] flex-1"
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
                        <NavLinkItem
                          link={link}
                          variant="desktop"
                          active={here === strip(link.url)}
                        />
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

  const url = strip(item.url ?? "/");
  const isActive =
    url === "" ? here === "" : here === url || here.startsWith(url + "/");

  return (
    <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
      <NavigationMenuLink
        asChild
        className={cn(
          "inline-flex items-center justify-center",
          triggerClass,
          isActive && activeClass,
        )}
      >
        <Link href={item.url ?? "/"} aria-current={isActive ? "page" : undefined}>
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
