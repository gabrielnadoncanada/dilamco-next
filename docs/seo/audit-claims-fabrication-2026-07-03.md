# Audit des affirmations « fabrication / atelier / ébéniste » — 2026-07-03

> **STATUT : APPLIQUÉ le 2026-07-03** (go de Gabriel). Tous les correctifs code des sections 1-5 sont en place, incluant Pierrefonds→Rigaud dans la boutique et la FAQ salle de montre → Dorval. Restent les actions hors code de la section 6 (GBP showroom Dorval, communiqué/outreach) et le remplacement éventuel des rendus 3D par de vraies photos (marqués « illustration 3D » en attendant).

**Contexte (faits confirmés par Gabriel, 2026-07-03).**

- Armoires fabriquées à l'étranger (emplacement non divulgué volontairement) par un **fournisseur exclusif** — l'usine n'appartient pas à Dilamco.
- **Trois lieux** : adresse d'affaires à Pierrefonds-Roxboro (résidence, statut entrepreneur — c'est l'adresse du schéma/GBP), **showroom à Dorval** (pas encore listé sur Google), **entrepôt à Rigaud**.
- Prix réels d'un projet : **30 000–65 000 $** (la FAQ Laval disait 20–50 k$).
- Délai sur mesure hors stock : **9–15 semaines** (la FAQ disait 6–10). Les armoires en stock (boutique) se livrent en quelques jours.
- `cuisine-haut-de-gamme-blanche-laval.webp` = **vrai projet** ✅. « Depuis plus de 20 ans » = **vrai** ✅.
- Équipe locale : design, prise de mesures, installation. Fiche Google actuelle : « Dilamco Construction ».

**Problème.** Le site affirme ou laisse entendre une fabrication artisanale locale (« ébéniste », « atelier du Grand Montréal », « atelier qui se visite »). C'est faux, et au Québec c'est l'**impression générale** qui compte (art. 218-219 LPC) : même sans écrire « fabriqué au Canada », laisser croire à une fabrication locale est une représentation trompeuse. C'est aussi un risque E-E-A-T : Google et les clients peuvent croiser avec le GBP « Dilamco Construction » et les avis (planchers, contracteur).

## Légende

