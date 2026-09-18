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
