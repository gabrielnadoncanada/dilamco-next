import {
  LandingAnchorNav,
  LandingCtaBand,
  LandingHeader,
  LandingDifferentiators,
  LandingFaq,
  LandingFooter,
  LandingFormSection,
  LandingGallery,
  LandingHero,
  LandingMaterials,
  LandingProcess,
  LandingQualification,
  LandingStickyCta,
  LandingTestimonials,
  LandingTrustBar,
  LandingWhatYouAvoid,
} from "./_components";

export default function DilamcoLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <LandingHeader />

      <LandingHero />
      <LandingTrustBar />
      <LandingAnchorNav />

      <LandingDifferentiators />
      <LandingWhatYouAvoid />
      <LandingQualification />

      <LandingMaterials />

      <LandingGallery />

      <LandingProcess />

      <LandingCtaBand
        title="Obtenez une estimation claire"
        description="Que ce soit pour rénover, construire ou agrandir, nous vous répondons rapidement avec une estimation adaptée à vos besoins."
      />

      <LandingTestimonials />

      <LandingFaq />
      <LandingFormSection />
      <LandingFooter />

      <LandingStickyCta />
    </main>
  );
}
