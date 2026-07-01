# Registre SEO cumulatif — Dilamco

> **Mémoire incrémentale du projet SEO.** Lu au début de chaque run du skill `seo-daily`, mis à jour à la fin. But : ne rien refaire, mesurer l'effet des actions passées, garder le cap. Journaux détaillés datés dans `docs/seo/live-data-*.md` et `keyword-opportunities-*.md`.

## 🎯 Objectif courant
Augmenter le **trafic ORGANIQUE** (la majorité des visites vient du Direct). Priorité aux requêtes **sur-mesure + géo** (difficulté basse, lead à forte valeur), pas aux gros volumes produit génériques.

## 📈 Référence santé (28 j au 2026-06-28)
- GSC : **43 clics / 1 196 impressions / CTR 3,6 % / pos moy. 19,8** (+330 % clics vs 28 j préc.)
- GA4 : **92 sessions organiques** (+163 %) ; Direct 127. Tendance saine (effets de l'audit du 2026-06-18).

## ⏳ Positions à surveiller (effet des actions — recontrôler chaque semaine)
| Mot-clé | Vol Qc | KD | Pos départ | Page | Action / date | Cible |
|---|---|---|---|---|---|---|
| **cuisiniste** | **14 800** | **17** | absent (pas de page ciblée) | Home | Home optimisée 2026-06-29 (title/H1/desc) + catégorie GBP cuisiniste | top 10 — gros volume transactionnel |
| cuisine sur mesure | 320 | 14 | **absent top 30** (2026-06-29) | /espaces/cuisine | Porte élargie 2026-06-29 | top 10 |
| armoire(s) de cuisine sur mesure | 420 | 5 | ~p.2 (pos ~20) | /espaces/cuisine | Élargissement + profondeur 2026-06-29 | p.1 |
| **garde-robe sur mesure** | 320 | — | **pos 37** (1 imp — page cible « walk-in » pas « garde-robe ») | /espaces/walk-in | Reciblé « garde-robe sur mesure » 2026-07-01 (title/H1/FAQ + ancre home) | p.1 |
| vanité sur mesure | 140 | — | ~pos 20 (p.2) | /espaces/salle-de-bain | Profondeur ajoutée 2026-07-01 (bloc « types de vanités ») ; ciblage/ancre home déjà bons | p.1 |
| renovation cuisine pierrefonds-roxboro | 78 imp | — | pos 21 / 0 clic | /services/renovation/apres-sinistre | Page créée 2026-06-29 | indexation + top 10 |
| rénovation de cuisine | 210 | 1 | **absent top 20** (2026-06-29) | /services/renovation/cuisine | Section prix + FAQ prix/étapes ajoutées 2026-06-29 (intent informationnel) | top 10 |
| armoires de cuisine laval | 140 | 15 | absent top 13 (SERP live 2026-07-01) | **/zones/laval** | Page géo créée 2026-07-01 + lien footer sitewide | top 10 (macucina y arrive avec rank 20 < nous) |
| vanité de salle de bain sur mesure laval | 166 imp GSC | — | pos 20,2 / 0 clic (requête #1 du site en imp.) | /zones/laval (+ /espaces/salle-de-bain) | Page géo Laval 2026-07-01 couvre vanités | top 10 |
| ébéniste laval | 210 | — | à mesurer | /zones/laval | Page géo 2026-07-01 (H1 « ébéniste ») | p.1 |

## ✅ Actions réalisées

### 2026-07-01 (ter) — Page géo Laval + diagnostic reach organique
- **Diagnostic chiffré** (demande Gabriel « on a 1 visite/jour ») : 16/43 clics = marque « dilamco » → **~27 clics non-marque/mois**. Impressions ×14 en un mois (10→140/jour) mais pos 15-35 → pas de clics. 3 goulots : ① Local Pack/avis GBP (11 avis vs 58-103 concurrents), ② autorité (46 RD vs 125-438), ③ pages géo manquantes. Détail + décomposition du profil backlinks de cuisinesaction.com (374 RD dont ~moitié = bruit ; moteur réel = partenariats fournisseurs/métiers) : `live-data-2026-07-01.md`.
- **Page `/zones/laval` créée (FR + EN `/en/areas/laval`)** — NOUVELLE collection `zone-pages` (data/page-builder/zone-pages/) + route `app/[locale]/zones/[zone]` + `ZONE_EN` (i18n-path.ts, routing.ts, next-sitemap.config.js — les DEUX, AppLink). Cible : cluster Laval ~600/mois (ébéniste 210, armoires 140, cuisiniste 90, garde-robe 70, vanité 50) + 166 imp GSC existantes. Justification data : macucina.ca (rank 20 < dilamco 24) prend pos 2 organique avec sa page géo dédiée → réplicable à notre autorité. Maillage : **lien footer sitewide** (FR+EN, section Services) + liens internes vers projet vanité Laval, /espaces/cuisine, /projets. Build vert, sitemap + hreflang OK. Extensible : prochaine zone = ajouter `<slug>.ts` + entrée ZONE_EN (2 fichiers config).
- **« Voir nos espaces » pointait la HOME (`/`)** → corrigé vers `/espaces` (salle-de-lavage FR+EN, walk-in EN).
- **Cartes projet → `/projets` générique** alors qu'une vraie page projet existe → corrigé : carte « Vanité sur mesure » → `/projets/salle-de-bain/vanite-sur-mesure-laval` ; carte « Aménagement commercial » → page projet commerciale.
- **Incohérence cuisine** : CTA final « Voir nos cuisines » pointait `/projets` (les 2 autres pointent `/projets/cuisine`) → harmonisé.
- Reste (fallback acceptable) : cartes projet de walk-in / salle-de-lavage → `/projets` car aucun projet spécifique n'existe encore pour ces espaces.

### 2026-07-01
- **Passe maillage interne** : constaté que home→piliers (ancres OK) et projets→piliers (`requiredLinks.spaceHref`) existent déjà. Ajout des liens **croisés piliers↔piliers** manquants avec ancres à mots-clés : cuisine→salle-de-bain (« vanité de salle de bain sur mesure »), salle-de-bain→cuisine (« cuisine sur mesure »), walk-in→cuisine. NB : blocs `list-actions-image-card` limités à 2 actions (Zod) → liens boutique retirés des piliers (accessibles ailleurs). Maillage croisé complet via bloc dédié `link-cards` = amélioration future.
- **Profondeur** : /espaces/salle-de-bain bloc « types de vanités » ; /espaces/walk-in reciblé « garde-robe sur mesure ».

### 2026-06-29
- **Analyse concurrents (Cuisines Action) + volumes/KD vérifiés** : découverte « cuisiniste » = 14 800/mois Qc, **KD 17**, intent transactionnel — meilleur ROI du marché. Concurrents captent sur termes métier génériques (cuisiniste, cuisine, armoires de cuisine, comptoir), pas sur géo-local. Confirmé : tous les « X pierrefonds/quartier » = ~0 volume (impressions GSC = bruit).
- **`/services/renovation/cuisine` optimisée pour l'intention** : SERP « rénovation de cuisine » = informationnel/prix (PAA tous sur le prix, top = guides/prix). Title déjà bon → vrai blocage = intent mismatch. Ajout section « Combien coûte une rénovation de cuisine au Québec » (fourchettes marché) + 2 FAQ prix/étapes. Build vert. KD 1 → gagnable.
- **Home optimisée pour « cuisiniste »** — `static-pages/home.ts` : title « Cuisiniste à Montréal — cuisines et armoires sur mesure », H1 « Cuisiniste et ébéniste sur mesure à Montréal… », description. Build vert. (EN non touché : terme FR.)
- **Page rénovation après sinistre (FR + EN)** créée — `data/page-builder/renovation-pages/apres-sinistre.ts` + `.en.ts`. URLs `/services/renovation/apres-sinistre` (FR) et `/en/services/renovation/water-damage` (EN). Slug ajouté à `RENOVATION_EN` (i18n-path.ts + next-sitemap.config.js). Maillage : hub renovation + page sous-sol. Angle reconstruction + assurance, local Pierrefonds. Build vert, au sitemap + hreflang.
- **Porte « cuisine sur mesure »** — `/espaces/cuisine` élargie (title/H1/schema), nouveau bloc profondeur (îlot KD 12, garde-manger, armoires hautes, fabricant), FAQ îlot, ancre home renforcée. Build vert.
- **Analyse KW ROI** vérifiée DataForSEO → `docs/seo/keyword-opportunities-2026-06-29.md` + mémoire `keyword-opportunities-cuisine-2026-06-29`.
- **Skill `seo-daily`** + ce registre créés. Routine doc : `docs/seo/routine-quotidienne-seo.md`.

## 📋 Backlog priorisé (ROI)
1. ~~Page géo Laval~~ ✅ 2026-07-01. **Prochaines zones** (même infra, ~1 h chacune) : Ouest-de-l'Île/Pierrefonds (impressions GSC déjà là), Rive-Sud/Brossard (projet existe). Vérifier volumes d'abord.
1 bis. **Kit citations copier-coller pour Gabriel** (NAP + descriptions FR/EN + liste ordonnée threebestrated/opendi/ameublements/PagesJaunes/Houzz/Yelp) — débloquer le goulot autorité.
2 bis. **Pousser `/espaces/walk-in`** : « garde-robe sur mesure » = 320/mois (autant que cuisine sur mesure), page existe.
2 ter. **Créer page « meuble de chambre sur mesure »** (aucune page ; Dilamco fait meubles de chambre + cellier). Vérifier volumes/KD d'abord.
3. **Espaces haut de gamme** restants : walk-in pantry, cellier, bibliothèque (mémoire `seo-espaces-haut-de-gamme`).
4. **Boutique (long terme)** : enrichir `/boutique/armoires-cuisine` + `/boutique/vanites` pour les gros volumes produit (8 100 / 12 100).
5. **Link building local** — plan prêt dans `docs/seo/link-building-plan-2026-06-29.md` (cibles réelles de Cuisines Action, priorisées). HORS-CODE (Gabriel). Ordre : citations Tier 1 (gratuit, +Local Pack) → partenaires → médias déco. Cible 15-20 RD thématiques en 2-3 mois. Nécessaire pour consolider « cuisiniste » / « cuisine sur mesure ».

## 🙋 Actions HORS-CODE en attente (Gabriel)
- [ ] **GA4** : marquer `generate_lead` comme événement clé (sinon 0 conversion mesurée). — *critique*
- [x] **GBP catégorie principale changée (2026-06-29)** : « Entreprise de construction » → **« Entreprise de réaménagement de cuisine »** (Kitchen remodeler, = #1 Local Pack Tendances Concept). Fait via Chrome, soumis, **en attente d'examen Google (~10 min à qq jours)**. → Vérifier que c'est appliqué + que le Local Pack bouge sur « cuisine/armoires sur mesure ».
- [x] **GBP services (2026-06-29)** : ajoutés via Chrome — Fabrication de placards de cuisine personnalisés, Conception de cuisines, Conception de placards, Pose de placards, Montage de meubles.
- [x] **GBP post (2026-06-29)** : 1er post publié « cuisine sur mesure » + bouton En savoir plus → /espaces/cuisine.
- [ ] **GBP photos** : PAS fait — besoin de savoir quelles photos uploader (docs/media a des fichiers à noms ambigus ; ne pas uploader au hasard sur fiche publique). Gabriel choisit / uploade.
- [ ] **GBP Q&R** : NON faisable en desktop (section absente de la recherche Google ET de Maps pour cette catégorie). → à faire via **app mobile Google Maps** (fiche → Questions et réponses → Poser une question, puis y répondre en tant que propriétaire). Liste de 5 Q/R prête dans `gbp-plan-2026-06-29.md`.
- [ ] **GBP secondaires** : « Entreprise de réaménagement de salle de bain » (vanités) + « Ébéniste » (meubles/garde-robes). Dropdown autocomplete sort de l'écran en automation → manuel (30 s).
- [ ] **GBP description** : laissée telle quelle (refus utilisateur). Nouvelle version dispo dans le plan si besoin.
- Fiche : 5,0/11 avis, place_id `ChIJkS849KM7yUwRI2hE7w3ERRA`. Système d'avis = lien direct + templates dans le plan.
- [x] **Indexation soumise (2026-06-29)** via Indexing API pour apres-sinistre, water-damage, /espaces/cuisine.
- [ ] **Contrôle 2026-07-01 (GSC MCP)** : pages sinistre TOUJOURS « URL is unknown to Google », jamais crawlées → l'Indexing API n'a PAS suffi (normal hors JobPosting) + crawl lent (faible autorité). Sitemap.xml **resoumis** le 2026-07-01. → **Gabriel : GSC UI → Inspection d'URL → coller les 2 URLs sinistre → « Demander l'indexation »** (seul moyen fiable, l'API inspect est lecture seule).
