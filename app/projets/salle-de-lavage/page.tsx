import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets de salles de lavage | Dilamco",
  description: "Projets de salles de lavage.",
  alternates: {
    canonical: "https://dilamco.com/projets/salle-de-lavage/",
  },
};

export default function ProjetsSalleDeLavage() {
  return (
    <main id="contenu">
      <header><h1>Projets de salles de lavage</h1></header>
      <p>Ajoutez vos projets réels ici (ville, matériaux, services, résultats).</p>
      <ul>
        <li><a href="/projets/salle-de-lavage/modele-projet-1/">Modèle de projet</a></li>
      </ul>
    </main>
  );
}

