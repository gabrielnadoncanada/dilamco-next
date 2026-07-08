# Recommandation SEO — /zones/laval

> Page-ville modèle. On la corrige à fond, on prouve qu'elle perce, PUIS on la duplique pour Rive-Sud et Ouest-de-l'Île. Tant que le modèle ne ranke pas, on ne clone pas un gabarit cassé.

---

## Diagnostic rapide

| Élément | État actuel | Verdict |
|---|---|---|
| Title | « Armoires de cuisine sur mesure à Laval \| Dilamco \| Dilamco » (58 car.) | **BUG** — double « \| Dilamco » |
| Meta description | Présente, ~215 car. | Trop longue (tronquée en SERP) |
| H1 | « Armoires de cuisine sur mesure à Laval, conçues et installées par Dilamco » | Bon, à garder presque tel quel |
| Contenu | 1086 mots, 7 H2, FAQ présente | Correct en volume, faible en signal **local** |
| JSON-LD | 20 items | À vérifier (LocalBusiness + areaServed manquants ?) |
| GSC | ~0 impression captée pour Laval | La page **ne perce pas** |
| Maillage interne | Page isolée, absente de la nav | **Cause n°1** du non-ranking |
| GBP | Pas de signal local pack pour Laval | Levier majeur non exploité |

**Résumé en une phrase :** la page est correctement écrite mais **orpheline** (aucun lien interne, pas de nav, pas de GBP, contenu générique-ville), donc Google ne la juge ni importante ni locale. Le contenu n'est pas le problème principal — l'**autorité de page** et les **signaux locaux** le sont.

---

## Mot-clé principal recommandé

**`armoires de cuisine sur mesure Laval`**

- Volume proche : « armoires de cuisine laval » = 170/mois (Canada), KD 15, intention **transactionnelle**.
- Position actuelle : « armoire de cuisine sur mesure laval » = pos. **80** (page existe, mais enterrée).
- C'est le meilleur compromis volume × intention × faisabilité pour une page-ville. On vise le **local pack + top 5 organique**.

---

## Mots-clés secondaires

À intégrer **naturellement** dans les H2/H3 et le corps, sans bourrage :

| Mot-clé | Volume/intention | Où le placer |
|---|---|---|
| `cuisine sur mesure Laval` | 10/mois, faible mais support sémantique | H2 services + intro |
| `vanité de salle de bain sur mesure Laval` | 50/mois — 365 impr. captées ailleurs | H2 dédié + lien vers /espaces/salle-de-bain |
| `garde-robe sur mesure Laval` | pos. 27 (déjà un pied dedans !) | H2 dédié + lien vers /espaces/walk-in |
| `armoire sur mesure Laval` | navigationnel | Naturel dans le corps |
| `fabricant / fournisseur d'armoires Laval` | requête « ébéniste Laval » | **Jamais « ébéniste »** — dire « fournisseur / fabricant d'armoires » |

> ⚠️ **Ne jamais se présenter comme « ébéniste » ni « atelier local ».** Réalité : armoires produites par **notre usine partenaire**, mesures et installation par l'équipe Dilamco. Formulations autorisées : « fournisseur d'armoires sur mesure », « armoires directes de notre usine partenaire », « conçues et installées par Dilamco ».

---

## Pourquoi la page ne ranke pas (isolée, double marque, sans GBP)

1. **Page orpheline.** Aucun lien interne pointe vers `/zones/laval` (ni home, ni footer, ni /espaces, ni /contact). Google la voit comme une page de faible importance → crawl rare, autorité quasi nulle. **C'est le blocage n°1.**
2. **Double marque dans le title.** « … \| Dilamco \| Dilamco » : signal de gabarit mal généré, dilue le title et fait amateur en SERP.
3. **Aucun signal GBP local.** La SERP « armoires de cuisine Laval » est dominée par un **local pack** (Armodec Laval, etc.). Sans fiche Google Business Profile desservant Laval + citations locales, impossible d'apparaître dans le pack. L'organique seul ne suffit pas sur une requête géo.
4. **Contenu « ville générique ».** 1086 mots corrects mais sans **preuve locale** : pas de quartiers de Laval nommés, pas de projets réalisés, pas de délais/zones concrets. Google ne distingue pas cette page d'un template dupliquable → faible pertinence locale perçue.
5. **Cannibalisation partielle.** « vanité … laval » (365 impr.) est captée par `/espaces/salle-de-bain`, pas par `/zones/laval`. La page-ville doit **récupérer et rediriger** ce jus via maillage, pas se battre contre.

