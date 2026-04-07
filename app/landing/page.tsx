import {
  LandingCtaBand,
  LandingHeader,
  LandingDifferentiators,
  LandingFaq,
  LandingFooter,
  LandingFormSection,
  LandingGallery,
  LandingHero,
  LandingPainSolution,
  LandingProcess,
  LandingQualification,
  LandingTestimonials,
  LandingTrustBar,
  LandingWhatYouAvoid,
  LandingWhatYouGain,
  LandingWhyContreplaque,
  LandingLeadForm,
} from "./_components";

export default function DilamcoLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <LandingHeader />

      <LandingHero />
      <LandingTrustBar />
      <LandingWhatYouAvoid />
      <LandingQualification />
      {/* <LandingPainSolution /> */}
      {/* <LandingDifferentiators /> */}

      {/* <LandingCtaBand
        title="Discutons de votre projet"
        description="Rénovation, construction ou agrandissement : obtenez une estimation claire et rapide pour planifier votre projet en toute confiance."
      /> */}

      <LandingGallery />

      {/* <LandingCtaBand
        title="Besoin d’une estimation claire et rapide ?"
        description="Recevez une première estimation en moins de 24 heures. Sans engagement."
      /> */}

      {/* <LandingWhyContreplaque />
      <LandingWhatYouGain /> */}

      <LandingProcess />

      <LandingCtaBand
        title="Obtenez une estimation claire"
        description="Que ce soit pour rénover, construire ou agrandir, nous vous répondons rapidement avec une estimation adaptée à vos besoins."
      />

      <LandingTestimonials />

      <LandingFaq />
      <LandingFormSection />
      <LandingFooter />
    </main>
  );
}
