import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuisiniste vs entrepreneur général | Dilamco",
  description: "Comparatif : Cuisiniste vs entrepreneur général.",
  alternates: {
    canonical: "https://dilamco.com/comparatifs/cuisiniste-vs-entrepreneur-general/",
  },
};

export default function CuisinisteVsEntrepreneur() {
  return (
    <main id="contenu">
      <header><h1>Cuisiniste vs entrepreneur général</h1></header>
      <p>Comparatif orienté décision.</p>
      <ul>
        <li>Cuisiniste : fort sur l'armoire, rénovation souvent externalisée.</li>
        <li>Entrepreneur général : gère chantier complet, armoires varient.</li>
        <li>Approche Dilamco : sur mesure + option clé en main.</li>
      </ul>
      <p><a href="/services/renovation/">Solution Dilamco</a> | <a href="/contact/">Soumission</a></p>
    </main>
  );
}

