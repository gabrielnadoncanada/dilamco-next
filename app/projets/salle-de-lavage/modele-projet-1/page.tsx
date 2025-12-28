import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modèle de projet — salle-de-lavage | Dilamco",
  description: "Étude de cas : Modèle de projet — salle-de-lavage (Montréal / Laval / Rive-Sud).",
  alternates: {
    canonical: "https://dilamco.com/projets/salle-de-lavage/modele-projet-1/",
  },
};

export default function ModeleProjetSalleDeLavage() {
  return (
    <main id="contenu">
      <header><h1>Modèle de projet — salle-de-lavage</h1></header>
      <p><strong>Lieu :</strong> Montréal / Laval / Rive-Sud</p>
      <p><strong>Objectif :</strong> optimisation de l'espace, durabilité et finition.</p>
      <ul>
        <li><a href="/montreal/cuisine-sur-mesure/">Page locale liée</a></li>
        <li><a href="/espaces/salle-de-lavage/">Page espace liée</a></li>
        <li><a href="/materiaux/">Matériaux</a></li>
        <li><a href="/contact/">Soumission</a></li>
      </ul>
    </main>
  );
}

