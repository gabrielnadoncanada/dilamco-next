import type { Metadata } from "next";

import { LandingFooter } from "../_components/LandingFooter";
import {
  PantryAssembly,
  PantryComparison,
  PantryConcept,
  PantryDimensions,
  PantryFaq,
  PantryFinalCta,
  PantryGallery,
  PantryHeader,
  PantryHero,
  PantryInterior,
  PantryLifestyle,
  PantrySpecStrip,
  PantryStickyCta,
} from "./_components";

// Le noindex est hérité du layout /landing (campagnes jamais indexées).
export const metadata: Metadata = {
  title: "ALTO — Garde-manger démontable 24 po à 895 $",
  description:
    "ALTO est un garde-manger élégant au fini noyer véritable à 895 $. Monté en quelques minutes, il trouve sa place partout.",
};

export default function AltoLandingPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <PantryHeader />

      <PantryHero />
      <PantrySpecStrip />

      <PantryConcept />
      <PantryLifestyle />

      <PantryAssembly />
      <PantryInterior />

      <PantryComparison />
      <PantryDimensions />
      <PantryGallery />

      <PantryFaq />
      <PantryFinalCta />

      <LandingFooter />
      <PantryStickyCta />
    </main>
  );
}
