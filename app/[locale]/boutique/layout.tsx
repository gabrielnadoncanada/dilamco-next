import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CartProvider } from "@/components/shop/cart-provider";
import { Topbar } from "@/components/shop/topbar";
import { Footer } from "@/components/shop/footer";
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
    <NuqsAdapter>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <Topbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <HelpButton />
        </div>
      </CartProvider>
    </NuqsAdapter>
  );
}
