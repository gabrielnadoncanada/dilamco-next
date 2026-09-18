# Dilamco

Site vitrine et boutique Dilamco (armoires / rénovation), Next.js bilingue FR/EN. FR est la langue source, EN vit sous `/en` avec des segments d'URL traduits.

**`AGENTS.md` contient les pièges i18n/SEO critiques — le lire avant toute tâche touchant les URL, les slugs, les métadonnées ou les sitemaps.** Ils ne sont pas répétés ici.

## Commandes

```bash
pnpm dev               # développement
pnpm build             # build-content-dates + next build
pnpm test              # vitest
pnpm lint              # eslint
pnpm run sync:catalog  # catalog.xlsx -> données boutique
pnpm run images:generate / images:apply / images:webp
```

`postbuild` enchaîne `next-sitemap`, la sitemap d'images et le stylage des sitemaps — un changement de routing casse silencieusement les sitemaps si `next-sitemap.config.js` et `scripts/generate-image-sitemap.mjs` ne sont pas mis à jour en parallèle (voir `AGENTS.md`).

## Stack

Next.js 16 App Router · React 19 · TypeScript · next-intl v4 (routing localisé) · Tailwind v4 · Radix + Base UI + shadcn · GSAP + split-type (animations) · nuqs (état URL) · react-hook-form + Zod v4 · Resend (courriels) · recharts · sharp + xlsx (scripts) · Vitest · pnpm.

## Structure

```text
app/[locale]/            routes localisées (espaces, materiaux, projets, services, boutique, ...)
features/page-builder/   système de blocs piloté par registre — la cible de toute migration
data/page-builder/**     contenu ET métadonnées des pages (space-, material-, renovation-, service-, static-pages)
data/project-pages/      pages projets
components/              ui, elements, navbar, footer, animations, projets, shop
lib/seo, lib/shop        helpers SEO et boutique
seo/i18n-path.ts         maps de traduction des segments d'URL (source des canonical/hreflang)
i18n/routing.ts          pathnames next-intl
messages/                traductions FR/EN
scripts/                 génération d'images, sitemaps, sync catalogue
```

## Direction du projet

Le site migre de l'ancien système de pages statiques (`createStaticPage`, modules de données legacy, sections ad hoc) vers **`features/page-builder`**, piloté par registre avec blocs typés et schémas Zod.

- Étendre ou migrer vers `page-builder`; ne pas ajouter de code à l'ancienne architecture.
- En touchant une page legacy, avancer par étapes incrémentales vers les blocs et templates `page-builder`.
- Pas de sections ad hoc. La skill locale `page-builder-block-system` (`.agents/skills/`) décrit le système.

## Conventions

- **Édition de fichiers** : utiliser les outils d'édition (Edit/apply_patch). Pas de `Set-Content`, `Out-File` ni redirection `>` pour du texte source ou de config — réservé aux artefacts générés et aux binaires. Si l'édition échoue, signaler le blocage plutôt que de contourner.
- **Contenu et métadonnées dans `data/page-builder/**`**, indentation 4 espaces — jamais dans les composants.
- Slugs internes **toujours en FR**; seule l'URL EN est traduite au niveau routing.

## Déploiement

`git push origin master` déclenche un déploiement Vercel automatique (~60-75 s). Les redirections legacy, www→non-www et trailing-slash vivent dans `next.config.ts`.

## Skills locales

`impeccable` (design/UI), `render-3d` (images produit 3D des caissons via Blender), `seo-daily` (routine SEO GA4 + GSC + DataForSEO), `page-builder-block-system`.
