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
          heading: "Rénovation complète de cuisine, du permis à la finition",
          description:
            "La même équipe s'occupe de la démolition, de la plomberie, de l'électricité, des armoires et du comptoir.",
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
          heading: "Ce qui est inclus dans une rénovation de cuisine",
          intro: "Tout est dans le même contrat. La soumission dit aussi ce qui est exclu.",
          columns: "2",
          items: [
            {
              title: "Démolition et protection",
              description: "On vide la cuisine sans salir le reste de la maison",
              icon: "hammer",
              bullets: [
                "On retire les armoires, le comptoir et les revêtements",
                "On protège les planchers et les corridors chaque jour",
                "On fournit le conteneur et on sort les débris",
              ],
            },
            {
              title: "Plomberie et électricité",
              description: "On refait les tuyaux et les fils avant de fermer les murs",
              icon: "wrench",
              bullets: [
                "On raccorde l'évier, le lave-vaisselle et le réfrigérateur",
                "On ajoute les circuits de l'îlot et les prises de comptoir",
                "On sort la hotte dehors, puis l'inspecteur passe",
              ],
            },
            {
              title: "Armoires et comptoir",
              description: "On fournit les deux et on les installe",
              icon: "package2",
              bullets: [
                "Les armoires viennent de notre usine partenaire",
                "Le comptoir est mesuré chez vous, découpé, puis posé",
                "On ajuste les portes et les tiroirs à la livraison",
              ],
            },
            {
              title: "Plancher, dosseret et peinture",
              description: "On termine par tout ce qui se voit",
              icon: "layers",
              bullets: [
                "On corrige le plancher avant de poser le revêtement",
                "On pose le dosseret, on tire les joints et on peint",
                "On installe les moulures, l'éclairage et les poignées",
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
          heading: "Comment se déroule une rénovation de cuisine",
          steps: [
            {
              number: "1",
              title: "Visite et soumission",
              description:
                "On mesure la pièce et on vérifie le panneau électrique et le drain.",
            },
            {
              number: "2",
              title: "Démolition",
              description:
                "On sort les vieilles armoires, le comptoir et les revêtements.",
            },
            {
              number: "3",
              title: "Plomberie et électricité",
              description:
                "On refait les drains, les circuits et la sortie de hotte.",
            },
            {
              number: "4",
              title: "Armoires et comptoir",
              description:
                "On pose les armoires, puis on mesure et on découpe le comptoir.",
            },
            {
              number: "5",
              title: "Finition",
              description:
                "On pose le dosseret, on peint et on branche les électroménagers.",
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
          heading: "Combien coûte une rénovation de cuisine",
          tiles: [
            {
              title: "Rafraîchissement",
              price: "à partir de 20 000 $",
              hint: "on garde vos armoires actuelles",
              includes: [
                "Comptoir et dosseret remplacés",
                "Peinture et poignées neuves",
                "Électroménagers rebranchés",
              ],
            },
            {
              title: "Cuisine complète",
              price: "35 000 $ à 50 000 $",
              hint: "armoires et comptoir neufs",
              featured: true,
              includes: [
                "Démolition et sortie des débris",
                "Plomberie et électricité refaites",
                "Armoires et comptoir installés",
                "Dosseret, peinture et moulures",
              ],
            },
            {
              title: "Cuisine et aire ouverte",
              price: "au-delà de 50 000 $",
              hint: "avec ouverture de mur ou plancher neuf",
              includes: [
                "Poutre calculée par un ingénieur",
                "Plancher raccordé aux pièces voisines",
                "Éclairage et ventilation repensés",
              ],
            },
          ],
          note: "Ce sont des ordres de grandeur. Le prix exact est écrit dans la soumission, après la visite chez vous.",
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
          heading: "Des cuisines qu'on a livrées",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine ouverte sur le salon avec îlot et colonnes",
              },
              caption: "Cuisine ouverte sur le salon",
            },
            {
              kind: "stat",
              value: "9 à 15 sem.",
              label: "Fabrication des armoires à notre usine partenaire",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
                alt: "Cuisine blanche avec îlot en quartz",
              },
              caption: "Îlot avec comptoir de quartz",
            },
            {
              kind: "text",
              title: "Voir d'autres cuisines",
              description:
                "Des photos prises chez nos clients.",
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
              q: "Combien de temps serai-je sans cuisine ?",
              a: "Quelques semaines sans évier ni électroménagers. On installe un coin temporaire et on fait livrer les armoires dès que la plomberie est finie.",
            },
            {
              q: "Peut-on ouvrir le mur entre la cuisine et le salon ?",
              a: "Souvent oui. Si le mur porte une charge, un ingénieur calcule la poutre et ses appuis, et son plan part avec la demande de permis.",
            },
            {
              q: "Faut-il un permis pour rénover une cuisine ?",
              a: "Oui si un mur porteur change, si la plomberie se déplace ou si la hotte perce le mur extérieur. Sinon, habituellement non.",
            },
            {
              q: "D'où viennent les armoires et le comptoir ?",
              a: "Les armoires sur mesure viennent de notre usine partenaire et nos équipes les installent. Le comptoir est mesuré une fois les armoires en place, puis découpé et posé.",
            },
            {
              q: "Et si je veux déplacer l'îlot ?",
              a: "Le drain, l'eau et les fils doivent suivre. On ouvre le plancher ou on passe par le sous-sol, et ce travail est chiffré avant la démolition.",
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
            "On passe chez vous, on mesure et on vous remet une soumission détaillée, sans frais.",
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
          note: "Licence RBQ 8306-0806-27 · Permis, plomberie, électricité, armoires et comptoir",
        },
      },
    },
  ],
};
