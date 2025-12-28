import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rénovation clé en main | Dilamco",
  description: "Rénovation clé en main : coordination et exécution.",
  alternates: {
    canonical: "https://dilamco.com/services/renovation/",
  },
};

export default function Renovation() {
  return (
    <main id="contenu">
      <header><h1>Rénovation clé en main</h1></header>
      <p>Coordination des travaux connexes au besoin (plomberie, électricité, plancher, etc.).</p>
      <ul>
        <li><a href="/services/renovation/cuisine/">Rénovation de cuisine</a></li>
        <li><a href="/services/renovation/salle-de-bain/">Rénovation salle de bain</a></li>
      </ul>
      <p><a href="/contact/">Soumission</a></p>
    </main>
  );
}

