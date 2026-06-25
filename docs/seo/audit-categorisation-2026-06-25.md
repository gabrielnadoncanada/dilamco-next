# Audit de catégorisation — NOS catégories réelles × demande KP (2026-06-25)

> Demandé par le client : avant de conclure, dresser la **liste exhaustive de NOS collections/catégories réelles** (système, `lib/shop/catalog-categories.json` + `catalog-products.json`) et vérifier, **mot-clé par mot-clé** (Keyword Planner réel), si la catégorisation a du sens — modificateurs inclus.
>
> Méthode : 44 catégories extraites du catalogue + comptes produits réels (visible/caché). Volumes = **3 batches KP** fusionnés (15 048 mots-clés uniques) : batch1 (cabinets/vanité), batch2 (gap), **batch3 = nos catégories de niche** (fausse porte, range-épices, tiroir déchets, moulure, panneau, coin aveugle, dessus frigo, évier farmhouse, panneau latéral). Volume = médiane de bucket (50000=10K-100K, 5000=1K-10K, 500=100-1K, 50=10-100, 0=<10).

## A. Table maîtresse — catégories VISIBLES (vendables) × mot-clé cible × verdict

| Catégorie (nous) | slug | prod. vis. | mot-clé cible | volume réel | verdict catégorisation |
|---|---|---|---|---|---|
| Armoire murale standard | `standard` | 52 | armoire murale cuisine | 100-1K | ✅ **pilier armoires-cuisine** (cœur) |
| Armoire du bas standard | `base-cabinet-standard` | 24 | caisson cuisine | 100-1K | ✅ **pilier armoires-cuisine** (cœur) |
| Armoire du bas tiroir | `base-cabinet-drawer` | 29 | caisson tiroir cuisine | 10-100 | ➡️ **facette** « tiroirs » dans le pilier (pas de page) |
| Garde-manger | `pantry` | 20 | armoire garde-manger* | ~1K (meuble) | ✅ **pilier garde-manger** |
| Armoire du bas coin | `base-cabinet-corner` | 10 | armoire coin cuisine | 100-1K | ✅ **sous-pilier /coin** |
| Dessus du réfrigérateur | `upper-refrigerator` | 10 | armoire dessus frigo | ~0 | ➡️ **attribut/facette** (pas de page) |
| Armoire murale coin | `corner` | 9 | armoire de coin murale | ~0–100 | ✅ fusionne dans **/coin** (avec base-corner) |
| Tiroir coulissant (accessoire) | `roll-out-drawer` | 8 | tiroir coulissant armoire | 100-1K | ➡️ **facette accessoire** ou cross-sell (borderline) |
| Salle de bain tiroir | `bathroom-base-cabinet-drawer` | 6 | meuble SdB tiroir | ~0 | ➡️ **facette** dans /vanites |
| Armoire murale micro-ondes | `microwave` | 5 | armoire micro-ondes | 100-1K | ✅ **sous-pilier /micro-ondes** |
| Range-épices coulissant | `base-cabinet-spice-rack-pull-out` | 5 | range-épices coulissant | 10-100 | ❌ **cross-sell only** (pas de page) |
| Panneau latéral électros | `return-panels-appliance` | 5 | panneau latéral électro | ~0 | ❌ **cross-sell only** |
| Évier farmhouse (bas) | `base-cabinet-farmhouse-sink` | 4 | armoire évier farmhouse | ~0 | ➡️ **facette** dans le pilier (niche déco) |
| Salle de bain évier (vanité) | `bathroom-base-cabinet-sink` | 4 | meuble lavabo | 1K-10K | ✅ **pilier vanites** (cœur SdB) |
| Panneau de côté îlot | `island-side-panel` | 4 | panneau de côté îlot | ~0 | ❌ **cross-sell only** |
| Moulures | `moldings` | 3 | moulure de cuisine | 10-100 | ❌ **cross-sell only** |
| Panneau arrière îlot | `island-back-panel` | 3 | panneau arrière îlot | ~0 | ❌ **cross-sell only** |
| Panneau extrémité mural | `wall-end-panel` | 3 | panneau d'extrémité | ~0 | ❌ **cross-sell only** |
| Micro-ondes (bas) | `base-microwave-cabinet` | 2 | armoire micro-ondes | 100-1K | ✅ fusionne dans **/micro-ondes** |
| Tiroir à déchets (bas) | `base-cabinet-garbage-pull-out` | 2 | tiroir à déchets / poubelle coulissante | ~0 | ❌ **cross-sell only** |
| Panneaux | `panels` | 2 | panneau de finition armoire | 10-100 | ❌ **cross-sell only** |
| Poubelle (accessoire) | `garbage-bin` | 1 | caisson poubelle cuisine | 10-100 | ❌ **cross-sell only** |
| **Fausse porte** | `dummy-door` | **25** | fausse porte cuisine | **10-100** | ❌ **cross-sell only** — gros volume produit, ZÉRO demande SEO |
| **Fillers bas/mural/haut** | `fillers-base-wall-tall` | **24** | filler / pièce de remplissage | **~0** | ❌ **cross-sell only** — 24 produits, ~0 demande |
| Charnière style américain | `american-style-hinge` | 1 | charnière armoire | ~0 | ❌ **cross-sell only** |

