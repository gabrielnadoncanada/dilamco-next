# Audit SEO complet — dilamco.com

**Date :** 2026-06-17
**Type d'entreprise :** Local Service / hybride — ébénisterie & rénovation sur mesure (atelier à Pierrefonds-Roxboro + zone desservie Grand Montréal), site Next.js statique bilingue FR/EN.
**Score de santé SEO global : 54 / 100**

| Catégorie | Poids | Score |
|---|---|---|
| Technical SEO | 22 % | 60 |
| Content Quality | 23 % | 42 |
| On-Page SEO | 20 % | 60 |
| Schema / Structured Data | 10 % | 64 |
| Performance (CWV) | 10 % | 52 |
| AI Search Readiness (GEO) | 10 % | 47 |
| Images | 5 % | 50 |

> Catégories complémentaires (hors pondération du score) : **Local SEO 47/100**, **SXO 54/100**.

---

## Résumé exécutif

dilamco.com repose sur **d'excellentes fondations techniques** (Next.js full SSR, schema riche server-rendered, sitemaps valides, CDN Vercel) mais souffre d'un **décrochage entre la visibilité et le résultat**. Les vraies données Google le montrent sans ambiguïté.

### Le constat central (données réelles GSC + GA4, 28 jours)

- **38 sessions organiques** seulement, **0 événement clé** dans GA4 (tous canaux confondus).
- **~16 clics organiques** dans GSC, dont **13 sur la seule requête de marque « dilamco »** (pos 1,5).
- Le site **se classe pourtant en position 1 à 5** sur plusieurs requêtes locales commerciales — **avec 0 clic** :
  - `armoires cuisine sur mesure pierrefonds` — 13 impressions, **pos 1,5**, 0 clic
  - `cuisine sur mesure plateau-mont-royal` — 19 impressions, pos 2,7, 0 clic
  - `installation cuisine plateau-mont-royal` — 13 impressions, pos 4,9, 0 clic
  - `fabricant et installateur de vanités … rive-nord` — 28 impressions, pos 19,9, 0 clic

### Lecture stratégique

Le problème n'est **pas** « se classer », c'est **transformer le classement en clics et en leads**. Trois causes se combinent :

1. **Le Map Pack n'est pas gagné.** Sur les requêtes locales, les clics vont au pack Google (cartes + avis). Dilamco a **0 avis**, pas d'`AggregateRating`, un GBP sous-optimisé → ses positions organiques 1-5 sont sous le pack et ignorées.
2. **Le contenu ne convertit ni ne se fait citer.** Pages piliers minces, FAQ sans chiffres, 0 témoignage, 0 signal d'expérience first-hand (E-E-A-T).
3. **On ne mesure rien.** `generate_lead` n'est pas promu en événement clé → même les conversions réelles sont invisibles, impossible de piloter le ROI.

À cela s'ajoute une **fragmentation de la canonicalisation d'URL** (http/https, www/non-www, trailing-slash) qui dilue les signaux et fait indexer des doublons par Google.

### Top 5 problèmes critiques

