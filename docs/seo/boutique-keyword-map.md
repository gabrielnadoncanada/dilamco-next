# Boutique Dilamco — Carte de mots-clés & architecture SEO

> Source : Google Keyword Planner (compte Dilamco), ciblage **Québec + français**, moyenne 12 mois (juin 2026).
> Volumes en buckets Keyword Planner. Règle d'or : valider chaque cible sur le **volume Planner**, jamais sur les impressions GSC seules (les impressions ≠ recherches).

## 1. Têtes de demande → pages CATÉGORIE

| Terme (synonymes regroupés par Google) | Volume/mois QC | Concurrence | Page cible |
|---|---|---|---|
| **vanité salle de bain** (= vanité de salle de bain, salle de bain vanité, vanité pour salle de bain, vanity de salle de bain) | **10K – 100K** | High | `/boutique/vanites-salle-de-bain` |
| **armoire de cuisine** (= armoire cuisine) | **1K – 10K** | High | `/boutique/armoires-cuisine` |
| **comptoir de cuisine** | **1K – 10K** | High | `/boutique/comptoirs` |
| comptoir quartz | 1K – 10K | High | `/boutique/comptoirs/quartz` |

> La vanité pèse ~10× l'armoire → la boutique mène avec les **vanités**.

## 2. Modificateurs à volume → COLLECTIONS / sous-catégories

| Terme | Volume/mois | Concurrence | Note |
|---|---|---|---|
| **vanité salle de bain liquidation** | 1K – 10K | **Low** | 🎯 créneau entrepôt/en stock |
| vanité salle de bain ikea | 1K – 10K | High | comparaison (contenu) |
| **armoires de cuisine en gros montréal** | 100 – 1K | **Low** | 🎯 en gros |
| vanité salle de bain 48 pouces | 100 – 1K | High | collection taille |
| vanité salle de bain 60 pouces | 100 – 1K | High | collection taille |
| vanité salle de bain pas cher | 100 – 1K | High | prix |
| vanité sur mesure | 100 – 1K | High | angle service (pas boutique) |
| meuble rangement cuisine | 100 – 1K | High | rangement |
| armoire de cuisine montréal | 10 – 100 | Medium | géo = faible (cf. note géo) |
| vanité salle de bain laval / pierrefonds | 10 – 100 | — | géo = faible |

> NOTE GÉO : les modificateurs de ville sont minuscules (`armoire de cuisine montréal` = 10-100 ; pierrefonds = ~0).
> Le local se gagne par **terme générique fort + GBP solide**, pas par des pages-localité. Ne PAS créer de pages géo pour la boutique.

## 3. Axes d'attributs → FILTRES / facettes

Regroupements Keyword Planner (nombre de variantes recherchées) :

- **Matériaux** : bois (231), pierre (130), **quartz (119)**, granit (69), béton (31), marbre (21), inox (17), acier (12), corian (11), dekton (10)
- **Couleurs** : **blanc/blanche (148)**, **noir (56)**, gris (30), bleu (9), brun (7)
- **Tailles (vanité)** : 24, 30, 36, **48**, **60**, 72 pouces (48 & 60 confirmés 100-1K ; autres à confirmer)
- **Prix / stock** : liquidation, en gros, pas cher, en stock

## 4. Architecture cible

```
/boutique
  /vanites-salle-de-bain          ← tête 10K-100K (PRIORITÉ 1)
    /48-pouces  /60-pouces  /36-pouces ...   (collections taille — volume réel)
    /blanc  /noir  /gris                      (collections couleur — volume réel)
    /liquidation                              (🎯 créneau Low comp)
    /[fiche produit]                          (long-tail : type+taille+couleur)
  /armoires-cuisine                ← tête 1K-10K
    /en-stock  /en-gros                       (🎯 créneau Low comp)
    /[fiche produit]
  /comptoirs                       ← tête 1K-10K
    /quartz  /granit  /marbre                 (collections matériau)
```

**Règle d'indexation des facettes** : une facette (matériau × couleur × taille) devient une page **indexable** SEULEMENT si elle a un volume propre (ex. `vanité 48 pouces` = oui ; `vanité bleu 30po corian` = non → `noindex,follow`). Sinon = *index bloat* qui dilue tout.

## 5. Mapping intention → type de page

