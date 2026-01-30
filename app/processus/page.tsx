import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import {
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { TextSection } from "@/components/sections/TextSection";
import { ListSection } from "@/components/sections/ListSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "Processus",
  description:
    "Découvrez le processus Dilamco : design, fabrication, installation et, selon le projet, rénovation clé en main. Une méthode structurée du plan à la finition.",
  alternates: {
    canonical: "https://dilamco.com/processus/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/processus/",
    title: "Processus | Dilamco",
    description:
      "Découvrez le processus Dilamco : design, fabrication, installation et, selon le projet, rénovation clé en main. Une méthode structurée du plan à la finition.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Processus Dilamco — Du plan à la finition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Processus | Dilamco",
    description:
      "Découvrez le processus Dilamco : design, fabrication, installation et rénovation clé en main.",
    images: ["/opengraph-image"],
  },
};

export default function Processus() {
  const faqItems = [
    {
      q: "Est-ce que tous les projets suivent exactement les mêmes étapes?",
      a: 'La structure est la même, mais la portée varie. Un projet "aménagement seulement" est plus simple qu\'une rénovation complète avec travaux connexes.',
    },
    {
      q: "À quel moment la fabrication démarre-t-elle?",
      a: "Lorsque le plan et les décisions essentielles sont validés. Les changements tardifs sont la source la plus fréquente de reprises et de délais.",
    },
    {
      q: "Faites-vous l'installation?",
      a: "Oui. L'installation et les ajustements sont essentiels pour un résultat durable et une finition propre.",
    },
    {
      q: "Le processus est-il adapté aux condos?",
      a: "Oui. On tient compte des contraintes d'accès, d'horaires et de logistique propres aux immeubles.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Processus", url: SITE.url + "/processus/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Processus Dilamco",
          description:
            "Processus structuré pour projets sur mesure : design, fabrication, installation et, selon la portée, rénovation clé en main du plan à la finition.",
          url: SITE.url + "/processus/",
          serviceType: "Processus de projet sur mesure",
          areaServed: ["Montréal", "Laval", "Rive-Sud", "Québec"],
        })}
      />
      <JsonLd data={faqJsonLd(faqItems)} />

      <main id="contenu">
        <HeroSection
          heading="Notre processus, du plan à la finition"
          description="Une cuisine, une salle de bain ou un aménagement sur mesure n'est pas seulement un produit : c'est un projet. La différence entre un résultat « correct » et un résultat haut de gamme vient surtout de la méthode : décisions prises tôt, coordination claire, fabrication cohérente et installation précise."
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
          aria-labelledby="pourquoi"
          heading="Pourquoi un processus clair?"
          paragraphs={[
            "Un bon résultat dépend moins des « bonnes intentions » que d'un déroulement maîtrisé. Un processus clair sert à réduire les zones grises, protéger la qualité et rendre le projet plus prévisible.",
          ]}
        />

        <ListSection
          aria-labelledby="pourquoi-details"
          heading=""
          items={[
            "Réduire les imprévus : moins de reprises, moins de décisions en urgence.",
            "Clarifier les responsabilités : qui fait quoi, à quel moment.",
            "Protéger la qualité : alignements, ajustements, finitions et durabilité.",
            "Améliorer l'expérience : un déroulement plus simple, plus prévisible.",
          ]}
          variant="bullets"
        />

        <ProcessSection
          aria-labelledby="etapes"
          heading="Les étapes du processus Dilamco"
          steps={[
            {
              step: "1",
              title: "Cadrage du projet",
              description: "On clarifie la portée (aménagement seulement vs rénovation), vos priorités, les contraintes (espace, circulation, intégrations) et votre échéance.",
            },
            {
              step: "2",
              title: "Design & planification",
              description: "On valide un plan fonctionnel et réaliste : circulation, dégagements, modules, intégrations, et décisions structurantes avant fabrication.",
            },
            {
              step: "3",
              title: "Choix des matériaux & finis",
              description: "On choisit selon l'usage (humidité, impacts, entretien) et le rendu recherché. Une solution durable dépend aussi des chants, de la quincaillerie et de l'installation.",
            },
            {
              step: "4",
              title: "Préparation & coordination (selon la portée)",
              description: "Si le projet inclut des travaux connexes, on planifie la séquence : démolition, plomberie, électricité, ventilation, murs/plancher, pour éviter les reprises et les délais.",
            },
            {
              step: "5",
              title: "Fabrication sur mesure",
              description: "La fabrication démarre lorsque le plan et les choix essentiels sont validés. L'objectif : cohérence, précision et qualité stable.",
            },
            {
              step: "6",
              title: "Installation, ajustements & finition",
              description: "L'installation et les ajustements sont déterminants : niveaux, alignements, jeux réguliers, réglages des portes/tiroirs, et finitions propres.",
            },
            {
              step: "7",
              title: "Inspection finale",
              description: "On valide le fonctionnement (portes/tiroirs), les alignements et les points de finition. L'objectif est un résultat propre, durable et cohérent avec le plan.",
            },
          ]}
        />

        <RelatedLinksSection
          aria-labelledby="etapes-links"
          heading="Ressources pour approfondir"
          links={[
            { label: "Service Design", href: "/services/design/" },
            { label: "Guide : choisir une cuisine sur mesure", href: "/guides/comment-choisir-cuisine-sur-mesure/" },
            { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
            { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
            { label: "Couleurs & finis", href: "/materiaux/couleurs/" },
            { label: "Rénovation clé en main", href: "/services/renovation/" },
            { label: "Guide : étapes d'une rénovation", href: "/guides/etapes-renovation-cuisine/" },
            { label: "Guide : erreurs fréquentes", href: "/guides/erreurs-renovation-cuisine/" },
            { label: "Service Fabrication", href: "/services/fabrication/" },
            { label: "Service Installation", href: "/services/installation/" },
          ]}
          columns={3}
        />

        <ProofSection
          aria-labelledby="ce-que-vous-recevez"
          heading="Ce que vous recevez"
          items={[
            {
              title: "Un plan clair",
              description: "Priorités, configuration et décisions structurantes.",
            },
            {
              title: "Des choix cohérents",
              description: "Matériaux, finis et quincaillerie adaptés à l'usage.",
            },
            {
              title: "Une exécution maîtrisée",
              description: "Fabrication et installation avec ajustements.",
            },
            {
              title: "Une finition propre",
              description: "Alignements, détails visibles, inspection finale.",
            },
          ]}
        />

        <TextSection
          aria-labelledby="ce-quon-vous-demande"
          heading="Ce qu'on vous demande (pour avancer vite)"
          paragraphs={[
            "Pour vous orienter efficacement, quelques informations suffisent :",
          ]}
        />

        <ListSection
          aria-labelledby="ce-quon-vous-demande-details"
          heading=""
          items={[
            "Votre secteur (Montréal / Laval / Rive-Sud).",
            "Le type d'espace (cuisine, salle de bain, walk-in, salle de lavage, commercial).",
            "La portée (aménagement seulement ou rénovation complète).",
            "Vos priorités (rangement, îlot, style, entretien, contraintes).",
            "Votre échéance (quand vous souhaitez démarrer).",
          ]}
          variant="bullets"
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — processus"
          items={faqItems.map((item: FAQItem) => ({
            question: item.q,
            answer: item.a,
          }))}
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

        <RelatedLinksSection
          aria-labelledby="liens"
          heading="Liens utiles"
          links={[
            { label: "Espaces", href: "/espaces/" },
            { label: "Services", href: "/services/" },
            { label: "Projets", href: "/projets/" },
            { label: "Matériaux", href: "/materiaux/" },
            { label: "Contact", href: "/contact/" },
          ]}
          columns={3}
        />
      </main>
    </>
  );
}
