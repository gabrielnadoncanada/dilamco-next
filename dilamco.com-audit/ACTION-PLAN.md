# Plan d'action SEO priorisé — dilamco.com

Score actuel : **54/100**. Le levier n°1 n'est pas d'obtenir plus de classements, mais de **convertir les classements existants en clics et en leads** (gagner le Map Pack + mesurer les conversions).

Chaque recommandation porte : **observation** (1er principe), **dépendance**, **comment savoir si ça a échoué**, **indicateur avancé à surveiller**.

---

## Phase 1 — Mesure & Critiques (Semaine 1)

### 1.1 — Promouvoir `generate_lead` en événement clé GA4 `[Critical]`
- **Observation :** 0 événement clé sur 28 jours, tous canaux. Le lead_submit → generate_lead existe (GTM) mais n'est pas marqué Key Event.
- **Action :** GA4 → Admin → Événements → activer « Marquer comme événement clé » sur `generate_lead`.
- **Échec si :** après 7 j, GA4 affiche toujours 0 conversion alors que des leads arrivent par courriel.
- **Indicateur :** conversions/semaine par canal.
- **Effort :** 15 min.

### 1.2 — `geo` + `openingHours` + `sameAs` sur le schema LocalBusiness `[Critical]`
- **Observation :** `HomeAndConstructionBusiness` n'a ni coordonnées géo, ni horaires ; `sameAs` seulement sur Organization.
- **Action :** `seo/schema/site.ts` (geo lat/lng à 5 décimales, openingHours) + `builders.ts` (injecter dans le nœud LocalBusiness). 1 commit site-wide.
- **Dépendance :** débloque le Local Pack / Knowledge Panel (cf. 2.3).
- **Échec si :** Rich Results Test ne montre toujours pas geo/hours.
- **Effort :** 1-2 h.

### 1.3 — Corriger le double nom de marque `og:title` `[High]`
- **Observation :** `og:title` = « … | Dilamco | Dilamco » (template + title déjà suffixé).
- **Action :** une seule source de vérité pour le suffixe de marque (layout metadata).
- **Effort :** 30 min.

### 1.4 — `priority` sur l'image hero (LCP) `[Critical]`
- **Observation :** hero en `loading="lazy"`, c'est le logo SVG qui est préchargé. LCP lab ~2,8-3,5 s.
- **Action :** prop `priority` sur le `<Image>` hero (active fetchpriority=high + eager + preload) ; retirer le preload du logo.
- **Échec si :** PageSpeed (mobile) maintient LCP > 2,5 s après déploiement.
- **Indicateur :** LCP lab PageSpeed.
- **Effort :** 30 min.

### 1.5 — Lancer un programme d'avis Google `[Critical]`
- **Observation :** 0 avis → Map Pack non gagné → rankings locaux (pos 1-5) à 0 clic.
- **Action :** demande systématique d'avis post-installation (lien direct GBP), objectif **5+ avis sous 30 j**.
- **Dépendance :** prérequis de 2.6 (AggregateRating).
- **Échec si :** après 30 j, < 3 avis collectés.
- **Indicateur :** nombre d'avis Google / mois ; apparition au Local Pack.
- **Effort :** process à mettre en place (continu).

---

## Phase 2 — Canonicalisation & Local (Semaines 2-3)

### 2.1 — Uniformiser le trailing-slash et forcer une canonique unique `[High]`
- **Observation :** GSC indexe `/page` et `/page/`, plus des variantes www./http:// ; Google outrepasse les canoniques. `/materiaux/mdf` non indexée (« page avec redirection »).
- **Action :** fixer `trailingSlash` (next.config) + middleware → 308 vers **une seule** forme sur toutes les routes. Vérifier que `/espaces/salle-de-bain/` redirige bien (actuellement sert un 200).
- **Échec si :** GSC continue d'afficher des paires avec/sans slash après recrawl.
- **Indicateur :** nombre d'URLs « dupliquées » dans GSC > Indexation.
- **Effort :** 2-4 h.

### 2.2 — Téléphone cliquable global + Maps `[High]`
- **Action :** `<a href="tel:+15148200773">` dans header/footer de toutes les pages ; iframe Google Maps + lien itinéraire sur /contact ; `hasMap` au schema.
- **Effort :** 1-2 h.