| Intention | Exemple requête | Type de page | Cible SEO |
|---|---|---|---|
| Catégorie | vanité salle de bain | Catégorie | tête (volume) |
| Attribut | vanité 48 pouces blanche | Collection | mid-tail |
| Stock/prix | vanité liquidation | Collection dédiée | Low comp |
| Produit précis | vanité 48po blanche 2 portes | Fiche produit | long-tail |
| Info | comment choisir une vanité | Guide/blogue | top-funnel + maillage |

## 6. Priorité d'exécution

1. Catégorie **Vanités** + collections **taille** & **couleur** (le volume est là).
2. Collection **liquidation / en stock / en gros** (arme unique, Low comp).
3. Catégories **Armoires** + **Comptoirs**.
4. Sur mesure = angle service séparé (haut de gamme), hors boutique.

---

## 7. Stratégie « fiche produit = mini-page SEO » SANS duplicate content

### Principe
Chaque fiche doit ranker sur sa **longue traîne d'attributs** (`vanité 48 pouces blanche 2 portes`), PAS sur la tête (c'est le rôle de la collection). L'unicité vient de la **combinaison d'attributs réels**, pas de paragraphes réécrits à la main.

### Le contenu unique par fiche (généré depuis les données produit)
- **H1 unique** : `{type} {taille} {couleur} {détail}` → « Vanité 48 pouces blanche 2 portes ».
- **Intro 2-3 phrases composées des specs** (dimensions, matériau, fini, rangement, nb de portes/tiroirs, type de robinetterie). La variabilité des specs rend chaque intro distincte.
- **Tableau de specs** (structuré, unique par produit) + **Product schema** JSON-LD (nom, image, prix, dispo, sku, marque).
- **Alt text d'images unique** (pas « image1.jpg » partout).
- **1 phrase « cas d'usage »** variée par attribut (petite SDB / grande SDB / sous-sol…).

### Anti-duplicate : les règles
1. **Jamais le même bloc de texte sur 2 fiches.** Templates = *structure* commune, *contenu* piloté par les attributs uniques.
2. **Bannir les descriptions fabricant copiées** (déjà dupliquées chez 50 revendeurs).
3. **Facettes minces → `noindex,follow`** + canonical auto-référent sur les vraies pages.
4. **Variantes d'un même produit** (même vanité, 2 couleurs) → soit 1 page avec sélecteur, soit canonical vers la principale.
5. Seuil : viser un ratio **contenu unique > contenu templaté** suffisant (specs + FAQ attribut + cas d'usage).

### Stratégie FAQ (répondre aux vraies questions client SANS dupliquer)
Le piège classique : coller les **mêmes 5 FAQ sur tous les produits** = duplicate + thin content. À éviter. À la place :

**a) FAQ par NIVEAU (chaque question vit à UN seul endroit) :**
- **Questions générales** → sur la **page catégorie**, une seule fois (« comment installer une vanité ? », « quelle hauteur standard ? »).
- **Questions par attribut** → sur la **collection** correspondante (taille → page taille, matériau → page matériau). Ex. « quelle taille de vanité pour une salle de bain de 5×8 ? » sur `/vanites/48-pouces`.
- **Questions spécifiques au produit** → sur la **fiche**, **composées depuis ses attributs** (donc différentes d'une fiche à l'autre) : « la vanité 48 po offre-t-elle 2 ou 3 tiroirs ? », « le comptoir est-il en quartz ou en stratifié ? ».

**b) Sourcing des vraies questions client :**
- **GSC** : filtrer les requêtes contenant qui/que/quelle/comment/pourquoi/combien/est-ce.
- **« People Also Ask » / autocomplete Google** sur les têtes (vanité, armoire, comptoir).
- **Questions réelles du service client / ventes** (la mine d'or).
→ Mapper chaque question au **bon niveau** (catégorie / collection / fiche).

**c) Réalité 2024+ sur le schema FAQPage :** Google a réservé les *rich results* FAQ aux sites gouvernementaux/santé. Donc le balisage FAQPage n'affiche **plus d'étoiles** pour un site commercial. La VRAIE valeur des FAQ aujourd'hui = **profondeur de contenu, People Also Ask, et citation dans les AI Overviews / ChatGPT**, pas le rich snippet. On les met pour répondre + capter la longue traîne, pas pour les étoiles.

### Qui rank quoi (à retenir)
- **Collections** = têtes & mid-tail (vanité, vanité 48 pouces, vanité blanche).
- **Fiches produit** = longue traîne précise (vanité 48 po blanche 2 portes).
- Sur un domaine jeune, n'attends pas qu'une fiche ranke sur « vanité salle de bain » — c'est le travail de la collection.
