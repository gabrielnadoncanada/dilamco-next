import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationCuisinePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de cuisine à Montréal — clé en main",
    description:
      "Rénovation de cuisine complète : démolition, plomberie, électricité, ventilation, armoires, comptoirs. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/cuisine",
    ogAlt: "Rénovation de cuisine complète par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation de cuisine",
      url: SITE.url + "/services/renovation/cuisine",
    },
  ],
  service: {
    name: "Rénovation de cuisine",
    description:
      "Rénovation de cuisine complète par un entrepreneur général : permis, démolition, plomberie, électricité, ventilation, planchers, armoires sur mesure, comptoirs et finition.",
    url: SITE.url + "/services/renovation/cuisine",
    serviceType: "Rénovation de cuisine",
    areaServed: [
      "Montréal",
      "Ouest-de-l'Île",
      "Laval",
      "Rive-Sud",
      "Vaudreuil-Soulanges",
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
          eyebrow: "Rénovation de cuisine",
          heading: "Une cuisine remise à neuf, du drain au comptoir",
          description:
            "Démolition, plomberie, électricité, ventilation, armoires et comptoir menés par la même équipe.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Permis déposé", "Métiers coordonnés", "Prix ferme"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Cuisine rénovée par un entrepreneur général à Montréal",
          },
          imageSide: "left",
          caption: "Cuisines livrées dans le Grand Montréal",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Quatre postes, un seul contrat",
          intro: "Les exclusions sont listées dans la soumission.",
          columns: "2",
          items: [
            {
              title: "Démolition et protection",
              description: "Le chantier ouvert proprement",
              icon: "hammer",
              bullets: [
                "Armoires, comptoir et revêtements retirés",
                "Planchers et corridors protégés chaque jour",
                "Conteneur et évacuation des débris",
              ],
            },
            {
              title: "Plomberie et électricité",
              description: "Repris avant de refermer les murs",
              icon: "wrench",
              bullets: [
                "Évier, lave-vaisselle et réfrigérateur raccordés",
                "Circuits d'îlot et prises de comptoir",
                "Hotte évacuée dehors, puis inspection",
              ],
            },
            {
              title: "Armoires et comptoir",
              description: "Fournis et posés dans le même mandat",
              icon: "package2",
              bullets: [
                "Armoires venues de notre usine partenaire",
                "Comptoir gabarié, découpé, posé",
                "Portes et tiroirs ajustés à la livraison",
              ],
            },
            {
              title: "Surfaces et finition",
              description: "Ce que l'oeil voit en entrant",
              icon: "layers",
              bullets: [
                "Sous-plancher corrigé et mis à niveau",
                "Dosseret, gypse, joints et peinture",
                "Moulures, éclairage et quincaillerie",
              ],
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "La séquence d'une cuisine",
          steps: [
            {
              number: "1",
              title: "Relevé et soumission",
              description:
                "Dimensions, panneau électrique, drain et structure vérifiés sur place.",
            },
            {
              number: "2",
              title: "Démolition",
              description:
                "Retrait des armoires, du comptoir et des anciens revêtements.",
            },
            {
              number: "3",
              title: "Mécanique",
              description:
                "Drains, alimentation, circuits et sortie de hotte repris.",
            },
            {
              number: "4",
              title: "Armoires et comptoir",
              description:
                "Caissons posés, gabarit du comptoir, découpe de l'évier.",
            },
            {
              number: "5",
              title: "Finition",
              description:
                "Dosseret, peinture, électroménagers branchés, portes ajustées.",
            },
          ],
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "grid",
        variant: "price-tiles",
        props: {
          heading: "Ce que coûte une cuisine",
          tiles: [
            {
              title: "Rafraîchissement",
              price: "à partir de 20 000 $",
              hint: "caissons existants conservés",
              includes: [
                "Comptoir et dosseret remplacés",
                "Peinture et quincaillerie neuves",
                "Électroménagers rebranchés",
              ],
            },
            {
              title: "Cuisine complète",
              price: "35 000 $ à 50 000 $",
              hint: "armoires et comptoir compris",
              featured: true,
              includes: [
                "Démolition et gestion des débris",
                "Plomberie et électricité reprises",
                "Armoires et comptoir posés",
                "Dosseret, peinture, moulures",
              ],
            },
            {
              title: "Cuisine et aire ouverte",
              price: "au-delà de 50 000 $",
              hint: "mur porteur ou plancher inclus",
              includes: [
                "Poutre calculée par un ingénieur",
                "Plancher raccordé aux pièces voisines",
                "Éclairage et ventilation repensés",
              ],
            },
          ],
          note: "Prix indicatifs. Le montant ferme d'une cuisine est arrêté dans la soumission, après le relevé sur place.",
          action: {
            label: "Soumission gratuite",
            href: "/contact",
            variant: "primary",
          },
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Des cuisines déjà livrées",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine ouverte sur le salon avec îlot et colonnes",
              },
              caption: "Îlot et colonnes pleine hauteur",
            },
            {
              kind: "stat",
              value: "9 à 15 sem.",
              label: "Production des armoires, planifiée en parallèle",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
                alt: "Cuisine blanche avec îlot en quartz",
              },
              caption: "Îlot en quartz",
            },
            {
              kind: "text",
              title: "Voir d'autres cuisines",
              description:
                "Aménagements, rangements et finis photographiés chez nos clients.",
              href: "/espaces/cuisine",
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
              q: "Combien de temps la cuisine reste-t-elle inutilisable ?",
              a: "Quelques semaines sans évier ni électroménagers. Nous montons un coin temporaire et calons la livraison des armoires sur la fin de la mécanique, pour raccourcir la période creuse.",
            },
            {
              q: "Peut-on ouvrir le mur entre la cuisine et le salon ?",
              a: "Souvent oui. S'il porte une charge, un ingénieur calcule la poutre et les appuis, et son plan accompagne la demande de permis. Nous le disons dès la visite.",
            },
            {
              q: "Faut-il un permis pour rénover une cuisine ?",
              a: "Oui dès qu'un mur porteur change, que la plomberie se déplace ou qu'une sortie de hotte perce le mur extérieur. Un remplacement au même endroit n'en demande habituellement pas.",
            },
            {
              q: "D'où viennent les armoires et le comptoir ?",
              a: "Les armoires sur mesure sortent de notre usine partenaire et nos équipes les posent. Le comptoir est gabarié une fois les caissons en place, puis découpé et installé.",
            },
            {
              q: "Et si l'îlot change de position ?",
              a: "Le drain, l'alimentation et les circuits doivent suivre. On ouvre le plancher ou on passe par le sous-sol, et ce travail est chiffré avant la démolition.",
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
          heading: "Faites chiffrer votre cuisine",
          intro:
            "Visite sur place, relevé des mesures et soumission détaillée, sans frais.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Permis, mécanique, armoires et comptoir",
        },
      },
    },
  ],
};
