# 06 — Mapping final page → mot-clé

> Une page = une intention principale = un mot-clé principal **unique**. Volumes DataForSEO (Canada, /mois). Actions : **Garder** (bon, optimiser à la marge), **Améliorer** (réécrire title/contenu), **Fusionner**, **Rediriger**, **Désindexer**, **Créer**.

## Règle de répartition d'intention (anti-cannibalisation)

| Type de page | Intention | Champ lexical |
|---|---|---|
| `/espaces/*` | Sur mesure / service haut de gamme | « [produit] sur mesure » |
| `/boutique/*` | Transactionnel produit / prix / en stock | « [produit] en stock / pas cher / [dimension] » |
| `/services/*` | Service (rénovation, installation, design) | « rénovation [pièce] », « installation [produit] » |
| `/projets/*` | Preuve / exemple (PAS de cible commerciale principale) | « réalisation [type] [quartier] » → lien vers pilier |
| `/zones/*` | Local (ville) | « [produit] sur mesure [ville] » |

---

## Mapping — pages piliers & espaces

| URL | Type | Mot-clé principal | Vol | Secondaires | Intention | Action |
|---|---|---|---:|---|---|---|
| `/` | Home | armoires de cuisine sur mesure | 210 | cuisine sur mesure, fabricant armoires Grand Montréal, cuisiniste montréal (70) | Comm./marque | Améliorer (title) |
| `/espaces/cuisine` | Pilier | armoires de cuisine sur mesure | 210 | cuisine sur mesure (320), armoire de cuisine sur mesure, îlot de cuisine, prix cuisine sur mesure | Transac./comm. | **Améliorer** |
| `/espaces/salle-de-bain` | Pilier | vanité de salle de bain sur mesure | 140 | vanité sur mesure (140), meuble-lavabo sur mesure, vanité salle de bain Laval | Transac. | **Améliorer** |
| `/espaces/walk-in` | Pilier | garde-robe sur mesure | 390 | walk-in sur mesure (70), rangement sur mesure (110), prix walk-in | Comm. | **Améliorer** |
| `/espaces/sous-sol` | Espace | aménagement de sous-sol sur mesure | 260 | cinéma maison sur mesure, bar de sous-sol, cave à vin sur mesure | Comm. | **Améliorer** (quick win) |
| `/espaces/commercial` | Espace | agencement commercial sur mesure | faible | ébénisterie commerciale, aménagement de bureau, millwork | B2B | Améliorer |
| `/espaces/salle-de-lavage` | Espace | armoire de salle de lavage sur mesure | ~0 | aménagement buanderie, rangement salle de lavage | Comm. | Garder (support) / section |
| `/espaces` | Hub | espaces sur mesure (marque) | — | — | Navig. | Garder (title) |

## Mapping — services

| URL | Type | Mot-clé principal | Vol | Secondaires | Intention | Action |
|---|---|---|---:|---|---|---|
| `/services/renovation/cuisine` | Service | rénovation de cuisine | 1600 | rénovation cuisine montréal (90), cuisine clé en main, prix rénovation cuisine | Comm. | **Améliorer** (pousser top 3) |
| `/services/renovation/salle-de-bain` | Service | rénovation de salle de bain | 2400 | rénovation salle de bain montréal (110), salle de bain clé en main | Comm. | **Améliorer** |
| `/services/renovation` | Hub service | rénovation clé en main | 40 | rénovation cuisine et salle de bain Montréal | Comm. | Garder |
| `/services/renovation/agrandissement-de-maison` | Service | agrandissement de maison | 140 | agrandissement clé en main, extension maison Montréal | Comm. | Garder |
| `/services/renovation/apres-sinistre` | Service | rénovation après sinistre | faible | après dégât d'eau, reconstruction inondation Pierrefonds | Comm. | Garder (title < 60) |
| `/services/renovation/plancher` | Service | rénovation de plancher | faible | pose de plancher Montréal | Comm. | Garder (hors cœur) |
| `/services/installation` | Service | installation d'armoires de cuisine | faible | installateur armoires, pose armoires IKEA Montréal | Comm. | Améliorer (ajouter géo) |
| `/services/fabrication` | Service | fabrication d'armoires sur mesure | faible | — | Support | Garder |
| `/services/design` | Service | design de cuisine sur mesure | faible | conception de cuisine | Support | Garder |
| `/services` | Hub | services armoires sur mesure Montréal | — | — | Navig. | Améliorer (title < 60) |
| `/processus` | Corpo | processus fabrication armoires | — | — | Confiance | Garder |

## Mapping — boutique (e-commerce)

