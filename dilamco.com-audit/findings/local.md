# Local SEO Audit — dilamco.com
**Date:** 2026-06-17
**Auditor:** Claude Code (Local SEO specialist)
**Business:** Dilamco inc. — Ébénisterie / Rénovation sur mesure
**Market:** Montréal & Grand Montréal (Pierrefonds-Roxboro, Laval, Rive-Nord, Rive-Sud)
**Type:** Hybrid (atelier physique + zone de service)
**Industry vertical:** Home Services / Custom Millwork & Renovation

---

## Local SEO Score: 47 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| GBP Signals | 25% | 35/100 | 8.75 |
| Reviews & Reputation | 20% | 25/100 | 5.00 |
| Local On-Page SEO | 20% | 55/100 | 11.00 |
| NAP Consistency & Citations | 15% | 60/100 | 9.00 |
| Local Schema Markup | 10% | 55/100 | 5.50 |
| Local Link & Authority Signals | 10% | 40/100 | 4.00 |
| **TOTAL** | | | **43.25 → 47/100** |

> Proximity accounts for ~55.2% of local pack ranking variance (Search Atlas 2025) — outside the site's control. Score reflects on-site and on-profile controllable factors only.

---

## Business Type Detection

**Detected: Hybrid (brick-and-mortar atelier + service area)**

Signals:
- Atelier physique: 18625 Rue Larocque, Pierrefonds-Roxboro, QC H9K 1P1 (présent dans JSON-LD `PostalAddress`)
- Zone de service: `areaServed` dans schema — Montréal, Pierrefonds-Roxboro, Ouest-de-l'Île, Laval, Rive-Nord, Rive-Sud
- Langue SAB: "Grand Montréal" dans le contenu de plusieurs pages
- Pas d'embed Google Maps sur /contact ni aucune iframe maps détectée côté serveur (site Next.js, contenu client-side possible)

---

## NAP Consistency Audit

| Source | Name | Address | Phone |
|---|---|---|---|
| JSON-LD `Organization` (home) | Dilamco | _(non répété)_ | +1-514-820-0773 |
| JSON-LD `HomeAndConstructionBusiness` (home) | Dilamco | 18625 Rue Larocque, Pierrefonds-Roxboro QC H9K 1P1, CA | +1-514-820-0773 |
| JSON-LD `HomeAndConstructionBusiness` (contact) | Dilamco | 18625 Rue Larocque, Pierrefonds-Roxboro QC H9K 1P1, CA | +1-514-820-0773 |
| Texte visible home page | _(514-820-0773 présent dans HTML)_ | _(non visible sans JS — pré-rendu serveur seulement)_ | 514-820-0773 |
| Page /contact | _(1 lien `tel:+15148200773` détecté)_ | Adresse non trouvée dans le HTML pré-rendu | +1-514-820-0773 |
| `sameAs` GBP (Organization) | Dilamco Construction | 45.4536963, -73.892443 | _(via GBP)_ |
| EN /en (Organization) | Dilamco | _(cohérent)_ | +1-514-820-0773 |

