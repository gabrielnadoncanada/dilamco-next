# 08 — Plan d'action priorisé

> Effort : S (≤ ½ j), M (½–2 j), L (> 2 j / récurrent). Impact : estimé sur le potentiel de clics organiques hors marque. Responsable : Dev (technique), SEO/Contenu (rédaction), Marketing/Direction (GBP, avis, backlinks), Ventes/Production (prix, catalogue).

## Constat qui conditionne tout le plan

Le site est **techniquement sain** mais capte ~0 clic organique hors marque. Deux leviers dominent, dans l'ordre :
1. **Hors-page local (Google Business Profile + avis + citations)** — c'est le local pack qui prend le clic sur les requêtes commerciales locales, pas l'organique. **Aucune quantité d'optimisation on-page ne compensera un GBP faible.**
2. **Ré-alignement du ciblage** vers les intentions transactionnelles réelles (vanité, armoires, rénovation) et consolidation des pages minces/cannibalisées.

---

## PRIORITÉ 1 — Bloquant / fort ROI (0–4 semaines)

| # | URL / Zone | Problème | Action | Impact | Effort | Responsable |
|---|---|---|---|:--:|:--:|---|
| P1-1 | **Hors-page** | Local pack capte les clics ; site absent des packs | Activer/optimiser **Google Business Profile** (catégorie, NAP, photos, zones), lancer une **campagne d'avis** (objectif 30-50 avis), citations locales (Pages Jaunes, Bing, Apple Maps) | ★★★★★ | L (récurrent) | Marketing/Direction |
| P1-2 | `/boutique/soumission` | canonical → homepage + H1 absent | `noindex, follow` + corriger le canonical (ne plus pointer vers la home) | ★★★ | S | Dev |
| P1-3 | `/boutique`, `/boutique/finitions`, `/boutique/soumission` | Meta descriptions identiques | 3 metas uniques ; noindex sur finitions/soumission | ★★ | S | SEO/Dev |
| P1-4 | `/projets/walk-in`, `/projets/salle-de-lavage` | Coquilles (0 projet) indexées | `noindex` + retrait sitemap tant que < 3 projets | ★★ | S | Dev |
| P1-5 | `/espaces/salle-de-bain` | Pilier vanité pos 19 / 365 impr ; cannibalisé | Réécrire title/meta/H1 (voir reco) ; **dé-cannibaliser** `/projets/.../vanite-sur-mesure-laval` (le rendre « preuve » → lien vers pilier) ; ajouter section prix | ★★★★ | M | SEO/Contenu |
| P1-6 | `/espaces/cuisine` | Pilier bloqué page 2 ; title 75 car. | Réécrire title ≤ 60 ; ajouter section « îlot sur mesure » ; dé-cannibaliser pages projets | ★★★★ | M | SEO/Contenu |
| P1-7 | `/boutique/vanites` (+24/30 po) | Catalogue 5 produits vs vol 14 800 ; contenu mince | Réécrire ; **ajouter vanité 48 po** (vol 590) ; afficher prix ; enrichir contenu | ★★★★ | M-L | SEO + Ventes/Prod |
| P1-8 | `/zones/laval` | **Double « \| Dilamco »** dans le title | Corriger le template de suffixe marque | ★★ | S | Dev |
| P1-9 | GSC | Index legacy www/http | Demander réindexation URLs canoniques ; surveiller « Duplicate canonical » | ★ | S | SEO |

## PRIORITÉ 2 — Amélioration contenu & maillage (1–3 mois)

