import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets de salles de bain | Dilamco",
  description: "Projets de salles de bain.",
  alternates: {
    canonical: "https://dilamco.com/projets/salle-de-bain/",
  },
};

export default function ProjetsSalleDeBain() {
  return (
    <main id="contenu">
      <header><h1>Projets de salles de bain</h1></header>
      <p>Ajoutez vos projets réels ici (ville, matériaux, services, résultats).</p>
      <ul>
        <li><a href="/projets/salle-de-bain/modele-projet-1/">Modèle de projet</a></li>
      </ul>
    </main>
  );
}