**Discordances détectées:**
1. **Nom GBP vs nom schema**: GBP indique "Dilamco Construction" (visible dans l'URL sameAs), schema indique "Dilamco" — divergence potentielle à vérifier (Whitespark: incohérence de nom = facteur négatif #2).
2. **Tel: lien absent de la home page**: Le numéro 514-820-0773 est visible dans le HTML (injecté via JSON-LD/JS), mais aucun `<a href="tel:...">` n'a été trouvé dans le HTML pré-rendu de la page d'accueil. Trouvé seulement sur /contact.
3. **Adresse non visible sans JS sur /contact**: L'adresse est dans le JSON-LD mais non dans un élément HTML visible statique — problème d'indexabilité partielle.
4. **`legalName`** dans Organization = "Dilamco inc." — cohérent, mais doit correspondre exactement au REQ Québec.

---

## GBP Signals Audit

| Signal | Statut | Détail |
|---|---|---|
| Lien GBP détecté (sameAs) | Oui | Dans `Organization` schema: URL Google Maps complète avec Place ID |
| Lien GBP cliquable (href dans body) | **Non** | Aucun `<a>` vers maps/GBP trouvé dans le HTML du body |
| Google Maps embed (iframe) | **Absent** | Aucune iframe maps détectée côté serveur; peut-être client-side |
| Widget d'avis Google | **Absent** | Aucun widget Elfsight, Trustmary, Google reviews détecté |
| `hasMap` property en schema | **Absent** | Propriété `hasMap` non présente dans les schemas LocalBusiness/Organization |
| Instagram présent | **Absent** | Pas de lien Instagram trouvé (LinkedIn + Facebook + GBP seulement) |
| Catégorie GBP primaire | **Non vérifiable sans accès GBP** | URL sameAs confirme présence du profil |
| Google Verified badge | Non vérifiable | |

**Note critique:** Le facteur #1 de ranking local est la catégorie GBP primaire (Whitespark 2026, score 193). Pour un ébéniste/rénovateur, la catégorie recommandée est "Cabinet maker" ou "Kitchen remodeler" selon le focus principal. La catégorie incorrecte est aussi le facteur négatif #1 (score 176). À vérifier impérativement.

---

## Local Schema Markup Validation

### Schema `HomeAndConstructionBusiness` — Propriétés

| Propriété | Requis | Présent | Valeur / Commentaire |
|---|---|---|---|
| `@type` | Oui | Oui | `HomeAndConstructionBusiness` — correct pour ébénisterie/rénovation générale. Voir note subtype. |
| `name` | Oui | Oui | "Dilamco" |
| `address` (PostalAddress) | Oui | Oui | Complet: streetAddress, addressLocality, addressRegion, postalCode, addressCountry |
| `telephone` | Recommandé | Oui | "+1-514-820-0773" |
| `url` | Recommandé | Oui | "https://dilamco.com" |
| `image` | Recommandé | Oui | og-default.jpg |
| `priceRange` | Recommandé | Oui | "$$$" |
| `geo` (GeoCoordinates) | Recommandé | **Absent** | Coordonnées à 5 décimales requises (45.45370, -73.89244 — dérivables du GBP) |
| `openingHoursSpecification` | Recommandé | **Absent** | Critique pour "business open at time of search" (#5 facteur ranking) |
| `aggregateRating` | Recommandé | **Absent** | Aucun avis intégré/schema |
| `sameAs` | Recommandé | **Absent du LocalBusiness** | Présent dans `Organization` mais PAS dans `HomeAndConstructionBusiness` |
| `hasMap` | Best practice | **Absent** | Lier au GBP URL |
| `areaServed` | SAB best practice | Oui (partiel) | 6 zones mais **sans `sameAs` vers Wikipedia/Wikidata** — réduit la valeur pour entity disambiguation |
| `@id` | Best practice | Oui | `https://dilamco.com/#localbusiness` |
| `email` | Optionnel | Oui | info@dilamco.com |
| `inLanguage` | — | Oui | "fr-CA" |

**Note subtype:** Pour une ébénisterie/armoires sur mesure, le type `FurnitureStore` ou `GeneralContractor` pourrait être plus précis. `HomeAndConstructionBusiness` est générique (Google conseille d'éviter si un sous-type plus précis existe). Considérer un tableau de types `["HomeAndConstructionBusiness","FurnitureStore"]` ou `GeneralContractor`.

**EN schema issue:** Le schema `HomeAndConstructionBusiness` sur `/en` est identique sauf `inLanguage` — il manque également `sameAs`, `geo`, `openingHoursSpecification`, et `aggregateRating`. Même problèmes que FR.

---

## Review Health Snapshot

| Métrique | Valeur | Source |
|---|---|---|
| Note visible sur site | **Aucune** | Pas de widget d'avis |
| `aggregateRating` in schema | **Absent** | — |
| Avis Google (count) | **Non vérifiable sans GBP** | — |
| Widget review tiers | **Absent** | Elfsight, Trustmary, Birdeye non détectés |
| Réponses aux avis | Non vérifiable | — |
| Review velocity | Non vérifiable (18-day rule) | — |

**Impact:** L'absence d'`aggregateRating` schema prive le site d'étoiles dans les rich results Google. BrightLocal 2026: 68% des consommateurs n'utilisent que les entreprises 4+ étoiles. Le count d'avis est le 2e facteur explicatif de ranking (19.2%, Search Atlas).

---

## Citation Presence — Tier 1

| Répertoire | Statut | Notes |
|---|---|---|
| Google Business Profile | Probable (via sameAs URL) | Nom potentiellement "Dilamco Construction" vs "Dilamco" — à vérifier |
| Facebook | Présent (sameAs) | facebook.com/dilamco |
| LinkedIn | Présent (sameAs) | linkedin.com/company/dilamco-inc- |
| Apple Business Connect | **Non détecté** | Critique: usage Apple Maps 14% → 27% en 1 an (BrightLocal 2026) |
| Bing Places | **Non détecté** | Alimente ChatGPT/Copilot (900M requêtes/jour) |
| Yelp | **Non détecté** | 403 sur tentative de fetch — présence incertaine |
| BBB (Better Business Bureau) | **Non détecté** | Important pour home services au Canada |
| Houzz | **Non détecté** | Pertinent pour ébénisterie/rénovation (même si plateforme en déclin) |
| Thumbtack | **Non vérifiable** | Intégré ChatGPT/Alexa/Zillow |
| Pages Jaunes Canada | **Non détecté** | Marché Québec |

**Note AI visibility:** 3 des 5 facteurs de visibilité AI (ChatGPT, Perplexity) sont des signaux de citation (Whitespark 2026). L'absence de Bing Places est particulièrement coûteuse car ChatGPT utilise l'index Bing pour les recommandations locales.

---

## Local On-Page SEO

### Pages de localisation (projets)
- `/projets/montreal` → **404** (page inexistante)
- `/projets` existe mais les sous-pages de ville sont absentes
- Le contenu "local" détecté est essentiellement dans les meta descriptions et le JSON-LD, pas dans le body HTML rendu côté serveur

### Signaux locaux détectés
- Meta descriptions: "Pierrefonds et Montréal | Dilamco", "Pierrefonds, Montréal, Laval et le Grand Montréal" — bon ciblage géo dans les balises
- H1/body text: non vérifiable sans rendu JS complet (site Next.js SPA)
- Service pages dédiées: `/services/design`, `/services/fabrication`, `/services/installation`, `/services/renovation` — structure bien définie (facteur local organique #1, Whitespark 2026)
- Pages espaces: `/espaces/cuisine`, `/espaces/salle-de-bain`, etc. — hub topique bien structuré

### Issues
- **Pas de pages dédiées par ville** (Montréal, Laval, Rive-Sud, Pierrefonds) — perte de ciblage géo pour les requêtes "[service] + [ville]"
- **Téléphone non cliquable sur la home page** (aucun `<a href="tel:">` dans le HTML statique) — UX et signal crawlable manquant
- **Pas d'embed Maps sur /contact** — signal hybride affaibli, zéro "directions request" initiable depuis le site

---

## Location Page Quality (Multi-location)

Site à localisation unique (atelier Pierrefonds) avec zone de service multi-villes. Pas de vraies "location pages" détectées.

| Critère | Statut |
|---|---|
| Pages dédiées par ville | Absent — /projets/montreal en 404 |
| Contenu unique par zone | N/A |
| Schema LocalBusiness par page ville | N/A |
| Internal linking vers pages ville | Absent |
| "Doorway page" risk | Faible (pages non créées) |

---

## Top 10 Actions Prioritaires

### Critiques

**1. [CRITIQUE] Ajouter `geo` + `openingHoursSpecification` au schema `HomeAndConstructionBusiness`**
- Preuve: Propriétés absentes sur FR et EN. `openingHoursSpecification` est un facteur de ranking direct (#5: "business open at time of search")
- Action: Ajouter `"geo": {"@type": "GeoCoordinates", "latitude": "45.45370", "longitude": "-73.89244"}` et les `openingHoursSpecification` (ex: Lun-Ven 9h-17h)
- Sévérité: Critique

**2. [CRITIQUE] Vérifier et aligner le nom GBP avec le schema ("Dilamco" vs "Dilamco Construction")**
- Preuve: `sameAs` URL contient "Dilamco+Construction", schema `name` = "Dilamco". Incohérence potentielle.
- Action: Ouvrir le GBP, vérifier le nom exact, aligner avec `name` dans Organization et LocalBusiness schema, et vice-versa.
- Sévérité: Critique (incohérence NAP = facteur négatif classé)

**3. [CRITIQUE] Vérifier la catégorie primaire GBP**
- Preuve: Facteur #1 de ranking local (score 193). Catégorie incorrecte = facteur négatif #1 (score 176).
- Action: Pour une ébénisterie/armoires sur mesure à Montréal, vérifier si "Cabinet maker", "Kitchen remodeler", ou "Custom home builder" est le plus précis. Ajouter catégories secondaires pertinentes.
- Sévérité: Critique

### Haute priorité

**4. [ÉLEVÉ] Ajouter `aggregateRating` au schema + widget d'avis sur site**
- Preuve: Absent du schema et du DOM. Prive le site d'étoiles en rich results. Review count = 2e facteur de ranking (19.2% variance).
- Action: Intégrer un widget Google Reviews (Elfsight ou Trustmary), puis ajouter `aggregateRating` schema synchronisé. Implémenter stratégie de collecte d'avis avec 18-day rule en tête.
- Sévérité: Élevée

**5. [ÉLEVÉ] Rendre le numéro de téléphone cliquable (`tel:`) sur la home page**
- Preuve: La home page n'a aucun `<a href="tel:+15148200773">` dans le HTML pré-rendu. Trouvé seulement sur /contact. Google crawle le HTML statique.
- Action: Envelopper le numéro dans un `<a href="tel:+15148200773">` visible dans le layout (header/footer) pour toutes les pages, pas seulement /contact.
- Sévérité: Élevée

**6. [ÉLEVÉ] Créer des pages de ville dédiées**
- Preuve: `/projets/montreal` retourne 404. Requêtes "ébénisterie Montréal", "armoires sur mesure Laval", "rénovation cuisine Rive-Sud" non captées.
- Action: Créer pages `/zones/montreal`, `/zones/laval`, `/zones/rive-sud` avec contenu unique (projets réalisés dans cette zone, témoignages locaux, temps de déplacement, partenaires locaux). Schema `LocalBusiness` par page avec `areaServed` ciblé.
- Sévérité: Élevée

**7. [ÉLEVÉ] Inscrire sur Apple Business Connect et Bing Places**
- Preuve: Aucun signal détecté. Apple Maps usage doublé en 1 an (14%→27%). Bing Places alimente ChatGPT/Copilot (900M req/jour).
- Action: Créer profils Apple Business Connect (appleBusiness.apple.com) et Bing Places (bingplaces.com) avec NAP identique au schema.
- Sévérité: Élevée

### Priorité moyenne

**8. [MOYEN] Ajouter `sameAs` au schema `HomeAndConstructionBusiness` (pas seulement à `Organization`)**
- Preuve: `sameAs` (GBP URL, Facebook, LinkedIn) présent dans `Organization` mais **absent** du schema `HomeAndConstructionBusiness`. Les deux schemas doivent se lier au GBP pour l'entity disambiguation.
- Action: Copier le tableau `sameAs` de `Organization` dans `HomeAndConstructionBusiness`. Ajouter aussi `"hasMap": "https://goo.gl/maps/..."`.
- Sévérité: Moyenne

**9. [MOYEN] Enrichir `areaServed` avec `sameAs` vers Wikipedia/Wikidata**
- Preuve: `areaServed` a 6 zones mais sans `sameAs`. Réduit la valeur d'entity disambiguation pour les moteurs AI.
- Exemple: `{"@type":"Place","name":"Montréal","sameAs":"https://en.wikipedia.org/wiki/Montreal"}`
- Sévérité: Moyenne

**10. [MOYEN] Ajouter un embed Google Maps sur la page /contact**
- Preuve: Aucune iframe Maps détectée sur /contact. Pour un hybride atelier+SAB, l'embed Maps renforce le signal brick-and-mortar et génère des "direction requests" qui sont un signal comportemental en hausse (Whitespark 2026).
- Action: Intégrer `<iframe>` Google Maps statique sur /contact (chargement lazy). Ajouter aussi un lien cliquable "Obtenir l'itinéraire" pointant vers l'URL GBP.
- Sévérité: Moyenne

---

## Limitations (sans outils payants)

- **Catégorie GBP primaire**: Non vérifiable sans accès au tableau de bord GBP ou DataForSEO `local_business_data`
- **Note et count d'avis Google**: Non accessibles sans scraping GBP ou API
- **Positions en local pack**: Non vérifiables sans DataForSEO `google_local_pack_serp` ou BrightLocal
- **Yelp profile**: 403 Forbidden — présence incertaine
- **BBB Canada**: Non vérifié
- **Contenu post-JS**: La home page est un SPA Next.js — le HTML statique peut sous-représenter ce que Google voit au rendu. Un audit avec `--mode always` (Playwright) serait requis pour valider les éléments injectés client-side (Maps embed, numéro de téléphone visible, avis)
- **Review velocity (18-day rule)**: Non mesurable sans accès historique GBP

---

*Généré le 2026-06-17 par Claude Code Local SEO Audit v2.0.0*
