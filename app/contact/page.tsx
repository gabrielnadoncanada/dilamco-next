import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Contact & soumission",
  description:
    "Contactez Dilamco pour une soumission : cuisine, salle de bain, walk-in, salle de lavage ou commercial. Sur mesure haut de gamme et option clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/contact/",
  },
};

export default function Contact() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Contact", url: SITE.url + "/contact/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
      <header>
        <h1>Contact & soumission — Dilamco</h1>
        <p>
          Parlez-nous de votre projet de cuisine, vanité ou rangement sur
          mesure. Selon l’ampleur du projet, nous pouvons aussi prendre en
          charge une rénovation clé en main (coordination des travaux connexes).
          Nous réalisons des projets principalement à Montréal, Laval et sur la
          Rive-Sud.
        </p>

        <section aria-labelledby="infos-contact">
          <h2 id="infos-contact">Nous joindre</h2>
          <ul>
            <li>
              <strong>Courriel :</strong>{" "}
              <a href="mailto:info@dilamco.com">info@dilamco.com</a>
            </li>
            <li>
              <strong>Téléphone :</strong> <a href="tel:+1">À définir</a>
            </li>
            <li>
              <strong>Zones :</strong> Montréal • Laval • Rive-Sud
            </li>
          </ul>
          <p>
            <a href="/projets/">Voir des projets</a> {" | "}
            <a href="/espaces/">Voir les espaces</a>
          </p>
        </section>
      </header>

      <section aria-labelledby="formulaire">
        <h2 id="formulaire">Demande de soumission</h2>
        <p>
          Donnez-nous quelques détails (espace, secteur, échéance). Plus
          l’information est précise, plus la soumission sera fiable.
        </p>

        <form action="/contact/" method="post">
          <fieldset>
            <legend>Informations de base</legend>

            {/* Honeypot anti-spam (doit rester vide) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-10000px" }}
            />

            <p>
              <label htmlFor="nom">Nom</label>
              <br />
              <input id="nom" name="nom" autoComplete="name" required />
            </p>

            <p>
              <label htmlFor="courriel">Courriel</label>
              <br />
              <input
                id="courriel"
                name="courriel"
                type="email"
                autoComplete="email"
                required
              />
            </p>

            <p>
              <label htmlFor="telephone">Téléphone</label>
              <br />
              <input
                id="telephone"
                name="telephone"
                type="tel"
                autoComplete="tel"
              />
            </p>

            <p>
              <label htmlFor="ville">Ville / secteur</label>
              <br />
              <input
                id="ville"
                name="ville"
                autoComplete="address-level2"
                placeholder="Montréal, Laval, Rive-Sud"
                required
              />
            </p>
          </fieldset>

          <fieldset>
            <legend>Détails du projet</legend>

            <p>
              <label htmlFor="espace">Espace concerné</label>
              <br />
              <select id="espace" name="espace" required>
                <option value="">Sélectionner…</option>
                <option value="cuisine">Cuisine</option>
                <option value="salle-de-bain">Salle de bain / vanité</option>
                <option value="walk-in">Walk-in / rangement</option>
                <option value="salle-de-lavage">Salle de lavage</option>
                <option value="commercial">Commercial</option>
              </select>
            </p>

            <p>
              <label htmlFor="type-projet">Type de projet</label>
              <br />
              <select id="type-projet" name="type_projet" required>
                <option value="">Sélectionner…</option>
                <option value="sur-mesure">
                  Sur mesure (design + fabrication + installation)
                </option>
                <option value="renovation">
                  Rénovation clé en main (selon le projet)
                </option>
                <option value="a-determiner">
                  À déterminer / besoin de conseils
                </option>
              </select>
            </p>

            <p>
              <label htmlFor="echeance">Échéance souhaitée</label>
              <br />
              <select id="echeance" name="echeance" required>
                <option value="">Sélectionner…</option>
                <option value="0-3">0–3 mois</option>
                <option value="3-6">3–6 mois</option>
                <option value="6-12">6–12 mois</option>
                <option value="flexible">Flexible</option>
              </select>
            </p>

            <p>
              <label htmlFor="message">Décrivez votre projet</label>
              <br />
              <textarea
                id="message"
                name="message"
                rows={8}
                required
                placeholder="Ex. cuisine complète, dimensions approximatives, état actuel, besoins (îlot, rangement), matériaux souhaités, contraintes, etc."
              />
            </p>
          </fieldset>

          <p>
            <button type="submit">Envoyer</button>
          </p>
        </form>
      </section>

      <section aria-labelledby="suite">
        <h2 id="suite">À quoi s’attendre après l’envoi</h2>
        <ol>
          <li>
            <strong>Confirmation :</strong> on accuse réception de votre
            demande.
          </li>
          <li>
            <strong>Questions rapides :</strong> si des détails manquent
            (mesures, photos, échéance).
          </li>
          <li>
            <strong>Planification :</strong> rendez-vous / prise d’information
            selon le projet.
          </li>
          <li>
            <strong>Soumission :</strong> proposition claire avec prochaines
            étapes.
          </li>
        </ol>
      </section>

      <section aria-labelledby="filtrage">
        <h2 id="filtrage">
          Ce que nous faisons (et ce que nous ne faisons pas)
        </h2>
        <ul>
          <li>
            <strong>Oui :</strong> cuisines, vanités et espaces sur mesure,
            installation professionnelle, et rénovation clé en main selon
            l’ampleur du projet.
          </li>
          <li>
            <strong>Selon disponibilité :</strong> projets hors
            Montréal/Laval/Rive-Sud (cas par cas).
          </li>
          <li>
            <strong>À éviter :</strong> réparations mineures urgentes ou projets
            très petits (si votre besoin est une intervention ponctuelle,
            mentionnez-le et on vous orientera).
          </li>
        </ul>
        <p>
          <a href="/espaces/cuisine/">Cuisine sur mesure</a>
          {" | "}
          <a href="/espaces/salle-de-bain/">Salle de bain / vanité</a>
          {" | "}
          <a href="/espaces/walk-in/">Walk-in / rangement</a>
          {" | "}
          <a href="/espaces/salle-de-lavage/">Salle de lavage</a>
          {" | "}
          <a href="/espaces/commercial/">Commercial</a>
        </p>
      </section>
    </main>
    </>
  );
}
