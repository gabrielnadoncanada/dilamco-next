# 02 — Audit du rendu HTML final (production)

> Méthode : récupération du HTML **rendu côté serveur** en production (`curl`/Invoke-WebRequest, sans exécution JS), qui correspond à ce que Googlebot reçoit au premier passage. 55 pages inspectées + vérifications ciblées (FAQ, hreflang, schema, accordéons, redirections). Fichiers bruts conservés dans `seo-audit/_data/raw/`.

## Constat central : le rendu n'est PAS le problème

Contrairement à l'hypothèse fréquente sur les sites Next.js/React (« Google ne voit pas le contenu client-side »), **ce site rend tout son contenu côté serveur**. Vérifié :

| Élément | Présent dans le HTML brut ? | Détail |
|---|:--:|---|
| `<title>` unique par page | ✓ | Généré serveur (Next Metadata API) |
| `meta description` unique | ✓ (sauf 3 pages boutique dupliquées) | — |
| `<h1>` | ✓ (sauf `/boutique/soumission`) | 1 seul H1 par page (bon) |
| H2/H3 hiérarchisés | ✓ | 1 à 10 H2 selon la page |
| Paragraphes de contenu | ✓ | 176 à 3016 mots visibles |
| **FAQ : questions ET réponses** | ✓ | Le texte des réponses est dans le DOM (accordéon Radix) **et** dupliqué dans le schema FAQPage |
| Liens internes | ✓ (`<a href>` réels) | 31 à 431 liens crawlables par page |
| Canonical | ✓ | Auto-référent correct (1 exception) |
| hreflang | ✓ | `fr-CA` / `en-CA` / `x-default` |
| Schema JSON-LD | ✓ | 6 à 30 blocs par page |
| Open Graph / Twitter | ✓ | og:title, og:description, og:locale=fr_CA |

### Point spécifiquement vérifié — FAQ (réponses présentes)

L'accordéon FAQ utilise Radix UI : le contenu replié porte `data-state="closed"` + attribut `hidden`, **mais le texte de la réponse reste dans le HTML** (crawlable par Google). Exemple mesuré sur `/espaces/walk-in`, question « Est-ce utile dans un petit espace ? » → la réponse « Oui. Le sur mesure est justement pertinent quand il faut optimiser niches, angles et hauteurs disponibles. » apparaît **4 fois** dans le HTML (accordéon visible desktop + mobile + schema FAQPage). 

➡️ **Pas de problème « FAQ sans réponses ».** Nuance mineure : la triple duplication du contenu FAQ dans le DOM (desktop/mobile/schema) est du bruit, sans impact SEO négatif notable.

### Ce que Google voit vs ce que l'utilisateur voit

Pour la quasi-totalité des pages : **écart nul**. Le HTML initial contient déjà le contenu final. Aucune section critique n'est injectée uniquement côté client. Les seules zones réellement dynamiques (client-side) sont les **filtres/tri de la boutique** (nuqs/searchParams) — mais les listes de produits et les liens vers les fiches sont rendus serveur, donc crawlables (voir mémoire projet « boutique-ssr-indexation » : corrigé le 2026-07-02).

---

## Anomalies de rendu par page

### Critiques

1. **`/boutique/soumission`**
   - `canonical` = `https://dilamco.com` (**pointe vers la homepage**, pas vers la page elle-même).
   - **`<h1>` absent** (h1count = 0).
   - `meta description` = boilerplate générique dupliqué.
   - ➡️ Page de formulaire : soit la rendre self-canonical + vrai H1, soit **`noindex`** (recommandé, comme `/contact` orienté conversion). Le canonical vers la home peut faire disparaître la page de l'index et brouiller le signal de la home.

2. **Meta descriptions dupliquées** — identiques mot pour mot sur `/boutique`, `/boutique/finitions`, `/boutique/soumission` :
   > « Armoires de cuisine et modules sur mesure en contreplaqué et bouleau massif, finition Shaker. Configurez votre projet et demandez une soumission. »
   ➡️ Google réécrit alors la description ou en pénalise la pertinence. Rédiger 3 descriptions distinctes (ou noindex sur soumission/finitions).

### Importantes

