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
import GoogleReviews from "./GoogleReviews";

// Téléphone affichable (sans indicatif pays) dérivé de SITE.telephone.
const PHONE_DISPLAY = SITE.telephone.replace(/^\+1-?/, "");

interface FooterProps {
  className?: string;
  logo?: Omit<Brand, "tagline">;
  tagline?: string;
  menuItems?: FooterNavSection[];
  copyright?: string;
  bottomLinks?: LegalLink[];
  /** Affiche la section avis Google au-dessus du footer. Off sur la boutique. */
  showReviews?: boolean;
}

export const Footer = async ({
  className,
  logo,
  tagline,
  menuItems,
  copyright,
  bottomLinks,
  showReviews = true,
}: FooterProps) => {
  const isEn = (await getLocale()) === "en";
  logo = logo ?? (isEn ? BRAND_EN : BRAND);
  tagline = tagline ?? (isEn ? BRAND_EN.tagline : BRAND.tagline);
  menuItems = menuItems ?? (isEn ? FOOTER_NAV_EN : FOOTER_NAV);
  copyright = copyright ?? (isEn ? COPYRIGHT_TEXT_EN : COPYRIGHT_TEXT);
  bottomLinks = bottomLinks ?? (isEn ? LEGAL_LINKS_EN : LEGAL_LINKS);
  return (
    <>
    {showReviews && <GoogleReviews />}
    {/* Footer UNIFIÉ (vitrine + boutique) : fond vert de marque, logo blanc. */}
    <footer className="bg-foreground text-background">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-14">
        <div className="relative z-10 grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2 mb-8 lg:mb-0">
            <div className="flex items-center gap-2 lg:justify-start">
              <Logo url={logo.url}>
                <LogoImage
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="[filter:brightness(0)_invert(1)]"
                />
              </Logo>
            </div>
            <p className="mt-4 max-w-xs text-sm font-normal leading-relaxed text-background/65">{tagline}</p>
            <address className="mt-4 not-italic text-sm leading-6 text-background/65">
              <a
                href={`tel:${SITE.telephone.replace(/[^+\d]/g, "")}`}
                className="font-medium transition-colors hover:text-background"
              >
                {PHONE_DISPLAY}
              </a>
              <br />
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-background"
              >
                {SITE.email}
              </a>
              <br />
              {SITE.address.streetAddress}, {SITE.address.addressLocality} ({SITE.address.addressRegion})
            </address>
          </div>
          {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-4 text-sm font-semibold uppercase leading-6 tracking-[0.08em] text-background">{section.title}</h3>
              <ul className="space-y-3.5 text-sm leading-6 text-background/75">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="font-medium transition-colors hover:text-background focus-within:text-background"
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
        <div className="relative z-10 mt-16 flex flex-col justify-between gap-4 border-t border-background/15 pt-8 text-sm font-medium text-background/55 md:flex-row md:items-center">
          <p>{copyright}</p>
          <ul className="flex flex-wrap gap-4">
            {bottomLinks.map((link, linkIdx) => (
              <li key={linkIdx}>
                <SmartLink
                  href={link.url}
                  className="underline transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.text}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
};
