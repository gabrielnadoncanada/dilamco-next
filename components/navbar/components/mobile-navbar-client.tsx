"use client";

import { MenuIcon, X } from "lucide-react";
import { useLocale } from "next-intl";

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
      {/* Bouton-icône propre (pas de bordure ni padding qui écraserait l'icône). */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent text-foreground transition-colors hover:text-primary"
      >
        {open ? <X className="size-6" /> : <MenuIcon className="size-6" />}
      </button>
      <MobileNavigationMenu
        open={open}
        onOpenChange={setOpen}
        navigation={nav}
        mobileActions={mobileActions}
      />
    </>
  );
}
