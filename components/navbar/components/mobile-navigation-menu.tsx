"use client";

import { Phone } from "lucide-react";

import { Accordion } from "@/components/ui/accordion";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { SITE } from "@/seo/schema/site";
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

const PHONE_HREF = `tel:${SITE.telephone.replace(/[^+\d]/g, "")}`;
const PHONE_DISPLAY = SITE.telephone.replace(/^\+1-?/, "");

/**
 * Menu mobile en tiroir bas (vaul) : monte du bas, hauteur plafonnée, pied
 * collant avec l'appel à l'action, le téléphone et la langue.
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
      <DrawerContent className="max-h-[88vh] rounded-t-3xl bg-background p-0">
        <DrawerTitle className="sr-only">Menu</DrawerTitle>
        <div className="flex max-h-[88vh] flex-col">
          <div className="flex-1 overflow-y-auto px-3 pb-3 pt-2">
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
          <div className="border-t border-border bg-background p-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <ActionButtons
              actions={actions}
              className="w-full [&>a]:w-full"
              size="default"
            />
            <div className="mt-3 flex items-center justify-between">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <Phone className="size-4" strokeWidth={2.25} />
                <span className="tabular-nums">{PHONE_DISPLAY}</span>
              </a>
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