*\* « garde manger » nu = 50K mais **~50% culinaire** (conservation aliments). Le terme MEUBLE réel = « armoire garde-manger » ≈ 1K. On cible le terme meuble, jamais le nu.*

## B. Catégories CACHÉES / problèmes de données (hygiène à corriger)

Catégories définies dans le système avec produits **tous cachés** (`visible:false`) ou **doublons** de la taxonomie xlsx :

| slug | prod (caché) | problème | action |
|---|---|---|---|
| `wall-cabinet-standard` | 15 (cachés) | **DOUBLON** de `standard` (52 vis.) — variante slug xlsx | fusionner → `standard`, supprimer |
| `wall-blind-corner-tall` | 20 (cachés) | coin aveugle haut, jamais activé, demande ~0 | garder caché OU facette /coin |
| `wall-blind-corner` | 7 (cachés) | coin aveugle, demande ~0 | idem |
| `utility-cabinet-oven` / `oven` | 2 / 0 | **DOUBLON** + nom = slug brut (`utility-cabinet-oven`) | nettoyer libellé, fusionner |
| `wall-cabinet-corner-45deg` | 1 (caché) | **DOUBLON** de `corner` | fusionner → `corner` |
| `utility-cabinet-pantry` | 1 (caché) | **DOUBLON** de `pantry` | fusionner → `pantry` |
| `base-cabinet-standard-pull-out`, `oven`, `wall-dummy-door`, `wall-pantry-dummy-door`, `wall-blind-left`, `drawer-bottom-side` | 0 | catégories **vides** (aucun produit) | supprimer du fichier |

→ **6 doublons/libellés bruts + 6 catégories vides = 12 entrées à nettoyer** dans `catalog-categories.json`.

## C. Est-ce que la catégorisation a du sens ? (réponse)

**OUI pour les 3 piliers, NON pour les micro-catégories xlsx — et la donnée le prouve.**

1. **Notre taxonomie SEO curée (3 piliers) est correcte et exhaustive** vis-à-vis de la demande réelle :
   - `armoires-cuisine` (standard bas+mural, tiroir, coin, micro-ondes) = capte tout le 100-1K à 1K-10K du cœur cuisine.
   - `garde-manger` (pantry) = capte « armoire garde-manger » ~1K.
   - `vanites` (bathroom-sink + drawer) = capte « meuble lavabo / vanité » 1K-10K.
   - Sous-piliers `/bois /coin /micro-ondes /24-pouces /30-pouces` = chacun 100-1K, sets distincts. ✅
2. **Les ~14 micro-catégories xlsx (fausse porte, fillers, moulures, panneaux, range-épices, tiroir déchets, poubelle, charnière, panneaux d'îlot, dessus frigo, évier farmhouse) n'ont AUCUNE demande digne d'une page** (10-100 ou 0). Ce ne sont PAS des catégories SEO — ce sont :
   - des **attributs/facettes** d'un meuble (tiroir, coin, dessus frigo, évier farmhouse), OU
   - des **accessoires de finition « complétez votre projet »** (fausse porte, fillers, moulures, panneaux, range-épices, tiroir déchets, poubelle, charnière).
3. **Cas notable** : `dummy-door` (fausse porte) = **25 produits visibles** mais demande SEO ~0. Idem `fillers` (24 produits, ~0). Ils gonflent le catalogue browse sans valeur SEO. **Décision merchandising** : les regrouper sous une section « Finitions & accessoires » (déjà l'esprit de `/boutique/finitions`) plutôt que de les laisser dans la grille principale.
4. **Seul `tiroir coulissant` (accessoire, 100-1K)** mérite mieux qu'un cross-sell : facette ou mini-page accessoire — borderline, à arbitrer.

## D. Modificateurs (transversaux, déjà validés batch 1-2)

Les modificateurs à VRAIE demande se greffent sur les **piliers**, pas sur les micro-catégories :
`liquidation` (1K-10K) · `pas cher` (~9K cumulé) · `en stock`/`déstockage` · finitions `blanc`/`bois-chêne`/`shaker` (100-1K) · `ikea` (comparatif éditorial uniquement). Aucun modificateur ne sauve une micro-catégorie à 0 (ex. « fausse porte pas cher » = 0).

## E. Conclusion / recommandation

- **Garder les 3 piliers** tels quels — la catégorisation SEO a du sens et couvre 100% de la demande captable.
- **Nettoyer `catalog-categories.json`** : 6 doublons + 6 vides (section B).
- **Reclasser les micro-catégories ~0** en facettes (tiroir, coin, micro-ondes, dessus frigo, évier farmhouse) OU en section « Finitions & accessoires » (fausse porte, fillers, moulures, panneaux, range-épices, tiroir déchets, poubelle, charnière) — hors grille principale, hors index, cross-sell.
- **Méthodologie** : KP réel (compte Dilamco) + catalogue système = suffisant, pas besoin de plugin externe. Le plugin `claude-seo` (agent `seo-cluster`, SERP-overlap) reste dispo si on veut une 2e validation par chevauchement de SERP, mais la donnée KP tranche déjà.

> Données : `keyword-research-merged-2026-06-25.tsv` (à régénérer avec batch3), `competitor-collections-kwizine.md`, `boutique-seo-strategie-2026-06-25.md`.
