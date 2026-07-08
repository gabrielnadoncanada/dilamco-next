# 05 — Diagnostic du ranking actuel

> Source : **Google Search Console** (propriété `sc-domain:dilamco.com`, 90 j : 2026-04-08 → 2026-07-07), croisé avec DataForSEO SERP et GA4. Données réelles, pas d'estimation.

## Vue d'ensemble

| Métrique (90 j) | Valeur |
|---|---|
| Clics organiques totaux | ~120 |
| Dont marque « dilamco » | 31 (26 %) + variantes (lamco, lamdco…) |
| Requêtes distinctes avec impressions | 161 |
| Pages distinctes avec impressions | 83 (incl. doublons www/http/slash) |
| Sessions organiques GA4 | 179 (61 utilisateurs) |
| Conversions (key events) trackées | **0** |

**Diagnostic global : le site est indexé et génère des impressions, mais ne convertit presque aucune impression en clic hors marque.** Deux causes dominantes : (1) positions moyennes en page 2 sur les requêtes à volume ; (2) sur les requêtes locales où il est en page 1, le **local pack** capte le clic. Le site est en **« crawled/indexed but not clicked »**, pas « not indexed ».

---

## Pages où Dilamco ranke déjà bien (à défendre / exploiter)

| Page | Requête | Pos | Impr | Clics | Lecture |
|---|---|---:|---:|---:|---|
| `/projets/cuisine/cuisine-sur-mesure-pierrefonds` | custom kitchen cabinets pierrefonds | **3,0** | 105 | 0 | Pos 3 mais 0 clic → SERP locale (map pack) capte tout |
| `/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal` | cuisine sur mesure plateau-mont-royal | 3,8 | 105 | 1 | Meilleure page projet |
| `/espaces/cuisine` | armoires cuisine sur mesure pierrefonds | 7,2 | 215 | 0 | Page 1 mais 0 clic |
| `/services/renovation/cuisine` | rénovation cuisine (var.) | 5,6 | 18 | 1 | Proche du top sur un terme à 1600 vol |
| `/en/services` | (services EN) | 3,2 | 83 | 6 | **Meilleur CTR EN** |
| `/en/spaces/commercial` | (commercial EN) | 2,7 | 19 | 1 | — |
| `/materiaux/couleurs` | (couleurs) | 6,6 | 14 | 2 | Info, bon CTR |
| `/a-propos` | (marque + à propos) | 3,1 | 32 | 0-1 | Marque |

## Pages avec grosse réserve d'impressions mais position insuffisante (page 2)

| Page | Requête clé | Pos | Impr | Clics | Écart au top |
|---|---|---:|---:|---:|---|
| `/espaces/salle-de-bain` | vanité de salle de bain sur mesure laval | **19,0** | 365 | 0 | **Gisement #1** — passer pos 19→top 5 |
| `/espaces/walk-in` | walk in closet montreal / garde-robe quartiers | 22-34 | 673 | 1 | **Gisement #2** — longue traîne quartiers |
| `/espaces/cuisine` | cuisine sur mesure / armoires (divers) | 16,8 | 364 | 3 | Pilier bloqué en page 2 |
| `/espaces/salle-de-bain` | (salle de bain divers) | 22,4 | 274 | 2 | — |
| `/services/renovation/salle-de-bain` | rénovation salle de bain (var.) | 40,7 | 6 | 0 | vol 2400, très loin |
| `/services/renovation` (via query) | rénovation cuisine pierrefonds-roxboro | 15,6 | 136 | 0 | — |
| `/projets/salle-de-bain/vanite-sur-mesure-laval` | vanité de salle de bain sur mesure laval | 23,6 | 110 | 0 | **Cannibalise `/espaces/salle-de-bain`** |

---

## Cannibalisation interne détectée

