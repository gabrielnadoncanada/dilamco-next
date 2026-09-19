# Rédaction web — règles de contenu (refonte 2026-09)

Le site vend un entrepreneur général sérieux. Le visiteur scanne, il ne lit pas. Chaque page doit se comprendre en 20 secondes sur mobile.

## Budget de mots (par fichier de données, hors `metadata`, `breadcrumbs`, `service`, commentaires)

| Page | Cible | Maximum |
|---|---|---|
| Accueil | 500 | 650 |
| Page zone (`zone-pages`) | 500 | 650 |
| Page service / rénovation | 500 | 650 |
| Page espace / matériau | 400 | 550 |
| À propos, processus, hubs | 400 | 550 |
| Contact | 250 | 350 |

Un fichier de 2 500 à 3 700 mots doit descendre à 500–650. On coupe, on ne compresse pas : on garde les faits, on supprime les explications, les transitions et les répétitions.

Mesure de référence : `node scripts/copy-wordcount.mjs <fichier>` (compte aussi `metadata`, les `alt` et les libellés de boutons). Plafonds avec cet outil : **750** pour accueil, zones, services et rénovation ; **650** pour espaces, matériaux, à propos, processus, hubs ; **400** pour contact. L'accueil réécrit (`static-pages/home.ts`) est l'exemplaire : 715.

## Longueurs par champ

