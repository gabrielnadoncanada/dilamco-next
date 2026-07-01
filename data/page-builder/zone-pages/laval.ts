import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneLavalPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Armoires de cuisine sur mesure à Laval | Ébéniste Dilamco",
    description:
      "Armoires de cuisine, vanités et garde-robes sur mesure à Laval : fabrication en atelier par un ébéniste-cuisiniste, prise de mesures à domicile et installation dans tous les quartiers — Chomedey, Sainte-Rose, Fabreville, Vimont, Duvernay.",
    path: "/zones/laval",
    ogAlt: "Armoires de cuisine sur mesure à Laval — Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Armoires de cuisine à Laval", url: SITE.url + "/zones/laval" },
  ],
  service: {
    name: "Armoires de cuisine sur mesure à Laval",
    description:
      "Conception, fabrication et installation d'armoires de cuisine, de vanités de salle de bain et de garde-robes sur mesure à Laval, par un ébéniste-cuisiniste établi dans le Grand Montréal.",
    url: SITE.url + "/zones/laval",
    serviceType: "Armoires de cuisine sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Laval",
          heading:
            "Armoires de cuisine sur mesure à Laval, fabriquées par un ébéniste d'ici",
          description:
            "Cuisines, vanités de salle de bain et garde-robes sur mesure, conçues avec vous et fabriquées dans notre atelier du Grand Montréal, à une vingtaine de minutes de Laval. Prise de mesures à domicile, fabrication contrôlée en atelier et installation soignée, dans tous les quartiers de Laval.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos cuisines sur mesure",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          badges: ["Ébéniste-cuisiniste", "Fabrication en atelier", "Laval"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "Cuisine haut de gamme blanche sur mesure réalisée à Laval",
          },
          caption:
            "Chomedey, Sainte-Rose, Fabreville, Vimont, Duvernay, Sainte-Dorothée et tout Laval",
        },
      },
    },
    {
      id: "pourquoi",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Pourquoi des clients de Laval choisissent un ébéniste plutôt qu'une grande surface",
          description:
            "À Laval, l'offre en armoires de cuisine est dominée par les salles de montre et les modules standard. Le sur-mesure d'atelier répond à un autre besoin : des espaces aux dimensions réelles de votre maison, des matériaux choisis, et un seul responsable du design à l'installation.",
          cards: [
            {
              title: "Fabricant, pas revendeur",
              description:
                "Vos armoires sont fabriquées dans notre atelier, pas commandées d'un catalogue. Chaque caisson est ajusté à votre espace, pas l'inverse.",
            },
            {
              title: "Un seul interlocuteur",
              description:
                "Design, fabrication et installation par la même équipe. Pas de zone grise entre le vendeur, l'usine et l'installateur.",
            },
            {
              title: "Matériaux assumés",
              description:
                "Contreplaqué de bouleau pour les caissons, bois massif pour les tiroirs, quincaillerie éprouvée. On vous montre ce qu'il y a derrière les portes.",
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
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qu'on fabrique sur mesure pour Laval",
          intro:
            "Le même savoir-faire d'ébénisterie s'applique à toutes les pièces de la maison : cuisine, salle de bain, chambre et rangements.",
          columns: "2",
          items: [
            {
              title: "Armoires de cuisine",
              description:
                "Cuisines complètes sur mesure : caissons, façades, îlot, garde-manger et armoires jusqu'au plafond.",
              icon: "package2",
              bullets: [
                "Agencement pensé pour votre espace réel, pas des modules standard.",
                "Coordination du comptoir de cuisine et de la quincaillerie.",
                "Finitions au choix : bois, placage, laqué, mélamine haut de gamme.",
              ],
            },
            {
              title: "Vanités de salle de bain",
              description:
                "Vanités sur mesure adaptées à la plomberie et aux dimensions exactes de votre salle de bain.",
              icon: "doorOpen",
              bullets: [
                "Rangement optimisé même dans les petites salles de bain.",
                "Matériaux résistants à l'humidité.",
                "Projet déjà livré à Laval — voyez-le dans nos réalisations.",
              ],
            },
            {
              title: "Garde-robes et walk-in",
              description:
                "Garde-robes sur mesure, walk-in et rangements intégrés pour les chambres et les entrées.",
              icon: "slidersHorizontal",
              bullets: [
                "Aménagement complet : tringles, tiroirs, tablettes ajustables.",
                "Du simple placard réorganisé au walk-in complet.",
                "Fabrication assortie au reste de la maison.",
              ],
            },
            {
              title: "Ébénisterie sur mesure",
              description:
                "Meubles intégrés, bibliothèques, unités murales et aménagements que les catalogues n'offrent pas.",
              icon: "wrench",
              bullets: [
                "Meubles de salon, bureaux et bibliothèques intégrées.",
                "Salles de lavage et rangements de sous-sol.",
                "Conception adaptée aux contraintes du bâtiment.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "processus",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Un projet à Laval, étape par étape",
          intro:
            "Pas besoin de vous déplacer : on vient prendre les mesures chez vous, et l'atelier est à une vingtaine de minutes pour ceux qui veulent voir la fabrication.",
          steps: [
            {
              number: "1",
              title: "Consultation",
              description:
                "On discute de votre projet, de vos besoins et de votre budget, par téléphone ou en visite.",
            },
            {
              number: "2",
              title: "Mesures à domicile",
              description:
                "Prise de mesures précise chez vous, partout à Laval.",
            },
            {
              number: "3",
              title: "Design et soumission",
              description:
                "Plans, choix des matériaux et soumission détaillée, sans surprise.",
            },
            {
              number: "4",
              title: "Fabrication en atelier",
              description:
                "Vos armoires sont fabriquées dans notre atelier du Grand Montréal.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Installation propre et ajustements finaux par notre équipe.",
            },
          ],
        },
      },
    },
    {
      id: "realisations",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Réalisations livrées à Laval et dans le Grand Montréal",
          intro:
            "Des projets concrets, du même atelier et de la même équipe qui s'occuperaient du vôtre.",
          items: [
            {
              title: "Vanité sur mesure à Laval",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval",
              description:
                "Vanité de salle de bain fabriquée et installée pour une résidence de Laval.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Vanité de salle de bain sur mesure installée à Laval",
              },
              badges: ["Laval", "Salle de bain"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine haut de gamme blanche",
              href: "/projets/cuisine",
              description:
                "Cuisine sur mesure aux armoires laquées blanches, réalisée pour une propriété de Laval.",
              image: {
                src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
                alt: "Armoires de cuisine laquées blanches sur mesure à Laval",
              },
              badges: ["Laval", "Cuisine"],
              footerCtaLabel: "Voir nos cuisines",
            },
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine",
              description:
                "Notre approche complète de la cuisine sur mesure : agencement, matériaux, fabrication.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure fabriquée en atelier",
              },
              badges: ["Cuisine", "Sur mesure"],
              footerCtaLabel: "Voir l'espace cuisine",
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
          heading: "FAQ - armoires de cuisine sur mesure à Laval",
          intro:
            "Les questions qu'on nous pose le plus souvent par des clients de Laval.",
          items: [
            {
              q: "Desservez-vous tous les quartiers de Laval?",
              a: "Oui. Nous intervenons partout à Laval : Chomedey, Sainte-Rose, Fabreville, Vimont, Auteuil, Duvernay, Laval-des-Rapides, Pont-Viau, Sainte-Dorothée et Laval-Ouest. La prise de mesures se fait à votre domicile.",
            },
            {
              q: "Avez-vous une salle de montre à Laval?",
              a: "Non — et c'est voulu. Nous sommes un atelier de fabrication, pas une salle de montre : vous rencontrez directement les gens qui fabriquent vos armoires. L'atelier est dans le Grand Montréal, à une vingtaine de minutes de Laval, et se visite sur rendez-vous.",
            },
            {
              q: "Combien coûtent des armoires de cuisine sur mesure à Laval?",
              a: "Une cuisine complète sur mesure se situe généralement entre 20 000 $ (rafraîchissement, agencement simple) et 35 000 $ à 50 000 $ et plus pour un projet complet haut de gamme. Le prix dépend du nombre de caissons, des matériaux et de la complexité de l'agencement. La soumission détaillée est gratuite.",
            },
            {
              q: "Faites-vous aussi les vanités et les garde-robes?",
              a: "Oui. En plus des armoires de cuisine, nous fabriquons des vanités de salle de bain, des garde-robes sur mesure, des walk-in et des meubles intégrés. Nous avons d'ailleurs déjà livré des vanités sur mesure à Laval.",
            },
            {
              q: "Quel est le délai pour une cuisine sur mesure?",
              a: "Comptez généralement de 6 à 10 semaines entre l'approbation des plans et l'installation, selon la période et la complexité du projet. La fabrication en atelier nous donne un contrôle direct sur l'échéancier.",
            },
            {
              q: "Êtes-vous fabricant ou revendeur?",
              a: "Fabricant. Dilamco est un atelier d'ébénisterie : vos armoires sont conçues, fabriquées et installées par la même équipe. Aucun intermédiaire entre vous et la fabrication.",
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
          heading: "Un projet d'armoires ou de cuisine sur mesure à Laval?",
          intro:
            "Parlez-nous de votre projet : on vous rappelle, on prend les mesures chez vous et on vous remet une soumission détaillée, sans engagement.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "Armoires de cuisine, vanités et garde-robes sur mesure — Laval et le Grand Montréal",
        },
      },
    },
  ],
};
