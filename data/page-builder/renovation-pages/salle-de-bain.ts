import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de salle de bain à Montréal — clé en main",
    description:
      "Rénovation de salle de bain complète : étanchéité, membrane, ventilation, plomberie, tuilage et vanité. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/salle-de-bain",
    ogAlt: "Rénovation de salle de bain par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation salle de bain",
      url: SITE.url + "/services/renovation/salle-de-bain",
    },
  ],
  service: {
    name: "Rénovation salle de bain",
    description:
      "Rénovation de salle de bain par un entrepreneur général : permis, plomberie, ventilation, membrane d'étanchéité, tuilage, vanité sur mesure et finition.",
    url: SITE.url + "/services/renovation/salle-de-bain",
    serviceType: "Rénovation de salle de bain",
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
          heading: "Rénovation de salle de bain, de la plomberie à la céramique",
          description:
            "On refait la plomberie, la ventilation et l'étanchéité, puis on pose la céramique et la vanité.",
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
          badges: ["Plomberie inspectée", "Étanchéité complète"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Salle de bain rénovée par un entrepreneur général",
          },
          imageSide: "left",
          caption: "Salles de bain, Ouest-de-l'Île et Laval",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que comprend la soumission",
          columns: "2",
          items: [
            {
              title: "Démolition",
              icon: "hammer",
              bullets: [
                "On sort la douche, la vanité et les revêtements",
                "On examine les poutres de plancher et le contreplaqué",
                "On répare le plancher avant de poser quoi que ce soit",
              ],
            },
            {
              title: "Plomberie et ventilation",
              icon: "droplets",
              bullets: [
                "On refait la pente du drain et l'arrivée d'eau",
                "On sort le ventilateur dehors, jamais dans l'entretoit",
                "On installe une valve qui empêche l'eau de brûler",
              ],
            },
            {
              title: "Étanchéité et céramique",
              icon: "shieldCheck",
              bullets: [
                "Panneau résistant à l'eau sur les murs mouillés",
                "Membrane remontée sur les murs et collée au drain",
                "Pente vérifiée avant la première tuile",
              ],
            },
            {
              title: "Vanité et accessoires",
              icon: "bath",
              bullets: [
                "Vanité fournie par notre usine partenaire",
                "Robinetterie, miroir et éclairage",
                "Toilette, porte de douche et moulures",
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
          heading: "Comment se déroule le chantier",
          steps: [
            {
              number: "1",
              title: "Visite et mesures",
              description:
                "On examine la ventilation, la plomberie et les traces d'eau.",
            },
            {
              number: "2",
              title: "Démolition",
              description:
                "Si le plancher est abîmé, on le photographie et on le chiffre avec vous.",
            },
            {
              number: "3",
              title: "Plomberie et ventilation",
              description:
                "On pose les drains, les fils et le ventilateur, puis on fait inspecter.",
            },
            {
              number: "4",
              title: "Étanchéité et céramique",
              description:
                "On pose la membrane et on la laisse sécher avant de tuiler.",
            },
            {
              number: "5",
              title: "Vanité et livraison",
              description:
                "On installe la vanité, puis on fait le tour de la pièce avec vous.",
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
          heading: "Combien coûte une salle de bain",
          tiles: [
            {
              title: "Salle d'eau",
              price: "à partir de 10 000 $",
              hint: "toilette et lavabo, sans douche",
              includes: [
                "Démolition, plomberie gardée au même endroit",
                "Céramique au sol",
                "Vanité, toilette et éclairage",
              ],
            },
            {
              title: "Salle de bain complète",
              price: "15 000 $ à 35 000 $",
              hint: "douche, bain et vanité",
              featured: true,
              includes: [
                "Membrane d'étanchéité sur toute la douche",
                "Plomberie et ventilation refaites",
                "Céramique au sol et sur les murs",
                "Vanité, comptoir et robinetterie",
              ],
            },
            {
              title: "Douche de plain-pied",
              price: "près de 35 000 $",
              includes: [
                "Plancher abaissé pour enlever le seuil",
                "Drain linéaire et pente calculée",
                "Verre trempé fait sur mesure",
              ],
            },
          ],
          note: "Le prix change si la plomberie se déplace et selon la céramique choisie.",
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
          heading: "Des salles de bain qu'on a refaites",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Douche de plain-pied avec paroi de verre",
              },
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/salle-de-bain-vanite-miroir-del-quartz-01.webp",
                alt: "Vanité avec comptoir de quartz et miroir rétroéclairé",
              },
            },
            {
              kind: "stat",
              value: "2 vérifications",
              label: "Avant de fermer les murs, puis avant de tuiler",
            },
            {
              kind: "text",
              title: "Voir d'autres salles de bain",
              description:
                "Douches sans seuil, vanités doubles et rangements de salle de bain.",
              href: "/espaces/salle-de-bain",
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
          heading: "Questions sur la rénovation de salle de bain",
          items: [
            {
              q: "C'est quoi, une membrane d'étanchéité ?",
              a: "C'est une couche posée sous la céramique, remontée sur les murs de la douche et collée au drain. Elle arrête l'eau avant qu'elle atteigne le bois de la maison.",
            },
            {
              q: "Peut-on installer une douche sans seuil ?",
              a: "Souvent oui. Il faut abaisser le plancher entre les poutres, ou entailler la dalle de béton, pour loger le drain et la pente. On le vérifie à la visite.",
            },
            {
              q: "La ventilation est-elle obligatoire dans une salle de bain ?",
              a: "Oui, et elle doit sortir dehors. Un ventilateur qui souffle dans l'entretoit fait du givre, puis de la moisissure. On refait le conduit quand il s'arrête sous le toit.",
            },
            {
              q: "Et si vous trouvez du bois pourri en démolissant ?",
              a: "C'est fréquent après vingt ans sous une douche qui coule. On vous montre les photos, on chiffre la réparation par écrit, puis on continue.",
            },
            {
              q: "Faut-il un permis pour une salle de bain ?",
              a: "Pas pour remplacer au même endroit. Il en faut un pour déplacer la plomberie ou ajouter une salle de bain, avec une inspection avant de refermer les murs.",
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
          heading: "Faites chiffrer votre salle de bain",
          intro:
            "On mesure la pièce, on vérifie la ventilation et on vous remet une soumission détaillée.",
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
        },
      },
    },
  ],
};
