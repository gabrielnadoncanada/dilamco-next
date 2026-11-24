# Pistes pour augmenter les demandes de formulaire — 2026-10-26

> Source : Search Console + GA4, 90 jours (2026-07-28 → 2026-10-25), et les 8 demandes reçues dans `gabriel@dilamco.com` (dossier « Demandes site web »).

## Constat

- **Le formulaire convertit déjà bien** : ~47 vues de `/contact` (FR + EN) pour 8 demandes, dont 2 pourriels probables (domaine jetable `northmail.web.id`, message générique en anglais). ≈ 13 % de demandes réelles. Le goulot est le trafic qualifié, pas le formulaire.
- **69 % des clics Google venaient de l'ancienne boutique** (176 sur 256). Clientèle « armoire d'une taille précise », pas rénovation. Ces URL redirigent maintenant vers `/espaces/*` et tombent à 1-2 clics par jour : la baisse du trafic organique est attendue et sans effet sur les demandes.
- **Les pages rénovation ne captent presque aucun clic** (hors boutique et marque, ~45 clics en 3 mois) :

| Pages | Impressions | Clics |
|---|---|---|
| Zones FR + EN | 8 149 | 1 |
| `/espaces` | 9 080 | 23 (surtout walk-in) |
| `/services` FR + EN | 2 921 | 6 |
| Blogue FR + EN | 1 037 | 0 |

- **Une partie des impressions est probablement artificielle** : « garde-robe sur mesure » + chaque arrondissement ≈ 330 impressions chacun, 0 clic, chiffres quasi identiques → profil d'outil de suivi de positions. C'est aussi ce qui tire la position moyenne vers ~33 depuis le 2026-10-13 (pas une chute de classement).
- **GA4 rate la majorité des demandes** : seulement 3 sur 8 ont un `generate_lead`. PostHog est installé via le proxy `/ingest` (2026-10-26) mais attend sa clé de projet (`NEXT_PUBLIC_POSTHOG_KEY`).

## Pistes, par ordre d'impact

### 1. Fiche Google Business — de loin le plus important

Pour « agrandissement maison Kirkland », le site est en position 4 à 7 mais n'a aucun clic. Sur ces recherches, la carte locale et les annonces passent avant les résultats organiques.

**Vérifié dans Google Maps le 2026-10-26** (Chrome de Gabriel, connecté : résultats personnalisés, la position réelle est probablement un peu moins bonne) :

- Fiche « Dilamco Construction », 5,0 ★ (**10 avis**), dernier avis il y a 3 mois.
- Catégorie affichée « **Travaux généraux** » : c'est le libellé Maps de « Entrepreneur général » (même libellé que Groupe RMI et BelRénov). Le changement du 2026-10-08 a été accepté.
- « entrepreneur général Pierrefonds » : Dilamco **7ᵉ** dans la liste Maps. Le bloc carte de la recherche Google n'en montre que 3 : Constrology (47 avis), Renovluxe (22), BelRénov (10).
- « entrepreneur général Kirkland » : Dilamco **absent** des 9 premiers résultats (Groupe RMI 37 avis, Construction Jean Houde 28…).
- Un des 10 avis est signé Gabriel Nadon : à retirer s'il ne s'agit pas d'un vrai client (avis lié à l'entreprise = contraire aux règles Google).
- Non vérifiable de l'extérieur (vue gestionnaire requise) : zone « Quebec, Canada » toujours présente ?, ancien post « conçoit, fabrique », catégories secondaires.

À faire :

- [x] Catégorie principale « Entrepreneur général »
- [ ] Retirer « Quebec, Canada » des zones desservies, garder les villes de l'Ouest-de-l'Île
- [ ] Retirer la catégorie secondaire « Magasin de meubles de cuisine » et l'ancien post « conçoit, fabrique »
- [ ] Photos de chantiers réels (`docs/media/`)
- [ ] **Demander des avis Google aux clients récents : le levier principal.** Les concurrents devant ont 22 à 47 avis, Dilamco en a 10.
- [ ] Répondre à chaque avis

**Responsable** : Gabriel ou Sean, dans la fiche. Voir aussi `docs/seo/gbp-plan-2026-06-29.md`.

### 2. Titres des pages zones

Les pages zones apparaissent surtout pour « agrandissement maison + ville » (Kirkland, Beaconsfield, Île-Bizard, Dollard-des-Ormeaux, Pointe-Claire), souvent dans le top 10, avec 0 clic. Le titre affiché dans Google ne reprend pas le service cherché :

