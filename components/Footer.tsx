import { cn } from "@/lib/utils";
import { BRAND, FOOTER_NAV, LEGAL_LINKS, COPYRIGHT_TEXT } from "@/lib/navigation";
import { Logo, LogoImage, LogoText } from "./footer/Logo";
import { SmartLink } from "./footer/SmartLink";

interface FooterProps {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: typeof FOOTER_NAV;
  copyright?: string;
  bottomLinks?: typeof LEGAL_LINKS;
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
    <section className={cn("py-32", className)}>
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
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
              <p className="mt-4 font-normal">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
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
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
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
        </footer>
      </div>
    </section>
  );
};