- ❌ **FAUX** — affirme un fait qui n'existe pas (atelier local, ébéniste, visite d'atelier). À corriger absolument.
- ⚠️ **TROMPEUR** — techniquement ambigu mais l'impression générale = fabrication locale. À reformuler.
- 🔶 **À VALIDER** — chiffre ou fait que seul Gabriel peut confirmer (prix, délais, visite d'entrepôt, photos).
- ✅ **OK** — défendable tel quel (« direct de l'usine », « usine partenaire exclusive », « fabrication contrôlée » sans localisation ni possession).

## Vocabulaire cible (réutilisable partout)

| À bannir | À utiliser |
|---|---|
| ébéniste, ébéniste-cuisiniste, ébénisterie, artisan, « d'ici » | spécialiste des armoires, concepteur-installateur, importateur direct |
| « fabricant, pas revendeur », « nous fabriquons », « notre propre usine » | « direct de l'usine, sans intermédiaire », « fabriqué exclusivement pour Dilamco par notre usine partenaire », « conçu par nous, fabriqué selon nos standards » |
| notre atelier (du Grand Montréal), atelier de fabrication, fabrication en atelier | fabrication contrôlée chez notre usine partenaire, contrôle qualité à la réception |
| « l'atelier se visite », « rencontrez les gens qui fabriquent » | « notre salle de montre de Dorval vous accueille (sur rendez-vous) » |
| « entrepôt de Pierrefonds », « entrepôt à Montréal », « atelier à Pierrefonds » | « salle de montre à Dorval », « entrepôt à Rigaud » (ou « entrepôt dans la région de Montréal » si on ne veut pas nommer Rigaud) |
| cabinetmaker, workshop, local cabinetmaker, « we build/manufacture » (EN) | factory-direct, made exclusively for Dilamco by our partner factory, our Greater Montreal warehouse |

**Changement clé vs première version de cet audit** : « fabricant » et « notre usine » ne sont **plus** utilisables — l'usine est un fournisseur exclusif, pas une propriété de Dilamco. L'angle de vente honnête reste fort : *exclusivité* (personne d'autre ne vend ces armoires ici), *circuit court* (importateur direct, pas de distributeur), *contrôle* (specs et contrôle qualité par Dilamco), *stock local* (livraison rapide).

La landing (`LandingDifferentiators.tsx:12`) « Entrepôt à Montréal depuis plus de 20 ans, relation directe avec notre usine » est à corriger aussi : → « Établis dans le Grand Montréal depuis plus de 20 ans (✅ confirmé), relation directe avec notre usine partenaire. Pas d'intermédiaire, pas d'aléas d'approvisionnement. »

---

## 1. `data/page-builder/zone-pages/laval.ts` — page la plus problématique (17 claims)

| Ligne | Texte actuel | Verdict | Réécriture proposée |
|---|---|---|---|
| 7 | title « …Laval \| Ébéniste Dilamco » | ❌ | « Armoires de cuisine sur mesure à Laval \| Dilamco » |
| 9 | meta desc « fabrication en atelier par un ébéniste-cuisiniste » + énumération de 5 quartiers | ❌ + stuffing | « Armoires de cuisine, vanités et garde-robes sur mesure à Laval : prise de mesures à domicile, armoires directes de notre usine partenaire, installation par notre équipe. » |
| 20 | Service schema : « par un ébéniste-cuisiniste établi dans le Grand Montréal » | ❌ (dans le JSON-LD !) | « par Dilamco, concepteur-installateur d'armoires établi dans le Grand Montréal » |
| 34 | H1 « par un ébéniste d'ici » | ❌ | « Armoires de cuisine sur mesure à Laval, conçues et installées par Dilamco » |
| 36 | « fabriquées dans notre atelier du Grand Montréal, à une vingtaine de minutes de Laval » | ❌ | « conçues avec vous à partir de votre espace réel, fabriquées exclusivement pour Dilamco par notre usine partenaire et installées par notre équipe. Prise de mesures à domicile partout à Laval, et salle de montre à Dorval pour voir matériaux et finitions. » | |
| 49 | badges « Ébéniste-cuisiniste », « Fabrication en atelier » | ❌ | « Direct de l'usine », « Prix direct usine », « Laval » |
| 66 | « choisissent un ébéniste plutôt qu'une grande surface » | ❌ | « choisissent le direct usine plutôt qu'une grande surface » (ou « un spécialiste des armoires ») |
| 68 | « Le sur-mesure d'atelier… » | ⚠️ | « Le vrai sur-mesure répond à un autre besoin… » |
| 71-73 | « Fabricant, pas revendeur — Vos armoires sont fabriquées dans notre atelier » | ❌ (fabricant = faux aussi : fournisseur exclusif) | « Direct de l'usine, sans intermédiaire — Nos armoires sont fabriquées exclusivement pour Dilamco par notre usine partenaire, selon nos standards. » |
| 78 | « Pas de zone grise entre le vendeur, l'usine et l'installateur. » | ✅ | (déjà honnête — garder) |
| 96-98 | « Ce qu'on fabrique… savoir-faire d'ébénisterie » | ❌ (ébénisterie) | « Ce qu'on fait sur mesure pour Laval… le même savoir-faire s'applique » |
| 135 | carte « Ébénisterie sur mesure » | ❌ | « Meubles intégrés sur mesure » |
| 157 | « l'atelier est à une vingtaine de minutes pour ceux qui veulent voir la fabrication » | ❌ | « Pas besoin de vous déplacer : on prend les mesures chez vous. Et si vous voulez voir matériaux, caissons et finitions, notre salle de montre de Dorval est à une demi-heure de Laval. » |
| 179-181 | étape « Fabrication en atelier — dans notre atelier du Grand Montréal » | ❌ | « Fabrication — vos armoires sont fabriquées par notre usine partenaire selon nos plans, avec contrôle qualité avant installation » |
| 201 | « du même atelier et de la même équipe » | ❌ | « de la même équipe qui s'occuperait du vôtre » |
| 259 | FAQ salle de montre : « Non — et c'est voulu. Nous sommes un atelier de fabrication… L'atelier est dans le Grand Montréal… se visite sur rendez-vous » | ❌ (doublement faux : pas d'atelier, ET il y a un showroom) | Reformuler la question « Avez-vous une salle de montre? » → « Pas à Laval, mais tout près : notre salle de montre est à Dorval, à environ une demi-heure. Venez voir les caissons, portes, finitions et la quincaillerie sur rendez-vous. La prise de mesures, elle, se fait chez vous. » |
| 263 | FAQ prix : « entre 20 000 $ et 35 000–50 000 $ et plus » | ❌ (chiffres inexacts) | « Une cuisine complète sur mesure se situe généralement entre 30 000 $ et 65 000 $, selon le nombre de caissons, les matériaux et la complexité de l'agencement. La soumission détaillée est gratuite. » |
| 271 | FAQ délais : « 6 à 10 semaines… La fabrication en atelier nous donne un contrôle direct » | ❌ (chiffres inexacts + atelier) | « Pour du sur mesure, comptez environ 9 à 15 semaines entre l'approbation des plans et l'installation. Pour un projet à partir de nos armoires en stock, la livraison se fait en quelques jours. » |
| 275 | FAQ « Êtes-vous fabricant ou revendeur? — Fabricant. Dilamco est un atelier d'ébénisterie » | ❌ | Remplacer la question par « D'où viennent vos armoires? » — « Elles sont fabriquées exclusivement pour Dilamco par notre usine partenaire, sans intermédiaire. Le design, la gestion de projet et l'installation sont faits par notre équipe locale, et le stock est tenu dans notre entrepôt du Grand Montréal. » |

### Preuves sociales fabriquées (section « Réalisations livrées à Laval »)

| Ligne | Problème | Verdict | Correction |
|---|---|---|---|
| 204-213 | « Vanité sur mesure à Laval — fabriquée et installée pour une résidence de Laval » illustrée par `/images/generated/spaces/space-bath-hero-01.webp` (**rendu 3D**) | ❌ preuve fabriquée | le projet `/projets/salle-de-bain/vanite-sur-mesure-laval` existe : utiliser la **vraie photo** du projet, sinon retirer la carte |
| 216-225 | « Cuisine haut de gamme blanche… réalisée pour une propriété de Laval » (`/images/projects/cuisine-haut-de-gamme-blanche-laval.webp`) | ✅ | vrai projet confirmé — garder, c'est la meilleure preuve locale de la page |
| 228-237 | « Cuisine sur mesure » avec alt « fabriquée en atelier » sur un rendu 3D | ❌ | alt « Exemple d'aménagement de cuisine sur mesure (illustration 3D) » ou retirer la carte |

### Patterns SEO à assainir sur la même page

- **Bourrage** : « armoires de cuisine sur mesure à Laval » dans title, H1, meta, nom de service, FAQ, alt, CTA → garder title/H1/meta, varier le reste naturellement.
- **Énumération de quartiers** ×2 (lignes 9, 55, 255) → une seule fois, dans la FAQ « Desservez-vous tous les quartiers ».
- Ne **pas** cloner ce template pour d'autres villes tant que chaque page n'a pas de la vraie preuve locale (projet livré, photo réelle) — sinon pattern doorway.

## 2. `data/page-builder/zone-pages/laval.en.ts` — miroir EN, pire

| Ligne | Texte | Verdict |
|---|---|---|
| 7 | « Dilamco Cabinetmaker » | ❌ |
| 9, 36, 73, 157, 180, 200, 233, 257 | « built in our workshop », « our Greater Montreal workshop », « visited by appointment » | ❌ |
| 34 | « built by a **local** cabinetmaker » | ❌ (le pire claim du site) |
| 49 | badges « Cabinetmaker », « Workshop-built » | ❌ |
| 66-71 | « cabinetmaker over a big-box store », « Manufacturer, not reseller » | ❌ / ✅ (manufacturer OK) |
| 269-273 | « Building in our own workshop », « cabinetmaking workshop » | ❌ |

→ Appliquer les mêmes réécritures que le FR : manufacturer / our own factory / Pierrefonds warehouse.

## 3. Pages statiques et espaces (FR)

| Fichier:ligne | Texte | Verdict | Proposition |
|---|---|---|---|
| `static-pages/home.ts:7` | title « Cuisiniste à Montréal » | ✅/⚠️ | « cuisiniste » = spécialiste cuisine, acceptable; ne pas y accoler « fabrication » locale |
| `home.ts:9` | « cuisiniste à Pierrefonds et Montréal : conception, fabrication et installation » | ⚠️ | « conception, fourniture et installation de cuisines… armoires directes de notre usine partenaire » |
| `home.ts:29-31` | « Cuisiniste et ébéniste sur mesure à Montréal », « Cuisiniste basé à Pierrefonds-Roxboro, on conçoit, fabrique et installe » | ❌ (ébéniste) / ⚠️ | « Cuisiniste et spécialiste des armoires sur mesure à Montréal »; « Basés dans le Grand Montréal, on conçoit vos espaces ici; les armoires sont fabriquées exclusivement pour nous par notre usine partenaire » |
| `static-pages/a-propos.ts:7` | title « Ébéniste et fabricant d'armoires sur mesure à Montréal » | ❌ | « Spécialiste des armoires sur mesure à Montréal — À propos de Dilamco » (le corps de la page est déjà prudent ✅) |
| `static-pages/a-propos.en.ts:7,26,59` | « Custom cabinetmaker in Montreal », « A custom workshop » | ❌ | « Custom cabinet manufacturer in Montreal », « A custom-cabinet company built to control execution » |
| `static-pages/services.ts:7` | title « Ébénisterie sur mesure à Montréal : design, fabrication et installation » | ❌ | « Armoires sur mesure à Montréal : design, fabrication et installation » |
| `static-pages/espaces.ts:36` | « concevoir, fabriquer et installer » | ✅ | (pas de localisation de la fabrication) |
| `space-pages/cuisine.ts:98,137` | « en tant que fabricant et installateur », « Un seul fabricant d'armoires, du plan à la pose » | ⚠️ (fabricant = fournisseur exclusif, pas Dilamco) | « en tant que concepteur et installateur, avec un accès direct à l'usine »; « Une seule équipe responsable, du plan à la pose. » |
| `space-pages/cuisine.ts:141` | « Fabrication contrôlée en atelier. » | ⚠️ | « Fabrication contrôlée chez notre usine partenaire. » |
| `space-pages/cuisine.ts:293` | « Basés à Pierrefonds-Roxboro, on conçoit, fabrique et installe… » | ⚠️ | « Basés dans le Grand Montréal, on conçoit et installe partout dans la région; les armoires sont fabriquées exclusivement pour nous par notre usine partenaire. » |
| `space-pages/salle-de-bain.ts:39,98,295,336` | « On conçoit, fabrique et installe » / « qu'on fabrique » | ✅ | garder (aucune localisation de fabrication) |
| `space-pages/sous-sol.ts:67,98,242,305` | « ébénisterie intégrée / sur mesure » ×4 | ❌ (mot) | remplacer par « rangements intégrés / mobilier intégré / menuiserie intégrée » |
| `service-pages/fabrication.ts:7` | title « Fabrication d'armoires sur mesure à Montréal » | ⚠️ | « Fabrication d'armoires sur mesure — notre processus » ou « …pour Montréal » (le corps de page est déjà neutre ✅) |
| `service-pages/installation.ts:212` | « Nous installons les éléments que nous fabriquons » | ✅ | garder |
| `renovation-pages/apres-sinistre.ts:178,231` | « préparés en atelier », « Fabrication contrôlée en atelier » | ⚠️ | « préparés avant le chantier », « Fabrication contrôlée dans notre usine, pas d'assemblage improvisé » |
| `renovation-pages/apres-sinistre.en.ts:178,231` | « prepared in the workshop », « Controlled workshop fabrication » | ⚠️ | idem EN |

## 4. Boutique et UI partagée

| Fichier:ligne | Texte | Verdict | Proposition |
|---|---|---|---|
| `lib/shop/collections.ts:178` | « tenus dans notre entrepôt de Pierrefonds… Le sur mesure (notre atelier) conçoit des armoires… » | ❌ ×2 (entrepôt = Rigaud; atelier = inexistant) | « Nos armoires en stock sont des modules standards tenus dans notre entrepôt de Rigaud : prix affiché, prêts à installer, livrés en quelques jours. Le sur mesure conçoit des armoires aux dimensions exactes de votre pièce, avec un délai plus long (environ 9 à 15 semaines). » |
| `lib/shop/collections.ts:194,198,551` (EN) | « kept in stock at our Pierrefonds warehouse », « Custom (our workshop) builds cabinets », « held in inventory in Pierrefonds » | ❌ | remplacer Pierrefonds par Rigaud (ou « our Greater Montreal area warehouse ») et retirer « our workshop » |
| `lib/shop/photos.ts:3` | libellé de galerie « Atelier » | ⚠️ | « Fabrication » ou « Usine » (si les photos montrent la vraie usine, « Atelier » est mensonger visuellement) |
| `messages/fr.json:229` / `en.json:229` | « Atelier — vérification finition » / « Workshop — finish inspection » | 🔶 | si la photo vient de la vraie usine : « Contrôle qualité — finition »; sinon retirer |

## 5. Fichiers publics et schéma

| Fichier | Problème | Verdict | Action |
|---|---|---|---|
| `public/llms.txt:3,5,8,17` | « fabrication en atelier… **Atelier à Pierrefonds-Roxboro** », « fabricant-installateur » | ❌ | « Spécialiste des armoires de cuisine sur mesure : conception, importation directe de notre usine partenaire exclusive et installation. Salle de montre à Dorval, entrepôt à Rigaud, service partout dans le Grand Montréal. » |
| `public/sitemap-images.xml:1034,1207,1975` | captions « built in our workshop », « ébénisterie », « fabriquée en atelier » | ❌ | régénérer après correction des alt (fichier dérivé) |
| `seo/schema/site.ts:16,21` | commentaires internes « atelier » | ✅ | cosmétique, non public |
| `seo/schema/builders.ts:83` | `HomeAndConstructionBusiness` | ✅ | cohérent avec la réalité (mieux que `Manufacturer` local) |
| Laval `service.description` (via builders) | « ébéniste-cuisiniste » injecté dans le JSON-LD Service | ❌ | corrigé par la ligne 20 de laval.ts |

## 6. Hors code (à ne pas oublier)

- `docs/seo/backlinks/communique-presse.md` et `outreach-emails.md` répètent le positionnement ébéniste/atelier. **S'ils ont été envoyés**, ne rien pouvoir y faire; s'ils sont en attente, les corriger avant envoi.
- GBP « Dilamco Construction » : décider de l'identité publique unique (ex. « Dilamco — Armoires de cuisine sur mesure ») et aligner GBP ↔ site ↔ llms.txt (NAP + catégorie). L'adresse actuelle (Pierrefonds) est la résidence/adresse d'affaires — acceptable en mode « service area business », mais **le showroom de Dorval n'est pas listé** : c'est la vraie opportunité local SEO. Créer une fiche GBP « showroom » à Dorval (adresse publique visitable, photos, avis) et l'ajouter au site (page contact + schéma `LocalBusiness` avec le showroom, l'adresse Pierrefonds restant l'adresse légale).
- `LandingDifferentiators.tsx:12` « Entrepôt à Montréal depuis plus de 20 ans » 🔶 — confirmer le chiffre.

## 7. Faits confirmés par Gabriel (2026-07-03) — plus rien de bloquant

| Question | Réponse |
|---|---|
| Usine : propriété ou fournisseur ? | **Fournisseur exclusif** → pas de « fabricant » ni « notre usine » |
| Adresse Pierrefonds ? | Résidence / adresse d'affaires (statut entrepreneur) — pas un entrepôt ni un atelier |
| Lieu visitable ? | **Showroom à Dorval** (pas encore listé sur Google) |
| Entrepôt ? | **Rigaud** |
| Prix réel d'un projet | **30 000–65 000 $** |
| Délai sur mesure (hors stock) | **~9–15 semaines** (en stock : quelques jours) |
| Photo cuisine blanche Laval | **Vrai projet** — garder |
| « Depuis plus de 20 ans » | **Vrai** — garder (rattacher à l'entreprise, pas à « entrepôt à Montréal ») |

## Ordre d'exécution proposé (après validation)

1. **laval.ts + laval.en.ts** (le plus grave : claims faux + preuves fabriquées + JSON-LD).
2. **llms.txt** (consommé par les IA, propage le faux positionnement).
3. **Titles/meta** : a-propos, services, home (FR+EN).
4. **Mentions « atelier/ébénisterie »** restantes (espaces, rénovation, boutique, messages).
5. Régénérer `sitemap-images.xml`, vérifier le build, Request indexing GSC sur les pages modifiées.