| Requête cible | Pages en concurrence | Problème | Google préfère |
|---|---|---|---|
| vanité de salle de bain sur mesure laval | `/espaces/salle-de-bain` (pos 19, 365 impr) **ET** `/projets/salle-de-bain/vanite-sur-mesure-laval` (pos 23,6, 110 impr) | Deux pages sur la même requête → signaux dilués, aucune ne perce | `/espaces/salle-de-bain` (plus d'impressions) |
| cuisine sur mesure montréal | `/espaces/cuisine` **ET** `/projets/cuisine/cuisine-sur-mesure-montreal` (pos 63) | La page projet (mince, 327 mots) cannibalise le pilier | `/espaces/cuisine` |
| cuisine sur mesure pierrefonds | `/espaces/cuisine` **ET** `/projets/cuisine/cuisine-sur-mesure-pierrefonds` (pos 3-7) | Les deux rankent ; à clarifier (pilier = commercial, projet = preuve) | variable |
| armoires de cuisine sur mesure | `/espaces/cuisine` **ET** `/boutique/armoires-cuisine` **ET** home | 3 pages sur le champ « armoires de cuisine » | à répartir : espace=sur mesure, boutique=produits en stock |

➡️ **Règle de désambiguïsation à appliquer** : les pages `/projets/*` doivent viser « **exemple / réalisation** [type] [quartier] » (preuve sociale) et **pointer** vers le pilier `/espaces/*` (commercial), pas se battre sur le même mot-clé principal. Les pages `/boutique/*` visent l'intention **transactionnelle produit** (« en stock, prix, prêt à installer »), les `/espaces/*` l'intention **sur mesure/service**.

---

## Requêtes locales hyper-longue-traîne (quartiers)

Le site capte beaucoup d'impressions sur des requêtes « garde-robe sur mesure + quartier » et « custom kitchen + quartier » (Ahuntsic, Rosemont, Villeray, LaSalle, Montréal-Nord, RDP, Westmount, Hampstead, Pointe-Claire, Beaconsfield, Deux-Montagnes…), généralement **pos 12-35, 0 clic**. Exemples : garde-robe sur mesure fabreville (60 impr, pos 26), garde-robe sur mesure montréal-nord (65 impr, pos 20), custom kitchen westmount (28 impr, pos 31).

**Lecture :** ces requêtes ont un volume unitaire quasi nul (DataForSEO ne renvoie souvent pas de volume) mais **s'additionnent**. Le site les touche grâce au schema `Place`/zones desservies. Ce n'est pas une source de trafic fiable en soi — c'est un **signal que l'ancrage local fonctionne** mais reste sous le local pack. Le levier n'est pas « plus de pages quartiers » mais **le local pack (GBP)** + renforcer les vraies pages-villes (Laval + créer Rive-Sud, Ouest-de-l'Île).

---

## Indexation

- **Statut** : l'essentiel des pages est indexé (impressions présentes). Aucun blocage robots/noindex accidentel détecté.
- **Duplication d'index** : `www.dilamco.com/*` et `http://www.dilamco.com/` apparaissent séparément dans GSC avec clics/impressions propres (ex : `www.dilamco.com/a-propos` pos 3,6 ; `www.dilamco.com/espaces/salle-de-bain` pos 27). Les redirections 308 sont correctes → il s'agit d'**index legacy** en cours de consolidation. Action : soumettre les URLs canoniques (Request indexing) et vérifier que GSC ne signale pas de « Duplicate, Google chose different canonical ».
- **Pages jamais vues en impression** (probable « Discovered/Crawled – not indexed ») : plusieurs fiches produits et sous-pages minces. À confirmer via l'inspection d'URL GSC ; corréler avec le contenu mince (`/projets/*` coquilles).

---

## Diagnostic par page prioritaire + gravité

| Page | Diagnostic | Gravité |
|---|---|:--:|
| `/espaces/salle-de-bain` | Pos 19 sur requête à 365 impr ; cannibalisée par page projet Laval ; sous-optimisée sur « vanité salle de bain » générique | **Critique** |
| `/espaces/cuisine` | Pilier bloqué page 2 (pos 16,8) malgré 364 impr ; title > 60 ; concurrence + local pack | **Critique** |
| `/espaces/walk-in` | 673 impr / pos 22 ; plus grosse réserve ; incohérence title/H1 | **Critique** |
| `/boutique/vanites` | 5 produits seulement pour un cluster à 14 800 vol ; catalogue trop mince | **Critique** |
| `/services/renovation/salle-de-bain` | Pos 40 sur vol 2400 (CPC 10 $) ; loin du top | Important |
| `/services/renovation/cuisine` | Pos 5,6 — à pousser en top 3 (contenu déjà bon) | Important |
| `/projets/*` (hubs walk-in, salle-de-lavage, salle-de-bain, commercial) | Coquilles minces indexées ; cannibalisation ; qualité perçue | Important |
| `/boutique/soumission` | canonical→home + H1 absent | Important |
| `/zones/laval` | 0 impression captée ; double marque title ; modèle sous-exploité | Important |
| `/espaces/salle-de-lavage` | Cible fantôme (0 vol) | Faible |
| Miroir EN | Indexé mais quasi 0 clic ; volumes locaux EN modestes | Faible-Moyen |

---

## Conclusion étape 5

Le problème n'est pas l'indexation ni la visibilité brute (les impressions existent), mais :
1. **La position** (page 2) sur les requêtes à volume → besoin de contenu plus fort + autorité (backlinks locaux).
2. **Le CTR** en page 1 des requêtes locales → besoin d'un **Google Business Profile actif avec avis** (le local pack est le vrai concurrent) + titles/meta plus incitatifs.
3. **La cannibalisation** projets ↔ piliers → besoin de hiérarchiser (pilier commercial vs preuve).
4. **La dépendance à la marque** (26 % des clics) → besoin de gagner du non-marque via les clusters transactionnels de la boutique.