---

## Correctif technique immédiat (supprimer le double « | Dilamco »)

Le title est généré avec un suffixe de marque **déjà présent** dans le titre spécifique de la page → double suffixe. À corriger dans le template de métadonnées des pages `/zones/[slug]`.

- **Symptôme :** `title` de page = `Armoires de cuisine sur mesure à Laval | Dilamco` + `template: '%s | Dilamco'` → `… | Dilamco | Dilamco`.
- **Correctif (au choix) :**
  - Retirer « \| Dilamco » du titre spécifique de la page et laisser le `template` du layout ajouter le suffixe **une seule fois**, **OU**
  - Définir le title en `absolute` pour les pages /zones afin de contourner le template.
- **À vérifier après build :** un seul « \| Dilamco » dans le `<title>` rendu (voir `view-source`), et cohérence avec `og:title`.

Effort : **15 min.** Impact SEO direct faible, mais crédibilité + CTR + hygiène du gabarit (qui sera dupliqué). À faire **avant** de cloner.

---

## Nouveau title (≤ 60 car.)

```
Armoires de cuisine sur mesure à Laval | Dilamco
```
→ **48 caractères.** Un seul suffixe de marque. Mot-clé principal en tête.

Variante si on veut pousser la conversion (encore ≤ 60) :
```
Armoires sur mesure à Laval | Cuisine & vanité | Dilamco
```
→ 55 car. (À tester ; le premier reste le plus propre pour le mot-clé pilier.)

---

## Nouvelle meta description (≤ 155 car.)

```
Armoires de cuisine, vanités et garde-robes sur mesure à Laval. Prise de mesures à domicile, installation par notre équipe. Showroom à Dorval.
```
→ **141 caractères.** Couvre les 3 gammes + prise de mesures + installation + preuve physique (showroom). Pas de bourrage de « Laval ».

---

## Nouveau H1

Garder l'actuel (il est bon) avec un léger resserrement :

```
Armoires de cuisine sur mesure à Laval, conçues et installées par Dilamco
```

Un seul H1. Mot-clé principal + différenciateur (« conçues et installées par Dilamco »). Ne pas répéter « Laval » dans les sous-titres au point d'en faire un tic.

---

## Structure recommandée (H2/H3)

Objectif : contenu **vraiment local** + parcours clair mesures → installation. Cible ~1200-1500 mots, mais la valeur vient de la spécificité, pas du volume.

```
H1  Armoires de cuisine sur mesure à Laval, conçues et installées par Dilamco
    [intro 2-3 phrases + CTA « Prendre rendez-vous » / « Voir le showroom »]

H2  Nos services d'armoires sur mesure à Laval
    H3  Armoires de cuisine sur mesure
    H3  Vanités de salle de bain sur mesure
    H3  Garde-robes et walk-in sur mesure
    H3  Rangements sur mesure (sous-sol, bureau, mobilier intégré)

H2  Les quartiers de Laval que nous desservons
    [Chomedey, Fabreville, Sainte-Rose, Laval-des-Rapides, Vimont, Duvernay,
     Auteuil, Pont-Viau, Sainte-Dorothée — texte, pas juste une liste]

H2  Comment ça fonctionne : de la prise de mesures à l'installation
    H3  1. Rencontre et prise de mesures à domicile (partout à Laval)
    H3  2. Conception et sélection des finis (showroom de Dorval)
    H3  3. Production en usine partenaire
    H3  4. Livraison et installation par l'équipe Dilamco

H2  Combien coûtent des armoires sur mesure à Laval ?
    [fourchettes honnêtes, ce qui influence le prix, comment obtenir une soumission]

H2  Délais et zone de livraison vers Laval
    [délai de production/installation, couverture depuis Dorval → Laval, ponts/accès]

H2  Projets et clients à Laval
    [preuves : réalisations, avis, photos ; à alimenter dès que dispo]

H2  Foire aux questions — armoires sur mesure à Laval
    [4-6 Q/R, voir plus bas]

[CTA final : soumission gratuite + adresse showroom Dorval + lien contact]
```

