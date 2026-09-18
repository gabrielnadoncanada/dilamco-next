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
        variant: "split-image",
        props: {
          eyebrow: "Pierrefonds-Roxboro",
          heading:
            "Entrepreneur général à Pierrefonds-Roxboro, du permis à la livraison",
          description:
            "Notre adresse d'affaires est rue Larocque, dans l'arrondissement. Licence RBQ 8306-0806-27, valide sans restriction depuis 2004.",
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
          badges: ["Depuis 2004", "Entrepreneur général", "Assuré"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Rénovation résidentielle à Pierrefonds-Roxboro",
          },
          caption: "Rue Larocque · Pierrefonds-Roxboro",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît de l'arrondissement",
          description:
            "Bungalows et cottages des années 1950 à 1980, une rivière qui déborde, un comptoir des permis d'arrondissement. Trois réalités de chantier.",
          cards: [
            {
              title: "Bungalows et split-levels",
              description:
                "Roxboro, Pierrefonds-Est, Cloverdale : dalles non isolées, panneaux sous-dimensionnés, murs centraux souvent porteurs.",
            },
            {
              title: "Permis d'arrondissement",
              description:
                "Comptoir des permis du 13665, boulevard de Pierrefonds. Plans transmis par courriel, signature sur rendez-vous.",
            },
            {
              title: "La rivière des Prairies",
              description:
                "Crues de 2017 et 2019 : drain, clapet antiretour et pompe validés avant de finir un sous-sol.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on réalise ici",
          items: [
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Drain, clapet et pompe vérifiés avant d'isoler et de finir.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol aménagé à Pierrefonds-Roxboro",
              },
              badges: ["Humidité"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Dégât d'eau ou refoulement : reconstruction conforme, une fois l'assèchement terminé.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Reconstruction après un dégât d'eau",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Mur porteur ouvert, plomberie et panneau électrique mis à niveau.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine rénovée dans un bungalow de l'Ouest-de-l'Île",
              },
              badges: ["Clé en main"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Étanchéité refaite avant la céramique, ventilation sortie vers l'extérieur.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Salle de bain rénovée avec douche en céramique",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge, ajout d'étage ou garage converti, permis inclus.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement arrière d'une maison unifamiliale",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le service",
            },
          ],
        },
      },
    },
    {
      id: "preuves",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Un entrepreneur établi dans l'arrondissement",
          intro:
            "Licence vérifiable, assurances en vigueur, budget et échéancier écrits au contrat.",
          badges: ["Depuis 2004", "5,0 sur Google", "Assuré"],
          cardTitle: "Ce qui est vérifiable",
          items: [
            "Licence RBQ 8306-0806-27 depuis le 7 septembre 2004",
            "Catégories entrepreneur général 1.2 et 1.3",
            "Aucune réclamation au dossier de licence",
            "Responsabilité civile et couverture chantier",
            "Base rue Larocque, à quelques minutes",
            "Armoires sur mesure au même contrat",
          ],
          actions: [
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "primary",
            },
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Villes voisines desservies",
          columns: "3",
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
              q: "Faut-il un permis pour rénover à Pierrefonds-Roxboro ?",
              a: "Presque toujours, dès qu'on touche à la structure, à l'enveloppe, à la plomberie ou à l'électricité. Le permis vient de l'arrondissement, au comptoir du 13665, boulevard de Pierrefonds. Nous montons et déposons le dossier.",
            },
            {
              q: "Mon sous-sol a été inondé. Pouvez-vous le refaire ?",
              a: "Oui. Avant la finition, on valide le drain, le clapet antiretour, la pompe submersible et l'état de la dalle. En secteur riverain, on choisit des matériaux qui tolèrent l'humidité.",
            },
            {
              q: "Combien coûte une rénovation ?",
              a: "Nos mandats démarrent autour de 25 000 $. Une cuisine complète se situe généralement entre 35 000 $ et 50 000 $. Estimation gratuite, prix ferme fixé au contrat après la visite.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Licence RBQ 8306-0806-27, délivrée le 7 septembre 2004, valide sans restriction, catégories 1.2 et 1.3, aucune réclamation au dossier. Responsabilité civile et couverture chantier. Vérifiable au registre de la Régie du bâtiment.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non. Rénovation, transformation, agrandissement, reconstruction après sinistre et aménagement commercial. Nous ne construisons pas de maisons neuves, le plan de garantie GCR ne s'applique donc pas.",
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
            "On se déplace, on regarde la maison, on revient avec une portée écrite et un prix.",
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
          note: "Dilamco · 18625, rue Larocque, Pierrefonds-Roxboro · RBQ 8306-0806-27",
        },
      },
    },
  ],
};
