import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuisine sur mesure vs IKEA | Dilamco",
  description: "Comparatif : Cuisine sur mesure vs IKEA.",
  alternates: {
    canonical: "https://dilamco.com/comparatifs/cuisine-sur-mesure-vs-ikea/",
  },
};

export default function CuisineVsIkea() {
  return (
    <main id="contenu">
      <header><h1>Cuisine sur mesure vs IKEA</h1></header>
      <p>Comparatif orienté décision.</p>
      <ul>
        <li>Personnalisation : sur mesure vs modules standard.</li>
        <li>Gestion : clé en main possible vs coordination à votre charge.</li>
        <li>Coûts cachés : ajustements, retouches, délais.</li>
      </ul>
      <p><a href="/espaces/cuisine/">Solution Dilamco</a> | <a href="/contact/">Soumission</a></p>
    </main>
  );
}

