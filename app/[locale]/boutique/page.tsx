import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/shop/routes";
import { Hero } from "./_components/hero";
import { Pillars } from "./_components/pillars";
import { Categories } from "./_components/categories";
import { Process } from "./_components/process";
// import { StarterKitchens } from "./_components/starter-kitchens"; // section masquée
import { Testimonial } from "./_components/testimonial";
import { Trust } from "./_components/trust";

/**
 * Le hub boutique (/boutique + /en/shop) doit émettre canonical auto-référent +
 * hreflang FR/EN — le layout ne pose que title/description. On ne récupère que
 * alternates + OG de createPageMetadata pour ne pas écraser le title du layout.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "fr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shop.meta" });
  const meta = createPageMetadata(
    {
      title: t("layoutTitle"),
      description: t("layoutDescription"),
      path: routes.home,
    },
    locale,
  );
  return {
    alternates: meta.alternates,
    openGraph: meta.openGraph,
    twitter: meta.twitter,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: "fr" | "en" }>;
}) {
  // Établit le locale request-scoped AVANT le rendu : les sections enfants
  // appellent getTranslations("shop.home") sans locale → sans ça, next-intl
  // bascule le hub en rendu dynamique. Avec, le hub redevient statique (SSG).
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Pillars />
      <Categories />
      {/* Section « cuisines types » masquée (prix à 0 / non finalisée).
          Réactiver en décommentant ici + l'import ci-dessus. */}
      {/* <StarterKitchens /> */}
      <Process />
      <Testimonial />
      <Trust />
    </>
  );
}
