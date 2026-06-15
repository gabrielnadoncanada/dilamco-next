import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AppLink as Link } from "@/components/AppLink";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { DESKTOP_BUTTONS } from "./navbar.constants";
import { Logo } from "./components/logo";
import { DesktopNavigation } from "./components/desktop-navigation";
import { MobileNavbarClient } from "./components/mobile-navbar-client";
import type { NavbarProps } from "./navbar.types";
import { getActionButtonVariant } from "./utils";

export function Navbar({
  className,
  logo,
  desktopActions,
  mobileActions
}: NavbarProps) {
  const actions = desktopActions || DESKTOP_BUTTONS;

  return (
    <>
      <section
        className={cn(
          "pointer-events-auto flex h-16 w-full items-center justify-center bg-transparent w-full max-w-screen-xl mx-auto",
          className,
        )}
      >
        <div className="flex items-center justify-between gap-8 w-full px-4">
          <div className="flex items-center gap-8">
            <Logo logo={logo} />
            <DesktopNavigation />
          </div>
          <div className="hidden items-center gap-3 xl:flex">
            <LocaleSwitcher />
            {actions.map((action, index) => (
              <Button
                key={`navbar-btn-${index}`}
                size="sm"
                variant={getActionButtonVariant(action)}
                className={
                  action.isPrimary ? "text-primary-foreground" : "text-foreground"
                }
                asChild
                {...action.buttonProps}
              >
                <Link href={action.url} {...action.linkProps}>
                  {action.label}
                </Link>
              </Button>
            ))}
          </div>
          <div className="xl:hidden">
            <MobileNavbarClient mobileActions={mobileActions} />
          </div>
        </div>

      </section>
    </>
  );
}
