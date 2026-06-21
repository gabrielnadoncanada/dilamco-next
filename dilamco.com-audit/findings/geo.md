# GEO Audit — dilamco.com
**Date:** 2026-06-17  
**Sujet:** Ébénisterie / rénovation haut de gamme, Montréal, bilingue FR/EN  
**Moteur d'analyse:** Claude Sonnet 4.6 — GEO v2.0.0

---

## GEO Health Score Global : **47 / 100**

| Dimension | Poids | Score brut | Score pondéré |
|-----------|-------|-----------|---------------|
| Citabilité | 25% | 42/100 | 10.5 |
| Lisibilité structurelle | 20% | 55/100 | 11.0 |
| Contenu multi-modal | 15% | 50/100 | 7.5 |
| Autorité & signaux de marque | 20% | 45/100 | 9.0 |
| Accessibilité technique IA | 20% | 45/100 | 9.0 |
| **TOTAL** | 100% | — | **47 / 100** |

---

## 1. Accès crawlers IA

**Résultat : PASS (tous les bots IA sont autorisés, aucun bloqué)**

```
User-agent: *
Allow: /
```

Le fichier robots.txt utilise une règle universelle `Allow: /` — aucun agent nommé spécifiquement. Aucun des crawlers IA critiques n'est bloqué.

| Crawler | Statut |
|---------|--------|
| GPTBot (OpenAI search) | Autorisé (héritage `*`) |
| OAI-SearchBot | Autorisé |
| ClaudeBot (Anthropic) | Autorisé |
| PerplexityBot | Autorisé |
| Google-Extended (Gemini/AIO) | Autorisé |
| CCBot (Common Crawl / entraînement) | Autorisé — à évaluer si on veut bloquer |
| anthropic-ai (training) | Autorisé — à évaluer |

**Recommandation :** Situation nominale pour la visibilité. Optionnel : ajouter des directives `Disallow` pour CCBot/anthropic-ai si vous souhaitez ne pas alimenter l'entraînement tiers tout en restant visible dans les réponses IA.

---

## 2. llms.txt

**Résultat : ABSENT (HTTP 404)**

`https://dilamco.com/llms.txt` → 404  
`https://dilamco.com/en/llms.txt` → 404

Le fichier `llms.txt` est le standard émergent (analogue de robots.txt pour les LLM) permettant de guider les modèles sur ce que le site autorise et comment il se décrit lui-même. Son absence n'est pas un bloquant aujourd'hui mais sera un signal différenciant croissant en 2026-2027.

**Sévérité : Moyenne**

---

## 3. Citabilité des passages — Score : 42/100

### 3a. FAQPage Schema (présent — 4 Q/R)

Le FAQPage est correctement implémenté en JSON-LD avec 4 questions pertinentes.  
**Rappel :** Google a retiré les rich results FAQ (mai 2026) mais le bénéfice LLM subsiste — les modèles extraient ces Q/R directement depuis le markup structuré.

**Analyse des réponses FAQ :**

| Question | Mots | Chiffres | Verdict |
|----------|------|----------|---------|
| Budget cuisine sur mesure | 38 | Aucun | Trop vague — pas citable |
| Différence IKEA / grande surface | 31 | Aucun | Trop court et vague |
| Délais typiques | 28 | Aucun | Trop vague — pas citable |
| Rénovation complète ? | 28 | Aucun | Acceptable mais sans data |

**Problème critique :** Aucune réponse ne contient de chiffre, de fourchette de prix, de délai précis, ni de statistique. La fourchette optimale de citation IA est 134–167 mots. Les réponses actuelles (28–38 mots) sont 4 à 5x trop courtes et délibérément évasives — ce qui nuit directement à la citabilité.

### 3b. Paragraphes corps de page

- Paragraphes moyens : 12–20 mots (très courts)
- Aucun bloc de 134–167 mots auto-suffisant détecté
- Les textes de section sont des fragments de menu/navigation mélangés au contenu
- Aucune donnée factuelle (année de fondation, nombre de projets, surfaces moyennes, délais concrets)

### 3c. Structure de titres

- H2 : 5 balises — correctement utilisées pour les sections principales
- H3 : 4 balises pour les FAQ (correspondant au schema) + 4 pour la navigation footer
- **Aucun H2/H3 formulé comme question** hors FAQ — opportunité manquée pour les sections de contenu

### 3d. Réponse directe en 40–60 mots

Le H2 d'intro "Des espaces conçus pour durer - pas des modules standard" n'est pas suivi d'un paragraph de 40–60 mots donnant une réponse directe.

---

## 4. Autorité & signaux de marque — Score : 45/100

### 4a. Schema Organization — BIEN

