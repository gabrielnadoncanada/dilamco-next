# Content Quality & E-E-A-T Audit — dilamco.com
**Date:** 2026-06-17  
**Scope:** FR root + EN /en/* — cuisines/vanités/armoires sur mesure + rénovation, Montréal, haut de gamme, bilingue  
**Sample:** 7 pages crawlées (home FR, home EN, /a-propos, /services/renovation, /espaces/cuisine, /espaces/sous-sol, /materiaux/mdf, /contact)

---

## Scores

| Dimension | Score |
|---|---|
| **Content Quality Global** | **42 / 100** |
| E-E-A-T | 38 / 100 |
| Thin Content | 35 / 100 |
| AI Citation Readiness | 55 / 100 |
| Readability FR | 68 / 100 |
| FR ↔ EN Parity | 72 / 100 |

---

## E-E-A-T Breakdown

| Facteur | Poids | Score brut | Score pondéré | Notes |
|---|---|---|---|---|
| Experience | 20% | 20 / 100 | 4.0 | Aucune preuve first-hand : pas de date d'expérience, pas de nom d'artisan, pas de cas client nommé |
| Expertise | 25% | 40 / 100 | 10.0 | Terminologie métier présente (contreplaqué bouleau, chants MDF, quincaillerie) mais jamais reliée à une personne nommée |
| Authoritativeness | 25% | 35 / 100 | 8.75 | Structured data Organization + LocalBusiness OK ; pas de presse, pas de certifications mentionnées, pas de partenaires fournisseurs nommés |
| Trustworthiness | 30% | 50 / 100 | 15.0 | Adresse + téléphone + courriel présents, Schema.org complet, HTTPS ; mais : pas de mentions légales/CGV, pas de photos d'équipe réelle, pas de témoignages clients cités |
| **TOTAL E-E-A-T** | | | **37.75 → 38 / 100** | |

---

## Findings triés par sévérité

---

### CRITICAL

#### F-01 — Thin content systématique sur toutes les pages piliers

**Sévérité:** Critical  
**URLs affectées:** /espaces/cuisine (578 mots), /materiaux/mdf (478 mots), home FR (487 mots visibles), home EN (437 mots visibles)  
**Preuve:**

| Page | Type attendu | Mots visibles | Minimum recommandé | Écart |
|---|---|---|---|---|
| / (home FR) | Homepage | 487 | 500 | -13 |
| /en (home EN) | Homepage | 437 | 500 | -63 |
| /espaces/cuisine | Service page | 578 | 800 | -222 |
| /espaces/sous-sol | Service page | 713 | 800 | -87 |
| /materiaux/mdf | Service/content page | 478 | 800 | -322 |
| /services/renovation | Service page | 891 | 800 | +91 ✓ |
| /a-propos | About page | 677 | 500 | +177 ✓ |
| /contact | Contact | 155 | N/A | Acceptable |

**Note de méthode:** Les comptes incluent encore nav + footer (~100–120 mots). Le contenu éditorial pur est donc encore inférieur aux chiffres ci-dessus.

**Recommandation:** Enrichir /espaces/cuisine avec au moins 400 mots additionnels (processus détaillé, FAQ étendue, sous-types de cuisines, zones géographiques spécifiques). /materiaux/mdf doit atteindre 700–900 mots avec comparaison technique, cas d'usage concrets, tableaux. La home FR doit dépasser 600 mots de contenu éditorial réel.

---

### HIGH

#### F-02 — Zéro signal d'expérience first-hand (Experience = 20/100)

**Sévérité:** High  
**Preuve:** La page /a-propos décrit la philosophie de l'entreprise en termes abstraits ("réduire les faiblesses qui nuisent à la qualité finale") sans jamais mentionner : un nom de fondateur, une année de fondation, un nombre de projets réalisés, un chiffre d'affaires ou taille d'équipe, ni un témoignage client nominatif. Aucune photo d'équipe visible dans le HTML.  
**Extrait représentatif de /a-propos :** *"Notre trajectoire a suivi une logique simple : réduire les faiblesses qui nuisent à la qualité finale"* — formulation corporate générique, sans ancrage factuel.  
**Recommandation:** Ajouter sur /a-propos : fondation (année), fondateur nommé, taille de l'équipe, nombre approximatif de projets, au moins 2–3 témoignages clients nominatifs (prénom + ville + type de projet). Ces signaux sont des déclencheurs directs E-E-A-T pour un prestataire de services locaux.

---

#### F-03 — Absence de photos d'équipe réelle et de réalisations titrées

**Sévérité:** High  
**Preuve:** Les pages projets référencées dans les slides ("Cuisine sur mesure, Pierrefonds", "Cuisine sur mesure, Montréal") ont des descriptions de 10–15 mots sans auteur, sans date, sans superficie, sans contexte client. La page /a-propos ne contient aucune balise `<img>` pointant vers une photo d'équipe dans le HTML analysé.  
**Recommandation:** Chaque page de projet doit inclure : type de projet, ville précise, superficie approximative, matériaux utilisés, durée du chantier. Photos d'équipe sur /a-propos avec légende nominative. Ce sont des marqueurs Experience forts pour les Quality Raters.

---

#### F-04 — FAQ trop vague pour la citation IA et la satisfaction d'intention

**Sévérité:** High  
**Preuve — FAQ home FR:**
- *"Le budget dépend des dimensions, de l'aménagement, des matériaux et de la coordination. Pour une approche sur mesure et clé en main, il faut s'attendre à un investissement aligné avec une exécution premium et durable."* — Aucun chiffre, aucune fourchette, aucun exemple concret.
- *"Les délais varient selon la complexité et la charge de production."* — Idem, aucune donnée exploitable.

**Impact IA:** Google SGE et les assistants IA citent les pages qui donnent des réponses directes et chiffrées. Une FAQ sans données concrètes ne sera pas sourcée.  
**Recommandation:** Donner des fourchettes de prix réelles (ex. "entre 15 000 $ et 45 000 $ pour une cuisine complète selon les matériaux") et des délais typiques (ex. "8 à 14 semaines de la conception à l'installation"). Si les prix sont confidentiels, indiquer au moins les facteurs déterminants avec des exemples chiffrés.

---

### MEDIUM

#### F-05 — Parité FR ↔ EN : structure fidèle mais articles manquants en EN (articles anglais)

**Sévérité:** Medium  
**Preuve:** La home EN (437 mots) compte 50 mots de moins que la home FR (487 mots). La page EN kitchen (508 mots) est légèrement supérieure à la FR cuisine (578 mots FR) — parity approximative mais la rédaction EN omet systématiquement les articles définis ("every Dilamco space follows the same logic: design tailored... controlled fabrication" — 2 articles manquants dans cet extrait), signalant une traduction automatique non révisée.  
**Extrait EN révélateur :** *"a durable, well-organized space, from plan to finish"*, *"single point of responsibility"*, *"Get clear, structured quote tailored to durable and controlled project"* — l'absence d'articles ("a durable project", "a controlled project") est un marqueur typique de traduction machine.  
**Recommandation:** Révision humaine systématique de toutes les pages EN. Prioriser home, /en/spaces/kitchen, /en/about. Les articles définis ("the", "a/an") et la syntaxe naturelle EN sont des signaux de qualité rédactionnelle pour les Quality Raters anglophones.

---

#### F-06 — Aucune mention de certifications, accréditations ou partenaires fournisseurs nommés

**Sévérité:** Medium  
**Preuve:** La page /materiaux/mdf mentionne "bois massif de bouleau", "contreplaqué de bouleau", "quincaillerie" sans jamais nommer un fournisseur (Blum, Häfele, Arauco, Uniboard…). La page /a-propos ne cite aucune association professionnelle (ARQ, APCHQ, etc.).  
**Recommandation:** Nommer les fournisseurs principaux de quincaillerie et de panneaux. Mentionner toute association ou formation. Ces détails augmentent le score Expertise et Authoritativeness de façon mesurable.

---

#### F-07 — Pages /espaces/* et /materiaux/* : coquilles semi-remplies, topical coverage insuffisante

**Sévérité:** Medium  
**Preuve:** /materiaux/mdf (478 mots bruts, ~360 mots éditoriaux nets) couvre le sujet superficiellement : propriétés physiques du MDF, 2 cas d'usage, 2 limitations, FAQ de 4 questions. Aucun tableau comparatif in-page, aucune donnée de densité/résistance, aucune application spécifique à la cuisine vs salle de bain.  
**Recommandation:** Chaque page /materiaux/* doit inclure : tableau des propriétés (densité, résistance à l'humidité, formaldéhyde, coût relatif), cas d'usage détaillés par type d'espace, erreurs courantes d'installation, et comparaison directe inline (pas seulement des liens). Objectif : 900–1100 mots éditoriaux nets.

---

#### F-08 — Signaux de fraîcheur absents

**Sévérité:** Medium  
**Preuve:** Aucune date de publication ou de mise à jour visible sur les pages de contenu. Le footer affiche "2026 Dilamco" mais sans date de dernière modification sur les articles/pages. htmldate non exploitable via le script.  
**Recommandation:** Ajouter une balise `<meta name="article:modified_time">` ou un `dateModified` dans le JSON-LD sur les pages de contenu. Publier un blogue ou des mises à jour de projets datées pour signaler une activité éditoriale continue à Google.

---

### LOW

#### F-09 — Contact : 155 mots, aucune réassurance de processus post-soumission

**Sévérité:** Low  
**Preuve:** La page /contact liste le formulaire et les coordonnées mais ne décrit pas ce qui se passe après l'envoi (délai de rappel, étapes suivantes, mode de prise en charge). Seul "retour initial sous 24–48 heures ouvrables" est mentionné.  
**Recommandation:** Ajouter 80–100 mots décrivant le processus post-soumission (ex. "Après réception, un conseiller vous contacte pour un appel de cadrage de 20 minutes…"). Renforce la confiance et réduit l'anxiété pré-conversion.

---

#### F-10 — Structured data riche mais FAQ schema vague (mêmes réponses évasives)

**Sévérité:** Low  
**Preuve:** Le JSON-LD FAQPage est correctement implémenté sur la home. Cependant, les answers correspondent exactement aux réponses vagues identifiées en F-04. Le schema ne compense pas l'absence de données concrètes.  
**Recommandation:** Mettre à jour les `acceptedAnswer` en même temps que le contenu visible (F-04). Google utilise le contenu des answers pour SGE et les rich results FAQ — des réponses vagues n'activent pas les rich results de façon significative.

---

### INFO

#### F-11 — Contenu AI-généré : qualité acceptable mais générique

**Sévérité:** Info  
**Évaluation QRG Sept 2025:** Le contenu présente plusieurs marqueurs de génération automatique non révisée :
- Répétition structurelle identique sur toutes les pages (header hero → 3 bullets → processus 4 étapes → slider projets → zones → FAQ → CTA)
- Formulations abstraites récurrentes : "exécution maîtrisée", "réduire la fragmentation", "livrer un résultat cohérent" — présentes sur 6/7 pages analysées
- Absence de voix éditoriale distincte ou d'anecdotes spécifiques

**Note QRG 2025:** Le contenu AI est acceptable s'il démontre un E-E-A-T réel. Ici le problème n'est pas l'origine du contenu mais l'absence de données factuelles, de preuves de réalisation et de voix humaine identifiable.  
**Recommandation:** Injecter des éléments spécifiques (projets nommés, chiffres réels, citations d'artisans) qui cassent la répétition structurelle et signalent une expertise authentique.

---

## Résumé AI Citation Readiness (55/100)

**Points forts:**
- Schema.org FAQPage, Organization, LocalBusiness, BreadcrumbList, ImageObject tous présents
- Structure H2/H3 cohérente (observable via les titres de sections)
- Réponses FAQ en prose courte et lisible

**Points faibles:**
- FAQ sans chiffres = non quotable par les moteurs IA
- Aucun fait statistique ou données sectorielles cités
- Pas de définitions claires du type "Une cuisine sur mesure, c'est..."
- Pas de tableaux comparatifs exploitables par les parsers

---

## Priorités d'action

1. **(Critical)** Enrichir les pages /espaces/* et /materiaux/* : +400 à +600 mots éditoriaux, avec données techniques, cas d'usage, FAQ chiffrée
2. **(High)** Ajouter sur /a-propos : fondateur nommé, année de fondation, nb de projets, témoignages nominatifs
3. **(High)** Remplacer les FAQ vagues par des réponses avec fourchettes de prix et délais chiffrés
4. **(Medium)** Révision humaine des pages EN pour corriger les articles manquants et la syntaxe machine
5. **(Medium)** Nommer les fournisseurs de quincaillerie/panneaux et associations professionnelles sur /materiaux/* et /a-propos
6. **(Medium)** Ajouter signaux de fraîcheur : dateModified JSON-LD, blogue ou section actualités

---

*Audit réalisé le 2026-06-17 — Sample de 7 pages, comptage de mots incluant nav/footer (~100–120 mots à déduire pour obtenir le contenu éditorial pur.*
