# Playbook de traduction i18n (FR → EN) — Dilamco

Ce site est bilingue via **next-intl**. Le **français** est la langue par défaut
(URLs à la racine, ex. `/espaces/cuisine`). L'**anglais** vit sous `/en`
(ex. `/en/espaces/cuisine`). Le contenu est résolu par locale avec **fallback FR** :
tant qu'un fichier EN n'existe pas, la page EN sert le contenu FR sans casser.

**But de ce playbook : permettre à une IA de traduire tout le site, 1 fichier à la
fois, en autonomie.** Une tâche = traduire UN fichier FR vers son frère EN.

---

## 1. Mapping des fichiers

| Type | Source FR | Frère EN à créer | Export |
|---|---|---|---|
| Page espace | `data/page-builder/space-pages/cuisine.ts` | `…/cuisine.en.ts` | `cuisinePage` → `cuisinePageEn` |
| Page matériau | `data/page-builder/material-pages/contreplaque.ts` | `…/contreplaque.en.ts` | `contreplaquePage` → `contreplaquePageEn` |
| Page service | `data/page-builder/service-pages/design.ts` | `…/design.en.ts` | `designPage` → `designPageEn` |
| Page rénovation | `data/page-builder/renovation-pages/cuisine.ts` | `…/cuisine.en.ts` | `renovationCuisinePage` → `renovationCuisinePageEn` |
| Page statique | `data/page-builder/static-pages/home.ts` | `…/home.en.ts` | `page` → `pageEn` |
| Projet | `data/project-pages/cuisine-pages/cuisine-sur-mesure-montreal.ts` | `…/…-montreal.en.ts` | `PROJECT_…` → `PROJECT_…_EN` |

**Référence d'or déjà traduite : `data/page-builder/space-pages/cuisine.en.ts`** —
copier sa structure exactement.

## 2. Ce qu'on TRADUIT (valeurs string lisibles uniquement)

Dans les pages page-builder (`PageTemplateData`) :
`metadata.title`, `metadata.description`, `metadata.ogAlt`,
`breadcrumbs[].name`, `service.name`, `service.description`, `service.serviceType`,
et dans chaque `blocks[].content.props` :
`eyebrow`, `heading`, `subheading`, `intro`, `description`, `label`, `title`,
`caption`, `cardTitle`, `cardDescription`, `note`, `badges[]`, `items[]`
(string ou `{title,description}`), `steps[].title/description`, `cards[].title/description`,
`q`, `a`, `footerCtaLabel`, `quickActionLabel`, `image.alt`, `actions[].label`.

Dans les projets (`ProjectData`) :
`title`, `metaDescription`, `summary`, `scope[]`, `constraints[]`, `solution[]`,
`results[]`, `materials[].title|label`, `services[].title|label`, `images[].alt`.

## 3. Ce qu'on NE TOUCHE JAMAIS (copier à l'identique)

`href`, `src`, `url`, `path`, `id`, `type`, `variant`, `icon`, `columns`, `key`,
`template`, `frame`, `width`, `height`, `area`, `city`, `space`, `slug`,
`canonicalPath`, `requiredLinks.*`, `optionalLinks.*`, tous les nombres, booléens,
et **tous les noms de clés**.

- **Ne JAMAIS ajouter `/en`** dans `path` ou les `url` : le préfixe est ajouté
  automatiquement par `createPageMetadata`. Garder `path: "/espaces/cuisine"` tel quel.
- Garder `breadcrumbs[].url` en `SITE.url + "/..."` (sans `/en`).

## 4. Conventions de langue (en-CA)

- Orthographe canadienne-anglaise (neighbourhood, colour…).
- Marques, adresses, téléphone : inchangés.
- Toponymes localisés (usage réel du West Island) :
  - « Ouest-de-l'Île » → **West Island**
  - « Rive-Sud » → **South Shore** ; « Rive-Nord » → **North Shore**
  - « Grand Montréal » → **Greater Montréal**
  - « Pierrefonds-Roxboro », « Montréal », « Laval » : inchangés
- « sur mesure » → **custom** ; « clé en main » → **turnkey** ;
  « armoires » → **cabinets** ; « ébéniste » → **cabinetmaker**.

## 5. Câblage du registre (l'IA doit le faire aussi)

Après avoir créé le fichier `.en.ts`, l'enregistrer dans le `index.ts` frère :

```ts
// data/page-builder/space-pages/index.ts
import { salleDeBainPageEn } from "./salle-de-bain.en";
const spacePagesEn: Partial<Record<keyof typeof spacePages, PageTemplateData>> = {
  cuisine: cuisinePageEn,
  "salle-de-bain": salleDeBainPageEn, // <-- ajouter
};
```

- Pages statiques : map `en` dans `data/page-builder/static-pages/index.ts`.
- Matériaux/services/rénovation : map `…PagesEn` dans leur `index.ts`.
- Projets : `PROJECTS_EN` dans `data/projects.ts`, clé = `` `${space}/${slug}` ``.

## 6. Chrome (hors data) → `messages/en.json`

Les libellés d'interface (nav, footer, boutons, page projet, formulaire) sont dans
`messages/fr.json` / `messages/en.json`. Compléter `messages/en.json` en miroir de
`messages/fr.json` (mêmes clés, valeurs traduites).

## 7. Vérification (definition of done)

- `pnpm exec tsc --noEmit` propre (le type partagé `PageTemplateData` force la
  structure identique).
- État partiel OK : le résolveur fait le fallback FR pour les fichiers non traduits.
- DoD = fichier `.en.ts` créé + entrée ajoutée au registre + `tsc` vert.

## 8. Exemple (bloc hero, avant → après)

```ts
// FR (cuisine.ts)
props: {
  eyebrow: "Dilamco - Espaces",
  heading: "Armoires et cuisines sur mesure à Pierrefonds et dans le Grand Montréal",
  badges: ["Armoires sur mesure", "Pierrefonds", "Ouest-de-l'Île"],
  image: { src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
           alt: "Armoires de cuisine sur mesure haut de gamme à Pierrefonds" },
  actions: [{ label: "Obtenir une soumission", href: "/contact", variant: "default" }],
}
// EN (cuisine.en.ts) — href/src/variant INCHANGÉS
props: {
  eyebrow: "Dilamco - Spaces",
  heading: "Custom kitchens and cabinetry in Pierrefonds and Greater Montréal",
  badges: ["Custom cabinets", "Pierrefonds", "West Island"],
  image: { src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
           alt: "High-end custom kitchen cabinets in Pierrefonds" },
  actions: [{ label: "Get a quote", href: "/contact", variant: "default" }],
}
```