```json
{
  "@type": "Organization",
  "@id": "https://dilamco.com/#organization",
  "name": "Dilamco",
  "legalName": "Dilamco inc.",
  "sameAs": [
    "https://www.google.com/maps/...",
    "https://www.facebook.com/dilamco",
    "https://www.linkedin.com/company/dilamco-inc-/"
  ]
}
```

Cohérence du nom : "Dilamco" / "Dilamco inc." — correct.

### 4b. Schema LocalBusiness — BIEN

`HomeAndConstructionBusiness` avec adresse complète (18625 Rue Larocque, Pierrefonds-Roxboro, QC H9K 1P1), téléphone, zones desservies (Montréal, Laval, Rive-Nord, Rive-Sud, Ouest-de-l'Île).

### 4c. sameAs — LACUNES CRITIQUES

| Plateforme | Présent | Corrélation citation IA |
|------------|---------|------------------------|
| Google Maps | Oui | Positive |
| Facebook | Oui | Faible |
| LinkedIn | Oui | Modérée |
| YouTube | **Non** | **~0.737 (la plus forte)** |
| Wikipedia | **Non** | Haute |
| Reddit | **Non** | Haute |
| Houzz / Yelp | Non | Modérée |

L'absence de YouTube dans le sameAs est particulièrement notable — c'est la plateforme avec la corrélation la plus forte avec les citations IA (~0.737).

### 4d. Authorship

- Aucune balise `datePublished` / `dateModified`
- Aucun auteur nommé ni `Person` schema
- Pas de signaux E-E-A-T visibles (portfolio daté, témoignages avec noms complets, certifications CCQ)

### 4e. Présence Wikipedia

Aucune page Wikipedia pour Dilamco — attendu pour une PME, mais l'absence limite le statut d'entité Knowledge Graph.

---

## 5. Lisibilité structurelle — Score : 55/100

### Points positifs
- Site Server-Side Rendered (Next.js, Vercel) — le HTML brut contient tout le contenu, pas de CSR bloquant
- `lang="fr-CA"` correctement défini
- Canonical `https://dilamco.com` présent
- Schemas multiples (Organization, LocalBusiness, FAQPage, BreadcrumbList, ImageObject)
- OG tags présents

### Points négatifs
- **Hreflang manquant** : aucun tag `<link rel="alternate" hreflang="...">` trouvé dans le HTML de la home — les moteurs IA et Google ne peuvent pas détecter la relation FR↔EN automatiquement
- OG title contient une duplication : "Cuisines, vanités et armoires sur mesure à Montréal | Dilamco | **Dilamco**" (répétition du nom de marque)
- `publication_date` non détecté par htmldate — aucun signal temporel exploitable pour les LLM
- Pas de `dateModified` dans les schemas

---

## 6. Contenu multi-modal — Score : 50/100

### Points positifs
- 7 ImageObject schemas avec captions et descriptions
- `representativeOfPage: true` sur l'image hero
- `creator` linkant au schema Organization

### Points négatifs
- Aucune vidéo / VideoObject — YouTube absent
- Aucun schema Review/AggregateRating — les avis sont un signal fort pour les AI Overviews locaux
- Images générées (répertoire `/images/generated/`) — aucun signal de provenance photographique réelle

---

## 7. Accessibilité technique IA — Score : 45/100

| Signal | Statut |
|--------|--------|
| SSR (pas de CSR) | PASS — HTML complet sans JS |
| HTTPS | PASS |
| Canonical | PASS |
| Sitemap déclaré | PASS (sitemap.xml + sitemap-images.xml) |
| llms.txt | FAIL — absent |
| Hreflang | FAIL — absent |
| datePublished/dateModified | FAIL — absent |
| Structured data validation | Partiel — pas de Person, pas de Review |

---

## 8. Scores par plateforme

| Plateforme | Score estimé | Raison principale |
|------------|-------------|-------------------|
| Google AI Overviews (Gemini) | 38/100 | Bon SSR + LocalBusiness, mais FAQ trop vague, pas de Reviews |
| ChatGPT (via Bing) | 42/100 | SSR lisible, schemas complets, mais contenu trop court/évasif |
| Perplexity | 50/100 | SSR + schemas + zones desservies = indexable, mais peu de data factuelles |
| Bing Copilot | 40/100 | Similaire ChatGPT |

---

## 9. Top 5 recommandations prioritaires

### P1 — Enrichir les réponses FAQ avec données concrètes (Impact : TRÈS ÉLEVÉ | Effort : Faible)

**Problème :** Les 4 réponses FAQ (28–38 mots, 0 chiffre) sont délibérément vagues. Les LLM ne citent pas des réponses qui ne disent rien de concret.

**Action :** Porter chaque réponse à 100–150 mots avec :
- Fourchettes de prix (ex. "entre 25 000 $ et 80 000 $ pour une cuisine complète selon la superficie")
- Délais typiques (ex. "8 à 14 semaines de la validation à l'installation")
- Différenciateurs factuels vs IKEA (matériaux, garantie, épaisseur des panneaux)

**Preuve :** 0/4 réponses atteignent la fourchette optimale de 134–167 mots pour citation IA.

---

### P2 — Créer llms.txt (Impact : MOYEN-ÉLEVÉ | Effort : Très faible)

**Problème :** Fichier absent (404).

**Action :** Créer `/public/llms.txt` dans le repo Next.js :

```
# Dilamco — Ébénisterie et rénovation haut de gamme, Montréal
> Dilamco conçoit, fabrique et installe des cuisines, vanités et armoires sur mesure au Québec.

## Pages principales
- [Accueil](https://dilamco.com/)
- [Cuisines sur mesure](https://dilamco.com/espaces/cuisine)
- [Vanités de salle de bain](https://dilamco.com/espaces/salle-de-bain)
- [Walk-in sur mesure](https://dilamco.com/espaces/walk-in)
- [Sous-sol](https://dilamco.com/espaces/sous-sol)

## Contact
Téléphone : +1-514-820-0773
Email : info@dilamco.com
Adresse : 18625 Rue Larocque, Pierrefonds-Roxboro, QC H9K 1P1
```

---

### P3 — Ajouter hreflang FR/EN dans le HTML (Impact : ÉLEVÉ | Effort : Faible)

**Problème :** Aucun tag `<link rel="alternate" hreflang>` dans le HTML de la home. Le site est bilingue (FR racine + EN /en/) mais les LLM et Google ne peuvent pas naviguer entre versions linguistiques.

**Action :** Via next-intl, s'assurer que le layout injecte :
```html
<link rel="alternate" hreflang="fr-CA" href="https://dilamco.com/" />
<link rel="alternate" hreflang="en-CA" href="https://dilamco.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://dilamco.com/" />
```

---

### P4 — Ajouter YouTube dans sameAs + créer une présence vidéo (Impact : ÉLEVÉ | Effort : Moyen)

**Problème :** YouTube est absent du sameAs (corrélation ~0.737 avec les citations IA — la plus forte connue). Aucun VideoObject schema.

**Action :**
1. Créer une chaîne YouTube Dilamco (même avec 3–5 vidéos de réalisations/avant-après)
2. Ajouter l'URL dans le sameAs de l'Organization schema
3. Ajouter un VideoObject schema sur les pages espaces

---

### P5 — Ajouter dateModified + Review schema (Impact : MOYEN | Effort : Faible-Moyen)

**Problème :** Aucun signal temporel (datePublished/dateModified) — les LLM favorisent le contenu récent vérifiable. Aucun AggregateRating visible.

**Action :**
- Ajouter `dateModified` ISO 8601 dans les schemas Organization et LocalBusiness
- Implémenter un `AggregateRating` dans le LocalBusiness schema (via avis Google)
- Ajouter un `Review` schema sur au moins 2–3 pages espaces avec témoignages réels

---

## 10. Synthèse JSON (pour audit-data.json)

```json
{
  "category": "AI Search Readiness",
  "tool": "GEO Audit",
  "date": "2026-06-17",
  "overall_score": 47,
  "dimensions": {
    "citability": 42,
    "structural_readability": 55,
    "multimodal_content": 50,
    "authority_brand_signals": 45,
    "technical_accessibility": 45
  },
  "crawler_access": {
    "GPTBot": "allowed",
    "OAI-SearchBot": "allowed",
    "ClaudeBot": "allowed",
    "PerplexityBot": "allowed",
    "Google-Extended": "allowed",
    "CCBot": "allowed",
    "anthropic-ai": "allowed"
  },
  "llms_txt": {
    "status": "missing",
    "http_code": 404
  },
  "faq_schema": {
    "present": true,
    "items": 4,
    "avg_answer_words": 31,
    "answers_with_numbers": 0,
    "optimal_range_met": false
  },
  "ssr": true,
  "hreflang": false,
  "date_signals": false,
  "youtube_samedas": false,
  "wikipedia_entity": false,
  "platform_scores": {
    "google_aio": 38,
    "chatgpt": 42,
    "perplexity": 50,
    "bing_copilot": 40
  },
  "top_findings": [
    "FAQ answers too short (28-38w) and contain zero data points — not citable",
    "llms.txt absent (404)",
    "Hreflang missing on bilingual site",
    "YouTube absent from sameAs (highest correlation signal)",
    "No datePublished/dateModified or Review schema"
  ]
}
```
