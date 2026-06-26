import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AppLink as Link } from "@/components/AppLink";
import { CartButton } from "@/components/shop/cart-button";
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
  mobileActions,
}: NavbarProps) {
  const actions = desktopActions || DESKTOP_BUTTONS;

  return (
    <>
      <section
        className={cn(
          "pointer-events-auto flex  w-full items-center justify-center bg-transparent",
          className,
        )}
      >
        <div className="relative flex items-center justify-between gap-8 w-full mx-auto max-w-[1440px] px-[clamp(20px,4vw,56px)] max-[700px]:px-[18px] py-3.5 md:py-[22px]">
          <div className="flex items-center gap-8">
            <Logo logo={logo} />
          </div>
          <div className="absolute left-1/2 hidden -translate-x-1/2 xl:flex">
            <DesktopNavigation />
          </div>
          <div className="hidden items-center gap-3 xl:flex">
            {actions.map((action, index) => (
              <Button
                key={`navbar-btn-${index}`}
                size="small"
                variant={getActionButtonVariant(action)}
                className={
                  action.isPrimary
                    ? "text-primary-foreground"
                    : "text-foreground"
                }
                asChild
                {...action.buttonProps}
              >
                <Link href={action.url} {...action.linkProps}>
                  {action.label}
                </Link>
              </Button>
            ))}
            {/* Panier (boutique uniquement — null sur la vitrine). */}
            <CartButton />
          </div>
          <div className="flex items-center gap-1 xl:hidden">
            <CartButton />
            <MobileNavbarClient mobileActions={mobileActions} />
          </div>
        </div>
      </section>
    </>
  );
}