| Aujourd'hui | Proposé |
|---|---|
| Entrepreneur général à Kirkland — rénovation \| Dilamco | Agrandissement et rénovation à Kirkland \| Dilamco |

Google met en gras les mots tapés : le résultat correspond visiblement à la recherche. Effet non garanti (carte locale et annonces au-dessus, impressions en partie artificielles). Se mesure en 3-4 semaines dans Search Console.

- [x] Réécrire `title` + `description` (2026-10-26, commit e937907) : 8 zones FR (Kirkland, Beaconsfield, DDO, Dorval, Île-Bizard, Pointe-Claire, Pierrefonds-Roxboro, Vaudreuil-Dorion) + 5 EN (Kirkland, Beaconsfield, DDO, Dorval, Pointe-Claire), d'après leurs requêtes GSC. Laval, Saint-Laurent et Rive-Sud inchangés : leurs requêtes correspondent déjà au titre ou n'ont pas de volume.
- [ ] Mesurer le CTR des requêtes « agrandissement maison + ville » 4 semaines après le déploiement

**Responsable** : Claude (code). Effort : S.

### 3. Suivre les appels

Le 514-820-0773 est cliquable sur 6 boutons (`href="tel:+15148200773"`), mais aucun clic n'est mesuré. Une partie des clients appellent au lieu d'écrire : on ne le voit pas.

