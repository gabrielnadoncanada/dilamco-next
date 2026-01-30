"use client";
import { Navbar } from "@/components/navbar";
import { MAIN_NAV, BRAND } from "@/lib/navigation";

export default function Header() {
  return (
    <>
      <a href="#contenu" className="sr-only">Aller au contenu principal</a>
      <header className="sticky top-0 z-50 bg-olive-100 dark:bg-olive-950">
        <Navbar
          logo={BRAND}
          navigation={MAIN_NAV}
          desktopActions={[{ label: "Demander une soumission", url: "/contact/", isPrimary: true }]}
          mobileActions={[{ label: "Demander une soumission", url: "/contact/", isPrimary: true }]}
        />
      </header>
    </>
  );
}

