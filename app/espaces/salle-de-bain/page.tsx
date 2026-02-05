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
import { FeatureImageText, type FeatureImageTextItem } from "@/components/sections/FeatureImageText";
import { ActionButtons } from "@/components/ActionButtons";
import { Checklist } from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Salle de bain & vanités sur mesure",
  description:
    "Vanités et rangement de salle de bain sur mesure conçus pour l’humidité : design, fabrication et installation. Option rénovation de salle de bain clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/salle-de-bain/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/espaces/salle-de-bain/",
    title: "Salle de bain & vanités sur mesure | Dilamco",
    description:
      "Vanités et rangement de salle de bain sur mesure conçus pour l'humidité : design, fabrication et installation. Option rénovation de salle de bain clé en main à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Salle de bain & vanités sur mesure Dilamco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salle de bain & vanités sur mesure | Dilamco",
    description:
      "Vanités et rangement de salle de bain sur mesure conçus pour l'humidité.",
    images: ["/opengraph-image"],
  },
};

export default function SalleDeBain() {
  const faqItems = [
    {
      q: "Quels matériaux sont les plus adaptés en salle de bain?",
      a: "Les matériaux doivent être choisis en fonction de l'humidité, des chants et de la stabilité. La solution la plus durable dépend aussi de l'assemblage, de la quincaillerie et de l'installation.",
    },
    {
      q: "MDF ou mélamine en salle de bain : lequel choisir?",
      a: "Ça dépend du fini recherché et du niveau d'humidité. Le point critique est la protection des chants et la qualité d'exécution. Un mauvais détail de finition peut ruiner n'importe quel matériau.",
    },
    {
      q: "Tiroirs ou portes : qu'est-ce qui est le plus pratique?",
      a: "Les tiroirs facilitent l'accès (surtout en profondeur). Les portes peuvent être pertinentes selon la plomberie et l'organisation. Le sur mesure permet d'optimiser les deux.",
    },
    {
      q: "Quels sont les délais typiques?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0–3 mois, 3–6 mois, etc.) est un bon point de départ à préciser lors de la soumission.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    {
      name: "Salle de bain & vanités",
      url: SITE.url + "/espaces/salle-de-bain/",
    },
  ];

  const featureImageTextItems: FeatureImageTextItem[] = [
    {
      ariaLabelledby: "humidite",
      heading: "Humidité & durabilité : les points qui comptent vraiment",
      content: (
        <>
          <p>En salle de bain, les problèmes viennent rarement "d'un mauvais look". Ils viennent de l'humidité : chants endommagés, gonflement, quincaillerie qui fatigue. Notre priorité est de réduire ces risques dès la conception.</p>
          <Checklist
            items={[
              "Matériaux adaptés : choix orientés stabilité et usage en milieu humide.",
              "Protection des chants : un détail critique pour limiter l'infiltration d'eau.",
              "Quincaillerie fiable : charnières et coulisses pour usage quotidien (soft-close selon le besoin).",
              "Contexte du projet : ventilation et configuration (surtout en rénovation).",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-salles-de-bain.webp",
        alt: "Humidité & durabilité en salle de bain",
      },
      links: [
        {
          text: "Comparatif des matériaux",
          href: "/materiaux/comparatif/",
          variant: "outline",
        },
        {
          text: "Quincaillerie",
          href: "/materiaux/quincaillerie/",
          variant: "outline",
        },
        {
          text: "Pourquoi le contreplaqué",
          href: "/materiaux/contreplaque/",
          variant: "outline",
        },
      ],
    },
    {
      ariaLabelledby: "configurations",
      heading: "Configurations possibles",
      content: (
        <>
          <p>Le sur mesure permet d'adapter la vanité à votre espace, vos habitudes et vos contraintes.</p>
          <Checklist
            items={[
              "Simple ou double lavabo selon la largeur disponible.",
              "Tiroirs vs portes selon vos préférences d'organisation.",
              "Rangement vertical pour maximiser l'espace dans les petites salles de bain.",
              "Intégration plomberie propre et fonctionnelle (sans perdre du rangement inutilement).",
              "Finition cohérente avec le style (moderne, chaleureux, classique).",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-salles-de-bain.webp",
        alt: "Configurations possibles de vanités sur mesure",
      },
      links: [
        {
          text: "Couleurs et finis",
          href: "/materiaux/couleurs/",
          variant: "outline",
        },
      ],
    },
    {
      ariaLabelledby: "renovation",
      heading: "Rénovation de salle de bain (option clé en main)",
      content: (
        <>
          <p>Si votre projet inclut des travaux connexes (douche/bain, céramique, plomberie, ventilation, électricité), une approche clé en main peut réduire les imprévus et mieux cadrer le calendrier.</p>
        </>
      ),
      image: {
        src: "/images/spaces/vanite-salles-de-bain.webp",
        alt: "Rénovation de salle de bain clé en main",
      },
      links: [
        {
          text: "Voir la rénovation salle de bain",
          href: "/services/renovation/salle-de-bain/",
          variant: "outline",
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Salle de bain & vanités sur mesure, durabilité en milieu humide"
          description="Une salle de bain impose des contraintes spécifiques : humidité, ventilation, éclaboussures, nettoyage fréquent et usage quotidien. Dilamco conçoit et réalise des vanités et rangements sur mesure haut de gamme, pensés pour durer, avec option de rénovation complète clé en main selon le projet — principalement à Montréal, Laval et sur la Rive-Sud."
          image={{
            src: "/images/spaces/vanite-salles-de-bain.webp",
            alt: "Salle de bain & vanités sur mesure",
          }}
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Demander une soumission",
                href: "/contact/",
              },
              {
                text: "Voir des projets de salles de bain",
                href: "/projets/salle-de-bain/",
                variant: "outline",
              },
            ]} />
          }
        />

        <ListSection
          aria-labelledby="pour-qui"
          heading="À qui s'adresse une vanité sur mesure?"
          items={[
            "Vous voulez optimiser l'espace (petite salle de bain, condo, circulation serrée).",
            "Vous cherchez une solution durable malgré l'humidité (matériaux, chants, quincaillerie).",
            "Vous avez des contraintes à intégrer : double lavabo, rangement vertical, plomberie, niches.",
          ]}
          variant="checkmarks"
        />

        <FeatureGridSection
          aria-labelledby="inclus"
          heading="Ce que comprend une salle de bain sur mesure Dilamco"
          features={[
            {
              title: "Design & planification",
              description: "Besoins, contraintes, plan et choix de matériaux.",
            },
            {
              title: "Fabrication sur mesure",
              description: "Vanité, rangement, modules adaptés (simple ou double).",
            },
            {
              title: "Installation précise",
              description: "Alignements, ajustements, finition et inspection finale.",
            },
            {
              title: "Option clé en main",
              description: "Coordination des travaux connexes lors d'une rénovation complète.",
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
              label: "Rénovation salle de bain",
              href: "/services/renovation/salle-de-bain/",
            },
          ]}
          columns={2}
        />

        <FeatureImageText items={featureImageTextItems} />

        <RelatedLinksSection
          aria-labelledby="projets"
          heading="Projets de salles de bain"
          links={[
            {
              label: "Voir tous les projets de salles de bain",
              href: "/projets/salle-de-bain/",
            },
            { label: "Voir tous les projets", href: "/projets/" },
          ]}
          columns={2}
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — salle de bain & vanités sur mesure"
          items={faqItems.map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
        />

        <RelatedLinksSection
          aria-labelledby="liens"
          heading="Liens utiles"
          links={[
            { label: "Projets", href: "/projets/salle-de-bain/" },
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
