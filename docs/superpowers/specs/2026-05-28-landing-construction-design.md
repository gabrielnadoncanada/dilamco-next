# Landing page « Construction & rénovation » — Dilamco (Google Ads)

Date : 2026-05-28
Statut : approuvé (design), en attente de revue du spec

## 1. Objectif

Landing page autonome conçue pour le trafic **Google Ads payant**, dont l'unique
objectif est de **générer des leads qualifiés** pour les services de construction
et rénovation de Dilamco. Cible prioritaire : **propriétaires résidentiels haut de
gamme** dans le Grand Montréal.

Métrique de succès : taux de conversion visiteur → soumission de formulaire (ou
appel téléphonique). Tout élément de la page qui ne sert pas cet objectif est retiré.

## 2. Positionnement & faits (source : v0-dilamco.vercel.app + SEO_CONTEXT)

- **Entreprise** : entrepreneur général résidentiel & commercial, 20+ ans.
- **RBQ 8306-0806-27** — signal de confiance majeur, mis en avant.
- **Services réels** :
  - Rénovation de cuisine et salle de bain
  - Rallonges / agrandissements de maison
  - Portes, fenêtres et installation de planchers
  - Rénovation complète clé en main
  - Récupération après sinistre (dégâts d'eau, feu) — intervention rapide
  - Volet commercial (bureaux, commerces, entrepôts) — mention mineure
- **Promesse** : délais et budget respectés, prix compétitifs, exécution soignée,
  un seul interlocuteur du début à la fin.
- **Coordonnées** : (514) 820-0773 · info@dilamco.com · Grand Montréal, Laval,
  Rive-Sud, Ouest-de-l'Île · lun–ven 7h–17h, urgences disponibles.
- **Pas de témoignages réels disponibles** → on n'invente rien (règle d'or
  copywriting : pas de faux avis). Section avis laissée optionnelle/vide.

## 3. Décisions techniques

- **Route** : `/landing/construction` (nouvelle, isolée). N'affecte pas `/landing`.
- **Page autonome** : pas de navbar ni footer du site. Header léger + footer léger
  dédiés (réutilisation des patterns `LandingHeader` / `LandingFooter` existants,
  recopiés et adaptés au contexte construction).
- **`robots: noindex, nofollow`** dans la metadata (page payante dédiée Ads, on
  évite la cannibalisation SEO et on garde le lead sur la page).
- **Pas de maillage interne sortant** : aucun lien vers le reste du site (CRO :
  single-CTA, on ne laisse pas fuir le trafic payant).
- **Design system** : tokens existants — fond `#fafaf8`, `primary #253b2f` (vert
  profond), Fraunces (titres) + Plus Jakarta Sans (texte). **Interdiction
  d'utiliser `accent` / `#c4a574` (doré)** dans tout élément visible — règle
  utilisateur. Accents visuels = vert `primary` + neutres.
- **Animations** : réutiliser `Reveal` et les classes `hero-reveal` / `ken-burns`
  déjà présentes dans `/landing`.

## 4. Mécanisme de conversion (formulaire)

L'action `submitContactLead` existante est inadaptée (son enum `espace` =
cuisine/SdB/walk-in… ne couvre pas la construction). On crée une **server action
dédiée**.

- Fichier : `app/landing/construction/actions.ts`
- Export : `submitConstructionLead(prev, formData): Promise<ConstructionLeadState>`
- Réutilise **Resend** (même pattern, mêmes env : `RESEND_API_KEY`,
  `RESEND_FROM_EMAIL`, `RESEND_CONTACT_TO_EMAIL` avec défaut `info@dilamco.com`).
