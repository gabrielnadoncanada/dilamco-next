import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuisine sur mesure — Plateau-Mont-Royal | Dilamco",
  description: "Étude de cas : Cuisine sur mesure — Plateau-Mont-Royal (Montréal (Plateau-Mont-Royal)).",
  alternates: {
    canonical: "https://dilamco.com/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal/",
  },
};

export default function CuisinePlateauMontRoyal() {
  return (
    <main id="contenu">
      <header><h1>Cuisine sur mesure — Plateau-Mont-Royal</h1></header>
      <p><strong>Lieu :</strong> Montréal (Plateau-Mont-Royal)</p>
      <p><strong>Objectif :</strong> optimisation de l'espace, durabilité et finition.</p>
      <ul>
        <li><a href="/montreal/cuisine-sur-mesure/">Page locale liée</a></li>
        <li><a href="/espaces/cuisine/">Page espace liée</a></li>
        <li><a href="/materiaux/">Matériaux</a></li>
        <li><a href="/contact/">Soumission</a></li>
      </ul>
    </main>
  );
}