1. **Tracking de conversion cassé** — 0 événement clé GA4 (generate_lead non promu).
2. **Map Pack non gagné** — 0 avis, pas d'AggregateRating, GBP sous-optimisé (symptôme : rankings locaux à 0 clic).
3. **Canonicalisation d'URL fragmentée** — doublons http/https/www/slash indexés, canoniques outrepassées par Google.
4. **Thin content sur les pages piliers** — /espaces/* et /materiaux/* (certaines non indexées).
5. **Image hero LCP** — chargée en `lazy`, LCP lab ~2,8-3,5 s.

### Top 5 quick wins

1. Promouvoir `generate_lead` en événement clé GA4 (~15 min).
2. Corriger le double nom de marque `og:title` (« … | Dilamco | Dilamco »).
3. `priority` sur l'image hero Next.js (LCP -0,8 à -1,5 s).
4. `geo` + `openingHours` + `sameAs` sur le schema LocalBusiness (1 commit site-wide).
5. Lien `tel:` cliquable global + `/llms.txt`.

---

## 1. Technical SEO — 60/100

**Forces :** SSR complet (`X-Nextjs-Prerender`), canonicals présents, redirects 308 (HTTP→HTTPS, www→non-www), robots.txt ouvert, 3 sitemaps **valides (GSC : 0 erreur, 80 URLs)**, fonts WOFF2 préchargées.

**Problèmes :**

- **[High] Canonicalisation d'URL fragmentée.** GSC indexe des variantes `www.` et `http://`, ainsi que des doublons avec/sans slash final (`/espaces/cuisine` **et** `/espaces/cuisine/`, idem salle-de-bain). La gestion du slash est **incohérente entre routes** : `/materiaux/mdf/` redirige (308) vers la forme sans slash, mais `/espaces/salle-de-bain/` sert un **200 dupliqué**. Résultat confirmé par GSC : *« Google a choisi `…/salle-de-bain/` au lieu de la canonique déclarée `…/salle-de-bain` »*. Et `/materiaux/mdf` ressort *« Page avec redirection — non indexée »* (variante legacy crawlée).
  → Uniformiser `trailingSlash` (next.config) + middleware, une seule forme canonique forcée en 308 sur **toutes** les routes. Ajouter une property `http`/`www` en GSC pour surveiller le legacy.
- **[High] hreflang incohérent et hors HTML.** **Aucune** balise hreflang dans le HTML. Le header HTTP `Link` annonce `fr`/`en`/`x-default` ; le **sitemap** annonce `fr-CA`/`en-CA`/`x-default`. Les deux signaux divergent.
  → Aligner sur `fr-CA`/`en-CA` partout + ajouter `<link rel="alternate" hreflang>` dans le `<head>` (next-intl).
- **[High] 5 headers de sécurité manquants** (X-Content-Type-Options, X-Frame-Options, CSP, Permissions-Policy, Referrer-Policy) ; HSTS sans `includeSubDomains; preload`.
- **[High] Double nom de marque** dans `og:title`/`twitter:title` (« … | Dilamco | Dilamco »), FR et EN.
- **[Medium]** IndexNow non implémenté ; sitemaps sans `lastmod` ; `sitemap-images.xml` absent du sitemap index ; slugs EN non traduits (`/en/materials/bois-massif`…).

**Indexation (données GSC, 6 URLs testées) :** 4 indexées / 2 non indexées.
- `/materiaux/mdf` → *Page avec redirection* (non indexée).
- `/projets/salle-de-lavage` → *Détectée, non indexée* (coquille vide confirmée).
- `/espaces/salle-de-bain/` → conflit de canonique (Google choisit la version avec slash).

## 2. Content Quality & E-E-A-T — 42/100

**[Critical] Thin content systématique.** Net : home FR ~487 mots, /espaces/cuisine 578, /materiaux/mdf 478 — sous les seuils. /espaces/* et /materiaux/* sont des coquilles semi-remplies.
**[High] Zéro expérience first-hand.** /a-propos sans fondateur, année, nb de projets, témoignage.
**[High] FAQ sans données.** Réponses 28-38 mots, aucun prix ni délai → non citables.
**[Medium]** EN = traduction machine non révisée ; aucun fournisseur/association nommé ; aucun signal de fraîcheur (`dateModified`, blog).

## 3. On-Page SEO — 60/100

Title home solide, méta description présente. **[Medium]** H1 home = tagline UX sans mot-clé transactionnel ; champ lexical « ébéniste/ébénisterie » absent (requête à compétition modérée non couverte). Généraliser des méta descriptions au format [service] + [localisation] + [USP].

> Note : l'agent SXO (analyse via WebFetch statique) a conclu à tort à une « absence totale de schema ». **Faux** — 11 blocs JSON-LD sont bien présents et server-rendered (confirmé par les agents Technical et Schema, et par curl).

## 4. Schema / Structured Data — 64/100

**Forces :** 11 blocs server-rendered, Organization + HomeAndConstructionBusiness + BreadcrumbList + Service + ImageObject liés par `@id`, architecture centralisée (`builders.ts`/`site.ts`).
**[Critical]** LocalBusiness sans `geo`, `openingHours`, `sameAs` ; `Organization.logo` en string nue (→ ImageObject).
**[High]** Service sans `@id` ni `offers` ; BreadcrumbList tronqués (saut du hub `/espaces` ; racine EN pointe `/` au lieu de `/en`) ; pas d'`AggregateRating`.
**[Info]** FAQPage présent — **conserver** (Google a retiré les rich results FAQ le 7 mai 2026 ; le markup reste utile pour la citation IA/LLM). Ne pas en ajouter pour un bénéfice SERP Google.

## 5. Performance / Core Web Vitals — 52/100

> Mesures **lab/analytiques** (pas de field data CrUX — aucune clé API PageSpeed configurée).

**[Critical]** Image hero en `loading="lazy"` sans `priority`/`fetchpriority` ; c'est le **logo SVG** qui est préchargé. LCP lab estimé ~2,8-3,5 s. → `priority` sur le `<Image>` hero.
**[Medium]** CSS 214 KB (Tailwind possiblement non purgé, render-blocking) ; GTM préchargé en `<head>` (INP) → `next/script afterInteractive` ; bundle JS ~992 KB / 15 chunks (coût d'hydratation INP).
**Forces :** Vercel CDN cache HIT, assets `immutable` 1 an, fonts `font-display: swap`.

## 6. AI Search Readiness (GEO) — 47/100

Crawlers IA autorisés, SSR complet. **[High]** Contenu non citable (FAQ/corps sans données ; fenêtre optimale 134-167 mots). **[Medium]** Pas de YouTube dans `sameAs` (corrélation citation IA la plus forte ~0,737) ; pas de `dateModified`. **[Low]** `llms.txt` absent (404).

## 7. Images — 50/100

Alt text présent, WebP via next/image, ImageObject bien formés. **[High]** Seulement **4 vraies photos** de projets (toutes cuisine) sur 334 entrées — bathroom/walk-in/commercial/sous-sol en générique/stock. **[Medium]** Home absente de `sitemap-images.xml`.

## 8. Local SEO — 47/100

Atelier physique réel (18625 Rue Larocque, Pierrefonds-Roxboro H9K 1P1), areaServed défini, pages services dédiées, `tel:` sur /contact.
**[Critical]** **0 avis / pas d'AggregateRating → Map Pack non gagné** (cause directe des rankings locaux à 0 clic).
**[High]** Téléphone non cliquable hors /contact (514-820-0773 seulement dans le DOM JS) ; incohérence de nom GBP probable (`Dilamco` vs `/place/Dilamco+Construction/`).
**[Medium]** Pas de pages de zones (`/projets/montreal` → 404) ; Bing Places / Apple Business Connect absents (Bing = source ChatGPT local).

## 9. SXO / Search Experience — 54/100

**[High]** Persona B2B (designers/architectes) **sans point d'entrée** (ni page, ni portfolio commercial, ni brief pro). Profondeur /espaces/cuisine ~1300 mots vs 1800-2500 chez les concurrents (Grifon, Ateliers Jacob). **[Medium]** 0 témoignage sur tout le site → freine le passage en top 3 (ex. vanité Laval ~pos 7).

---

## Méthodologie & limites

- Audit orchestré par 8 agents spécialistes (Technical, Content, Schema, Sitemap, Performance, GEO, SXO, Local) + données réelles **GSC** (property `sc-domain:dilamco.com`) et **GA4** (property 390234849) via MCP.
- Performance = **lab uniquement** (pas de CrUX field data).
- Catégorie GBP, note/nombre d'avis, positions exactes du Local Pack : non vérifiables sans accès au tableau de bord GBP / DataForSEO.
- Backlinks : non audités en profondeur (tier Common Crawl seulement).

Détail par catégorie : voir `findings/*.md`. Plan d'action priorisé : voir `ACTION-PLAN.md`.
