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
| cuisine sur mesure | 320 | 14 | **absent top 30** (2026-06-29) | /espaces/cuisine | Porte élargie 2026-06-29 | top 10 |
| armoire(s) de cuisine sur mesure | 420 | 5 | ~p.2 (pos ~20) | /espaces/cuisine | Élargissement + profondeur 2026-06-29 | p.1 |
| renovation cuisine pierrefonds-roxboro | 78 imp | — | pos 21 / 0 clic | /services/renovation/apres-sinistre | Page créée 2026-06-29 | indexation + top 10 |
| rénovation de cuisine | 210 | 1 | à mesurer | /services/renovation/cuisine | (backlog) | top 5 |
| armoires de cuisine laval | 140 | 15 | à mesurer | (pas de page) | (backlog) | créer page géo |

## ✅ Actions réalisées

### 2026-06-29
- **Page rénovation après sinistre (FR + EN)** créée — `data/page-builder/renovation-pages/apres-sinistre.ts` + `.en.ts`. URLs `/services/renovation/apres-sinistre` (FR) et `/en/services/renovation/water-damage` (EN). Slug ajouté à `RENOVATION_EN` (i18n-path.ts + next-sitemap.config.js). Maillage : hub renovation + page sous-sol. Angle reconstruction + assurance, local Pierrefonds. Build vert, au sitemap + hreflang.
- **Porte « cuisine sur mesure »** — `/espaces/cuisine` élargie (title/H1/schema), nouveau bloc profondeur (îlot KD 12, garde-manger, armoires hautes, fabricant), FAQ îlot, ancre home renforcée. Build vert.
- **Analyse KW ROI** vérifiée DataForSEO → `docs/seo/keyword-opportunities-2026-06-29.md` + mémoire `keyword-opportunities-cuisine-2026-06-29`.
- **Skill `seo-daily`** + ce registre créés. Routine doc : `docs/seo/routine-quotidienne-seo.md`.

## 📋 Backlog priorisé (ROI)
1. Quick win **`rénovation de cuisine`** (KD 1, page existe) — optimiser title/H1.
2. **Page géo Laval** « armoires de cuisine laval » (140, KD 15).
3. **Espaces haut de gamme** restants : walk-in pantry, cellier, bibliothèque (mémoire `seo-espaces-haut-de-gamme`).
4. **Boutique (long terme)** : enrichir `/boutique/armoires-cuisine` + `/boutique/vanites` pour les gros volumes produit (8 100 / 12 100).
5. **Link building local** (mémoire `backlinks-link-gap-cibles-2026-06-28`) — nécessaire pour passer p.1 sur « cuisine sur mesure ».

## 🙋 Actions HORS-CODE en attente (Gabriel)
- [ ] **GA4** : marquer `generate_lead` comme événement clé (sinon 0 conversion mesurée). — *critique*
- [ ] **GBP** : avis + photos + posts pour gagner le Local Pack (Pierrefonds). Levier des « 0 clic en pos #1 ».
- [ ] **Après déploiement** : demander l'indexation des nouvelles URLs dans GSC (Inspection d'URL) — pages sinistre surtout (fenêtre post-inondation).
