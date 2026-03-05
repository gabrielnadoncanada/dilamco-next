import { cn } from "@/lib/utils";
import { BRAND, FOOTER_NAV, LEGAL_LINKS, COPYRIGHT_TEXT } from "@/constants/navigation";
import { Logo, LogoImage } from "./footer/Logo";
import { SmartLink } from "./footer/SmartLink";
import { Section } from "./elements/section";
import { Container } from "./elements/container";
import { Divider } from "./elements/divider";
import type { Brand, FooterNavSection, LegalLink } from "@/types/navigation";

interface FooterProps {
  className?: string;
  logo?: Omit<Brand, "tagline">;
  tagline?: string;
  menuItems?: FooterNavSection[];
  copyright?: string;
  bottomLinks?: LegalLink[];
}

export const Footer = ({
  className,
  logo = BRAND,
  tagline = BRAND.tagline,
  menuItems = FOOTER_NAV,
  copyright = COPYRIGHT_TEXT,
  bottomLinks = LEGAL_LINKS,
}: FooterProps) => {
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
