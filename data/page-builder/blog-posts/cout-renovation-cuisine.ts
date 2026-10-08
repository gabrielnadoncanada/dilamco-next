// Article : prix d'une rénovation de cuisine (requêtes « prix rénovation
// cuisine », « coût rénovation cuisine québec », « combien coûte une cuisine »).
// Concurrent de référence : cuisinesrochon.com/blogue/renovation-cuisine-prix
// (~2 000 mots, ventilation par poste, mais aucune source et des totaux qui se
// contredisent). Notre angle : des fourchettes cohérentes partout (celles de
// /services/renovation/cuisine et de l'accueil), une réponse directe sous
// chaque question, des sources officielles.
//
// Faits et sources (consultés le 2026-10-08) :
// - Soumissions réelles de Dilamco (dossier Ventes/Résidentiel, anonymisées :
//   aucun nom, aucune adresse) : cuisine A, oct. 2025, Rive-Nord, 29 250 $
//   ventilée en 11 postes ; cuisine B, mars 2026, Rive-Nord, 49 225 $ ventilée en
//   9 postes ; cuisine complète nov. 2025, Montréal, 25 835 $ ; cuisine sans
//   comptoir avec bois franc ~408 pi², oct. 2025, Laval, 41 300 $. Tous les prix
//   sont avant taxes, électroménagers exclus (confirmé par Sean Diffley le
//   2026-10-08). Acompte de 40 % à la commande. Travaux sur place : 7 à 10 jours
//   ouvrables pour la cuisine A.
// - Rafraîchissement dès 20 000 $ et aire ouverte au-delà de 50 000 $ :
//   data/page-builder/renovation-pages/cuisine.ts.
// - 9 à 15 semaines entre plans signés et pose ; 2 à 4 semaines de conception :
//   pages espaces et service design.
// - Montréal (montreal.ca/demarches/renover-linterieur-dun-batiment) : armoires,
//   comptoir, évier remplacés sans permis ; permis si structure ou division des
//   pièces modifiées ; pas de permis municipal pour plomberie/électricité intérieures.
// - Électricité : licence CMEQ ; plomberie : licence CMMTQ.
// - Taxes : TPS 5 % + TVQ 9,975 %.

import type { BlogPost } from "@/features/blog/model";