3. **Titles tronqués en SERP (> 60 car.)** : `/services` (78), `/services/renovation/apres-sinistre` (79), `/espaces/cuisine` (75), `/boutique/liquidation` (75), `/boutique/vanites` (70), fiches produits (79-82). La partie après ~60 car. (souvent le géo ou « | Dilamco ») est coupée.

4. **`/zones/laval` : double marque dans le title** — « Armoires de cuisine sur mesure à Laval **| Dilamco | Dilamco** ». Bug de template (suffixe marque ajouté deux fois).

5. **Incohérence Title ↔ H1 sur le géo** (pages piliers) :
   - `/espaces/cuisine` : title « … Pierrefonds, Montréal », H1 « … Pierrefonds et dans le Grand Montréal ».
   - `/espaces/walk-in` : title « … à Montréal », H1 « … à Pierrefonds ».
   - `/espaces/sous-sol` : title « … Pierrefonds et Montréal », H1 « … Pierrefonds ».
   ➡️ Cohérent dans l'intention (ancrage Pierrefonds/Ouest-de-l'Île) mais le title dit « Montréal » et le H1 « Pierrefonds ». À aligner selon la cible géo choisie (voir 07).

6. **`/boutique/armoires-cuisine/bois` et `/boutique/vanites/24|30-pouces` : 0 `<h2>`** — hiérarchie de titres pauvre sur des pages de listing (H1 puis H3 directement). Ajouter des H2 structurants (usages, dimensions, finitions).

7. **Fiches produits : titres avec entités `&quot;`** rendues (`(30&quot;)`) et longueur 79-82 car. Pas de FAQPage sur les fiches (les pages éditoriales en ont, pas les produits).

8. **`/en/projects/kitchen/cuisine-sur-mesure-montreal`** : slug FR sous préfixe EN → URL incohérente pour le marché anglophone.

### Schema — riche mais à surveiller

- Le schema est **abondant** (jusqu'à 30 blocs JSON-LD sur `/services/renovation`). Types présents : `Organization`, `HomeAndConstructionBusiness` (avec NAP, `OpeningHoursSpecification`, `GeoCoordinates`, `Place` × plusieurs zones desservies), `AggregateRating` + `Review` (avis), `WebSite`, `BreadcrumbList`, `FAQPage`. Boutique : `Product` (avec prix). **Très bonne couverture.**
- ⚠️ **`AggregateRating` + `Review` sur (quasi) toutes les pages.** À vérifier : ces avis doivent être **réels et vérifiables** (sinon risque de manquement aux consignes Google sur les rich results). Confirmer la provenance des avis (Google, plateforme) et, idéalement, ne poser `AggregateRating` que là où c'est légitime (Organization/LocalBusiness, pas chaque page de contenu).
- ⚠️ Beaucoup de blocs répétés (`Organization` + `ImageObject` × 5 en fin de home) — redondance inoffensive mais à nettoyer.

---

## Boutique — rendu e-commerce

- **Listes produits rendues serveur** : `/boutique/armoires-cuisine` = 3016 mots, **431 liens internes** (chaque module lié) → excellent maillage et crawlabilité.
- Fiches produits : contenu riche (600-1360 mots), `Product` schema avec prix, mais **pas de FAQ** ni de section « comparaison / compatibilité » qui aiderait sur la longue traîne.
- Filtres/tri = client-side (searchParams) : n'empêchent pas le crawl des produits (liens en dur présents), mais génèrent des **URLs paramétrées** potentiellement indexables — vérifier que les combinaisons de filtres ne créent pas de duplicate (canonical vers la catégorie de base recommandé).

---

## Synthèse étape 2

| Dimension | État |
|---|---|
| Contenu visible par Google | ✅ Complet (SSR) |
| FAQ réponses crawlables | ✅ Oui |
| Canonical | ✅ (1 bug : soumission) |
| hreflang | ✅ |
| Schema | ✅ riche (⚠️ vérifier légitimité AggregateRating) |
| Titles/meta | ⚠️ longueurs + 3 doublons + 1 double-marque |
| Contenu mince | ⚠️ hubs `/projets/*` |
| JS bloquant | ✅ Aucun |

➡️ **Aucun correctif de rendu lourd nécessaire.** Les gains SEO viendront du **ciblage éditorial, du CTR (titles/meta + local pack) et de la consolidation des pages minces**, pas d'un problème d'indexabilité technique.
