# Stratégie SEO boutique Dilamco — synthèse finale (2026-06-25)

> Produit par analyse multi-agents (41 agents : 6 clusters par domaine → anti-phantom adversarial → synthèse) sur le dataset exhaustif : **57 collections compétiteur** (`competitor-collections-kwizine.md`) + **14 979 mots-clés KP** dédupliqués, 1 032 actionnables (`keyword-research-merged-2026-06-25.tsv`). 67 clusters, 18 rejetés comme phantoms.

> **MÉTHODE — correction d'un biais clé** : les cumuls bruts du Keyword Planner (300K vanités, 128K ikea, 105K îlots…) sont des **artefacts de sommation**. Google fusionne les permutations d'ordre de mots / accents / pluriels dans un même bucket, et chaque variante hérite de la **médiane** du bucket (50000 pour 10K-100K, 5000 pour 1K-10K, 500 pour 100-1K). Additionner 6 variantes de « vanité salle de bain » à 50000 = 300K **faux**. Volume réel distinct ≈ 50K. **On annonce toujours des volumes dégonflés, jamais les cumuls bruts.**

---

## 1. Synthèse de la demande (volumes RÉELS dégonflés)

**Bande 10K-100K (1 seule tête réelle)**
- `vanité salle de bain` ≈ **50K** — mais intention dominée par retail de masse + grandes tailles/sur-mesure qu'on ne vend pas → non qualifié tel quel.

