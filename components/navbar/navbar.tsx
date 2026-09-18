import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, ButtonArrow } from "@/components/ui/button";
import { AppLink as Link } from "@/components/AppLink";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { SITE } from "@/seo/schema/site";
import { DESKTOP_BUTTONS } from "./navbar.constants";
import { Logo } from "./components/logo";
import { DesktopNavigation } from "./components/desktop-navigation";
import { MobileNavbarClient } from "./components/mobile-navbar-client";
import type { NavbarProps } from "./navbar.types";
import { getActionButtonVariant } from "./utils";

const PHONE_HREF = `tel:${SITE.telephone.replace(/[^+\d]/g, "")}`;
const PHONE_DISPLAY = SITE.telephone.replace(/^\+1-?/, "");

/**
 * Barre de navigation. Trois zones en flex (logo · menu · actions) : jamais de
 * chevauchement. Le menu desktop apparaît dès `lg` (1024 px) : un portable
 * n'est pas un téléphone. Le numéro s'affiche en clair à partir de `xl`.
 */
export function Navbar({
  className,
  logo,
  desktopActions,
  mobileActions,
}: NavbarProps) {
  const actions = desktopActions || DESKTOP_BUTTONS;

  return (
    <nav
      aria-label="Navigation principale"
      className={cn("pointer-events-auto w-full", className)}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center gap-3 px-[clamp(20px,1rem,56px)] max-[700px]:px-[18px] md:h-[76px] lg:gap-4">
        <div className="flex shrink-0 items-center">
          <Logo logo={logo} />
        </div>

        <div className="hidden min-w-0 flex-1 justify-center lg:flex">
          <DesktopNavigation />
        </div>

        <div className="ml-auto hidden shrink-0 items-center gap-1.5 lg:flex xl:gap-2">
          <a
            href={PHONE_HREF}
            className="hidden h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold text-foreground/80 transition-ui focus-ring hover:bg-primary-soft hover:text-primary xl:inline-flex"
          >
            <Phone className="size-4" strokeWidth={2.25} />
            <span className="tabular-nums">{PHONE_DISPLAY}</span>
          </a>
          <LocaleSwitcher className="mr-1" />
          {actions.map((action, index) => (
            <Button
              key={`navbar-btn-${index}`}
              size="small"
              variant={getActionButtonVariant(action)}
              asChild
              {...action.buttonProps}
            >
              <Link href={action.url} {...action.linkProps}>
                {action.label}
                {action.isPrimary ? <ButtonArrow /> : null}
              </Link>
            </Button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-1 lg:hidden">
          <a
            href={PHONE_HREF}
            aria-label={PHONE_DISPLAY}
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-ui focus-ring hover:bg-primary-soft hover:text-primary"
          >
            <Phone className="size-5" strokeWidth={2.25} />
          </a>
          <MobileNavbarClient mobileActions={mobileActions} />
        </div>
      </div>
    </nav>
  );
}
