# Performance Audit — dilamco.com
**Date:** 2026-06-17
**Methode:** Lab/analytique (pas de CrUX field data — trafic insuffisant ou cle API absente). Ne pas interpreter comme des scores terrain Google.
**Pages auditees:** `/` (home FR) + `/projets/cuisine/cuisine-sur-mesure-montreal`
**Stack:** Next.js statique, deploye sur Vercel (Edge CDN, iad1)

---

## Scores estimes (lab)

| Metrique | Estimation lab | Seuil "Good" | Statut |
|----------|----------------|--------------|--------|
| LCP      | ~2.8–3.5s      | ≤2.5s        | FAIL (Needs Improvement) |
| INP      | ~100–180ms     | ≤200ms       | PASS (conditionnel — GTM augmente le risque) |
| CLS      | ~0.05–0.1      | ≤0.1         | PASS (limite) |
| Score global (0–100) | **52/100** | — | — |

---

## Contexte infrastructure

- **TTFB:** Excellent — Vercel CDN, reponse en cache (`X-Vercel-Cache: HIT`, Age: 17 148s), `Content-Length: 191 729 bytes` (187KB HTML)
- **Cache statique:** JS/CSS avec `Cache-Control: public, max-age=31536000, immutable` — parfait
- **Compression:** Non verifiable via HEAD (Vercel compresse en gzip/br automatiquement — JS reellement ~250–350KB transfert vs 992KB brut)
- **Prerender:** `X-Nextjs-Prerender: 1` — page bien pre-rendue, pas de SSR a la volee

---

## Finding 1 — LCP: Image hero sans fetchpriority ni preload
**Severite:** CRITIQUE (impact LCP +0.8–1.5s)

**Preuve:**
```html
<img alt="Espaces sur mesure Dilamco"
     loading="lazy"          <!-- PROBLEME: lazy sur hero above-the-fold -->
     decoding="async"
     data-nimg="fill"
     fetchpriority absent    <!-- PROBLEME: pas de high priority -->
     sizes="(min-width: 1024px) 40vw, 100vw"
     srcSet="/_next/image?url=%2Fimages%2Fgenerated%2Fspaces%2Fespaces-hero-overview-01.webp...">
```
- Aucun `<link rel="preload" as="image">` pour l'image hero dans le `<head>`
- Le preload_check.py confirme: `"preload_lcp_candidate": false, "fetchpriority_high": 0`
- Ce qui est preloade a la place: le logo SVG (`/images/logo.svg`) — incorrect
- L'image hero est WebP (bon format) mais chargee avec priorite navigateur par defaut = basse

**Recommandation:**
1. Dans le composant hero, remplacer `loading="lazy"` par `loading="eager"` + ajouter `fetchpriority="high"` sur l'`<img>` Next.js (`priority` prop dans `<Image>`)
2. Ajouter dans `<head>`: `<link rel="preload" as="image" href="/images/generated/spaces/espaces-hero-overview-01.webp" fetchpriority="high" imagesizes="100vw">`
3. Supprimer le preload inutile du logo SVG (`/images/logo.svg`) — il n'est pas LCP

```jsx
// AVANT
<Image src="/images/generated/spaces/espaces-hero-overview-01.webp" fill />

// APRES
<Image src="/images/generated/spaces/espaces-hero-overview-01.webp" fill priority />
// (Next.js <Image priority> ajoute automatiquement fetchpriority="high" + preload)
```

---

## Finding 2 — GTM preloade comme script = execution anticipee
**Severite:** MOYENNE (impact INP +20–50ms, risque LCP indirect)

**Preuve:**
```html
<link rel="preload" href="https://www.googletagmanager.com/gtm.js?id=GTM-K36WBQW" as="script"/>
```
- GTM est precharge avec `as="script"` dans le `<head>` — le navigateur fetche le fichier GTM tres tot
- GTM charge ensuite GA4 + eventuellement d'autres tags tiers qui peuvent s'executer pendant la phase critique de rendu
- Aucun noscript GTM `<iframe>` detecte dans le HTML (soit absent, soit injecte cote client)
- Le script inline GTM fait 2 819 octets et tourne sur le main thread

**Recommandation:**
- Utiliser `next/script` avec `strategy="afterInteractive"` pour GTM — il ne doit PAS etre dans le `<head>` avec preload
- Supprimer le `<link rel="preload" as="script">` pour GTM
- Ajouter le noscript fallback apres `<body>` si absent

```jsx
// Dans _app.tsx ou layout.tsx
import Script from 'next/script'
<Script
  src="https://www.googletagmanager.com/gtm.js?id=GTM-K36WBQW"
  strategy="afterInteractive"
/>
```

---

## Finding 3 — JS bundle: 992KB non compresse, 15 chunks
**Severite:** MOYENNE (impact INP — hydration cost)

**Preuve:**
| Chunk | Taille brute |
|-------|-------------|
| `0qwyvt2b-g6rc.js` | 221KB |
| `0o919khyi2.a8.js` | 182KB |
| `0zutcojhtl~te.js` | 157KB |
| `03~yq9q893hmn.js` | 109KB |
| `12z~jnjkt-s1r.js` | 72KB |
| `0i78de4xcje5_.js` | 53KB |
| **TOTAL** | **~992KB** (~250–350KB transfert gzip) |

- Tous les scripts sont `async` — pas de render-blocking, c'est correct
- Le grand bundle principal (`0qwyvt2b-g6rc.js` 221KB) contient probablement React + Next.js runtime. A analyser avec `@next/bundle-analyzer`
- L'hydration de 992KB de JS sur mobile bas de gamme peut generer des long tasks >50ms sur le main thread

