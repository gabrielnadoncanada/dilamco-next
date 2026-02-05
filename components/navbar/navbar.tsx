"use client";

import { Fragment } from "react";
import { MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DEFAULT_MOBILE_BREAKPOINT, DESKTOP_BUTTONS } from "./navbar.constants";
import { useMobileNav } from "./use-mobile-nav";
import { Logo } from "./components/logo";
import { DesktopNavigation } from "./components/desktop-navigation";
import { ActionButtons } from "./components/action-buttons";
import { MobileNavigationMenu } from "./components/mobile-navigation-menu";
import type { NavbarProps } from "./navbar.types";
import { Container } from "../elements/container";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar({
  className,
  logo,
  navigation,
  desktopActions,
  mobileActions
}: NavbarProps) {
  const { open, toggle } = useMobileNav(DEFAULT_MOBILE_BREAKPOINT);
  const actions = desktopActions || DESKTOP_BUTTONS;

  return (
    <Fragment>
      <section
        className={cn(
          "pointer-events-auto  flex h-16 w-full items-center justify-center bg-background",
          className,
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <Logo logo={logo} />
              <DesktopNavigation navigation={navigation} />
            </div>
            <div className="hidden items-center gap-3 xl:flex">
              <ThemeToggle />
              <ActionButtons actions={actions} size="sm" />
            </div>
            <div className="xl:hidden">
              <Button
                className="size-11"
                variant="ghost"
                onClick={toggle}
              >
                {open ? (
                  <X className="size-5.5 stroke-foreground" />
                ) : (
                  <MenuIcon className="size-5.5 stroke-foreground" />
                )}
              </Button>
            </div>
          </div>
        </Container>

      </section>
      <MobileNavigationMenu
        open={open}
        navigation={navigation}
        mobileActions={mobileActions}
      />
    </Fragment >
  );
}