| URL | Type | Mot-clé principal | Vol | Secondaires | Intention | Action |
|---|---|---|---:|---|---|---|
| `/boutique/armoires-cuisine` | Catégorie | armoires de cuisine | 8100 | caisson de cuisine (260), armoire prêt à installer, module d'armoire | Transac. | **Améliorer** |
| `/boutique/vanites` | Catégorie | vanité de salle de bain | 14800 | meuble-lavabo (2900), meuble salle de bain (4400), vanité en stock | Transac. | **Améliorer** |
| `/boutique/vanites/24-pouces` | Sous-cat. | vanité 24 pouces | 390 | vanité 24 po 2 portes | Transac. | Améliorer (ajouter H2/contenu) |
| `/boutique/vanites/30-pouces` | Sous-cat. | vanité 30 pouces | 320 | vanité 30 po 2 portes | Transac. | Améliorer |
| `/boutique/garde-manger` | Catégorie | garde-manger de cuisine | 320 | armoire garde-manger, armoire pleine hauteur | Transac./info | Garder |
| `/boutique/liquidation` | Catégorie | armoire de cuisine pas cher | 480 | liquidation armoire de cuisine, armoire cuisine liquidation | Transac. | **Améliorer** (title < 60) |
| `/boutique/armoires-cuisine/bois` | Sous-cat. | armoire de cuisine en bois | faible | armoire chêne blanc | Transac. | Améliorer (ajouter H2) |
| `/boutique` | Accueil shop | armoires de cuisine en stock | 10 | modules prêts à installer Grand Montréal | Transac. | Améliorer (aligner H1/title, meta unique) |
| `/boutique/finitions` | Utilitaire | (finitions armoires) | — | — | Support | **Désindexer** (noindex) ou meta unique |
| `/boutique/soumission` | Formulaire | (soumission armoires) | — | — | Conversion | **Désindexer** + corriger canonical + H1 |
| `/boutique/produit/*` (~155) | Fiche | [type] [dimension] pouces | longue traîne | dimensions, usage, finition | Transac. | Améliorer (template : title < 60, FAQ) |

## Mapping — projets (preuve, pas cible principale)

| URL | Mot-clé (angle preuve) | Action |
|---|---|---|
| `/projets` | réalisations cuisines armoires sur mesure | Garder (hub, enrichir) |
| `/projets/cuisine/cuisine-sur-mesure-pierrefonds` | exemple cuisine sur mesure Pierrefonds | Garder → lien vers `/espaces/cuisine` |
| `/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal` | exemple cuisine sur mesure Plateau | Garder (meilleure page projet) |
| `/projets/cuisine/cuisine-sur-mesure-montreal` | exemple cuisine sur mesure Montréal | **Améliorer ou fusionner** (cannibalise pilier, pos 63) |
| `/projets/cuisine/cuisine-sur-mesure-rive-sud` | exemple cuisine sur mesure Rive-Sud | Garder |
| `/projets/salle-de-bain/vanite-sur-mesure-laval` | exemple vanité sur mesure Laval | **Améliorer** → dé-cannibaliser de `/espaces/salle-de-bain` |
| `/projets/commercial/amenagement-...-montreal` | exemple agencement bureau Montréal | Garder |
| `/projets/commercial` | (hub) | **Fusionner/enrichir** (196 mots, 1 projet) |
| `/projets/salle-de-bain` | (hub) | **Enrichir** (198 mots) |
| `/projets/walk-in` | (hub, 0 projet) | **Désindexer** jusqu'à avoir des projets |
| `/projets/salle-de-lavage` | (hub, 0 projet) | **Désindexer** jusqu'à avoir des projets |

## Mapping — pages-villes

| URL | Mot-clé principal | Vol | Action |
|---|---|---:|---|
| `/zones/laval` | armoires de cuisine sur mesure Laval | 170 | **Améliorer** (corriger double marque) puis modèle à dupliquer |
| `/zones/rive-sud` *(à créer)* | armoires de cuisine sur mesure Rive-Sud | — | **Créer** (voir 07/08) |
| `/zones/ouest-de-lile` *(à créer)* | armoires de cuisine sur mesure Ouest-de-l'Île / Pierrefonds | — | **Créer** |

## Mapping — matériaux (info / support E-E-A-T)

Toutes en **Garder** (bon contenu info, faible volume commercial, servent le maillage et l'autorité) : `/materiaux` (hub), `/materiaux/comparatif` (meilleur angle), `bois-massif`, `contreplaque`, `mdf`, `melamine`, `couleurs`, `quincaillerie`. Mot-clé type : « armoire en [matériau] », « comparatif matériaux armoires ».

---

## Contrôle anti-cannibalisation (mots-clés principaux uniques)

| Mot-clé principal | Page unique attribuée |
|---|---|
| armoires de cuisine (transac. produit) | `/boutique/armoires-cuisine` |
| armoires de cuisine **sur mesure** (service) | `/espaces/cuisine` |
| vanité de salle de bain (transac. produit) | `/boutique/vanites` |
| vanité de salle de bain **sur mesure** (service) | `/espaces/salle-de-bain` |
| garde-robe / walk-in sur mesure | `/espaces/walk-in` |
| aménagement de sous-sol sur mesure | `/espaces/sous-sol` |
| rénovation de cuisine | `/services/renovation/cuisine` |
| rénovation de salle de bain | `/services/renovation/salle-de-bain` |
| armoire de cuisine pas cher | `/boutique/liquidation` |
| armoires de cuisine sur mesure Laval | `/zones/laval` |

✅ Aucun doublon de mot-clé principal après réorganisation. Les pages `/projets/*` et `/materiaux/*` ne portent aucun mot-clé principal commercial (support/preuve).
