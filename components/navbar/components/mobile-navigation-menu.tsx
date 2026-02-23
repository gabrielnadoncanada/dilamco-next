"use client";

import { Accordion } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import type { MenuItem, NavAction } from "../navbar.types";
import { MOBILE_BUTTONS, NAVIGATION } from "../navbar.constants";
import { ActionButtons } from "./action-buttons";
import { MobileMenuItem } from "./mobile-menu-item";
import { ThemeToggle } from "@/components/ThemeToggle";

interface MobileNavigationMenuProps {
  open: boolean;
  navigation?: MenuItem[];
  mobileActions?: NavAction[];
}

export function MobileNavigationMenu({
  open,
  navigation,
  mobileActions
}: MobileNavigationMenuProps) {
  const navItems = navigation || NAVIGATION;
  const actions = mobileActions || MOBILE_BUTTONS;

  return (
    <Sheet open={open}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className=" inset-0 z-998 h-dvh w-full  pt-[3.9375rem] [&>button]:hidden"
      >
        <div className="h-full overflow-y-auto    flex flex-col justify-between">
          <div className="flex flex-col gap-6">
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
          <ActionButtons actions={actions} className="w-full   [&>a]:w-full" size="sm" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
