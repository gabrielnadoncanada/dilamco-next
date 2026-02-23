"use client";
import { Navbar } from "@/components/navbar";
import { MAIN_NAV, BRAND } from "@/constants/navigation";

export default function Header() {
  return (
    <>
      <a href="#contenu" className="sr-only">Aller au contenu principal</a>
      <header className="sticky top-0 z-999  bg-background/95 backdrop-blur-sm">
        <Navbar
          logo={BRAND}
          navigation={MAIN_NAV}
          desktopActions={[{ label: "Demander une soumission", url: "/contact/", isPrimary: true }]}
          mobileActions={[{
            label: "Demander une soumission", url: "/contact/", isPrimary: true, buttonProps: {
              className: "w-full h-15",
              size: "lg"
            }
          }]}
        />
      </header>
    </>
  );
}

