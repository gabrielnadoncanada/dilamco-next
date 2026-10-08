// Article : vérifier la licence RBQ d'un entrepreneur (requêtes « vérifier
// licence RBQ », « licence RBQ entrepreneur »). Sources consultées le 2026-10-08 :
// - RBQ, « Vérifier la licence d'un entrepreneur » (registre, statuts valide /
//   non valide / restreinte, contenu de la fiche) :
//   https://www.rbq.gouv.qc.ca/vous-etes/citoyen/verifier-la-licence-dun-entrepreneur/
// - RBQ, « Affichage de la licence » (numéro obligatoire sur site web, publicité,
//   soumissions, contrats, factures) :
//   https://www.rbq.gouv.qc.ca/en/licence/fulfilling-your-obligations/displaying-your-licence/
// - RBQ, « Cautionnement » (40 000 $ entrepreneur général, 20 000 $ spécialisé ;
//   pas de cautionnement pour 1.1.1 / 1.1.2, couverts par le plan de garantie) :
//   https://www.rbq.gouv.qc.ca/en/frequently-asked-questions-faq/contractor/licence-security/
// - RBQ, « Effectuer une réclamation au cautionnement » (licence valide à la
//   signature ou pendant les travaux, contrat avec nom et numéro, malfaçon
//   constatée dans les 12 mois suivant la fin des travaux) :
//   https://www.rbq.gouv.qc.ca/vous-etes/citoyen/problemes-avec-un-entrepreneur/effectuer-une-reclamation/
// - RBQ, projets de règlement publiés pour commentaires (2026-02-25) : hausse
//   proposée à 60 000 $ / 30 000 $, pas en vigueur à la date de publication.
// - Fiche Dilamco au registre (consultée 2026-09-18) : 8306-0806-27, valide depuis
//   le 2004-09-07, EG 1.2 et 1.3, titulaire 9139-1250 Québec inc., 0 réclamation.

import type { BlogPost } from "@/features/blog/model";

