import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const cuisinePage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Armoires de cuisine sur mesure à Pierrefonds",
    description:
      "Armoires de cuisine sur mesure à Pierrefonds et dans le Grand Montréal, conçues, fournies et posées par Dilamco, entrepreneur général licencié RBQ.",
    path: "/espaces/cuisine",
    ogAlt: "Cuisine sur mesure et armoires de cuisine Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Cuisine sur mesure", url: SITE.url + "/espaces/cuisine" },
  ],
  service: {
    name: "Cuisine sur mesure et armoires de cuisine",
    description:
      "Conception, fabrication contrôlée et installation de cuisines sur mesure et d'armoires de cuisine sur mesure haut de gamme à Pierrefonds-Roxboro, dans l'Ouest-de-l'Île, à Montréal, Laval et dans le Grand Montréal.",
    url: SITE.url + "/espaces/cuisine",
    serviceType: "Cuisine sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Cuisine",
          heading: "Armoires de cuisine sur mesure, posées par votre entrepreneur",
          description:
            "Conçues aux dimensions réelles de la pièce et intégrées au chantier. Un fournisseur de moins, une seule soumission.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos cuisines",
              href: "/projets/cuisine",
              variant: "ghost",
            },
          ],
          badges: ["Sur mesure", "Division armoires"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "Armoires de cuisine sur mesure haut de gamme à Pierrefonds",
          },
          caption: "Pierrefonds · Ouest-de-l'Île · Grand Montréal",
        },
      },
    },
    {
      id: "composition",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que comprend le mandat",
          columns: "2",
          items: [
            {
              title: "Îlot et plan de travail",
              description: "Proportions ajustées à la circulation réelle.",
              icon: "package2",
              bullets: [
                "Rangement et prises intégrés",
                "Débord calculé pour le coin repas",
              ],
            },
            {
              title: "Rangement et garde-manger",
              description: "Pensé pour l'usage quotidien, pas ajouté après coup.",
              icon: "doorOpen",
              bullets: [
                "Tiroirs profonds et espaces dédiés",
                "Accès direct aux zones de cuisson",
              ],
            },
            {
              title: "Armoires jusqu'au plafond",
              description: "Toute la hauteur du mur utilisée, sans vide au-dessus.",
              icon: "slidersHorizontal",
              bullets: [
                "Hauteurs ajustées à la pièce",
                "Plus de rangement, moins de poussière",
              ],
            },
            {
              title: "Design, commande et pose",
              description: "Une seule équipe, du plan à l'ajustement final.",
              icon: "wrench",
              bullets: [
                "Mesures prises après la démolition",
                "Ajustements vérifiés sur place",
              ],
            },
          ],
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Cuisines récentes",
          items: [
            {
              title: "Cuisine sur mesure, Pierrefonds",
              href: "/projets/cuisine/cuisine-sur-mesure-pierrefonds",
              description: "Implantation précise et finition soignée dans l'Ouest-de-l'Île.",
              image: {
                src: "/images/projects/chene-moderne.webp",
                alt: "Projet d'armoires de cuisine sur mesure à Pierrefonds",
              },
              badges: ["Pierrefonds"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure, Montréal",
              href: "/projets/cuisine/cuisine-sur-mesure-montreal",
              description: "Armoires jusqu'au plafond et îlot central.",
              image: {
                src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
                alt: "Projet de cuisine sur mesure à Montréal",
              },
              badges: ["Montréal"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure, Rive-Sud",
              href: "/projets/cuisine/cuisine-sur-mesure-rive-sud",
              description: "Rénovation complète de la pièce, armoires incluses.",
              image: {
                src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
                alt: "Projet de cuisine sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud"],
              footerCtaLabel: "Voir le projet",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce qu'il y a sous la finition",
          intro: "La durabilité se joue sur les composantes qu'on ne voit plus une fois la cuisine posée.",
          items: [
            {
              title: "Tiroirs en bois massif",
              description: "Bouleau massif, assemblage qui tient la charge",
            },
            {
              title: "Fonds en contreplaqué",
              description: "Contreplaqué de bouleau, pas de panneau de particules",
            },
            {
              title: "Finis et quincaillerie",
              description: "Choisis pour l'entretien et l'usage quotidien",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/spaces/cabinet-cuisines.webp",
            alt: "Détail de matériaux pour cuisine sur mesure",
          },
          cardTitle: "Pourquoi ça compte",
          cardDescription: "Une bonne structure évite les remplacements prématurés.",
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
              q: "Combien coûtent des armoires de cuisine sur mesure ?",
              a: "Comptez généralement de 30 000 $ à 65 000 $ selon les dimensions, la complexité de l'aménagement, les finis et la coordination requise. Le prix ferme est fixé après le relevé sur place, dans la soumission détaillée.",
            },
            {
              q: "Quel est le délai ?",
              a: "De 9 à 15 semaines entre la validation du design et l'installation finale. Quand les armoires font partie d'une rénovation complète, la commande est lancée pour arriver au bon moment dans l'échéancier du chantier.",
            },
            {
              q: "Quelle est la différence avec des armoires standard ?",
              a: "Les modules standards sont vendus en dimensions fixes, ce qui laisse des espaces perdus et des hauteurs mal exploitées. Chaque caisson sur mesure est dimensionné pour votre pièce, jusqu'au plafond si nécessaire.",
            },
            {
              q: "Quels matériaux utilisez-vous ?",
              a: "Tiroirs en bouleau massif, fonds en contreplaqué de bouleau, quincaillerie à fermeture amortie. Les portes, les finis et les comptoirs sont choisis avec vous avant la commande.",
            },
            {
              q: "Pouvez-vous faire la rénovation complète de la cuisine ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27 : permis, démolition, plomberie, électricité, plancher, peinture et pose des armoires, coordonnés par un seul responsable. Échéancier et budget fixés au contrat écrit.",
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
          heading: "Parlez-nous de votre projet de cuisine",
          intro: "Estimation gratuite. Premier retour sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos cuisines",
              href: "/projets/cuisine",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
