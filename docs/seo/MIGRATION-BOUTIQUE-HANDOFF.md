# Handoff — Migration boutique dans dilamco-next (pour Claude Code)

## Contexte
Intégrer la boutique `dilamco_store` (catalogue + soumission, pas de paiement) **dans** l'app
`dilamco-next`, sur le **même domaine**, sous `/boutique`. **dilamco-next est la source de
vérité** : en cas de doute (design, thème, composants UI, conventions), dilamco-next prime.

Les deux apps partagent la même stack : Next 16 / React 19 / App Router / Tailwind v4 /
shadcn / base-ui / radix / vaul / sonner / nuqs. La boutique est unilingue FR ; dilamco-next
est bilingue via next-intl (FR à la racine, EN sous `/en`).

## Ce qui est DÉJÀ fait dans le repo (à vérifier, pas à refaire)
- `lib/shop/` : catalogue copié (`catalog-products.json`, `catalog-categories.json`,
  `render-manifest.json`, `products.ts`, `catalog-categories.ts`, `types.ts`, `photos.ts`,
  `format.ts`, `routes.ts`, `utils.ts`). Imports réécrits `@/lib/*` → `@/lib/shop/*`.
- `components/shop/` : `ui/` (copie isolée de la UI du store), `ds/`, et les composants
  boutique (`cart-provider`, `cart-drawer`, `topbar`, `footer`, `logo`, `pcard`, `price`,
  `swatch`, `availability-dot`, `category-sidebar`, `module-render`, `showroom-cta`,
  `help-button`). Imports réécrits `@/components/*` → `@/components/shop/*`.
  (Volontairement NON copiés : `dilamco-tweaks`, `tweaks/` — outils de dev.)
- `app/[locale]/boutique/` : `layout.tsx` (NuqsAdapter + CartProvider + Topbar + Footer +
  CartDrawer + HelpButton), `page.tsx`, `collections/`, `produit/[id]/`, `finitions/`,
  `soumission/` (+ `_components`). Imports réécrits.
- `lib/shop/routes.ts` : toutes les routes préfixées par `/boutique`.
- `app/globals.css` : ajout additif des tokens `--soft-foreground`, `--border-strong`,
  `--highlight` (dans `:root` et `@theme inline`) — utilisés par la boutique, sans effet
  sur la vitrine.
- `package.json` : ajout de `nuqs`, `photoswipe`, `react-hook-form`, `@hookform/resolvers`
  + script `sync:catalog`. `tsconfig.json` exclut déjà `dilamco_store`.

> Règle de réécriture d'imports appliquée (à reproduire si tu re-copies depuis le store) :
> `@/components/` → `@/components/shop/` ; `@/lib/` → `@/lib/shop/` ; laisser `@/hooks/` tel quel.

## À FAIRE (dans l'ordre)
1. **Installer & compiler proprement**
   - `npm install`
   - `npx tsc --noEmit` puis `npm run build` ; corriger les erreurs.
2. **Corrections attendues (zones à risque)**
   - Types de props des pages sous `[locale]` : les pages du store déclarent
     `params: Promise<{ id }>` etc. Sous `[locale]`, le shape inclut `locale`. Ajuster les
     types (`{ locale: string; id: string }`) ou ignorer `locale`.
   - `generateStaticParams` de `produit/[id]`, `collections/[slug]`, `collections/[slug]/[sub]`
     : conserver le retour du segment propre (Next compose avec les `locale` du parent). Garder
     le filtre des IDs à caractères interdits (`/[*?"<>|:\\]/`) pour le SSG Windows.
   - `lucide-react` : dilamco-next est en `^0.564`, le store visait une autre version ;
     corriger les noms d'icônes manquants si le build le signale.
   - Vérifier qu'aucun fichier copié n'importe `dilamco-tweaks`/`tweaks` (non copiés).
   - Liens : la boutique utilise `next/link` + `lib/shop/routes.ts` (préfixe `/boutique`). OK
     pour le FR (racine). Pour l'EN, passer aux helpers de navigation next-intl (phase 2).
3. **i18n (phase 2, EN)** : enregistrer les pathnames boutique dans `i18n/routing.ts`
   (ex. `/boutique` ↔ `/shop`, `/boutique/collections` ↔ `/shop/collections`…). Les noms de
   catégories sont déjà bilingues dans les données (`name.fr` / `name.en`).
4. **SEO**
   - Ajouter JSON-LD `Product` + `Offer` + `BreadcrumbList` sur les fiches produit
     (s'appuyer sur `seo/schema/builders.ts` de dilamco-next). Titres = type + attribut +
     dimension.
   - Ajouter les URLs `/boutique` au `next-sitemap.config.js` (index unifié vitrine + boutique).
   - Anti-cannibalisation : « vanité sur mesure » (projet/devis) vs « vanité salle de bain »
     (produit boutique) = pages et canoniques distincts. Un seul bloc `Organization`.
5. **Soumission → email** : créer `app/api/soumission/route.ts` qui envoie la demande via
   `resend` (déjà présent dans dilamco-next) ; brancher `soumission-form`. Valider avec `zod`.
6. **Redirections** : si la boutique a déjà des URLs en ligne à la racine
   (`/collections`, `/produit/...`), ajouter des 301 vers `/boutique/...` dans `next.config.ts`.
7. **Design (passe de propreté)** : dilamco-next prime. Idéalement, dédupliquer
   `components/shop/ui` vers `components/ui` de dilamco-next là où les APIs concordent, et
   aligner header/footer sur la vitrine (en gardant le mini-panier).

## Critère de fin
`npm run build` passe sans erreur ; `/boutique`, `/boutique/collections`,
`/boutique/produit/[id]`, `/boutique/finitions`, `/boutique/soumission` rendent ;
le panier (localStorage) et la soumission fonctionnent ; la vitrine n'a aucune régression.
