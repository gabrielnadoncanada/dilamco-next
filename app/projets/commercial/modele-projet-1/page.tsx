import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modèle de projet — commercial | Dilamco",
  description: "Étude de cas : Modèle de projet — commercial (Montréal / Laval / Rive-Sud).",
  alternates: {
    canonical: "https://dilamco.com/projets/commercial/modele-projet-1/",
  },
};

export default function ModeleProjetCommercial() {
  return (
    <main id="contenu">
      <header><h1>Modèle de projet — commercial</h1></header>
      <p><strong>Lieu :</strong> Montréal / Laval / Rive-Sud</p>
      <p><strong>Objectif :</strong> optimisation de l'espace, durabilité et finition.</p>
      <ul>
        <li><a href="/montreal/cuisine-sur-mesure/">Page locale liée</a></li>
        <li><a href="/espaces/commercial/">Page espace liée</a></li>
        <li><a href="/materiaux/">Matériaux</a></li>
        <li><a href="/contact/">Soumission</a></li>
      </ul>
    </main>
  );
}