- `heading` de hero : 6 à 12 mots, une seule idée, pas de tiret cadratin, pas de deux-points.
- `description` de hero : une phrase, ≤ 22 mots.
- `heading` de section : 4 à 9 mots.
- `description` / `intro` de section : ≤ 28 mots, une ou deux phrases. Omettre le champ quand il est optionnel et n'apporte rien.
- Titre de carte / d'item : 2 à 6 mots.
- Description de carte / d'item : ≤ 18 mots, une phrase, sans point final obligatoire.
- Étape de processus : titre ≤ 5 mots, description ≤ 15 mots.
- FAQ : 4 à 6 questions, réponse ≤ 45 mots. C'est le seul endroit où un détail (prix indicatif, permis, délai, assurance, GCR) peut vivre, parce qu'il est replié.
- `badges` : 0 à 3, chacun 1 à 3 mots. Ne pas répéter le numéro RBQ dans les badges (il est au pied de page).
- Libellés de bouton : 2 à 4 mots, verbe à l'infinitif ou nom (« Soumission gratuite », « Voir la cuisine »).
- `proofs` (hero image-overlay) : `title` = la valeur courte (« 2004 », « 5,0 », « 24 h »), `description` = l'étiquette (« Licence RBQ depuis », « Note Google », « Premier retour »).
- `caption` (hero split-image) : ≤ 8 mots, un lieu ou un fait (« Kirkland · Ouest-de-l'Île »).
- `eyebrow` (hero split-image) : 1 à 4 mots, le nom de la ville ou du service.

## Structure type d'une page (5 à 7 blocs)

1. `hero` (split-image ou image-overlay)
2. Un bloc de promesse ou de connaissance locale (`split.text-divider-cards`, 3 à 4 cartes)
3. Un bloc de services ou de projets avec photos (`grid.image-cards-slider`, 3 à 6 items)
4. Optionnel : processus (`process.horizontal-steps-cards`, 4 à 5 étapes) ou preuves (`grid.icon-cards-bullets`, 3 à 4 items avec 2 à 3 puces courtes)
5. Optionnel : `split.badges-checklist-cta` ou `split.list-actions-image-card`
6. `faq.accordion` (4 à 6 questions)
7. `cta.band-split-actions`

Ne pas dépasser 8 blocs. Supprimer les blocs qui répètent une section précédente.

## Voix

- Phrases courtes, verbe d'action, présent. Pas de « nous croyons que », pas de « n'hésitez pas ».
- Faits vérifiables plutôt qu'adjectifs : « Licence RBQ depuis 2004 » plutôt que « expérience reconnue ».
- Tutoiement interdit, vouvoiement sobre.
- Jamais : cuisiniste, ébéniste, atelier, fabricant, artisan, maison neuve, GCR (sauf pour dire qu'il ne s'applique pas), « meilleur », « leader », « passion ».
- Pas de tiret cadratin dans les titres ; dans le texte courant, préférer la virgule ou le point.
- EN : même structure, même nombre de blocs et d'items que le FR, même budget. Anglais canadien (« licence », « colour »).

## Ce qu'il faut préserver dans chaque fichier

- Les objets `metadata`, `breadcrumbs`, `service`, `extraJsonLd`, `template` et `path` tels quels (SEO). Le `title` ≤ 60 caractères et la `description` ≤ 155 restent.
- Les `href` existants (ne jamais inventer d'URL).
- Les images existantes (`src` sous `/images/...`) ; on peut en retirer, pas en inventer.
- Les commentaires de sources en tête des pages zones (lignes `//`).
- Le `id` du hero (`hero`) et du CTA final (`cta`).

## Recettes par type de page (refonte 2026-09, 2e passe)

Chaque famille de pages a SA composition. Deux pages de familles différentes ne doivent pas se ressembler ; deux pages d'une même famille partagent la composition mais jamais le texte.

| Famille | Composition (dans l'ordre) |
|---|---|
| **Zone** (`zone-pages`) | `hero.zone` (eyebrow « Entrepreneur général à », heading = nom de la ville seul, 3–4 `facts` : Notre base · Permis · Bâti · Premier retour) → `split.fact-sheet` (3–6 rangées locales : bâti, permis, règlement, particularité, projets fréquents, distance) → `grid.image-cards-slider` (3 services, descriptions ancrées dans la ville) → `grid.link-cards-compact` (3–4 villes voisines, sans description) → `faq.accordion` (4 questions, TOUTES locales : permis de cette ville, contraintes locales, délais, prix d'un projet typique ici) → `cta.band-split-actions` (heading nomme la ville) |
| **Rénovation** (`renovation-pages`, `service-pages/renovation`) | `hero.split-image` avec `imageSide: "left"` → `grid.icon-cards-bullets` (3–4 : ce qui est inclus) → `process.horizontal-steps-cards` (4–5 étapes propres à ce service) → `grid.price-tiles` (2–3 tuiles, uniquement si l'ancien contenu donnait des fourchettes) → `split.list-actions-image-card` OU `grid.bento` (4 tuiles) → `faq.accordion` (4–5, spécifiques au service) → `cta` |
| **Espace** (`space-pages`) | `hero.centered` (court, avec `image` pleine largeur + `caption` sous le texte ; photo de CET espace, différente de celles de la bento) → `grid.bento` (5–6 tuiles : 3–4 photos de CET espace, 1 stat, 1 citation ou texte) → `split.fact-sheet` « En bref » (délai, matériaux, prix, garantie, pose) → `faq.accordion` (4) → `cta` |
| **Matériau** (`material-pages`) | `hero.split-image` (image à droite) → `split.fact-sheet` (composition, résistance, entretien, usage, prix relatif) → `comparison.table-basic` si pertinent → `faq.accordion` (3–4) → `cta` |
| **À propos** | `hero.split-image` `imageSide: "left"` → `grid.bento` (photos + stats 2004 / 5,0 / 40 000 $) → `grid.icon-cards-bullets` (licence, cautionnement, assurances, garantie) → `faq` (3–4) → `cta` |
| **Processus** | `hero.centered` → `process.horizontal-steps-cards` (5) → `split.fact-sheet` « Ce que vous recevez » → `faq` (3–4) → `cta` |
| **Projets** | `hero.centered` → `grid.image-cards-slider-lightbox` → `grid.bento` → `cta` |
| **Hubs** (services, zones, espaces, matériaux) | `hero.centered` → grille de liens/cartes → un bloc de faits (`split.fact-sheet` ou `split.text-divider-cards`) → `cta` |
| **Contact** | inchangé |

### Anti-duplication (test `tests/duplicate-content.test.ts`)

- Aucune phrase de 60 caractères ou plus ne peut apparaître dans deux fichiers de la même langue. Le test échoue sinon.
- Les FAQ génériques (« Êtes-vous licenciés ? », « Vos travaux sont-ils garantis ? ») n'existent QUE sur l'accueil et à propos. Ailleurs, chaque question contient le nom de la ville, du service ou de l'espace, et la réponse cite un fait propre à la page.
- Le bloc `split.badges-checklist-cta` « Ce qui est vérifiable » n'apparaît plus sur les pages zones (il vivait sur 11 pages).
- Les descriptions du slider de services sur une page zone parlent de CETTE ville (type de maisons, règlement, secteur), pas du service en général.
- Le `cta` final varie : heading avec le nom de la ville / du service, intro différente, note différente.
- Les `facts` du `hero.zone` et les `rows` du `fact-sheet` ne se répètent pas entre eux.

## Raison d'être (passe 2026-09-19, 6e) — le test appliqué à chaque champ

Un texte reste sur le site s'il passe l'un des deux tests, sinon il part :

1. **SEO** : il contient une requête réelle (service, ville, matériau, contrainte locale nommée). Un titre de section générique n'est pas du SEO.
2. **Conversion** : il apporte un fait vérifiable (licence, année, note Google, cautionnement, délai, prix), une réponse à une peur (dépassement, retard, qui répond du résultat), une information de décision (inclus, exclu, qui fait quoi, quand, combien) ou une action.

En cas de doute, on retire. Un texte qui met en contexte, fait une transition, annonce la section ou rassure en général ne passe pas.

Corollaires appliqués en 2026-09-19 :

- **Pas de `badges` décoratifs** sur un hero ou une carte : un badge qui répète le titre ou la description part.
- **Pas de `caption` qui décrit la photo.** Une légende ne survit que si elle dit un lieu ou un fait que l'image ne montre pas.
- **Pas d'`eyebrow` contenu dans le `heading`** juste en dessous.
- **Pas de `note` de méthodologie** (sources, dates de vérification) : c'est une note interne.
- **Pas de rangée de fiche qui redit une réponse de FAQ** de la même page, et l'inverse.
- **Le numéro RBQ ne se répète pas** dans une note, un badge ou une intro : il est au pied de page.
- **Pas de `ctaLabel` générique répété** (« Voir la zone » onze fois) quand la carte porte déjà le nom de la cible.
- **Recette Zone assouplie** : la fiche locale compte 3 à 6 rangées (et non 5 à 7). Après dédoublonnage, plusieurs villes n'ont pas assez de faits sourcés pour six rangées ; on ne remplit pas une recette avec du texte inventé.

## Remplissage (passe 2026-09, 5e) — chaque texte mène à une action ou à un fait

Le propriétaire a relevé « énormément de texte qui n'amène aucune action, seulement là pour remplir ». Règles :

1. **Pas d'`intro` sous un titre de section** sur les blocs de contenu (`fact-sheet`, `icon-cards-bullets`, `bento`, sliders, `link-cards-compact`, `faq`, `process`, `comparison`, `price-tiles`). Le titre suffit. L'`intro` n'existe que sur le hero, le CTA et les blocs qui portent des boutons (`list-actions-image-card`, `badges-checklist-cta`).
2. **Pas de `note` sous les boutons du CTA final** (le numéro RBQ est au pied de page).
3. **Cartes à puces (`icon-cards-bullets`)** : titre + puces, pas de phrase de description entre les deux.
4. **Pas d'étiquette décorative sur une photo** (`cardTitle` / `cardDescription`) si elle ne dit rien que la page ne dise déjà.
5. Test : si on retire la phrase et que la section se comprend et mène à la même action, la phrase était du remplissage.

## Clarté (passe 2026-09, 4e) — le texte doit se comprendre en deux secondes

Le propriétaire a jugé que « les textes n'ont pas de sens ». Cause : titres-fragments façon magazine, étiquettes cryptiques, valeurs télégraphiques, jargon de chantier. Règles :

1. **Un titre de section dit ce qu'il y a dessous**, dans les mots du client. Bon : « Ce qu'on sait des maisons de Kirkland », « Nos services à Kirkland », « Combien coûte une cuisine », « Comment se déroule le chantier », « Ce que couvre notre licence ». Interdit : un fait posé en titre (« Une ville coupée par l'autoroute 40 », « Une ville bâtie en quinze ans », « Trois époques de bâti »), une image ou une formule (« tenue au cordeau », « Ce que vingt ans laissent derrière », « mesuré en minutes », « du drain au comptoir »), un impératif abstrait (« Régler l'eau avant de poser un panneau »).
2. **Une étiquette de fiche est la question que le client se pose**, en 1 à 3 mots courants : « Type de maisons », « Où demander le permis », « Depuis notre base », « Projets courants », « Particularité locale », « Délai », « Prix indicatif », « Garantie », « Matériaux », « Entretien », « Usage recommandé ». Interdit : « Bâti », « Densité », « Croissance », « Ce qui tranche », « Excavation », « Zonage », « Patrimoine », « Prix relatif », « Réception », « Préalable », « Livrables », « Qui fait quoi », « Composition » seul.
3. **Une valeur est une phrase complète et concrète**, pas une suite de noms : « La Ville vérifie les marges de recul et les normes de la zone avant d'émettre le permis » plutôt que « Recul, occupation du sol et normes de votre zone ». Elle répond à l'étiquette.
4. **Pas de jargon** : « gabarié », « au cordeau », « mécanique » (dire plomberie et électricité), « poste », « livrable », « mobilisation », « enveloppe » (dire murs et toit), « PIIA » sans explication, « PPU », numéros de règlement sans dire ce qu'ils imposent.
5. **Une carte ou une étape = un verbe** : « On refait la plomberie et l'électricité avant de refermer les murs », pas « Plomberie et électricité reprises ».
6. **Le hero d'une zone** dit pour qui et pour quoi : « Rénovation et agrandissement pour les maisons de Kirkland, par un entrepreneur général licencié basé à quinze minutes. »
7. **Les CTA** sont des phrases simples : « Un projet à Kirkland ? Parlons-en. », « Faites chiffrer votre cuisine ».
8. Test de relecture : lire chaque titre et chaque rangée à voix haute comme si on l'expliquait à un voisin. Si on doit ajouter un mot pour que ça se comprenne, le texte est à réécrire.
