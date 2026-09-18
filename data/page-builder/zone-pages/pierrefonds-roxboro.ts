// Page zone : Pierrefonds-Roxboro (arrondissement de Montréal).
// Sources consultées le 2026-09-18 :
// - Ville de Montréal, « Comptoir des permis – Pierrefonds-Roxboro » (13665, boul. de
//   Pierrefonds) : https://montreal.ca/lieux/comptoir-des-permis-pierrefonds-roxboro
// - Ville de Montréal, « Agrandissements et nouvelles constructions à Pierrefonds-Roxboro » :
//   https://montreal.ca/articles/agrandissements-et-nouvelles-constructions-pierrefonds-roxboro-108318
// - Ville de Montréal, « Crue printanière – Pierrefonds-Roxboro » (zones à risque, PPI,
//   sacs de sable) : https://montreal.ca/articles/crue-printaniere-pierrefonds-roxboro-4810
// - Banque d'information 311, « Pierrefonds-Roxboro – Construction, transformation ou
//   rénovation » : http://www1.ville.montreal.qc.ca/banque311/content/pierrefonds-roxboro-–-construction-transformation-ou-rénovation
// - Wikipédia, « Pierrefonds-Roxboro » (70 382 hab. en 2021, 27 km², statut bilingue,
//   parcs-nature Bois-de-Liesse, Cap-Saint-Jacques, Anse-à-l'Orme) :
//   https://fr.wikipedia.org/wiki/Pierrefonds-Roxboro
// - Wikipédia, « Inondations printanières de 2017 au Québec » (débordements de la rivière
//   des Prairies dès le 6 mai 2017) :
//   https://fr.wikipedia.org/wiki/Inondations_printanières_de_2017_au_Québec
// - Les inondations au Québec (UQAM), fiche Pierrefonds-Roxboro :
//   https://inondations.uqam.ca/loc/pierrefonds-roxboro-arrondissement/

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zonePierrefondsRoxboroPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Pierrefonds-Roxboro",
    description:
      "Entrepreneur général licencié RBQ basé rue Larocque à Pierrefonds-Roxboro : rénovation, sous-sol, agrandissement et reconstruction après sinistre.",
    path: "/zones/pierrefonds-roxboro",
    ogAlt: "Rénovation résidentielle à Pierrefonds-Roxboro par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    {
      name: "Pierrefonds-Roxboro",
      url: SITE.url + "/zones/pierrefonds-roxboro",
    },
  ],
  service: {
    name: "Entrepreneur général à Pierrefonds-Roxboro",
    description:
      "Rénovation résidentielle, aménagement de sous-sol, agrandissement et reconstruction après sinistre à Pierrefonds-Roxboro, par un entrepreneur général licencié RBQ établi dans l'arrondissement.",
    url: SITE.url + "/zones/pierrefonds-roxboro",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Pierrefonds-Roxboro",
      "Pierrefonds",
      "Roxboro",
      "Cap-Saint-Jacques",
      "Bois-de-Liesse",
      "Cloverdale",
      "Ouest-de-l'Île",
      "Montréal",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "Entrepreneur général à",
          heading: "Pierrefonds-Roxboro",
          description:
            "Notre bureau est rue Larocque, dans l'arrondissement où nous menons des chantiers résidentiels depuis 2004.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Rénovation résidentielle à Pierrefonds-Roxboro",
          },
          facts: [
            { label: "Notre base", value: "Rue Larocque, dans l'arrondissement" },
            { label: "Permis", value: "Comptoir du 13665, boul. de Pierrefonds" },
            { label: "Bâti", value: "Bungalows et cottages, 1950 à 1980" },
            { label: "Premier retour", value: "24 à 48 h ouvrables" },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Le terrain de jeu, rue par rue",
          intro:
            "Soixante-dix mille résidents sur vingt-sept kilomètres carrés, une rivière au nord et des sous-sols qui ont déjà pris l'eau.",
          rows: [
            {
              label: "Bâti dominant",
              value: "Split-levels et jumelés, dalles souvent non isolées",
            },
            {
              label: "Dépôt du dossier",
              value: "Plans par courriel, signature sur rendez-vous",
            },
            {
              label: "Agrandissement",
              value: "Marges et implantation validées par l'arrondissement",
            },
            {
              label: "Risque riverain",
              value: "Crues de la rivière des Prairies, 2017 et 2019",
            },
            {
              label: "Projets fréquents",
              value: "Sous-sol repris, après-sinistre, mur central ouvert",
            },
            {
              label: "Temps de route",
              value: "Sur place en dix minutes, toute l'année",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol fini dans un bungalow de Pierrefonds-Roxboro",
          },
          note: "Sources : Ville de Montréal, UQAM, Wikipédia. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on réalise dans l'arrondissement",
          items: [
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Clapet et pompe validés avant d'isoler, secteur riverain oblige",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Sous-sol aménagé en salle de jeux à Pierrefonds",
              },
              badges: ["Humidité"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Refoulement ou crue printanière, reconstruction documentée pour l'assureur",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Reconstruction après un dégât d'eau à Roxboro",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Mur central porteur des bungalows d'ici, poutre calculée d'abord",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine ouverte dans un bungalow de l'arrondissement",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir la cuisine",
            },
          ],
        },
      },
    },
    {
      id: "voisins",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Nos autres secteurs de l'Ouest-de-l'Île",
          columns: "2",
          items: [
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
            },
            {
              title: "Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
            },
            { title: "Kirkland", href: "/zones/kirkland" },
            { title: "Laval", href: "/zones/laval" },
          ],
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
              q: "Où obtient-on un permis de rénovation à Pierrefonds-Roxboro ?",
              a: "Au comptoir des permis de l'arrondissement, 13665, boulevard de Pierrefonds. Les plans partent par courriel et la signature se prend sur rendez-vous. Nous montons le dossier et suivons son cheminement.",
            },
            {
              q: "Mon sous-sol de Roxboro a été inondé, que vérifiez-vous ?",
              a: "Le drain, le clapet antiretour, la pompe submersible et l'état de la dalle, avant toute isolation. Après les crues de 2017 et de 2019, on retient des matériaux qui tolèrent une remontée d'eau.",
            },
            {
              q: "Combien de temps dure un chantier de sous-sol ici ?",
              a: "Quelques semaines pour une pièce simple, davantage quand le drainage doit être corrigé avant de refermer. Les dates de début et de livraison sont inscrites au contrat, pas promises à l'oral.",
            },
            {
              q: "Combien coûte un sous-sol de bungalow à Pierrefonds ?",
              a: "Un mandat démarre autour de 25 000 $, et une salle d'eau ajoutée au sous-sol fait monter la portée. Ce qu'on trouve sous la dalle décide du reste. Visite et estimation gratuites.",
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
          heading: "Rénover à Pierrefonds-Roxboro",
          intro: "Votre maison est à dix minutes de notre bureau.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les zones desservies",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Dilamco · 18625, rue Larocque, Pierrefonds-Roxboro",
        },
      },
    },
  ],
};
