import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPlancherPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Renovation de plancher",
    description:
      "Renovation de plancher : sequence de chantier, niveaux, transitions et integration propre dans un projet plus large.",
    path: "/services/renovation/plancher/",
    ogAlt: "Renovation de plancher Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation", url: SITE.url + "/services/renovation/" },
    {
      name: "Renovation de plancher",
      url: SITE.url + "/services/renovation/plancher/",
    },
  ],
  service: {
    name: "Renovation de plancher",
    description:
      "Planification, coordination et finition soignee quand le plancher s'integre a une renovation plus large avec armoires, installation ou reconfiguration.",
    url: SITE.url + "/services/renovation/plancher/",
    serviceType: "Renovation de plancher",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Renovation",
          heading:
            "Renovation de plancher, mieux gerer niveaux, transitions et sequence de chantier",
          description:
            "Le plancher influence les niveaux, les transitions, l'installation des armoires et la qualite percue du projet. Il doit etre pense dans la sequence globale du chantier, pas traite comme une decision isolee.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir la renovation cle en main",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
          badges: ["Transitions", "Niveaux", "Sequence"],
          image: {
            src: "/images/generated/renovation/renovation-plancher-hero-01.png",
            alt: "Renovation de plancher",
          },
          caption: "Montreal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Pourquoi le plancher cree souvent des problemes a retardement",
          description:
            "Le plancher semble simple tant qu'on ne le relie pas au reste du chantier. En realite, il influence les hauteurs, les transitions, les ajustements sur place et parfois la logique complete d'installation.",
          cards: [
            {
              title: "Niveaux et planeite",
              description:
                "Les variations du support se repercutent directement sur la pose, les alignements et le rendu final.",
            },
            {
              title: "Mauvais ordre des travaux",
              description:
                "Quand le plancher est traite trop tard ou trop tot, il force souvent des reprises ou des protections supplementaires.",
            },
            {
              title: "Raccords visibles",
              description:
                "Les transitions mal pensees entre zones, pieces ou materiaux diminuent vite la perception de qualite.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "approach",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading:
            "Notre approche pour integrer le plancher sans nuire au reste du projet",
          intro:
            "L'objectif n'est pas seulement de remplacer une surface. Il faut s'assurer que le plancher s'integre correctement aux armoires, aux niveaux, aux transitions et a la sequence generale du chantier.",
          items: [
            {
              title: "Lecture de l'existant",
              description:
                "On clarifie les niveaux, les irrregularites visibles, les transitions et la relation avec les autres zones du projet.",
            },
            {
              title: "Ordre des etapes",
              description:
                "Le plancher est positionne dans la bonne sequence pour reduire les reprises et proteger la finition.",
            },
            {
              title: "Coordination avec l'installation",
              description:
                "Les armoires, les ajustements sur place et les raccords doivent etre penses ensemble.",
            },
            {
              title: "Controle du rendu final",
              description:
                "Les joints, les lignes de transition et la lecture des surfaces doivent rester propres apres les travaux.",
            },
          ],
          actions: [
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
            {
              label: "Voir la renovation cle en main",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.png",
            alt: "Coordination du plancher dans une renovation",
          },
          cardTitle: "Ce qu'on cherche a eviter",
          cardDescription:
            "Un plancher mal integre peut obliger des corrections en cascade sur la pose, les niveaux et les transitions alors que le probleme venait surtout d'une mauvaise sequence.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading:
            "Sequence type pour integrer un plancher dans une renovation",
          intro:
            "La logique reste simple: comprendre le support, verifier les impacts sur les autres elements, puis executer dans le bon ordre.",
          steps: [
            {
              number: "1",
              title: "Analyse",
              description:
                "Lecture du support, des niveaux, des transitions et de la relation avec les autres zones du chantier.",
            },
            {
              number: "2",
              title: "Decision",
              description:
                "Choix du materiau, des raccords et de la sequence selon la portee reelle du projet.",
            },
            {
              number: "3",
              title: "Preparation",
              description:
                "Mise en condition du chantier pour proteger les prochaines etapes et limiter les reprises.",
            },
            {
              number: "4",
              title: "Coordination",
              description:
                "Integration avec armoires, installation, transitions et ajustements necessaires.",
            },
            {
              number: "5",
              title: "Finition",
              description:
                "Verification des joints, des lignes et du rendu final dans l'ensemble de l'espace.",
            },
          ],
        },
      },
    },
    {
      id: "technical",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading:
            "Points techniques qui influencent vraiment un projet de plancher",
          intro:
            "Le plancher est rarement un simple choix esthetique. Ce sont les details techniques autour qui influencent le plus la qualite finale.",
          columns: "2",
          items: [
            {
              title: "Planeite du support",
              description:
                "La base conditionne directement le resultat visuel et fonctionnel.",
              icon: "slidersHorizontal",
              bullets: [
                "Les variations de niveau se repercutent sur l'installation.",
                "Un support mal lu cree des corrections plus tard.",
                "Le rendu final depend souvent de ce travail preparatoire.",
              ],
            },
            {
              title: "Transitions entre zones",
              description:
                "Les raccords visibles comptent autant que la surface elle-meme.",
              icon: "doorOpen",
              bullets: [
                "Jonctions propres entre pieces ou materiaux.",
                "Transitions pensees selon circulation et hauteur.",
                "Moins d'effets de seuil mal resolus.",
              ],
            },
            {
              title: "Relation avec les armoires",
              description:
                "Le plancher et le mobilier influencent mutuellement leur pose.",
              icon: "package2",
              bullets: [
                "Impact direct sur alignements et hauteurs.",
                "Besoin de sequence claire avec installation.",
                "Moins de reprises sur joints et ajustements.",
              ],
            },
            {
              title: "Execution chantier",
              description:
                "La qualite du rendu depend aussi de l'ordre des interventions.",
              icon: "wrench",
              bullets: [
                "Protection des surfaces au bon moment.",
                "Moins de corrections de fin de chantier.",
                "Finition plus nette dans l'ensemble du projet.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "integration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Le plancher s'integre surtout a un projet plus large",
          intro:
            "Cette page service sert a expliquer la logique de coordination. Dans la plupart des cas, le plancher soutient surtout un projet de cuisine, de salle de bain ou de renovation cle en main plus globale.",
          items: [
            {
              title: "Renovation cle en main",
              href: "/services/renovation/",
              description:
                "La page principale pour comprendre comment sequence, coordination et travaux connexes s'alignent dans un projet plus large.",
              image: {
                src: "/images/generated/services/service-renovation-hero-01.png",
                alt: "Renovation cle en main mieux coordonnee",
              },
              badges: ["Page principale", "Coordination"],
              footerCtaLabel: "Voir renovation",
            },
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine/",
              description:
                "Quand le plancher influence les niveaux, l'ilot, les armoires et la lecture generale de la cuisine.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.png",
                alt: "Cuisine sur mesure avec integration propre du plancher",
              },
              badges: ["Cuisine", "Niveaux"],
              footerCtaLabel: "Voir la page cuisine",
            },
            {
              title: "Salle de bain sur mesure",
              href: "/espaces/salle-de-bain/",
              description:
                "Quand les transitions, l'humidite et la finition du sol doivent soutenir le reste de la piece sans faiblesse visible.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.png",
                alt: "Salle de bain sur mesure avec finition de plancher propre",
              },
              badges: ["Salle de bain", "Finition"],
              footerCtaLabel: "Voir la page salle de bain",
            },
          ],
        },
      },
    },
    {
      id: "proof",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'un plancher bien integre doit apporter au projet",
          description:
            "La preuve de competence ne tient pas seulement dans la surface choisie. Elle se voit dans les niveaux, les transitions et la facon dont le plancher soutient le reste de l'amenagement sans attirer l'attention pour les mauvaises raisons.",
          cards: [
            {
              title: "Lecture plus propre",
              description:
                "Les lignes et raccords restent discrets au lieu de casser la coherence de l'espace.",
            },
            {
              title: "Installation plus stable",
              description:
                "Les autres elements du projet s'ajustent mieux quand le support et la sequence sont bien cadres.",
            },
            {
              title: "Finition plus credible",
              description:
                "Le resultat final parait mieux maitrise parce que les details techniques ne ressortent pas.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - renovation de plancher",
          intro:
            "Reponses claires sur sequence, niveaux, condo et integration au reste du chantier.",
          items: [
            {
              q: "Est-ce que je peux refaire uniquement le plancher?",
              a: "Oui, mais des qu'il y a des armoires ou une renovation plus large, la coordination devient determinante.",
            },
            {
              q: "Dans quel ordre faut-il faire les travaux?",
              a: "L'ordre depend de la portee, mais l'objectif reste d'eviter les reprises et proteger le resultat final.",
            },
            {
              q: "Travaillez-vous avec d'autres intervenants pour ce type de projet?",
              a: "Oui, lorsque le plancher s'integre a une renovation plus large. La coordination sert justement a clarifier l'ordre des interventions et a proteger la finition.",
            },
            {
              q: "Est-ce possible en condo?",
              a: "Oui. Les contraintes d'acces, d'horaires et parfois d'acoustique doivent etre cadres au debut.",
            },
            {
              q: "Est-ce que le plancher influence l'installation des armoires?",
              a: "Oui. Les niveaux et la planeite influencent directement l'alignement, les joints et les transitions.",
            },
            {
              q: "Ou voir l'approche complete pour un projet plus global?",
              a: "La page renovation de plancher explique surtout la logique de sequence et de coordination. Pour la vision complete d'un projet plus large, la page renovation cle en main reste la reference principale.",
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
          heading:
            "Besoin d'integrer le plancher dans une renovation plus large ?",
          intro:
            "On vous aide a cadrer la bonne sequence et les bons raccords pour proteger le resultat final, puis a vous orienter vers la page renovation principale si le projet depasse le seul plancher.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir la renovation cle en main",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
          note: "Plancher, transitions, niveaux et coordination chantier",
        },
      },
    },
  ],
};
