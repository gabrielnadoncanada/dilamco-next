import { getLocale } from "next-intl/server";
import {
  BRAND,
  FOOTER_NAV,
  LEGAL_LINKS,
  COPYRIGHT_TEXT,
} from "@/constants/navigation";
import {
  BRAND_EN,
  FOOTER_NAV_EN,
  LEGAL_LINKS_EN,
  COPYRIGHT_TEXT_EN,
} from "@/constants/navigation.en";
import { Logo, LogoImage } from "./footer/Logo";
import { SmartLink } from "./footer/SmartLink";
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
  /** Affiche la section avis Google au-dessus du footer. */
  showReviews?: boolean;
}

export const Footer = async ({
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
      {/* Pied de page « encre » (refonte 2026-09) : fond charbon, logo blanc,
          wordmark fantôme en fond, licence RBQ obligatoire. */}
      <footer className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[clamp(20px,1rem,56px)] pb-10 pt-16 max-[700px]:px-[18px] md:pt-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Logo url={logo.url}>
                <LogoImage
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-6 w-auto [filter:brightness(0)_invert(1)]"
                />
              </Logo>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
                {tagline}
              </p>
              <address className="mt-6 grid gap-1 text-sm not-italic leading-6">
                <a
                  href={`tel:${SITE.telephone.replace(/[^+\d]/g, "")}`}
                  className="w-fit rounded-sm font-display text-[length:var(--title-4)] font-semibold tracking-[-0.02em] text-ink-foreground transition-ui focus-ring-inverse hover:opacity-80"
                >
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="w-fit rounded-sm text-ink-muted transition-ui focus-ring-inverse hover:text-ink-foreground"
                >
                  {SITE.email}
                </a>
                <span className="text-ink-muted">
                  {SITE.address.streetAddress}, {SITE.address.addressLocality} (
                  {SITE.address.addressRegion}) {SITE.address.postalCode}
                </span>
              </address>
              {/* Licence RBQ : mention obligatoire sur toute publicité d'un
                  entrepreneur (Loi sur le bâtiment). Lien vers le registre public. */}
              <p className="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/12 px-3.5 py-1.5 text-xs font-semibold text-ink-foreground/90">
                <span>{isEn ? "RBQ licence" : "Licence RBQ"}</span>
                <a
                  href={SITE.rbqRegistryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm tabular-nums underline decoration-white/30 underline-offset-4 transition-ui focus-ring-inverse hover:decoration-white"
                >
                  {SITE.rbqLicence}
                </a>
                <span className="text-ink-muted">
                  · {isEn ? "since 2004 · insured" : "depuis 2004 · assuré"}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 text-label text-ink-muted">
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <SmartLink
                          href={link.url}
                          className="rounded-sm font-medium text-ink-foreground/85 transition-ui focus-ring-inverse hover:text-ink-foreground"
                        >
                          {link.text}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-muted md:flex-row md:items-center">
            <p>{copyright}</p>
            {bottomLinks.length > 0 ? (
              <ul className="flex flex-wrap gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <SmartLink
                      href={link.url}
                      className="rounded-sm underline underline-offset-4 transition-ui focus-ring-inverse hover:text-ink-foreground"
                    >
                      {link.text}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div
          aria-hidden
          className="ghost-wordmark pointer-events-none absolute inset-x-0 -bottom-[0.12em] z-0 overflow-hidden text-center"
        >
          DILAMCO
        </div>
      </footer>
    </>
  );
};
