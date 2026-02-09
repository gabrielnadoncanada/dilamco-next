import type { LogoConfig } from "@/components/navbar/navbar.types";

export type FooterNavLink = {
  text: string;
  url: string;
};

export interface FooterNavSection {
  title: string;
  links: FooterNavLink[];
}

export type LegalLink = FooterNavLink;

export type Brand = LogoConfig & {
  tagline: string;
};
