// Article : permis pour agrandir une maison dans l'Ouest-de-l'Île (requêtes
// « agrandissement de maison <ville> », « permis agrandissement maison »). Constat
// 2026-11-24 : les pages zones sont en position 4 à 9 sur « agrandissement de maison
// beaconsfield / kirkland / pointe-claire / DDO » sans clic ; l'aperçu IA de Google
// répond avec des prix et les frais de permis de la Ville. Aucune soumission
// d'agrandissement chez Dilamco : l'article ne donne AUCUN prix de travaux, seulement
// les frais et délais publiés par les villes, et un calcul d'exemple fait à partir
// de ces tarifs.
//
// Sources (consultées le 2026-11-24, montants vérifiés dans les documents) :
// - Loi sur les architectes, art. 16 et 16.1 (exemption : unifamiliale isolée, au plus
//   1 sous-sol et 2 étages, < 600 m² ; jumelée, en rangée ou ≤ 4 logements, < 300 m²) :
//   https://www.legisquebec.gouv.qc.ca/fr/document/lc/A-21
// - Garantie GCR, « Bâtiments couverts » (exclut « la rénovation de bâtiments tels qu'un
//   agrandissement ») : https://www.garantiegcr.com/fr/entrepreneurs/batiments-couverts/
// - Beaconsfield : BEAC-172 (tarifs 2026 : 14,75 $/1 000 $, min. 200 $, dépôt 2 500 $,
//   PIIA 600 $) et page « Renovation permit and certificate » (visible de la rue : minimum
//   4 mois ; sinon 1 mois de mars à septembre, 2 semaines d'octobre à février ; plans
//   signés et scellés, BEAC-045 art. 3.1.3).
// - Kirkland : GEN-2026-51 (8 $/1 000 $ unifamiliale, min. 50 $ ; PIIA 400 $),
//   PIIA-2022-55 art. 3(4) et 19, page « Solariums / Agrandissement » (plans signés et
//   scellés, photos des 4 façades, échantillons), règlement 90-61 (permis partiel de
//   fondation).
// - Pointe-Claire : guide « Comment obtenir un permis de construction » 2026 (13 $/1 000 $,
//   valeur minimale 1 410 $/m², dépôt 645 $ ou 3 120 $, sceau au-delà d'un tiers, 30 jours,
//   plan des arbres) ; sommaire des tarifs 2026 (PIIA 275 $ ou 625 $).
// - DDO : R-2025-211 (100 $ jusqu'à 24 999 $, puis 11 $/1 000 $), PIIA 99-875 art. 5.1.1
//   (tout agrandissement), R-2026-217 art. 60, 63, 80 (licence RBQ de l'exécutant, plans
//   de structure par un ingénieur, 30 jours).
// - Dorval : RCM-98-2023 (8 $/1 000 $ jusqu'à 100 000 $, 6 $ au-delà, dépôt 2 500 $, PIIA
//   1 000 $) ; RCM-60F-2016 art. 47 (30 jours ouvrables).
// - Pierrefonds-Roxboro : article de l'arrondissement (PIIA exigé pour tout agrandissement)
//   et CA29 0152 (étude PIIA 180 $). Tarif du permis : non publié par l'arrondissement.
// - L'Île-Bizard–Sainte-Geneviève : montreal.ca, démarche d'agrandissement (9,80 $/1 000 $,
//   documents, plans de structure par un ingénieur).
// - Vaudreuil-Dorion : règlement 1709 (amendement 1709-40), art. 8.24.4 (3,50 $/m², min.
//   200 $) ; PIIA 1277 limité aux zones visées.
// Contradiction connue : Beaconsfield publie « minimum 4 months » (page permis) et
// « minimum 2 months » à ajouter (tableau des délais) ; on cite la page permis.

import type { BlogPost } from "@/features/blog/model";

