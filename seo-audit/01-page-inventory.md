# 01 — Inventaire complet des pages · dilamco.com

> Audit réalisé le 2026-07-07. Données : sitemap live (3 fichiers), routes Next.js locales, HTML rendu en production (SSR), Google Search Console (90 j : 2026-04-08 → 2026-07-07), GA4, DataForSEO.

## Résumé global

| Indicateur | Valeur |
|---|---|
| Pages éditoriales FR (hors produits) | ~53 |
| Miroir EN (`/en/...`, URLs traduites) | ~53 |
| Fiches produits boutique (`/boutique/produit/*`) | ~155 (FR) + miroir EN |
| **Total URLs indexables (estimé)** | **~420** |
| Sitemaps | `sitemap-0.xml` (108 URLs FR+EN), `sitemap-images.xml`, `sitemap-products.xml` (~155) |
| robots.txt | `Allow: /` — aucun blocage. Host + 3 sitemaps déclarés. |
| Rendu | **SSR complet** : title, meta, H1, H2/H3, FAQ (questions + réponses), schema JSON-LD, canonical, hreflang tous présents dans le HTML brut. |
| hreflang | Présent : `fr-CA`, `en-CA`, `x-default` (attribut `hrefLang` camelCase, valide). |
| Canonicalisation | 308 permanents corrects : `http→https`, `www→non-www`, `slash-final→sans-slash`. |
| Schema JSON-LD | Très riche : Organization, HomeAndConstructionBusiness (NAP, horaires, geo), AggregateRating + Review, WebSite, BreadcrumbList, FAQPage, Product (boutique). |

**Verdict technique : le site est techniquement très sain.** Le rendu, la canonicalisation, le hreflang, le schema et le maillage sont solides. Le problème SEO n'est PAS technique — il est **stratégique (ciblage mots-clés / intention)** et **hors-page (Google Business Profile, avis, autorité de domaine)**. Voir §Problèmes critiques.

---

## Performance réelle (GSC, 90 jours)

- **Trafic organique quasi nul et dominé par la marque.** ~120 clics organiques sur 90 j, dont **31 sur « dilamco »** (marque, position 1,5). Hors marque : quelques clics épars.
- **GA4** : 179 sessions organiques / 90 j (61 utilisateurs réels), contre 295 Direct et 205 Paid Search. **0 conversion (key event) trackée**, tous canaux confondus.
- **Beaucoup d'impressions, ~0 clic** sur des requêtes commerciales à forte valeur — problème de CTR et de position (page 2) : voir 05-current-ranking-diagnostic.md.
- **Duplication historique dans l'index** : `www.dilamco.com` et `http://` apparaissent encore dans GSC avec impressions/clics propres, alors que les redirections 308 sont correctes. Consolidation à demander (Request indexing), pas un bug actif.

---

## Tableau des pages éditoriales FR (HTML rendu)

Légende : Mots = mots visibles rendus · FAQ = FAQPage schema présent · JSON-LD = nb de blocs · Impr/Clics/Pos = GSC 90 j (— = < seuil).

