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
        variant: "centered",
        props: {
          badges: ["Ouest-de-l'Île", "Montréal", "Laval"],
          heading: "Où nous travaillons, ville par ville",
          description:
            "Onze pages locales. Chacune dit le bâti du secteur, le service des permis concerné et la route depuis notre base.",
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
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description: "Notre base d'affaires",
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
              description: "Village patrimonial assujetti au PIIA",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description: "Règlement d'abattage d'arbres",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              description: "Résidentiel près de l'aéroport",
              ctaLabel: "Voir la zone",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              description: "Zones inondables cartographiées",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              description: "Plex d'après-guerre et copropriétés",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              description: "Bungalows des années 1960",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Vaudreuil-Dorion",
              href: "/zones/vaudreuil-dorion",
              description: "Sous-sols livrés bruts",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Rive-Sud",
              href: "/zones/rive-sud",
              description: "Mandats d'envergure seulement",
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
        variant: "fact-sheet",
        props: {
          heading: "Notre territoire, mesuré en minutes",
          intro:
            "Sur un chantier de plusieurs semaines, la distance décide de la vitesse à laquelle un problème se règle.",
          rows: [
            {
              label: "Base",
              value: "18625, rue Larocque, Pierrefonds-Roxboro",
            },
            {
              label: "Rayon",
              value: "Ouest-de-l'Île, Montréal, Laval, Vaudreuil-Soulanges, Rive-Sud",
            },
            {
              label: "Temps de route",
              value: "De 10 minutes sur l'île Bizard à une heure à Châteauguay",
            },
            {
              label: "Permis",
              value: "Un service d'urbanisme différent par ville et par arrondissement",
            },
            {
              label: "Premier retour",
              value: "24 à 48 heures ouvrables, visite et estimation gratuites",
            },
            {
              label: "Déplacement",
              value: "Chiffré dans la soumission, pas facturé en cours de route",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Chantier de rénovation suivi depuis notre base de Pierrefonds-Roxboro",
          },
          note: "Base d'affaires et licence vérifiées au registre RBQ le 2026-09-18.",
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
            "Ville, type de travaux, échéance. On confirme et on fixe la visite.",
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
          note: "Dilamco · 18625, rue Larocque, Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
