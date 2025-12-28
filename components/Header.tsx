import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <a href="#contenu">Aller au contenu principal</a>
      <header>
        <div>
          <p><strong>Dilamco</strong></p>
          <p>Armoires & vanités sur mesure — Design • Fabrication • Installation • Rénovation</p>
        </div>
        <Navigation />
      </header>
    </>
  );
}

