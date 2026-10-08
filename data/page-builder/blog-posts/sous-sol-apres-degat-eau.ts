// Article : sous-sol après un dégât d'eau (requêtes « dégât d'eau sous-sol »,
// « sous-sol inondé quoi faire », faible concurrence selon Keyword Planner
// 2026-06-21). Angle reconstruction, pas urgence : Dilamco ne fait ni pompage
// ni assèchement (cf. /services/renovation/apres-sinistre). Les conseils
// d'assurance restent généraux (avenants à vérifier dans la police).
// Consignes de sécurité : RBQ, « Inondations : conseils aux sinistrés »
// (https://www.rbq.gouv.qc.ca/les-grands-dossiers/inondations/, consulté 2026-10-08) :
// jamais d'interrupteur les pieds dans l'eau, pas de chauffage inondé pour sécher,
// vérifier l'égout municipal, électricité par entrepreneur licencié (16).

import type { BlogPost } from "@/features/blog/model";

export const post: BlogPost = {
  slug: "sous-sol-apres-degat-eau",
  locale: "fr",
  category: "sinistre",
  publishedAt: "2026-10-08",
  title: "Sous-sol inondé : les étapes, de l'assèchement à la reconstruction",
  metaTitle: "Sous-sol inondé : les étapes après un dégât d'eau",
  description:
    "Dégât d'eau au sous-sol : quoi faire les premières heures, qui assèche, quoi jeter, comment trouver la cause et reconstruire sans revivre le problème.",
  excerpt:
    "L'ordre des étapes après un dégât d'eau au sous-sol, et les erreurs qui font revenir l'humidité un an plus tard.",
  cover: {
    src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
    alt: "Sous-sol fini avec meuble télé encastré et coin bar",
  },
  body: [
    {
      type: "callout",
      title: "En bref",
      items: [
        "Sécurité d'abord, puis photos, puis appel à l'assureur.",
        "L'assèchement revient à une firme spécialisée ; la reconstruction vient après.",
        "On ne refinit jamais un sous-sol avant d'avoir corrigé ce qui a laissé entrer l'eau.",
      ],
    },
    {
      type: "h2",
      text: "Les premières heures : sécurité, photos, assureur",
    },
    {
      type: "ol",
      items: [
        "**Ne touchez à rien d'électrique les pieds dans l'eau**, pas même l'interrupteur principal. Si l'eau atteint des prises, une plinthe chauffante ou le panneau, faites couper le courant par un électricien ou par Hydro-Québec.",
        "**Photographiez tout** avant de déplacer quoi que ce soit : la hauteur de l'eau sur les murs, les meubles, les boîtes, l'endroit d'où l'eau semble venir.",
        "**Appelez votre assureur** et notez le numéro de dossier. Demandez ce qu'il couvre et s'il envoie une firme d'urgence.",
        "**Gardez les preuves** : ne jetez pas les biens abîmés avant que l'expert les ait vus, ou photographiez-les avec une étiquette.",
      ],
    },
    {
      type: "h2",
      text: "Qui assèche et qui reconstruit",
    },
    {
      type: "p",
      text: "Ce sont deux métiers différents. Le pompage, l'assèchement et la décontamination reviennent à des firmes spécialisées, souvent envoyées par l'assureur. Elles installent des déshumidificateurs et mesurent l'humidité des murs jusqu'à ce qu'ils soient secs. L'entrepreneur général prend le relais pour [reconstruire après le sinistre](/services/renovation/apres-sinistre) : murs, isolation, planchers, plomberie et finition.",
    },
    {
      type: "p",
      text: "Le délai compte. Des moisissures peuvent apparaître en 24 à 48 heures sur le gypse et l'isolant mouillés. Plus l'assèchement commence tôt, moins il y a de matériaux à jeter.",
    },
    {
      type: "callout",
      title: "Avant de remettre en marche",
      items: [
        "N'utilisez pas une fournaise ou des plinthes inondées pour sécher : faites-les inspecter d'abord.",
        "Confirmez auprès de votre municipalité que l'égout fonctionne avant d'utiliser éviers et toilettes.",
        "Les prises, fils et plinthes touchés sont remplacés par un entrepreneur électricien licencié, jamais par le propriétaire.",
      ],
    },
    {
      type: "h2",
      text: "Ce qu'il faut retirer, et ce qu'on peut garder",
    },
    {
      type: "p",
      text: "Les matériaux poreux qui ont trempé ne sèchent pas en profondeur. On les retire jusqu'à une hauteur saine, souvent 30 à 60 cm au-dessus de la marque laissée par l'eau.",
    },
    {
      type: "table",
      head: ["Matériau", "Après un dégât d'eau"],
      rows: [
        ["Gypse et isolant en natte", "Retirés au-dessus de la marque d'eau"],
        ["Tapis et sous-tapis", "Jetés"],
        ["Plancher flottant stratifié", "Presque toujours remplacé : le panneau gonfle"],
        ["Vinyle de luxe et céramique", "Souvent récupérables, à vérifier dessous"],
        ["Montants de bois", "Gardés s'ils sèchent et restent sains"],
        ["Béton (dalle et murs)", "Gardé ; on cherche les fissures une fois sec"],
      ],
    },
    {
      type: "h2",
      text: "Trouver ce qui a laissé entrer l'eau",
    },
    {
      type: "p",
      text: "Refinir un sous-sol sans corriger la cause, c'est payer deux fois. Une fois les murs ouverts, on cherche d'où l'eau est venue. Les causes les plus fréquentes dans les maisons de l'Ouest-de-l'Île :",
    },
    {
      type: "ul",
      items: [
        "**Refoulement d'égout** : l'eau remonte par le drain de plancher pendant un gros orage. La solution est un clapet antiretour, entretenu.",
        "**Pompe de puisard** en panne ou trop petite, sans alarme ni batterie de secours.",
        "**Fissure** dans la fondation, qui laisse entrer l'eau du sol.",
        "**Terrain** qui verse vers la maison, ou gouttières qui se vident au pied du mur.",
        "**Drain français** colmaté autour de la fondation.",
      ],
    },
    {
      type: "p",
      text: "Beaucoup d'assureurs exigent un clapet antiretour pour couvrir le refoulement d'égout, et plusieurs villes l'imposent. Faites-le vérifier avant de refermer quoi que ce soit.",
    },
    {
      type: "h2",
      text: "Reconstruire un sous-sol qui tolère l'humidité",
    },
    {
      type: "p",
      text: "Un sous-sol reste plus humide que le reste de la maison. La reconstruction est l'occasion de choisir des matériaux qui pardonnent :",
    },
    {
      type: "ul",
      items: [
        "Isolant rigide collé au béton, qui ne retient pas l'eau",
        "Murs montés légèrement décollés de la fondation",
        "Gypse résistant à l'humidité dans le bas des murs",
        "Revêtement de sol en vinyle ou en céramique plutôt qu'en stratifié",
        "Prises électriques assez hautes pour échapper à une petite inondation",
      ],
    },
    {
      type: "p",
      text: "Si le sous-sol était habitable, la reconstruction demande souvent un permis, surtout si la plomberie bouge ou si une chambre est refaite. Les détails techniques d'une [finition de sous-sol](/services/renovation/sous-sol) sont sur notre page dédiée.",
    },
    {
      type: "h2",
      text: "Préparer la réclamation avec l'entrepreneur",
    },
    {
      type: "p",
      text: "L'assureur compare le prix de reconstruction à son propre barème. Plus le devis est détaillé, plus la comparaison est simple. Demandez à l'entrepreneur :",
    },
    {
      type: "ul",
      items: [
        "Une liste des dommages pièce par pièce, avec photos",
        "Un prix par type de travaux plutôt qu'un montant global",
        "Des lignes séparées pour ce qui n'est pas lié au sinistre (un agrandissement de fenêtre, par exemple)",
        "Un écrit pour chaque dommage caché trouvé en cours de travaux",
      ],
    },
    {
      type: "p",
      text: "Vérifiez dans votre police les avenants qui s'appliquent : refoulement d'égout, eaux de surface ou eaux souterraines ne sont pas couverts par défaut, et chacun a sa limite.",
    },
  ],
  faq: {
    heading: "Questions sur un sous-sol inondé",
    items: [
      {
        q: "Combien de temps attendre avant de reconstruire ?",
        a: "Jusqu'à ce que la firme d'assèchement confirme, mesures à l'appui, que le béton et les montants sont secs. Refermer un mur humide piège l'eau et fait pousser la moisissure derrière le gypse neuf.",
      },
      {
        q: "Puis-je choisir mon entrepreneur si l'assureur en suggère un ?",
        a: "En général, oui : c'est vous l'assuré. Lisez votre police et informez l'expert de votre choix. Fournissez-lui un devis détaillé pour qu'il puisse le comparer.",
      },
      {
        q: "Faut-il tout refaire si seulement 5 cm d'eau sont entrés ?",
        a: "Pas tout. Le bas du gypse, l'isolant et le revêtement de sol sont habituellement remplacés. Les murs plus haut, les plafonds et les montants secs restent en place.",
      },
      {
        q: "Peut-on en profiter pour réaménager le sous-sol ?",
        a: "Oui. L'assureur paie la remise en état ; ce que vous ajoutez est facturé à part, sur ses propres lignes. Beaucoup de clients profitent des murs ouverts pour revoir les pièces.",
      },
    ],
  },
  related: {
    heading: "Pour aller plus loin",
    items: [
      {
        title: "Reconstruction après sinistre",
        href: "/services/renovation/apres-sinistre",
        description: "Ce qu'on prend en charge après l'assèchement",
      },
      {
        title: "Finition de sous-sol",
        href: "/services/renovation/sous-sol",
        description: "Isolation, drainage et permis",
      },
      {
        title: "Pierrefonds-Roxboro",
        href: "/zones/pierrefonds-roxboro",
        description: "Notre base, dans l'Ouest-de-l'Île",
      },
    ],
  },
  sources: [
    {
      title: "Régie du bâtiment du Québec, « Inondations : conseils aux sinistrés »",
      url: "https://www.rbq.gouv.qc.ca/les-grands-dossiers/inondations/",
    },
    {
      title: "Régie du bâtiment du Québec, « Vérifier la licence d'un entrepreneur »",
      url: "https://www.rbq.gouv.qc.ca/vous-etes/citoyen/verifier-la-licence-dun-entrepreneur/",
    },
  ],
  cta: {
    heading: "Un sous-sol à reconstruire ?",
    intro: "Une fois les lieux secs, on constate les dommages et on monte un devis que votre assureur peut lire ligne par ligne.",
  },
};
