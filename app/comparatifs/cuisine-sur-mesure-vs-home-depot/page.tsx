import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuisine sur mesure vs Home Depot | Dilamco",
  description: "Comparatif : Cuisine sur mesure vs Home Depot.",
  alternates: {
    canonical: "https://dilamco.com/comparatifs/cuisine-sur-mesure-vs-home-depot/",
  },
};

export default function CuisineVsHomeDepot() {
  return (
    <main id="contenu">
      <header><h1>Cuisine sur mesure vs Home Depot</h1></header>
      <p>Comparatif orienté décision.</p>
      <ul>
        <li>Standardisation vs intégration sur mesure.</li>
        <li>Résultat final dépend beaucoup de l'installation.</li>
        <li>Approche clé en main réduit la complexité.</li>
      </ul>
      <p><a href="/services/renovation/cuisine/">Solution Dilamco</a> | <a href="/contact/">Soumission</a></p>
    </main>
  );
}

