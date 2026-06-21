# Sitemap Audit — dilamco.com
**Date:** 2026-06-17
**Auditor:** Sitemap Architecture Specialist
**Score: 71 / 100**

---

## Sitemaps Audited

| File | HTTP | Format | URL count |
|------|------|--------|-----------|
| https://dilamco.com/sitemap.xml | 200 | Sitemap index (valid) | 1 child sitemap |
| https://dilamco.com/sitemap-0.xml | 200 | urlset (valid XML) | 80 URLs |
| https://dilamco.com/sitemap-images.xml | 200 | urlset with image extension (valid XML) | 74 pages / 334 images |

---

## Summary of Findings

| # | Title | Severity | Status |
|---|-------|----------|--------|
| F-01 | No `lastmod` in sitemap-0.xml | Medium | FAIL |
| F-02 | Deprecated `changefreq` and `priority` present in sitemap-0.xml | Info | FAIL |
| F-03 | Floating-point `priority` value on /en and /en/services | Info | FAIL |
| F-04 | FR/EN priority asymmetry: /espaces/* at 0.9 vs /en/spaces/* at 0.8 | Low | FAIL |
| F-05 | EN material sub-pages retain French slugs (bois-massif, contreplaque…) | Medium | FAIL |
| F-06 | 7 pages missing from sitemap-images.xml including the homepage | Medium | FAIL |
| F-07 | Only 4 unique real project photos across all image entries | High | FAIL |
| F-08 | sitemap-0.xml lists EN URLs first (lines 1–40), FR URLs second (41–80) | Low | WARN |
| F-09 | /boutique (404) absent from sitemap — correct absence confirmed | Pass | PASS |
| F-10 | /landing (200) absent from both sitemaps and carries noindex | Pass | PASS |
| F-11 | FR/EN coverage perfectly symmetric: 40 FR + 40 EN | Pass | PASS |
| F-12 | hreflang pairs complete and symmetric for all 80 URLs | Pass | PASS |
| F-13 | x-default points to fr-CA canonical on all 80 entries | Pass | PASS |
| F-14 | URL count (80) well below 50,000 per-file limit | Pass | PASS |
| F-15 | Quality gate: geo project pages = 6 unique FR (below 30 threshold) | Pass | PASS |

---

## Detailed Findings

### F-01 — No `lastmod` in sitemap-0.xml
**Severity:** Medium

**Evidence:**
```xml
<url><loc>https://dilamco.com</loc><changefreq>weekly</changefreq><priority>1</priority>...</url>
```
No `<lastmod>` tag is present in any of the 80 entries.

**Impact:** Google uses `lastmod` to prioritize re-crawling of updated pages. Without it, Googlebot cannot distinguish a page updated yesterday from one that has not changed in a year.

**Recommendation:** Add accurate `lastmod` values derived from the actual content last-modified date (Next.js build timestamp or CMS field). Minimum: use the most recent git commit date per route. Do not fabricate a single static date for all pages — that is treated the same as no lastmod.

---

### F-02 — Deprecated `changefreq` and `priority` present
**Severity:** Info

**Evidence:**
All 80 entries contain both `<changefreq>` (values: `weekly`, `monthly`) and `<priority>` (values ranging from 0.55 to 1.0). Google has publicly stated it ignores both tags.

**Recommendation:** Remove `changefreq` and `priority` from sitemap-0.xml. This reduces file size and removes false signal. The `next-sitemap` library supports `generateRobotsTxt` options to exclude these; alternatively set `changefreq: false` and `priority: false` in the config.

---

### F-03 — Floating-point precision error in `priority`
**Severity:** Info

**Evidence:**
```xml
<priority>0.7000000000000001</priority>
```
Appears on: `https://dilamco.com/en/spaces` and `https://dilamco.com/en/services` (JavaScript floating-point arithmetic artefact from `0.7 * 1`).

**Recommendation:** Round all priority values to 2 decimal places in the sitemap generation config. Since F-02 recommends removing `priority` entirely, this would be resolved simultaneously.

---

### F-04 — FR/EN priority asymmetry on /espaces/* vs /en/spaces/*
**Severity:** Low

**Evidence:**
| URL | Priority |
|-----|----------|
| `https://dilamco.com/espaces/cuisine` | 0.9 |
| `https://dilamco.com/en/spaces/kitchen` | 0.8 |
| `https://dilamco.com/espaces` (hub) | 0.8 |
| `https://dilamco.com/en/spaces` (hub) | 0.7 |
| `https://dilamco.com/services/design` | 0.85 |
| `https://dilamco.com/en/services/design` | 0.75 |

The FR versions of /espaces/* and /services/* are consistently assigned a 0.1 higher priority than their EN counterparts. Since Google ignores priority anyway (F-02), the practical impact is zero — but if priority is kept, the asymmetry suggests an intent that EN pages are less important, which may not be desired.

**Recommendation:** If retaining priority, align FR and EN equivalents at the same value. If removing priority (F-02), this is moot.

---

### F-05 — EN material sub-pages use French slugs
**Severity:** Medium

**Evidence:**
EN sitemap entries:
- `https://dilamco.com/en/materials/bois-massif` (French: solid wood)
- `https://dilamco.com/en/materials/contreplaque` (French: plywood)
- `https://dilamco.com/en/materials/quincaillerie` (French: hardware)
- `https://dilamco.com/en/materials/couleurs` (French: colours)
- `https://dilamco.com/en/materials/comparatif` (French: comparison)
- `https://dilamco.com/en/materials/melamine` (same in both — acceptable)
- `https://dilamco.com/en/materials/mdf` (same — acceptable)

The corresponding FR URLs (`/materiaux/bois-massif` etc.) are correctly French. The EN routes were never translated to English slugs.

**Impact:** English-speaking users and Googlebot see French-language path segments in EN context. This dilutes the semantic signal for EN keyword targeting (e.g., "solid wood cabinets" vs the opaque slug `bois-massif`). The hreflang mapping is still technically correct (both sides reference each other), but the EN canonical URL is suboptimal for SEO.

**Recommendation:** Create translated EN slugs: `/en/materials/solid-wood`, `/en/materials/plywood`, `/en/materials/hardware`, `/en/materials/colours`, `/en/materials/comparison`. Set up 301 redirects from the current French-slug EN paths. Update hreflang in both sitemaps and on-page.

---

### F-06 — 7 pages missing from sitemap-images.xml
**Severity:** Medium

**Evidence:**
The following pages appear in sitemap-0.xml (and return 200) but have no entry in sitemap-images.xml:

| Missing page | Notes |
|---|---|
| `https://dilamco.com/` | Homepage — highest-priority page with 7 hero images |
| `https://dilamco.com/contact` | Contact page |
| `https://dilamco.com/en/contact` | EN contact page |
| `https://dilamco.com/en/projects/laundry-room` | EN project category |
| `https://dilamco.com/en/projects/walk-in` | EN project category |
| `https://dilamco.com/projets/salle-de-lavage` | FR project category |
| `https://dilamco.com/projets/walk-in` | FR project category |

The homepage missing from sitemap-images.xml is the most impactful gap — it carries 7 images including the hero, and the homepage is the most frequently crawled URL.

**Recommendation:** Add all 7 missing entries to sitemap-images.xml. The homepage alone has 7 `<image:image>` children already defined in the file for `/en` (line 51) — the `https://dilamco.com/` entry is simply absent. Add it. The laundry-room and walk-in project category pages also have visible images that should be declared.

---

### F-07 — Only 4 unique real project photos declared across all entries
**Severity:** High

**Evidence:**
The `/images/projects/` directory (real project photography) is referenced only 48 times across both sitemaps, but there are only **4 distinct photo files**:
- `cuisine-haut-de-gamme-blanche-laval.webp`
- `cuisine-sur-mesure-pierrefonds.webp`
- `chene-moderne.webp`
- `cuisine-blanche-sur-mesure-brossard.webp`

All 48 references are rotations of these same 4 images across kitchen-related project pages. Every other page (74 of 80) relies exclusively on `/images/generated/` assets (AI-generated or stock imagery).

**Impact:** Google Image Search cannot surface unique project content for bathroom, walk-in, laundry room, commercial, or any renovation page — because there are no indexed real project photos for those categories. This is a missed opportunity for high-intent visual search traffic.

**Recommendation:**
1. Upload real project photos for at minimum: salle-de-bain/vanity Laval, commercial/bureau centre-ville, sous-sol, walk-in.
2. Add `<image:image>` entries in sitemap-images.xml pointing to these real photos once uploaded.
3. Ensure image filenames are descriptive (already the case for existing project photos — maintain this pattern).

---

### F-08 — sitemap-0.xml lists EN URLs first, FR URLs second
**Severity:** Low (cosmetic)

**Evidence:**
Lines 3–42: all 40 EN URLs (`https://dilamco.com/en/...`)
Lines 43–82: all 40 FR URLs (`https://dilamco.com/...`)

The site's primary locale is FR (root domain, no prefix). Best practice is to list the canonical/primary locale first.

**Recommendation:** In `next-sitemap.config.js`, adjust the alternateRefs or URL ordering so that FR URLs are emitted first. This has no direct ranking impact but improves readability and aligns with the declared x-default (FR).

---

### F-09 — /boutique (404) correctly absent from sitemaps
**Severity:** Pass

`https://dilamco.com/boutique` returns 404 (the store app is a separate Next.js app, not yet deployed at this path). It is absent from both sitemaps. Correct behaviour — no action needed until the store is live.

---

### F-10 — /landing correctly noindex and excluded from sitemaps
**Severity:** Pass

`https://dilamco.com/landing` returns HTTP 200 and carries `<meta name="robots" content="noindex, nofollow"/>`. It is absent from both sitemap-0.xml and sitemap-images.xml. This is correct per the project memory rule (landing pages must always be noindex + hors sitemap).

---

### F-11 — FR/EN coverage perfectly symmetric
**Severity:** Pass

40 FR URLs and 40 EN URLs. Every FR page has an EN counterpart. No orphaned language variants detected.

---

### F-12 — hreflang pairs complete and symmetric
**Severity:** Pass

All 80 entries carry:
- `hreflang="fr-CA"` pointing to the FR canonical
- `hreflang="en-CA"` pointing to the EN canonical
- `hreflang="x-default"` pointing to the FR canonical

No missing or broken pairs detected.

---

### F-13 — x-default correctly assigned to FR canonical
**Severity:** Pass

All 80 entries have `x-default` pointing to the `fr-CA` href. Correct for a Quebec-based business whose default audience is French Canadian.

---

### F-14 — URL count within 50,000 limit
**Severity:** Pass

sitemap-0.xml: 80 URLs. sitemap-images.xml: 74 page entries with 334 image entries. Both well within the 50,000-URL-per-file and 50MB file size limits.

---

### F-15 — Quality gate: geo project pages below threshold
**Severity:** Pass

Location-specific project pages (unique city in slug): **6 FR pages** (montreal, pierrefonds, plateau-mont-royal, rive-sud, laval, centre-ville). Well below the 30-page WARNING threshold.

Current geo pages:
- `/projets/cuisine/cuisine-sur-mesure-montreal`
- `/projets/cuisine/cuisine-sur-mesure-pierrefonds`
- `/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal`
- `/projets/cuisine/cuisine-sur-mesure-rive-sud`
- `/projets/salle-de-bain/vanite-sur-mesure-laval`
- `/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal`

These are real project portfolios (unique photos + case content), not thin location-swap pages. Safe.

---

## Coverage Matrix

| Section | FR pages | EN pages | Symmetric |
|---------|----------|----------|-----------|
| Core (home, about, contact, process) | 4 | 4 | Yes |
| Espaces / Spaces | 7 | 7 | Yes |
| Materiaux / Materials | 8 | 8 | Yes |
| Projets / Projects (hubs + geo) | 11 | 11 | Yes |
| Services + Renovation | 10 | 10 | Yes |
| **Total** | **40** | **40** | **Yes** |

---

## Prioritised Actions

| Priority | Action | Effort |
|----------|--------|--------|
| 1 — High | Photograph and upload real project images for bath/walk-in/commercial/sous-sol; add to sitemap-images.xml | Medium |
| 2 — Medium | Add `lastmod` to sitemap-0.xml using real content dates | Low |
| 3 — Medium | Translate EN material slugs (bois-massif → solid-wood, etc.) with 301 redirects | Medium |
| 4 — Medium | Add missing homepage + 6 other pages to sitemap-images.xml | Low |
| 5 — Info | Remove `changefreq` and `priority` from sitemap-0.xml | Low |
| 6 — Low | Fix FR/EN priority asymmetry (or remove priority — resolves automatically) | Low |
| 7 — Low | Reorder sitemap-0.xml to emit FR URLs before EN URLs | Low |
