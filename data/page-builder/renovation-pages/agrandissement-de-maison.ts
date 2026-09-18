import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const agrandissementMaisonPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Agrandissement de maison à Montréal — clé en main",
    description:
      "Agrandissement résidentiel : zonage, permis, fondations, structure, enveloppe et raccordements. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/agrandissement-de-maison",
    ogAlt: "Agrandissement de maison par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Agrandissement de maison",
      url: SITE.url + "/services/renovation/agrandissement-de-maison",
    },
  ],
  service: {
    name: "Agrandissement de maison",
    description:
      "Agrandissement résidentiel par un entrepreneur général : vérification du zonage, permis de construction, plans d'ingénieur, fondations, structure, enveloppe, raccordements et finition intérieure.",
    url: SITE.url + "/services/renovation/agrandissement-de-maison",
    serviceType: "Agrandissement résidentiel",
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
          eyebrow: "Agrandissement de maison",
          heading: "Gagner une pièce sans quitter votre quartier",
          description:
            "Zonage vérifié, plans scellés, fondation coulée sous le gel et raccord soigné au bâtiment existant.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Permis de construction", "Plans d'ingénieur"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement résidentiel en construction",
          },
          imageSide: "left",
          caption: "Agrandissements, Ouest-de-l'Île et Laval",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que couvre le mandat d'agrandissement",
          columns: "2",
          items: [
            {
              title: "Faisabilité et dossier",
              description: "Ce qui se vérifie avant de dessiner",
              icon: "fileCheck",
              bullets: [
                "Marges, hauteur et occupation du sol",
                "Fondation, structure et services relevés",
                "Plans scellés joints à la demande",
              ],
            },
            {
              title: "Excavation et fondation",
              description: "La partie qui porte tout le reste",
              icon: "hardHat",
              bullets: [
                "Services souterrains localisés avant de creuser",
                "Semelles coulées sous le niveau de gel",
                "Drain, imperméabilisation, remblai drainant",
              ],
            },
            {
              title: "Charpente et enveloppe",
              description: "Fermer avant que la météo décide",
              icon: "building2",
              bullets: [
                "Charpente montée selon les plans scellés",
                "Charges du mur ouvert reprises par poutre",
                "Toiture, pare-air, fenêtres, revêtement agencé",
              ],
            },
            {
              title: "Raccordements et finition",
              description: "La pièce entre dans la maison",
              icon: "wrench",
              bullets: [
                "Chauffage, ventilation et circuits prolongés",
                "Inspections avant la fermeture des murs",
                "Gypse, peinture, planchers mis au même niveau",
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
          heading: "La séquence d'un agrandissement",
          steps: [
            {
              number: "1",
              title: "Faisabilité",
              description:
                "Zonage, certificat de localisation et superficie autorisée vérifiés.",
            },
            {
              number: "2",
              title: "Plans et ingénieur",
              description:
                "Dessins de construction et calcul des charges par un ingénieur.",
            },
            {
              number: "3",
              title: "Permis et contrat",
              description:
                "Dossier déposé à la ville, échéancier et budget signés.",
            },
            {
              number: "4",
              title: "Fondation et structure",
              description:
                "Excavation, semelles, drain, charpente, toiture, enveloppe fermée.",
            },
            {
              number: "5",
              title: "Mécanique et finition",
              description:
                "Services prolongés, inspections, gypse, planchers, puis livraison.",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Les formes d'agrandissement possibles",
          intro:
            "Le terrain et le règlement de zonage tranchent souvent avant le besoin de départ.",
          items: [
            {
              title: "Rallonge arrière",
              description: "la plus courante, si la cour laisse la marge requise.",
            },
            {
              title: "Rallonge latérale",
              description: "dépend de la distance à la ligne de lot voisine.",
            },
            {
              title: "Ajout d'étage",
              description: "possible si la fondation reprend la charge ajoutée.",
            },
            {
              title: "Suite parentale ou garage",
              description: "volume attaché, raccordé au chauffage de la maison.",
            },
          ],
          actions: [
            {
              label: "Voir la cuisine",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Chantier d'agrandissement raccordé à une maison existante",
          },
          cardTitle: "Ce qu'on regarde pour trancher",
          cardDescription:
            "Accès du terrain pour l'excavation, position de l'entrée électrique et du drain, ensoleillement des fenêtres actuelles.",
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
              q: "Mon terrain permet-il un agrandissement ?",
              a: "Le règlement de zonage fixe les marges de recul, la part du terrain occupable et la hauteur permise. Nous lisons ces paramètres avec votre certificat de localisation avant de dessiner quoi que ce soit.",
            },
            {
              q: "Faut-il un permis pour agrandir une maison ?",
              a: "Toujours. Ajouter de la surface de plancher modifie l'implantation du bâtiment : cela demande un permis de construction, accompagné des coupes, élévations et plans de structure.",
            },
            {
              q: "Ai-je besoin d'un ingénieur pour l'agrandissement ?",
              a: "Dans presque tous les cas. Semelles, charpente et poutre de remplacement reposent sur un calcul de charges. Les plans scellés partent avec la demande et servent de référence au chantier.",
            },
            {
              q: "Combien de temps prend un agrandissement ?",
              a: "On compte en mois. La phase papier, faisabilité, plans et analyse municipale, pèse souvent autant que la fondation. L'échéancier détaillé accompagne le contrat signé.",
            },
            {
              q: "Agrandir ou construire neuf ?",
              a: "Nous ne construisons pas de maisons neuves. Notre travail part toujours d'un bâtiment existant : agrandir, transformer, reconstruire. Pour beaucoup de familles, une rallonge revient moins cher qu'un déménagement.",
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
          heading: "Un agrandissement à valider ?",
          intro:
            "Première étape, lire le zonage et la fondation pour savoir ce qui est réellement permis.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Zonage, permis, ingénieur et fondations",
        },
      },
    },
  ],
};
