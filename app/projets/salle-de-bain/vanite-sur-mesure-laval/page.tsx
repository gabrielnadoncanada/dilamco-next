import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vanité sur mesure — Laval | Dilamco",
  description: "Étude de cas : Vanité sur mesure — Laval (Laval).",
  alternates: {
    canonical: "https://dilamco.com/projets/salle-de-bain/vanite-sur-mesure-laval/",
  },
};

export default function VaniteLaval() {
  return (
    <main id="contenu">
      <header><h1>Vanité sur mesure — Laval</h1></header>
      <p><strong>Lieu :</strong> Laval</p>
      <p><strong>Objectif :</strong> optimisation de l'espace, durabilité et finition.</p>
      <ul>
        <li><a href="/laval/vanite-sur-mesure/">Page locale liée</a></li>
        <li><a href="/espaces/salle-de-bain/">Page espace liée</a></li>
        <li><a href="/materiaux/">Matériaux</a></li>
        <li><a href="/contact/">Soumission</a></li>
      </ul>
    </main>
  );
}

