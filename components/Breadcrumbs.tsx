"use client";

import { usePathname } from "next/navigation";

// Mapping des segments de chemin vers des labels français appropriés
const labelMap: Record<string, string> = {
  "a-propos": "À propos",
  "espaces": "Espaces",
  "cuisine": "Cuisine",
  "salle-de-bain": "Salle de bain",
  "salle-de-lavage": "Salle de lavage",
  "walk-in": "Walk-in",
  "commercial": "Commercial",
  "services": "Services",
  "design": "Design",
  "fabrication": "Fabrication",
  "installation": "Installation",
  "renovation": "Rénovation",
  "materiaux": "Matériaux",
  "contreplaque": "Contreplaqué",
  "comparatif": "Comparatif",
  "couleurs": "Couleurs",
  "melamine": "Mélamine",
  "mdf": "MDF",
  "bois-massif": "Bois massif",
  "quincaillerie": "Quincaillerie",
  "projets": "Projets",
  "guides": "Guides",
  "comment-choisir-cuisine-sur-mesure": "Comment choisir une cuisine sur mesure",
  "etapes-renovation-cuisine": "Étapes d'une rénovation de cuisine",
  "erreurs-renovation-cuisine": "Erreurs fréquentes en rénovation de cuisine",
  "comparatifs": "Comparatifs",
  "cuisine-sur-mesure-vs-ikea": "Cuisine sur mesure vs IKEA",
  "cuisine-sur-mesure-vs-home-depot": "Cuisine sur mesure vs Home Depot",
  "cuisiniste-vs-entrepreneur-general": "Cuisiniste vs entrepreneur général",
  "montreal": "Montréal",
  "laval": "Laval",
  "rive-sud": "Rive-Sud",
  "cuisine-sur-mesure": "Cuisine sur mesure",
  "renovation-cuisine": "Rénovation de cuisine",
  "vanite-sur-mesure": "Vanité sur mesure",
  "modele-projet-1": "Modèle de projet",
  "cuisine-sur-mesure-plateau-mont-royal": "Cuisine sur mesure — Plateau-Mont-Royal",
  "vanite-sur-mesure-laval": "Vanité sur mesure — Laval",
  "contact": "Contact",
};

function formatLabel(segment: string): string {
  // Vérifier si on a un mapping spécifique
  if (labelMap[segment]) {
    return labelMap[segment];
  }
  
  // Sinon, formater automatiquement (remplacer les tirets par des espaces et capitaliser)
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Ignorer la page d'accueil
  if (pathname === "/") {
    return null;
  }

  // Diviser le chemin en segments
  const segments = pathname.split("/").filter(Boolean);
  
  // Créer les breadcrumbs
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      const label = formatLabel(segment);
      return { label, href };
    }),
  ];

  return (
    <nav aria-label="Fil d'Ariane">
      <ol>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={crumb.href}>
              {isLast ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <a href={crumb.href}>{crumb.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