export const post: BlogPost = {
  slug: "verifier-licence-rbq-entrepreneur",
  locale: "fr",
  category: "entrepreneur",
  publishedAt: "2026-10-08",
  title: "Comment vérifier la licence RBQ d'un entrepreneur avant de signer",
  metaTitle: "Vérifier la licence RBQ d'un entrepreneur",
  description:
    "Licence valide, bonnes catégories, cautionnement, réclamations : les 5 points à vérifier au registre de la RBQ avant de signer avec un entrepreneur.",
  excerpt:
    "Cinq minutes au registre de la RBQ suffisent pour savoir si l'entrepreneur a le droit de faire vos travaux, et ce qui vous protège s'il les rate.",
  cover: {
    src: "/images/realisations/escalier-rampe-verre-finition-interieure-01.webp",
    alt: "Escalier avec rampe de verre après une rénovation intérieure",
  },
  body: [
    {
      type: "callout",
      title: "En bref",
      items: [
        "Cherchez l'entreprise au [registre des détenteurs de licence](https://www.rbq.gouv.qc.ca/vous-etes/citoyen/verifier-la-licence-dun-entrepreneur/) de la RBQ.",
        "Le statut doit être **valide** et les catégories doivent couvrir vos travaux.",
        "Le nom et le numéro au contrat doivent être ceux de la fiche, sinon le cautionnement ne vous couvre pas.",
      ],
    },
    {
      type: "h2",
      text: "Pourquoi la licence RBQ compte pour vous",
    },
    {
      type: "p",
      text: "Au Québec, un entrepreneur qui exécute ou fait exécuter des travaux de construction doit détenir une licence de la Régie du bâtiment du Québec. Pour l'obtenir, le répondant de l'entreprise réussit des examens de qualification, et l'entreprise fournit un cautionnement. Sans elle, vous perdez le principal recours si les travaux tournent mal.",
    },
    {
      type: "h2",
      text: "Où trouver le numéro de licence",
    },
    {
      type: "p",
      text: "La loi oblige l'entrepreneur à afficher son numéro sur son site web, ses publicités, ses cartes d'affaires, ses soumissions, ses contrats et ses factures. C'est un numéro de dix chiffres. Une soumission sans numéro est déjà un signal d'alarme.",
    },
    {
      type: "h2",
      text: "Les 5 points à vérifier au registre",
    },
    {
      type: "p",
      text: "Le registre se consulte gratuitement en ligne, par nom d'entreprise ou par numéro. La fiche de l'entreprise répond aux cinq questions suivantes.",
    },
    {
      type: "h3",
      text: "1. La licence est-elle valide ?",
    },
    {
      type: "p",
      text: "Le registre indique trois statuts. **Valide** : l'entreprise peut travailler. **Non valide** : la licence a été suspendue ou annulée. **Restreinte** : l'entreprise ne peut pas soumissionner pour un contrat public, mais peut travailler chez un particulier. Une entreprise qui n'a jamais eu de licence n'apparaît tout simplement pas.",
    },
    {
      type: "h3",
      text: "2. Les catégories couvrent-elles vos travaux ?",
    },
    {
      type: "p",
      text: "Chaque licence liste des sous-catégories. Les catégories d'entrepreneur général (qui commencent par 1) permettent de coordonner l'ensemble d'un chantier ; les catégories spécialisées limitent l'entreprise à un métier. Un spécialiste en céramique, par exemple, ne peut pas prendre en charge toute la rénovation d'une salle de bain avec la plomberie et l'électricité.",
    },
    {
      type: "h3",
      text: "3. Le nom correspond-il au contrat ?",
    },
    {
      type: "p",
      text: "La fiche donne le nom légal du titulaire, souvent un numéro d'entreprise, et les autres noms qu'il utilise. Le contrat doit être signé avec cette entité et porter ce numéro de licence. Pour réclamer au cautionnement, la RBQ exige un contrat qui indique le nom et le numéro exacts.",
    },
    {
      type: "h3",
      text: "4. Qui fournit le cautionnement ?",
    },
    {
      type: "p",
      text: "La fiche nomme l'organisme qui garantit l'entreprise. Ce cautionnement est de **40 000 $** pour un entrepreneur général et de **20 000 $** pour un entrepreneur spécialisé. Un projet de règlement publié en février 2026 propose de le hausser ; vérifiez le montant en vigueur au moment de signer.",
    },
    {
      type: "h3",
      text: "5. Y a-t-il des réclamations ?",
    },
    {
      type: "p",
      text: "Le registre affiche les réclamations au cautionnement payées dans les dernières années. Une seule ne disqualifie pas une entreprise, mais demandez ce qui s'est passé. Plusieurs, c'est une raison de chercher ailleurs.",
    },
    {
      type: "image",
      src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
      alt: "Salle de bain rénovée avec douche à l'italienne et paroi de verre",
      caption: "Une salle de bain complète touche la plomberie et l'électricité : elle demande un entrepreneur général.",
    },
    {
      type: "h2",
      text: "Ce que le cautionnement couvre, et ce qu'il ne couvre pas",
    },
    {
      type: "p",
      text: "Le cautionnement indemnise un client quand l'entrepreneur ne termine pas les travaux, ne rembourse pas un acompte ou livre des travaux mal faits. Pour une malfaçon, le problème doit être constaté dans les 12 mois suivant la fin des travaux. Le montant est partagé entre tous les réclamants d'une même entreprise : c'est un filet, pas une assurance complète.",
    },
    {
      type: "p",
      text: "Les entrepreneurs qui construisent des maisons neuves (sous-catégories 1.1.1 et 1.1.2) n'ont pas de cautionnement : leurs clients sont protégés par le plan de garantie obligatoire. En rénovation, ce plan ne s'applique pas. C'est pourquoi le contrat écrit et la licence valide sont vos deux protections principales.",
    },
    {
      type: "h2",
      text: "Les signaux d'alarme avant de signer",
    },
    {
      type: "ul",
      items: [
        "Pas de numéro de licence sur la soumission, ou un numéro introuvable au registre",
        "Un prix « sans taxes » si vous payez comptant",
        "On vous demande d'aller chercher le permis vous-même, à votre nom",
        "Un gros acompte avant toute commande de matériaux",
        "Pas de contrat écrit, ou un contrat sans échéancier ni description des travaux",
      ],
    },
    {
      type: "h2",
      text: "Un exemple : notre fiche au registre",
    },
    {
      type: "p",
      text: "Dilamco détient la licence 8306-0806-27, délivrée en 2004 et valide sans restriction. Le titulaire est 9139-1250 Québec inc., qui exploite les noms Dilamco et Construction Dilamco. Nos sous-catégories d'entrepreneur général, 1.2 et 1.3, couvrent la rénovation de maisons et de bâtiments. Vous pouvez [consulter notre fiche](https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/8306080627) et refaire chaque vérification de cet article. Notre page [à propos](/a-propos) détaille aussi nos assurances.",
    },
  ],
  faq: {
    heading: "Questions sur la licence RBQ",
    items: [
      {
        q: "Un sous-traitant doit-il aussi avoir sa licence ?",
        a: "Oui. Chaque entreprise qui exécute des travaux de construction doit détenir la licence de son métier. L'entrepreneur général choisit des sous-traitants licenciés et répond de leur travail devant vous.",
      },
      {
        q: "Que faire si l'entrepreneur n'a pas de licence ?",
        a: "Ne signez pas. Vous pouvez le signaler à la RBQ. Si les travaux sont commencés, vous n'aurez pas accès au cautionnement en cas de problème.",
      },
      {
        q: "Où vérifier les plaintes contre un entrepreneur ?",
        a: "Le registre de la RBQ montre les réclamations au cautionnement. L'Office de la protection du consommateur peut aussi vous dire si des plaintes ont été déposées contre l'entreprise.",
      },
      {
        q: "La licence RBQ remplace-t-elle l'assurance responsabilité ?",
        a: "Non. La licence et son cautionnement couvrent des pertes liées au contrat. L'assurance responsabilité couvre les dommages causés pendant les travaux. Demandez une preuve des deux.",
      },
    ],
  },
  related: {
    heading: "Pour aller plus loin",
    items: [
      {
        title: "Notre licence et nos garanties",
        href: "/a-propos",
        description: "Licence, cautionnement et assurances",
      },
      {
        title: "Comment se déroule un projet",
        href: "/processus",
        description: "De la visite au chantier livré",
      },
      {
        title: "Rénovation clé en main",
        href: "/services/renovation",
        description: "Un seul entrepreneur responsable",
      },
    ],
  },
  sources: [
    {
      title: "Régie du bâtiment du Québec, « Vérifier la licence d'un entrepreneur »",
      url: "https://www.rbq.gouv.qc.ca/vous-etes/citoyen/verifier-la-licence-dun-entrepreneur/",
    },
    {
      title: "Régie du bâtiment du Québec, « Affichage de la licence »",
      url: "https://www.rbq.gouv.qc.ca/en/licence/fulfilling-your-obligations/displaying-your-licence/",
    },
    {
      title: "Régie du bâtiment du Québec, « Cautionnement de licence »",
      url: "https://www.rbq.gouv.qc.ca/en/frequently-asked-questions-faq/contractor/licence-security/",
    },
    {
      title: "Régie du bâtiment du Québec, « Effectuer une réclamation au cautionnement »",
      url: "https://www.rbq.gouv.qc.ca/vous-etes/citoyen/problemes-avec-un-entrepreneur/effectuer-une-reclamation/",
    },
    {
      title: "Fiche de Dilamco au registre des détenteurs de licence",
      url: "https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/8306080627",
    },
  ],
  cta: {
    heading: "Comparez-nous en toute transparence",
    intro: "Notre numéro est sur chaque soumission. Vérifiez-le, puis demandez votre prix.",
  },
};