---

## Texte d'introduction recommandé (2-3 phrases)

> Vous rénovez votre cuisine, votre salle de bain ou vos rangements à Laval ? Dilamco conçoit des armoires sur mesure adaptées à votre espace, avec **prise de mesures à domicile partout à Laval** — de Chomedey à Sainte-Rose en passant par Laval-des-Rapides. Vos armoires arrivent directement de notre usine partenaire, puis notre équipe s'occupe de l'installation ; vous pouvez aussi voir et toucher les finis à notre showroom de Dorval, à quelques minutes de Laval.

(Ton québécois, naturel, un seul « Laval » de trop évité ; le showroom Dorval + la proximité géographique servent de preuve de service local.)

---

## Sections à ajouter

Ce sont ces ajouts qui transforment une page-ville générique en page qui **mérite** de ranker.

### 1. Quartiers de Laval desservis
Un paragraphe qui nomme et regroupe les secteurs, avec une phrase de contexte réelle par pôle (pas une liste sèche) :
- **Chomedey, Laval-des-Rapides, Pont-Viau** — secteurs centraux, condos et maisons de ville : optimisation d'espaces compacts.
- **Sainte-Rose, Fabreville, Auteuil** — maisons unifamiliales : cuisines complètes, walk-in, rangements de sous-sol.
- **Vimont, Duvernay, Sainte-Dorothée** — projets de rénovation et constructions neuves.

Bénéfice : signal géographique riche + longue traîne (« armoires sur mesure Chomedey », etc.).

### 2. Prise de mesures à domicile
Expliquer concrètement : gratuité, ce qu'on mesure, ce qu'on apporte (échantillons de finis), durée, aucune obligation. C'est le **différenciateur** vs commander en ligne ou en grande surface.

### 3. Zones et délais de livraison vers Laval
- Distance showroom Dorval → Laval (accès via A-13 / A-440 / ponts).
- Fourchette de délai réaliste (production usine partenaire + installation) — cohérente avec les délais officiels Dilamco (9-15 semaines selon projet).
- Rassurer : livraison + installation incluses, pas de sous-traitance floue.

### 4. Preuves / projets Laval
- 2-4 réalisations (photos avant/après ou renders de projets type).
- Avis clients (idéalement de clients de Laval ou de la couronne nord).
- Compteurs concrets si dispo (nb de projets, années). **Preuve E-E-A-T = le levier qui manque le plus.**

---

## FAQ recommandée (4-6 Q/R rédigées)

Marquer en `FAQPage` JSON-LD (voir section Schema). Rédigé, prêt à coller :

**Desservez-vous tout Laval ?**
Oui. Nous nous déplaçons dans tous les secteurs de Laval — Chomedey, Sainte-Rose, Fabreville, Laval-des-Rapides, Vimont, Duvernay et les environs — pour la prise de mesures comme pour l'installation. Notre showroom est à Dorval, à quelques minutes de Laval par l'autoroute 13.

**Quel est le délai pour des armoires sur mesure à Laval ?**
Comptez généralement de 9 à 15 semaines entre la prise de mesures et l'installation, selon l'ampleur du projet et les finis choisis. Nous confirmons l'échéancier précis au moment de la soumission.

**Comment se passe la prise de mesures à domicile ?**
Un membre de notre équipe se rend chez vous, à Laval, prend les mesures exactes de votre espace et vous présente les finis et les configurations possibles. C'est gratuit et sans engagement ; vous repartez avec une soumission claire.

**Combien coûtent des armoires de cuisine sur mesure à Laval ?**
Le prix dépend des dimensions, du nombre de caissons, des finis et de la quincaillerie. La plupart des projets de cuisine complète se situent dans une fourchette que nous vous confirmons après la prise de mesures. Nous offrons une soumission gratuite et détaillée.

