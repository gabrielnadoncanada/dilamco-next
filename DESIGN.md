# Design system Dilamco

Source unique des décisions visuelles du site (refonte 2026-09-18). Les valeurs vivent dans `app/globals.css` (tokens) et `app/theme.utilities.css` (rôles) ; les composants n'utilisent que ces rôles. Toute nouvelle valeur commence par un token ici, jamais par une classe ad hoc.

## Principes

1. **Un rôle, une classe.** `text-lead`, `text-label`, `text-numeral`, `rounded-card`, `transition-ui`, `focus-ring` : on nomme l'intention, pas la valeur.
2. **Une échelle, cinq tailles de titre.** Aucune taille de titre en dehors de `--title-1…5`. Jamais de taille passée en `className` sur `<Heading>` (tailwind-merge supprimerait l'interligne).
3. **Trois tiers de rayons.** Contrôle 12 px · carte 16 px · panneau 28 px. Boutons et pastilles : pilule.
4. **Une seule courbe de mouvement.** `ease-out-quint`, 200 ms pour les contrôles, 700 ms pour les images. Pas de rebond.
5. **Chaque élément interactif a ses états** : repos, survol, focus clavier (`focus-ring`), actif, désactivé.
6. **Primaire intouchable.** `#253b2f`. Pas de doré, pas de serif.

## Couleurs (tokens `:root`)

| Rôle | Token | Valeur | Usage |
|---|---|---|---|
| Fond | `--background` | `#f8f9f6` | page |
| Texte | `--foreground` | `#1a1f1c` | corps, titres |
| Texte secondaire | `--muted-foreground` | `#5f6762` | descriptions, intros (4,5:1 sur fond) |
| Primaire | `--primary` | `#253b2f` | boutons, pastilles pleines, panneau hero |
| Primaire profonde | `--primary-deep` | `#182a20` | survol du bouton primaire |
| Primaire pâle | `--primary-soft` | `#e3ebe4` | pastilles, tuiles, survol des menus |
| Muted | `--muted` | `#f0f3ef` | bandes de section alternées |
| Encre | `--ink` | `#15191a` | bande CTA, pied de page |
| Encre texte | `--ink-foreground` / `--ink-muted` | `#f3f3ef` / 62 % | texte sur encre |
| Bordure | `--border` | `#e1e5df` | filets, cartes |
| Anneau | `--ring` | `#253b2f` | focus |

Règle : jamais de gris sur une couleur. Sur vert ou encre, le texte secondaire est une transparence du blanc (`text-white/85`, `text-ink-muted`).

## Typographie

Corps : **Plus Jakarta Sans** (`--font-sans`). Titres et chiffres : **Bricolage Grotesque** 600 (`--font-display`). Deux familles, pas plus.

| Rôle | Composant / classe | Taille | Interligne | Interlettrage |
|---|---|---|---|---|
| Display (hero plein cadre) | `<Heading variant="display">` | `--title-1` 40 → 80 px | 1.0 | −0.035em |
| H1 (titre de page, bande CTA) | `<Heading variant="h1">` | `--title-2` 36 → 60 px | 1.02 | −0.03em |
| H2 (titre de section) | `<Heading variant="h2">` / `SectionHeader` | `--title-3` 28 → 44 px | 1.06 | −0.028em |
| H3 (sous-titre, panneau) | `<Heading variant="h3">` | `--title-4` 22 → 28 px | 1.15 | −0.02em |
| Titre de carte / item / question FAQ | `<Heading variant="card">` | `--title-5` 18 → 20 px | 1.25 | −0.015em |
| Lead (intro de section, accroche hero) | `text-lead` | 18 px | 1.6 | — |
| Corps | `p` | 16 px | 1.625 | — |
| Description de carte | `text-sm text-muted-foreground` | 14 px | 1.625 | — |
| Label (kicker, colonnes, en-tête de tableau) | `text-label` | 12 px caps | 1.25 | +0.12em |
| Chiffre (stat, note, numéro d'étape) | `text-numeral` + une taille `--title-*` | — | 1 | −0.04em |

Minimum 12 px partout. Largeur de lecture ≤ 56 caractères pour le lead, ≤ 62 pour une réponse de FAQ.

## Espacement

- Grille de 4 px (échelle Tailwind).
- Sections : `--section-py` 56 → 96 px ; compact 40 → 64 px ; hero 72 → 128 px.
- En-tête de section → contenu : `sectionBodyClassName` (40 px). Titre → intro : 16 px. Titre de carte → description : 6 px.
- Grilles de cartes/tuiles : `gap-4` (16 px). Colonnes texte : `gap-x-12` (48 px). Split 5/7 colonnes sur 12.
- Gouttière de page : `clamp(20px, 1rem, 56px)`, contenu max 1440 px.

## Rayons

| Tier | Token / classe | Valeur | Où |
|---|---|---|---|
| Contrôle | `rounded-control` (`--r-control`) | 12 px | champs, éléments de menu, lignes de menu mobile |
| Carte | `rounded-card` (`--r-card`) | 16 px | cartes photo, tuiles, rangées cliquables, strip de chiffres, menu déroulant |
| Panneau | `rounded-panel` (`--r-panel`) | 28 px | cadres photo de hero, panneau vert, bande CTA, carte de formulaire |
| Pilule | `rounded-full` | — | boutons, badges, pastilles icône, sélecteur de langue |

## Mouvement

- `transition-ui` : couleurs, bordure, ombre, transform, opacité · 200 ms · `ease-out-quint`.
- `transition-media` : zoom d'image au survol · 700 ms · `ease-out-quint`.
- Révélation au défilement : `Reveal` (`components/animations/Reveal.tsx`), 900 ms, visible par défaut, filet 2,5 s, désactivée en `prefers-reduced-motion`.
- Hero : `ken-burns` 24 s sur la photo.

## Composants et états

| Composant | Repos | Survol | Focus clavier | Actif / autre |
|---|---|---|---|---|
| Bouton `primary` | vert, texte crème, ombre douce | `primary-deep` | `focus-ring` | `scale(0.98)` ; désactivé 50 % |
| Bouton `ghost` | bordure 20 %, texte encre | fond encre, texte fond | `focus-ring` | idem |
| Bouton `paper` (sur sombre) | fond page | `primary-soft` | `focus-ring-inverse` | idem |
| Bouton `ghost-light` (sur sombre) | blanc 12 %, bordure 50 % | fond blanc, texte encre | `focus-ring-inverse` | idem |
| Lien de menu desktop | texte 80 % | pilule `primary-soft`, texte primaire | `focus-ring` | ouvert = idem survol |
| Élément de menu déroulant | pastille icône pâle | fond pâle, pastille verte | fond pâle | — |
| Carte photo (`image-cards-slider`) | flèche cerclée | zoom image 1.04, flèche verte | `focus-ring` sur la carte | — |
| Rangée lien (`link-cards-compact`) | bordure, pastille pâle | bordure + fond pâle, pastille verte | `focus-ring` | — |
| Question FAQ | titre de carte | texte primaire | anneau shadcn | ouvert : chevron haut |
| Champ de formulaire | 48 px, `rounded-control` | — | bordure + anneau `ring/50` | invalide : bordure destructive + message |
| Sélecteur FR/EN | pilule segmentée | texte encre | `focus-ring` | actif : fond encre |
| Lien de pied de page | 85 % | 100 % | `focus-ring-inverse` | — |

Tailles de boutons : `small` 40 px (barre de navigation), `default` 48 px (sections), `xl` 56 px (hero, CTA). Cibles tactiles ≥ 44 px sur mobile.

## Blocs page-builder

Tous les blocs partagent `SectionHeader` (titre h2 + `text-lead` + emplacement à droite) et `sectionBodyClassName`. Les blocs « split » alignent le titre à gauche (5 colonnes) et le contenu à droite (7 colonnes) avec le titre collant sur desktop. Un seul kicker par page (`eyebrow` du hero) ; les sections n'ont pas d'eyebrow.

## Navigation et gabarit de page

- **En-tête** : menu desktop dès `lg` (1024 px) en 14 px, puis 15 px et numéro de téléphone en clair dès `xl` (1280 px) ; sous `lg`, bouton téléphone + tiroir mobile. Entrée active : soulignement vert court (`aria-current`), calculé sur le chemin interne FR dans les deux langues.
- **Fil d'Ariane** (`PageBreadcrumbs`) sur toute page intérieure, à partir des `breadcrumbs` de la page.
- **Barre CTA mobile** (`MobileStickyCta`) : « Appeler » + « Soumission gratuite », apparaît après le hero, disparaît près du pied de page, absente sur /contact.
- **404** bilingue : titre display, quatre raccourcis.

## Blocs par famille de page (anti-monotonie)

Chaque famille a sa composition (détail dans `docs/redaction-web.md › Recettes`) :
- **Zone** : `hero.zone` (photo pleine largeur, ville en display, fiche locale flottante) → `split.fact-sheet` → cartes photo → villes voisines → FAQ locale → CTA nommant la ville.
- **Rénovation** : `hero.split-image` image à gauche → inclusions → frise d'étapes du service → `grid.price-tiles` (si fourchettes connues) → bento ou photo → FAQ → CTA.
- **Espace** : `hero.centered` → `grid.bento` (photos, chiffre, citation) → fiche « En bref » → FAQ → CTA.
- **Matériau** : `hero.split-image` → fiche technique → comparatif → FAQ → CTA.
- **À propos** : hero image à gauche → bento (photos + stats) → licence en tuiles → FAQ → CTA.

### Rythme des fonds de section
`PageRenderer` alterne automatiquement fond de page (`--background`) et gris-vert léger (`--muted` #edf1ec) d'une section à l'autre ; le hero reste sur le fond de page, un bloc peut imposer `frame.surface`. Chaque section (sauf le hero) porte un filet supérieur `border-border/60`. Pas de fond vert plein pour une section : le vert primaire n'apparaît que sur des panneaux (hero de zone, checklist, tuile chiffre, bouton).

### Logo
Wordmark SVG plein cadre (158 × 31) : hauteur 20 px sur mobile, 22 px dès `md`, 24 px au pied de page. Jamais 32 px : les capitales du wordmark font toute la hauteur, il écraserait le menu.

### Hero centré avec photo
`hero.centered` accepte `image` + `caption` : titre centré, puis photo pleine largeur dans un cadre `rounded-panel` (4/3 mobile, 16/9 tablette, 21/9 desktop), pastille de légende en bas à gauche. C'est le hero des pages espaces ; sans `image`, le bloc reste le hero texte des hubs et du processus.

### Frise d'étapes (`process.horizontal-steps-cards`)
Rail continu : horizontal avec jalons numérotés (cercle vert 40 px, `ring` fond) dès `lg`, vertical à gauche en dessous. Titres alignés (`content-start`, sinon la grille étire les pistes).

### Fiche locale / fiche technique
Liste `dl` : étiquette en `text-label`, valeur en 15 px, rangées filetées. Les étiquettes sont des noms courts, jamais des phrases.

### Bento
Grille 3 colonnes, rangées ≥ 220 px, tuiles `wide` (2 col.) et `tall` (2 rangées). Une tuile chiffre (`surface-blueprint`, chiffre en `--title-2`, filet blanc 15 % puis étiquette), une tuile citation (vert pâle), le reste en photo avec pastille de légende. Le placement est simulé (`computeSpans`) : jamais de case vide.

### Panneau vert `surface-blueprint`
Tout panneau sur vert primaire (tuile chiffre, tuile prix mise en avant, panneau checklist, panneau du hero split) porte `surface-blueprint` au lieu de `bg-primary` : quadrillage blanc 8 % de 26 px façon feuille de plan, masqué pour n'apparaître qu'en haut à droite, lueur blanche 9 % au même coin, liseré intérieur blanc 10 %. Le vert reste #253b2f ; le motif ne doit jamais passer sous le texte.

## Ce qu'on ne fait pas

- Bordure latérale colorée, texte en dégradé, verre décoratif.
- Eyebrow ou numéro `01 / 02` au-dessus de chaque section (les numéros ne servent que les vraies séquences).
- Texte sous 12 px, gris sur couleur, taille de titre hors échelle.
- Cartes bordées imbriquées ; une tuile teintée ou un filet suffit.
