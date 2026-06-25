# Audit technique SEO - dilamco.com
Date: 2026-06-17  
Auditeur: Claude SEO Technical Skill v2.0.0  
Stack: Next.js (App Router, SSG/ISR) deploye sur Vercel, next-intl, FR racine + EN /en/*

---

## Score global: 64/100

| Categorie | Score | Statut |
|---|---|---|
| 1. Crawlabilite | 90/100 | PASS |
| 2. Indexabilite | 60/100 | NEEDS WORK |
| 3. Securite | 45/100 | FAIL |
| 4. Structure URL | 65/100 | NEEDS WORK |
| 5. Mobile | 85/100 | PASS |
| 6. Core Web Vitals | 55/100 | NEEDS WORK |
| 7. Donnees structurees | 72/100 | PASS (partiel) |
| 8. Rendu JavaScript | 88/100 | PASS |
| 9. IndexNow | 0/100 | FAIL |

---

## Findings par severite

---

### [CRITICAL] F-01 — Duplicate brand name in og:title and twitter:title (toutes les pages)

**Categorie:** Indexabilite / Social Metadata  
**Preuve:**
```
# FR home
HTML <title>: "Cuisines, vanites et armoires sur mesure a Montreal | Dilamco"
og:title:     "Cuisines, vanites et armoires sur mesure a Montreal | Dilamco | Dilamco"
twitter:title:"Cuisines, vanites et armoires sur mesure a Montreal | Dilamco | Dilamco"

# EN home (meme bug)
HTML <title>: "Custom kitchens, vanities & cabinets in Montreal | Dilamco"
og:title:     "Custom kitchens, vanities & cabinets in Montreal | Dilamco | Dilamco"
```
**Impact:** Le brand apparait deux fois dans les previews social (Facebook, LinkedIn, Twitter). Nuit a l'image de marque lors du partage. Potentiellement cause par une concatenation double dans le template Next.js metadata (titleTemplate: "| Dilamco" applique en plus du title explicite qui inclut deja "| Dilamco").  
**Correction:** Dans `src/app/[locale]/layout.tsx` (ou equivalent), verifier que `metadata.title.template` ne double pas le suffixe. Le `og:title` et `twitter:title` doivent correspondre exactement a `<title>`.

---

### [CRITICAL] F-02 — Hreflang inconsistant: HTTP Link header vs balises HTML

**Categorie:** Indexabilite / International SEO  
**Preuve:**
```bash
# HTTP Link header (Vercel middleware):
Link: <https://dilamco.com/>; rel="alternate"; hreflang="fr"
      <https://dilamco.com/en>; rel="alternate"; hreflang="en"

# HTML <head> (rendu Next.js):
<link rel="alternate" hrefLang="fr-CA" href="https://dilamco.com"/>
<link rel="alternate" hrefLang="en-CA" href="https://dilamco.com/en"/>
```
**Impact:** Google recoit deux signaux contradictoires: `fr` (header HTTP) vs `fr-CA` (HTML). Pour un site localise Quebec/Canada, `fr-CA` et `en-CA` sont les valeurs correctes. Le header HTTP devrait soit etre supprime, soit aligne avec les codes region. Google peut ignorer ou invalider les annotations hreflang si elles sont incompletes ou contradictoires.  
**Correction:** Dans le middleware Vercel (ou `next.config.ts`), soit supprimer l'injection de l'en-tete `Link` (laisser uniquement les balises HTML), soit l'aligner sur `fr-CA`/`en-CA`/`x-default`.

---

### [CRITICAL] F-03 — LCP hero image: lazy loading sans fetchpriority=high

**Categorie:** Core Web Vitals (LCP)  
**Preuve:**
```html
<!-- Image hero au-dessus du fold: -->
<img alt="Espaces sur mesure Dilamco"
     loading="lazy"     <!-- PROBLEME: devrait etre eager ou omis -->
     decoding="async"
     fetchpriority absent    <!-- PROBLEME: manque fetchpriority="high" -->
     src="/_next/image?url=%2Fimages%2Fgenerated%2Fspaces%2Fespaces-hero-overview-01.webp...">

<!-- Preloads presents: seulement 2 fonts + logo.svg -->
<!-- Aucun preload pour l'image hero -->
```
**Impact:** L'image hero (LCP candidate) est marquee `loading="lazy"`, ce qui retarde son chargement jusqu'a ce qu'elle entre dans le viewport. Combine avec l'absence de `fetchpriority="high"` et de `<link rel="preload">` correspondant, cela degrade le LCP de facon significative (potentiellement +500ms a +1500ms). Avec 28 scripts async sur la page, le thread principal est concurrence.  
**Correction:**
1. Sur le composant Next.js `<Image>` de la hero: ajouter `priority={true}` (genere automatiquement `loading="eager"` + `fetchpriority="high"` + un preload tag).
2. Verifier que le composant hero n'est pas wrap dans un `loading="lazy"` explicite qui surcharge Next.js Image.

---

### [HIGH] F-04 — Headers de securite manquants (5 sur 6 absents)

**Categorie:** Securite  
**Preuve:**
```bash
curl -sI https://dilamco.com/
# Present:
Strict-Transport-Security: max-age=63072000  # manque includeSubDomains + preload
# ABSENTS:
X-Content-Type-Options       # MISSING
X-Frame-Options              # MISSING
Content-Security-Policy      # MISSING
Permissions-Policy           # MISSING
Referrer-Policy              # MISSING
```
**Impact:** Sans `X-Content-Type-Options: nosniff`, risque de MIME sniffing. Sans `X-Frame-Options`, risque de clickjacking. Sans `Referrer-Policy`, les URLs internes sont exposees en referrer. Note: HSTS est present (2 ans) mais sans `includeSubDomains` ni `preload` (requis pour le HSTS preload list de Chrome).  
**Correction:** Dans `next.config.ts`, section `headers()`:
```js
{ key: 'X-Content-Type-Options', value: 'nosniff' },
{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
// HSTS avec includeSubDomains:
{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
```

---

### [HIGH] F-05 — Sitemap sans hreflang annotations (xhtml:link manquant)

**Categorie:** Crawlabilite / International SEO  
**Preuve:**
```bash
curl -s https://dilamco.com/sitemap-0.xml | grep xhtml:link
# Resultat: 0 occurrences

# Verifier:
xhtml:link annotations: 0 (sur 80 URLs)
FR URLs: 40, EN URLs: 40
```
**Impact:** Google recommande d'annoter les sitemaps avec `xhtml:link` pour les sites multilingues. Sans cela, Google doit decouvrir les equivalents hreflang uniquement via les balises HTML, ce qui est plus lent et moins fiable pour l'indexation de la version EN.  
**Correction:** Dans le generateur de sitemap (`src/app/sitemap.ts` ou plugin next-sitemap), ajouter les annotations `alternates` pour chaque paire FR/EN:
```xml
<url>
  <loc>https://dilamco.com/espaces/cuisine</loc>
  <xhtml:link rel="alternate" hreflang="fr-CA" href="https://dilamco.com/espaces/cuisine"/>
  <xhtml:link rel="alternate" hreflang="en-CA" href="https://dilamco.com/en/spaces/kitchen"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://dilamco.com/espaces/cuisine"/>
</url>
```

---

### [HIGH] F-06 — Sitemap index pointe vers sitemap-0.xml uniquement (sitemap-images.xml absent du sitemap index)

**Categorie:** Crawlabilite  
**Preuve:**
```bash
curl -s https://dilamco.com/sitemap.xml
# Contenu:
<sitemapindex>
  <sitemap><loc>https://dilamco.com/sitemap-0.xml</loc></sitemap>
  # sitemap-images.xml N'EST PAS reference ici
</sitemapindex>

# Pourtant robots.txt reference les deux:
Sitemap: https://dilamco.com/sitemap.xml
Sitemap: https://dilamco.com/sitemap-images.xml   # OK via robots.txt
```
**Impact:** Le sitemap image (334 images sur 74 pages) n'est pas inclus dans le sitemap index. Google le trouvera via robots.txt mais la soumission manuelle dans GSC ne couvrira que le sitemap-0.xml. Risque de sous-indexation des images.  
**Correction:** Ajouter `sitemap-images.xml` dans le sitemap index:
```xml
<sitemapindex>
  <sitemap><loc>https://dilamco.com/sitemap-0.xml</loc></sitemap>
  <sitemap><loc>https://dilamco.com/sitemap-images.xml</loc></sitemap>
</sitemapindex>
```

---

### [HIGH] F-07 — IndexNow non implemente

**Categorie:** IndexNow  
**Preuve:**
```bash
curl -sI https://dilamco.com/indexnow  -> 404
curl -s https://dilamco.com/ | grep -i indexnow -> 0 occurrences
# Aucune cle de verification, aucune balise meta, aucune route API
```
**Impact:** Bing, Yandex et Naver utilisent IndexNow pour l'indexation en temps reel. Sans ce protocole, les nouvelles pages et modifications de contenu peuvent prendre des semaines a etre indexees sur ces moteurs.  
**Correction:**
1. Generer une cle UUID: `python -c "import uuid; print(uuid.uuid4())"`
2. Deposer le fichier `{cle}.txt` dans `/public/` avec la cle comme contenu
3. Implementer une API route ou un hook de build pour pinger `https://api.indexnow.org/indexnow` a chaque deploy

---

### [MEDIUM] F-08 — Slugs EN non traduits dans /en/materials/*

**Categorie:** Structure URL  
**Preuve:**
```
EN URLs indexees dans sitemap:
https://dilamco.com/en/materials/bois-massif    # devrait etre /solid-wood
https://dilamco.com/en/materials/contreplaque   # devrait etre /plywood
https://dilamco.com/en/materials/quincaillerie  # devrait etre /hardware
https://dilamco.com/en/materials/couleurs       # devrait etre /colors
# mdf et melamine sont techniquement acceptables en EN
```
**Impact:** URLs EN avec mots francais = mauvaise UX pour visiteurs anglophones + signal de langue dilue pour Google. L'utilisateur anglophone qui voit `/en/materials/bois-massif` dans les SERPs peut avoir un doute sur la langue du contenu.  
**Note:** Les slugs de services et espaces sont correctement traduits (ex: `/en/spaces/kitchen`, `/en/services/renovation/bathroom`). Le probleme est localise aux materiaux.  
**Correction:** Traduire les slugs: `bois-massif -> solid-wood`, `contreplaque -> plywood`, `quincaillerie -> hardware`, `couleurs -> colors`. Mettre en place des redirects 301 des anciens slugs vers les nouveaux.

---

### [MEDIUM] F-09 — Sitemaps sans lastmod

**Categorie:** Crawlabilite  
**Preuve:**
```bash
grep -c '<lastmod>' sitemap-0.xml  -> 0
grep -c '<lastmod>' sitemap-images.xml  -> 0
```
**Impact:** Sans `lastmod`, Googlebot ne peut pas prioriser les pages recemment modifiees. Pour un site avec 80 URLs, l'impact est modere mais la bonne pratique recommande d'inclure des dates de modification.  
**Correction:** Dans le generateur de sitemap, ajouter `lastmod: new Date().toISOString()` ou mieux, la date de derniere modification reelle du fichier/contenu.

---

### [MEDIUM] F-10 — Pages "thin content" projet sans photos (ex: /projets/salle-de-lavage)

**Categorie:** Indexabilite  
**Preuve:**
```bash
curl -s https://dilamco.com/projets/salle-de-lavage
HTML size: 54,313 bytes
Mots approximatifs (texte depouillee du HTML): ~736 mots
# Titre: "Projets salle de lavage sur mesure | Dilamco"
# Pas de noindex - page indexee
```
**Impact:** Les pages de gallery projet sans photos reelles constituent du contenu mince (thin content). Google peut les devaluer. Identifie dans les notes projet: "pages projet du nouveau site = coquilles vides".  
**Correction:** Soit ajouter du contenu (photos + descriptions de projet), soit ajouter `<meta name="robots" content="noindex, follow">` temporairement jusqu'a ce que le contenu soit pret.

---

### [MEDIUM] F-11 — LocalBusiness schema sans geo coordinates ni openingHours

**Categorie:** Donnees structurees  
**Preuve:**
```json
{
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://dilamco.com/#localbusiness",
  "address": { "streetAddress": "18625 Rue Larocque", ... },
  // MANQUANT:
  // "geo": { "@type": "GeoCoordinates", "latitude": 45.4537, "longitude": -73.8924 },
  // "openingHours": ["Mo-Fr 08:00-17:00"],
  // "hasMap": "https://goo.gl/maps/...",
  // "@id" cross-reference vers Organization
}
```
**Impact:** Les coordonnees geo et les heures d'ouverture sont des signaux forts pour le Local Pack Google. Leur absence reduit les chances d'apparaitre dans les resultats locaux enrichis.  
**Correction:** Ajouter `geo`, `openingHours`, `hasMap` et une reference `parentOrganization` vers `#organization` dans le schema `HomeAndConstructionBusiness`.

---

### [MEDIUM] F-12 — HSTS sans includeSubDomains ni preload flag

**Categorie:** Securite  
**Preuve:**
```
Strict-Transport-Security: max-age=63072000
# Manque: includeSubDomains; preload
# max-age = 730 jours (acceptable, mais 1 an minimum recommande pour preload list)
```
**Impact:** Sans `includeSubDomains`, les sous-domaines (ex: admin.dilamco.com) ne sont pas proteges par HSTS. Sans `preload`, le site n'est pas eligible au HSTS preload list du navigateur (protection contre les attaques SSL stripping meme a la premiere visite).  
**Correction:** `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (verifier d'abord que tous les sous-domaines supportent HTTPS).

---

### [LOW] F-13 — og:url sur la home FR utilise https://dilamco.com sans slash final

**Categorie:** Indexabilite / Social  
**Preuve:**
```html
<meta property="og:url" content="https://dilamco.com"/>
<!-- Le canonical est: https://dilamco.com/ (avec slash) -->
<link rel="canonical" href="https://dilamco.com/"/>
```
**Impact:** Inconsistance mineure entre og:url (sans slash) et canonical (avec slash). Peut creer une fragmentation de signal sur certains outils de partage social.  
**Correction:** Aligner og:url sur la valeur canonique exacte: `https://dilamco.com/`.

---

### [LOW] F-14 — Access-Control-Allow-Origin: * sur toutes les pages HTML

**Categorie:** Securite  
**Preuve:**
```
Access-Control-Allow-Origin: *
```
**Impact:** Pour des pages HTML, ce header est inutile et potentiellement risque. CORS `*` sur les ressources HTML peut autoriser des sites tiers a lire le contenu de la page via fetch(). Pour Vercel, ce header est souvent ajoute par defaut.  
**Correction:** Limiter `Access-Control-Allow-Origin: *` aux ressources statiques (images, fonts, JS) si necessaire. Supprimer des reponses HTML de page.

---

### [LOW] F-15 — Refresh header sur les redirections 308

**Categorie:** Structure URL  
**Preuve:**
```bash
curl -sI https://dilamco.com/en/
# HTTP/1.1 308 Permanent Redirect
# Location: /en
# Refresh: 0;url=/en    <- redondant avec 308
```
**Impact:** L'en-tete `Refresh` est un mecanisme de secours JavaScript-free obsolete. Il est redondant avec le code 308. Pas d'impact SEO direct, mais ajoute du bruit dans les headers.  
**Correction:** Supprimer l'injection du header `Refresh` dans la config Vercel/Next.js si possible.

---

## Resume par categorie

### 1. Crawlabilite (90/100) - PASS
- robots.txt: propre, Allow all, 2 sitemaps references
- sitemap-0.xml: 80 URLs (40 FR + 40 EN), bien forme
- Aucun Disallow problematique
- Issues: sitemap-images.xml absent du sitemap index (F-06), pas de lastmod (F-09)

### 2. Indexabilite (60/100) - NEEDS WORK
- Canonicals: presents et corrects sur toutes les pages testees
- Meta robots: /landing correctement noindex; pages projet thin non noindexees (F-10)
- Hreflang: present en HTML et HTTP header MAIS codes inconsistants fr vs fr-CA (F-02)
- og:title duplique "| Dilamco" sur toutes les pages (F-01)

### 3. Securite (45/100) - FAIL
- HTTPS: OK, HTTP -> HTTPS redirect 308 fonctionnel
- www -> non-www: redirect 308 fonctionnel
- HSTS: present (2 ans) mais incomplet - manque includeSubDomains + preload (F-12)
- 5 headers de securite critiques manquants: X-Content-Type-Options, X-Frame-Options, CSP, Permissions-Policy, Referrer-Policy (F-04)
- CORS * sur pages HTML (F-14)

### 4. Structure URL (65/100) - NEEDS WORK
- URLs propres et semantiques, tirets correctement utilises
- Slugs EN traduits pour espaces et services
- Slugs EN non traduits pour /materials/* (6 pages) (F-08)
- Refresh header redondant sur 308 (F-15)

### 5. Mobile (85/100) - PASS
- viewport: `width=device-width, initial-scale=1` present et correct
- Composants UI avec data-size attributes (sm/lg) suggerant des touch targets adequats
- Pas de `maximum-scale` bloquant le zoom

### 6. Core Web Vitals (55/100) - NEEDS WORK
- SSR confirme: 76 noeuds de texte visibles dans le HTML brut, contenu present sans JS
- Hero image loading="lazy" sans fetchpriority="high" = degradation LCP certaine (F-03)
- 28 scripts async sur la page home
- 2 fonts preloadees (bon)
- Logo SVG preloade (bon)
- Pas de preload pour l'image hero
- CLS: pas de layout shift evident identifiable depuis le HTML statique

### 7. Donnees structurees (72/100) - PASS partiel
- 11 blocs ld+json sur la home: Organization, HomeAndConstructionBusiness, BreadcrumbList, FAQPage, ImageObject (x6+)
- Organization: telephone, email, sameAs (Google Maps, FB, LinkedIn) presents
- HomeAndConstructionBusiness: adresse complete, areaServed detaille, priceRange
- Manque: geo coordinates, openingHours, hasMap, cross-reference @id Organization (F-11)
- BreadcrumbList present sur les sous-pages (cuisine teste)

### 8. Rendu JavaScript (88/100) - PASS
- Next.js App Router SSG/ISR avec X-Nextjs-Prerender: 1 confirme
- HTML complet: headings H1-H6, paragraphes, nav, liens presents dans le HTML brut
- Pas de contenu exclusivement dans le RSC payload JavaScript
- X-Vercel-Cache: HIT sur la majorite des pages = bonnes performances de cache edge

### 9. IndexNow (0/100) - FAIL
- Aucune implementation: pas de fichier de cle, pas de balise meta, pas d'API endpoint (F-07)
- Site accessible sur Bing mais indexation passive uniquement

---

## Priorite d'action recommandee

| Priorite | Finding | Effort | Impact SEO |
|---|---|---|---|
| P1 | F-01 og:title double brand | Faible (1 ligne config) | Moyen (branding) |
| P1 | F-03 Hero image priority | Faible (1 prop Next.js Image) | Eleve (LCP Core Web Vitals) |
| P2 | F-04 Security headers | Faible (next.config.ts) | Moyen (securite/confiance) |
| P2 | F-02 Hreflang inconsistant | Moyen (middleware) | Moyen (SEO international) |
| P2 | F-05 Sitemap xhtml:link | Moyen (generateur sitemap) | Moyen (indexation EN) |
| P3 | F-07 IndexNow | Faible (fichier + API) | Faible-Moyen (Bing) |
| P3 | F-06 Sitemap index images | Faible (1 ligne XML) | Faible (image search) |
| P3 | F-08 Slugs EN materiaux | Moyen (redirects + routes) | Faible (UX + signal lang) |
| P4 | F-11 Schema geo+hours | Faible | Moyen (Local Pack) |
| P4 | F-10 Thin content projets | Eleve (contenu a creer) | Moyen (qualite) |
| P5 | F-09 lastmod sitemap | Faible | Faible |
| P5 | F-12 HSTS complet | Faible | Faible |
| P5 | F-13 og:url slash | Minimal | Minimal |
