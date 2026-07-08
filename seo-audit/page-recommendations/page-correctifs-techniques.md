# Correctifs techniques SEO — dilamco.com

> Site Next.js (App Router) bilingue FR/EN, boutique e-commerce + pages éditoriales.
> Métadonnées centralisées dans `lib/metadata.ts` (`createPageMetadata`) + templates de titre par layout.
> Date : 2026-07-07. Public cible : développeur.

## Résumé

Le site est **techniquement sain** : rendu serveur (SSR) complet, `hreflang` fr-CA/en-CA/x-default correct, redirections 308 propres, réponses de FAQ crawlables, canonical auto-référent sur la grande majorité des pages, maillage interne riche. **On ne réécrit pas l'architecture.** Les correctifs ci-dessous sont **ciblés** : une poignée de bugs de gabarit (template de titre, canonical hérité du layout, meta boilerplate) et quelques pages minces à sortir de l'index.

La cause racine de la moitié des problèmes P1/P2 est la même : **une page qui n'exporte pas sa propre métadonnée hérite du `title.default`, de la `description` et du canonical du layout parent** (voir `app/[locale]/boutique/layout.tsx`, qui pose `title.template = "%s | Boutique Dilamco"` et une `description` générique). Corriger ça règle la soumission, les meta dupliquées et une partie de la double marque.

Priorisation :
- **P1** — canonical de `/boutique/soumission` (bug qui pointe vers la home), meta descriptions dupliquées, pages « coquilles » minces indexées.
- **P2** — titles > 60 car., double « | Dilamco » sur Laval, template de titre produit (`&quot;` + double marque), incohérence Title/H1 géo, slug EN non traduit.
- **P3** — vérifications (index legacy www/http, canonical des filtres boutique, légitimité des `AggregateRating`/`Review`).

---

## P1 — Correctifs critiques

### P1.1 — `/boutique/soumission` : canonical vers la HOME + 0 H1 + meta boilerplate

**Problème.** La page est un composant client (`"use client"`, `app/[locale]/boutique/soumission/page.tsx`) et **n'exporte aucun `generateMetadata`**. Elle hérite donc du layout boutique : `title.default`, `description = layoutDescription` (le boilerplate dupliqué) et surtout **un canonical qui résout vers `https://dilamco.com` (la homepage)**. Aucun `<h1>` n'est rendu (le hero utilise `SectionHeading`/`Headline`, pas un vrai H1). Un canonical de page de conversion qui pointe vers la home peut **diluer/brouiller le signal de la home** — à corriger dans tous les cas.

**Décision recommandée : `noindex, follow`.** C'est une page de conversion (formulaire de soumission), sans valeur de recherche organique. On la sort de l'index tout en gardant le canonical propre (self-referencing) pour ne pas polluer la home.

**Correction.** Un fichier `page.tsx` client ne peut pas exporter `generateMetadata`. On scinde : le `page.tsx` (serveur) exporte la métadonnée et rend le composant client.

```tsx
// app/[locale]/boutique/soumission/page.tsx  (SERVEUR — retirer "use client")
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { SoumissionClient } from "./soumission-client"; // <- déplacer le JSX client ici

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: "fr" | "en" }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shop.quote" });
  const meta = createPageMetadata(
    { title: t("intro.title"), description: t("meta.description"), path: routes.quote },
    locale,
  );
  // Page de conversion : hors index, mais canonical/hreflang restent auto-référents.
  return { ...meta, robots: { index: false, follow: true } };
}

export default function Page() {
  return <SoumissionClient />;
}
```

Déplacer tout l'actuel corps `"use client"` dans `./soumission-client.tsx`. Si on tient à **garder la page indexable** plutôt que `noindex`, alors : retirer le `robots`, ajouter un vrai `<h1>` unique dans le hero, et rédiger une `meta.description` distincte (voir P1.2). Dans les deux cas, **le canonical auto-référent via `createPageMetadata` corrige le bug de la home.**

- **Effort** : faible (scission client/serveur + 1 clé i18n).
- **Impact** : élevé — élimine un canonical erroné vers la home et retire une page sans valeur de l'index.

---

### P1.2 — Meta description dupliquée mot pour mot sur `/boutique`, `/boutique/finitions`, `/boutique/soumission`

