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
        className="dark inset-0 z-998 h-dvh w-full bg-background pt-[3.9375rem] [&>button]:hidden"
      >
        <div className="h-full overflow-y-auto pt-10 pb-20">
          <div className="container">
            <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
              <SheetTitle className="text-primary">
                Mobile Navigation
              </SheetTitle>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <ActionButtons actions={actions} />
                  <ThemeToggle />
                </div>
              </div>
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
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