| # | URL / Zone | Problème | Action | Impact | Effort | Responsable |
|---|---|---|---|:--:|:--:|---|
| P2-1 | `/espaces/walk-in` | 673 impr / pos 22 ; title vs H1 (géo) | Réécrire title/H1 alignés ; renforcer prix + comparaison modulaire | ★★★ | M | SEO/Contenu |
| P2-2 | `/services/renovation/cuisine` | Pos 5,6 — à pousser top 3 | Signaux locaux + avant/après + prix + FAQ | ★★★ | M | SEO/Contenu |
| P2-3 | `/services/renovation/salle-de-bain` | Pos 40 / vol 2400 | Renforcer contenu local + preuves + backlinks | ★★★ | M | SEO + Marketing |
| P2-4 | `/boutique/armoires-cuisine` | Title « en stock » (vol 10) ; 1 seul H2 | Recentrer title sur « armoires de cuisine » ; ajouter H2 par type/dimension | ★★★ | M | SEO/Contenu |
| P2-5 | `/boutique/liquidation` | Cible « pas cher » (480) sous-exploitée ; title 75 | Recentrer title/contenu sur « armoire de cuisine pas cher / liquidation » | ★★ | S-M | SEO |
| P2-6 | `/espaces/sous-sol` | Quick win (concurrence LOW) non exploité | Optimiser title ≤ 60 ; sections par usage ; lier après-sinistre | ★★★ | M | SEO/Contenu |
| P2-7 | Fiches produits `/boutique/produit/*` | Titles 79-82 + `&quot;` ; pas de FAQ | Template : title ≤ 60 nettoyé + FAQPage + section usage | ★★ (cumul) | M (template) | Dev + SEO |
| P2-8 | Pages projets `/projets/*` | Minces / cannibalisation | Enrichir (contexte, photos, résultat) + lien montant vers pilier | ★★ | M | Contenu |
| P2-9 | Titles > 60 (services, apres-sinistre, etc.) | Troncature SERP | Raccourcir | ★ | S | Dev/SEO |
| P2-10 | `/services/installation` | Manque géo + intention « installateur » | Ajouter ville + angle « pose d'armoires IKEA/importées » | ★★ | S | SEO |
| P2-11 | `/zones/laval` | Page isolée sans liens entrants | Ajouter liens depuis footer + pages /espaces + /contact | ★★ | S | Dev/SEO |

## PRIORITÉ 3 — Nouvelles pages, EN, autorité (2–6 mois)

| # | Action | Détail | Impact | Effort | Responsable |
|---|---|---|:--:|:--:|---|
| P3-1 | Créer `/boutique/vanites/48-pouces` | vol 590 ; ajouter le produit au catalogue | ★★★ | M-L | SEO + Prod |
| P3-2 | Créer `/zones/ouest-de-lile` (Pierrefonds) | Impressions GSC déjà existantes (215+105) | ★★★ | M | SEO/Contenu |
| P3-3 | Créer `/zones/rive-sud` | vol « armoires de cuisine rive-sud » 30 + cluster | ★★ | M | SEO/Contenu |
| P3-4 | Section/page « îlot de cuisine sur mesure » | KD 5 | ★★ | S-M | Contenu |
| P3-5 | Créer `/espaces/bibliotheque` + `/espaces/bureau` | 140 + 90 ; positionnement haut de gamme | ★★ | M | Contenu |
| P3-6 | Optimiser cluster EN (`/en/shop/*`, `/en/services/*`) | cabinet maker (KD6), custom kitchen cabinets, montreal locaux | ★★ | M | SEO/Contenu |
| P3-7 | **Link building local** | Backlinks QC (annuaires métier, presse locale, partenaires designers) | ★★★★ | L (récurrent) | Marketing |
| P3-8 | Configurer le **suivi de conversions GA4** | 0 key event tracké actuellement → impossible de mesurer le ROI | ★★★ | S | Dev/Marketing |
| P3-9 | Vérifier légitimité `AggregateRating`/`Review` schema | Risque rich results | ★★ | S | Dev |
| P3-10 | Corriger slug `/en/projects/kitchen/cuisine-sur-mesure-montreal` | Cohérence URL EN | ★ | S | Dev |

---

## Séquencement recommandé (90 jours)

- **Semaines 1-2** : P1-1 (GBP + avis, démarrage), P1-2/3/4/8/9 (correctifs techniques rapides), P3-8 (tracking GA4).
- **Semaines 3-6** : P1-5/6/7 (piliers vanité + cuisine + boutique vanités), P2-1/2/6.
- **Semaines 7-12** : P2-3/4/5/7/8, P3-1/2/3 (nouvelles pages), P3-7 (link building en continu).
- **En continu** : avis GBP, backlinks, publication de projets réels, suivi GSC/GA4.

## Ce qui aura le plus d'impact (si on ne fait que 5 choses)

1. **Google Business Profile + 30-50 avis** (débloque le local pack — le vrai concurrent).
2. **Pilier vanité + boutique vanités** (cluster à 14 800 + 365 impr déjà là).
3. **Pilier cuisine + boutique armoires** (8 100 + impressions existantes).
4. **Backlinks locaux** (autorité pour sortir de la page 2).
5. **Tracking des conversions** (sans lui, on pilote à l'aveugle).
