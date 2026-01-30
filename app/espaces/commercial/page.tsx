import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { ListSection } from "@/components/sections/ListSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { TextSection } from "@/components/sections/TextSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "Commercial sur mesure",
  description:
    "Aménagement commercial sur mesure : mobilier et rangement robustes pour usage intensif. Design, fabrication et installation à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/commercial/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/espaces/commercial/",
    title: "Commercial sur mesure | Dilamco",
    description:
      "Aménagement commercial sur mesure : mobilier et rangement robustes pour usage intensif. Design, fabrication et installation à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Commercial sur mesure Dilamco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial sur mesure | Dilamco",
    description:
      "Aménagement commercial sur mesure : mobilier et rangement robustes pour usage intensif.",
    images: ["/opengraph-image"],
  },
};

export default function Commercial() {
  const faqItems = [
    {
      q: "Faites-vous des projets commerciaux de petite taille?",
      a: "Oui, selon le contexte. Le point clé est la clarté des besoins, des contraintes et du calendrier. Décrivez le type d'espace et l'usage lors de la demande de soumission.",
    },
    {
      q: "Quels matériaux sont recommandés pour usage intensif?",
      a: "Le choix dépend de l'environnement (chocs, nettoyage, humidité). La durabilité dépend aussi des chants, de la quincaillerie et de l'installation.",
    },
    {
      q: "Travaillez-vous avec des entrepreneurs ou des architectes?",
      a: "Oui, selon le projet. Nous pouvons collaborer avec les intervenants en place pour cadrer la fabrication et l'installation.",
    },
    {
      q: "Quels sont les délais typiques?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance est à préciser lors de la soumission, afin d'aligner le plan et la production.",
    },
    {
      q: "Pouvez-vous intervenir dans un espace en opération?",
      a: "Selon les contraintes, il est parfois possible de planifier l'intervention pour limiter l'impact sur vos opérations (heures, accès, phasage).",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          image={{
            src: "/images/spaces/commercial.webp",
            alt: "Aménagement commercial sur mesure",
          }}
          heading="Aménagement commercial sur mesure, mobilier et rangement durables"
          description="En commercial, la priorité est la fiabilité : usage intensif, entretien, contraintes du lieu, calendrier et coordination. Dilamco conçoit et réalise du mobilier et du rangement sur mesure pour espaces commerciaux, avec une exécution robuste et un résultat prévisible — principalement à Montréal, Laval et sur la Rive-Sud."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Parler de votre projet",
                href: "/contact/",
              },
              {
                text: "Voir des projets commerciaux",
                href: "/projets/commercial/",
                variant: "outline",
              },
            ]} />
          }
        />

        <TextSection
          aria-labelledby="types"
          heading="Types d'espaces commerciaux"
          paragraphs={[
            "Le sur mesure est particulièrement pertinent lorsque l'espace impose des contraintes (accès, équipements, circulation) ou lorsque l'usage est intensif.",
            "Si votre besoin est strictement décoratif ou temporaire, le sur mesure commercial est souvent moins pertinent. Ici, l'objectif est la durabilité et la fonctionnalité.",
          ]}
        />

        <ListSection
          aria-labelledby="types-details"
          heading=""
          items={[
            "Bureaux & espaces professionnels : rangements, mobilier intégré, zones d'accueil.",
            "Commerces de détail : mobilier de présentation, arrière-boutique, rangements.",
            "Espaces de services : mobilier fonctionnel, organisation, durabilité au quotidien.",
            "Espaces communs : comptoirs, rangements muraux, solutions intégrées.",
          ]}
          variant="bullets"
        />

        <FeatureGridSection
          aria-labelledby="inclus"
          heading="Ce que comprend un projet commercial Dilamco"
          features={[
            {
              title: "Analyse des besoins",
              description: "Usage, contraintes du lieu, circulation, dimensions et accès.",
            },
            {
              title: "Design fonctionnel",
              description: "Plan orienté opération et ergonomie.",
            },
            {
              title: "Fabrication sur mesure",
              description: "Mobilier et rangement adaptés au contexte.",
            },
            {
              title: "Installation professionnelle",
              description: "Alignements, ajustements, finition et inspection finale.",
            },
          ]}
          columns={2}
        />

        <RelatedLinksSection
          aria-labelledby="services"
          heading="Services associés"
          links={[
            { label: "Design", href: "/services/design/" },
            { label: "Fabrication", href: "/services/fabrication/" },
            { label: "Installation", href: "/services/installation/" },
            {
              label: "Rénovation clé en main (si applicable)",
              href: "/services/renovation/",
            },
          ]}
          columns={2}
        />

        <TextSection
          aria-labelledby="durabilite"
          heading="Usage intensif & durabilité"
          paragraphs={[
            "En commercial, la longévité se joue sur les détails : structures stables, chants résistants, quincaillerie conçue pour des cycles répétés et finitions faciles à entretenir.",
          ]}
          links={[
            {
              text: "Voir les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              text: "Quincaillerie",
              href: "/materiaux/quincaillerie/",
              variant: "outline",
            },
            {
              text: "Comparatif des matériaux",
              href: "/materiaux/comparatif/",
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="durabilite-details"
          heading=""
          items={[
            "Matériaux adaptés : sélection orientée usage et stabilité.",
            "Chants & finition : résistance aux impacts et à l'usure.",
            "Quincaillerie : charnières et coulisses pour usage fréquent.",
            "Entretien : surfaces cohérentes avec le nettoyage régulier.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="contraintes"
          heading="Contraintes du lieu & coordination"
          paragraphs={[
            "Un projet commercial impose souvent des contraintes particulières : accès, heures d'intervention, intégration d'équipements, réseaux existants et calendrier. Nous cadrons le projet pour limiter les surprises et livrer un résultat cohérent.",
          ]}
        />

        <ListSection
          aria-labelledby="contraintes-details"
          heading=""
          items={[
            "Intégration : adaptation aux équipements et contraintes existantes.",
            "Dégagements & accès : circulation, portes, zones de travail et dimensions.",
            "Phasage : planification pour réduire l'impact sur vos opérations (selon le contexte).",
            "Coordination : collaboration avec d'autres intervenants lorsque nécessaire.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="configurations"
          heading="Configurations possibles"
          paragraphs={[
            "Quelques exemples de solutions fréquentes en commercial (adaptées à votre contexte).",
          ]}
        />

        <ListSection
          aria-labelledby="configurations-details"
          heading=""
          items={[
            "Comptoirs de service : réception, accueil, zones transactionnelles.",
            "Rangements muraux : optimisation verticale, zones de stockage.",
            "Mobilier intégré : solutions sur mesure non standardisées.",
            "Arrière-boutique : organisation des produits, accès rapide, durabilité.",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="projets"
          heading="Projets commerciaux"
          links={[
            {
              label: "Voir tous les projets commerciaux",
              href: "/projets/commercial/",
            },
            { label: "Voir tous les projets", href: "/projets/" },
          ]}
          columns={2}
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — commercial sur mesure"
          items={faqItems.map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
        />

        <RelatedLinksSection
          aria-labelledby="liens"
          heading="Liens utiles"
          links={[
            { label: "Projets", href: "/projets/commercial/" },
            { label: "Matériaux", href: "/materiaux/" },
            { label: "Demander une soumission", href: "/contact/" },
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
    </>
  );
}
