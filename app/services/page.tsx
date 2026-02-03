import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { ListSection } from "@/components/sections/ListSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { TextSection } from "@/components/sections/TextSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services Dilamco : design, fabrication sur mesure, installation et rénovation clé en main. Projets haut de gamme à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/services/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/services/",
    title: "Services | Dilamco",
    description:
      "Services Dilamco : design, fabrication sur mesure, installation et rénovation clé en main. Projets haut de gamme à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Services Dilamco — Design, fabrication, installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Dilamco",
    description:
      "Services Dilamco : design, fabrication sur mesure, installation et rénovation clé en main.",
    images: ["/opengraph-image"],
  },
};

export default function Services() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading="Services, design, fabrication, installation et rénovation clé en main"
          description="Dilamco réalise des cuisines, vanités et espaces sur mesure haut de gamme. Selon le projet, nous pouvons prendre en charge l'ensemble : design, fabrication, installation et coordination des travaux connexes pour livrer un résultat cohérent — principalement à Montréal, Laval et sur la Rive-Sud."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Demander une soumission",
                href: "/contact/",
              },
              {
                text: "Voir nos réalisations",
                href: "/projets/",
                variant: "outline",
              },
            ]} />
          }
        />

        <FeatureGridSection
          aria-labelledby="piliers"
          heading="Nos services principaux"
          description="Choisissez le service qui correspond à l'étape où vous êtes rendu."
          features={[
            {
              title: "Design",
              description: "Analyse des besoins, optimisation de l'espace, plan et choix de matériaux. Idéal pour cadrer le projet avant de fabriquer.",
            },
            {
              title: "Fabrication",
              description: "Fabrication sur mesure orientée durabilité : matériaux adaptés à l'usage, détails robustes et finition soignée.",
            },
            {
              title: "Installation",
              description: "Alignements, ajustements, finition. Une installation précise est essentielle pour un rendu haut de gamme.",
            },
            {
              title: "Rénovation clé en main",
              description: "Coordination et exécution lorsque le projet implique plusieurs corps de métier. Objectif : réduire les imprévus et livrer un résultat cohérent.",
            },
          ]}
          columns={2}
        />

        <RelatedLinksSection
          aria-labelledby="renovation-types"
          heading="Rénovation par type"
          links={[
            { label: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
            {
              label: "Rénovation salle de bain",
              href: "/services/renovation/salle-de-bain/",
            },
            { label: "Rénovation de plancher", href: "/services/renovation/plancher/" },
            {
              label: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison/",
            },
          ]}
          columns={2}
        />

        <TextSection
          aria-labelledby="cle-en-main"
          heading="Quand choisir une approche clé en main?"
          paragraphs={[]}
          links={[
            {
              text: "Voir la rénovation clé en main",
              href: "/services/renovation/",
              variant: "outline",
            },
            {
              text: "Parler de votre projet",
              href: "/contact/",
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="cle-en-main-details"
          heading=""
          items={[
            "Rénovation de cuisine complète : plomberie, électricité, plancher, dosseret, installation et finition.",
            "Salle de bain : humidité, ventilation, étanchéité et détails d'exécution.",
            "Projet multi-intervenants : vous voulez un responsable unique et un calendrier mieux maîtrisé.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="qualite"
          heading="Qualité et durabilité"
          paragraphs={[
            "Le haut de gamme, c'est une somme de décisions : matériaux adaptés à l'usage, quincaillerie fiable, assemblage robuste et installation précise.",
          ]}
          links={[
            {
              text: "Pourquoi le contreplaqué",
              href: "/materiaux/contreplaque/",
              variant: "outline",
            },
            {
              text: "Quincaillerie",
              href: "/materiaux/quincaillerie/",
              variant: "outline",
            },
            {
              text: "Voir tous les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ]}
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
    </>
  );
}
