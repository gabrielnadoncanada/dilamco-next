import { getLocale, getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { MAIN_NAV, BRAND } from "@/constants/navigation";
import { MAIN_NAV_EN, BRAND_EN } from "@/constants/navigation.en";

export default async function Header() {
  const locale = await getLocale();
  const t = await getTranslations("common");
  const isEn = locale === "en";
  const quote = t("requestQuote");

  return (
    <>
      <a href="#contenu" className="sr-only">
        {t("skipToContent")}
      </a>
      <header className="sticky top-0 z-999  bg-background/95 backdrop-blur-sm">
        <Navbar
          logo={isEn ? BRAND_EN : BRAND}
          navigation={isEn ? MAIN_NAV_EN : MAIN_NAV}
          desktopActions={[{ label: quote, url: "/contact/", isPrimary: true }]}
          mobileActions={[
            {
              label: quote,
              url: "/contact/",
              isPrimary: true,
              buttonProps: { className: "w-full h-15", size: "lg" },
            },
          ]}
        />
      </header>
    </>
  );
}

