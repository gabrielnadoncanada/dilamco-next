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
          heading: "Agrandissement de maison, du zonage à la finition",
          description:
            "On vérifie le zonage, on fait faire les plans, on coule la fondation et on raccorde à votre maison.",
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
          heading: "Ce qui est inclus dans un agrandissement",
          columns: "2",
          items: [
            {
              title: "Vérifications et permis",
              description: "On regarde ce que la ville permet avant de dessiner",
              icon: "fileCheck",
              bullets: [
                "On lit les distances à respecter et la hauteur permise",
                "On relève la fondation, la structure et les services",
                "Les plans signés par l'ingénieur partent avec la demande",
              ],
            },
            {
              title: "Creusage et fondation",
              description: "C'est ce qui porte tout l'agrandissement",
              icon: "hardHat",
              bullets: [
                "On localise les services souterrains avant de creuser",
                "On coule les semelles plus bas que le niveau de gel",
                "On pose le drain et on imperméabilise la fondation",
              ],
            },
            {
              title: "Charpente, murs et toit",
              description: "On ferme le bâtiment avant l'hiver",
              icon: "building2",
              bullets: [
                "On monte la charpente selon les plans de l'ingénieur",
                "On installe une poutre là où le mur s'ouvre",
                "Toit, fenêtres et revêtement agencés à votre maison",
              ],
            },
            {
              title: "Raccordements et finition",
              description: "La nouvelle pièce est reliée à la maison",
              icon: "wrench",
              bullets: [
                "On prolonge le chauffage, la ventilation et les circuits",
                "On fait inspecter avant de fermer les murs",
                "On pose le gypse, on peint et on met les planchers de niveau",
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
          heading: "Les étapes d'un agrandissement",
          steps: [
            {
              number: "1",
              title: "Vérification du terrain",
              description:
                "On lit le zonage et le certificat de localisation pour savoir ce qui est permis.",
            },
            {
              number: "2",
              title: "Plans et ingénieur",
              description:
                "Un ingénieur calcule les charges et signe les plans de construction.",
            },
            {
              number: "3",
              title: "Permis et contrat",
              description:
                "On dépose le dossier à la ville et on signe l'échéancier avec vous.",
            },
            {
              number: "4",
              title: "Fondation et structure",
              description:
                "On creuse, on coule la fondation, on monte la charpente et le toit.",
            },
            {
              number: "5",
              title: "Raccordements et finition",
              description:
                "On prolonge les services, on fait inspecter, puis on finit les murs.",
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
          heading: "Les types d'agrandissement possibles",
          intro:
            "Le terrain et le règlement de la ville décident souvent avant votre besoin de départ.",
          items: [
            {
              title: "Rallonge à l'arrière",
              description: "la plus courante, si la cour laisse assez d'espace.",
            },
            {
              title: "Rallonge sur le côté",
              description: "possible selon la distance avec le terrain du voisin.",
            },
            {
              title: "Ajout d'un étage",
              description: "possible si la fondation peut porter le poids ajouté.",
            },
            {
              title: "Suite parentale ou garage",
              description: "une pièce attachée à la maison et chauffée avec elle.",
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
          cardTitle: "Ce qu'on regarde d'abord",
          cardDescription:
            "L'accès au terrain pour la machinerie, la position de l'entrée électrique et du drain, et la lumière que perdront vos fenêtres actuelles.",
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
              a: "Le règlement de zonage fixe les distances à respecter, la part du terrain que vous pouvez occuper et la hauteur permise. On lit ces règles avec votre certificat de localisation.",
            },
            {
              q: "Faut-il un permis pour agrandir une maison ?",
              a: "Toujours. Ajouter de la surface change l'empreinte du bâtiment : il faut un permis de construction, avec les plans de structure, les coupes et les élévations.",
            },
            {
              q: "Ai-je besoin d'un ingénieur ?",
              a: "Dans presque tous les cas. Les semelles, la charpente et la poutre de remplacement demandent un calcul de charges. Les plans signés partent avec la demande et servent de référence.",
            },
            {
              q: "Combien de temps prend un agrandissement ?",
              a: "On compte en mois. La partie papier, soit les vérifications, les plans et l'analyse de la ville, prend souvent autant de temps que la fondation elle-même.",
            },
            {
              q: "Agrandir ou construire neuf ?",
              a: "Nous ne construisons pas de maisons neuves. Notre travail part toujours d'un bâtiment existant. Pour bien des familles, une rallonge revient moins cher qu'un déménagement.",
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
          heading: "Faites valider votre projet d'agrandissement",
          intro:
            "On commence par lire le zonage et la fondation pour savoir ce qui est permis chez vous.",
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
