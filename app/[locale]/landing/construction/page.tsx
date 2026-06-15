import type { Metadata } from "next";

import {
  ConstructionHeader,
  ConstructionHero,
  ConstructionTrustBar,
  ConstructionAnchorNav,
  ConstructionPainSolution,
  ConstructionServices,
  ConstructionWhy,
  ConstructionProcess,
  ConstructionGallery,
  ConstructionCtaBand,
  ConstructionGuarantees,
  ConstructionFaq,
  ConstructionFormSection,
  ConstructionFooter,
  ConstructionStickyCta,
} from "./_components";

export const metadata: Metadata = {
  title: "Rénovation et construction clé en main au Grand Montréal | Dilamco",
  description:
    "Entrepreneur résidentiel RBQ. Rénovation cuisine, salle de bain, rallonges et plus — délais et budget respectés. Estimation gratuite sous 24 h.",
  robots: { index: false, follow: false },
  alternates: { canonical: undefined },
};

export default function ConstructionLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ConstructionHeader />

      <ConstructionHero />
      <ConstructionTrustBar />
      <ConstructionAnchorNav />

      <ConstructionPainSolution />
      <ConstructionServices />
      <ConstructionWhy />
      <ConstructionProcess />

      <ConstructionGallery />

      <ConstructionCtaBand />

      <ConstructionGuarantees />
      <ConstructionFaq />

      <ConstructionFormSection />
      <ConstructionFooter />

      <ConstructionStickyCta />
    </main>
  );
}
