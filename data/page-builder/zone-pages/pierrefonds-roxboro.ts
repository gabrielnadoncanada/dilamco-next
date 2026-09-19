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
            "Rénovation, sous-sol et reconstruction après dégât d'eau pour les maisons de l'arrondissement, depuis notre bureau de la rue Larocque.",
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
            {
              label: "Notre base",
              value: "Notre bureau est rue Larocque, dans l'arrondissement",
            },
            {
              label: "Où demander le permis",
              value: "Comptoir des permis, 13665, boul. de Pierrefonds",
            },
            {
              label: "Type de maisons",
              value: "Des bungalows et des cottages bâtis entre 1950 et 1980",
            },
            {
              label: "Premier retour",
              value: "Un premier retour en 24 à 48 heures ouvrables",
            },
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
          heading: "Ce qu'il faut savoir avant de rénover ici",
          rows: [
            {
              label: "Risque local",
              value:
                "La rivière des Prairies a débordé en 2017 et en 2019, et les sous-sols riverains ont écopé.",
            },
            {
              label: "Particularité locale",
              value:
                "Beaucoup de split-levels reposent sur une dalle qui n'a jamais été isolée.",
            },
            {
              label: "Ce que la Ville vérifie",
              value:
                "Pour un agrandissement, l'arrondissement valide les marges et la position du bâtiment sur le terrain.",
            },
            {
              label: "Projets courants",
              value:
                "Reprendre un sous-sol, rebâtir après un dégât d'eau, ouvrir le mur central d'un bungalow.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol fini dans un bungalow de Pierrefonds-Roxboro",
          },
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Nos services à Pierrefonds-Roxboro",
          items: [
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "On valide le clapet et la pompe avant d'isoler, parce que le secteur est riverain",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Sous-sol aménagé en salle de jeux à Pierrefonds",
              },
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "On rebâtit après un refoulement ou une crue, avec un dossier pour l'assureur",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Reconstruction après un dégât d'eau à Roxboro",
              },
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "On calcule la poutre avant d'ouvrir le mur central d'un bungalow",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine ouverte dans un bungalow de l'arrondissement",
              },
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
          heading: "Aussi desservies près de Pierrefonds-Roxboro",
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
          heading: "Questions fréquentes à Pierrefonds-Roxboro",
          items: [
            {
              q: "Où obtient-on un permis de rénovation à Pierrefonds-Roxboro ?",
              a: "Au comptoir des permis de l'arrondissement, 13665, boulevard de Pierrefonds. Les plans partent par courriel et la signature se prend sur rendez-vous. Nous montons le dossier et nous suivons son avancement.",
            },
            {
              q: "Mon sous-sol de Roxboro a été inondé, que vérifiez-vous d'abord ?",
              a: "Le drain, le clapet antiretour, la pompe et l'état de la dalle, avant toute isolation. Après les crues de 2017 et de 2019, nous posons des matériaux qui supportent une remontée d'eau.",
            },
            {
              q: "Combien de temps dure un chantier de sous-sol dans l'arrondissement ?",
              a: "Quelques semaines pour une pièce simple, plus longtemps s'il faut corriger le drainage avant de refermer les murs. La date de début et la date de fin sont écrites au contrat.",
            },
            {
              q: "Combien coûte l'aménagement d'un sous-sol de bungalow ici ?",
              a: "Un mandat démarre autour de 25 000 $, et ajouter une salle d'eau fait monter le total. Ce qu'on trouve sous la dalle décide du reste. La visite et l'estimation sont gratuites.",
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
          heading: "Un projet à Pierrefonds-Roxboro ?",
          intro:
            "Notre bureau est à dix minutes de chez vous et la visite ne coûte rien.",
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
        },
      },
    },
  ],
};
