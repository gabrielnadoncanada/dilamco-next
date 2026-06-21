# Fiche produit = mini-page SEO — spec d'implémentation

> Cible : `app/[locale]/boutique/produit/[id]/page.tsx` (existe déjà : Product + breadcrumb schema, SSG, i18n).
> Modèle de données : `lib/shop/types.ts` → `Product { family, w, h, d, doors, drawers, colors[], moldings[], corner, ceiling, price, visible, sku, code, gallery }`.
> Objectif : contenu **unique généré depuis les attributs** (zéro duplicate), pour capter la longue traîne.

## ⚠️ Cadrage honnête (à lire avant de coder)
Les **boîtes d'armoires individuelles** ont une demande de recherche minuscule (personne ne tape « armoire de bas 30″ 2 portes blanc »). Donc :
- Ce template empêche les fiches d'être **thin/duplicate** et les rend prêtes — mais ce sont les **pages COLLECTION** (par famille / taille) qui portent le SEO.
- Le vrai jackpot de ce template = quand les **vanités** entreront au catalogue (`vanité 48 pouces blanche` = volume réel 100-1K). Même template, demande 10×.

---

## 1. Title tag (≤ ~60 car.)
```
{name} {wDim}″ {color} — En stock | Dilamco
```
Ex. `Armoire de bas 30″ 2 portes Blanc Pur — En stock | Dilamco`
(remplace le `${localName} · Dilamco` actuel ; garde le suffixe marque)

## 2. Meta description (≤ ~155 car., orientée achat)
```
{family} {dims}, {doors} porte(s){drawers}, {colors}. En stock à Pierrefonds, prête à installer. Livraison Grand Montréal. Dès {price}$.
```

## 3. H1 (humain, unique)
```
{family} {wDim}″ — {colorPrincipale}
```

## 4. Intro générée depuis les specs (LE bloc anti-duplicate)
Template à slots ; la variabilité des champs rend chaque intro distincte :
```
L'{family} {name} mesure {w}″ × {h}″ × {d}″ (L × H × P) et compte {doors} porte(s)
{drawers ? `et ${drawers} tiroir(s)`}. Offerte en {colors.join(", ")}, moulure {moldings.join("/")}.
{corner !== "Non" ? `Conçue pour ${corner.toLowerCase()}.` : ""}
En stock dans notre entrepôt de Pierrefonds — prête à installer, sans délai de fabrication.
```
> Règle : **jamais** de paragraphe figé identique entre 2 fiches. Le texte fixe se limite aux connecteurs ; tout le reste vient des attributs.

## 5. Tableau de specs (structuré, unique)
| Champ | Source |
|---|---|
| Dimensions | `{w}″ × {h}″ × {d}″` |
| Portes / Tiroirs | `doors` / `drawers` |
| Couleurs | `colors[]` |
| Moulures | `moldings[]` |
| Coin | `corner` (si ≠ "Non") |
| Hauteur plafond | `ceiling` |
| Code / SKU | `sku ?? code ?? id` |
| Prix | `price` |
| Disponibilité | `visible && price > 0` → « En stock » |

## 6. Phrase « convient à » (variée par attribut, table de correspondance)
Lookup par `family` (jamais la même phrase pour 2 familles) :
```
"Armoire de bas"      → "Idéale sous un comptoir de cuisine ou un îlot."
"Armoire murale"      → "Parfaite pour le rangement en hauteur au-dessus du plan de travail."
"Garde-manger"        → "Rangement pleine hauteur pour provisions et électroménagers."
"Armoire … de coin"   → "Optimise un angle de cuisine autrement perdu."
"… au-dessus du réfrigérateur" → "Comble l'espace au-dessus du frigo."
```

## 7. FAQ — composée depuis les attributs (2-4 Q par fiche, jamais le même set)
**Principe : une question générique vit sur la CATÉGORIE ; sur la fiche, uniquement des questions dont la RÉPONSE change selon le produit.**

Pool de FAQ-fiche (sélection auto selon les champs présents) :
```
Q: "Quelles sont les dimensions de {name} ?"
A: "{w}″ de large × {h}″ de haut × {d}″ de profondeur."

Q: "L'{family} {w}″ est-elle en stock ?"
A: "Oui, en stock à notre entrepôt de Pierrefonds, prête à installer. Livraison dans le Grand Montréal."   // si visible

Q: "Combien de portes et de tiroirs ?"                              // si doors/drawers
A: "{doors} porte(s){drawers ? ` et ${drawers} tiroir(s)`}."

Q: "Quelles couleurs sont disponibles pour {name} ?"               // si colors.length
A: "{colors.join(', ')}."

Q: "Cette armoire convient-elle à un coin de cuisine ?"            // SEULEMENT si corner ≠ "Non"
A: "Oui, elle est conçue pour {corner.toLowerCase()}."
```
À mettre sur la **catégorie** (génériques, une seule fois, jamais sur la fiche) :
- « Comment installer une armoire en stock ? »
- « Quelle différence entre en stock et sur mesure ? »
- « Quels sont les délais de livraison ? »
- « Puis-je commander une couleur sur mesure ? »

**Sourcing des vraies questions** : GSC (requêtes qui/que/quelle/comment/combien) + People Also Ask + questions ventes/SAV.

**Schema FAQ** : tu peux baliser le bloc en `FAQPage` JSON-LD, mais **sans attendre d'étoiles** (Google a coupé les rich results FAQ pour les sites commerciaux en 2023). Valeur = People Also Ask + AI Overviews + profondeur. Le contenu visible compte plus que le balisage.

## 8. Schema (enrichir l'existant)
`productJsonLd` actuel → ajouter `additionalProperty` (PropertyValue) pour dimensions, portes, tiroirs, couleur, moulure ; `brand` = Dilamco ; `offers.availability` = InStock/OutOfStock selon `visible && price>0` ; `offers.priceCurrency` = CAD ; `image` = vraie photo (pas placeholder).

## 9. Règles d'indexation (anti index-bloat)
- **Produit réel (visible && price>0)** → `index,follow`, canonical auto-référent.
- **`visible === false` ou `price === 0`** → `noindex,follow` (ne pas indexer une coquille « image à venir »).
- **Variantes couleur du même modèle** → **UNE page avec sélecteur de couleur** (le panier gère déjà `color` comme option du `CartItem`), JAMAIS une page par couleur → évite le near-duplicate.
- **Alt text image** = `{family} {dims} {color}` (pas de placeholder ni nom de fichier).

## 10. Maillage interne (l'accélérateur sur domaine jeune)
Chaque fiche doit lier :
- ↑ vers sa **collection** (`collectionsFilter.family(family)`) — déjà dans le breadcrumb, ajouter un lien contextuel.
- → **produits liés** : même `family`, tailles adjacentes (ex. la 24″, 36″ à côté de la 30″) → bloc « Formats similaires ».
- → la **collection couleur / liquidation** correspondante.
Zéro fiche orpheline. Soumettre chaque URL via **IndexNow** (déjà en place).

## 11. Definition of done (par fiche)
- [ ] Title + meta + H1 uniques (générés des attributs)
- [ ] Intro composée des specs (pas de paragraphe figé partagé)
- [ ] Tableau specs + phrase « convient à » par famille
- [ ] 2-4 FAQ attribut-spécifiques (réponse variable)
- [ ] Product schema enrichi (availability, additionalProperty, brand)
- [ ] Alt text descriptif
- [ ] noindex si coquille ; 1 page/modèle (sélecteur couleur)
- [ ] Liens : collection + formats similaires