- [x] Événement `phone_click` vers GTM (`dataLayer`) et PostHog (`lib/track-phone-clicks.ts`)
- [x] Dans GTM : déclencheur « Événement personnalisé » `phone_click` → balise GA4 `phone_click` (copier la balise de `lead_submit`), publier le conteneur (version 6, 2026-11-24)
- [ ] Le marquer comme événement clé dans GA4 (dès qu'il apparaît dans les événements récents)

**Responsable** : Claude (code) + Gabriel (GA4). Effort : S.

### 4. Sous-sol après sinistre

Les deux meilleures demandes du lot sont des sous-sols inondés (Dollard-des-Ormeaux, 25-40 k$ ; Châteauguay, 15-25 k$). La page `/services/renovation/apres-sinistre` existe.

La page n'a eu que 42 impressions en 90 jours (position ~42) : le texte n'est pas le frein. Le volume est sur « rénovation sous-sol » (100-1K/mois) ; « après sinistre » ne fait que 10-100.

- [x] Relier depuis `/services/renovation/sous-sol` FR + EN : tuile « Sous-sol inondé ? » + question FAQ (commit db63241). Déjà reliée depuis l'accueil, les services, `/espaces/sous-sol`, l'article de blogue et les zones Île-Bizard, Laval, Pierrefonds-Roxboro, Rive-Sud.
- [ ] Remplacer les 2 images générées par de vraies photos de reconstruction (`docs/media/`)
- [ ] Ajouter des preuves réelles (délai type, prix d'un sous-sol reconstruit) tirées des soumissions, une fois validées par Sean
- [ ] Lier depuis la zone Dollard-des-Ormeaux seulement avec une source sur les inondations de juin 2026 dans cette ville

Voir aussi la mémoire « seo-renovation-apres-sinistre » (inondations Pierrefonds du 2026-06-20). **Responsable** : Claude (contenu, selon `docs/redaction-web.md`). Effort : M.

### 5. Détail technique : `/fr/blogue/*`

`/fr/blogue/cout-renovation-cuisine` est indexé et redirige en **307** (temporaire, middleware next-intl) au lieu de 308/301.

- [x] Redirection permanente `/fr/:path*` → `/:path*` (`next.config.ts`, commit 18100df)

**Responsable** : Claude (code). Effort : S.

## Suivi du 2026-11-24 (4 semaines après)

**Provenance des 8 demandes reçues depuis le 26 oct.** (ligne « Origine » du courriel) : 6 réelles, 2 pourriels (vente d'avis, agence vidéo).

| Demande | Origine | Arrivée |
|---|---|---|
| Rénovation complète plusieurs pièces, Pierrefonds | Google | `/` |
| Agrandissement 12 pi + rénovation, Beaconsfield | Direct | `/en/areas/kirkland` |
| Travaux correctifs toiture/revêtement, Vaudreuil | Direct | `/contact` |
| Vanité, Verdun (< 15 k$) | Bing | `/` |
| Armoires salle de lavage, Ferme-Neuve (< 15 k$) | ChatGPT | `/en/spaces/kitchen` |
| Armoires murales, Montréal (< 15 k$) | ChatGPT | `/en/spaces/kitchen` |

GA4 depuis le 26 oct. : Direct 161 sessions, Google 46, ChatGPT 32, Bing 9. ChatGPT depuis août : ~70 sessions, page d'arrivée n° 1 `/en/spaces/kitchen` (2 demandes sur 15 sessions).

Le courriel « Rénovation d'un garage à Montréal » (transféré par Sean le 23 nov.) n'est pas passé par le formulaire et a les signes d'un hameçonnage : lien Dropbox illisible, puis `view_plan.pdf` (119 Ko) + pièce `.htm`. Ne saisir aucun mot de passe.

**Ce que répond ChatGPT** (clavardage temporaire, recherche Web, 2026-11-24) :

- « Entrepreneur général pour un agrandissement à Beaconsfield » : Dilamco 5ᵉ sur 6, **avec le téléphone 514-626-1343** (source : annuaire Allô Pros). Innovco, HB Builder, GJC passent devant (avis Google affichés).
- « Rénovation de cuisine complète à Pierrefonds ou Kirkland » : Dilamco **1ᵉʳ**, coordonnées exactes, 5,0 (10 avis).

**Cause du mauvais numéro** : le registre RBQ affiche **514-626-1343** comme téléphone de 9139-1250 Québec inc. Allô Pros (bâti sur le registre), Canpages (« Constructions Dilamco Inc ») et Infobel le recopient. Infobel, la page Facebook et l'étude de cas devactif.ca décrivent encore Dilamco comme concepteur d'armoires.

**Mesures** :

- Titres zones (point 2) : « agrandissement de maison kirkland » position 3,9, Beaconsfield 10,8, toujours 0 clic. Requêtes de forme identique : probablement un outil de suivi. On n'y retouche plus.
- `/fr/blogue/cout-renovation-cuisine` : Google la classe « Page avec redirection » (canonical = `/blogue/…`). Le partage des impressions va se résorber.
- Article cuisine : ~3 900 impressions en 4 semaines (FR + EN), position 18 à 28, 6 clics.

**Fait le 2026-11-24** :

- [x] Fiche Google : site Web → `https://dilamco.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp` (en examen chez Google). Les demandes venant de la fiche porteront « google / organic / gbp » dans le courriel.
- [x] Fiche Google : zones desservies déjà correctes (villes de l'Ouest-de-l'Île, plus de « Quebec, Canada »), catégories à jour.
- [x] Redirection `dilamco.com/avis` (et `/en/review`) → `https://g.page/r/CSNoRO8NxEUQEBM/review` (307).
- [x] GTM version 6 publiée : déclencheur `CE - phone_click` + balise `GA4 - phone_click`. Vérifié en production : `en=phone_click`, réponse 204.
- [x] `llms.txt` : catégories RBQ complètes (dont 7 couvertures/revêtement, 8 portes et fenêtres) + page portes et fenêtres.
- [x] Article cuisine : `metaTitle` aligné sur les requêtes (« Coût d'une rénovation de cuisine au Québec (prix 2026) »).

**Fait le 2026-11-24, 2ᵉ passe (permis d'agrandissement)** :

Constat : sur « agrandissement de maison beaconsfield », l'aperçu IA de Google répond avec des prix (immohorizon) et les frais de permis de la Ville. Les pages zones sont en position 4 à 9 sur « agrandissement de maison <ville> » sans clic.

- [x] Frais et délais officiels du permis d'agrandissement ajoutés en FAQ (FR + EN) sur 8 pages zones : Beaconsfield, Kirkland, Pointe-Claire, DDO, Pierrefonds-Roxboro, Dorval, L'Île-Bizard, Vaudreuil-Dorion (réponse vague remplacée par 3,50 $/m²). Sources en tête de chaque fichier.
- [x] Article `/blogue/permis-agrandissement-maison` (EN `/en/blog/home-addition-permit`) : tableau des tarifs 2026 par ville, délais, comité d'apparence, seuils de la Loi sur les architectes, documents, exclusion GCR, exemple chiffré pour 150 000 $ de travaux. Nouvelle catégorie de blogue « Permis et règlements ».
- [x] Page service agrandissement : bouton « Coût du permis par ville » au lieu de « Voir la cuisine ».
- [x] `llms.txt` : article ajouté.
- Contradictions officielles relevées (non publiées) : Beaconsfield « minimum 4 months » (page permis) contre « minimum 2 months » (tableau des délais) ; Dorval, trois critères différents pour le comité ; lien du tarif mort sur la page permis de Vaudreuil-Dorion.
- [ ] Mesurer dans 4 semaines (≈ 2026-12-22) : clics et position des requêtes « agrandissement de maison <ville> » et « permis agrandissement », et citation dans l'aperçu IA.

**Reste à faire (humain)** :

- [ ] **Sean** : corriger le téléphone au registre RBQ (fiche → « Mettez à jour votre dossier », connexion clicSÉQUR) si 514-626-1343 n'est plus le bon numéro. Puis Canpages et Infobel.
- [ ] **GA4** : dès que `phone_click` apparaît dans Admin → Événements → Événements récents (sous 24 h), cocher son étoile (événement clé).
- [ ] Envoyer `dilamco.com/avis` aux clients des 12 derniers mois. Les concurrents cités par ChatGPT ont 17 à 47 avis.
- [ ] **Facebook** (admin de la Page requis) : l'intro dit « Cabinet Maker. Residential Renovation and Construction. », catégorie « Magasin de meubles et comptoirs », dernière publication = liquidation d'armoires (juin). Mettre « Entrepreneur général » en catégorie et une intro du type « Entrepreneur général en rénovation résidentielle, Ouest-de-l'Île, depuis 2004. RBQ 8306-0806-27. »
- [ ] Étude de cas devactif.ca : elle présente Dilamco comme boutique d'armoires (ChatGPT la lit).
- [ ] Avis signé « Gabriel Nadon » sur la fiche : à retirer s'il ne s'agit pas d'un vrai client.

### À faire plus tard : vrais projets et vrais prix (bloqué, attend Sean)

**Pourquoi** : sur « agrandissement de maison beaconsfield », la page zone est 8ᵉ (258 impressions / 90 j) sans clic. L'aperçu IA de Google cite d'abord des **prix** (immohorizon : 150 000-250 000 $ pour une annexe d'un étage) et les frais de permis. La carte locale montre des concurrents avec 17 à 32 avis. ChatGPT a classé Innovco 1ᵉʳ pour sa « galerie de réalisations consacrée aux agrandissements ». Les pages zones de Dilamco utilisent des images générées et les pages projets sont presque vides.

**Vérifier d'abord** : aucune soumission d'agrandissement dans `Ventes/Résidentiel` (seulement cuisines, sous-sols, sinistres, fenêtres, fournaise). Si Dilamco n'a pas réalisé d'agrandissement, ne publier ni projet ni prix pour ce service : miser sur cuisine, sous-sol et après sinistre.

**À demander à Sean, pour 2 ou 3 projets réels par service** (rien d'identifiable ne sera publié) :

- [ ] Type de travaux, ville ou secteur, année
- [ ] Surface (pi²) et prix final avant taxes, ou fourchette
- [ ] Durée du chantier et délai du permis
- [ ] 5 à 10 photos : avant, pendant, après

**Ensuite (Claude)** : pages projets (`data/project-pages/`), section « prix réels » sur la page service et sur les pages zones, au format repris par l'aperçu IA (fourchette chiffrée en première phrase, tableau). Photos : `docs/media/` → `pnpm run images:webp`.

## Autres chantiers ouverts le même jour

- [ ] **PostHog** : créer le compte `gabriel@dilamco.com` (région US), ajouter la clé `phc_…` dans Vercel, activer les enregistrements de session. Le courriel de confirmation n'était pas arrivé : vérifier le filtre anti-pourriel **Rackspace** (dilamco.com est chez `emailsrvr.com`).
- [x] **IndexNow** : `scripts/indexnow-submit.mjs` + `.github/workflows/indexnow.yml` (après chaque déploiement de production ; lançable à la main avec « toutes les URL »).
- [x] **Origine dans le courriel de demande** : source (Google, IA, UTM, Ads, direct), page d'arrivée, 1re visite et lien PostHog dans le courriel des 3 formulaires (commit c09d23b).
- [x] **Redirection `dilamco.com/avis`** vers le lien « Demander des avis » de la fiche Google (2026-11-24).
- [x] Bing Webmaster Tools : site importé depuis Search Console (2026-10-26).
- [x] `sean@dilamco.com` en CC des deux formulaires (2026-10-26).
