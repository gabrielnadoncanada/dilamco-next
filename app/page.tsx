import type { Metadata } from "next";
import { ActionButtons } from "@/components/ActionButtons";
import { ArrowRight, Ruler, Shield, Wrench } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { SliderSection, type SliderItem } from "@/components/sections/SliderSection";
import { CTASection } from "@/components/sections/CTASection";
const siteUrl = "https://dilamco.com";

export const metadata: Metadata = {
  title:
    "Cuisines, vanités et armoires sur mesure clé en main à Montréal | Dilamco",
  description:
    "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme. Design, fabrication, installation et rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: { canonical: `${siteUrl}/` },

  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    title:
      "Dilamco | Cuisines, vanités et armoires sur mesure clé en main à Montréal",
    description:
      "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme. Design, fabrication, installation et rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dilamco, sur mesure, durable, bien exécuté",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dilamco | Cuisines, vanités et armoires sur mesure clé en main à Montréal",
    description:
      "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme. Design, fabrication, installation et rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <main id="contenu">
      <HeroSection
        heading="Dilamco, sur mesure haut de gamme, clé en main"
        description="Cuisines, vanités et rangement sur mesure. Design, fabrication, installation et rénovation complète au besoin — principalement à Montréal, Laval et sur la Rive-Sud."
        image={{
          src: "/images/hero-image.webp",
          alt: "Dilamco, sur mesure haut de gamme, clé en main",
        }}
        actionsSlot={
          <ActionButtons className="justify-start" buttons={[
            {
              text: "Obtenir une soumission gratuite",
              href: "/contact",
            },
            {
              text: "Voir nos réalisations",
              href: "/projets",
              variant: "outline",
              icon: ArrowRight,
            },
          ]} />
        }
      />

      <FeatureGridSection
        aria-labelledby="hero"
        heading="Cuisines, salles de bain et espaces sur mesure, sans casse-tête"
        description="Vous voulez un résultat cohérent, durable et bien exécuté. On vous accompagne du plan à la finition : design, fabrication sur mesure, installation précise, et coordination des travaux connexes lorsque le projet le requiert."
        features={[
          {
            title: "Sur mesure réel",
            description: "Adapté à votre espace (coins, accès, circulation, rangement).",
            icon: Ruler,
          },
          {
            title: "Qualité et durabilité",
            description: "Matériaux et détails de fabrication pensés pour durer.",
            icon: Shield,
          },
          {
            title: "Approche clé en main",
            description: "Un seul responsable pour réduire les imprévus.",
            icon: Wrench,
          },
        ]}
        columns={3}
      />

      <SliderSection
        aria-labelledby="espaces"
        heading="Choisissez votre espace"
        description="Découvrez nos solutions sur mesure pour chaque espace de votre maison ou entreprise."
        items={[
          {
            id: "cuisine",
            title: "Cuisine sur mesure",
            description: "Transformez votre cuisine en un espace unique, pensé pour vous et sans compromis sur la qualité ni explosion du budget.",
            href: "/espaces/cuisine/",
            image: {
              src: "/images/spaces/cabinet-cuisines.webp",
              alt: "Custom kitchen cabinets and design",
            },
          },
          {
            id: "salle-de-bain",
            title: "Salle de bain & vanités sur mesure",
            description: "Offrez-vous une salle de bain élégante, fonctionnelle et durable, conçue selon vos goûts et vos besoins.",
            href: "/espaces/salle-de-bain/",
            image: {
              src: "/images/spaces/vanite-salles-de-bain.webp",
              alt: "Custom bathroom vanity and design",
            },
          },
          {
            id: "walk-in",
            title: "Walk-in & rangement",
            href: "/espaces/walk-in/",
            description: "Maximisez chaque espace avec une garde-robe ou un walk-in conçu pour vous, élégant, fonctionnel et durable.",
            image: {
              src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
              alt: "Custom walk-in closet and storage",
            },
          },
          {
            id: "salle-de-lavage",
            title: "Salle de lavage",
            href: "/espaces/salle-de-lavage/",
            description: "Optimisez vos tâches quotidiennes avec une salle de lavage sur-mesure, pensée pour être pratique, durable et élégante.",
            image: {
              src: "/images/spaces/vanite-salles-de-lavage.webp",
              alt: "Custom laundry room cabinets",
            },
          },
          {
            id: "commercial",
            title: "Commercial",
            href: "/espaces/commercial/",
            description: "Transformez vos espaces commerciaux en des lieux de vente attrayants et fonctionnels, conçus pour maximiser votre rentabilité.",
            image: {
              src: "/images/spaces/commercial.webp",
              alt: "Commercial custom spaces",
            },
          },
        ]}
      />

      <ProofSection
        aria-labelledby="differenciation"
        heading="Ce qui distingue Dilamco"
        description="Le haut de gamme, ce n'est pas un mot : c'est une somme de décisions (matériaux, assemblage, quincaillerie, installation) et une exécution contrôlée."
        items={[
          {
            title: "Design orienté usage",
            description: "Rangement logique, ergonomie, accès aux coins, circulation fluide.",
          },
          {
            title: "Fabrication robuste",
            description: "Choix de matériaux adaptés à la cuisine et à l'humidité en salle de bain.",
          },
          {
            title: "Installation soignée",
            description: "Alignements, ajustements, finition — le détail qui change tout.",
          },
        ]}
      />

      <StepsSection
        aria-labelledby="processus"
        heading="Une approche simple, une exécution cadrée"
        description="Une approche simple, une exécution cadrée"
        steps={[
          {
            id: "1",
            title: "Analyse & design",
            description: "Besoins, contraintes, plan et choix de matériaux.",
          },
          {
            id: "2",
            title: "Fabrication sur mesure",
            description: "Production selon votre configuration.",
          },
          {
            id: "3",
            title: "Coordination (si applicable)",
            description: "Travaux connexes pour une rénovation complète.",
          },
          {
            id: "4",
            title: "Installation & ajustements",
            description: "Finition, alignements, inspection finale.",
          },
        ]}
      />

      <RelatedLinksSection
        aria-labelledby="preuves"
        heading="Projets récents"
        links={[
          { label: "Voir les projets de cuisines", href: "/projets/cuisine/" },
          {
            label: "Voir les projets de salles de bain",
            href: "/projets/salle-de-bain/",
          },
          { label: "Voir tous les projets", href: "/projets/" },
        ]}
        columns={3}
      />

      <CTASection
        aria-labelledby="cta"
        heading="Parlez-nous de votre projet"
        description="Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable."
        actions={[
          {
            text: "Demander une soumission",
            href: "/contact/",
          },
        ]}
      />
    </main>
  );
}
