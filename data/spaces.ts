// data/spaces.ts
import type { ProjectSpace } from "@/data/projects";

export type SpaceLink = { label: string; href: string };

export type SpaceSection =
  | {
      type: "text";
      id: string;
      title: string;
      paragraphs: string[];
      links?: SpaceLink[];
    }
  | {
      type: "list";
      id: string;
      title: string;
      intro?: string;
      items: string[];
      links?: SpaceLink[];
    }
  | {
      type: "steps";
      id: string;
      title: string;
      steps: string[];
      links?: SpaceLink[];
    }
  | {
      type: "faq";
      id: string;
      title: string;
      items: Array<{ q: string; a: string }>;
    };

export type SpaceContent = {
  space: ProjectSpace;
  metadata: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    h1: string;
    paragraphs: string[];
    ctaLinks: SpaceLink[];
  };
  sections: SpaceSection[];
  footerLinks: SpaceLink[];
};

export const SPACE_CONTENT: Record<ProjectSpace, SpaceContent> = {
  commercial: {
    space: "commercial",
    metadata: {
      title: "Projets commerciaux",
      description:
        "Projets commerciaux sur mesure : exemples d’aménagements réalisés (bureaux, commerces, restauration). Conception, fabrication et installation avec un focus sur durabilité et exécution.",
      canonical: "https://dilamco.com/projets/commercial/",
    },
    hero: {
      h1: "Projets commerciaux — aménagements sur mesure réalisés",
      paragraphs: [
        "Les projets commerciaux imposent des contraintes spécifiques : usage intensif, durabilité, coordination avec d’autres intervenants, et parfois des échéanciers serrés. Lorsque des travaux connexes sont requis, notre approche de rénovation clé en main permet de cadrer, coordonner et livrer un résultat cohérent.",
      ],
      ctaLinks: [
        { label: "Parler de votre projet commercial", href: "/contact/" },
        {
          label: "Approche clé en main (coordination)",
          href: "/services/renovation/",
        },
        { label: "Voir l’espace Commercial", href: "/espaces/commercial/" },
      ],
    },
    sections: [
      {
        type: "list",
        id: "types",
        title: "Types de projets commerciaux",
        items: [
          "Bureaux et espaces corporatifs (rangements, zones communes, mobilier intégré)",
          "Commerces de détail (comptoirs, présentoirs, rangements, arrière-boutique)",
          "Restauration (comptoirs, banquettes, rangements, zones de service)",
          "Espaces d’accueil (réception, vestiaires, rangements fonctionnels)",
        ],
      },
      {
        type: "list",
        id: "format",
        title: "Comment présenter un projet (format recommandé)",
        intro:
          "Pour maximiser la crédibilité (et le SEO), chaque projet devrait être décrit avec la même structure, même si vous n’avez pas encore toutes les photos.",
        items: [
          "Type d’espace : bureau, commerce, restauration, etc.",
          "Mandat : ce qui devait être réalisé (objectif principal).",
          "Contraintes : délais, accès, usage intensif, dimensions, intégrations.",
          "Solution : approche, modules, choix de matériaux, quincaillerie.",
          "Résultat : bénéfices concrets (fonction, durabilité, fluidité, finition).",
        ],
        links: [
          { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
          { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
        ],
      },
      {
        type: "list",
        id: "contraintes",
        title: "Contraintes fréquentes en commercial",
        items: [
          "Usage intensif : cycles d’ouverture élevés, charges importantes, entretien fréquent.",
          "Durabilité : choix cohérents (matériaux + quincaillerie + installation).",
          "Coordination : intégration avec travaux connexes (selon le chantier).",
          "Précision : alignements, ajustements, finitions propres (zone visible au public).",
        ],
        links: [
          { label: "Voir l’installation", href: "/services/installation/" },
          {
            label: "Voir la rénovation clé en main",
            href: "/services/renovation/",
          },
          { label: "Voir les services", href: "/services/" },
        ],
      },
      {
        type: "steps",
        id: "processus",
        title: "Processus (du besoin à l’installation)",
        steps: [
          "Cadrage : objectifs, usage, contraintes, échéance et contextes d’intégration.",
          "Design & planification : validation du plan et des points techniques.",
          "Fabrication : production sur mesure selon les décisions validées.",
          "Installation : pose, ajustements, finition et inspection.",
          "Validation : fonctionnement, stabilité, détails visibles et corrections au besoin.",
        ],
        links: [
          { label: "Design", href: "/services/design/" },
          { label: "Fabrication", href: "/services/fabrication/" },
          { label: "Installation", href: "/services/installation/" },
        ],
      },
      {
        type: "faq",
        id: "faq",
        title: "FAQ — projets commerciaux",
        items: [
          {
            q: "Travaillez-vous avec des designers ou des architectes?",
            a: "Oui, selon le projet. Nous pouvons collaborer sur les plans et valider les contraintes d’intégration avant fabrication et installation.",
          },
          {
            q: "Faites-vous l’installation?",
            a: "Oui. L’installation et les ajustements font partie des éléments clés pour un résultat durable et cohérent.",
          },
          {
            q: "Pouvez-vous livrer dans un échéancier serré?",
            a: "Ça dépend de la portée et de la disponibilité. Le meilleur levier est une planification claire et des décisions validées tôt.",
          },
          {
            q: "Quels types de projets commerciaux réalisez-vous?",
            a: "Bureaux, commerces, restauration et autres aménagements sur mesure — selon le mandat et les contraintes.",
          },
        ],
      },
    ],
    footerLinks: [
      { label: "Espace Commercial", href: "/espaces/commercial/" },
      { label: "Services", href: "/services/" },
      { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
      { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
      { label: "Contact", href: "/contact/" },
    ],
  },

  cuisine: {
    space: "cuisine",
    metadata: {
      title: "Projets de cuisines sur mesure",
      description:
        "Projets de cuisines sur mesure : réalisations et exemples de configurations (condo, îlot, rangement optimisé, rénovation). Conception, fabrication et installation à Montréal, Laval et Rive-Sud.",
      canonical: "https://dilamco.com/projets/cuisine/",
    },
    hero: {
      h1: "Projets de cuisines sur mesure — réalisations",
      paragraphs: [
        "Chaque cuisine est conçue selon l’espace réel (dimensions, circulation, lumière) et l’usage quotidien (rangement, zones de travail, intégrations). Cette page sert de preuve concrète : des exemples de projets de cuisines sur mesure réalisés (ou à documenter) pour illustrer des solutions cohérentes, durables et bien exécutées.",
      ],
      ctaLinks: [
        { label: "Parler de votre projet de cuisine", href: "/contact/" },
        { label: "Voir la page Cuisine sur mesure", href: "/espaces/cuisine/" },
      ],
    },
    sections: [
      {
        type: "list",
        id: "regroupements",
        title: "Regroupements (pour vous situer rapidement)",
        intro:
          "Les cuisines se ressemblent en photo, mais elles se décident sur des contraintes réelles. Voici des catégories utiles pour cadrer votre cas :",
        items: [
          "Cuisines de condo (accès chantier, circulation serrée, intégrations)",
          "Cuisines familiales (usage intensif, durabilité, rangement)",
          "Cuisines avec îlot (préparation, repas, circulation, rangement)",
          "Rénovations complètes (coordination, travaux techniques, séquence)",
          "Styles contemporains et intemporels (couleurs, finis, cohérence)",
        ],
        links: [
          {
            label: "Comment choisir une cuisine sur mesure",
            href: "/guides/comment-choisir-cuisine-sur-mesure/",
          },
        ],
      },
      {
        type: "list",
        id: "format",
        title: "Format recommandé pour documenter un projet",
        intro:
          "Pour maximiser la crédibilité (et le SEO), chaque projet devrait suivre la même structure. Même un format texte simple apporte de la valeur.",
        items: [
          "Ville / secteur : Montréal, Laval ou Rive-Sud.",
          "Type de projet : armoires seulement ou rénovation complète.",
          "Mandat : objectif principal (rangement, îlot, intégrations).",
          "Contraintes : dimensions, circulation, accès condo, plomberie/électricité.",
          "Solution : configuration, modules, logique de rangement.",
          "Matériaux : structure vs portes, finis, points d’attention.",
          "Résultat : bénéfices concrets (fonction, fluidité, durabilité, finition).",
        ],
        links: [
          { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
          { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
          { label: "Couleurs & finis", href: "/materiaux/couleurs/" },
        ],
      },
      {
        type: "list",
        id: "contraintes",
        title: "Contraintes courantes en cuisine",
        items: [
          "Circulation : dégagements, ouvertures, îlot dimensionné selon l’espace.",
          "Rangement : tiroirs vs portes, coins, hauteur, garde-manger.",
          "Intégrations : électroménagers, hotte/ventilation, prises, éclairage.",
          "Humidité : évier, lave-vaisselle, protection des chants.",
          "Finition : alignements, ajustements, détails visibles.",
        ],
      },
      {
        type: "text",
        id: "materiaux",
        title: "Matériaux & choix techniques (ce qui fait durer)",
        paragraphs: [
          "Une cuisine durable est un système : structure, chants, quincaillerie et installation. Le matériau seul ne garantit pas la longévité — l’exécution et les ajustements sont déterminants.",
        ],
        links: [
          { label: "Comparer les matériaux", href: "/materiaux/comparatif/" },
          {
            label: "Comprendre la quincaillerie",
            href: "/materiaux/quincaillerie/",
          },
        ],
      },
      {
        type: "text",
        id: "renovation",
        title: "Armoires seulement vs rénovation complète",
        paragraphs: [
          "Certains projets se limitent aux armoires et à l’installation. D’autres nécessitent une rénovation complète (plomberie, électricité, murs, plancher, dosseret). Dans ce cas, la coordination et le séquencement deviennent critiques pour éviter reprises et délais.",
        ],
        links: [
          {
            label: "Voir la rénovation de cuisine",
            href: "/services/renovation/cuisine/",
          },
          {
            label: "Voir les étapes d’une rénovation",
            href: "/guides/etapes-renovation-cuisine/",
          },
          {
            label: "Voir les erreurs fréquentes",
            href: "/guides/erreurs-renovation-cuisine/",
          },
        ],
      },
      {
        type: "steps",
        id: "processus",
        title: "Processus (du besoin à l’installation)",
        steps: [
          "Design : cadrer l’usage, valider le plan et les contraintes.",
          "Fabrication : produire selon les décisions validées.",
          "Installation : pose, ajustements, finition et inspection.",
        ],
        links: [
          { label: "Design", href: "/services/design/" },
          { label: "Fabrication", href: "/services/fabrication/" },
          { label: "Installation", href: "/services/installation/" },
        ],
      },
      {
        type: "faq",
        id: "faq",
        title: "FAQ — projets de cuisines",
        items: [
          {
            q: "Faites-vous des cuisines de condo?",
            a: "Oui. Le sur mesure est souvent particulièrement pertinent en condo (contraintes d’espace, intégrations, accès chantier).",
          },
          {
            q: "Est-ce que chaque projet est unique?",
            a: "Oui. Les dimensions, la circulation, la lumière, les contraintes techniques et l’usage déterminent la configuration.",
          },
          {
            q: "Faites-vous l’installation?",
            a: "Oui. L’installation et les ajustements font partie des éléments clés pour un résultat durable et cohérent.",
          },
          {
            q: "Peut-on voir des projets similaires au nôtre?",
            a: "Oui, lorsque les projets sont documentés. Plus vous décrivez votre contexte, plus il est facile d’orienter vers des exemples pertinents.",
          },
        ],
      },
    ],
    footerLinks: [
      { label: "Cuisine sur mesure", href: "/espaces/cuisine/" },
      {
        label: "Comment choisir une cuisine sur mesure",
        href: "/guides/comment-choisir-cuisine-sur-mesure/",
      },
      { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
      { label: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
      { label: "Contact", href: "/contact/" },
    ],
  },

  "salle-de-bain": {
    space: "salle-de-bain",
    metadata: {
      title: "Projets de salles de bain sur mesure",
      description:
        "Projets de salles de bain sur mesure : vanités, rangements et aménagements réalisés. Exemples de solutions adaptées à l’humidité, à l’entretien et aux contraintes d’espace à Montréal, Laval et Rive-Sud.",
      canonical: "https://dilamco.com/projets/salle-de-bain/",
    },
    hero: {
      h1: "Projets de salles de bain sur mesure — réalisations",
      paragraphs: [
        "Une salle de bain impose des contraintes spécifiques : humidité, ventilation, nettoyage fréquent, et parfois peu d’espace. Cette page sert de preuve concrète : des exemples de projets de salles de bain sur mesure (vanités et rangements) réalisés — ou à documenter — pour illustrer des solutions cohérentes, durables et bien exécutées.",
      ],
      ctaLinks: [
        { label: "Parler de votre projet de salle de bain", href: "/contact/" },
        {
          label: "Voir la page Salle de bain & vanités",
          href: "/espaces/salle-de-bain/",
        },
      ],
    },
    sections: [
      {
        type: "list",
        id: "regroupements",
        title: "Regroupements (pour vous situer rapidement)",
        intro:
          "Les salles de bain se ressemblent en photo, mais elles se décident sur des contraintes réelles : humidité, entretien, rangement et circulation. Voici des catégories utiles :",
        items: [
          "Petites salles de bain (optimisation d’espace, circulation, rangement vertical)",
          "Vanités doubles (usage quotidien, organisation, dégagements)",
          "Salles de bain principales (durabilité, finition, cohérence globale)",
          "Rénovations complètes (coordination, travaux techniques, séquence)",
          "Styles contemporains et intemporels (couleurs, finis, cohérence)",
        ],
        links: [
          {
            label: "Étapes d’une rénovation (logique similaire)",
            href: "/guides/etapes-renovation-cuisine/",
          },
          {
            label: "Erreurs fréquentes (principes applicables)",
            href: "/guides/erreurs-renovation-cuisine/",
          },
        ],
      },
      {
        type: "list",
        id: "format",
        title: "Format recommandé pour documenter un projet",
        intro:
          "Pour maximiser la crédibilité (et le SEO), chaque projet devrait suivre la même structure. Même un format texte simple apporte de la valeur.",
        items: [
          "Ville / secteur : Montréal, Laval ou Rive-Sud.",
          "Type de projet : vanité/rangements seulement ou rénovation complète.",
          "Mandat : objectif principal (rangement, double lavabo, optimisation, style).",
          "Contraintes : humidité/ventilation, dimensions, plomberie, accès chantier.",
          "Solution : configuration, modules, logique de rangement, ergonomie.",
          "Matériaux : choix adaptés à l’humidité + points d’attention.",
          "Résultat : bénéfices concrets (entretien, durabilité, finition, usage).",
        ],
        links: [
          { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
          { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
          { label: "Couleurs & finis", href: "/materiaux/couleurs/" },
        ],
      },
      {
        type: "list",
        id: "contraintes",
        title: "Contraintes courantes en salle de bain",
        items: [
          "Humidité : éclaboussures, vapeur, variations de température (protection essentielle).",
          "Ventilation : impact direct sur la durabilité (et sur les finis à choisir).",
          "Entretien : traces d’eau, produits de nettoyage, usage quotidien.",
          "Plomberie : position des sorties, siphon, dégagements dans les caissons.",
          "Rangement : optimiser sans bloquer la circulation (petits espaces).",
          "Finition : alignements, ajustements, détails visibles à hauteur d’œil.",
        ],
      },
      {
        type: "text",
        id: "materiaux",
        title: "Matériaux & choix techniques (penser humidité)",
        paragraphs: [
          "En salle de bain, la durabilité dépend beaucoup de la protection (chants, zones exposées), de la qualité d’assemblage et de l’installation. On privilégie des choix cohérents avec l’humidité et l’entretien, plutôt que de décider “au look”.",
        ],
        links: [
          { label: "Comparer les matériaux", href: "/materiaux/comparatif/" },
          { label: "MDF", href: "/materiaux/mdf/" },
          { label: "Mélamine", href: "/materiaux/melamine/" },
          { label: "Contreplaqué", href: "/materiaux/contreplaque/" },
        ],
      },
      {
        type: "text",
        id: "installation",
        title: "Installation & ajustements (ce qui “fait haut de gamme”)",
        paragraphs: [
          "En salle de bain, les alignements et les ajustements sont très visibles. La précision de l’installation et la quincaillerie influencent directement le confort et la longévité.",
        ],
        links: [
          { label: "Voir l’installation", href: "/services/installation/" },
          { label: "Voir la quincaillerie", href: "/materiaux/quincaillerie/" },
        ],
      },
      {
        type: "text",
        id: "renovation",
        title: "Vanité seulement vs rénovation complète",
        paragraphs: [
          "Certains projets consistent à remplacer la vanité et optimiser le rangement. D’autres nécessitent une rénovation complète (plomberie, ventilation, murs, céramique, éclairage). Dans ce cas, la coordination et le séquencement deviennent critiques.",
        ],
        links: [
          {
            label: "Voir la rénovation de salle de bain",
            href: "/services/renovation/salle-de-bain/",
          },
        ],
      },
      {
        type: "steps",
        id: "processus",
        title: "Processus (du besoin à l’installation)",
        steps: [
          "Design : cadrer l’usage, valider la plomberie, l’ergonomie et les dimensions.",
          "Fabrication : produire selon les décisions validées.",
          "Installation : pose, ajustements, finition et inspection.",
        ],
        links: [
          { label: "Design", href: "/services/design/" },
          { label: "Fabrication", href: "/services/fabrication/" },
          { label: "Installation", href: "/services/installation/" },
        ],
      },
      {
        type: "faq",
        id: "faq",
        title: "FAQ — projets de salles de bain",
        items: [
          {
            q: "Est-ce que le sur mesure est utile dans une petite salle de bain?",
            a: "Oui. C’est souvent là où le sur mesure apporte le plus : optimisation d’espace, rangement utile, dégagements et circulation.",
          },
          {
            q: "Quels matériaux sont les plus adaptés à l’humidité?",
            a: "La durabilité dépend de la protection, de l’assemblage, de la quincaillerie et de l’installation — autant que du matériau.",
          },
          {
            q: "Faites-vous l’installation?",
            a: "Oui. L’installation et les ajustements font partie des éléments clés pour un résultat durable et cohérent.",
          },
          {
            q: "Peut-on faire seulement la vanité sans rénover toute la pièce?",
            a: "Oui, selon le contexte. Si la plomberie, la ventilation et les murs sont en bon état, un projet “vanité + rangement” peut être pertinent.",
          },
        ],
      },
    ],
    footerLinks: [
      {
        label: "Salle de bain & vanités sur mesure",
        href: "/espaces/salle-de-bain/",
      },
      { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
      { label: "Couleurs & finis", href: "/materiaux/couleurs/" },
      { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
      { label: "Installation", href: "/services/installation/" },
      { label: "Contact", href: "/contact/" },
    ],
  },

  "salle-de-lavage": {
    space: "salle-de-lavage",
    metadata: {
      title: "Projets de salles de lavage sur mesure",
      description:
        "Projets de salles de lavage sur mesure : rangements, comptoirs et aménagements réalisés. Exemples de solutions durables adaptées à l’humidité, au rangement et à l’optimisation d’espace à Montréal, Laval et Rive-Sud.",
      canonical: "https://dilamco.com/projets/salle-de-lavage/",
    },
    hero: {
      h1: "Projets de salles de lavage sur mesure — réalisations",
      paragraphs: [
        "Une salle de lavage est un espace très fonctionnel : humidité, produits ménagers, paniers, circulation, bruit et ventilation. Le sur mesure permet d’optimiser chaque zone (tri, pliage, rangement) et d’obtenir un aménagement durable. Cette page sert de preuve concrète : des exemples de projets de salles de lavage sur mesure réalisés — ou à documenter — pour illustrer des solutions cohérentes, robustes et bien exécutées.",
      ],
      ctaLinks: [
        {
          label: "Parler de votre projet de salle de lavage",
          href: "/contact/",
        },
        {
          label: "Voir la page Salle de lavage",
          href: "/espaces/salle-de-lavage/",
        },
      ],
    },
    sections: [
      {
        type: "list",
        id: "regroupements",
        title: "Regroupements (pour vous situer rapidement)",
        intro:
          "Les salles de lavage se décident sur l’usage réel : rangement, zones de tri, circulation, humidité et entretien. Voici des catégories utiles :",
        items: [
          "Petites salles de lavage (optimisation d’espace, rangement vertical)",
          "Salle de lavage + mudroom (manteaux, bottes, banc, zones de dépôt)",
          "Aménagements avec comptoir de pliage (fonction, hauteur, robustesse)",
          "Rangements fermés (produits, paniers, accessoires) et niches techniques",
          "Rénovations complètes (travaux techniques, séquencement, coordination)",
        ],
        links: [
          {
            label: "Étapes d’une rénovation (logique similaire)",
            href: "/guides/etapes-renovation-cuisine/",
          },
          {
            label: "Erreurs fréquentes (principes applicables)",
            href: "/guides/erreurs-renovation-cuisine/",
          },
        ],
      },
      {
        type: "list",
        id: "format",
        title: "Format recommandé pour documenter un projet",
        intro:
          "Pour maximiser la crédibilité (et le SEO), chaque projet devrait suivre la même structure. Même un format texte simple apporte de la valeur.",
        items: [
          "Ville / secteur : Montréal, Laval ou Rive-Sud.",
          "Type de projet : aménagement seulement ou rénovation complète.",
          "Mandat : objectif principal (rangement, pliage, tri, circulation).",
          "Contraintes : humidité, ventilation, plomberie, accès, bruit, dimensions.",
          "Solution : zones (tri/pliage), modules, rangement, intégrations.",
          "Matériaux : choix adaptés à l’humidité et à l’entretien.",
          "Résultat : bénéfices concrets (fonction, rangement utile, entretien, durabilité).",
        ],
        links: [
          { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
          { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
          { label: "Couleurs & finis", href: "/materiaux/couleurs/" },
        ],
      },
      {
        type: "list",
        id: "contraintes",
        title: "Contraintes courantes en salle de lavage",
        items: [
          "Humidité et fuites : zones exposées (laveuse, sécheuse, évier) → protection essentielle.",
          "Produits ménagers : rangement sécuritaire, accès rapide, surfaces faciles à nettoyer.",
          "Fonction : tri, pliage, dépôt, circulation (éviter les “goulots”).",
          "Ventilation : impact sur la durabilité et les finis.",
          "Plomberie/électricité : sorties et dégagements pour appareils et accessoires.",
          "Finition : alignements et ajustements (portes/tiroirs très sollicités).",
        ],
      },
      {
        type: "list",
        id: "fonction",
        title: "Zones fonctionnelles à prévoir (ce qui change la vie)",
        intro:
          "Une bonne salle de lavage est organisée par zones. Le sur mesure permet de dimensionner chaque zone selon vos habitudes, au lieu de “faire rentrer” des modules standards.",
        items: [
          "Zone tri : paniers, bacs, accès direct.",
          "Zone pliage : comptoir robuste à une hauteur confortable.",
          "Zone rangement : produits, serviettes, accessoires, aspirateur, etc.",
          "Zone dépôt : si mudroom (manteaux, sacs, chaussures, banc).",
        ],
      },
      {
        type: "text",
        id: "materiaux",
        title: "Matériaux & choix techniques (penser humidité + entretien)",
        paragraphs: [
          "Ici, le bon choix est celui qui résiste à l’usage réel : humidité, éclaboussures, nettoyage, et parfois des produits plus agressifs. La durabilité dépend aussi des chants, de l’assemblage, de la quincaillerie et de l’installation.",
        ],
        links: [
          { label: "Comparer les matériaux", href: "/materiaux/comparatif/" },
          { label: "Mélamine", href: "/materiaux/melamine/" },
          { label: "MDF", href: "/materiaux/mdf/" },
          { label: "Contreplaqué", href: "/materiaux/contreplaque/" },
        ],
      },
      {
        type: "text",
        id: "installation",
        title: "Installation & quincaillerie (usage intensif)",
        paragraphs: [
          "Les portes et tiroirs d’une salle de lavage sont souvent très sollicités. Une quincaillerie adaptée et une installation précise évitent rapidement les jeux, frottements et désalignements.",
        ],
        links: [
          { label: "Voir la quincaillerie", href: "/materiaux/quincaillerie/" },
          { label: "Voir l’installation", href: "/services/installation/" },
        ],
      },
      {
        type: "text",
        id: "renovation",
        title: "Aménagement seulement vs rénovation complète",
        paragraphs: [
          "Selon l’état de la pièce, vous pouvez faire un projet “aménagement + installation” ou une rénovation complète (plomberie, ventilation, murs/plancher, éclairage). Dans ce cas, le séquencement et la coordination deviennent critiques.",
        ],
        links: [
          {
            label: "Voir la rénovation clé en main",
            href: "/services/renovation/",
          },
          {
            label: "Voir les étapes d’une rénovation",
            href: "/guides/etapes-renovation-cuisine/",
          },
        ],
      },
      {
        type: "steps",
        id: "processus",
        title: "Processus (du besoin à l’installation)",
        steps: [
          "Cadrage : usages, zones (tri/pliage), contraintes techniques et circulation.",
          "Design : plan, modules, ergonomie, validation des sorties.",
          "Fabrication : production sur mesure selon les décisions validées.",
          "Installation : pose, ajustements, finition et inspection.",
        ],
        links: [
          { label: "Design", href: "/services/design/" },
          { label: "Fabrication", href: "/services/fabrication/" },
          { label: "Installation", href: "/services/installation/" },
        ],
      },
      {
        type: "faq",
        id: "faq",
        title: "FAQ — projets de salles de lavage",
        items: [
          {
            q: "Est-ce que le sur mesure vaut la peine dans une petite salle de lavage?",
            a: "Oui. C’est souvent là où le sur mesure apporte le plus : optimiser la hauteur, intégrer des zones de rangement, et améliorer la circulation.",
          },
          {
            q: "Peut-on ajouter un comptoir de pliage?",
            a: "Oui. L’important est de le dimensionner selon l’espace et de choisir des surfaces faciles à entretenir.",
          },
          {
            q: "Quels matériaux sont adaptés à l’humidité?",
            a: "La durabilité dépend de la protection, de l’assemblage, de la quincaillerie et de l’installation — autant que du matériau.",
          },
          {
            q: "Faites-vous l’installation?",
            a: "Oui. L’installation et les ajustements sont essentiels pour un résultat durable et une finition propre.",
          },
        ],
      },
    ],
    footerLinks: [
      {
        label: "Salle de lavage sur mesure",
        href: "/espaces/salle-de-lavage/",
      },
      { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
      { label: "Couleurs & finis", href: "/materiaux/couleurs/" },
      { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
      { label: "Installation", href: "/services/installation/" },
      { label: "Contact", href: "/contact/" },
    ],
  },

  "walk-in": {
    space: "walk-in",
    metadata: {
      title: "Projets de walk-in sur mesure",
      description:
        "Projets de walk-in sur mesure : aménagements de garde-robes et rangements réalisés. Exemples de solutions optimisées (sections, tiroirs, accessoires) conçues pour la fonctionnalité et la durabilité à Montréal, Laval et Rive-Sud.",
      canonical: "https://dilamco.com/projets/walk-in/",
    },
    hero: {
      h1: "Projets de walk-in sur mesure — réalisations",
      paragraphs: [
        "Un walk-in réussi, c’est d’abord de la fonction : zones de suspendus, tiroirs, tablettes, accessoires, circulation et accès. Le sur mesure permet d’exploiter chaque mur et chaque hauteur, même dans des espaces irréguliers. Cette page sert de preuve concrète : des exemples de projets de walk-in sur mesure réalisés — ou à documenter — pour illustrer des solutions durables, bien organisées et bien exécutées.",
      ],
      ctaLinks: [
        { label: "Parler de votre projet de walk-in", href: "/contact/" },
        {
          label: "Voir la page Walk-in & rangement",
          href: "/espaces/walk-in/",
        },
      ],
    },
    sections: [
      {
        type: "list",
        id: "regroupements",
        title: "Regroupements (pour vous situer rapidement)",
        intro:
          "Les walk-in se décident sur vos habitudes : quantité de suspendus, tiroirs, accessoires, saisonnier, et circulation. Voici des catégories utiles :",
        items: [
          "Walk-in en L / en U (optimisation des murs, circulation centrale)",
          "Walk-in en couloir (profondeur, dégagements, accès rapide)",
          "Walk-in partagé (deux personnes : zones distinctes, organisation)",
          "Walk-in avec îlot / module central (tiroirs, pliage, accessoires)",
          "Rangements intégrés (valises, linge, chaussures, accessoires)",
        ],
      },
      {
        type: "list",
        id: "format",
        title: "Format recommandé pour documenter un projet",
        intro:
          "Pour maximiser la crédibilité (et le SEO), chaque projet devrait suivre la même structure. Même un format texte simple apporte de la valeur.",
        items: [
          "Ville / secteur : Montréal, Laval ou Rive-Sud.",
          "Type d’espace : walk-in fermé, garde-robe, pièce dédiée, couloir.",
          "Mandat : objectif (plus de rangement, organisation, accès, esthétique).",
          "Contraintes : dimensions, angles, portes/fenêtres, circulation, éclairage.",
          "Solution : zones (suspendus/tiroirs/tablettes), modules, accessoires.",
          "Finition : couleurs/fini, cohérence avec l’espace, entretien.",
          "Résultat : bénéfices (rangement utile, accès, organisation, durabilité).",
        ],
        links: [
          { label: "Couleurs & finis", href: "/materiaux/couleurs/" },
          { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
        ],
      },
      {
        type: "list",
        id: "contraintes",
        title: "Contraintes courantes (et ce qui change tout)",
        items: [
          "Habitudes : suspendus longs vs courts, pliage, accessoires, chaussures.",
          "Circulation : dégagements, ouverture des tiroirs, portes, passages.",
          "Hauteur : exploiter le vertical sans perdre l’accès (zones saisonnières).",
          "Éclairage : zones sombres, profondeur, éclairage intégré si nécessaire.",
          "Organisation : chaque chose à sa place (sinon le walk-in “redevient un placard”).",
        ],
      },
      {
        type: "list",
        id: "zones",
        title: "Zones fonctionnelles à prévoir",
        intro:
          "Un walk-in performant est organisé par zones. Le sur mesure permet de dimensionner chaque zone selon votre réalité, au lieu d’adapter vos habitudes aux modules standards.",
        items: [
          "Suspendus : longs (robes/manteaux) et courts (chemises/vestons) séparés.",
          "Tiroirs : sous-vêtements, accessoires, bijoux, ceintures, etc.",
          "Tablettes : pliage, paniers, sacs, linge.",
          "Chaussures : sections dédiées, accès visuel rapide.",
          "Saisonnier : valises, boîtes, hors-saison en hauteur.",
        ],
      },
      {
        type: "list",
        id: "accessoires",
        title: "Accessoires et détails utiles",
        intro:
          "Les détails font souvent la différence : accessibilité, organisation et confort au quotidien. L’objectif est de réduire le “fouillis” et d’améliorer l’accès.",
        items: [
          "Paniers, séparateurs, modules pour accessoires.",
          "Rangements dédiés (cravates, ceintures, bijoux, sacs).",
          "Miroir, banc, zone de dépôt (selon l’espace).",
          "Éclairage plus ciblé sur les zones profondes.",
        ],
      },
      {
        type: "text",
        id: "materiaux",
        title: "Matériaux, quincaillerie & durabilité",
        paragraphs: [
          "Un walk-in est un espace de cycles : tiroirs et portes sont sollicités quotidiennement. Une quincaillerie adaptée et une installation précise évitent les désalignements et l’usure prématurée.",
        ],
        links: [
          { label: "Voir la quincaillerie", href: "/materiaux/quincaillerie/" },
          { label: "Voir l’installation", href: "/services/installation/" },
        ],
      },
      {
        type: "steps",
        id: "processus",
        title: "Processus (du besoin à l’installation)",
        steps: [
          "Cadrage : habitudes, volumes à ranger, zones nécessaires, contraintes.",
          "Design : plan, modules, circulation, détails (tiroirs/accessoires).",
          "Fabrication : production sur mesure selon les décisions validées.",
          "Installation : pose, ajustements, finition et inspection.",
        ],
        links: [
          { label: "Design", href: "/services/design/" },
          { label: "Fabrication", href: "/services/fabrication/" },
          { label: "Installation", href: "/services/installation/" },
        ],
      },
      {
        type: "faq",
        id: "faq",
        title: "FAQ — projets de walk-in",
        items: [
          {
            q: "Le sur mesure vaut-il la peine dans un petit walk-in?",
            a: "Oui. Le sur mesure est souvent le plus rentable dans les petits espaces : optimisation de la hauteur, zones adaptées et meilleure circulation.",
          },
          {
            q: "Peut-on faire un walk-in pour deux personnes?",
            a: "Oui. On recommande souvent de prévoir des zones distinctes pour éviter le désordre et simplifier l’organisation.",
          },
          {
            q: "Est-ce que vous faites l’installation?",
            a: "Oui. L’installation et les ajustements sont essentiels pour un résultat durable et une finition propre.",
          },
          {
            q: "Peut-on intégrer un module central?",
            a: "Oui, si l’espace le permet (circulation). Un module central peut ajouter du rangement et une zone pratique.",
          },
        ],
      },
    ],
    footerLinks: [
      { label: "Walk-in & rangement", href: "/espaces/walk-in/" },
      { label: "Couleurs & finis", href: "/materiaux/couleurs/" },
      { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
      { label: "Installation", href: "/services/installation/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
};
