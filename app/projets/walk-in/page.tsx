import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets de walk-in | Dilamco",
  description: "Projets de walk-in.",
  alternates: {
    canonical: "https://dilamco.com/projets/walk-in/",
  },
};

export default function ProjetsWalkIn() {
  return (
    <main id="contenu">
      <header><h1>Projets de walk-in</h1></header>
      <p>Ajoutez vos projets réels ici (ville, matériaux, services, résultats).</p>
      <ul>
        <li><a href="/projets/walk-in/modele-projet-1/">Modèle de projet</a></li>
      </ul>
    </main>
  );
}

