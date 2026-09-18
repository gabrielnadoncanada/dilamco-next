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
      {/* Trois zones en flex (logo · menu · actions) : jamais de chevauchement,
          quelle que soit la largeur. Le menu desktop apparaît à partir de xl. */}
      <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center gap-4 px-[clamp(20px,1rem,56px)] max-[700px]:px-[18px] md:h-[76px]">
        <div className="flex shrink-0 items-center">
          <Logo logo={logo} />
        </div>

        <div className="hidden min-w-0 flex-1 justify-center xl:flex">
          <DesktopNavigation />
        </div>

        <div className="ml-auto hidden shrink-0 items-center gap-2 xl:flex">
          <a
            href={PHONE_HREF}
            className="inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold text-foreground/80 transition-ui focus-ring hover:bg-primary-soft hover:text-primary"
          >
            <Phone className="size-4" strokeWidth={2.25} />
            <span className="hidden tabular-nums 2xl:inline">{PHONE_DISPLAY}</span>
            <span className="sr-only 2xl:hidden">{PHONE_DISPLAY}</span>
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

        <div className="ml-auto flex items-center gap-1 xl:hidden">
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
