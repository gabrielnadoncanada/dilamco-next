import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { TextSection } from "@/components/sections/TextSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "À propos de Dilamco : cuisines, armoires et vanités sur mesure haut de gamme. Approche clé en main selon le projet, contrôle qualité et exécution soignée à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/a-propos/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/a-propos/",
    title: "À propos | Dilamco",
    description:
      "À propos de Dilamco : cuisines, armoires et vanités sur mesure haut de gamme. Approche clé en main selon le projet, contrôle qualité et exécution soignée à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "À propos de Dilamco — Sur mesure haut de gamme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | Dilamco",
    description:
      "À propos de Dilamco : cuisines, armoires et vanités sur mesure haut de gamme.",
    images: ["/opengraph-image"],
  },
};

export default function APropos() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "À propos", url: SITE.url + "/a-propos/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading="À propos de Dilamco"
          description="Dilamco conçoit et réalise des cuisines, armoires et vanités sur mesure haut de gamme. Notre objectif est simple : livrer un résultat durable, cohérent et bien exécuté — du plan à l'installation — avec une approche clé en main lorsque le projet le requiert. Nous réalisons des projets principalement à Montréal, Laval et sur la Rive-Sud."
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

        <TextSection
          aria-labelledby="mission"
          heading="Notre approche"
          paragraphs={[
            "Le sur mesure ne se résume pas à des dimensions. C'est une façon de concevoir l'espace autour de votre usage : circulation, accès, ergonomie, rangement et finition. Nous privilégions des décisions cohérentes avec les contraintes réelles (humidité, charges, cycles d'ouverture) pour maximiser la durabilité.",
          ]}
        />

        <ProofSection
          aria-labelledby="differenciation"
          heading="Ce qui distingue Dilamco"
          items={[
            {
              title: "Sur mesure réel",
              description: "Adapté à votre espace, pas à un catalogue standard.",
            },
            {
              title: "Qualité et durabilité",
              description: "Choix de matériaux orientés usage, quincaillerie fiable et assemblage robuste.",
            },
            {
              title: "Exécution soignée",
              description: "L'installation et les ajustements déterminent le rendu final.",
            },
            {
              title: "Clé en main (si applicable)",
              description: "Coordination des travaux connexes pour réduire les imprévus et livrer un résultat cohérent.",
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

        <ProcessSection
          aria-labelledby="processus"
          heading="Une démarche cadrée"
          description="Une approche structurée pour garantir un résultat durable et bien exécuté."
          steps={[
            {
              step: "1",
              title: "Analyse & design",
              description:
                "Comprendre vos besoins et contraintes, puis structurer le plan.",
            },
            {
              step: "2",
              title: "Fabrication sur mesure",
              description: "Production adaptée à la configuration réelle.",
            },
            {
              step: "3",
              title: "Coordination (si applicable)",
              description:
                "Gestion des étapes connexes lors d'une rénovation complète.",
            },
            {
              step: "4",
              title: "Installation & inspection",
              description: "Ajustements, finition et vérification finale.",
            },
          ]}
        />

        <RelatedLinksSection
          aria-labelledby="preuves"
          heading="Voir des exemples concrets"
          links={[
            { label: "Voir nos projets", href: "/projets/" },
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
    </>
  );
}