### 2.3 — Aligner le nom GBP avec le schema `[High]`
- **Observation :** `sameAs` → `/place/Dilamco+Construction/` alors que le schema dit « Dilamco ».
- **Action :** vérifier le tableau de bord GBP, aligner le nom ; vérifier la catégorie primaire (« Cabinet maker » / « Kitchen remodeler »).
- **Effort :** 1 h (hors propagation Google).

### 2.4 — hreflang `fr-CA`/`en-CA` cohérent + dans le HTML `[High]`
- **Action :** aligner header HTTP et sitemap sur `fr-CA`/`en-CA` ; ajouter `<link rel="alternate" hreflang>` dans le `<head>` via next-intl.
- **Effort :** 1-2 h.

### 2.5 — 5 headers de sécurité + HSTS complet `[High]`
- **Action :** `next.config.ts` → `headers()` : X-Content-Type-Options, X-Frame-Options, CSP, Permissions-Policy, Referrer-Policy ; HSTS `includeSubDomains; preload`.
- **Effort :** 1-2 h.

### 2.6 — `AggregateRating` (dès les premiers avis) `[High]`
- **Dépendance :** 1.5. Ne **pas** hardcoder — alimenter avec les vraies données GBP.
- **Indicateur :** apparition d'étoiles au SERP (Rich Results Test).
- **Effort :** 2-3 h.

---

## Phase 3 — Contenu & Autorité (Mois 2)

### 3.1 — Enrichir les pages piliers `[Critical]`
- `/espaces/*` et `/materiaux/*` : +400-600 mots éditoriaux (données techniques, cas d'usage, FAQ chiffrée). Cible /espaces/cuisine : 2000+ mots, section styles, tableau matériaux, prix indicatifs.
- **Échec si :** les pages restent sous le seuil de leur type / toujours « non indexées » dans GSC.
- **Indicateur :** impressions GSC des pages piliers ; passage des URLs « non indexées » → « indexées ».

### 3.2 — Réécrire les FAQ avec prix et délais réels `[High]`
- Réponses 100-150 mots, fourchettes (ex. 25 000-80 000 $), délais (ex. 8-14 semaines). Bénéfice double : SERP + citation IA.

### 3.3 — Enrichir /a-propos (E-E-A-T) `[High]`
- Fondateur nommé, année de fondation, nb de projets, 2-3 témoignages nominatifs (prénom + ville + projet).

### 3.4 — Page B2B / designers + pages de zones `[High/Medium]`
- `/designers` (ou `/b2b`) : portfolio commercial + brief pro. `/zones/montreal`, `/zones/laval`, `/zones/rive-sud` avec contenu unique (corrige le `/projets/montreal` → 404).

### 3.5 — Révision humaine des pages EN `[Medium]`
- Corriger la traduction machine (articles manquants, syntaxe).

### 3.6 — Photographier de vrais projets `[High]`
- bathroom (vanité Laval), commercial, sous-sol, walk-in → ajouter au `sitemap-images.xml`.

---

## Phase 4 — Surveillance & Itération (Continu)

- **IndexNow** + `lastmod` réels dans les sitemaps ; ajouter `sitemap-images.xml` au sitemap index.
- **`llms.txt`** + présence **YouTube** (3-5 vidéos, `sameAs` + `VideoObject`).
- **Noindex/améliorer** les coquilles projet non indexées (ex. `/projets/salle-de-lavage`).
- **Traduire les slugs EN** des matériaux (+301).
- **Surveiller dans GSC :** CTR des requêtes locales (`…pierrefonds`, `…plateau-mont-royal`) — l'objectif est de passer de 0 clic à un CTR mesurable une fois le Map Pack gagné et les snippets améliorés.
- **Surveiller dans GA4 :** conversions `generate_lead` par canal une fois l'événement clé promu.

---

## Séquencement (dépendances)

```
1.1 (tracking) ─────────────► mesurer l'impact de tout le reste
1.5 (avis) ──► 2.6 (AggregateRating) ──► étoiles SERP / Map Pack
1.2 (geo/hours) ─────────────► Local Pack éligible
2.1 (canonicalisation) ──────► signaux dé-dupliqués ──► 3.1 (contenu indexable)
3.1/3.2 (contenu) ───────────► citabilité IA + conversion + CTR
```

**Hypothèse de résultat :** corriger la mesure (1.1), gagner le Map Pack (1.5 → 2.6) et dé-fragmenter les URLs (2.1) devrait débloquer les clics déjà « à portée » (requêtes en pos 1-5 actuellement à 0 clic) — sans attendre de nouveaux classements.
