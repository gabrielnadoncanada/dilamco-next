import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { SliderSection, type SliderItem } from "@/components/sections/SliderSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Espaces sur mesure",
  description:
    "Découvrez nos espaces sur mesure : cuisine, salle de bain, walk-in, salle de lavage et commercial. Design, fabrication, installation et option rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/espaces/",
    title: "Espaces sur mesure | Dilamco",
    description:
      "Découvrez nos espaces sur mesure : cuisine, salle de bain, walk-in, salle de lavage et commercial. Design, fabrication, installation et option rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Espaces sur mesure Dilamco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espaces sur mesure | Dilamco",
    description:
      "Découvrez nos espaces sur mesure : cuisine, salle de bain, walk-in, salle de lavage et commercial.",
    images: ["/opengraph-image"],
  },
};

export default function Espaces() {
  return (
    <main id="contenu">
      <HeroSection
        heading="Espaces sur mesure, cuisines, salles de bain et rangement"
        image={{
          src: "/images/spaces/spaces.png",
          alt: "Espaces sur mesure, cuisines, salles de bain et rangement",
        }}
        description="Chaque espace a ses contraintes (humidité, circulation, accès, charges). Notre rôle : créer des solutions sur mesure durables, fonctionnelles et bien exécutées, avec option clé en main selon le projet."
      />

      <SliderSection
        aria-labelledby="liste-espaces"
        heading="Choisissez votre espace"
        description="Sélectionnez l'espace qui correspond à votre projet pour voir les options, les services associés et des exemples de réalisations."
        items={[
          {
            id: "cuisine",
            title: "Cuisine sur mesure",
            description: "Rangement optimisé, ergonomie, coins accessibles et matériaux durables. Possibilité de rénovation de cuisine clé en main.",
            href: "/espaces/cuisine/",
            image: {
              src: "/images/spaces/cabinet-cuisines.webp",
              alt: "Custom kitchen cabinets and design",
            },
          },
          {
            id: "salle-de-bain",
            title: "Salle de bain & vanités sur mesure",
            description: "Conçu pour l'humidité : durabilité, quincaillerie fiable et finition soignée. Option rénovation salle de bain.",
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
            description: "Organisation, modules adaptés et optimisation de l'espace pour un rangement simple et efficace au quotidien.",
            image: {
              src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
              alt: "Custom walk-in closet and storage",
            },
          },
          {
            id: "salle-de-lavage",
            title: "Salle de lavage",
            href: "/espaces/salle-de-lavage/",
            description: "Armoires robustes, rangement pratique et configuration sur mesure pour buanderie.",
            image: {
              src: "/images/spaces/vanite-salles-de-lavage.webp",
              alt: "Custom laundry room cabinets",
            },
          },
          {
            id: "commercial",
            title: "Commercial",
            href: "/espaces/commercial/",
            description: "Mobilier et rangement sur mesure pour espaces commerciaux : solutions robustes, cohérentes et adaptées à l'usage.",
            image: {
              src: "/images/spaces/commercial.webp",
              alt: "Commercial custom spaces",
            },
          },
        ]}
      />

      <ProofSection
        aria-labelledby="differenciation"
        heading="Pourquoi nos espaces sont pensés pour durer"
        items={[
          {
            title: "Sur mesure réel",
            description: "Adapté à votre espace (pas à un catalogue standard).",
          },
          {
            title: "Matériaux orientés usage",
            description: "Choix adaptés à la cuisine et à l'humidité en salle de bain.",
          },
          {
            title: "Installation précise",
            description: "Alignements, ajustements et finition — le détail qui change tout.",
          },
          {
            title: "Approche clé en main",
            description: "Coordination possible lorsque le projet inclut de la rénovation.",
          },
        ]}
      />

      <RelatedLinksSection
        aria-labelledby="differenciation-links"
        heading=""
        links={[
          { label: "Voir nos matériaux", href: "/materiaux/" },
          { label: "Voir nos services", href: "/services/" },
        ]}
        columns={2}
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
