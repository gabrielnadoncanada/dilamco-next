import type { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface LogoConfig {
  url: string;
  src: string;
  alt: string;
  title: string;
}

export interface MenuLink {
  label: string;
  description?: string;
  url: string;
  icon: LucideIcon;
}

export interface MenuGroup {
  title: string;
  links: MenuLink[];
}

export interface MenuItem {
  title: string;
  url?: string;
  groups?: MenuGroup[];
}

export type NavItem = MenuItem;

export interface NavAction {
  label: string;
  isPrimary: boolean;
  url: string;
  /** Passed to the Button (e.g. size, variant, className) */
  buttonProps?: Omit<
    React.ComponentPropsWithoutRef<typeof Button>,
    "asChild" | "children"
  >;
  /** Passed to the underlying <a> (e.g. target, rel, aria-*, data-*) */
  linkProps?: Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "children"
  >;
}

export interface NavbarProps {
  className?: string;
  logo?: LogoConfig;
  navigation?: MenuItem[];
  desktopActions?: NavAction[];
  mobileActions?: NavAction[];
}

export interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
}

export interface MobileNavigationMenuProps {
  open: boolean;
}

export interface NavLinkItemProps {
  link: MenuLink;
  variant: "desktop" | "mobile";
}