**Est-ce Dilamco qui installe les armoires ?**
Oui. Vos armoires proviennent directement de notre usine partenaire, et notre propre équipe s'occupe de la livraison et de l'installation à Laval. Vous avez un seul interlocuteur du début à la fin.

**Faites-vous aussi les vanités de salle de bain et les garde-robes ?**
Oui. En plus des cuisines, nous concevons des vanités de salle de bain et des garde-robes / walk-in sur mesure pour les résidences de Laval, avec les mêmes finis et la même prise de mesures à domicile.

---

## Maillage interne

**C'est le correctif à plus fort impact.** La page doit cesser d'être orpheline.

### Liens ENTRANTS à créer (vers /zones/laval)
| Source | Ancre suggérée | Priorité |
|---|---|---|
| **Footer global** (bloc « Zones desservies ») | « Armoires sur mesure à Laval » | 🔴 Critique |
| **Home** (section couverture / « où nous servons ») | « Laval » / « Nous desservons Laval » | 🔴 Critique |
| `/contact` (zone de service) | « Laval » | 🟠 Haute |
| `/espaces/cuisine` (mention géo) | « armoires de cuisine à Laval » | 🟠 Haute |
| `/espaces/salle-de-bain` | « vanités sur mesure à Laval » | 🟠 Haute |
| `/espaces/walk-in` | « garde-robes sur mesure à Laval » | 🟡 Moyenne |
| Autres pages /zones (cross-link) | « Laval » | 🟡 Moyenne |

> Le **footer** est le plus important : il crée un lien sitewide vers chaque page-ville et établit le pattern « Zones desservies : Laval · Rive-Sud · Ouest-de-l'Île », signal local fort et réutilisable pour les clones.