export const post: BlogPost = {
  slug: "cout-renovation-cuisine",
  locale: "fr",
  category: "budget",
  publishedAt: "2026-10-08",
  title: "Combien coûte une rénovation de cuisine au Québec en 2026",
  metaTitle: "Prix d'une rénovation de cuisine en 2026 (Québec)",
  description:
    "Rénovation de cuisine en 2026 : 25 000 à 50 000 $ avant taxes pour une cuisine complète. Deux vraies soumissions ventilées poste par poste.",
  excerpt:
    "Deux de nos vraies soumissions, poste par poste, ce qui fait bouger la facture, les délais et les erreurs qui coûtent le plus cher.",
  cover: {
    src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
    alt: "Cuisine blanche rénovée avec îlot en quartz",
  },
  body: [
    {
      type: "callout",
      title: "En bref",
      items: [
        "Rafraîchissement en gardant les caissons : **à partir de 20 000 $**.",
        "Cuisine refaite au complet, même disposition : **25 000 $ à 50 000 $** avant taxes.",
        "Les armoires représentent **40 % à 51 %** du prix dans nos soumissions ; le plancher neuf fait le plus grand écart.",
        "Cuisine ouverte sur le salon ou plancher refait dans les pièces voisines : **plus de 50 000 $**.",
        "Les trois décisions qui coûtent le plus : déplacer l'évier, retirer un mur porteur, évacuer la hotte dehors.",
        "Comptez 9 à 15 semaines entre les plans signés et la pose des armoires sur mesure.",
      ],
    },
    {
      type: "h2",
      text: "Quel est le prix d'une rénovation de cuisine en 2026 ?",
      id: "prix-2026",
    },
    {
      type: "p",
      text: "Dans le Grand Montréal, une rénovation de cuisine complète coûte **de 25 000 $ à 50 000 $ avant taxes** en 2026 quand la disposition reste la même. Un rafraîchissement qui conserve les caissons démarre à **20 000 $**. Une cuisine ouverte sur le salon, avec un mur porteur retiré, dépasse **50 000 $**.",
    },
    {
      type: "p",
      text: "Ces montants viennent de nos soumissions de 2025 et 2026 à Montréal, à Laval et sur la Rive-Nord. Ils comprennent la main-d'œuvre, les armoires, le comptoir et les corps de métier. Les électroménagers n'y sont jamais inclus, et les taxes s'ajoutent à la fin.",
    },
    {
      type: "table",
      caption: "Fourchettes de nos chantiers de cuisine. Le prix ferme est fixé après une visite.",
      head: ["Type de chantier", "Prix indicatif", "Travaux compris"],
      rows: [
        [
          "Rafraîchissement",
          "à partir de 20 000 $",
          "Caissons conservés. Portes ou façades, comptoir, dosseret, évier, robinet et peinture.",
        ],
        [
          "Cuisine complète",
          "25 000 $ à 50 000 $",
          "Démolition, armoires neuves, comptoir, plomberie et circuits refaits, plancher de la cuisine.",
        ],
        [
          "Cuisine et aire ouverte",
          "plus de 50 000 $",
          "Tout ce qui précède, plus la poutre, l'ingénieur, le permis et le plancher prolongé.",
        ],
      ],
    },
    {
      type: "h2",
      text: "Deux vraies soumissions, poste par poste",
      id: "soumissions-reelles",
    },
    {
      type: "p",
      text: "Voici deux soumissions de cuisine complète que nous avons remises, sans nom ni adresse. Dans les deux cas : armoires sur mesure, comptoir de quartz, aucun travail de structure. **La cuisine B coûte 19 975 $ de plus**, et le plancher en explique à lui seul 39 %.",
    },
    {
      type: "table",
      caption: "Montants avant taxes, électroménagers exclus. Cuisine A : octobre 2025, Rive-Nord. Cuisine B : mars 2026, Rive-Nord.",
      head: ["Poste", "Cuisine A", "Cuisine B"],
      rows: [
        ["Armoires sur mesure, fournies et posées", "14 800 $", "19 500 $"],
        ["Comptoir de quartz", "3 200 $", "7 475 $"],
        ["Dosseret de céramique ou de porcelaine", "1 800 $", "3 500 $"],
        ["Plancher", "800 $ (retouches)", "8 600 $ (bois franc neuf)"],
        ["Électricité, luminaires compris", "2 200 $", "2 900 $"],
        ["Plomberie, évier et robinet compris", "2 400 $", "2 600 $"],
        ["Gypse, peinture et plinthes", "900 $", "4 650 $"],
        ["Démolition et rebuts", "1 500 $", "dans les postes"],
        ["Conception et gestion de projet", "1 250 $", "dans les postes"],
        ["Raccordement des électroménagers", "400 $", "dans les postes"],
        ["**Total avant taxes**", "**29 250 $**", "**49 225 $**"],
        ["Total avec TPS et TVQ", "33 630 $", "56 596 $"],
      ],
    },
    {
      type: "p",
      text: "Trois leçons ressortent. Les armoires pèsent de 40 % à 51 % du total, peu importe le budget. Le plancher est le poste qui varie le plus : de simples retouches autour des nouvelles armoires, ou un bois franc neuf dans toute la pièce. Enfin, le comptoir double facilement selon sa longueur et le nombre de découpes.",
    },
    {
      type: "p",
      text: "Sur nos deux autres soumissions récentes, une cuisine complète à Montréal s'établissait à **25 835 $**, et une cuisine à Laval avec 408 pi² de bois franc, comptoir exclu, à **41 300 $**, toujours avant taxes.",
    },
    {
      type: "h2",
      text: "Qu'est-ce qui fait monter le prix d'une cuisine ?",
      id: "facteurs-de-prix",
    },
    {
      type: "p",
      text: "À surface égale, l'écart entre deux cuisines vient des décisions prises au plan, pas de la taille de la pièce. Voici les postes qui pèsent le plus, du plus lourd au plus léger.",
    },
    {
      type: "table",
      head: ["Décision", "Effet sur le prix", "Pourquoi"],
      rows: [
        [
          "Retirer un mur porteur",
          "Très élevé",
          "Ingénieur, poutre, appuis jusqu'à la fondation, permis et raccords de plancher.",
        ],
        [
          "Déplacer l'évier vers un îlot",
          "Élevé",
          "Le drain, l'eau et l'évent suivent ; on ouvre le plancher ou le plafond du sous-sol.",
        ],
        [
          "Armoires pleine hauteur et tiroirs",
          "Élevé",
          "Le nombre de modules, de tiroirs et d'accessoires pèse plus que le fini.",
        ],
        [
          "Hotte évacuée dehors",
          "Moyen",
          "Conduit à travers le mur ou le toit, isolation et réparation du revêtement.",
        ],
        [
          "Nouveaux circuits électriques",
          "Moyen",
          "Îlot avec prises, plaque à induction, four mural ; parfois un nouveau panneau.",
        ],
        [
          "Comptoir",
          "Variable",
          "Le matériau, l'épaisseur, le nombre de découpes et de joints fixent le prix.",
        ],
      ],
    },
    {
      type: "h3",
      text: "Garder l'évier à sa place",
    },
    {
      type: "p",
      text: "C'est la première économie possible. Un évier déplacé vers un îlot entraîne avec lui le drain, l'alimentation en eau et l'évent. Si le sous-sol est fini, on ouvre aussi son plafond, puis on le referme et on le repeint.",
    },
    {
      type: "h3",
      text: "Retirer un mur porteur",
    },
    {
      type: "p",
      text: "Retirer un mur qui soutient l'étage est un projet dans le projet. Un ingénieur calcule la poutre et ses appuis, son plan accompagne la demande de permis, et le plancher doit être raccordé entre les deux pièces. C'est ce poste qui fait passer une cuisine dans la troisième fourchette.",
    },
    {
      type: "h3",
      text: "Évacuer la hotte à l'extérieur",
    },
    {
      type: "p",
      text: "Une hotte qui évacue dehors retire la graisse, les odeurs et l'humidité de la cuisson. Elle demande un conduit à travers un mur extérieur ou le toit. Une hotte à recirculation coûte moins cher à poser, mais elle filtre l'air sans le renouveler.",
    },
    {
      type: "h2",
      text: "Que doit comprendre une soumission de cuisine ?",
      id: "soumission",
    },
    {
      type: "p",
      text: "Une soumission comparable nomme chaque poste et son prix. Si l'un des postes ci-dessous manque, il sera facturé plus tard ou il n'est pas prévu : demandez-le par écrit avant de signer.",
    },
    {
      type: "ul",
      items: [
        "Démolition, protection des pièces voisines et sortie des débris",
        "Plomberie : drains, alimentations, raccordement du lave-vaisselle et du réfrigérateur",
        "Électricité : circuits dédiés, prises de comptoir, éclairage sous les armoires",
        "Hotte et son conduit jusqu'à l'extérieur",
        "Armoires, quincaillerie, comptoir, dosseret et pose",
        "Plancher, gypse, peinture et moulures",
        "Permis et plans, si les travaux en exigent",
        "Échéancier écrit et calendrier des paiements",
      ],
    },
    {
      type: "p",
      text: "Demandez aussi si le prix est donné avant ou après taxes ; les nôtres le sont toujours avant taxes. Au Québec, la TPS (5 %) et la TVQ (9,975 %) s'ajoutent : sur une cuisine de 40 000 $ avant taxes, elles représentent 5 990 $.",
    },
    {
      type: "callout",
      title: "Gardez une réserve de 10 à 15 %",
      text: "La démolition révèle parfois du bois abîmé sous l'évier, des fils hors norme ou un plancher à niveler. Chez nous, chaque découverte est photographiée et chiffrée par écrit avant d'être réparée : vous décidez avant de payer.",
    },
    {
      type: "h2",
      text: "Combien de temps dure une rénovation de cuisine ?",
      id: "duree",
    },
    {
      type: "p",
      text: "Une rénovation de cuisine sur mesure prend **environ trois à cinq mois** entre la première visite et la dernière retouche. Le chantier lui-même ne dure que quelques semaines ; le reste du temps, les armoires sont en fabrication.",
    },
    {
      type: "table",
      head: ["Étape", "Durée", "Ce qui se passe"],
      rows: [
        ["Visite et soumission", "1 à 2 semaines", "Mesures, vérification du panneau et du sous-sol, prix écrit"],
        ["Conception", "2 à 4 semaines", "Plans, choix des finis, ajustements"],
        ["Fabrication des armoires", "9 à 15 semaines", "Production à partir des plans signés"],
        ["Chantier", "7 à 10 jours ouvrables et plus", "Démolition, plomberie, électricité, pose, comptoir, finition"],
      ],
    },
    {
      type: "p",
      text: "Pour la cuisine A, nous prévoyions 7 à 10 jours ouvrables de travaux sur place. Un plancher neuf, des murs ouverts ou un comptoir posé après les armoires allongent ce délai. On cale la démolition sur la date de livraison des armoires : vous vivez ainsi le moins longtemps possible sans évier.",
    },
    {
      type: "h2",
      text: "Faut-il un permis pour rénover une cuisine ?",
      id: "permis",
    },
    {
      type: "p",
      text: "**Non, pas pour remplacer des armoires, un comptoir ou un évier au même endroit.** La Ville de Montréal classe ces travaux parmi les rénovations esthétiques sans permis. Un permis devient nécessaire dès qu'on touche à la structure ou qu'on modifie les dimensions ou la division des pièces, par exemple en retirant un mur.",
    },
    {
      type: "p",
      text: "La Ville ne délivre pas de permis pour la plomberie et l'électricité intérieures, mais ces travaux restent encadrés : l'électricité est faite par un entrepreneur licencié par la CMEQ, la plomberie par un entrepreneur licencié par la CMMTQ. Les règles d'urbanisme varient d'une ville et d'un arrondissement à l'autre : nos pages [zones desservies](/zones) résument celles de chaque municipalité.",
    },
    {
      type: "h2",
      text: "Les erreurs qui coûtent le plus cher",
      id: "erreurs",
    },
    {
      type: "ol",
      items: [
        "**Comparer des totaux au lieu des postes.** La soumission la plus basse est souvent celle qui oublie la hotte, l'électricité ou le permis.",
        "**Changer le plan après la commande.** Une armoire modifiée en cours de fabrication repart au début du délai.",
        "**Choisir les électroménagers en dernier.** Leurs dimensions et leurs circuits fixent les armoires ; donnez leurs fiches avant les plans.",
        "**Démolir sans vérifier le panneau électrique.** Un panneau plein découvert en cours de chantier retarde tout.",
        "**Payer comptant sans contrat.** Sans contrat écrit qui porte le numéro de licence, vous perdez le recours au cautionnement de l'entrepreneur.",
      ],
    },
    {
      type: "h2",
      text: "Comment obtenir un prix ferme pour votre cuisine ?",
      id: "prix-ferme",
    },
    {
      type: "p",
      text: "Un prix ferme exige une visite chez vous : on mesure, on regarde sous l'évier, on ouvre le panneau électrique et on descend au sous-sol sous la cuisine. Vous recevez ensuite une soumission poste par poste, avec l'échéancier. Un prix au pied carré trouvé en ligne, lui, ne décrit pas votre cuisine. Avant de comparer, [vérifiez la licence RBQ](/blogue/verifier-licence-rbq-entrepreneur) de chaque entrepreneur.",
    },
  ],
  faq: {
    heading: "Questions sur le prix d'une cuisine",
    items: [
      {
        q: "Peut-on garder les armoires et ne changer que les portes ?",
        a: "Oui, si les caissons sont sains et la disposition vous convient. On remplace alors les portes, le comptoir et la quincaillerie. C'est le moyen le plus direct de rester près de 20 000 $.",
      },
      {
        q: "Le prix comprend-il les électroménagers ?",
        a: "Non. Vous les choisissez et les achetez ; on les raccorde. Donnez-nous leurs fiches techniques avant les plans, car les dimensions et les circuits en dépendent.",
      },
      {
        q: "Pourquoi deux soumissions pour la même cuisine sont-elles si différentes ?",
        a: "Souvent parce qu'elles ne couvrent pas la même chose. Comparez ligne par ligne : permis, électricité, hotte, plancher et sortie des débris sont les postes le plus souvent oubliés.",
      },
      {
        q: "Faut-il verser un acompte ?",
        a: "Oui, car les armoires sur mesure se commandent avant la démolition. Chez nous, c'est 40 % à la commande, puis le solde en deux versements liés à la livraison des armoires et à la fin des travaux, écrits au contrat.",
      },
      {
        q: "Une cuisine rénovée augmente-t-elle la valeur de la maison ?",
        a: "Elle aide surtout à vendre, car c'est l'une des pièces que les acheteurs regardent en premier. Le gain exact dépend du quartier et de l'état du reste de la maison : demandez l'avis d'un courtier local avant d'investir pour revendre.",
      },
    ],
  },
  related: {
    heading: "Pour aller plus loin",
    items: [
      {
        title: "Rénovation de cuisine",
        href: "/services/renovation/cuisine",
        description: "Ce qu'on fait, étape par étape",
      },
      {
        title: "Cuisines sur mesure",
        href: "/espaces/cuisine",
        description: "Armoires, îlots et rangements",
      },
      {
        title: "Comparatif des matériaux",
        href: "/materiaux/comparatif",
        description: "Contreplaqué, MDF, mélamine",
      },
      {
        title: "Nos réalisations",
        href: "/projets",
        description: "Cuisines livrées dans le Grand Montréal",
      },
    ],
  },
  sources: [
    {
      title: "Ville de Montréal, « Rénover l'intérieur d'un bâtiment »",
      url: "https://montreal.ca/demarches/renover-linterieur-dun-batiment",
    },
    {
      title: "Régie du bâtiment du Québec, « Ce que la RBQ ne fait pas » (licences d'électricité et de plomberie)",
      url: "https://www.rbq.gouv.qc.ca/en/you-are/contractor/the-rbq-and-you/what-the-rbq-does-not-do/",
    },
    {
      title: "Régie du bâtiment du Québec, « Vérifier la licence d'un entrepreneur »",
      url: "https://www.rbq.gouv.qc.ca/vous-etes/citoyen/verifier-la-licence-dun-entrepreneur/",
    },
    {
      title: "Revenu Québec, taux de la TPS et de la TVQ",
      url: "https://www.revenuquebec.ca/fr/entreprises/taxes/tpstvh-et-tvq/perception-de-la-tps-et-de-la-tvq/calcul-des-taxes/",
    },
  ],
  cta: {
    heading: "Faites chiffrer votre cuisine",
    intro: "On mesure chez vous et on vous remet un prix poste par poste, sans frais.",
  },
};
