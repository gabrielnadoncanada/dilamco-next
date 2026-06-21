# SXO Audit — dilamco.com
**Date:** 2026-06-17
**Analyste:** Claude Code (SXO skill v2)
**Marché cible:** Grand Montréal, haut de gamme, bilingue (FR/EN)
**Cibles:** Propriétaires aisés (B2C) + designers/commerciaux (B2B)

---

## SXO Gap Score: 54 / 100

---

## 1. Findings Critiques — Page-Type Mismatch

### FINDING 1 — CRITICAL: Absence du site dans le SERP organique pour la requête principale

**Requête:** "armoires de cuisine sur mesure Montréal"
**Observation SERP:** 10 résultats analysés. Dilamco.com est ABSENT. Présents : Grifon, FabriquePlus, Armodec, Armodesign, EnzO, Groupe Cartier, KSI Cabinetry, Ateliers Jacob, ArmoireComptoir.
**Sévérité:** CRITICAL
**Preuve:** Recherche WebSearch directe — zéro résultat dilamco.com sur requête principale 2000 vol+/mois.
**Cause probable:** Autorité de domaine insuffisante + contenu trop court + absence de backlinks sectoriels.
**Reco:** Programme de contenu éditorial (guides prix, comparaisons matériaux) pour capturer le trafic informationnel et construire l'autorité de domaine avant d'attaquer les requêtes transactionnelles concurrentielles.

---

### FINDING 2 — HIGH: Page /espaces/cuisine — Mauvais format vs. consensus SERP

**Requête:** "armoires de cuisine sur mesure Montréal"
**Page cible:** https://dilamco.com/espaces/cuisine
**H1 actuel:** "Armoires et cuisines sur mesure à Pierrefonds et dans le Grand Montréal"

**Analyse SERP — Type de page dominant:**
| Concurrent | Type de page | Profondeur |
|---|---|---|
| Grifon.ca/armoires/cuisine | Hybride service + galerie + éducatif | ~2500 mots, 4 styles, 5 matériaux, processus, témoignages |
| Ateliers Jacob | Service + galerie + localisation multiples | ~2000 mots, 3D design, pages géolocalisées |
| KSI Cabinetry | Guide éditorial (prix/coût 2026) | ~4000+ mots, featured snippet candidat |
| Groupe Cartier | Service page locale | ~1500 mots, LocalBusiness schema |
| ArmodesignCA | Service + portfolio | ~1200 mots |

**Consensus SERP:** Service local hybride avec galerie de projets + signaux éducatifs (matériaux, styles, processus) + témoignages clients. Profondeur moyenne: 1800 mots.

**Page Dilamco actuelle:** ~1200-1400 mots, 3 projets, pas de témoignages, pas de styles (classique/contemporain/transitionnel), pas de comparaisons matériaux, pas de schema LocalBusiness confirmé.

**Mismatch:** MEDIUM-HIGH. Le format est dans la bonne direction (service page) mais la profondeur est insuffisante et plusieurs signaux de confiance manquent.

**Reco:** Porter la page à 2000+ mots. Ajouter: section styles (avec images), tableau comparatif matériaux, section témoignages (3 minimum), schema LocalBusiness + Service + Review.

---

### FINDING 3 — HIGH: Requête "ébéniste cuisine sur mesure Montréal" — Dilamco absent, positionnement mal aligné

**Requête:** "ébéniste cuisine sur mesure Montréal"
**Observation SERP:** Multi-Laques, GMRS, Cogen, Creations Folie Bois, Ébénisterie Archambault, MM Cuisine, EbenistesMTL, Versatyl. Dilamco absent.
**Sévérité:** HIGH

**Diagnostic:** Le terme "ébéniste/ébénisterie" est un qualifier de confiance fort pour ce segment. Dilamco utilise "armoires sur mesure" mais n'emploie jamais le mot "ébénisterie" dans ses pages de service cuisine.

**Intent SERP:** Les 10 résultats sont soit des pages de service ébénisterie spécialisées, soit des annuaires. L'intent est **artisanat + confiance + sur mesure** — différent du mass market.

**Reco:** Intégrer le champ lexical "ébénisterie" dans la page /espaces/cuisine (H2, body, méta). Dilamco a le profil d'un ébéniste haut de gamme — capitaliser sur ce positionnement. Créer une page /ébénisterie ou section dédiée.