| URL | Type | Title (long.) | Mots | H2 | FAQ | JSON-LD | Impr | Pos | Problème principal |
|---|---|---|---:|---:|:--:|---:|---:|---:|---|
| `/` | Home | Cuisiniste à Montréal — cuisines et armoires sur mesure (65) | 832 | 7 | ✓ | 28 | 413 | 7,3 | Cible « cuisiniste montréal » (vol 70) ; dépend de la marque |
| `/a-propos` | Corpo | Spécialiste des armoires sur mesure — À propos (67) | 764 | 6 | – | 10 | 32 | 3,1 | OK |
| `/contact` | Contact | Contact et soumission (31) | 223 | 1 | – | 8 | — | — | Mince (normal) |
| `/processus` | Corpo | Notre processus, du design à l'installation (58) | 855 | 7 | ✓ | 14 | 10 | 4,3 | Peu de potentiel KW |
| `/services` | Hub service | Armoires sur mesure à Montréal : design, fabrication et installation (78) | 405 | 5 | – | 12 | 22 | 11,5 | Title trop long ; hub mince |
| `/services/design` | Service | Design de cuisine et d'armoires sur mesure (57) | 534 | 6 | ✓ | 22 | — | — | KW faible volume |
| `/services/fabrication` | Service | Fabrication d'armoires sur mesure — notre processus (66) | 503 | 6 | ✓ | 20 | — | — | KW faible volume |
| `/services/installation` | Service | Installation d'armoires et de cuisines sur mesure (64) | 521 | 6 | ✓ | 22 | — | — | Cible « installation » sans ville |
| `/services/renovation` | Service | Rénovation clé en main à Montréal : cuisine et salle de bain (70) | 1112 | 9 | ✓ | 30 | 27 | 25,6 | Bon contenu, pos faible |
| `/services/renovation/agrandissement-de-maison` | Service | Agrandissement de maison clé en main à Montréal (57) | 1154 | 9 | ✓ | 22 | 4 | 14,8 | vol 140 |
| `/services/renovation/apres-sinistre` | Service | Rénovation après sinistre à Pierrefonds et l'Ouest-de-l'Île (79) | 1300 | 10 | ✓ | 20 | 7 | 40,6 | Title > 60 ; angle local fort |
| `/services/renovation/cuisine` | Service | Rénovation de cuisine à Montréal — clé en main (56) | 1355 | 10 | ✓ | 22 | 18 | 5,6 | **Bon : pos 5,6**, vol 1600/90 |
| `/services/renovation/plancher` | Service | Rénovation de plancher à Montréal (43) | 1185 | 9 | ✓ | 22 | 10 | 7,4 | Hors cœur de métier |
| `/services/renovation/salle-de-bain` | Service | Rénovation de salle de bain à Montréal — clé en main (62) | 1237 | 10 | ✓ | 22 | 6 | 40,7 | vol 2400, pos faible |
| `/espaces` | Hub | Espaces sur mesure (28) | 512 | 5 | ✓ | 26 | — | — | Title trop court/générique |
| `/espaces/commercial` | Espace | Armoires commerciales sur mesure haut de gamme (56) | 611 | 7 | ✓ | 20 | 8 | 34,2 | Niche |
| `/espaces/cuisine` | Espace★ | Cuisine sur mesure et armoires de cuisine \| Pierrefonds, Montréal (75) | 999 | 9 | ✓ | 20 | 364 | 16,8 | **Title > 60** ; page pilier cuisine |
| `/espaces/salle-de-bain` | Espace★ | Vanité de salle de bain sur mesure à Laval et Montréal (64) | 945 | 9 | ✓ | 20 | 323 | 19,4 | **Pilier vanité, pos 19** — sous-perf |
| `/espaces/salle-de-lavage` | Espace | Salle de lavage sur mesure haut de gamme (50) | 621 | 7 | ✓ | 20 | — | — | KW « salle de lavage sur mesure » = fantôme (0 vol) |
| `/espaces/sous-sol` | Espace | Aménagement de sous-sol sur mesure à Pierrefonds et Montréal (70) | 943 | 8 | ✓ | 28 | — | — | vol « aménagement sous-sol » 260, comp. LOW — opportunité |
| `/espaces/walk-in` | Espace★ | Garde-robe et walk-in sur mesure à Montréal : prix et conception (74) | 1100 | 10 | ✓ | 20 | 673 | 22,0 | **673 impr / pos 22** ; Title vs H1 (Montréal/Pierrefonds) |
| `/materiaux` | Hub info | Matériaux pour cuisines & armoires sur mesure (59) | 630 | 7 | ✓ | 24 | 11 | 3,6 | OK, faible volume |
| `/materiaux/bois-massif` | Info | Armoires en bois massif sur mesure (44) | 635 | 7 | ✓ | 22 | 25 | 13,8 | Info |
| `/materiaux/comparatif` | Info | Comparatif des matériaux d'armoires : mélamine, MDF, bois (72) | 547 | 7 | ✓ | 20 | 28 | 6,3 | Bon angle info |
| `/materiaux/contreplaque` | Info | Armoires en contreplaqué : stabilité et durabilité (60) | 584 | 7 | ✓ | 22 | 6 | 14 | Info |
| `/materiaux/couleurs` | Info | Couleurs et finis d'armoires sur mesure (54) | 613 | 7 | ✓ | 24 | 14 | 6,6 | Info |
| `/materiaux/mdf` | Info | Armoires en MDF : finition, durabilité et usages (58) | 618 | 7 | ✓ | 22 | 8 | 5 | Info |
| `/materiaux/melamine` | Info | Armoires en mélamine : avantages, durabilité et prix (62) | 584 | 7 | ✓ | 22 | 8 | 13,9 | Info |
| `/materiaux/quincaillerie` | Info | Quincaillerie d'armoires haut de gamme (53) | 1176 | 10 | ✓ | 22 | 13 | 24,2 | Info |
| `/projets` | Hub | Réalisations de cuisines & armoires sur mesure (60) | 430 | 4 | – | 20 | 37 | 5,8 | Hub mince |
| `/projets/commercial` | Hub proj. | Projets commerciaux sur mesure (40) | 196 | 2 | – | 8 | — | — | **Coquille (1 projet)** |
| `/projets/commercial/amenagement-...-montreal` | Projet | Aménagement sur mesure, bureau (Centre-ville) (67) | 291 | 6 | – | 10 | 26 | 34,3 | Mince |
| `/projets/cuisine` | Hub proj. | Projets cuisine sur mesure (36) | 276 | 5 | – | 8 | — | — | Hub mince |
| `/projets/cuisine/cuisine-sur-mesure-montreal` | Projet | Cuisine sur mesure, Montréal (38) | 327 | 7 | – | 10 | 9 | 63,1 | Mince ; cannibalise `/espaces/cuisine` |
| `/projets/cuisine/cuisine-sur-mesure-pierrefonds` | Projet | Armoires de cuisine sur mesure, Pierrefonds (53) | 336 | 7 | – | 10 | 56 | 4,8 | **Pos 4,8** ; mince |
| `/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal` | Projet | Cuisine sur mesure, Plateau-Mont-Royal (48) | 321 | 7 | – | 10 | 220 | 10,4 | **220 impr, 3 clics** — meilleure page projet |
| `/projets/cuisine/cuisine-sur-mesure-rive-sud` | Projet | Cuisine sur mesure, Rive-Sud (38) | 324 | 7 | – | 10 | 5 | 50,4 | Mince |
| `/projets/salle-de-bain` | Hub proj. | Projets salle de bain sur mesure (42) | 198 | 2 | – | 8 | 11 | 30,7 | **Coquille** |
| `/projets/salle-de-bain/vanite-sur-mesure-laval` | Projet | Vanité sur mesure, Laval (34) | 273 | 6 | – | 10 | 110 | 23,6 | **110 impr, 0 clic** ; mince |
| `/projets/salle-de-lavage` | Hub proj. | Projets salle de lavage sur mesure (44) | 186 | 1 | – | 8 | — | — | **Coquille (0 projet)** |
| `/projets/walk-in` | Hub proj. | Projets walk-in sur mesure (36) | 176 | 1 | – | 8 | — | — | **Coquille (0 projet)** |
| `/zones/laval` | Page locale | Armoires de cuisine sur mesure à Laval \| Dilamco \| Dilamco (58) | 1086 | 7 | ✓ | 20 | — | — | **Double « \| Dilamco » dans le title** |

