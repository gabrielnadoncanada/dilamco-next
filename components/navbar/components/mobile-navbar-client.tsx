"use client";

import { MenuIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { MAIN_NAV } from "@/constants/navigation";

import { DEFAULT_MOBILE_BREAKPOINT } from "../navbar.constants";
import type { NavAction } from "../navbar.types";
import { useMobileNav } from "../use-mobile-nav";
import { MobileNavigationMenu } from "./mobile-navigation-menu";

interface MobileNavbarClientProps {
  mobileActions?: NavAction[];
}

export function MobileNavbarClient({
  mobileActions,
}: MobileNavbarClientProps) {
  const { open, toggle, setOpen } = useMobileNav(DEFAULT_MOBILE_BREAKPOINT);

  return (
    <>
      <div className="flex items-center gap-1">
        <LocaleSwitcher />
        <Button
          className="size-11"
          variant="ghost"
          onClick={toggle}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="size-5.5 stroke-foreground" />
          ) : (
            <MenuIcon className="size-5.5 stroke-foreground" />
          )}
        </Button>
      </div>
      <MobileNavigationMenu
        open={open}
        onOpenChange={setOpen}
        navigation={MAIN_NAV}
        mobileActions={mobileActions}
      />
    </>
  );
}
