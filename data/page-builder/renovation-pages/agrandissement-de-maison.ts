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
          heading: "Du zonage aux fondations, jusqu'à la finition",
          description:
            "Permis de construction, plans d'ingénieur, fondation sous le niveau de gel et raccord à la maison existante.",
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
          caption: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que comprend le mandat",
          columns: "2",
          items: [
            {
              title: "Faisabilité et permis",
              description: "Ce qui se vérifie avant de dessiner quoi que ce soit.",
              icon: "fileCheck",
              bullets: [
                "Zonage : marges, implantation, hauteur, occupation du sol",
                "Relevé de la fondation, de la structure et des services",
                "Plans scellés et demande de permis déposée",
              ],
            },
            {
              title: "Excavation et fondations",
              description: "La partie qui détermine la tenue du bâtiment.",
              icon: "hardHat",
              bullets: [
                "Localisation des services souterrains, excavation",
                "Semelles coulées sous le niveau de gel",
                "Drain, imperméabilisation et remblai drainant",
              ],
            },
            {
              title: "Structure et enveloppe",
              description: "Fermer le bâtiment avant que la météo décide.",
              icon: "building2",
              bullets: [
                "Charpente selon les plans d'ingénieur",
                "Mur porteur ouvert, charges reprises par poutre calculée",
                "Toiture, pare-air, fenêtres et revêtement agencé",
              ],
            },
            {
              title: "Raccordements et finition",
              description: "La nouvelle section devient une vraie pièce de la maison.",
              icon: "wrench",
              bullets: [
                "Plomberie, électricité, chauffage et ventilation étendus",
                "Inspections municipales avant la fermeture des murs",
                "Gypse, peinture, planchers raccordés aux niveaux existants",
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
          heading: "Cinq étapes",
          steps: [
            {
              number: "1",
              title: "Faisabilité",
              description:
                "Visite, relevé et vérification du zonage : marges, hauteur, superficie autorisée.",
            },
            {
              number: "2",
              title: "Plans et ingénieur",
              description:
                "Plans de construction, calcul de structure et plans scellés par un ingénieur.",
            },
            {
              number: "3",
              title: "Permis et contrat",
              description:
                "Demande déposée à la ville, contrat signé avec échéancier et budget.",
            },
            {
              number: "4",
              title: "Fondation et structure",
              description:
                "Excavation, semelles, drain, charpente, toiture et fermeture de l'enveloppe.",
            },
            {
              number: "5",
              title: "Mécanique et finition",
              description:
                "Plomberie, électricité, ventilation, inspections, gypse, planchers, puis livraison.",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Les types d'agrandissement que nous réalisons",
          intro:
            "La forme retenue dépend autant du terrain et du zonage que du besoin de départ.",
          badges: [
            "Rallonge arrière",
            "Rallonge latérale",
            "Ajout d'étage",
            "Solarium quatre saisons",
            "Suite parentale",
            "Garage attenant",
          ],
          cardTitle: "Ce qu'on évalue pour trancher",
          items: [
            "La superficie autorisée après application des marges de recul",
            "La capacité de la fondation à recevoir un étage",
            "L'ensoleillement et l'impact sur les fenêtres actuelles",
            "La position de l'entrée électrique, du drain et du chauffage",
            "L'accès au terrain pour l'excavation et les livraisons",
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
              q: "Faut-il un permis pour agrandir ?",
              a: "Oui, toujours. Un agrandissement ajoute de la superficie de plancher et modifie l'implantation : c'est un permis de construction, avec plans d'implantation, coupes, élévations et plans de structure scellés. Nous montons le dossier et déposons la demande.",
            },
            {
              q: "Mon terrain permet-il un agrandissement ?",
              a: "Le règlement de zonage fixe les marges de recul, le pourcentage d'occupation du terrain et la hauteur maximale. Nous vérifions ces paramètres et votre certificat de localisation avant de dessiner. Une dérogation mineure reste possible, sans garantie de résultat.",
            },
            {
              q: "Ai-je besoin d'un ingénieur ?",
              a: "Dans presque tous les cas. Les fondations, la charpente et la poutre qui remplace le mur porteur ouvert exigent un calcul de charges. Les plans scellés accompagnent la demande de permis et servent de référence au chantier.",
            },
            {
              q: "Combien de temps dure un agrandissement ?",
              a: "On raisonne en mois. La phase administrative, faisabilité, plans, ingénieur et permis, pèse souvent autant que la fondation, selon le délai d'analyse de votre municipalité. L'échéancier détaillé est joint au contrat.",
            },
            {
              q: "Combien coûte un agrandissement ?",
              a: "C'est le mandat où les écarts sont les plus grands : fondation, structure, toiture et enveloppe changent selon le terrain. Un budget sérieux se construit après la visite, la vérification du zonage et les plans. L'estimation est gratuite.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non. Notre licence RBQ 8306-0806-27 couvre la rénovation, la transformation, l'agrandissement et la reconstruction, catégories 1.2 et 1.3. La maison neuve relève d'une autre catégorie et d'un plan de garantie distinct qui ne s'applique pas ici.",
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
            "On commence par ce que votre terrain et votre structure permettent réellement.",
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
