# AGENTS.md

## File Editing Rule (Mandatory)

- For source and config files, use `apply_patch` for edits.
- Do not use PowerShell write commands for text edits (`Set-Content`, `Out-File`, redirection `>`), except for generated artifacts or binary files.
- If `apply_patch` fails, stop and report the blocker instead of switching to `Set-Content`.

## Project Goal

- The project is migrating from the legacy static page system (`createStaticPage`, legacy data modules, ad-hoc sections) to the new registry-driven system in `page-builder`.
- Prefer extending or migrating into `page-builder` rather than adding new code to the old static-page architecture.
- When touching legacy pages, favor incremental migration steps that move content and sections toward `page-builder` blocks and templates.

## i18n & SEO — pièges à connaître

### Traduction des slugs d'URL (FR = source, EN = /en traduit)

FR est la source interne. Les segments d'URL traduits en EN vivent dans
`seo/i18n-path.ts` (`SPACE_EN`, `RENOVATION_EN`, `MATERIAL_EN` + `localizePath`).
⚠️ Pour ajouter/modifier un slug traduisible, mettre à jour **5 endroits** :

1. `seo/i18n-path.ts` — map + `localizePath` (source des canonical/hreflang)
2. `i18n/routing.ts` — `pathnames` explicites par valeur (importe les maps de i18n-path)
3. `components/AppLink.tsx` — templates littéraux dérivés de la map (sinon les
   `<Link>` internes ne traduisent pas la valeur du slug ; un `[slug]` générique
   ne suffit pas, next-intl ne traduit pas les segments dynamiques)
4. `next-sitemap.config.js` **ET** `scripts/generate-image-sitemap.mjs` —
   **DUPLIQUENT** la logique en CommonJS/ESM (ne peuvent pas importer le TS) →
   mirroir à la main dans les deux, sinon les sitemaps divergent de l'app
5. `next.config.ts` — redirection 308 de l'ancien slug EN vers le nouveau

### Métadonnées

- title/description par page = `metadata.title`/`metadata.description` dans les
  fichiers `data/page-builder/**` (indent 4 espaces), PAS dans les composants.
- Le template `%s | Dilamco` (`app/[locale]/layout.tsx`) ne s'applique PAS à la
  home (même segment que le layout) → le title de `home.ts`/`home.en.ts` doit
  contenir « | Dilamco » littéralement ; toutes les autres pages NON (doublon sinon).
- Cibles : title ≤ ~60c, meta description ≤ ~155c (sinon tronquée par Google).

### Déploiement & canonicalisation

- `git push origin master` → déploiement Vercel auto (~60-75s).
- www→non-www, trailing-slash→sans, et redirections legacy : `next.config.ts`.
- Données structurées riches déjà en place (HomeAndConstructionBusiness, FAQ,
  Service, Breadcrumb) — vérifier avant d'en rajouter.

## Skills

### Available skills

- page-builder-block-system: Registry-driven page builder for Next.js with strict type + variant blocks, Zod schemas, BlockFrame layout control, and no ad-hoc sections. Use when creating, generating, or refactoring sections into the page-builder architecture. (file: C:/laragon/www/dilamco-next/.agents/skills/page-builder-block-system/SKILL.md)