**Bande 1K-10K (le cœur exploitable)**
- `liquidation armoire de cuisine` ≈ 5K + `liquidation vanité salle de bain` ≈ 5K = **~10K déstockage**, parfaitement aligné stock. ← *l'or réel.*
- `armoire de cuisine` (head meuble net, hors ikea/brand) ≈ 5-8K · `caisson cuisine` ≈ 5-8K · `armoire cuisine pas cher` ≈ ~9K.
- GAPS captés par concurrents (produits qu'on ne vend pas) : `comptoir quartz` ~15-20K, `hotte` ~5-10K, `îlot` ~5K, `dosseret` ~5K, `robinet`/`évier` ~5K chacun.

**Bande 100-1K (long-tail qualifié, coût marginal ~nul)**
- `armoire garde-manger` ≈ 1K (furniture, hors phantom culinaire) · `armoire bois/chêne blanc` ≈ 500-1K · `vanité 24 po` / `vanité 30 po` ≈ 500 chacune · `armoire de coin` / `micro-ondes` ≈ 500 · `armoire blanc` / `armoires shaker` (USP) ≈ 500.

**Verdict** : gisement réaliste de **~25-30K/mo qualifié** concentré sur l'axe *liquidation/en-stock* + finitions, PAS les 600K bruts.

---

## 2. Actionnable MAINTENANT (on a les produits)

On **n'ajoute aucune page neuve** (sauf 1 candidate à valider en PPC). On **réangle** les piliers sur *liquidation/EN STOCK* et on **tisse des modificateurs** dans copy/H1/title/FAQ/facettes plutôt que de multiplier des slugs cannibales.

### Piliers existants — réangler
- **`/boutique/armoires-cuisine`** : H1+title → *« Armoires de cuisine EN STOCK — liquidation permanente, livraison+install Grand Montréal »*. Tisser : `liquidation armoire de cuisine`, `caisson cuisine`, `armoire de cuisine pas cher`, `armoires shaker` (USP vs IKEA flat-slab), `armoire blanc`. Ne pas optimiser le head info générique ni les termes de marque.
- **`/boutique/vanites`** : réangle *« vanités EN STOCK 24 et 30 po — déstockage »*. Cibler `liquidation vanité salle de bain` (~5K) + `vanité pas cher`, PAS le head 50K (rebond garanti, 2 SKU). Mention « en stock » explicite (anti-cannibalisation vitrine).
- **`/boutique/garde-manger`** : cibler honnêtement `armoire garde-manger` (~1K), JAMAIS le 50K culinaire. Re-merchandiser l'usage *« armoire de buanderie / salle de lavage »* (~500-1K) sur ce pilier, sans nouvelle page ni SKU.
- **`/boutique/armoires-cuisine/bois`** : requalifier *« fini chêne blanc / aspect bois, EN STOCK »* (~500-1K). Exclure bois massif/penderie.
- **`/coin`** + **`/micro-ondes`** : maintenir on-page seul (~500 chacun, ROI marginal).
- **`/vanites/24-pouces`** + **`/30-pouces`** : enrichir les facettes (~500 chacune, mapping parfait, coût nul).

### Modificateurs à tisser (transversal, PAS de pages séparées)
`liquidation`/`déstockage`/`en stock`/`pas cher` → callout + facette interne *« Soldes / Stock limité »* sur armoires-cuisine ET vanités. `blanc`/`bois-chêne`/`shaker` → facettes finition. `ikea` → uniquement angle comparatif éditorial, jamais ranking organique sur le terme de marque.

### Tableau — actionnable maintenant

| Cluster | Volume réel | Action | Slug |
|---|---|---|---|
| Liquidation armoires cuisine | ~5K | Réangle pilier (H1/title/facette Soldes) | `/boutique/armoires-cuisine` |
| Liquidation vanités | ~5K | Réangle pilier + facette Soldes | `/boutique/vanites` |
| Armoire de cuisine (head meuble) | 5-8K | Optimiser pilier, angle stock | `/boutique/armoires-cuisine` |
| Caisson cuisine | 5-8K | Section « caissons » dans le pilier | `/boutique/armoires-cuisine` |
| Armoire cuisine pas cher | ~9K | Modificateur (section + copy) | `/boutique/armoires-cuisine` |
| Armoires shaker (USP) | ~500 | H1 + copy (différenciateur vs IKEA) | `/boutique/armoires-cuisine` |
| Armoire blanc | ~500 | Facette finition Blanc Pur | `/boutique/armoires-cuisine` |
| Armoire bois / chêne blanc | 500-1K | Requalifier sous-pilier | `/boutique/armoires-cuisine/bois` |
| Armoire de coin | ~500 | Maintenir on-page | `/boutique/armoires-cuisine/coin` |
| Armoire micro-ondes | ~500 | Maintenir on-page | `/boutique/armoires-cuisine/micro-ondes` |
| Armoire garde-manger (furniture) | ~1K | Terme exact + interlinking utility | `/boutique/garde-manger` |
| Usage buanderie / salle de lavage | 500-1K | Bloc cas-d'usage sur garde-manger | `/boutique/garde-manger` |
| Vanité 24 po | ~500 | Enrichir facette existante | `/boutique/vanites/24-pouces` |
| Vanité 30 po | ~500 | Enrichir facette existante | `/boutique/vanites/30-pouces` |
| Alternative caissons IKEA (À VALIDER PPC) | qqs centaines rankables | 1 page éditoriale scopée caissons, angle stock 48h vs commande | `/boutique/armoires-cuisine/alternative-ikea` |

> La page `alternative-ikea` est la **seule** création envisagée — conditionnée à validation PPC. Scoper strictement aux caissons (exclure vanités/comptoirs/îlots), ne pas promettre les 128K (phantom de marque, ikea.com domine la SERP).

---

## 3. Décisions d'EXPANSION PRODUIT (gap)

Volume RÉEL mais produits **désactivés au catalogue**. Une page sans produit = trafic 100% non convertible. **Chaque ligne exige de VENDRE/stocker/livrer/installer le produit — décision merchandising C-level, pas une page SEO.** Priorisation par *(volume dégonflé × synergie caissons × faisabilité logistique)* :

| Gap | Volume réel | Synergie caissons | ROI si on vend | Priorité |
|---|---|---|---|---|
| **Hottes de cuisine** | ~5-10K | Forte (bundle caisson+hotte) | Élevé, intention d'achat nette | **#1** |
| **Comptoirs (quartz d'abord)** | quartz ~15-20K | Forte mais contredit le modèle stock-livré (découpe sur mesure) | Élevé en volume, lourd logistiquement | **#2** (dimensions standard seulement) |
| **Éviers de cuisine** | ~5K | Forte (bundle évier+caisson+robinet) | Moyen (poids/SAV) | **#3** |
| **Robinets cuisine + SdB** | ~5K chacun | Moyenne | Moyen, marché brand-loyal (Moen/Riobel) | **#4** |
| **Îlots de cuisine** | ~5K | Moyenne (SERP IKEA-dominé) | Faible sauf SKU différencié | **#5** |
| **Dosserets / céramique** | ~5K | Faible (reno/DIY) | Faible | **#6** |
| **Pharmacies SdB** | ~5K | Moyenne (complète vanité) | Faible-moyen | **#7** |
| **Vanités suspendues / grandes 40-72 po** | ~500/taille | Nulle en stock (= terrain vitrine) | Faible + cannibalisation | **Rejeter** sauf test 48 po |
| **Douchettes / mitigeurs** | ~5K | Faible (add-on) | Faible | **Rejeter** |

**Règle d'or** : si décision produit, ouvrir **1-2 SKU porteurs d'abord** (hotte sous-armoire 30 po ; comptoir stratifié std), valider en PPC, **puis** créer la collection. Jamais l'inverse.

---

## 4. Anti-cannibalisation — boutique EN STOCK vs vitrine SUR-MESURE

La vitrine rank déjà sur le sur-mesure géo-local (Pierrefonds/Laval/Montréal). Règles :
1. **Séparation lexicale stricte** : boutique = *en stock / liquidation / déstockage / disponible / livraison 48h*. Vitrine = *sur mesure / fabrication / conception / réalisation*. Aucune page boutique ne contient « sur mesure » en title/H1.
2. **Termes interdits côté boutique** (cèdent à la vitrine) : `vanité sur mesure`, `armoire sur mesure`, `cuisine sur mesure`, grandes vanités 48/60/72 po, `vanité suspendue`.
3. **Clusters à risque** : `vanité salle de bain` générique (forcer l'angle EN STOCK / 24-30 po), `armoire de cuisine` générique (angle liquidation/caisson), `armoire bois/chêne` (cadrer « fini chêne blanc », pas « bois massif »).
4. **Maillage** : boutique → vitrine *« Besoin de sur-mesure ? »* et inversement *« Disponible en stock ? »*. Intentions distinctes = on couvre les deux moments d'achat.

---

## 5. Hiérarchie de slugs proposée (`/boutique`)

Benchmark concurrent (Kwizine sépare bas/haut/coin/tiroir par type technique) → on garde des **slugs propres orientés requête** (pas le jargon `base-cabinet`), i18n FR racine + EN `/en/shop`. On ne crée un nœud que si sa requête donne un **sous-ensemble distinct** (règle taxonomy.ts).

```
/boutique                                  → /en/shop
├── armoires-cuisine                       → kitchen-cabinets        [pilier, angle stock/liquidation]
│   ├── armoires-cuisine/bois              → kitchen-cabinets/wood   [fini chêne blanc]
│   ├── armoires-cuisine/coin              → kitchen-cabinets/corner
│   ├── armoires-cuisine/micro-ondes       → kitchen-cabinets/microwave
│   └── armoires-cuisine/alternative-ikea  → kitchen-cabinets/ikea-alternative  [À VALIDER PPC]
│   · facettes internes (param, pas de slug) : finition (blanc|chêne), shaker, soldes/stock-limité, caisson
├── garde-manger                           → pantry                  [armoire garde-manger + usage buanderie]
└── vanites                                → bathroom-vanities       [angle stock/liquidation, 24-30 po]
    ├── vanites/24-pouces                  → bathroom-vanities/24-inch
    └── vanites/30-pouces                  → bathroom-vanities/30-inch
    · facette interne : finition (blanc|chêne), soldes/stock-limité

— RÉSERVÉ EXPANSION (slugs uniquement SI le produit est vendu) —
├── hottes-cuisine            → range-hoods            [#1 si expansion]
├── comptoirs                 → countertops            [#2 ; /quartz /stratifie en sous-nœuds dimensions std]
├── eviers-cuisine            → kitchen-sinks          [#3]
└── robinets                  → faucets                [#4 ; /cuisine /salle-bain]
```

**Facettes** (filtres, pas de pages indexées séparées tant qu'identiques au parent) : finition, largeur, soldes. Indexer une facette **seulement** quand elle produit un set distinct (chêne, 24/30 po). `blanc`/`shaker` restent différés (≡ page parent aujourd'hui).

---

## 6. Phantoms écartés (NE PAS cibler — anti-stupidités)

| Terme | Volume brut | Pourquoi écarté |
|---|---|---|
| `garde manger` générique | 50K | ~50% culinaire (chef/conservation aliments). Ne cibler que `armoire garde-manger` (~1K). |
| `vanité salle de bain` head | 300K | Gonflé ~6×, vrai ~50K, dominé retail + grandes tailles sur-mesure non vendues. Pas de pilier générique. |
| `vanité 40-72 po`, `grande vanité`, `vanité suspendue` | 9K/1.5K | Tailles hors stock (gap), cannibalise vitrine. Décision inventaire. |
| `armoire mélamine avant après` | 500 | DIY/refinishing (repeindre), pas achat caisson. Mélamine en feuille désactivé. |
| `armoire thermoplastique/polymère` | 500 | Fini ≠ Shaker mélamine. Au mieux une FAQ si spec confirmée. |
| `porte armoire` (seule) | 5.5K | On vend des caissons complets, pas des portes de remplacement. |
| `ikea/rona/home depot` + produit | 32K-128K | Intention navigationnelle de marque (retailer-locked), inrankable. Au mieux 1 page comparative scopée caissons. |
| `comptoir quartz/granite/bois/stratifié`, `comptoir SdB`, `comptoir céramique` | jusqu'à 35K | Comptoirs = catégorie désactivée. Trafic 0% convertible tant qu'on ne vend pas. |
| `dosseret cuisine`, `comptoir pour îlot`, `dekton`, `corian` | 82K/niche | Gap + reno/DIY + ultra-niche fragmenté. |
| `évier`, `robinet`, `hotte`, `douchette`, `mitigeur` | 26K-66K | Plomberie/électroménager = catégories désactivées. Gap. |
| `lavabo`, `vasque`, `pharmacie`, `meuble lavabo` (pilier séparé) | 18K-131K | `meuble lavabo` = synonyme de vanité (cannibaliserait `/boutique/vanites`) → intégrer comme synonyme, pas de pilier. Vasques/lavabos/pharmacies = gap/composant. |
| `placard rangement`, `meuble rangement cuisine`, `rangement épices`, `plateaux/tablettes coulissantes` | 2.5K-10K | Synonymes exacts de `armoire de cuisine` (cannibale) ou accessoires désactivés. |
| `vanité/armoire sur mesure` | 500-2K | Terrain vitrine. Cannibalisation directe. |

---

## 7. Top 10 priorités (impact × faisabilité)

1. **Réangler `/boutique/armoires-cuisine` sur liquidation/EN STOCK** (H1, title, meta, callout déstockage, USP Shaker). ~5-8K + 5K liquidation, coût faible. *Le plus gros ROI immédiat.*
2. **Réangler `/boutique/vanites` sur liquidation/stock 24-30 po** (cibler `liquidation vanité` ~5K, abandonner head générique). Coût faible.
3. **Facette transversale « Soldes / Stock limité »** + callout *« liquidation permanente »* sur les deux piliers. Capte `pas cher` (~9K) + `déstockage` sans page neuve.
4. **Intégrer `caisson cuisine` (~5-8K)** comme section/synonyme dans le pilier armoires (building-block + USP Shaker).
5. **Requalifier `/boutique/garde-manger` sur `armoire garde-manger` (~1K)** + bloc usage buanderie ; purger toute connotation culinaire ; interlinking utility-cabinets.
6. **Requalifier `/armoires-cuisine/bois` en « fini chêne blanc / aspect bois EN STOCK »** (~500-1K), exclure bois massif/penderie.
7. **Enrichir les facettes `/vanites/24-pouces` et `/30-pouces`** (~500 chacune) — mapping parfait, coût ~nul.
8. **Maillage anti-cannibalisation** boutique↔vitrine (liens croisés « en stock » / « sur mesure ») + audit qu'aucune page boutique ne contient « sur mesure ».
9. **Maintenir on-page `/coin` et `/micro-ondes`** (~500 chacune) — complétude taxonomie, pas d'investissement au-delà.
10. **Tester en PPC la page `alternative-ikea` scopée caissons** AVANT tout contenu organique ; ne créer la page que si le PPC valide la conversion.

> **Hors-périmètre SEO mais à documenter pour le C-level** : expansion produit (hottes #1, comptoirs #2, éviers #3) = ~30K+ de volume capté aujourd'hui par Home Depot/Rona/IKEA, mais qui exige de **vendre, stocker, livrer, installer** le produit — aucune page avant l'inventaire réel.
