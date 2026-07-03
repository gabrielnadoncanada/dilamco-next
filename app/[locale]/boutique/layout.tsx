import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CartProvider } from "@/components/shop/cart-provider";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/shop/cart-drawer";
import { HelpButton } from "@/components/shop/help-button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shop.meta" });
  return {
    title: {
      default: t("layoutTitle"),
      template: t("layoutTitleTemplate"),
    },
    description: t("layoutDescription"),
  };
}

export default async function BoutiqueLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Active le rendu statique des composants serveur de la boutique
  // (sous-arbre) avec next-intl.
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer showReviews={false} />
        <CartDrawer />
        <HelpButton />
      </div>
    </CartProvider>
  );
}
