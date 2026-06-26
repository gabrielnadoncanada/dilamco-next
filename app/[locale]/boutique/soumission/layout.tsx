import type { Metadata } from "next";
import type { ReactNode } from "react";

// La page soumission est un composant client (formulaire) → elle ne peut pas
// exporter generateMetadata. Ce layout serveur lui donne un titre propre (sinon
// elle hérite du titre générique « Boutique d'armoires sur mesure » du layout
// boutique). Le template boutique « %s | Boutique Dilamco » s'applique ensuite.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "en"
        ? "Request a cabinet quote"
        : "Demander une soumission d'armoires",
  };
}

export default function SoumissionLayout({ children }: { children: ReactNode }) {
  return children;
}
