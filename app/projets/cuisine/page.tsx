import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets de cuisine | Dilamco",
  description: "Projets de cuisine.",
  alternates: {
    canonical: "https://dilamco.com/projets/cuisine/",
  },
};

export default function ProjetsCuisine() {
  return (
    <main id="contenu">
      <header>
        <h1>Projets de cuisine</h1>
      </header>
      <p>
        Ajoutez vos projets réels ici (ville, matériaux, services, résultats).
      </p>
      <ul>
        <li>
          <a href="/projets/cuisine/modele-projet-1/">Modèle de projet</a>
        </li>
      </ul>
    </main>
  );
}
