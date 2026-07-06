import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneLavalPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Armoires de cuisine sur mesure à Laval | Dilamco",
    description:
      "Armoires de cuisine, vanités et garde-robes sur mesure à Laval : prise de mesures à domicile, armoires directes de notre usine partenaire et installation par notre équipe, partout à Laval.",
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
      "Conception, fourniture et installation d'armoires de cuisine, de vanités de salle de bain et de garde-robes sur mesure à Laval, par Dilamco, concepteur-installateur d'armoires établi dans le Grand Montréal.",
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
            "Armoires de cuisine sur mesure à Laval, conçues et installées par Dilamco",
          description:
            "Cuisines, vanités de salle de bain et garde-robes sur mesure, conçues avec vous à partir de votre espace réel, fabriquées exclusivement pour Dilamco par notre usine partenaire et installées par notre équipe. Prise de mesures à domicile partout à Laval, et salle de montre à Dorval pour voir matériaux et finitions.",
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
          badges: ["Direct de l'usine", "Salle de montre à Dorval", "Laval"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "Cuisine haut de gamme blanche sur mesure réalisée à Laval",
          },
          caption: "Prise de mesures à domicile, partout à Laval",
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
            "Pourquoi des clients de Laval choisissent le direct usine plutôt qu'une grande surface",
          description:
            "À Laval, l'offre en armoires de cuisine est dominée par les salles de montre et les modules standard. Le vrai sur-mesure répond à un autre besoin : des espaces aux dimensions réelles de votre maison, des matériaux choisis, et un seul responsable du design à l'installation.",
          cards: [
            {
              title: "Direct de l'usine, sans intermédiaire",
              description:
                "Nos armoires sont fabriquées exclusivement pour Dilamco par notre usine partenaire, selon nos standards. Chaque caisson est ajusté à votre espace, pas l'inverse.",
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
          heading: "Ce qu'on fait sur mesure pour Laval",
          intro:
            "Le même savoir-faire s'applique à toutes les pièces de la maison : cuisine, salle de bain, chambre et rangements.",
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
              title: "Meubles intégrés sur mesure",
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
            "Pas besoin de vous déplacer : on vient prendre les mesures chez vous. Et si vous voulez voir matériaux, caissons et finitions, notre salle de montre de Dorval est à une demi-heure de Laval.",
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
              title: "Fabrication",
              description:
                "Vos armoires sont fabriquées par notre usine partenaire selon nos plans, avec contrôle qualité avant l'installation.",
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
            "Des projets concrets, de la même équipe qui s'occuperait du vôtre.",
          items: [
            {
              title: "Vanité sur mesure à Laval",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval",
              description:
                "Vanité de salle de bain fabriquée et installée pour une résidence de Laval.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Illustration 3D d'une vanité de salle de bain sur mesure",
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
                alt: "Illustration 3D d'un aménagement de cuisine sur mesure",
              },
              badges: ["Cuisine", "Sur mesure"],
              footerCtaLabel: "Voir l'espace cuisine",
            },
            {
              title: "Garde-robe sur mesure",
              href: "/espaces/walk-in",
              description:
                "Garde-robes et walk-ins sur mesure à Laval : prix, comparaison avec les systèmes modulaires et aménagement complet.",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Garde-robe et walk-in sur mesure à Laval",
              },
              badges: ["Garde-robe", "Walk-in"],
              footerCtaLabel: "Voir l'espace garde-robe",
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
              a: "Pas à Laval, mais tout près : notre salle de montre est à Dorval, à environ une demi-heure. Venez voir les caissons, les portes, les finitions et la quincaillerie sur rendez-vous. La prise de mesures, elle, se fait chez vous.",
            },
            {
              q: "Combien coûtent des armoires de cuisine sur mesure à Laval?",
              a: "Une cuisine complète sur mesure se situe généralement entre 30 000 $ et 65 000 $, selon le nombre de caissons, les matériaux et la complexité de l'agencement. La soumission détaillée est gratuite.",
            },
            {
              q: "Faites-vous aussi les vanités et les garde-robes?",
              a: "Oui. En plus des armoires de cuisine, nous faisons des vanités de salle de bain, des garde-robes sur mesure, des walk-in et des meubles intégrés. Nous avons d'ailleurs déjà livré des vanités sur mesure à Laval.",
            },
            {
              q: "Quel est le délai pour une cuisine sur mesure?",
              a: "Pour du sur mesure, comptez environ 9 à 15 semaines entre l'approbation des plans et l'installation, selon la période et la complexité du projet. Pour un projet à partir de nos armoires en stock, la livraison se fait en quelques jours.",
            },
            {
              q: "D'où viennent vos armoires?",
              a: "Elles sont fabriquées exclusivement pour Dilamco par notre usine partenaire, sans intermédiaire. Le design, la gestion de projet et l'installation sont faits par notre équipe locale, et le stock est tenu dans notre entrepôt de Rigaud.",
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