**Problème.** Les trois pages affichent : « Armoires de cuisine et modules sur mesure en contreplaqué et bouleau massif, finition Shaker. Configurez votre projet et demandez une soumission. » C'est le `layoutDescription` du layout boutique, hérité par toute page sans `description` propre. Duplication = signal faible et risque de réécriture SERP par Google.

**Correction.** Donner à chaque page sa propre `description` (ou la sortir de l'index si mince). Éditer les clés i18n dans `messages/fr.json` / `messages/en.json` sous `shop.meta` :

- `/boutique` (`app/[locale]/boutique/page.tsx`) — garde une description **catalogue** : « Catalogue de modules d'armoires en stock : bas, hauts, îlots et vanités en contreplaqué de bouleau, prêts à configurer. Livraison au Québec. »
- `/boutique/finitions` — voir P1.3 (recommandé `noindex`). Si indexée : « Nos finitions d'armoires Shaker : couleurs, portes et poignées disponibles. Comparez les finis avant de demander votre soumission. »
- `/boutique/soumission` — `noindex` recommandé (P1.1). Si indexée : « Demandez une soumission gratuite pour vos armoires ou modules Dilamco. Réponse rapide, showroom à Dorval. »

Pour les pages qui passent par `createPageMetadata`, il suffit de passer une `description` distincte dans l'objet d'options. **Ne jamais laisser une page contenu retomber sur `layoutDescription`.**

- **Effort** : faible (3 chaînes i18n).
- **Impact** : moyen-élevé — supprime la duplication exacte sur un cluster de 3 pages.

---

### P1.3 — `/boutique/finitions` : title « double marque » + page utilitaire mince (275 mots)

**Problème.** Title rendu = « Finitions · Dilamco | Boutique Dilamco » — la page (`generateMetadata` via `createPageMetadata`, `title: t("metaTitle")`) pose un titre qui contient déjà « · Dilamco », puis le `title.template` du layout ajoute « | Boutique Dilamco ». Résultat : marque répétée. La page est en plus mince (~275 mots), utilitaire.

**Correction (recommandée) : `noindex, follow`.** Peu de potentiel organique, contenu de référence interne.

```tsx
return { ...meta, robots: { index: false, follow: true } };
```

Sinon (garder indexée) : **retirer « · Dilamco » du `metaTitle`** (laisser le template ajouter la marque une seule fois → « Finitions d'armoires Shaker | Boutique Dilamco ») et enrichir à ≥ 600 mots (une section par fini, matériaux, entretien). Le fix « retirer la marque du titre de page » est le **même patron** que P2.3 (produits) — c'est un défaut de gabarit systémique : **les titres de page ne doivent jamais contenir la marque, seul le `template` du layout l'ajoute.**

- **Effort** : faible.
- **Impact** : moyen.

---

### P1.4 — Pages « coquilles » minces indexées et présentes dans le sitemap

**Problème.** `app/[locale]/projets/[space]/page.tsx` génère des hubs par espace qui, faute de projets, sont des coquilles :
- `/projets/walk-in` — 176 mots, 0 projet
- `/projets/salle-de-lavage` — 186 mots, 0 projet
- `/projets/salle-de-bain` — 198 mots
- `/projets/commercial` — 196 mots

Indexées + dans le sitemap = risque de thin content et de dilution.

**Correction.** `noindex` conditionnel tant qu'il y a moins de 3 projets, **et** exclusion du sitemap avec la même condition (source de vérité unique).

```tsx
// app/[locale]/projets/[space]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale, space } = await params;
  const projects = getProjectsForSpace(space, locale);
  const meta = createPageMetadata({ /* ... */ }, locale);
  return projects.length >= 3
    ? meta
    : { ...meta, robots: { index: false, follow: true } };
}
```

Dans le générateur de sitemap (`app/sitemap.ts` ou équivalent), filtrer avec la **même règle `projects.length >= 3`** pour ne pas lister d'URL `noindex`. Alternative : enrichir chaque hub à ≥ 3 vrais projets. Ne pas laisser l'état actuel.

- **Effort** : faible-moyen (helper de comptage + filtre sitemap).
- **Impact** : élevé — retire 4+ pages minces de l'index et du sitemap.

---

## P2 — Correctifs importants

### P2.1 — Titles > 60 caractères (troncature SERP)

**Problème.** Titres tronqués en SERP :

| Route | Long. | Fichier |
|---|---|---|
| `/services` | 78 | `app/[locale]/services/page.tsx` |
| `/services/renovation/apres-sinistre` | 79 | `app/[locale]/services/renovation/[type]/page.tsx` |
| `/espaces/cuisine` | 75 | `app/[locale]/espaces/[space]/page.tsx` |
| `/boutique/liquidation` | 75 | collection `app/[locale]/boutique/[...slug]/page.tsx` |
| `/boutique/vanites` | 70 | collection `[...slug]` |

**Correction.** Viser **≤ 60 caractères marque incluse**. Raccourcir les `metaTitle` i18n. Se rappeler que les layouts ajoutent un suffixe de marque : **compter le suffixe du template dans le budget de 60 car.** Exemples de cibles :
- `/services` → « Services d'armoires sur mesure | Dilamco »
- `/services/renovation/apres-sinistre` → « Rénovation après sinistre | Dilamco »
- `/espaces/cuisine` → « Cuisine sur mesure à Montréal | Dilamco » (attention alignement Title/H1, voir P2.4)
- `/boutique/vanites` → « Vanités de salle de bain | Boutique Dilamco »

- **Effort** : faible (chaînes i18n).
- **Impact** : moyen — améliore le CTR SERP.

---

### P2.2 — `/zones/laval` : double « | Dilamco » dans le title

**Problème.** Title = « … | Dilamco | Dilamco ». Les pages `zones` passent par `createPageCollection` (`app/[locale]/zones/[zone]/page.tsx`) qui **injecte déjà « | Dilamco » dans le `title`**, puis un `title.template` de layout ajoute de nouveau le suffixe → marque doublée.

**Correction.** Choisir **une seule** source du suffixe de marque. Le plus propre : que `createPageCollection` retourne un titre **sans marque** et laisser le `template` l'ajouter. Vérifier la construction du titre dans le module de collection (probablement `lib/collections.ts` / `lib/zones.ts`) :

```ts
// AVANT (double marque)
title: `${zone.metaTitle} | ${SITE.name}`,
// APRÈS — laisser le template du layout ajouter la marque
title: zone.metaTitle,
```

Si les pages `zones` **n'ont pas** de layout avec `title.template`, alors garder le suffixe ici mais s'assurer qu'il n'apparaît qu'une fois. Auditer toutes les zones, pas seulement Laval (bug de gabarit → probablement présent sur d'autres zones).

- **Effort** : faible.
- **Impact** : moyen.

---

### P2.3 — Fiches produits `/boutique/produit/*` (~155) : titles trop longs, `&quot;`, double marque, pas de FAQPage

**Problème.** Dans `app/[locale]/boutique/produit/[id]/page.tsx`, `generateMetadata` fait :

```tsx
return { ...meta, title: `${localName} · Dilamco` };
```

`localName` contient les dimensions en pouces encodées → entité `&quot;` (ex. `30&quot;`), et « · Dilamco » **plus** le `title.template = "%s | Boutique Dilamco"` du layout donnent : « Armoire de cuisine du bas avec 2 portes (30&quot;) · Dilamco | Boutique Dilamco » (79–82 car., marque doublée, entité HTML visible).

**Correction.**
1. **Retirer « · Dilamco » du titre de page** (laisser le template ajouter la marque une seule fois).
2. **Nettoyer l'entité** : afficher `po` au lieu du guillemet-pouce, ou décoder proprement. `&quot;` provient d'un `"` échappé — le remplacer par ` po` à la source du nom localisé.
3. **Template de titre court** (< 60 car.) : « Armoire de cuisine basse 2 portes 30 po » (+ suffixe template).

```tsx
// Nom court, sans marque, dimensions en "po", sans entité HTML
const shortName = localName
  .replace(/["”]|&quot;/g, " po")
  .replace(/\s+po\)/g, " po)")
  .trim();
return { ...meta, title: shortName }; // le layout ajoute " | Boutique Dilamco"
```

Idéalement, corriger à la source : générer `localName` avec `po` plutôt qu'un caractère guillemet, pour que le H1, le fil d'Ariane et le title soient tous propres.

4. **Ajouter un `FAQPage`** au gabarit produit (absent aujourd'hui) : 2–3 Q/R par type de caisson (dimensions, matériaux, délai, retour), en JSON-LD, avec réponses visibles dans le DOM. Attention : ne pas empiler `FAQPage` **et** `AggregateRating` factice (voir P3.3).

- **Effort** : moyen (touche ~155 fiches via 1 gabarit + nettoyage à la source du nom).
- **Impact** : élevé — CTR + éligibilité rich results sur tout le catalogue.

---

### P2.4 — Incohérence Title/H1 sur le géo (pages piliers `espaces`)

**Problème.** Sur `/espaces/cuisine`, `/espaces/walk-in`, `/espaces/sous-sol` : le **title dit « Montréal »** alors que le **H1 dit « Pierrefonds »**. Signal géo contradictoire pour Google et l'utilisateur.

**Correction.** Aligner sur **une** ville par page. Recommandation : « Montréal » dans les deux (portée + volume), Pierrefonds/Dorval traités dans le corps et via `LocalBusiness`/zones. Dans `app/[locale]/espaces/[space]/page.tsx`, s'assurer que la clé i18n du H1 et celle du `metaTitle` référencent la **même variable de ville**. Idéalement, une seule source (`espace.city`) alimente title, H1 et description.

- **Effort** : faible.
- **Impact** : moyen — cohérence géo sur les pages piliers.

---

### P2.5 — `/en/projects/kitchen/cuisine-sur-mesure-montreal` : slug FR non traduit sous `/en/`

**Problème.** Sous le préfixe anglais `/en/`, le dernier segment reste en français (`cuisine-sur-mesure-montreal`). Incohérent avec la stratégie i18n (slugs traduits) et avec `hreflang` (le canonical EN pointe vers un slug FR).

**Correction.** Ajouter un `slugEn` à ce projet dans la source de données (là où vivent les projets : `data/projects.*` ou `lib/projets.ts`) — ex. `custom-kitchen-montreal` — et brancher `localizedPaths` dans `createPageMetadata` comme le fait déjà la fiche produit (`fr: routes.project(model.slug)`, `en: localizePath(routes.project(model.slugEn), "en")`). Ajouter une **redirection 308** de l'ancien slug FR-sous-/en/ vers le nouveau slug EN dans `next.config` pour ne pas perdre l'URL déjà connue. Auditer les autres projets pour le même défaut.

- **Effort** : faible-moyen (1 champ data + redirection).
- **Impact** : moyen — cohérence hreflang/canonical côté EN.

---

## P3 — Vérifications

### P3.1 — Index legacy `www.dilamco.com/*` et `http://` encore dans GSC

**Problème.** Les redirections 308 vers l'apex `https://dilamco.com` sont correctes, mais d'anciennes URLs `www.` et `http://` restent dans l'index GSC.

**Action (pas de code).**
1. Confirmer que **toutes** les variantes redirigent 308 vers l'URL canonique (apex + https). Tester `http://dilamco.com`, `http://www.dilamco.com`, `https://www.dilamco.com`.
2. Dans GSC, **Inspection d'URL → Demander une indexation** sur les canoniques clés ; soumettre (ou re-soumettre) le sitemap canonique.
3. Surveiller le rapport **« Duplicate, Google chose a different canonical »** — s'il persiste après quelques semaines, vérifier qu'aucun lien interne ne pointe encore vers `www.`/`http://` (auditer `next.config`, `sitemap.ts`, liens en dur).

- **Effort** : faible (opérationnel GSC).
- **Impact** : moyen — résorbe la duplication d'index legacy.

---

### P3.2 — Filtres / tri boutique côté client : canonical des URLs paramétrées

**Problème.** Les filtres et le tri manipulent des `searchParams` (ex. `?couleur=…&tri=…`). Si Google indexe ces variantes, on crée du duplicate content d'URLs paramétrées.

**Action.** Vérifier que **toute page de catégorie/collection émet un canonical vers la version de base sans paramètres**. Comme `createPageMetadata` pose un canonical fixe (le `path` sans query), c'est probablement déjà le cas — **à confirmer sur une URL filtrée réelle** :

```
GET /boutique/vanites?couleur=navi&tri=prix
→ <link rel="canonical" href="https://dilamco.com/boutique/vanites">  ✅ attendu
```

Si un canonical devait varier, ne jamais y inclure la query string. Optionnel : `robots: { index: false }` sur les combinaisons multi-filtres, ou bloquer les paramètres de tri via `robots.txt` si un crawl budget devient un enjeu. Pour l'instant, **vérification** : confirmer le canonical de base, puis ne rien changer si c'est bon.

- **Effort** : faible (vérif).
- **Impact** : moyen (préventif).

---

### P3.3 — Schema `AggregateRating` + `Review` présent sur presque TOUTES les pages

**Problème.** Un `AggregateRating`/`Review` apparaît sur quasi toutes les pages (contenu et produits). Si les avis ne sont **pas réels et vérifiables**, c'est un manquement aux consignes Google (rich results) → risque d'action manuelle et de perte des étoiles.

**Action.**
1. **Vérifier la provenance** des avis : sont-ils réels (Google Business Profile, avis clients vérifiables) ? Si oui, garder mais **ne pas** les répéter sur chaque page de contenu.
2. **Restreindre `AggregateRating` à une entité légitime** : `Organization` / `LocalBusiness` (une fois, au niveau site/accueil/contact), **pas** sur chaque page éditoriale ni chaque fiche produit sans avis produit spécifique.
3. Sur les fiches produits, n'attacher un `AggregateRating` **que** si ce produit précis a de vrais avis ; sinon retirer le bloc de son gabarit.
4. Chercher où le bloc est injecté globalement (probablement un composant JSON-LD monté haut dans l'arbre, `components/**/schema*` ou `seo/schema/*`) et le **découpler** du layout global.

- **Effort** : moyen (repérer l'injection globale, la scoper).
- **Impact** : élevé en risque — protège l'éligibilité aux rich results de tout le site.

---

## Points sains à préserver (ne pas casser)

- **SSR complet** — HTML serveur rempli sur fiches et index ; ne pas régresser vers du client-only pour du contenu indexable (rappel : le bug soumission vient justement d'un `"use client"` sans métadonnée serveur).
- **`hreflang` fr-CA / en-CA / x-default** — géré par `createPageMetadata` (`alternates.languages`) ; conserver le patron `localizedPaths` pour tout slug FR≠EN.
- **Redirections 308** — anciennes URLs (SKU, `-muf`, autres locales) → slugs canoniques ; garder ce mécanisme.
- **Canonical auto-référent** via `createPageMetadata` — correct partout sauf pages sans métadonnée propre (P1.1) ; toute nouvelle page **doit** exporter `generateMetadata`.
- **FAQ crawlables** — réponses présentes dans le DOM ; ne pas passer en accordéon JS-only non rendu serveur.
- **Maillage interne riche** — préserver ; ne pas retirer de liens en passant des pages `noindex, follow` (le `follow` conserve le jus de lien).

---

### Récapitulatif des fichiers touchés

| Correctif | Fichier(s) |
|---|---|
| P1.1 soumission | `app/[locale]/boutique/soumission/page.tsx` (+ nouveau `soumission-client.tsx`) |
| P1.2 meta dupliquées | `messages/{fr,en}.json` (`shop.meta`), pages boutique |
| P1.3 finitions | `app/[locale]/boutique/finitions/page.tsx`, i18n |
| P1.4 coquilles projets | `app/[locale]/projets/[space]/page.tsx`, `app/sitemap.ts` |
| P2.1 titles > 60 | `messages/{fr,en}.json` (metaTitle des routes listées) |
| P2.2 double marque Laval | `app/[locale]/zones/[zone]/page.tsx` + module `createPageCollection` |
| P2.3 titles produits | `app/[locale]/boutique/produit/[id]/page.tsx` + source du nom localisé + gabarit FAQ |
| P2.4 Title/H1 géo | `app/[locale]/espaces/[space]/page.tsx`, i18n |
| P2.5 slug EN | source des projets + `next.config` (308) |
| P3.1 index legacy | `next.config`, GSC (opérationnel) |
| P3.2 filtres | `createPageMetadata` / collections (vérif) |
| P3.3 AggregateRating | injecteur JSON-LD global (`seo/schema/*` ou `components/**`) |