- Validation **zod**.
- **Honeypot** anti-spam (champ `website` masqué).
- Champs (friction minimale — CRO) :
  - `nom` (requis, 2–120)
  - `telephone` (requis, 7–40)
  - `courriel` (requis, email)
  - `ville` (requis, 2–120)
  - `type_projet` (requis, enum) :
    - `renovation-cuisine-sdb` → « Rénovation cuisine / salle de bain »
    - `renovation-complete` → « Rénovation complète / rallonge »
    - `portes-fenetres-planchers` → « Portes, fenêtres & planchers »
    - `sinistre` → « Récupération après sinistre (urgence) »
    - `commercial` → « Projet commercial »
    - `a-determiner` → « À déterminer »
  - `budget` (requis, enum, mêmes paliers que l'existant) :
    `moins-25000`, `25000-50000`, `50000-100000`, `100000-plus`, `a-discuter`
  - `echeance` (requis, enum) : `0-3`, `3-6`, `6-12`, `flexible`
  - `message` (optionnel, ≤ 4000)
- Sujet courriel : `Nouvelle demande construction/rénovation - {nom}`
- États : `idle | success | error` avec `fieldErrors`. Sur succès, message de
  confirmation + (idéal) data-attribute / event pour le tracking de conversion Ads
  (voir §8).

## 5. Structure & copy (ordre optimisé conversion)

> Principe CRO : message match avec l'annonce, argument complet sur une page,
> CTA unique répété aux points de décision, preuves de confiance près des CTA.

### 5.1 Header léger (`ConstructionHeader`)
- Logo Dilamco (gauche)
- Tél cliquable `(514) 820-0773` + bouton « Soumission gratuite » → `#formulaire`
- Sticky, fond translucide.

### 5.2 Hero (`ConstructionHero`)
- Image : `/images/generated/renovation/renovation-extension-hero-01.webp`
  (overlay sombre, ken-burns).
- Badge : `RBQ 8306-0806-27 · 20+ ans · Grand Montréal`
- **H1** (outcome + sans douleur) :
  > « Votre rénovation livrée dans les délais et le budget — par un seul entrepreneur. »
  - Alt A : « Rénovation et construction clé en main, sans mauvaises surprises. »
  - Alt B : « On rénove votre maison. Vous gardez votre tranquillité d'esprit. »
- **Sous-titre** :
  > « Cuisine, salle de bain, rallonge ou projet complet : Dilamco coordonne tout,
  > du premier plan à la dernière finition. Estimation gratuite sous 24 h. »
- **CTA primaire** : « Obtenir mon estimation gratuite » → `#formulaire`
- **CTA secondaire** : bloc téléphone « Parler à un entrepreneur · (514) 820-0773 »
- **Bandeau réassurance** (icônes check) : « Estimation sous 24 h » · « Délais &
  budget respectés » · « Licence RBQ & assuré » · « Sans engagement »

### 5.3 Trust bar (`ConstructionTrustBar`)
Bande sobre, 4 items : **RBQ 8306-0806-27** · **20+ ans d'expérience** ·
**Grand Montréal, Laval, Rive-Sud, Ouest-de-l'Île** · **Entièrement assuré**.

### 5.4 Anchor nav (optionnel, `ConstructionAnchorNav`)
Mini-nav sticky d'ancres (Services · Processus · Réalisations · FAQ · Soumission).
Réutilise le pattern `LandingAnchorNav`.

### 5.5 Problème → Solution (`ConstructionPainSolution`)
- Titre : « La rénovation, sans les cauchemars habituels. »
- Colonne « Ce qu'on entend trop souvent » (douleurs voix-client) :
  - « Le chantier traîne depuis des mois. »
  - « La facture a doublé en cours de route. »
  - « Trois sous-traitants, personne ne se parle. »
  - « Du travail bâclé qu'il faut refaire. »
- Colonne « Avec Dilamco » :
  - « Un échéancier clair, respecté. »
  - « Un budget fixé d'avance, tenu. »
  - « Un seul responsable, du début à la fin. »
  - « Une exécution propre, garantie. »

### 5.6 Services (`ConstructionServices`)
- Titre : « Tout ce dont votre projet a besoin, sous un même toit. »
- 4 cartes principales (image + titre + 1 phrase bénéfice) :
  1. **Rénovation cuisine & salle de bain** — `renovation-cuisine-hero-01.webp`
  2. **Rallonges & agrandissements** — `renovation-extension-approach-01.webp`
  3. **Portes, fenêtres & planchers** — `renovation-plancher-hero-01.webp`
  4. **Récupération après sinistre (urgence)** — `renovation-bath-hero-01.webp`
- Ligne mineure sous les cartes : « Aussi : projets commerciaux (bureaux,
  commerces, entrepôts). »

### 5.7 Pourquoi Dilamco (`ConstructionWhy`)
3–4 différenciateurs (icône + titre + phrase) :
- **Un seul interlocuteur** — du design à la dernière vis.
- **Licence RBQ & assuré** — vous êtes protégé, légalement.
- **Délais & budget respectés** — engagés par écrit, pas en paroles.
- **20+ ans d'exécution** — des centaines de chantiers livrés.

### 5.8 Processus (`ConstructionProcess`)
4 étapes :
1. **Consultation gratuite** — on évalue, on écoute, on conseille.
2. **Estimation détaillée** — un prix clair, par écrit, sous 24 h.
3. **Planification & permis** — échéancier, matériaux, coordination.
4. **Exécution & livraison** — chantier propre, livré dans les délais.

### 5.9 Galerie réalisations (`ConstructionGallery`)
Grille de photos (banque `generated/services` + `generated/renovation` +
`projects`). Légendes factuelles (type de projet + secteur), pas de bla-bla.

### 5.10 Bande CTA (`ConstructionCtaBand`)
- Titre : « Prêt à démarrer votre projet ? »
- Sous-titre : « Estimation gratuite et sans engagement, sous 24 heures. »
- CTA : « Obtenir mon estimation » → `#formulaire` + tél.

### 5.11 Garanties & accréditations (`ConstructionGuarantees`)
Remplace les témoignages (aucun avis réel disponible). 3 blocs :
- **RBQ 8306-0806-27** — licence valide, vérifiable.
- **Entièrement assuré** — responsabilité civile et chantier couverts.
- **Engagement écrit** — délais et budget fixés au contrat.
> Section témoignages laissée en commentaire/structure vide, prête à recevoir de
> vrais avis plus tard (ne pas inventer).

### 5.12 FAQ (`ConstructionFaq`)
Traite les objections (CRO) :
- « Combien coûte une rénovation ? » (paliers, estimation gratuite)
- « Combien de temps ça prend ? »
- « Gérez-vous les permis ? »
- « Êtes-vous licenciés et assurés ? » (RBQ)
- « Travaillez-vous dans mon secteur ? »
- « Offrez-vous une garantie sur les travaux ? »

### 5.13 Formulaire (`ConstructionFormSection` + `ConstructionLeadForm`)
- Ancre `#formulaire`. Titre orienté valeur :
  « Recevez votre estimation gratuite sous 24 h. »
- Réassurance sous le bouton : « Sans engagement · Réponse rapide · RBQ &
  assuré ».
- Bouton : « Obtenir mon estimation gratuite ».
- Champs : §4. Floating labels (réutilise les patterns de `LandingLeadForm`).

### 5.14 Footer léger (`ConstructionFooter`)
Logo, RBQ, tél, courriel, zones, heures, mentions. Pas de menu de site.

### 5.15 Sticky CTA mobile (`ConstructionStickyCta`)
Barre fixe bas d'écran (mobile) : « Estimation gratuite » + icône appel.
Réutilise le pattern `LandingStickyCta`.

## 6. Arborescence des fichiers

```
app/landing/construction/
  page.tsx                      # assemble les sections + metadata noindex
  actions.ts                    # submitConstructionLead (Resend + zod)
  _components/
    index.ts
    ConstructionHeader.tsx
    ConstructionHero.tsx
    ConstructionTrustBar.tsx
    ConstructionAnchorNav.tsx
    ConstructionPainSolution.tsx
    ConstructionServices.tsx
    ConstructionWhy.tsx
    ConstructionProcess.tsx
    ConstructionGallery.tsx
    ConstructionCtaBand.tsx
    ConstructionGuarantees.tsx
    ConstructionFaq.tsx
    ConstructionFormSection.tsx
    ConstructionLeadForm.tsx
    ConstructionFooter.tsx
    ConstructionStickyCta.tsx
```

- `Button` et `Reveal` : réutilisés depuis `app/landing/_components` (import direct,
  pas de duplication) ou recopiés si on veut une isolation stricte → **import
  direct** retenu pour éviter la divergence.

## 7. Principes CRO appliqués (rappel)

1. **Message match** : H1 et badge collent aux mots-clés Ads (« rénovation »,
   « entrepreneur », « clé en main », ville).
2. **CTA unique répété** : « Obtenir mon estimation gratuite » au hero, bande CTA,
   formulaire, sticky mobile. Aucun CTA concurrent.
3. **Pas de navigation fuyante** : zéro lien sortant vers le site.
4. **Preuves près des CTA** : RBQ + assuré + 20 ans répétés au hero, trust bar,
   garanties, formulaire.
5. **Objections traitées** : FAQ + section garanties + transparence du processus.
6. **Friction minimale** : formulaire court, champs essentiels, honeypot invisible,
   téléphone toujours visible comme alternative de conversion.
7. **Au-dessus de la ligne de flottaison** : value prop compréhensible en < 5 s.

## 8. Tracking conversion (Ads)

- GTM est déjà installé au layout racine. La landing étant autonome, vérifier que
  le `GoogleTagManager` reste actif sur cette route (héritée du root layout).
- Sur succès du formulaire : exposer un signal exploitable (ex. push
  `dataLayer` `lead_submit`, ou état rendu côté client). Détail d'implémentation à
  cadrer dans le plan ; ne pas bloquer le rendu si GTM absent.

## 9. Hors périmètre (YAGNI)

- Pas de A/B testing intégré (sera fait via Google Ads / outil externe).
- Pas de CMS / contenu dynamique : copy en dur dans les composants.
- Pas de témoignages inventés.
- Pas de version anglaise (FR uniquement pour ce premier jet).
- Pas de refactor de la landing `/landing` existante.

## 10. Tests / vérification

- `npm run build` passe (typecheck + lint).
- Rendu vérifié dans le navigateur (golden path : remplir le formulaire → succès ;
  CTA → scroll ancre ; responsive mobile + sticky CTA).
- Validation zod testée (champs manquants → erreurs par champ).