★ = page pilier commerciale.

---

## Tableau des pages Boutique (e-commerce)

| URL | Type | Title | Mots | Liens int. | Meta desc. | Problème |
|---|---|---|---:|---:|---|---|
| `/boutique` | Accueil shop | Boutique d'armoires sur mesure (40) | 423 | 44 | *générique boilerplate* | Meta desc dupliquée (voir ↓) ; H1 « en stock » vs title « sur mesure » |
| `/boutique/armoires-cuisine` | Catégorie★ | Armoires de cuisine en stock — prêtes à installer (68) | 3016 | 431 | 118 modules… | Fort contenu ; cible « armoires de cuisine » (vol 8100) |
| `/boutique/armoires-cuisine/bois` | Sous-cat. | Armoires de cuisine en bois (chêne blanc) (60) | 1085 | 198 | 41 modèles… | 0 H2 |
| `/boutique/garde-manger` | Catégorie | Garde-manger de cuisine — armoires pleine hauteur (68) | 710 | 97 | 20 garde-manger… | vol « garde-manger cuisine » 320 |
| `/boutique/liquidation` | Catégorie | Liquidation armoires de cuisine — prix réduits (75) | 1114 | 197 | 42 modules… | Title > 60 ; vol « armoire pas cher » 480 |
| `/boutique/vanites` | Catégorie★ | Vanités de salle de bain — meubles-lavabos en stock (70) | 368 | 61 | 5 meubles… | Peu de produits (5) vs vol « vanité salle de bain » 14800 |
| `/boutique/vanites/24-pouces` | Sous-cat. | Vanité de salle de bain 24 pouces — 2 portes (63) | 208 | 44 | … | Mince ; 0 H2 ; vol « vanité 24 pouces » 390 |
| `/boutique/vanites/30-pouces` | Sous-cat. | Vanité de salle de bain 30 pouces — 2 portes (63) | 205 | 44 | … | Mince ; 0 H2 ; vol « vanité 30 pouces » 320 |
| `/boutique/finitions` | Utilitaire | Finitions · Dilamco (38) | 275 | 39 | *générique boilerplate* | Title bizarre ; meta dupliquée ; à noindex ? |
| `/boutique/soumission` | Formulaire | Demander une soumission d'armoires (58) | 225 | 31 | *générique boilerplate* | **canonical → homepage** ; **H1 absent** ; meta dupliquée |
| `/boutique/produit/*` (~155) | Fiche produit | ex : Armoire de cuisine du bas 2 portes (30") (79) | 600-1360 | 54-194 | module … Grand Montréal | Titles > 70 ; pas de FAQPage ; **templatisé (audit groupé)** |

**Meta description dupliquée** (identique sur ≥3 pages) : « Armoires de cuisine et modules sur mesure en contreplaqué et bouleau massif, finition Shaker. Configurez votre projet et demandez une soumission. » → `/boutique`, `/boutique/finitions`, `/boutique/soumission`.

---

## Miroir EN (`/en/...`)

Structure symétrique, URLs traduites (`/en/shop/kitchen-cabinets`, `/en/spaces/kitchen`, `/en/materials/...`, `/en/services/...`, `/en/projects/...`, `/en/areas/laval`). hreflang réciproque en place. **Indexation EN très faible** (GSC : la plupart des pages EN à 0 clic, positions 20-56). Le marché anglophone de Montréal est réel mais les volumes « montreal » EN sont modestes (40-390) — voir 04.

Anomalie relevée : `/en/projects/kitchen/cuisine-sur-mesure-montreal` — **slug FR non traduit** sous le préfixe `/en/` (73 impressions, pos 30). Incohérence d'URL.

---

## Profondeur de clic (depuis la home)

- Niveau 1 : `/services`, `/espaces`, `/materiaux`, `/projets`, `/boutique`, `/a-propos`, `/contact`, `/processus` (nav principale).
- Niveau 2 : pages service/espace/matériau/catégorie boutique.
- Niveau 3 : sous-pages rénovation, projets détaillés, sous-catégories vanités, fiches produits.
- `/zones/laval` : accessible via maillage contextuel (pas dans la nav principale) — **profondeur ≥ 2, peu de liens entrants**. Aucune autre page `/zones/*` n'existe (une seule zone).

---

## Problèmes critiques (P1)

1. **Ciblage mots-clés inversé (stratégique).** Le site est optimisé pour « sur mesure + ville » à faible volume (`armoires de cuisine montréal` = 20 rech./mois, KD 53 ; `cuisine sur mesure montréal` = 10 ; `salle de lavage sur mesure` = 0), alors que le volume transactionnel réel est sur des termes produits (`vanité salle de bain` 14 800, `armoires de cuisine` 8 100, `meuble lavabo` 2 900) que la boutique sert mais sous-optimise. Détail en 03/04/06.
2. **CTR ~0 malgré des positions correctes.** `custom kitchen cabinets pierrefonds` pos 3 / 105 impr / **0 clic** ; `armoires cuisine sur mesure pierrefonds` pos 7 / 215 impr / 0 clic ; `vanité de salle de bain sur mesure laval` pos 19 / 365 impr / 0 clic. SERP dominées par le **local pack** (fiches GBP avec 30-145 avis) → sans Google Business Profile fort, l'organique reste sous la ligne de flottaison.
3. **Pages « coquilles » (thin/vides).** `/projets/walk-in` (176 mots, 0 projet), `/projets/salle-de-lavage` (186 mots), `/projets/salle-de-bain` (198), `/projets/commercial` (196) : hubs de listing quasi vides, indexés et dans le sitemap. Risque de dilution/qualité perçue.
4. **`/boutique/soumission` : canonical pointe vers la homepage + H1 absent.** Bug de canonicalisation (devrait être self-canonical ou noindex).
5. **Cannibalisation `/espaces/cuisine` ↔ `/projets/cuisine/cuisine-sur-mesure-montreal`** (et équivalents) : deux pages ciblant « cuisine sur mesure Montréal ». Idem vanité (`/espaces/salle-de-bain` ↔ `/projets/salle-de-bain/vanite-sur-mesure-laval`). Voir 05.

## Problèmes importants (P2)

6. Titles > 60 caractères (troncature SERP) : `/services` (78), `/espaces/cuisine` (75), `/services/renovation/apres-sinistre` (79), `/boutique/liquidation` (75), fiches produits (79-82).
7. **Double « | Dilamco »** dans `/zones/laval`.
8. Meta descriptions dupliquées (boutique / finitions / soumission).
9. `/espaces` title trop court et générique (« Espaces sur mesure »).
10. Titres de fiches produits avec `&quot;` et longueur excessive.
11. Slug FR sous `/en/` (`/en/projects/kitchen/cuisine-sur-mesure-montreal`).

## Pages à prioriser (potentiel commercial × faisabilité)

1. `/boutique/vanites` + `/espaces/salle-de-bain` — cluster **vanité** (14 800 + 140 + local) ; 365 impr déjà.
2. `/boutique/armoires-cuisine` + `/espaces/cuisine` — cluster **armoires de cuisine** (8 100 + 320) ; 364-673 impr.
3. `/espaces/walk-in` — **garde-robe/walk-in** (390 + longue traîne quartiers) ; 673 impr, meilleure réserve d'impressions.
4. `/services/renovation/cuisine` + `/services/renovation/salle-de-bain` — **rénovation** (1600 + 2400) ; déjà pos 5,6.
5. `/espaces/sous-sol` — **aménagement sous-sol** (260, concurrence LOW) — quick win.
6. `/zones/laval` — modèle de **page-ville** à corriger puis dupliquer (Laval, Rive-Sud, Ouest-de-l'Île).
