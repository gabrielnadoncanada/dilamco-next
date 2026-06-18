import { getLocale } from "next-intl/server";
import { cn } from "@/lib/utils";
import { BRAND, FOOTER_NAV, LEGAL_LINKS, COPYRIGHT_TEXT } from "@/constants/navigation";
import {
  BRAND_EN,
  FOOTER_NAV_EN,
  LEGAL_LINKS_EN,
  COPYRIGHT_TEXT_EN,
} from "@/constants/navigation.en";
import { Logo, LogoImage } from "./footer/Logo";
import { SmartLink } from "./footer/SmartLink";
import { Section } from "./elements/section";
import { Container } from "./elements/container";
import { Divider } from "./elements/divider";
import type { Brand, FooterNavSection, LegalLink } from "@/types/navigation";
import { SITE } from "@/seo/schema/site";

// Téléphone affichable (sans indicatif pays) dérivé de SITE.telephone.
const PHONE_DISPLAY = SITE.telephone.replace(/^\+1-?/, "");

interface FooterProps {
  className?: string;
  logo?: Omit<Brand, "tagline">;
  tagline?: string;
  menuItems?: FooterNavSection[];
  copyright?: string;
  bottomLinks?: LegalLink[];
}

export const Footer = async ({
  className,
  logo,
  tagline,
  menuItems,
  copyright,
  bottomLinks,
}: FooterProps) => {
  const isEn = (await getLocale()) === "en";
  logo = logo ?? (isEn ? BRAND_EN : BRAND);
  tagline = tagline ?? (isEn ? BRAND_EN.tagline : BRAND.tagline);
  menuItems = menuItems ?? (isEn ? FOOTER_NAV_EN : FOOTER_NAV);
  copyright = copyright ?? (isEn ? COPYRIGHT_TEXT_EN : COPYRIGHT_TEXT);
  bottomLinks = bottomLinks ?? (isEn ? LEGAL_LINKS_EN : LEGAL_LINKS);
  return (

    <footer className="border-y">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-10 ">
        <div className="relative z-10 grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2 mb-8 lg:mb-0">
            <div className="flex items-center gap-2 lg:justify-start">
              <Logo url={logo.url}>
                <LogoImage
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                />
              </Logo>
            </div>
            <p className="mt-4 text-sm leading-relaxed font-normal text-muted-foreground">{tagline}</p>
            <address className="mt-4 not-italic text-sm leading-6 text-muted-foreground">
              <a
                href={`tel:${SITE.telephone.replace(/[^+\d]/g, "")}`}
                className="font-medium transition-colors hover:text-primary"
              >
                {PHONE_DISPLAY}
              </a>
              <br />
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-primary"
              >
                {SITE.email}
              </a>
              <br />
              {SITE.address.streetAddress}, {SITE.address.addressLocality} ({SITE.address.addressRegion})
            </address>
          </div>
          {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-4 text-sm leading-6 font-semibold tracking-[0.08em] text-foreground/90 uppercase">{section.title}</h3>
              <ul className="space-y-4 text-sm leading-6 text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="font-medium transition-colors hover:text-primary focus-within:text-primary"
                  >
                    <SmartLink
                      href={link.url}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      {link.text}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative z-10 mt-24 flex flex-col justify-between gap-4 border-t border-border/70 pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
          <p>{copyright}</p>
          <ul className="flex flex-wrap gap-4">
            {bottomLinks.map((link, linkIdx) => (
              <li key={linkIdx}>
                <SmartLink
                  href={link.url}
                  className="underline transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.text}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
