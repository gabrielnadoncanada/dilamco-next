import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuisine sur mesure à Montréal | Dilamco",
  description: "Conception et réalisation de cuisines sur mesure haut de gamme à Montréal, avec option rénovation de cuisine clé en main selon le projet.",
  alternates: {
    canonical: "https://dilamco.com/montreal/cuisine-sur-mesure/",
  },
};

export default function MontrealCuisine() {
  return (
    <main id="contenu">
      <header><h1>Cuisine sur mesure à Montréal</h1></header>
      <p>Conception et réalisation de cuisines sur mesure haut de gamme à Montréal, avec option rénovation de cuisine clé en main selon le projet.</p>
      <ul>
        <li><a href="/espaces/cuisine/">Page espace</a></li>
        <li><a href="/services/renovation/cuisine/">Service rénovation</a></li>
        <li><a href="/projets/cuisine/">Projets</a></li>
      </ul>
      <p><a href="/contact/">Demander une soumission</a></p>
    </main>
  );
}