---

### FINDING 4 — MEDIUM: Requête "vanité sur mesure Laval" — Dilamco présent (position ~7) mais page sous-optimisée

**Requête:** "vanité sur mesure Laval salle de bain"
**Position estimée:** ~7 (apparaît dans le SERP WebSearch)
**URL rankée:** https://www.dilamco.com/espaces/salle-de-bain
**H1 actuel:** "Vanité de salle de bain sur mesure à Laval et dans le Grand Montréal" ✓ (ciblé)

**Analyse comparative vs. concurrents (Era Design, Cuisimax, Bois d'Or, Grifon):**

| Signal | Dilamco | Era Design | Cuisimax |
|---|---|---|---|
| Années d'expérience | Non mentionné | "Depuis 18 ans" | Non visible |
| Témoignages | Aucun | Oui | Implicites |
| Galerie projets (salle de bain) | 3 slides | Portfolio dédié | 25+ projets filtrable |
| Options matériaux/styles | Bouleau seulement | Quartz, granit | Polymère, acrylique, etc. |
| Specs techniques | Bouleau plywood | Détaillé | Très détaillé |
| FAQ | 4 questions | Partielle | Aucune |
| Schema LocalBusiness | Non confirmé | Implicite (adresse) | Oui (2 adresses) |
| Prix/budget indicatif | Absent | Absent | Absent |

**Sévérité:** MEDIUM — La page est dans le bon format (service local) mais manque de profondeur et de signaux de confiance vs. concurrents mieux établis.

**Reco:** Ajouter années d'expérience en sous-titre, 3 témoignages vérifiés, élargir la galerie (6+ projets), ajouter section "nos matériaux" avec quartz/granit/mélamine en plus du bouleau, schema Review.

---

### FINDING 5 — HIGH: Absence complète de schema markup confirmé

**Observation:** Aucun schema markup détecté sur la homepage ni sur les pages service analysées.
**Impact:** Pas d'éligibilité aux rich results (étoiles reviews, FAQ accordéon, LocalBusiness Knowledge Panel).
**Concurrents avec schema:** Grifon (LocalBusiness probable), Era Design (LocalBusiness implicite), Cuisimax (adresses structurées).
**Sévérité:** HIGH
**Reco:** Implémenter en priorité: LocalBusiness (homepage), Service (pages espaces), FAQPage (les FAQ déjà présentes!), Review/AggregateRating dès collecte d'avis.

---

### FINDING 6 — HIGH: Homepage — H1 trop générique, méta description absente

**Titre actuel:** "Cuisines, vanités et armoires sur mesure à Montréal | Dilamco" ✓ (correct)
**H1 actuel:** "Espaces sur mesure : cuisine, salle de bain, rangement et commercial"
**Meta description:** Non détectée (absente ou non rendue)

**Problème H1:** Le H1 est un tagline UX, pas un H1 SEO. Il n'ancre aucun mot-clé transactionnel précis. Google utilise le H1 comme signal de pertinence topique fort.

**Problème méta description:** Absente = Google génère automatiquement un extrait souvent mal ciblé. CTR perdus.

**Reco H1:** "Armoires et cuisines sur mesure à Montréal — Design, fabrication et installation" ou variante intégrant "ébénisterie haut de gamme".
**Reco méta:** 155 car. max, inclure USP (haut de gamme, fabrication locale, Pierrefonds/Grand Montréal), CTA implicite ("Obtenez une soumission").

---

### FINDING 7 — MEDIUM: Absence totale de témoignages/avis clients sur l'ensemble du site

**Observation:** Aucune mention de témoignages, avis Google, certifications ou prix sur la homepage ou les pages service analysées.
**Impact personas:** Propriétaire aisé en phase de considération — recherche validation sociale avant d'investir 15 000$+. Designer B2B — cherche preuves de fiabilité et respect des délais.
**Concurrents:** Grifon (témoignages + 48h response guarantee), Era Design (témoignages section), Ateliers Jacob (implied social proof).
**Sévérité:** MEDIUM-HIGH (E-E-A-T gap)
**Reco:** Intégrer widget Google Reviews (schema AggregateRating), ou 3 citations clients avec photo/prénom/projet sur les pages service. Demander systématiquement des avis post-installation.

---

## 2. Analyse SERP par requête

### Requête 1: "armoires de cuisine sur mesure Montréal"
- **Vol. estimé:** 2000-5000/mois (haute compétition)
- **Type dominant:** Service local hybride + galerie (80% des top 10)
- **SERP features:** Carte Google Maps (pack local 3), PAA (combien coûte, quelle différence semi-sur mesure), featured snippet (guide prix KSI)
- **Intent:** Transactionnel + comparatif prix
- **Dilamco présent:** NON
- **Gap:** Autorité + contenu éducatif manquant

### Requête 2: "ébéniste cuisine sur mesure Montréal"
- **Vol. estimé:** 500-1000/mois (moyenne compétition)
- **Type dominant:** Service ébénisterie artisanale + portfolio (90% des top 10)
- **SERP features:** PAA (différence ébéniste vs cuisiniste), annuaires sectoriels
- **Intent:** Qualitatif / artisanat / confiance
- **Dilamco présent:** NON
- **Gap:** Champ lexical "ébénisterie" absent du site

### Requête 3: "vanité sur mesure Laval"
- **Vol. estimé:** 500-1000/mois (compétition modérée)
- **Type dominant:** Service local avec galerie + specs matériaux (70%)
- **SERP features:** Pas de featured snippet, pack local, 2-3 e-commerce showrooms
- **Intent:** Transactionnel local
- **Dilamco présent:** OUI (~position 7)
- **Gap:** Manque de profondeur et témoignages vs. concurrents

---

## 3. User Stories par Intention

### Awareness (Haut du funnel)

**US-1** — "En tant que propriétaire qui commence à planifier une rénovation cuisine, je veux comprendre la différence entre armoires standard, semi-sur mesure et sur mesure pour savoir ce qui vaut mon budget."
- Signal SERP: Featured snippet KSI Cabinetry sur "combien coûtent vraiment les armoires sur mesure 2026"; PAA questions présentes.
- Page Dilamco manquante: Guide comparatif ou section "Pourquoi le sur mesure" avec fourchettes de prix.

**US-2** — "En tant que designer d'intérieur B2B cherchant un partenaire ébéniste fiable, je veux voir des réalisations techniques (finitions, dimensions, matériaux) pour évaluer si Dilamco peut exécuter mes plans."
- Signal SERP: Pages ébénisterie spécialisées avec portfolio technique (Ébénisterie Archambault, Versatyl).
- Page Dilamco manquante: Section B2B / designers, portfolio avec specs techniques, formulaire devis professionnel.

### Considération (Mid-funnel)

**US-3** — "En tant que propriétaire à Laval cherchant une vanité sur mesure, je veux voir des projets réalisés dans des maisons similaires à la mienne (avec matériaux, dimensions et prix indicatifs) pour me projeter et comparer."
- Signal SERP: Cuisimax (25+ projets filtrables par style/matériau), Zone Cuisines Laval (portfolio dédié).
- Gap Dilamco: Galerie de 3 slides vs. 25+ projets filtrables chez concurrents; 0 prix indicatifs.

**US-4** — "En tant que propriétaire aisé prêt à investir 20 000$+ dans une cuisine, je veux lire des avis de clients comme moi pour me rassurer sur la qualité de fabrication et le respect des délais."
- Signal SERP: Témoignages présents sur Grifon, Era Design; Google reviews visibles en pack local.
- Gap Dilamco: Absence totale de témoignages ou avis structurés.

### Décision (Bas du funnel)

**US-5** — "En tant que propriétaire prêt à obtenir une soumission, je veux un formulaire de contact qui précise le processus suivant (délai de réponse, premier appel, visite mesure) pour ne pas avoir l'impression de partir dans le vide."
- Signal SERP: Grifon "réponse sous 48h garantie"; Era Design 5 CTAs avec précision.
- Gap Dilamco: CTA "Demander une soumission" sans précision du processus post-soumission.

---

## 4. Gap Analysis (Score /100)

| Dimension | Score | Max | Justification |
|---|---|---|---|
| **Page Type** | 9 | 15 | Format service page correct pour /cuisine et /salle-de-bain. Homepage trop générique comme hub. Pas de pages géolocalisées secondaires (ex: /armoires-cuisine-laval). |
| **Content Depth** | 7 | 15 | /cuisine ~1300 mots vs. concurrents 1800-2500. Manque: styles visuels (4 styles = classique/contemporain/transitionnel/moderne), tableau matériaux comparatif, processus illustré, prix indicatifs. |
| **UX Signals** | 9 | 15 | Structure logique (valeur → espaces → processus → FAQ → CTA). Mais: 0 témoignages, pas de réponse-délai promis, galerie minimale (3 projets), formulaire contact probablement minimal. |
| **Schema** | 2 | 15 | Aucun schema détecté. FAQ déjà rédigées mais non marquées FAQPage. Pas de LocalBusiness, pas de Service, pas de Review. Opportunité immédiate et à fort impact. |
| **Media** | 6 | 15 | Images projets présentes. Pas de vidéo (visite atelier, processus fabrication). Galerie très limitée (3 slides) vs. 25+ chez Cuisimax. Pas de visuels 3D/avant-après. |
| **Authority** | 11 | 15 | Bon: processus de fabrication explicité, matériaux détaillés (bouleau plywood), ancrage local (Pierrefonds-Roxboro). Mauvais: 0 témoignages, 0 certifications mentionnées, années d'expérience absentes, aucun backlink éditorial visible. |
| **Freshness** | 10 | 10 | Contenu semble récent (audit 2026), FAQ pertinentes, zones géographiques à jour. Pas de dates de mise à jour visibles mais pas de contenu obsolète détecté. |

**Total: 54 / 100**

---

## 5. Scoring Personas

### Persona A — Propriétaire aisé en rénovation cuisine (B2C principal)
**Profil:** 40-55 ans, Grand Montréal (Laval/West Island/Rive-Sud), budget 15 000$-40 000$, veut une cuisine fonctionnelle et belle qui dure, comparera 3-4 ébénisteries avant décision.

| Critère | Score | /25 | Notes |
|---|---|---|---|
| Relevance | 17 | 25 | Cuisine sur mesure bien positionnée. Manque: fourchettes de prix, styles visuels (classique/contemporain), mention "haut de gamme" explicite. |
| Clarity | 16 | 25 | Processus 4 étapes clair. Manque: délai typique d'un projet, ce qui différencie Dilamco des concurrents en 1 phrase. |
| Trust | 10 | 25 | Zéro témoignages, zéro avis, années d'expérience non mentionnées. C'est le plus grand frein à la conversion pour un achat à 20 000$+. |
| Action | 14 | 25 | CTA "Demander une soumission" omniprésent mais sans précision du prochain pas. Pas de consultation gratuite proposée (vs. Cuisimax "réservez votre consultation gratuite"). |
| **Total** | **57** | **100** | |

**Priorité d'amélioration:** Trust en premier (témoignages + avis), puis Action (proposer "consultation gratuite 30 min" ou "réponse sous 48h").

---

### Persona B — Designer d'intérieur / Architecte (B2B)
**Profil:** Professionnel cherchant un partenaire ébéniste fiable pour ses projets clients. Priorités: respect des plans, qualité de finition, délais tenus, communication professionnelle.

| Critère | Score | /25 | Notes |
|---|---|---|---|
| Relevance | 8 | 25 | Solution commerciale mentionnée en homepage mais aucune page dédiée B2B/designers détectée. Le mot "architecte" ou "designer" est absent des pages service analysées. |
| Clarity | 7 | 25 | Aucun parcours B2B identifiable. Pas de mention de livrables professionnels (plans CAD acceptés, shop drawings, devis technique). |
| Trust | 6 | 25 | Aucune référence B2B, aucun projet commercial showcasé distinctement, pas de mention de partenariats ou de volume de projets. |
| Action | 5 | 25 | Pas de CTA ni formulaire différencié pour les pros. Le formulaire contact standard est inadapté à un brief professionnel. |
| **Total** | **26** | **100** | |

**Priorité d'amélioration:** Créer une page /designers ou /b2b avec portfolio commercial, formulaire de brief pro, mention "travail sur plans fournis", témoignages de designers.

---

### Persona C — Propriétaire cherchant une vanité Laval (B2C local)
**Profil:** 35-55 ans, Laval/Rive-Nord, projet salle de bain plus ciblé, recherche géolocalisée, budget 5 000$-15 000$.

| Critère | Score | /25 | Notes |
|---|---|---|---|
| Relevance | 19 | 25 | H1 cible explicitement "Laval et Grand Montréal". Zones de service listées. Bon signal géo. |
| Clarity | 16 | 25 | Matériaux expliqués (bouleau, humidité). Processus clair. Mais options limitées (bouleau uniquement, pas de quartz/granit pourtant standards chez concurrents). |
| Trust | 11 | 25 | FAQ de qualité. Mais 0 témoignages, 0 avis Google, pas de "depuis X ans". |
| Action | 15 | 25 | CTA répété. Mais pas de "voir nos prix" ou "consultation gratuite à domicile Laval". |
| **Total** | **61** | **100** | |

---

## 6. Recommandations Prioritaires (Ordre d'impact)

### P1 — Schema markup (Impact immédiat, effort faible)
- Implémenter FAQPage sur toutes les pages FAQ déjà rédigées
- LocalBusiness (homepage + pages service)
- Service schema (/espaces/cuisine, /espaces/salle-de-bain)
- Timeline: 1-2 jours dev. ROI: rich results + CTR +15-25% estimé.

### P2 — Témoignages et avis (Impact conversion fort)
- Collecter 5-10 avis Google (demande post-installation systématique)
- Afficher 3 citations clients sur chaque page service avec photo + type de projet + ville
- Implémenter AggregateRating schema
- Timeline: 2-4 semaines (collecte). ROI: Trust +40pts persona A.

### P3 — Enrichissement pages service (Profondeur contenu)
- /espaces/cuisine: Porter à 2000+ mots, ajouter section styles (4 styles avec photos), tableau matériaux comparatif, 1 témoignage, prix indicatifs ("à partir de X$")
- /espaces/salle-de-bain: Élargir galerie à 6+ projets, ajouter quartz/granit comme options, témoignage Laval
- Timeline: 1-2 semaines. ROI: classement +2-5 positions estimé sur requêtes locales.

### P4 — Champ lexical ébénisterie (Nouveau segment)
- Intégrer "ébénisterie" / "ébéniste" dans /espaces/cuisine (H2, paragraphe, méta)
- Créer page /ébénisterie ou section dédiée sur le savoir-faire artisanal
- Timeline: 1 semaine. ROI: accès nouveau segment SERP (~500-1000 req/mois, compétition plus faible).

### P5 — Page B2B/Designers (Nouveau persona)
- Créer /designers ou /b2b: portfolio commercial, formulaire brief pro, mentions "plans CAD", témoignages designers
- Timeline: 2-3 semaines. ROI: ouverture canal B2B, meilleure qualification leads.

### P6 — Meta descriptions (Quick win SEO)
- Rédiger méta descriptions pour toutes les pages principales (homepage, /espaces/*, /projets)
- Format: [Service] + [Localisation] + [USP] + [CTA implicite], 150-155 caractères
- Timeline: 1 jour. ROI: CTR SERP estimé +10-20%.

---

## 7. Cross-Skill Recommendations

- **E-E-A-T gaps critiques** → Recommande `/seo content` pour audit de contenu approfondi (field authority, author signals)
- **Schema manquant** → Recommande `/seo schema` pour génération JSON-LD (LocalBusiness, FAQPage, Service, Review)
- **Intent local fort** → Recommande `/seo local` pour audit GBP (Google Business Profile), cohérence NAP, photos atelier
- **Contenu thin sur plusieurs pages** → Recommande `/seo page` pour audit page-par-page

---

## 8. Limitations

- Le renderer Python (`render_page.py`) a échoué sur l'environnement Windows — les données homepage ont été obtenues via WebFetch (non-rendu JS). Les éléments injectés côté client (menus, schema JSON-LD dynamique, lazy-load images) peuvent ne pas avoir été capturés.
- Le schema markup n'a pas pu être vérifié directement via le DOM rendu — l'absence signalée est basée sur l'absence de détection dans le HTML statique fetché, à valider via Google Rich Results Test.
- Les positions SERP sont des estimations basées sur l'ordre des résultats WebSearch — non issues de GSC ou d'un rank tracker certifié.
- Le SERP anglophone ("custom kitchen cabinets Montreal") n'a pas été analysé dans cette session — les pages EN du site sont sous-indexées (cf. audit indexation GSC).
- Le volume de mots exacts de chaque page concurrent n'a pas été mesuré — les estimations sont issues des WebFetch summaries.

---

*Généré par Claude Code SXO Skill — dilamco.com-audit*
*Pour un rapport PDF: utilisez `/seo google report`*
