import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationApresSinistrePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation après sinistre à Pierrefonds et l'Ouest-de-l'Île",
    description:
      "Reconstruction après dégât d'eau, feu, fumée ou moisissures : portée documentée pour l'assureur, permis et travaux. Entrepreneur général RBQ.",
    path: "/services/renovation/apres-sinistre",
    ogAlt: "Reconstruction après sinistre par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation après sinistre",
      url: SITE.url + "/services/renovation/apres-sinistre",
    },
  ],
  service: {
    name: "Rénovation après sinistre",
    description:
      "Reconstruction après dégât d'eau, feu, fumée ou moisissures par un entrepreneur général : évaluation des dommages, portée et devis détaillés pour la réclamation d'assurance, permis, coordination des corps de métier et remise en état.",
    url: SITE.url + "/services/renovation/apres-sinistre",
    serviceType: "Reconstruction après sinistre",
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
          eyebrow: "Rénovation après sinistre",
          heading: "Reconstruction après un dégât d'eau ou un incendie",
          description:
            "On arrive une fois les lieux asséchés, on décrit les dommages pièce par pièce, puis on reconstruit.",
          actions: [
            {
              label: "Demander une évaluation",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          badges: ["Dossier d'assurance", "Ouest-de-l'Île"],
          image: {
            src: "/images/generated/services/service-renovation-project-02.webp",
            alt: "Pièce reconstruite après un dégât d'eau",
          },
          imageSide: "left",
          caption: "Pierrefonds-Roxboro et Ouest-de-l'Île",
        },
      },
    },
    {
      id: "sinistres",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qu'on reconstruit après un sinistre",
          columns: "2",
          items: [
            {
              title: "Dégât d'eau",
              icon: "droplets",
              bullets: [
                "On ouvre les murs pour voir jusqu'où l'eau s'est rendue",
                "On remplace le gypse, l'isolant et le sous-plancher",
                "On vérifie les poutres avant de refermer",
              ],
            },
            {
              title: "Feu et fumée",
              icon: "hardHat",
              bullets: [
                "On démolit complètement les sections touchées",
                "On refait la structure, les murs et le toit selon les plans",
                "On rebâtit la pièce, de la charpente à la peinture",
              ],
            },
            {
              title: "Moisissures",
              icon: "shieldCheck",
              bullets: [
                "On reconstruit après la décontamination spécialisée",
                "On corrige la cause : ventilation, étanchéité ou drain",
                "On choisit des matériaux qui supportent l'humidité",
              ],
            },
            {
              title: "Sous-sol inondé",
              icon: "layers",
              bullets: [
                "On enlève les finis et l'isolant jusqu'à hauteur saine",
                "On réexamine le drain, la pompe et les fissures",
                "On demande le permis si le sous-sol est refini",
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
          heading: "Comment se déroule une reconstruction",
          steps: [
            {
              number: "1",
              title: "Visite des lieux",
              description:
                "On vient une fois les lieux secs et on ouvre les murs par endroits.",
            },
            {
              number: "2",
              title: "Description et prix",
              description:
                "On décrit les dommages pièce par pièce, avec des photos et un prix.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "On signe, puis on dépose une demande si la structure est touchée.",
            },
            {
              number: "4",
              title: "Démolition",
              description:
                "On sort les matériaux atteints et on note les dommages cachés.",
            },
            {
              number: "5",
              title: "Reconstruction",
              description:
                "Plomberie, électricité, gypse, peinture, planchers, puis remise des clés.",
            },
          ],
        },
      },
    },
    {
      id: "assurance",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce qu'on fournit pour votre réclamation",
          intro:
            "On ne remplace ni votre assureur ni son expert. On fournit les documents techniques.",
          items: [
            {
              title: "La liste des dommages, pièce par pièce",
              description: "chaque dommage est décrit, au lieu d'un seul montant global.",
            },
            {
              title: "Un prix pour chaque type de travaux",
              description:
                "démolition, plomberie, matériaux et finition sont chiffrés séparément.",
            },
            {
              title: "Des photos de tout",
              description: "l'état avant les travaux, les ouvertures faites, les dommages cachés.",
            },
            {
              title: "Les améliorations à part",
              description: "ce qui n'est pas lié au sinistre apparaît sur ses propres lignes.",
            },
          ],
          actions: [
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Demander une évaluation",
              href: "/contact",
              variant: "primary",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Constat des dommages avant la reconstruction d'une pièce",
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
          heading: "Questions fréquentes",
          items: [
            {
              q: "Faites-vous le pompage et l'assèchement ?",
              a: "Non. L'urgence, le pompage et la décontamination reviennent à des firmes spécialisées, souvent envoyées par l'assureur. On prend la suite quand les lieux sont secs.",
            },
            {
              q: "Travaillez-vous avec mon assureur ?",
              a: "On remet la liste des dommages, le prix détaillé et les photos dont votre réclamation a besoin, et on répond à l'expert. Vous restez l'assuré et la personne au dossier.",
            },
            {
              q: "Puis-je choisir mon entrepreneur après un sinistre ?",
              a: "En général oui, même si l'assureur suggère des entreprises de son réseau. Vérifiez votre police. On fournit les documents nécessaires pour que notre prix soit comparé.",
            },
            {
              q: "Et si vous découvrez d'autres dommages ?",
              a: "C'est fréquent derrière un mur inondé. On photographie, on chiffre par écrit et on vous laisse ajouter à votre réclamation avant de continuer.",
            },
            {
              q: "Faut-il un permis pour reconstruire ?",
              a: "Souvent. Dès que la reconstruction touche la structure, déplace la plomberie ou refait un sous-sol habitable, la ville l'exige. On valide et on dépose la demande.",
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
          heading: "Faites évaluer les dommages chez vous",
          intro:
            "On constate les dommages, on monte le devis, puis on reconstruit sous un seul contrat.",
          actions: [
            {
              label: "Demander une évaluation",
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
