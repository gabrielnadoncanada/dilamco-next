"use client";

import { Accordion } from "@/components/ui/accordion";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";
import type { MenuItem, NavAction } from "../navbar.types";
import { MOBILE_BUTTONS, NAVIGATION } from "../navbar.constants";
import { ActionButtons } from "./action-buttons";
import { MobileMenuItem } from "./mobile-menu-item";

interface MobileNavigationMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  navigation?: MenuItem[];
  mobileActions?: NavAction[];
}

/**
 * Menu mobile en BOTTOM DRAWER (vaul) — même pattern que l'ancienne boutique :
 * monte du bas, hauteur plafonnée, pied collant pour les actions.
 */
export function MobileNavigationMenu({
  open,
  onOpenChange,
  navigation,
  mobileActions,
}: MobileNavigationMenuProps) {
  const navItems = navigation || NAVIGATION;
  const actions = mobileActions || MOBILE_BUTTONS;

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent className="max-h-[85vh] bg-background p-0">
        <DrawerTitle className="sr-only">Menu</DrawerTitle>
        <div className="flex max-h-[85vh] flex-col">
          <div className="flex-1 overflow-y-auto px-5 pb-3 pt-1">
            <Accordion type="multiple" className="w-full">
              {navItems.map((item, index) => (
                <MobileMenuItem
                  key={`mobile-menu-item-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </Accordion>
          </div>
          <div className="border-t border-border p-4 pb-6">
            <ActionButtons
              actions={actions}
              className="w-full [&>a]:w-full"
              size="small"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
