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
  title: "Salle de lavage sur mesure",
  description:
    "Salle de lavage sur mesure : armoires, comptoir et rangement robuste pour buanderie. Praticité, durabilité et configuration adaptée à votre espace à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/salle-de-lavage/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/espaces/salle-de-lavage/",
    title: "Salle de lavage sur mesure | Dilamco",
    description:
      "Salle de lavage sur mesure : armoires, comptoir et rangement robuste pour buanderie. Praticité, durabilité et configuration adaptée à votre espace à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Salle de lavage sur mesure Dilamco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salle de lavage sur mesure | Dilamco",
    description:
      "Salle de lavage sur mesure : armoires, comptoir et rangement robuste pour buanderie.",
    images: ["/opengraph-image"],
  },
};

export default function SalleDeLavage() {
  const faqItems = [
    {
      q: "Comment optimiser une petite buanderie?",
      a: "En structurant des zones (lavage, pliage, rangement) et en exploitant la hauteur. Le sur mesure aide à éviter les espaces perdus et à intégrer les contraintes techniques.",
    },
    {
      q: "Tiroirs ou portes pour ranger les produits?",
      a: "Les tiroirs donnent un accès plus simple (surtout en profondeur). Les portes peuvent être utiles pour des items volumineux. Le bon choix dépend de la configuration et de vos habitudes.",
    },
    {
      q: "Quels matériaux tiennent bien avec l'humidité?",
      a: "Le point clé est la stabilité et la protection des chants. La durabilité dépend aussi de l'assemblage, de la quincaillerie et de la qualité d'installation.",
    },
    {
      q: "Est-ce possible dans un placard?",
      a: "Oui. Le sur mesure est particulièrement pertinent dans un placard, car il faut gérer les dégagements, l'ouverture, la circulation et souvent des contraintes techniques.",
    },
    {
      q: "Quels sont les délais typiques?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0–3 mois, 3–6 mois, etc.) est un bon point de départ à préciser lors de la soumission.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Salle de lavage", url: SITE.url + "/espaces/salle-de-lavage/" },
  ];

  const featureImageTextItems: FeatureImageTextItem[] = [
    {
      ariaLabelledby: "fonctionnalite",
      heading: "Fonctionnalité : organiser les zones (lavage, pliage, rangement)",
      content: (
        <>
          <p>Une buanderie efficace réduit le désordre. Le sur mesure permet de structurer l'espace selon vos habitudes et la réalité des lieux.</p>
          <Checklist
            items={[
              "Zone lavage : accès simple à la laveuse/sécheuse, circulation et dégagements cohérents.",
              "Zone pliage : comptoir pratique et hauteur confortable.",
              "Produits ménagers : rangement sécurisé et accessible.",
              "Rangement vertical : armoires hautes et colonnes pour maximiser l'espace.",
              "Paniers & linge : organisation logique pour éviter que tout s'accumule.",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-salles-de-lavage.webp",
        alt: "Fonctionnalité d'une salle de lavage sur mesure",
      },
    },
    {
      ariaLabelledby: "technique",
      heading: "Contraintes techniques & durabilité",
      content: (
        <>
          <p>Les problèmes d'une salle de lavage viennent souvent de détails : chants exposés à l'eau, surfaces difficiles à nettoyer, quincaillerie qui fatigue. Notre approche vise la durabilité dans le temps.</p>
          <Checklist
            items={[
              "Humidité & éclaboussures : matériaux adaptés et protection des chants.",
              "Surfaces faciles à entretenir : conception pensée pour le nettoyage régulier.",
              "Usage répété : quincaillerie fiable pour ouvertures fréquentes (tiroirs/portes).",
              "Conception autour des contraintes : plomberie, drains, ventilation, éléments techniques.",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-salles-de-lavage.webp",
        alt: "Contraintes techniques & durabilité d'une salle de lavage sur mesure",
      },
      links: [
        {
          text: "Voir les matériaux",
          href: "/materiaux/",
          variant: "outline",
        },
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
      ],
    },
    {
      ariaLabelledby: "configurations",
      heading: "Configurations possibles",
      content: (
        <>
          <p>Le sur mesure s'adapte à la configuration réelle de votre buanderie.</p>
          <Checklist
            items={[
              "Buanderie en corridor : rangement vertical et comptoir de pliage sans bloquer la circulation.",
              "Buanderie dans un placard : modules adaptés, accès simple, gestion des portes et dégagements.",
              "Évier utilitaire (si applicable) : rangement adapté aux produits et à l'espace humide.",
              "Empilage laveuse/sécheuse : optimisation de la hauteur et du rangement.",
              "Armoires hautes + colonne : maximiser le rangement pour linge, paniers et accessoires.",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-salles-de-lavage.webp",
        alt: "Configurations possibles d'une salle de lavage sur mesure",
      },
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Salle de lavage sur mesure, armoires et rangement durable pour buanderie"
          description="Une buanderie est un espace technique : humidité, plomberie, vibration, produits ménagers et usage fréquent. Dilamco conçoit et réalise des salles de lavage sur mesure haut de gamme, pensées pour être pratiques et durables — principalement à Montréal, Laval et sur la Rive-Sud."
          image={{
            src: "/images/spaces/vanite-salles-de-lavage.webp",
            alt: "Salle de lavage sur mesure",
          }}
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Demander une soumission",
                href: "/contact/",
              },
              {
                text: "Voir des projets de salle de lavage",
                href: "/projets/salle-de-lavage/",
                variant: "outline",
              },
            ]} />
          }
        />

        <ListSection
          aria-labelledby="pour-qui"
          heading="À qui s'adresse une salle de lavage sur mesure?"
          items={[
            "Vous voulez optimiser un espace restreint (condo, corridor, placard, sous-sol).",
            "Vous cherchez un espace simple à utiliser au quotidien (pliage, paniers, produits, linge).",
            "Vous avez des contraintes à intégrer : plomberie, drains, chauffe-eau, panneaux, ventilation.",
          ]}
          variant="checkmarks"
        />

        <FeatureGridSection
          aria-labelledby="inclus"
          heading="Ce que comprend une salle de lavage Dilamco"
          features={[
            {
              title: "Design & planification",
              description: "Besoins, contraintes, circulation et plan d'organisation.",
            },
            {
              title: "Fabrication sur mesure",
              description: "Armoires, modules, comptoir de pliage et rangement adapté.",
            },
            {
              title: "Installation précise",
              description: "Alignements, ajustements, finition et inspection finale.",
            },
          ]}
          columns={3}
        />

        <RelatedLinksSection
          aria-labelledby="services"
          heading="Services associés"
          links={[
            { label: "Design", href: "/services/design/" },
            { label: "Fabrication", href: "/services/fabrication/" },
            { label: "Installation", href: "/services/installation/" },
          ]}
          columns={3}
        />

        <FeatureImageText items={featureImageTextItems} />

        <RelatedLinksSection
          aria-labelledby="projets"
          heading="Projets de salles de lavage"
          links={[
            {
              label: "Voir tous les projets de salle de lavage",
              href: "/projets/salle-de-lavage/",
            },
            { label: "Voir tous les projets", href: "/projets/" },
          ]}
          columns={2}
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — salle de lavage sur mesure"
          items={faqItems.map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
        />

        <RelatedLinksSection
          aria-labelledby="liens"
          heading="Liens utiles"
          links={[
            { label: "Projets", href: "/projets/salle-de-lavage/" },
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