### Liens SORTANTS (depuis /zones/laval)
- → `/espaces/cuisine` (depuis H3 cuisine)
- → `/espaces/salle-de-bain` (depuis H3 vanités — **récupère** le jus « vanité laval » capté aujourd'hui par cette page)
- → `/espaces/walk-in` (depuis H3 garde-robes)
- → `/boutique` (armoires disponibles / configurateur, depuis section services ou CTA)
- → `/contact` (CTA soumission + prise de mesures)

Chaque lien sortant renforce la cohérence thématique et distribue le jus vers les pages piliers, tout en gardant l'utilisateur dans le tunnel.

---

## Modèle à dupliquer (Rive-Sud, Ouest-de-l'Île) — checklist

Ne dupliquer **qu'après** avoir corrigé Laval et vérifié qu'elle bouge en GSC (impressions qui montent, position qui passe sous 20). Pour chaque nouvelle page-ville :

- [ ] **Slug** : `/zones/rive-sud`, `/zones/ouest-de-l-ile`.
- [ ] **Title** ≤ 60 car., **un seul** « \| Dilamco » (vérifier que le bug de gabarit est bien réglé).
- [ ] **Meta** ≤ 155 car., adaptée à la ville (garder structure : 3 gammes + mesures + installation + showroom Dorval).
- [ ] **H1** : « Armoires de cuisine sur mesure à [Ville], conçues et installées par Dilamco ».
- [ ] **Quartiers/villes réels** (ne PAS copier ceux de Laval) :
  - Rive-Sud → Brossard, Longueuil, Saint-Hubert, Boucherville, Saint-Lambert, La Prairie, Candiac.
  - Ouest-de-l'Île → Pointe-Claire, Dollard-des-Ormeaux, Kirkland, Beaconsfield, Pierrefonds, Dorval, Baie-d'Urfé.
- [ ] **Preuves locales propres** à la ville (projets, avis) — pas de copier-coller de Laval.
- [ ] **Délais/zone** ajustés (distance depuis Dorval ; pour l'Ouest-de-l'Île, insister sur la proximité immédiate du showroom).
- [ ] **FAQ** : reprendre le gabarit, remplacer « Laval » et les quartiers, garder les réponses honnêtes (usine partenaire, installation par l'équipe).
- [ ] **Maillage** : ajouter la ville au bloc footer « Zones desservies » + liens depuis home/contact/espaces + cross-link entre pages-villes.
- [ ] **Schema** : `LocalBusiness`/`Service` avec `areaServed` = la bonne ville.
- [ ] **Anti-duplicate** : au moins ~40 % de texte unique par page (intro, quartiers, preuves, délais). Éviter le contenu « spun » qui déclenche le filtre de pages générées.
- [ ] **Jamais** « ébéniste » / « atelier local » ; toujours « usine partenaire » + « installation par l'équipe Dilamco ».
- [ ] **Interdit** : couleur or (#c4a574) dans tout élément visible.

---

## Schema recommandé (LocalBusiness/Service + areaServed)

Vérifier les 20 JSON-LD existants : s'assurer qu'ils incluent bien un bloc **local** avec `areaServed`. Squelette cible (JSON-LD) :

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Dilamco",
  "url": "https://dilamco.com/zones/laval",
  "image": "https://dilamco.com/…/showroom.jpg",
  "telephone": "+1-…",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "… (showroom)",
    "addressLocality": "Dorval",
    "addressRegion": "QC",
    "addressCountry": "CA"
  },
  "areaServed": {
    "@type": "City",
    "name": "Laval"
  },
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Armoires de cuisine sur mesure" }},
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vanités de salle de bain sur mesure" }},
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garde-robes et walk-in sur mesure" }}
  ]
}
```

Plus un bloc **`FAQPage`** distinct reprenant les Q/R ci-dessus, et un **`BreadcrumbList`** (Accueil › Zones › Laval).

Notes :
- `areaServed` doit refléter la **ville de la page** (Laval ici) — c'est le champ qui compte pour la duplication.
- Ne pas inventer d'adresse à Laval : l'établissement physique est le **showroom de Dorval**. `areaServed` = Laval, `address` = Dorval. C'est cohérent et honnête (business à zone de service).
- Éviter de sur-marquer : un seul `LocalBusiness`/`HomeAndConstructionBusiness` par page, pas 5 variantes qui se contredisent.

---

## Priorité / Effort estimé / Impact estimé

| Action | Priorité | Effort | Impact |
|---|---|---|---|
| Fix double « \| Dilamco » (title + gabarit /zones) | 🔴 P0 | 15 min | Faible SEO / crédibilité + hygiène clones |
| Nouveau title + meta | 🔴 P0 | 15 min | Moyen (CTR + pertinence) |
| **Maillage interne (footer + home + espaces)** | 🔴 P0 | 1-2 h | **Élevé** — débloque le crawl/autorité |
| Sections locales (quartiers, mesures, délais, preuves) | 🟠 P1 | 3-4 h | Élevé (pertinence locale + longue traîne) |
| FAQ rédigée + FAQPage schema | 🟠 P1 | 1 h | Moyen (rich results + intention) |
| Schema LocalBusiness + areaServed + Breadcrumb | 🟠 P1 | 1 h | Moyen |
| **GBP desservant Laval + citations locales** | 🔴 P0 (hors page) | continu | **Élevé** — seule voie vers le local pack |
| Dupliquer Rive-Sud / Ouest-de-l'Île | 🟡 P2 | 2-3 h/page | Élevé (après validation Laval) |

**Ordre d'exécution conseillé :**
1. Correctifs techniques (title/meta/gabarit) — 30 min.
2. **Maillage interne** (footer + home + /espaces) — c'est ce qui sort la page de l'orphelinat.
3. Enrichissement local (quartiers, mesures, délais, preuves) + FAQ + schema.
4. En parallèle, hors code : **GBP + citations** (indispensable pour le local pack Laval).
5. Observer GSC 3-4 semaines. Si impressions montent et position < 20 → **cloner** Rive-Sud puis Ouest-de-l'Île avec la checklist.

> **Rappel de fond :** sur une requête géo comme « armoires de cuisine Laval », le classement se joue autant **hors page** (GBP, citations, avis, liens) que sur la page elle-même. La meilleure page-ville du monde reste sous le local pack si la fiche Google Business ne couvre pas Laval.
