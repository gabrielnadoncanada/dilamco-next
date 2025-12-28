import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rénovation de cuisine à Laval | Dilamco",
  description: "Rénovation de cuisine à Laval : coordination, exécution et installation d'armoires sur mesure, avec un seul responsable si nécessaire.",
  alternates: {
    canonical: "https://dilamco.com/laval/renovation-cuisine/",
  },
};

export default function LavalRenovationCuisine() {
  return (
    <main id="contenu">
      <header><h1>Rénovation de cuisine à Laval</h1></header>
      <p>Rénovation de cuisine à Laval : coordination, exécution et installation d'armoires sur mesure, avec un seul responsable si nécessaire.</p>
      <ul>
        <li><a href="/espaces/cuisine/">Page espace</a></li>
        <li><a href="/services/renovation/cuisine/">Service rénovation</a></li>
        <li><a href="/projets/cuisine/">Projets</a></li>
      </ul>
      <p><a href="/contact/">Demander une soumission</a></p>
    </main>
  );
}

