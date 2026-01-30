import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { ListSection } from "@/components/sections/ListSection";
import { TextSection } from "@/components/sections/TextSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "Comparatifs",
  description:
    "Comparatifs pour aider à choisir : sur mesure vs IKEA, sur mesure vs Home Depot, cuisiniste vs entrepreneur général. Décisions orientées durabilité, exécution et coûts cachés.",
  alternates: {
    canonical: "https://dilamco.com/comparatifs/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/comparatifs/",
    title: "Comparatifs | Dilamco",
    description:
      "Comparatifs pour aider à choisir : sur mesure vs IKEA, sur mesure vs Home Depot, cuisiniste vs entrepreneur général. Décisions orientées durabilité, exécution et coûts cachés.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Comparatifs Dilamco — Sur mesure vs alternatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparatifs | Dilamco",
    description:
      "Comparatifs pour aider à choisir : sur mesure vs IKEA, sur mesure vs Home Depot.",
    images: ["/opengraph-image"],
  },
};

export default function Comparatifs() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Comparatifs", url: SITE.url + "/comparatifs/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading="Comparatifs — faire le bon choix avant d'investir"
          description={
            <>
              <p>
                Ces comparatifs sont conçus pour vous aider à décider, pas pour faire
                du marketing. Un projet réussi dépend autant du choix des matériaux
                que de l'exécution (installation, ajustements) et de la gestion des
                risques (coordination, coûts cachés). Nos projets sont réalisés
                principalement à Montréal, Laval et sur la Rive-Sud.
              </p>
            </>
          }
          actionsSlot={
            <ActionButtons
              className="justify-start"
              buttons={[
                {
                  text: "Parler de votre projet",
                  href: "/contact/",
                },
                {
                  text: "Voir nos réalisations",
                  href: "/projets/",
                  variant: "outline",
                },
              ]}
            />
          }
        />

        <FeatureGridSection
          aria-labelledby="liste"
          heading="Comparatifs disponibles"
          description="Choisissez le comparatif le plus proche de votre situation."
          features={[
            {
              title: "Cuisine sur mesure vs IKEA",
              description:
                "Utile si vous hésitez entre une solution standardisée et une cuisine adaptée à votre espace. Personnalisation réelle vs modules standard, durabilité et matériaux (structure, chants, quincaillerie), coûts cachés : ajustements, installation, retouches.",
              href: "/comparatifs/cuisine-sur-mesure-vs-ikea/",
            },
            {
              title: "Cuisine sur mesure vs Home Depot",
              description:
                "Utile si vous comparez une cuisine « prête à installer » à un projet sur mesure avec un rendu haut de gamme. Finition et cohérence visuelle, adaptation à l'espace (coins, murs, contraintes), qualité d'installation et longévité.",
              href: "/comparatifs/cuisine-sur-mesure-vs-home-depot/",
            },
            {
              title: "Cuisiniste vs entrepreneur général",
              description:
                "Utile si vous voulez comprendre qui porte la responsabilité du résultat final dans un projet avec plusieurs intervenants. Responsabilité unique vs responsabilités fragmentées, coordination du chantier et calendrier, gestion des imprévus et qualité finale.",
              href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
            },
          ]}
          columns={3}
        />

        <TextSection
          aria-labelledby="framework"
          heading="Comment comparer efficacement"
          paragraphs={[
            "Avant de décider, comparez avec des critères stables (pas seulement le look).",
          ]}
        />

        <ListSection
          aria-labelledby="critères"
          heading=""
          items={[
            "Durabilité : structure, chants, quincaillerie, résistance à l'usage.",
            "Personnalisation : adaptation réelle à l'espace (ergonomie, rangement, accès aux coins).",
            "Installation & finition : alignements, ajustements, retouches.",
            "Risque & coûts cachés : coordination, imprévus, délais, reprises.",
          ]}
          variant="bullets"
          links={[
            {
              text: "Voir les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              text: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="situations"
          heading="Choisir selon votre situation"
          paragraphs={[]}
        />

        <ListSection
          aria-labelledby="situations-details"
          heading=""
          items={[
            "Vous voulez un résultat durable et cohérent : privilégiez le sur mesure adapté à l'espace.",
            "Vous voulez minimiser la gestion de chantier : une approche clé en main peut réduire les imprévus.",
            "Vous avez besoin d'orientation : commencez par cadrer les besoins et le plan.",
          ]}
          variant="bullets"
          links={[
            {
              text: "Cuisine sur mesure",
              href: "/espaces/cuisine/",
              variant: "outline",
            },
            {
              text: "Rénovation clé en main",
              href: "/services/renovation/",
              variant: "outline",
            },
            {
              text: "Service de design",
              href: "/services/design/",
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
