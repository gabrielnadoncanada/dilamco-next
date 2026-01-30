import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { TextSection } from "@/components/sections/TextSection";
import { ListSection } from "@/components/sections/ListSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Guides et conseils pour projets de cuisines, vanités et rénovations sur mesure. Décisions éclairées, de l'inspiration à la soumission, à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/guides/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/guides/",
    title: "Guides | Dilamco",
    description:
      "Guides et conseils pour projets de cuisines, vanités et rénovations sur mesure. Décisions éclairées, de l'inspiration à la soumission, à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Guides Dilamco — Conseils pour projets sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides | Dilamco",
    description:
      "Guides et conseils pour projets de cuisines, vanités et rénovations sur mesure.",
    images: ["/opengraph-image"],
  },
};

export default function Guides() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Guides", url: SITE.url + "/guides/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading="Guides & conseils — cuisines et rénovations sur mesure"
          description="Concevoir une cuisine ou planifier une rénovation implique des décisions importantes : matériaux, délais, organisation des travaux. Ces guides pratiques sont basés sur des projets réels et visent à vous aider à clarifier votre projet avant de passer à l'étape de la soumission. Nos projets sont réalisés principalement à Montréal, Laval et sur la Rive-Sud."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Parler de votre projet",
                href: "/contact/",
              },
            ]} />
          }
        />

        <ListSection
          aria-labelledby="categories"
          heading="Catégories de guides"
          items={[
            "Choisir son espace (cuisine, salle de bain, rangement)",
            "Rénovation & planification",
            "Matériaux & durabilité",
            "Comparatifs & décisions",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="liste-guides"
          heading="Guides disponibles"
          paragraphs={[
            "Chaque guide répond à une question précise et vous dirige vers les pages pertinentes si vous souhaitez aller plus loin.",
          ]}
        />

        <RelatedLinksSection
          aria-labelledby="guides-list"
          heading=""
          links={[
            {
              label: "Comment choisir une cuisine sur mesure",
              href: "/guides/comment-choisir-cuisine-sur-mesure/",
            },
            {
              label: "Étapes d'une rénovation de cuisine",
              href: "/guides/etapes-renovation-cuisine/",
            },
            {
              label: "Erreurs fréquentes en rénovation de cuisine",
              href: "/guides/erreurs-renovation-cuisine/",
            },
          ]}
          columns={3}
        />

        <TextSection
          aria-labelledby="utilisation"
          heading="Comment utiliser ces guides"
          paragraphs={[
            "Ces contenus sont conçus pour vous aider à structurer votre réflexion. Si vous avez déjà une idée claire de votre projet (espace, échéance, secteur), vous pouvez passer directement à la demande de soumission.",
          ]}
          links={[
            {
              text: "Demander une soumission",
              href: "/contact/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="positionnement"
          heading="Notre positionnement"
          paragraphs={[
            "Dilamco se spécialise dans le sur mesure haut de gamme. Ces guides s'adressent à des projets conçus pour durer, avec une exécution soignée et, lorsque requis, une approche clé en main.",
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
