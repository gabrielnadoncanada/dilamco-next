import { getLocale, getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { MAIN_NAV, BRAND } from "@/constants/navigation";
import { MAIN_NAV_EN, BRAND_EN } from "@/constants/navigation.en";

export default async function Header() {
  const locale = await getLocale();
  const t = await getTranslations("common");
  const isEn = locale === "en";
  const quote = isEn ? "Free estimate" : "Soumission gratuite";

  return (
    <>
      <a href="#contenu" className="sr-only">
        {t("skipToContent")}
      </a>
      {/* En-tête unique (refonte 2026-09) : plus de bandeau d'annonce. Le
          téléphone et le sélecteur de langue vivent dans la barre. */}
      <header className="sticky top-0 z-999 border-b border-border/70 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
        <Navbar
          logo={isEn ? BRAND_EN : BRAND}
          navigation={isEn ? MAIN_NAV_EN : MAIN_NAV}
          desktopActions={[{ label: quote, url: "/contact/", isPrimary: true }]}
          mobileActions={[
            {
              label: quote,
              url: "/contact/",
              isPrimary: true,
              buttonProps: { className: "w-full", size: "default" },
            },
          ]}
        />
      </header>
    </>
  );
}
