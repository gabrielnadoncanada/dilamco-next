# Boutique Dilamco — Arborescence & URLs (SEO)

> Basé sur la recherche Google Keyword Planner du 2026-06-16 (Canada/Québec, FR).
> Principe : **un seul domaine** `dilamco.com`, boutique sous **`/boutique`** (reverse proxy vers l'app `dilamco_store`).
> i18n : FR à la racine, EN sous `/en` avec **URLs traduites** + `hreflang` (cohérent avec le site vitrine).

---

## 1. Priorisation (où est la demande)

| Catégorie | Mots-clés | Volume estimé/mois | Priorité |
|---|---|---|---|
| Vanités & meubles-lavabos | 2 689 | ~800 K | 🥇 PILIER |
| Comptoirs & surfaces | 3 469 | ~460 K | 🥇 |
| Armoires de cuisine | 3 238 | ~303 K | 🥈 |
| Rangement & garde-robe | 1 741 | ~308 K | 🥈 |
| Lavabos / vasques / éviers | 621 | ~79 K | 🥉 |
| Pharmacies & miroirs | 434 | ~67 K | 🥉 |
| Quincaillerie | 169 | ~24 K | accessoire |
| Liquidation (transversal) | — | fort intent achat | 🥇 collection |

---

## 2. Arborescence + table des URLs (FR ↔ EN)

Convention de slug : **mots-clés, en minuscules, avec tirets, sans ID**. EN = traduction du slug.

### Accueil boutique
- FR `/boutique` · EN `/en/store`

### N1 — Vanités & meubles-lavabos  (PILIER)
- FR `/boutique/vanites` · EN `/en/store/bathroom-vanities`
- Mots-clés cibles : vanité salle de bain, meuble lavabo, meuble-vasque, vanité de salle de bain
- Sous-catégories (pages indexables) :
  | FR | EN | Mot-clé |
  |---|---|---|
  | `/boutique/vanites/simple-vasque` | `/en/store/bathroom-vanities/single-sink` | vanité 1 lavabo |
  | `/boutique/vanites/double-vasque` | `/en/store/bathroom-vanities/double-sink` | vanité double lavabo |
  | `/boutique/vanites/suspendue` | `/en/store/bathroom-vanities/wall-mounted` | vanité suspendue |
  | `/boutique/vanites/sur-pied` | `/en/store/bathroom-vanities/freestanding` | vanité sur pied |
  | `/boutique/vanites/24-pouces` … `/60-pouces` | `/en/store/bathroom-vanities/24-inch` … | vanité 48 pouces (etc.) |
- Filtres (facettes) : largeur (24/30/36/48/60 po) · couleur · matériau · nb de tiroirs · type de vasque · avec/sans comptoir

### N1 — Lavabos, vasques & éviers
- FR `/boutique/lavabos-vasques` · EN `/en/store/sinks-basins`
- Sous : vasque à poser, vasque encastrée, lavabo sur colonne
- Filtres : forme · matériau (céramique/porcelaine) · couleur · installation

### N1 — Pharmacies & miroirs
- FR `/boutique/pharmacies-miroirs` · EN `/en/store/medicine-cabinets-mirrors`
- Sous : pharmacie encastrée, pharmacie en surface, miroir éclairé (LED)
- Filtres : largeur · éclairage LED · anti-buée · couleur

### N1 — Armoires de cuisine  (cœur de métier)
- FR `/boutique/armoires-cuisine` · EN `/en/store/kitchen-cabinets`
- Mots-clés : armoire de cuisine, armoire cuisine, caisson de cuisine
- Sous-catégories :
  | FR | EN | Mot-clé |
  |---|---|---|
  | `/boutique/armoires-cuisine/en-stock` | `/en/store/kitchen-cabinets/in-stock` | armoire de cuisine en stock |
  | `/boutique/armoires-cuisine/melamine` | `/en/store/kitchen-cabinets/melamine` | armoire mélamine |
  | `/boutique/armoires-cuisine/moderne` | `/en/store/kitchen-cabinets/modern` | armoire de cuisine moderne |
  | `/boutique/armoires-cuisine/caissons` | `/en/store/kitchen-cabinets/cabinet-boxes` | caisson de cuisine |
  | `/boutique/armoires-cuisine/portes-facades` | `/en/store/kitchen-cabinets/doors-fronts` | porte d'armoire de cuisine |
- Filtres : matériau (mélamine/thermoplastique/bois) · couleur · style (shaker/moderne) · disponibilité (en stock)

### N1 — Comptoirs & surfaces  (forte demande par matériau)
- FR `/boutique/comptoirs` · EN `/en/store/countertops`
- **1 page par matériau** (chacune a un vrai volume) :
  | FR | EN | Mot-clé |
  |---|---|---|
  | `/boutique/comptoirs/quartz` | `/en/store/countertops/quartz` | comptoir quartz |
  | `/boutique/comptoirs/stratifie` | `/en/store/countertops/laminate` | comptoir stratifié |
  | `/boutique/comptoirs/granit` | `/en/store/countertops/granite` | comptoir granit |
  | `/boutique/comptoirs/dekton` | `/en/store/countertops/dekton` | dekton comptoir |
  | `/boutique/comptoirs/bois` | `/en/store/countertops/wood` | comptoir bois |
  | `/boutique/comptoirs/salle-de-bain` | `/en/store/countertops/bathroom` | comptoir salle de bain |
- Filtres : matériau · couleur/fini · épaisseur · pièce · sur mesure

### N1 — Cuisine : îlots & dosserets  (peut vivre sous Armoires)
- FR `/boutique/ilots` · EN `/en/store/kitchen-islands` — îlot de cuisine, îlot central
- FR `/boutique/dosserets` · EN `/en/store/backsplashes` — dosseret cuisine

### N1 — Rangement & garde-robe
- FR `/boutique/rangement` · EN `/en/store/storage`
- Sous : étagères/colonnes SdB · armoire de rangement · garde-robe walk-in · penderie
  | FR | EN | Mot-clé |
  |---|---|---|
  | `/boutique/rangement/salle-de-bain` | `/en/store/storage/bathroom` | meuble rangement salle de bain |
  | `/boutique/rangement/walk-in` | `/en/store/storage/walk-in-closet` | garde-robe walk-in |
  | `/boutique/rangement/penderie` | `/en/store/storage/wardrobe` | armoire penderie |

### N1 — Quincaillerie
- FR `/boutique/quincaillerie` · EN `/en/store/hardware`
- Sous : poignées, charnières, coulisses — poignée d'armoire

### N1 — Liquidation & aubaines  (COLLECTION TRANSVERSALE prioritaire)
- FR `/boutique/liquidation` · EN `/en/store/clearance`
- Sous : `/liquidation/vanites`, `/liquidation/armoires-cuisine`
- Mots-clés : liquidation armoire de cuisine, vanité salle de bain liquidation, liquidation vanité
- Note : badge « Liquidation » sur les fiches concernées + cette collection les agrège.

### Fiche produit (gabarit d'URL)
- FR `/boutique/vanites/[slug-produit]` — ex. `/boutique/vanites/vanite-48-pouces-blanc-2-tiroirs`
- EN `/en/store/bathroom-vanities/[product-slug]`

---

## 3. Règles SEO de structure (à appliquer)

1. **Pages-facettes indexables = seulement celles qui ont un volume** (matériau, dimension, couleur principale). Les combinaisons multiples (ex. quartz + blanc + 48po) → `noindex` pour éviter le contenu dupliqué / budget de crawl gaspillé.
2. **Canonical** : chaque page de filtre indexable se pointe elle-même ; les tris/pagination pointent vers la page de base.
3. **`hreflang` FR ↔ EN** sur chaque page (paires exactes des URLs ci-dessus).
4. **Fil d'Ariane** (`BreadcrumbList`) reflétant l'arborescence depuis `/boutique`.
5. **Maillage interne** depuis la vitrine : `/espaces/salle-de-bain` → `/boutique/vanites` ; `/cuisine` → `/boutique/armoires-cuisine`.
6. **Données structurées** : `Product` + `Offer` + `AggregateRating` (fiches) ; `ItemList` (collections) ; `BreadcrumbList` (partout).
7. **Sitemap** : agréger boutique + vitrine dans un sitemap index unique au niveau du domaine.

## 4. Gabarit de fiche produit (contenu + conversion)

- **Titre H1** = [Type] + [attribut clé] + [dimension] : « Vanité de salle de bain 48 po, 2 tiroirs, blanc mat ».
- **1er paragraphe** = répond à l'intention (pièce, usage, bénéfice) avec mots-clés naturels.
- **Fiche technique** : dimensions exactes, matériau, fini, type d'installation, inclus / non inclus, garantie, entretien.
- **Disponibilité** mise en avant (« en stock », délai) — différenciateur vs IKEA / concurrents.
- **Variantes** couleur/dimension regroupées sur une même fiche quand pertinent (évite la cannibalisation).
