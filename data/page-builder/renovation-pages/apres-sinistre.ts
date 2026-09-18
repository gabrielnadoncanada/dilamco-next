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
          eyebrow: "Dilamco - Rénovation",
          heading:
            "Rénovation après sinistre : reconstruire avec un entrepreneur général licencié",
          description:
            "Une fois l'urgence passée et les lieux asséchés, il reste la vraie reconstruction : ouvrir, constater, chiffrer, obtenir les permis, coordonner les corps de métier et remettre le logement en état. Nous montons la portée et le devis détaillé dont votre assureur a besoin, puis nous exécutons les travaux sous un seul contrat. Basés à Pierrefonds-Roxboro.",
          actions: [
            {
              label: "Demander une évaluation",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la finition de sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          badges: [
            "Licence RBQ 8306-0806-27",
            "Dossier d'assurance",
            "Ouest-de-l'Île",
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol reconstruit après un dégât d'eau",
          },
          caption:
            "Pierrefonds-Roxboro, l'Ouest-de-l'Île, Montréal, Laval et Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qui distingue une reconstruction d'une rénovation",
          description:
            "Reconstruire après un sinistre suit une logique différente. La portée n'est pas choisie par le propriétaire, elle est dictée par les dommages et par ce que la police couvre. Trois facteurs changent tout par rapport à un chantier ordinaire.",
          cards: [
            {
              title: "Les dommages dépassent ce qui se voit",
              description:
                "L'eau migre derrière les finis, la fumée imprègne les matériaux poreux, la moisissure se développe dans les cavités. Une portée établie à l'œil, sans ouvrir, laisse passer des dégâts qui ressortiront après les travaux.",
            },
            {
              title: "Le dossier d'assurance impose sa forme",
              description:
                "Un assureur et son expert travaillent avec une portée écrite pièce par pièce, des photos et un devis détaillé par poste. Un chiffrage global d'une page ralentit le règlement et alimente les désaccords.",
            },
            {
              title: "La distinction sinistre / amélioration",
              description:
                "Remettre en état ce qui existait relève de la réclamation ; améliorer ou agrandir relève de vous. Les deux se mélangent facilement. Nous les séparons dans le devis, pour que chacun sache ce qu'il paie.",
            },
            {
              title: "La conformité au Code a évolué",
              description:
                "Dans un bâtiment plus ancien, reconstruire peut exiger de mettre certaines composantes aux normes actuelles — électricité, ventilation, issue de secours au sous-sol. C'est à documenter tôt dans le dossier.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "sinistres",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Les sinistres que nous reconstruisons",
          intro:
            "Nous n'intervenons pas en urgence : le pompage, l'assèchement et la décontamination sont réalisés par des entreprises spécialisées. Nous prenons le relais sur la reconstruction, une fois les lieux asséchés et sécuritaires.",
          columns: "2",
          items: [
            {
              title: "Dégât d'eau et inondation",
              description:
                "Refoulement d'égout, tuyau éclaté, infiltration, crue.",
              icon: "droplets",
              bullets: [
                "Ouverture des murs et des planchers pour constater l'étendue réelle sous les finis.",
                "Remplacement du gypse, de l'isolant, du sous-plancher et des revêtements atteints.",
                "Vérification de la charpente et des solives avant de refermer.",
                "Reprise de l'électricité et de la plomberie touchées, avec inspection.",
              ],
            },
            {
              title: "Feu et fumée",
              description:
                "Dommages directs, suie, odeurs persistantes dans les matériaux.",
              icon: "hardHat",
              bullets: [
                "Démolition des sections atteintes et retrait des matériaux imprégnés.",
                "Reprise de la structure et de l'enveloppe selon les plans requis.",
                "Reconstruction complète des pièces touchées, du colombage à la peinture.",
                "Remplacement des armoires, des rangements et des finitions endommagés.",
              ],
            },
            {
              title: "Moisissures",
              description:
                "Souvent la conséquence d'une fuite lente ou d'une ventilation absente.",
              icon: "shieldCheck",
              bullets: [
                "Reconstruction après la décontamination réalisée par une firme spécialisée.",
                "Correction de la cause : ventilation, étanchéité, drainage, pare-vapeur mal posé.",
                "Choix de matériaux et d'assemblages adaptés aux zones humides.",
                "Finition refaite une fois le problème d'humidité réglé à la source.",
              ],
            },
            {
              title: "Sous-sol inondé",
              description:
                "La situation la plus fréquente dans l'Ouest-de-l'Île.",
              icon: "layers",
              bullets: [
                "Retrait des finis atteints jusqu'à hauteur sûre, y compris l'isolant derrière le gypse.",
                "Vérification du drain, de la pompe de puisard et des fissures de fondation.",
                "Remontage du mur avec un assemblage plus tolérant à l'humidité.",
                "Permis d'aménagement si le sous-sol est refini en espace habitable.",
              ],
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
          heading: "Ce que nous apportons à votre réclamation",
          intro:
            "Nous ne remplaçons ni votre assureur, ni votre expert en sinistre. Nous fournissons la matière technique dont la réclamation a besoin, dans le format qu'un assureur peut traiter, et nous restons disponibles pour les questions sur la portée des travaux.",
          items: [
            {
              title: "Une portée écrite, pièce par pièce",
              description:
                "Description des dommages et des travaux de remise en état pour chaque pièce, plutôt qu'un montant global. C'est le document qui permet de comparer et de discuter avec l'expert.",
            },
            {
              title: "Un devis détaillé par poste",
              description:
                "Démolition, mécanique, matériaux, main-d'œuvre, finition : chaque poste est chiffré séparément. Les ajustements se négocient ligne par ligne, pas sur une somme opaque.",
            },
            {
              title: "Une documentation photo",
              description:
                "Photos de l'état avant travaux, des ouvertures faites pour constater et des dommages cachés découverts en cours de démolition.",
            },
            {
              title: "La séparation sinistre / améliorations",
              description:
                "Si vous en profitez pour améliorer une pièce ou changer un agencement, la part hors sinistre est isolée dans le devis. Chacun sait ce qui relève de la police et ce qui relève de vous.",
            },
            {
              title: "Un interlocuteur unique jusqu'à la fin",
              description:
                "Le même entrepreneur du constat à la livraison, licencié et assuré. Pas de renvoi entre le démolisseur, le plâtrier et le poseur quand une question surgit.",
            },
          ],
          actions: [
            {
              label: "Voir la rénovation clé en main",
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
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Constat des dommages avant la reconstruction d'un plancher",
          },
          cardTitle: "Pourquoi la licence compte ici",
          cardDescription:
            "Licence RBQ 8306-0806-27, valide et sans restriction depuis 2004, cautionnement de 40 000 $ et aucune réclamation au dossier. Responsabilité civile et assurance chantier en vigueur. Des travaux réalisés par un entrepreneur licencié et inspectés se défendent mieux, autant auprès de l'assureur qu'au moment de la revente.",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Le déroulement d'une reconstruction",
          intro:
            "La portée finale est confirmée après l'ouverture des murs et selon le règlement de votre assureur. La séquence, elle, reste la même.",
          steps: [
            {
              number: "1",
              title: "Évaluation sur place",
              description:
                "Visite après l'assèchement, constat des dommages visibles et ouvertures ciblées pour vérifier ce qui se cache derrière les finis.",
            },
            {
              number: "2",
              title: "Portée et devis",
              description:
                "Description pièce par pièce, devis détaillé par poste et photos, dans un format utilisable par votre assureur et son expert.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Signature avec l'échéancier une fois la portée réglée, puis demande de permis si la reconstruction touche la structure, la plomberie ou l'aménagement d'un sous-sol.",
            },
            {
              number: "4",
              title: "Démolition et constat final",
              description:
                "Retrait complet des matériaux atteints. Les dommages cachés découverts ici sont documentés et soumis en complément de réclamation avant de poursuivre.",
            },
            {
              number: "5",
              title: "Reconstruction",
              description:
                "Charpente, plomberie, électricité, ventilation, isolation, inspections municipales, gypse, peinture, planchers et menuiserie sur mesure.",
            },
            {
              number: "6",
              title: "Livraison",
              description:
                "Inspection finale avec vous, liste des derniers points, nettoyage, remise des lieux et entrée en vigueur de la garantie contractuelle.",
            },
          ],
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Les espaces reconstruits le plus souvent",
          intro:
            "Après un dégât d'eau, ce sont d'abord le sous-sol, la cuisine, la salle de bain et les planchers qui demandent une reconstruction complète.",
          items: [
            {
              title: "Finition de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "L'espace le plus exposé aux refoulements et aux inondations. Reconstruction du bas de mur, de l'isolation et de la finition, avec correction du drainage.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol reconstruit après une inondation",
              },
              badges: ["Sous-sol", "Drainage"],
              footerCtaLabel: "Voir sous-sol",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Quand l'eau atteint la cuisine, les caissons du bas, le sous-plancher et parfois la plomberie sont à remplacer.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Cuisine reconstruite après un dégât d'eau",
              },
              badges: ["Cuisine", "Armoires"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Une fuite prolongée derrière la douche demande de tout ouvrir, de réparer la structure et de refaire l'étanchéité au complet.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Salle de bain reconstruite après une fuite",
              },
              badges: ["Étanchéité", "Structure"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Le revêtement et souvent le sous-plancher sont à refaire après une inondation. Test d'humidité avant toute nouvelle pose.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Plancher remplacé après un dégât d'eau",
              },
              badges: ["Plancher", "Humidité"],
              footerCtaLabel: "Voir plancher",
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
          heading: "Ce qu'une reconstruction bien menée doit produire",
          description:
            "Le but n'est pas seulement de refaire présentable. C'est de ramener le bâtiment à un état sain, conforme et documenté, pour que le sinistre ne se rejoue pas dans deux ans.",
          cards: [
            {
              title: "Un bâtiment réellement assaini",
              description:
                "Les matériaux atteints ont été retirés, pas recouverts, et la cause du sinistre a été corrigée quand elle relevait du bâtiment.",
            },
            {
              title: "Un dossier qui tient",
              description:
                "Portée écrite, devis par poste et photos : une réclamation appuyée par des documents que l'assureur peut traiter.",
            },
            {
              title: "Des travaux conformes et garantis",
              description:
                "Permis obtenus, inspections passées, entrepreneur licencié et assuré, garantie contractuelle à la livraison.",
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
          heading: "FAQ — rénovation après sinistre",
          intro:
            "Urgence, assurance, portée, délais, permis, dommages cachés et garantie.",
          items: [
            {
              q: "Faites-vous l'urgence, le pompage et l'assèchement ?",
              a: "Non. Le pompage, l'assèchement, la désinfection et la décontamination sont des interventions d'urgence réalisées par des entreprises spécialisées, souvent mandatées directement par l'assureur. Nous prenons le relais sur la reconstruction, une fois les lieux asséchés et sécuritaires.",
            },
            {
              q: "Travaillez-vous avec mon assurance ?",
              a: "Nous fournissons la portée écrite pièce par pièce, le devis détaillé par poste et la documentation photo dont votre réclamation a besoin, et nous restons disponibles pour répondre aux questions techniques de l'expert. Vous demeurez l'assuré et l'interlocuteur de votre assureur ; nous appuyons le volet reconstruction.",
            },
            {
              q: "Puis-je choisir mon entrepreneur ?",
              a: "En règle générale, oui : le propriétaire choisit qui exécute les travaux, même lorsque l'assureur propose des entreprises de son réseau. Vérifiez les modalités de votre police et discutez-en avec votre assureur avant de signer quoi que ce soit. Nous fournissons les documents nécessaires pour que notre devis soit comparé aux autres.",
            },
            {
              q: "Combien de temps après le sinistre peut-on commencer ?",
              a: "La reconstruction commence une fois l'assèchement terminé, la portée arrêtée et le règlement de la réclamation suffisamment avancé. L'évaluation et le montage du devis peuvent se faire en parallèle de l'assèchement, ce qui évite de perdre plusieurs semaines.",
            },
            {
              q: "Et si vous découvrez d'autres dommages en démolissant ?",
              a: "C'est fréquent, surtout après un dégât d'eau. Nous documentons les dommages cachés avec photos et description, vous soumettons le coût par écrit et vous permettons de déposer un complément de réclamation avant de poursuivre. Rien n'est refermé sur un problème connu.",
            },
            {
              q: "Faut-il un permis pour reconstruire ?",
              a: "Souvent, oui. Dès que la reconstruction touche la structure, déplace la plomberie ou consiste à refinir un sous-sol en espace habitable, un permis est requis. Nous vérifions avec votre ville ou arrondissement et déposons la demande. Des travaux faits sans permis peuvent compliquer la revente et une réclamation future.",
            },
            {
              q: "Reconstruisez-vous à l'identique ou peut-on améliorer ?",
              a: "Les deux sont possibles. La remise en état de ce qui existait relève de la réclamation ; les améliorations que vous souhaitez ajouter sont à votre charge. Nous séparons clairement les deux parts dans le devis, pour que vous et votre assureur sachiez exactement ce qui relève de quoi.",
            },
            {
              q: "Intervenez-vous à Pierrefonds-Roxboro et dans l'Ouest-de-l'Île ?",
              a: "Oui. Nos bureaux sont au 18625, rue Larocque à Pierrefonds-Roxboro, et nous couvrons tout l'Ouest-de-l'Île, Montréal, Laval, la Rive-Sud et Vaudreuil-Soulanges. Nous connaissons le parc résidentiel des secteurs riverains et leurs contraintes.",
            },
            {
              q: "Quels espaces reconstruisez-vous ?",
              a: "Surtout les sous-sols, les cuisines, les salles de bain et les planchers, mais la portée peut couvrir la maison entière selon les dommages. Les armoires, vanités et rangements endommagés sont refabriqués sur mesure et installés par nos équipes, sous la sous-catégorie 12 de notre licence.",
            },
            {
              q: "Les travaux sont-ils garantis ?",
              a: "Oui. Les travaux de reconstruction sont garantis et les modalités figurent au contrat. Notre licence RBQ 8306-0806-27 est valide et sans restriction depuis 2004, avec un cautionnement de 40 000 $ et aucune réclamation au dossier. Responsabilité civile et assurance chantier sont en vigueur.",
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
          heading: "Un sinistre à reconstruire dans l'Ouest-de-l'Île ?",
          intro:
            "Nous évaluons les dommages, montons la portée et le devis détaillé pour votre réclamation, puis nous reconstruisons sous un seul contrat. Appelez le (514) 820-0773 ou demandez une évaluation.",
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
          note: "Licence RBQ 8306-0806-27 · Pierrefonds-Roxboro, l'Ouest-de-l'Île et le Grand Montréal",
        },
      },
    },
  ],
};
