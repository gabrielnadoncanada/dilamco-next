---
name: seo-daily
description: "Routine SEO quotidienne Dilamco : mesurer (GA4 + GSC), trouver les meilleures opportunités de clics organiques par ROI (volume × valeur ÷ difficulté via DataForSEO), exécuter UNE action incrémentale, et journaliser. Objectif : augmenter le trafic ORGANIQUE (aujourd'hui surtout Direct). Utiliser quand on dit : routine SEO, analyse SEO du jour, opportunités mots-clés, quels keywords ranker, améliorer le référencement aujourd'hui, seo quotidien."
argument-hint: "[ (vide = run complet) | report (analyse seule) | kw (analyse mots-clés) | execute (juste l'action) ]"
user-invocable: true
metadata:
  author: Gabriel + Claude
  category: dilamco-seo
---

# seo-daily — Routine SEO quotidienne Dilamco

Chaque jour : **mesurer → trouver la meilleure opportunité (ROI) → exécuter UNE action incrémentale → journaliser**. But unique : **augmenter le trafic ORGANIQUE** (la majorité des visites vient aujourd'hui du Direct). Tout est incrémental et tracé dans `docs/seo/journal/SUIVI.md`.

## 🔴 Règles d'or (erreurs déjà commises — à ne PAS refaire)
1. **Ne JAMAIS patcher un symptôme.** Un 0-clic en pos #1 = le plus souvent **Local Pack** ou **cannibalisation**, PAS un bug. **Vérifier en SERP live** (DataForSEO) avant de conclure ou toucher au code.
2. **Le code SEO du site est déjà soigné** (snippets, redirections, schema, hreflang). Ne PAS micro-retoucher des titres pour « faire semblant d'agir ». Les vrais gains = **contenu nouveau, profondeur, maillage interne, autorité (backlinks), Local/GBP**.
3. **Repenser la structure AVANT d'implémenter.** Lire les fichiers existants (page-builder, data, i18n) et **reproduire les patterns validés**, pas inventer.
4. **Toujours BUILD VERT** (`pnpm build`) avant de déclarer terminé. Vérifier aussi la présence des URLs/hreflang dans `public/sitemap-0.xml`.
5. **Séparer CODE (Claude) et HORS-CODE (Gabriel)** : GA4 Admin, GBP, avis clients, demande d'indexation GSC sont à faire par Gabriel. Les lister explicitement.
6. **Incrémental** : UNE action bien faite + buildée + tracée > 10 demi-mesures. Toujours lire `SUIVI.md` au début et le mettre à jour à la fin.

## Accès & outils
- **GA4** : MCP `mcp__ga4__*`, propriété **390234849** (charger via `ToolSearch select:mcp__ga4__run_report,...`). Fonctionne directement.
- **GSC** : le MCP `gsc` n'est **pas toujours exposé** en session. Si absent → **déléguer à l'agent `claude-seo:seo-google`** (interroge l'API GSC via le compte de service `C:\Users\gabri\.config\gcp\ga4-gsc-mcp.json`, propriété `sc-domain:dilamco.com`). Lui demander un rapport structuré (perf 28j vs préc., top requêtes/pages, quick wins, mouvements, sitemaps).
- **DataForSEO** : MCP `mcp__dfs-mcp__*` (`kw_data_google_ads_search_volume`, `dataforseo_labs_bulk_keyword_difficulty`, `dataforseo_labs_google_ranked_keywords`, `serp_organic_live_advanced`, `dataforseo_labs_google_keyword_ideas`).

## Pièges data (vécus — éviter de s'y reprendre)
- **Volumes** : location `Quebec,Canada` (PAS « Canada » national qui surévalue). lang `fr`.
- **DataForSEO tronque** les grosses réponses MCP → demander par **lots de ~10 mots-clés** max.
- **KD (`bulk_keyword_difficulty`) revient souvent VIDE** (cache) → recontrôler un autre jour ; ne JAMAIS conclure « facile » sur une valeur manquante.
- **`ranked_keywords` (niveau Canada)** ne montre que les KW à volume national → pour le local, croiser avec **GSC + SERP live Montréal**.
- GSC a un **lag de 2-3 jours**. GA4 timezone America/Toronto.

## Procédure
Optionnel : `$ARGUMENTS` = `report` (étapes 1-5 sans action), `kw` (étape 4 seule), `execute` (action déjà décidée). Vide = run complet.

1. **Lire `docs/seo/journal/SUIVI.md`** → actions passées, positions à surveiller, backlog priorisé. Mesurer l'effet des actions précédentes (les positions ont-elles bougé ?).
2. **Santé** : GA4 (sessions par canal 28j vs préc.) + GSC (clics/impressions/CTR/position + top requêtes/pages). Détecter tendance & anomalies.
3. **Conversions** : GA4 `generate_lead` / événements clés. ⚠️ Vérifier que `generate_lead` est marqué **événement clé** (trou connu — sinon, 0 conversion mesurée).
4. **Analyse KW ROI (cœur)** : pour les cibles (cuisine sur mesure, armoire(s) de cuisine sur mesure, vanité, walk-in, garde-robe, rénovation, géo Montréal/Laval/Ouest-de-l'Île, collections boutique) → croiser **volume × valeur commerciale ÷ difficulté**. Confirmer en **SERP live** les « portes manquantes » (où on est absent). Prioriser **sur-mesure + géo (KD bas, lead à forte valeur)** avant les gros volumes produit (KD ~100, dominés par grandes surfaces).
5. **Quick wins GSC** : requêtes pos 5-20, impressions ≥ 50, CTR faible.
6. **Décider UNE action** à plus fort ROI réalisable aujourd'hui. Annoncer impact/effort.
7. **Implémenter** : lire la structure → modifier → `pnpm build` vert → vérifier le sitemap.
8. **Journaliser** : créer `docs/seo/live-data-AAAA-MM-JJ.md` (+ `keyword-opportunities-AAAA-MM-JJ.md` si analyse KW) ET **mettre à jour `docs/seo/journal/SUIVI.md`** (action faite, KW ciblés, position de départ à surveiller, actions hors-code pour Gabriel). Mettre à jour les **mémoires** si fait durable nouveau.

## Structure du site (rappels pour ne pas se tromper)
- **Pages = page-builder.** Espaces → `data/page-builder/space-pages/`, rénovation → `renovation-pages/`, matériaux → `material-pages/`, statiques → `static-pages/`, services → `service-pages/`. Routes dynamiques `app/[locale]/.../[type]/page.tsx` via `createPageCollection` (publicSlugs + getBySlug). Une nouvelle page = créer `<slug>.ts` + `<slug>.en.ts`, l'ajouter à l'`index.ts` de la collection (maps FR + EN).
- **Slugs i18n** : `seo/i18n-path.ts` (`RENOVATION_EN`, `SPACE_EN`, `MATERIAL_EN`, `BOUTIQUE_TAXON_EN`, `PROJECT_SLUG_EN`) **ET** `next-sitemap.config.js` (**DUPLIQUÉ en CJS — modifier les DEUX**, sinon hreflang faux). Le routing externe est généré automatiquement par `i18n/routing.ts`. FR à la racine, EN sous `/en` avec slug traduit.
- **Blocks/variants validés** (réutiliser, ne pas inventer) : `hero/split-image`, `split/{text-divider-cards,list-actions-image-card,badges-checklist-cta}`, `process/horizontal-steps-cards`, `grid/{icon-cards-bullets,image-cards-slider}`, `faq/accordion`, `cta/band-split-actions`. Copier la forme des props d'une page existante (validation Zod au build).
- **Sitemap** : auto-généré depuis le build (postbuild `next-sitemap`). Pas d'action manuelle, sauf le slug i18n ci-dessus.
- **Contraintes dures** : `/landing/**` toujours noindex + hors sitemap. Jamais d'or/accent `#c4a574` en UI. Ne pas utiliser /design-sync.

## Traçabilité
- **Registre cumulatif** : `docs/seo/journal/SUIVI.md` — lu au début, mis à jour à la fin de CHAQUE run. C'est la mémoire incrémentale du projet SEO.
- **Journaux datés** : `docs/seo/live-data-AAAA-MM-JJ.md`, `docs/seo/keyword-opportunities-AAAA-MM-JJ.md`.
- **Mémoires liées** (recall auto) : `keyword-opportunities-cuisine-2026-06-29`, `boutique-keywords-verifies-2026-06-23`, `backlinks-link-gap-cibles-2026-06-28`, `seo-renovation-apres-sinistre`, `form-tracking-gtm`, `gsc-ga4-mcp-setup`, `seo-espaces-haut-de-gamme`.
