import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPortesFenetresPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Remplacement de portes et fenêtres dans l'Ouest-de-l'Île",
    description:
      "Remplacement de fenêtres, porte patio, porte d'entrée et fenêtre de sous-sol. Mesures, pose étanche, permis et finition par un entrepreneur RBQ.",
    path: "/services/renovation/portes-et-fenetres",
    ogAlt: "Remplacement de portes et fenêtres par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Portes et fenêtres",
      url: SITE.url + "/services/renovation/portes-et-fenetres",
    },
  ],
  service: {
    name: "Remplacement de portes et fenêtres",
    description:
      "Remplacement et installation de fenêtres, de portes patio, de portes d'entrée et de fenêtres de sous-sol par un entrepreneur général : prise de mesures, commande sur mesure, pose étanche, permis et finition intérieure et extérieure.",
    url: SITE.url + "/services/renovation/portes-et-fenetres",
    serviceType: "Remplacement de portes et fenêtres",
    areaServed: [
      "Pierrefonds-Roxboro",
      "Ouest-de-l'Île",
      "Montréal",
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
          heading: "Remplacement de portes et fenêtres, de l'ouverture à la finition",
          description:
            "On mesure chaque ouverture, on pose étanche et on refait les moulures dedans comme dehors.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Finition incluse", "Prix par ouverture"],
          image: {
            src: "/images/generated/renovation/renovation-portes-fenetres-hero-01.webp",
            alt: "Salon avec fenêtres neuves et porte patio coulissante",
          },
          imageSide: "left",
          caption: "Ouest-de-l'Île, Montréal et Laval",
        },
      },
    },
    {
      id: "ouvertures",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Les portes et fenêtres qu'on remplace",
          columns: "2",
          items: [
            {
              title: "Fenêtres",
              icon: "window",
              bullets: [
                "On mesure chaque ouverture avant de commander",
                "On pose du PVC, de l'hybride ou de l'aluminium",
                "On isole et on calfeutre le pourtour, dedans et dehors",
              ],
            },
            {
              title: "Porte patio",
              icon: "patioDoor",
              bullets: [
                "On remplace les portes patio de 5, 6 ou 8 pieds",
                "On vérifie le plancher et l'appui sous le seuil",
                "On ajoute un linteau si l'ouverture s'agrandit",
              ],
            },
            {
              title: "Porte d'entrée",
              icon: "doorOpen",
              bullets: [
                "On pose des portes en acier, vitrées ou doubles",
                "On ajuste le seuil, la quincaillerie et le coupe-froid",
                "On refait le cadrage intérieur et extérieur",
              ],
            },
            {
              title: "Fenêtre de sous-sol",
              icon: "shovel",
              bullets: [
                "On agrandit l'ouverture dans le béton pour une chambre",
                "On installe la margelle et on raccorde le drainage",
                "On respecte la taille de sortie exigée par le code",
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
          heading: "Comment on remplace vos portes et fenêtres",
          steps: [
            {
              number: "1",
              title: "Visite et mesures",
              description:
                "On mesure chaque ouverture et on vérifie l'état des cadres actuels.",
            },
            {
              number: "2",
              title: "Prix par ouverture",
              description:
                "Vous recevez un prix écrit pour chaque fenêtre et chaque porte.",
            },
            {
              number: "3",
              title: "Commande sur mesure",
              description:
                "Les unités sont fabriquées à vos dimensions, puis livrées au chantier.",
            },
            {
              number: "4",
              title: "Pose étanche",
              description:
                "On retire l'ancienne unité et on pose membrane, mousse et scellant.",
            },
            {
              number: "5",
              title: "Finition",
              description:
                "On refait les moulures, le cadrage extérieur et la peinture au besoin.",
            },
          ],
        },
      },
    },
    {
      id: "methode",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Remplacer dans le cadre ou jusqu'à la structure",
          intro:
            "Il existe deux façons de changer une fenêtre. On choisit après avoir vérifié le cadre et l'appui.",
          items: [
            {
              title: "Dans le cadre existant",
              description: "plus rapide et sans toucher aux murs, si le cadre est sain.",
            },
            {
              title: "Jusqu'à l'ouverture brute",
              description: "on retire tout le cadre pour inspecter, isoler et refaire l'étanchéité.",
            },
            {
              title: "Ouverture agrandie",
              description: "on ajoute un linteau, et la ville exige alors un permis.",
            },
            {
              title: "Thermos embué seulement",
              description: "si le cadre tient, changer l'unité scellée peut suffire.",
            },
          ],
          actions: [
            {
              label: "Voir le sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-portes-fenetres-approach-01.webp",
            alt: "Pose d'une fenêtre neuve avec membrane sur l'appui",
          },
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur le remplacement de portes et fenêtres",
          items: [
            {
              q: "Combien coûte le remplacement d'une fenêtre ?",
              a: "Le prix dépend de la taille, du matériau, du vitrage et de la pose. Une fenêtre en PVC posée dans le cadre coûte moins qu'une hybride posée jusqu'à la structure. On chiffre chaque ouverture par écrit.",
            },
            {
              q: "Faut-il un permis pour changer ses fenêtres ?",
              a: "Plusieurs arrondissements de Montréal en exigent un, même pour un remplacement identique. Agrandir une ouverture ou percer le béton en demande toujours un. On vérifie les règles de votre ville avant de commander.",
            },
            {
              q: "Fenêtre en PVC, hybride ou aluminium ?",
              a: "Le PVC isole bien et coûte le moins cher. L'hybride ajoute un revêtement d'aluminium à l'extérieur, plus rigide et offert en plus de couleurs. L'aluminium sert surtout aux grandes surfaces vitrées.",
            },
            {
              q: "Double ou triple vitrage pour mes fenêtres ?",
              a: "Le triple vitrage isole mieux et coupe plus de bruit, mais il pèse et coûte plus. Il vaut surtout la peine côté nord ou dans une chambre sur une rue passante.",
            },
            {
              q: "Quelle fenêtre faut-il pour une chambre au sous-sol ?",
              a: "Une fenêtre qui s'ouvre de l'intérieur sans outil, avec une ouverture libre d'au moins 0,35 m² et aucun côté de moins de 380 mm. La margelle devant doit laisser assez de place pour sortir.",
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
          heading: "Des fenêtres ou une porte à remplacer ?",
          intro:
            "On passe mesurer vos ouvertures, puis vous recevez un prix écrit pour chacune.",
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