export const post: BlogPost = {
  slug: "permis-agrandissement-maison",
  locale: "fr",
  category: "permis",
  publishedAt: "2026-11-24",
  title: "Combien coûte un permis d'agrandissement dans l'Ouest-de-l'Île en 2026",
  metaTitle: "Permis d'agrandissement de maison, coût et délai (2026)",
  description:
    "Coût du permis, délais, comité, architecte : ce qu'exigent Beaconsfield, Kirkland, Pointe-Claire, DDO, Dorval et trois autres secteurs en 2026.",
  excerpt:
    "Ville par ville, ce que coûte le permis, combien de temps il prend et quels plans la Ville exige avant d'agrandir.",
  cover: {
    src: "/images/generated/renovation/renovation-extension-approach-01.webp",
    alt: "Planification d'un agrandissement de maison sur un terrain boisé",
  },
  body: [
    {
      type: "callout",
      title: "En bref",
      items: [
        "Tout agrandissement exige un **permis de construction** de la ville ou de l'arrondissement.",
        "Le permis coûte de **8 $ à 14,75 $ par tranche de 1 000 $ de travaux** dans l'Ouest-de-l'Île ; Vaudreuil-Dorion compte plutôt 3,50 $ par m² ajouté.",
        "Une rallonge visible de la rue passe presque partout devant un comité qui juge son apparence : prévoyez **des mois**, pas des semaines.",
        "Un architecte n'est pas obligatoire pour une maison isolée de deux étages ou moins et de moins de 600 m², mais plusieurs villes exigent des plans scellés.",
        "La garantie des maisons neuves (GCR) ne couvre **pas** un agrandissement : votre protection, c'est la licence RBQ et le contrat écrit.",
      ],
    },
    {
      type: "h2",
      text: "Faut-il un permis pour agrandir sa maison ?",
      id: "permis-obligatoire",
    },
    {
      type: "p",
      text: "**Oui, toujours.** Ajouter de la surface habitable, un étage ou un garage attenant modifie l'implantation du bâtiment : chaque ville de l'Ouest-de-l'Île exige un permis de construction avant le premier coup de pelle. La demande est analysée selon le règlement de zonage (marges, hauteur, part du terrain occupée) et, souvent, selon l'apparence du projet vu de la rue.",
    },
    {
      type: "p",
      text: "Le permis se demande à la ville, ou à l'arrondissement à Pierrefonds-Roxboro et à L'Île-Bizard–Sainte-Geneviève, qui font partie de Montréal. Les règles changent d'une municipalité à l'autre, même entre deux voisines comme Beaconsfield et Kirkland. C'est pourquoi on vérifie l'adresse exacte avant de faire dessiner les plans.",
    },
    {
      type: "h2",
      text: "Combien coûte un permis d'agrandissement ?",
      id: "cout-du-permis",
    },
    {
      type: "p",
      text: "Dans l'Ouest-de-l'Île, le permis d'agrandissement d'une maison coûte **entre 8 $ et 14,75 $ par tranche de 1 000 $ de travaux**, selon la ville, avec un minimum de 50 $ à 200 $. S'ajoutent parfois un dépôt de garantie, jusqu'à 3 120 $, et des frais d'étude de 180 $ à 1 000 $ quand un comité doit juger l'apparence du projet.",
    },
    {
      type: "table",
      caption: "Tarifs 2026 publiés par chaque ville pour l'agrandissement d'une maison unifamiliale. Vérifiés dans les règlements le 24 novembre 2026.",
      head: ["Ville ou secteur", "Permis", "Dépôt", "Étude d'apparence"],
      rows: [
        ["Beaconsfield", "14,75 $ par 1 000 $ (min. 200 $)", "2 500 $", "600 $ si visible de la rue"],
        ["Kirkland", "8 $ par 1 000 $ (min. 50 $)", "non publié", "400 $ selon le projet"],
        ["Pointe-Claire", "13 $ par 1 000 $, sur au moins 1 410 $ par m²", "645 $ ou 3 120 $", "275 $ ou 625 $"],
        ["Dollard-des-Ormeaux", "100 $ jusqu'à 24 999 $, puis 11 $ par 1 000 $", "non publié", "toujours requise"],
        ["Dorval", "8 $ par 1 000 $ jusqu'à 100 000 $, puis 6 $", "2 500 $", "1 000 $"],
        ["Pierrefonds-Roxboro", "non publié par l'arrondissement", "non publié", "180 $, toujours requise"],
        ["L'Île-Bizard–Sainte-Geneviève", "9,80 $ par 1 000 $", "non publié", "dans certains secteurs"],
        ["Vaudreuil-Dorion", "3,50 $ par m² ajouté (min. 200 $)", "non publié", "dans les zones visées"],
      ],
    },
    {
      type: "h3",
      text: "Exemple : 150 000 $ de travaux",
    },
    {
      type: "p",
      text: "Pour un agrandissement évalué à 150 000 $, le permis seul revient à **2 212,50 $ à Beaconsfield**, 1 950 $ à Pointe-Claire, 1 650 $ à DDO, 1 470 $ sur l'île Bizard, 1 200 $ à Kirkland et 1 100 $ à Dorval. À Vaudreuil-Dorion, une rallonge de 40 m² paie le minimum de 200 $. Les dépôts et l'étude d'apparence s'ajoutent à ces montants.",
    },
    {
      type: "p",
      text: "Le tarif se calcule sur la valeur estimée des travaux, pas sur le prix que vous négociez. Pointe-Claire impose même une valeur plancher de 1 410 $ par m² de plancher ajouté : une rallonge de 50 m² y est calculée sur au moins 70 500 $.",
    },
    {
      type: "h2",
      text: "Combien de temps faut-il pour obtenir le permis ?",
      id: "delais",
    },
    {
      type: "p",
      text: "**De deux semaines à plus de quatre mois.** Une fois le dossier complet, les villes se donnent en général 30 jours pour décider. Ce délai s'allonge dès qu'un comité doit juger l'apparence de la rallonge, ce qui arrive dans la plupart des cas quand elle se voit de la rue.",
    },
    {
      type: "table",
      head: ["Ville ou secteur", "Délai publié", "Comité d'apparence"],
      rows: [
        ["Beaconsfield", "1 mois de mars à septembre, 2 semaines d'octobre à février", "Si visible de la rue : au moins 4 mois"],
        ["Kirkland", "Non publié pour le permis", "Avis du comité après 60 jours, puis décision du conseil"],
        ["Pointe-Claire", "30 jours après le dossier complet", "Plus long ; le comité siège une fois par mois"],
        ["Dollard-des-Ormeaux", "30 jours après le dossier complet", "Pour tout agrandissement, puis le conseil"],
        ["Dorval", "30 jours ouvrables", "Pour tout agrandissement résidentiel, puis le conseil"],
        ["Pierrefonds-Roxboro", "Non publié", "Pour tout agrandissement, parfois le conseil"],
      ],
    },
    {
      type: "p",
      text: "Le compte ne démarre qu'avec un dossier complet : tant qu'il manque une pièce, la Ville ne commence pas à compter. Prévoyez aussi le temps de faire dessiner et calculer les plans, avant même le dépôt.",
    },
    {
      type: "h2",
      text: "Qu'est-ce que le comité d'apparence, et quand s'applique-t-il ?",
      id: "comite-apparence",
    },
    {
      type: "p",
      text: "**C'est l'étape où la Ville juge à quoi ressemblera votre rallonge.** Les villes l'appellent PIIA, pour plan d'implantation et d'intégration architecturale. Un comité consultatif d'urbanisme compare les matériaux, la toiture, les volumes et la position du bâtiment aux critères de votre secteur, puis le conseil approuve ou demande des changements.",
    },
    {
      type: "ul",
      items: [
        "**Toujours** à Dollard-des-Ormeaux et à Pierrefonds-Roxboro, et à Dorval selon la page des permis de la Cité.",
        "**Si l'ajout se voit de la rue** à Beaconsfield et à Pointe-Claire, garage attenant compris.",
        "**À Kirkland**, si la façade avant change ou si la maison devient plus de 25 % plus grande que la moyenne des maisons situées à moins de 100 m.",
        "**À Vaudreuil-Dorion et sur l'île Bizard**, seulement dans certains secteurs.",
      ],
    },
    {
      type: "p",
      text: "Le comité demande des perspectives, des échantillons de matériaux et des photos des maisons voisines. À Pointe-Claire, il siège une fois par mois et le dossier doit être déposé trois semaines avant la réunion : un projet déjà ajusté aux critères du secteur évite de rater un mois.",
    },
    {
      type: "h2",
      text: "Faut-il un architecte pour agrandir une maison ?",
      id: "architecte",
    },
    {
      type: "p",
      text: "**Pas toujours.** La Loi sur les architectes dispense une maison unifamiliale isolée qui, après les travaux, compte au plus deux étages et un sous-sol, et moins de 600 m² de planchers au-dessus du sol. Pour une maison jumelée, en rangée ou de quatre logements et moins, le seuil tombe à 300 m².",
    },
    {
      type: "p",
      text: "Les villes peuvent toutefois exiger davantage. À Pointe-Claire, un ajout d'étage ou un agrandissement de plus d'un tiers de la superficie demande des plans scellés par un architecte ou un technologue. À Beaconsfield, tous les plans, sauf celui de l'arpenteur, portent la signature et le sceau d'un architecte, d'un ingénieur, d'un technologue ou d'un designer membre de l'APDIQ ; Kirkland l'exige selon la nature du projet. Les fondations, la charpente et les poutres demandent presque toujours un ingénieur, et Dollard-des-Ormeaux comme l'île Bizard l'exigent noir sur blanc.",
    },
    {
      type: "h2",
      text: "Quels documents la Ville demande-t-elle ?",
      id: "documents",
    },
    {
      type: "p",
      text: "Un dossier d'agrandissement complet compte en général sept pièces. Les noms changent d'une ville à l'autre, mais le contenu reste le même :",
    },
    {
      type: "ol",
      items: [
        "Le formulaire de demande signé, ou une procuration si l'entrepreneur dépose pour vous.",
        "Le certificat de localisation de la propriété, préparé par un arpenteur-géomètre.",
        "Le plan d'implantation projetée, qui place la rallonge sur le terrain avec ses marges.",
        "Les plans à l'échelle : chaque niveau, les élévations de toutes les façades et les coupes.",
        "Les plans de structure calculés par un ingénieur : fondations, charpente, poutres.",
        "Les matériaux et couleurs extérieurs, avec échantillons ou fiches techniques.",
        "L'estimation du coût des travaux et le numéro de licence RBQ de l'entrepreneur.",
      ],
    },
    {
      type: "p",
      text: "Certaines villes ajoutent leurs propres pièces : photos des quatre façades à Kirkland, plan des arbres et bilan de foresterie urbaine à Pointe-Claire quand l'emprise au sol augmente. À Kirkland, un permis partiel autorise d'abord les fondations ; le permis final suit le dépôt du nouveau certificat de localisation.",
    },
    {
      type: "h2",
      text: "Un agrandissement est-il couvert par une garantie ?",
      id: "garantie",
    },
    {
      type: "p",
      text: "**Pas par la garantie des maisons neuves.** La Garantie de construction résidentielle (GCR) exclut expressément la rénovation, y compris un agrandissement. Votre protection repose donc sur trois éléments : une licence RBQ valide dans la bonne catégorie, le cautionnement de l'entrepreneur et un contrat écrit qui porte le nom et le numéro de licence de l'entreprise.",
    },
    {
      type: "p",
      text: "Pour un agrandissement résidentiel, l'entrepreneur général détient la sous-catégorie 1.2, petits bâtiments. Avant de signer, [vérifiez sa licence au registre de la RBQ](/blogue/verifier-licence-rbq-entrepreneur) : statut valide, catégories et réclamations passées.",
    },
    {
      type: "h2",
      text: "Dans quel ordre faire les démarches ?",
      id: "etapes",
    },
    {
      type: "ol",
      items: [
        "**Lire le zonage de votre adresse** : marges, hauteur, part du terrain occupée, arbres protégés.",
        "**Rencontrer l'urbanisme** si un comité d'apparence s'applique, avant de payer les plans.",
        "**Faire dessiner et calculer les plans** : architecte ou technologue, puis ingénieur.",
        "**Déposer le dossier complet** et payer le permis, l'étude et le dépôt.",
        "**Signer le contrat** avec l'échéancier calé sur la date prévue du permis.",
        "**Construire**, puis remettre le nouveau certificat de localisation si la Ville l'exige.",
      ],
    },
    {
      type: "p",
      text: "Chez Dilamco, nous montons le dossier, nous le déposons et nous répondons à l'inspecteur. Le délai du permis et celui du comité figurent à l'échéancier dès la soumission. Les détails propres à chaque ville sont sur nos pages [Beaconsfield](/zones/beaconsfield), [Kirkland](/zones/kirkland), [Pointe-Claire](/zones/pointe-claire) et [Dollard-des-Ormeaux](/zones/dollard-des-ormeaux).",
    },
  ],
  faq: {
    heading: "Questions sur le permis d'agrandissement",
    items: [
      {
        q: "Peut-on commencer les fondations avant d'avoir le permis ?",
        a: "Non, il faut un permis en main avant de creuser. Kirkland est un cas particulier : la Ville accorde d'abord un permis partiel pour les fondations, puis le permis final une fois le nouveau certificat de localisation déposé.",
      },
      {
        q: "Qui dépose la demande de permis, moi ou l'entrepreneur ?",
        a: "L'un ou l'autre. Si l'entrepreneur dépose pour vous, la Ville demande une procuration signée par le propriétaire. Le permis reste au nom de la propriété.",
      },
      {
        q: "Un garage attenant compte-t-il comme un agrandissement ?",
        a: "Oui. Un garage attaché à la maison agrandit le bâtiment principal. À Pointe-Claire, il passe devant le comité d'apparence dès qu'il se voit de la rue, comme toute autre rallonge.",
      },
      {
        q: "Le permis est-il inclus dans le prix de l'entrepreneur ?",
        a: "Ça dépend de la soumission : demandez-le par écrit. Chez nous, le coût du permis et de l'étude entre dans le prix. Le dépôt exigé par certaines villes est une garantie distincte, dont les conditions de remboursement figurent au règlement.",
      },
    ],
  },
  related: {
    heading: "Pour aller plus loin",
    items: [
      {
        title: "Agrandissement de maison",
        href: "/services/renovation/agrandissement-de-maison",
        description: "Comment on mène le projet, du terrain à la finition",
      },
      {
        title: "Zones desservies",
        href: "/zones",
        description: "Les règles de chaque ville de l'Ouest-de-l'Île",
      },
      {
        title: "Vérifier une licence RBQ",
        href: "/blogue/verifier-licence-rbq-entrepreneur",
        description: "Les 5 points à contrôler avant de signer",
      },
    ],
  },
  sources: [
    {
      title: "LégisQuébec, Loi sur les architectes (art. 16 et 16.1)",
      url: "https://www.legisquebec.gouv.qc.ca/fr/document/lc/A-21",
    },
    {
      title: "Garantie GCR, « Bâtiments couverts » (exclusion des agrandissements)",
      url: "https://www.garantiegcr.com/fr/entrepreneurs/batiments-couverts/",
    },
    {
      title: "Ville de Beaconsfield, « Renovation permit and certificate » (délais et frais)",
      url: "https://www.beaconsfield.ca/en/renovation-permit-and-certificate",
    },
    {
      title: "Ville de Kirkland, règlement GEN-2026-51 sur les tarifs",
      url: "https://www.ville.kirkland.qc.ca/client_file/upload/Avis%20publics%202025/GEN-2026-51_EN.pdf",
    },
    {
      title: "Ville de Pointe-Claire, « Comment obtenir un permis de construction » (2026)",
      url: "https://www.pointe-claire.ca/assets/images/Documents/PRO_permis_construire-R_FR_2026.pdf",
    },
    {
      title: "Ville de Dollard-des-Ormeaux, règlement R-2025-211 sur les tarifs 2026",
      url: "https://ville.ddo.qc.ca/wp-content/uploads/2025/12/TARIFS_R-2025-211_CODIFIE.pdf",
    },
    {
      title: "Cité de Dorval, règlement RCM-98-2023 sur la tarification",
      url: "https://www.ville.dorval.qc.ca/storage/app/media/la-cite/administration-et-finances/reglements-municipaux/reglements-en-vigueur/cod-rcm-98-2023-tarification-fr-au-2026-05-15.pdf",
    },
    {
      title: "Ville de Montréal, « Rénovations, agrandissements et nouvelles constructions à Pierrefonds-Roxboro »",
      url: "https://montreal.ca/articles/renovations-agrandissements-et-nouvelles-constructions-pierrefonds-roxboro-108318",
    },
    {
      title: "Ville de Montréal, « Obtenir un permis pour l'agrandissement d'un immeuble » (L'Île-Bizard–Sainte-Geneviève)",
      url: "https://montreal.ca/demarches/obtenir-un-permis-pour-lagrandissement-dun-immeuble?arrondissement=IBZSGV",
    },
    {
      title: "Ville de Vaudreuil-Dorion, règlement 1709 sur les tarifs",
      url: "https://www.ville.vaudreuil-dorion.qc.ca/uploads/sections/La_Ville/Reglementation/Reglements_generaux/Reg_1709_comp-40_finale.pdf",
    },
  ],
  cta: {
    heading: "Un agrandissement en tête ?",
    intro: "On vérifie le zonage de votre adresse avant que vous payiez des plans.",
  },
};
