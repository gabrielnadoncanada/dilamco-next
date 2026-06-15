"use client";

import { MenuIcon, X } from "lucide-react";

import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { MAIN_NAV } from "@/constants/navigation";
import { MAIN_NAV_EN } from "@/constants/navigation.en";

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
  const locale = useLocale();
  const nav = locale === "en" ? MAIN_NAV_EN : MAIN_NAV;

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
        navigation={nav}
        mobileActions={mobileActions}
      />
    </>
  );
}