**Recommandation:**
- Analyser avec `ANALYZE=true npm run build` (next-bundle-analyzer) pour identifier les imports lourds
- Verifier que les images Swiper/Framer Motion/etc. sont importees dynamiquement (`next/dynamic`)
- Target: bundle page home < 200KB transfert (JS + CSS combines)

---

## Finding 4 — CLS: Images fill sans dimensions explicites
**Severite:** FAIBLE-MOYENNE (CLS potentiel ~0.05–0.1)

**Preuve:**
- Toutes les images utilisent `data-nimg="fill"` avec `position:absolute;height:100%;width:100%`
- Le parent doit avoir une hauteur definie pour eviter le CLS — si le parent n'a pas de height CSS fixe, le layout shift survient
- Sur la page projet: image hero `load=eager` sans `width`/`height` HTML attributes detectes
- Les images de la grille home ont `position:absolute` ce qui est correct SI le parent a un aspect ratio fixe

**Recommandation:**
- S'assurer que chaque conteneur `<Image fill>` a un `aspect-ratio` ou `height` CSS explicite
- Pour les images non-fill, toujours specifier `width` et `height` dans le composant Next.js `<Image>`
- Verifier avec DevTools > Performance > Layout Shifts

---

## Finding 5 — CSS: 214KB dans le bundle principal (Tailwind non purge ?)
**Severite:** FAIBLE-MOYENNE (impact LCP: render-blocking CSS)

**Preuve:**
- `0k6s53q165k58.css`: **214KB** (non compresse) — tres lourd pour une page statique
- `08y1e3_ar1-ej.css`: 2KB (fonts — correct)
- Les 2 CSS sont injectees de maniere synchrone dans `<head>` (render-blocking par nature)

**Recommandation:**
- Verifier que Tailwind CSS est configure avec purge/content correct dans `tailwind.config.js`
- 214KB de CSS suggere soit du code inutilise, soit des animations/composants UI lourds inclus globalement
- Cible: < 30KB CSS compresse pour une page home Next.js statique

---

## Finding 6 — Fonts: preload correct, font-display: swap present
**Severite:** AUCUNE (bien configure)

**Preuve:**
- 2 fichiers woff2 preleves dans `<head>` avec `rel="preload" as="font" crossorigin`
- `font-display: swap` confirme dans `08y1e3_ar1-ej.css` pour Plus Jakarta Sans (7 variantes)
- Les fonts sont self-hosted via `/_next/static/media/` — pas de requete externe bloquante

**Status:** Correct. Aucune action requise.

---

## Finding 7 — Speculationrules absent (navigation instantanee)
**Severite:** FAIBLE (opportunite LCP sur navigation)

**Preuve:** `preload_check.py` confirme `"speculation_rules": { "inline_blocks": 0 }` et `"prerender_links": 0`

**Recommandation:**
```html
<script type="speculationrules">
{
  "prefetch": [{ "where": { "href_matches": "/projets/*" }, "eagerness": "moderate" }],
  "prerender": [{ "where": { "href_matches": "/espaces/*" }, "eagerness": "conservative" }]
}
</script>
```
Permet une navigation quasi-instantanee vers les pages projets/espaces (LCP percu ~0 sur 2e visite).

---

## Finding 8 — Page projet: premiere image hero eager (bon) mais sans fetchpriority
**Severite:** MOYENNE

**Preuve (page `/projets/cuisine/cuisine-sur-mesure-montreal`):**
```
src=cuisine-haut-de-gamme-blanche-*.webp | load=eager | fp=auto | w=? | h=?
```
- Le format WebP est utilise — bon
- `loading=eager` est present sur l'image hero — correct
- Mais `fetchpriority` est absent (`fp=auto`) — le navigateur peut deprioritiser
- 4 images sur 6 sont `lazy` — acceptable pour below-the-fold

**Recommandation:** Ajouter `fetchpriority="high"` / prop `priority` sur la premiere image projet.

---

## Synthese priorites

| Priorite | Finding | Impact attendu |
|----------|---------|---------------|
| P0 | Image hero home: `priority` prop manquante | LCP -0.8–1.5s |
| P1 | CSS bundle 214KB: auditer Tailwind purge | LCP indirect -0.3s |
| P1 | GTM: migrer vers `strategy="afterInteractive"` | INP -20ms, LCP indirect |
| P2 | Bundle JS 992KB: bundle-analyzer + dynamic imports | INP -10–30ms |
| P2 | Speculationrules: prefetch/prerender top pages | LCP navigation -500ms+ |
| P3 | Image hero projet: ajouter `priority` | LCP page projet -0.3s |
| P3 | CLS: verifier hauteurs conteneurs fill images | CLS -0.02–0.05 |

---

## Notes methodologiques

- **Donnees lab uniquement** — pas de CrUX field data disponible (trafic insuffisant ou pas de cle API Google). Les scores LCP estimes sont bases sur l'analyse statique des ressources et patterns HTML, non sur des mesures Lighthouse ou terrain reelles.
- La metrique INP (Interaction to Next Paint) est utilisee — FID est supprime depuis septembre 2024.
- TTFB excellent grace a Vercel CDN (cache HIT, < 50ms probable). Le goulot d'etranglement est uniquement cote client.
- Le score 52/100 est une estimation conservative basee sur les findings critiques identifies.
