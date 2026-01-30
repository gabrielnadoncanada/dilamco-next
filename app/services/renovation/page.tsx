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
  title: "Rénovation clé en main",
  description:
    "Rénovation clé en main : planification, coordination des corps de métier, exécution et finition. Cuisine, salle de bain, plancher et agrandissement à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/services/renovation/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/services/renovation/",
    title: "Rénovation clé en main | Dilamco",
    description:
      "Rénovation clé en main : planification, coordination des corps de métier, exécution et finition. Cuisine, salle de bain, plancher et agrandissement à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rénovation clé en main Dilamco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rénovation clé en main | Dilamco",
    description:
      "Rénovation clé en main : planification, coordination des corps de métier, exécution et finition.",
    images: ["/opengraph-image"],
  },
};

export default function Renovation() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Rénovation clé en main", url: SITE.url + "/services/renovation/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading="Rénovation clé en main, coordination, exécution et finition"
          description="Une rénovation réussie, ce n'est pas seulement des travaux : c'est une question de coordination et de responsabilité. Selon le projet, Dilamco peut prendre en charge la planification, la coordination des corps de métier et l'installation pour livrer un résultat cohérent — du plan à la finition."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Demander une soumission",
                href: "/contact/",
              },
              {
                text: "Voir des projets",
                href: "/projets/",
                variant: "outline",
              },
            ]} />
          }
        />

        <TextSection
          aria-labelledby="definition"
          heading="Qu'est-ce qu'une rénovation clé en main?"
          paragraphs={[
            "Une rénovation clé en main vise à réduire les zones grises : un périmètre clair, une coordination structurée, et un point de contact principal. Le but est simple : limiter les retouches, les délais inutiles et les incohérences entre le plan, le chantier et l'installation.",
          ]}
        />

        <ListSection
          aria-labelledby="definition-details"
          heading=""
          items={[
            "Planification : cadrage du projet, séquence des travaux, préparation.",
            "Coordination : organisation des intervenants (ex. plomberie, électricité, plancher, finition) lorsque requis.",
            "Exécution : suivi et ajustements terrain, gestion des imprévus.",
            "Installation & finition : alignements, ajustements, inspection finale.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="quand"
          heading="Quand une approche clé en main est pertinente"
          items={[
            "Vous modifiez la plomberie et/ou l'électricité.",
            "Vous refaites le plancher, les murs, l'éclairage ou la ventilation.",
            "Le projet implique plusieurs intervenants et vous voulez limiter la coordination.",
            "Vous visez un rendu haut de gamme avec une finition cohérente.",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="types"
          heading="Types de rénovations"
          links={[
            { label: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
            { label: "Rénovation de salle de bain", href: "/services/renovation/salle-de-bain/" },
            { label: "Rénovation de plancher", href: "/services/renovation/plancher/" },
            { label: "Agrandissement de maison", href: "/services/renovation/agrandissement-de-maison/" },
          ]}
          columns={2}
        />

        <TextSection
          aria-labelledby="responsabilite"
          heading="Le vrai enjeu : responsabilités claires"
          paragraphs={[
            "Sur un chantier, les problèmes viennent souvent des zones grises : qui ajuste si un mur n'est pas droit? Qui corrige si l'installation ne correspond pas au plan? Qui coordonne les retards entre intervenants? Une approche clé en main vise à clarifier ces responsabilités et à protéger la cohérence du résultat final.",
          ]}
          links={[
            {
              text: "Cuisiniste vs entrepreneur général : comprendre la différence",
              href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="surmesure"
          heading="Rénovation + sur mesure"
          paragraphs={[
            "Le sur mesure prend toute sa valeur quand il est aligné avec la réalité du chantier : un design pensé pour l'espace, des armoires adaptées aux contraintes, et une installation ajustée sur place après les travaux.",
          ]}
          links={[
            {
              text: "Cuisine sur mesure",
              href: "/espaces/cuisine/",
              variant: "outline",
            },
            {
              text: "Salle de bain & vanités sur mesure",
              href: "/espaces/salle-de-bain/",
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
