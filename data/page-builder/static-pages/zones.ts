// Page hub : zones desservies.
// Territoire et base d'affaires confirmés au registre RBQ et à la fiche d'entreprise
// (18625, rue Larocque, Pierrefonds-Roxboro, QC H9K 1P1).
// Licence RBQ 8306-0806-27 : valide, sans restriction, délivrée le 2004-09-07,
// catégories entrepreneur général 1.2 et 1.3. Registre consulté le 2026-09-18 :
// https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/8306080627

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Zones desservies — Ouest-de-l'Île, Montréal, Laval",
    description:
      "Entrepreneur général basé à Pierrefonds-Roxboro : Ouest-de-l'Île, Montréal, Laval, Vaudreuil-Soulanges et Rive-Sud sur demande. Voir les zones desservies.",
    path: "/zones",
    ogAlt: "Zones desservies par Dilamco, entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
  ],
  service: {
    name: "Entrepreneur général — zones desservies",
    description:
      "Rénovation résidentielle et commerciale par un entrepreneur général licencié RBQ basé à Pierrefonds-Roxboro, actif dans l'Ouest-de-l'Île, à Montréal, à Laval et dans Vaudreuil-Soulanges.",
    url: SITE.url + "/zones",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Ouest-de-l'Île",
      "Montréal",
      "Laval",
      "Vaudreuil-Soulanges",
      "Rive-Sud",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Zones desservies",
          heading:
            "Entrepreneur général dans l'Ouest-de-l'Île et le Grand Montréal",
          description:
            "Base à Pierrefonds-Roxboro. Onze pages de zones, du permis municipal à la livraison.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Licence RBQ", "Depuis 2004", "Ouest-de-l'Île"],
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Projet de rénovation réalisé par Dilamco dans l'Ouest-de-l'Île",
          },
          caption: "Base : Pierrefonds-Roxboro, Montréal",
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Les zones que nous desservons",
          intro:
            "Une page par ville : parc immobilier local, service des permis concerné et FAQ municipale.",
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description: "Notre base, bungalows et cottages 1950-1980",
              badges: ["Base"],
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "Zonage refondu en 2025",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description: "Grands terrains, agrandissements majeurs",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description: "Village patrimonial et dossiers assujettis au PIIA",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description: "Zonage 720 et règlement d'abattage",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              description: "Résidentiel et commercial près de l'aéroport",
              ctaLabel: "Voir la zone",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              description: "Maisons riveraines, terrains larges",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              description: "Plex et bungalows d'après-guerre",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              description: "De Chomedey à Sainte-Rose",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Vaudreuil-Dorion",
              href: "/zones/vaudreuil-dorion",
              description: "Vaudreuil-Soulanges, secteurs en développement",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Rive-Sud",
              href: "/zones/rive-sud",
              description: "Longueuil, Brossard, Saint-Lambert et environs",
              ctaLabel: "Voir la zone",
            },
          ],
        },
      },
    },
    {
      id: "territoire",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Comment se dessine notre territoire",
          description:
            "Sur un chantier de plusieurs semaines, la distance décide de la vitesse à laquelle un problème se règle.",
          cards: [
            {
              title: "Ouest-de-l'Île",
              description:
                "Moins de vingt minutes depuis la base, suivi de chantier serré.",
            },
            {
              title: "Montréal, Laval, Vaudreuil-Soulanges",
              description:
                "Territoire régulier, même méthode, service d'urbanisme validé au cadrage.",
            },
            {
              title: "Rive-Sud et au-delà",
              description:
                "Au cas par cas, selon la portée du projet et la période.",
            },
          ],
          columns: "3",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions fréquentes",
          items: [
            {
              q: "Quel territoire desservez-vous exactement ?",
              a: "Notre cœur de territoire est l'Ouest-de-l'Île, depuis notre base du 18625, rue Larocque, à Pierrefonds-Roxboro. On travaille régulièrement ailleurs sur l'île de Montréal, à Laval et dans Vaudreuil-Soulanges. La Rive-Sud s'évalue au cas par cas.",
            },
            {
              q: "Facturez-vous des frais de déplacement ?",
              a: "La visite et l'estimation sont gratuites dans nos zones desservies. Plus loin, le déplacement est intégré à la soumission plutôt que facturé à part en cours de chantier. Tout est écrit au contrat avant le début des travaux.",
            },
            {
              q: "Ma ville n'apparaît pas dans la liste. Travaillez-vous chez moi ?",
              a: "Peut-être. La liste couvre les municipalités où on intervient le plus souvent, pas les seules où on accepte des mandats. Écrivez-nous avec la ville et la nature du projet ; on répond franchement si ce n'est pas un mandat pour nous.",
            },
            {
              q: "Vous occupez-vous du permis dans chaque ville ?",
              a: "Oui. Chaque ville et chaque arrondissement a son service d'urbanisme, ses règlements et son processus. On monte et on dépose le dossier dans le cadre du mandat, et le délai de traitement entre dans l'échéancier.",
            },
          ],
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Dites-nous où est votre projet",
          intro:
            "Ville, type de travaux, échéance. On confirme rapidement et on fixe la visite.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "Dilamco · 18625, rue Larocque, Pierrefonds-Roxboro · RBQ 8306-0806-27",
        },
      },
    },
  ],
};
