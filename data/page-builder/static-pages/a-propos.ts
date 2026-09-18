import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Entrepreneur général licencié depuis 2004 — À propos",
    description:
      "Dilamco, entrepreneur général en rénovation résidentielle depuis 2004. Licence RBQ 8306-0806-27, base à Pierrefonds-Roxboro, Ouest-de-l'Île.",
    path: "/a-propos",
    ogAlt: "L'équipe et l'approche de chantier de Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "À propos", url: SITE.url + "/a-propos" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "À propos",
          heading:
            "Entrepreneur général en rénovation résidentielle depuis 2004",
          description:
            "Licence RBQ délivrée en 2004, toujours valide et sans restriction. Base à Pierrefonds-Roxboro, chantiers dans le Grand Montréal.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["RBQ 8306-0806-27", "Depuis 2004", "Pierrefonds-Roxboro"],
          image: {
            src: "/images/realisations/escalier-rampe-verre-finition-interieure-01.webp",
            alt: "Escalier et rampe de verre : finition intérieure réalisée par Dilamco",
          },
          caption: "9139-1250 Québec inc. · Pierrefonds-Roxboro",
        },
      },
    },
    {
      id: "structural-advantage",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qui tient un chantier",
          description:
            "Un chantier déraille entre les intervenants, pas sur un choix de céramique. Nous réduisons le nombre de transferts.",
          cards: [
            {
              title: "Séquence planifiée",
              description:
                "Les métiers entrent dans l'ordre, chaque étape inspectée avant la suivante.",
            },
            {
              title: "Un seul responsable",
              description:
                "Nous engageons les corps de métier et répondons du travail livré.",
            },
            {
              title: "Engagements écrits",
              description:
                "Portée, prix, exclusions et échéancier au contrat. Tout changement passe par un avenant chiffré.",
            },
          ],
          columns: "3",
        },
      },
    },
    {
      id: "licence",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Licence, assurances et garantie",
          intro:
            "Tout est vérifiable au registre de la Régie du bâtiment du Québec.",
          columns: "2",
          items: [
            {
              title: "Licence RBQ 8306-0806-27",
              description:
                "Entrepreneur général, délivrée le 7 septembre 2004, sans restriction.",
              icon: "fileCheck",
              bullets: [
                "Catégorie 1.2, petits bâtiments",
                "Catégorie 1.3, bâtiments de tout genre",
                "Sous-catégorie 12, armoires et comptoirs",
              ],
            },
            {
              title: "Cautionnement et dossier",
              description:
                "Le cautionnement protège le client en cas de défaut.",
              icon: "shieldCheck",
              bullets: [
                "Cautionnement de 40 000 $ à la FACCQ",
                "Aucune réclamation au dossier",
                "Répondant : Sean Diffley",
              ],
            },
            {
              title: "Assurances en vigueur",
              description: "Attestations fournies avant la signature.",
              icon: "hardHat",
              bullets: [
                "Responsabilité civile",
                "Couverture de chantier pendant les travaux",
                "Attestations sur demande",
              ],
            },
            {
              title: "Garantie des travaux",
              description: "Portée et durée inscrites au contrat.",
              icon: "clipboardCheck",
              bullets: [
                "Déficiences corrigées avant le paiement final",
                "Conformité au Code de construction du Québec",
                "Pas de maisons neuves, donc pas de GCR",
              ],
            },
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
              q: "Depuis quand Dilamco existe ?",
              a: "La licence d'entrepreneur général a été délivrée le 7 septembre 2004 et n'a jamais été interrompue. Raison sociale : 9139-1250 Québec inc., aussi connue sous « Construction Dilamco ».",
            },
            {
              q: "Où êtes-vous situés ?",
              a: "Au 18625, rue Larocque, à Pierrefonds-Roxboro. Nous couvrons l'Ouest-de-l'Île, Montréal, Laval, la Rive-Sud et Vaudreuil-Soulanges.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non. Notre licence couvre la rénovation, la transformation, l'agrandissement et la reconstruction après sinistre. Le plan de garantie GCR ne s'applique donc pas.",
            },
            {
              q: "Fabriquez-vous vos armoires ?",
              a: "Non. La sous-catégorie 12 de notre licence couvre les armoires et comptoirs : nous concevons, coordonnons et installons. Les armoires sont fournies par notre usine partenaire.",
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
          heading: "Parlons de votre projet",
          intro: "Estimation gratuite. Premier retour sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir notre processus",
              href: "/processus",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · 18625, rue Larocque, Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
