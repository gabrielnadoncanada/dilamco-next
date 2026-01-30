import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Projets sur mesure réalisés par Dilamco : cuisines, salles de bain, walk-in, salles de lavage et commercial. Réalisations à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/projets/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/projets/",
    title: "Projets | Dilamco",
    description:
      "Projets sur mesure réalisés par Dilamco : cuisines, salles de bain, walk-in, salles de lavage et commercial. Réalisations à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Projets Dilamco — Réalisations sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets | Dilamco",
    description:
      "Projets sur mesure réalisés par Dilamco : cuisines, salles de bain, walk-in.",
    images: ["/opengraph-image"],
  },
};

export default function Projets() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading="Projets sur mesure, cuisines, salles de bain et rénovations"
          description="Découvrez des projets réels livrés par Dilamco. Chaque réalisation est conçue sur mesure selon l'espace, l'usage et les contraintes du client. Nous réalisons des projets principalement à Montréal, Laval et sur la Rive-Sud."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Voir les espaces",
                href: "/espaces/",
                variant: "outline",
              },
              {
                text: "Parler de votre projet",
                href: "/contact/",
              },
            ]} />
          }
        />

        <FeatureGridSection
          aria-labelledby="categories"
          heading="Projets par catégorie"
          description="Filtrez les projets par type d'espace pour voir des configurations similaires à votre besoin."
          features={[
            {
              title: "Cuisines sur mesure",
              description: "Projets de cuisines sur mesure, avec ou sans rénovation complète, réalisés dans des contextes variés (condos, maisons, plex).",
            },
            {
              title: "Salles de bain & vanités",
              description: "Vanités et rangements adaptés à l'humidité, avec attention particulière aux matériaux et à la finition.",
            },
            {
              title: "Walk-in & rangement",
              description: "Projets d'organisation et de rangement sur mesure pour optimiser l'espace disponible.",
            },
            {
              title: "Salles de lavage",
              description: "Aménagements pratiques et durables pour buanderies et espaces techniques.",
            },
            {
              title: "Commercial",
              description: "Mobilier et rangement sur mesure pour environnements commerciaux et professionnels.",
            },
          ]}
          columns={3}
        />

        <RelatedLinksSection
          aria-labelledby="vedette"
          heading="Projets récents"
          links={[
            {
              label: "Cuisine sur mesure — Montréal",
              href: "/projets/cuisine/cuisine-sur-mesure-montreal/",
            },
            {
              label: "Vanité sur mesure — Laval",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval/",
            },
            {
              label: "Cuisine sur mesure — Rive-Sud",
              href: "/projets/cuisine/cuisine-sur-mesure-rive-sud/",
            },
          ]}
          columns={3}
        />

        <ProcessSection
          aria-labelledby="processus"
          heading="Notre approche projet"
          description="Une démarche cadrée pour garantir un résultat durable et bien exécuté."
          steps={[
            {
              step: "1",
              title: "Analyse & design",
              description: "Compréhension des besoins et contraintes de l'espace.",
            },
            {
              step: "2",
              title: "Fabrication sur mesure",
              description: "Production adaptée à la configuration réelle.",
            },
            {
              step: "3",
              title: "Coordination (si applicable)",
              description: "Gestion des travaux connexes lors d'une rénovation complète.",
            },
            {
              step: "4",
              title: "Installation & ajustements",
              description: "Finition, alignements et inspection finale.",
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
