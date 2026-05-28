# Landing « Construction & rénovation » — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire une landing page autonome `/landing/construction`, optimisée
pour la conversion du trafic Google Ads, qui génère des leads pour les services de
construction/rénovation résidentiels de Dilamco.

**Architecture:** Route Next.js App Router isolée (pas de navbar/footer du site,
`noindex`). Une page serveur assemble ~15 composants présentationnels sous
`_components/`. La conversion passe par une **server action dédiée** (`submitConstructionLead`,
Resend + zod) et un formulaire client. Réutilisation des primitives existantes
`Button` et `Reveal` de `app/landing/_components` (import direct, pas de duplication).

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind v4, zod, Resend, vitest,
lucide-react. Tokens de design existants (vert `primary #253b2f`, Fraunces + Plus
Jakarta Sans). **Interdit : couleur doré `accent #c4a574` dans tout élément visible.**

Référence copy : voir `docs/superpowers/specs/2026-05-28-landing-construction-design.md`
(toute la copy verbatim y est ; ce plan la reprend par section).

---

## File Structure

```
app/landing/construction/
  page.tsx                      # assemble sections + metadata noindex (Task 18)
  actions.ts                    # submitConstructionLead + schema exporté (Task 1)
  _components/
    index.ts                    # barrel exports (Task 2, complété au fil de l'eau)
    ConstructionHeader.tsx      # Task 3
    ConstructionHero.tsx        # Task 4
    ConstructionTrustBar.tsx    # Task 5
    ConstructionAnchorNav.tsx   # Task 6
    ConstructionPainSolution.tsx# Task 7
    ConstructionServices.tsx    # Task 8
    ConstructionWhy.tsx         # Task 9
    ConstructionProcess.tsx     # Task 10
    ConstructionGallery.tsx     # Task 11
    ConstructionCtaBand.tsx     # Task 12
    ConstructionGuarantees.tsx  # Task 13
    ConstructionFaq.tsx         # Task 14
    ConstructionFormSection.tsx # Task 16
    ConstructionLeadForm.tsx    # Task 15
    ConstructionFooter.tsx      # Task 17
    ConstructionStickyCta.tsx   # Task 17
tests/
  landing-construction-action.test.ts  # Task 1
```

Réutilisé sans modification : `app/landing/_components/button.tsx` (`Button`),
`app/landing/_components/Reveal.tsx` (`Reveal`), `lib/utils` (`cn`).

Constantes partagées (tél, RBQ, zones) : définies en haut de chaque composant qui
les utilise OU dans un petit module `app/landing/construction/_components/constants.ts`.
**Décision : créer `constants.ts`** pour DRY (tél, courriel, RBQ, zones, heures).

---

## Task 1: Server action `submitConstructionLead` + validation (TDD)

**Files:**
- Create: `app/landing/construction/actions.ts`
- Test: `tests/landing-construction-action.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/landing-construction-action.test.ts
import { describe, it, expect } from "vitest";
import { constructionLeadSchema } from "@/app/landing/construction/actions";

const valid = {
  nom: "Jean Tremblay",
  courriel: "jean@example.com",
  telephone: "514-820-0773",
  ville: "Laval",
  type_projet: "renovation-cuisine-sdb",
  budget: "50000-100000",
  echeance: "3-6",
  message: "",
};

describe("constructionLeadSchema", () => {
  it("accepte un lead complet et valide", () => {
    const result = constructionLeadSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejette un nom trop court", () => {
    const result = constructionLeadSchema.safeParse({ ...valid, nom: "J" });
    expect(result.success).toBe(false);
  });

  it("rejette un courriel invalide", () => {
    const result = constructionLeadSchema.safeParse({ ...valid, courriel: "pas-un-email" });
    expect(result.success).toBe(false);
  });

  it("rejette un type_projet hors enum", () => {
    const result = constructionLeadSchema.safeParse({ ...valid, type_projet: "autre-chose" });
    expect(result.success).toBe(false);
  });

  it("rejette un budget hors enum", () => {
    const result = constructionLeadSchema.safeParse({ ...valid, budget: "1000000" });
    expect(result.success).toBe(false);
  });

  it("transforme un message absent en chaine vide", () => {
    const { message, ...rest } = valid;
    const result = constructionLeadSchema.safeParse(rest);
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.message).toBe("");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/landing-construction-action.test.ts`
Expected: FAIL — `constructionLeadSchema` n'existe pas (import error).

- [ ] **Step 3: Write the implementation**

```ts
// app/landing/construction/actions.ts
"use server";

import { Resend } from "resend";
import { z } from "zod";

export type ConstructionLeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export const constructionLeadSchema = z.object({
  nom: z.string().trim().min(2, "Entrez votre nom.").max(120),
  courriel: z.email("Entrez un courriel valide.").max(160),
  telephone: z
    .string()
    .trim()
    .min(7, "Entrez un numero de telephone valide.")
    .max(40),
  ville: z.string().trim().min(2, "Entrez votre ville ou secteur.").max(120),
  type_projet: z.enum(
    [
      "renovation-cuisine-sdb",
      "renovation-complete",
      "portes-fenetres-planchers",
      "sinistre",
      "commercial",
      "a-determiner",
    ],
    { error: () => ({ message: "Selectionnez le type de projet." }) },
  ),
  budget: z.enum(
    ["moins-25000", "25000-50000", "50000-100000", "100000-plus", "a-discuter"],
    { error: () => ({ message: "Selectionnez un budget approximatif." }) },
  ),
  echeance: z.enum(["0-3", "3-6", "6-12", "flexible"], {
    error: () => ({ message: "Selectionnez un calendrier souhaite." }),
  }),
  message: z
    .string()
    .trim()
    .max(4000)
    .optional()
    .or(z.literal(""))
    .transform((v) => v ?? ""),
});

const labelMap = {
  type_projet: {
    "renovation-cuisine-sdb": "Renovation cuisine / salle de bain",
    "renovation-complete": "Renovation complete / rallonge",
    "portes-fenetres-planchers": "Portes, fenetres & planchers",
    sinistre: "Recuperation apres sinistre (urgence)",
    commercial: "Projet commercial",
    "a-determiner": "A determiner",
  },
  budget: {
    "moins-25000": "Moins de 25 000 $",
    "25000-50000": "25 000 $ a 50 000 $",
    "50000-100000": "50 000 $ a 100 000 $",
    "100000-plus": "100 000 $ et plus",
    "a-discuter": "A discuter",
  },
  echeance: {
    "0-3": "0-3 mois",
    "3-6": "3-6 mois",
    "6-12": "6-12 mois",
    flexible: "Flexible",
  },
} as const;

function getStringValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function submitConstructionLead(
  _previousState: ConstructionLeadState,
  formData: FormData,
): Promise<ConstructionLeadState> {
  // Honeypot anti-spam : un bot remplit "website".
  if (getStringValue(formData, "website")) {
    return { status: "success", message: "Votre demande a ete envoyee." };
  }

  const parsed = constructionLeadSchema.safeParse({
    nom: getStringValue(formData, "nom"),
    courriel: getStringValue(formData, "courriel"),
    telephone: getStringValue(formData, "telephone"),
    ville: getStringValue(formData, "ville"),
    type_projet: getStringValue(formData, "type_projet"),
    budget: getStringValue(formData, "budget"),
    echeance: getStringValue(formData, "echeance"),
    message: getStringValue(formData, "message"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Corrigez les champs indiques puis renvoyez le formulaire.",
      fieldErrors: Object.fromEntries(
        Object.entries(fieldErrors).flatMap(([key, value]) =>
          value && value[0] ? [[key, value[0]]] : [],
        ),
      ),
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "error",
      message: "La configuration de l'envoi courriel est incomplete.",
    };
  }

  const toEmail = process.env.RESEND_CONTACT_TO_EMAIL ?? "info@dilamco.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!fromEmail) {
    return {
      status: "error",
      message: "Ajoutez RESEND_FROM_EMAIL avant d'envoyer des demandes.",
    };
  }

  const data = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const summary = {
    nom: data.nom,
    courriel: data.courriel,
    telephone: data.telephone,
    ville: data.ville,
    typeProjet: labelMap.type_projet[data.type_projet],
    budget: labelMap.budget[data.budget],
    echeance: labelMap.echeance[data.echeance],
    message: data.message,
  };

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.courriel,
    subject: `Nouvelle demande construction/renovation - ${data.nom}`,
    text: [
      "Nouvelle demande construction/renovation Dilamco",
      "",
      `Nom: ${summary.nom}`,
      `Courriel: ${summary.courriel}`,
      `Telephone: ${summary.telephone}`,
      `Ville / secteur: ${summary.ville}`,
      `Type de projet: ${summary.typeProjet}`,
      `Budget approximatif: ${summary.budget}`,
      `Calendrier souhaite: ${summary.echeance}`,
      "",
      "Message:",
      summary.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h2 style="margin-bottom: 16px;">Nouvelle demande construction/renovation Dilamco</h2>
        <p><strong>Nom:</strong> ${escapeHtml(summary.nom)}</p>
        <p><strong>Courriel:</strong> ${escapeHtml(summary.courriel)}</p>
        <p><strong>Telephone:</strong> ${escapeHtml(summary.telephone)}</p>
        <p><strong>Ville / secteur:</strong> ${escapeHtml(summary.ville)}</p>
        <p><strong>Type de projet:</strong> ${escapeHtml(summary.typeProjet)}</p>
        <p><strong>Budget approximatif:</strong> ${escapeHtml(summary.budget)}</p>
        <p><strong>Calendrier souhaite:</strong> ${escapeHtml(summary.echeance)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(summary.message)}</p>
      </div>
    `,
  });

  if (error) {
    return {
      status: "error",
      message:
        "Impossible d'envoyer votre demande pour le moment. Reessayez sous peu.",
    };
  }

  return {
    status: "success",
    message: "Votre demande a ete envoyee. Nous vous recontacterons sous peu.",
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- tests/landing-construction-action.test.ts`
Expected: PASS (6 tests).

- [ ] **Step 5: Commit**

```bash
git add app/landing/construction/actions.ts tests/landing-construction-action.test.ts
git commit -m "feat: construction lead server action with zod validation"
```

---

## Task 2: Scaffolding — constants, barrel, page skeleton avec metadata noindex

**Files:**
- Create: `app/landing/construction/_components/constants.ts`
- Create: `app/landing/construction/_components/index.ts`
- Create: `app/landing/construction/page.tsx`

- [ ] **Step 1: Create constants**

```ts
// app/landing/construction/_components/constants.ts
export const CONTACT = {
  phoneDisplay: "(514) 820-0773",
  phoneHref: "tel:+15148200773",
  email: "info@dilamco.com",
  rbq: "RBQ 8306-0806-27",
  zones: "Grand Montréal · Laval · Rive-Sud · Ouest-de-l'Île",
  hours: "Lun–ven 7h–17h · Urgences disponibles",
} as const;

export const FORM_ANCHOR = "formulaire";
```

- [ ] **Step 2: Create the barrel (sera complété à chaque tâche)**

```ts
// app/landing/construction/_components/index.ts
export {};
```

- [ ] **Step 3: Create the page skeleton with noindex metadata**

```tsx
// app/landing/construction/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rénovation et construction clé en main au Grand Montréal | Dilamco",
  description:
    "Entrepreneur résidentiel RBQ. Rénovation cuisine, salle de bain, rallonges et plus — délais et budget respectés. Estimation gratuite sous 24 h.",
  robots: { index: false, follow: false },
  alternates: { canonical: undefined },
};

export default function ConstructionLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Sections ajoutées dans les tâches suivantes (Task 18 finalise l'ordre) */}
    </main>
  );
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: build OK, route `/landing/construction` listée, sans erreur de type.

- [ ] **Step 5: Commit**

```bash
git add app/landing/construction/_components/constants.ts app/landing/construction/_components/index.ts app/landing/construction/page.tsx
git commit -m "feat: scaffold construction landing route with noindex metadata"
```

---

## Convention pour les tâches 3 à 17 (composants présentationnels)

Chaque composant :
- est un composant **serveur** par défaut (pas de `"use client"`), sauf le formulaire (Task 15) et le sticky CTA (Task 17, qui utilise du state de scroll).
- importe `Button` depuis `../../_components/button` et `Reveal` depuis `../../_components/Reveal` si besoin.
- importe `CONTACT` / `FORM_ANCHOR` depuis `./constants`.
- utilise UNIQUEMENT les tokens du design system (`bg-background`, `text-foreground`,
  `bg-primary`, `text-primary`, `border-border`, `text-muted-foreground`, etc.).
  **Aucune classe `accent` / aucune couleur doré.**
- est ajouté à `index.ts`.
- la copy verbatim vient de la section correspondante du spec
  `docs/superpowers/specs/2026-05-28-landing-construction-design.md`.

Cadence par tâche : créer le fichier → ajouter l'export au barrel → `npm run build` →
commit.

---

## Task 3: ConstructionHeader

**Files:** Create `app/landing/construction/_components/ConstructionHeader.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — header sticky `fixed top-0 inset-x-0 z-50`, fond
  `bg-background/85 backdrop-blur` + bordure basse `border-border`. Contenu dans
  `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between` :
  - Gauche : logo `next/image` `/images/logo.svg` (h ~28px, alt "Dilamco").
  - Droite (gap-4) : lien tél `CONTACT.phoneHref` affichant `CONTACT.phoneDisplay`
    (icône `Phone` lucide, masqué sous `sm` sauf l'icône), et
    `<Button asChild size="sm"><a href={`#${FORM_ANCHOR}`}>Soumission gratuite</a></Button>`.

- [ ] **Step 2: Export** dans `index.ts` : `export { ConstructionHeader } from "./ConstructionHeader";`
- [ ] **Step 3:** `npm run build` → OK.
- [ ] **Step 4: Commit** `feat: construction landing header`

---

## Task 4: ConstructionHero

**Files:** Create `ConstructionHero.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — section `relative min-h-[88vh] overflow-hidden bg-foreground`,
  image de fond `next/image` `fill priority` classe `ken-burns object-cover`,
  src `/images/generated/renovation/renovation-extension-hero-01.webp`,
  alt « Rénovation et agrandissement résidentiel réalisé par Dilamco ».
  Overlays sombres (réutiliser les 2 gradients de `LandingHero` lignes 18-19).
  Contenu `relative max-w-7xl mx-auto px-… flex items-center` (pt pour compenser le
  header `pt-28`), `max-w-2xl` :
  - Badge (pill blanc translucide, classe `hero-reveal`) : `RBQ 8306-0806-27 · 20+ ans · Grand Montréal`
  - **H1** `font-display text-white …` (reprendre tailles de LandingHero h1) :
    « Votre rénovation livrée dans les délais et le budget — par un seul entrepreneur. »
  - **Sous-titre** `text-white/85` : « Cuisine, salle de bain, rallonge ou projet
    complet : Dilamco coordonne tout, du premier plan à la dernière finition.
    Estimation gratuite sous 24 h. »
  - CTA primaire `Button asChild size="lg"` → `#${FORM_ANCHOR}` :
    « Obtenir mon estimation gratuite » + `ArrowRight`.
  - CTA secondaire : bloc tél (reprendre le markup tél de LandingHero lignes 77-92)
    libellé « Parler à un entrepreneur » + `CONTACT.phoneDisplay`.
  - Bandeau réassurance (4 items `CheckCircle2`) : « Estimation sous 24 h » ·
    « Délais & budget respectés » · « Licence RBQ & assuré » · « Sans engagement ».
  Utiliser `style={{ animationDelay }}` croissants comme LandingHero pour le reveal.

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction hero`

---

## Task 5: ConstructionTrustBar

**Files:** Create `ConstructionTrustBar.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — bande `bg-primary text-primary-foreground` (vert),
  `py-5`, contenu `max-w-7xl mx-auto px-… flex flex-wrap items-center justify-center
  gap-x-8 gap-y-2 text-sm`. 4 items séparés par des points, chacun avec une icône
  lucide : `ShieldCheck` **RBQ 8306-0806-27** · `Award` **20+ ans d'expérience** ·
  `MapPin` **Grand Montréal, Laval, Rive-Sud, Ouest-de-l'Île** · `BadgeCheck`
  **Entièrement assuré**.

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction trust bar`

---

## Task 6: ConstructionAnchorNav

**Files:** Create `ConstructionAnchorNav.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — nav sticky `sticky top-16 z-40 bg-background/90 backdrop-blur
  border-b border-border` (sous le header), liste horizontale scrollable `overflow-x-auto`
  d'ancres : Services `#services` · Processus `#processus` · Réalisations `#realisations`
  · FAQ `#faq` · `<a href="#formulaire">Soumission</a>` (mise en avant en gras/`text-primary`).
  Liens `text-sm text-muted-foreground hover:text-foreground`.

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction anchor nav`

---

## Task 7: ConstructionPainSolution

**Files:** Create `ConstructionPainSolution.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — section `py-20 lg:py-28`, `max-w-6xl mx-auto px-…`.
  Titre centré `font-display text-3xl/4xl` : « La rénovation, sans les cauchemars
  habituels. ». Sous le titre, grille 2 colonnes (`md:grid-cols-2 gap-6`) :
  - Carte « Ce qu'on entend trop souvent » — fond `bg-muted`, items avec icône `X`
    (rouge `text-destructive`) : « Le chantier traîne depuis des mois. » · « La
    facture a doublé en cours de route. » · « Trois sous-traitants, personne ne se
    parle. » · « Du travail bâclé qu'il faut refaire. »
  - Carte « Avec Dilamco » — fond `bg-primary text-primary-foreground`, items avec
    icône `Check` : « Un échéancier clair, respecté. » · « Un budget fixé d'avance,
    tenu. » · « Un seul responsable, du début à la fin. » · « Une exécution propre,
    garantie. »
  Envelopper dans `Reveal` si souhaité.

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction pain/solution`

---

## Task 8: ConstructionServices

**Files:** Create `ConstructionServices.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — section `id="services" py-20 lg:py-28 bg-muted/40`.
  Titre : « Tout ce dont votre projet a besoin, sous un même toit. ». Grille
  `sm:grid-cols-2 lg:grid-cols-4 gap-6`. Tableau `services` mappé en cartes
  (image `next/image` ratio 4/3 `rounded-2xl object-cover`, titre, 1 phrase) :
  1. titre « Rénovation cuisine & salle de bain », img
     `/images/generated/renovation/renovation-cuisine-hero-01.webp`,
     texte « Espaces repensés, finitions impeccables, durables. »
  2. titre « Rallonges & agrandissements », img
     `/images/generated/renovation/renovation-extension-approach-01.webp`,
     texte « Plus d'espace, intégré proprement à votre maison. »
  3. titre « Portes, fenêtres & planchers », img
     `/images/generated/renovation/renovation-plancher-hero-01.webp`,
     texte « Mise à niveau qui améliore confort et valeur. »
  4. titre « Récupération après sinistre », img
     `/images/generated/renovation/renovation-bath-hero-01.webp`,
     texte « Dégâts d'eau ou feu : intervention rapide, remise à neuf. »
  Sous la grille, ligne `text-sm text-muted-foreground text-center` : « Aussi :
  projets commerciaux (bureaux, commerces, entrepôts). »

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction services`

---

## Task 9: ConstructionWhy

**Files:** Create `ConstructionWhy.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — section `py-20 lg:py-28`. Titre : « Pourquoi les
  propriétaires choisissent Dilamco ». Grille `sm:grid-cols-2 lg:grid-cols-4 gap-8`,
  4 blocs (icône lucide dans un rond `bg-primary/10 text-primary`, titre, phrase) :
  - `Users` **Un seul interlocuteur** — « Du design à la dernière vis, une seule équipe responsable. »
  - `ShieldCheck` **Licence RBQ & assuré** — « Vous êtes protégé, légalement et financièrement. »
  - `CalendarCheck` **Délais & budget respectés** — « Engagés par écrit au contrat, pas en paroles. »
  - `Hammer` **20+ ans d'exécution** — « Des centaines de chantiers résidentiels livrés. »

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction why`

---

## Task 10: ConstructionProcess

**Files:** Create `ConstructionProcess.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — section `id="processus" py-20 lg:py-28 bg-muted/40`.
  Titre : « Un processus clair, du premier appel à la livraison ». 4 étapes en grille
  `sm:grid-cols-2 lg:grid-cols-4 gap-6`, chaque carte avec un numéro (01–04 en
  `font-display text-primary/30 text-4xl`), titre, phrase :
  1. **Consultation gratuite** — « On évalue, on écoute, on conseille. »
  2. **Estimation détaillée** — « Un prix clair, par écrit, sous 24 h. »
  3. **Planification & permis** — « Échéancier, matériaux, coordination. »
  4. **Exécution & livraison** — « Chantier propre, livré dans les délais. »

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction process`

---

## Task 11: ConstructionGallery

**Files:** Create `ConstructionGallery.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — section `id="realisations" py-20 lg:py-28`. Titre :
  « Des réalisations qui parlent d'elles-mêmes ». Grille responsive
  `sm:grid-cols-2 lg:grid-cols-3 gap-4`. 6 images `next/image` `rounded-xl object-cover
  aspect-[4/3]` avec légende factuelle (`figcaption text-xs text-muted-foreground mt-2`).
  Sources (existantes, vérifiées) :
  - `/images/generated/services/service-renovation-project-01.webp` — « Rénovation complète · Rive-Sud »
  - `/images/generated/services/service-renovation-project-02.webp` — « Cuisine · Laval »
  - `/images/generated/services/service-renovation-project-03.webp` — « Salle de bain · Montréal »
  - `/images/generated/renovation/renovation-cuisine-approach-01.webp` — « Cuisine sur mesure »
  - `/images/generated/renovation/renovation-extension-hero-01.webp` — « Agrandissement »
  - `/images/projects/cuisine-haut-de-gamme-blanche-laval.webp` — « Cuisine haut de gamme · Laval »

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction gallery`

---

## Task 12: ConstructionCtaBand

**Files:** Create `ConstructionCtaBand.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — bande pleine largeur `bg-primary text-primary-foreground
  py-16 text-center`. Titre `font-display text-3xl` : « Prêt à démarrer votre projet ? ».
  Sous-titre : « Estimation gratuite et sans engagement, sous 24 heures. ». Deux CTA :
  `Button asChild variant="secondary"` → `#${FORM_ANCHOR}` « Obtenir mon estimation »
  et lien tél `CONTACT.phoneDisplay`. (Accepter `title`/`description` en props
  optionnelles avec ces valeurs par défaut pour réutilisation.)

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction cta band`

---

## Task 13: ConstructionGuarantees

**Files:** Create `ConstructionGuarantees.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — section `py-20 lg:py-28`. Titre : « Vous êtes protégé,
  à chaque étape ». Grille `md:grid-cols-3 gap-6`, 3 cartes `border border-border
  rounded-2xl p-6` (icône, titre, phrase) :
  - `ShieldCheck` **RBQ 8306-0806-27** — « Licence valide et vérifiable auprès de la Régie. »
  - `Umbrella` **Entièrement assuré** — « Responsabilité civile et chantier couverts. »
  - `FileCheck` **Engagement écrit** — « Délais et budget fixés au contrat. »
  > Ne PAS inventer de témoignages. Si de vrais avis sont fournis plus tard, ajouter
  > une section dédiée ici.

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction guarantees`

---

## Task 14: ConstructionFaq

**Files:** Create `ConstructionFaq.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — section `id="faq" py-20 lg:py-28 bg-muted/40`,
  `max-w-3xl mx-auto`. Titre : « Questions fréquentes ». Utiliser des `<details>`
  natifs (`group`) stylés (`border-b border-border py-4`, summary `cursor-pointer
  font-medium flex justify-between`, chevron `ChevronDown group-open:rotate-180`).
  6 entrées (Q/R factuelles) :
  - « Combien coûte une rénovation ? » → « Ça dépend de l'ampleur. La plupart de nos
    projets démarrent autour de 25 000 $. On vous remet une estimation gratuite et
    détaillée sous 24 h. »
  - « Combien de temps dure un projet ? » → « De quelques semaines pour une salle de
    bain à quelques mois pour une rénovation complète. On fixe l'échéancier dès le départ. »
  - « Gérez-vous les permis ? » → « Oui. On s'occupe des permis et de la coordination
    avec la municipalité quand c'est requis. »
  - « Êtes-vous licenciés et assurés ? » → « Oui — licence RBQ 8306-0806-27 et
    couverture d'assurance complète. »
  - « Travaillez-vous dans mon secteur ? » → « Grand Montréal, Laval, Rive-Sud et
    Ouest-de-l'Île. Contactez-nous pour confirmer. »
  - « Offrez-vous une garantie ? » → « Oui, nos travaux sont garantis. Les détails
    figurent au contrat. »

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction faq`

---

## Task 15: ConstructionLeadForm (client)

**Files:** Create `ConstructionLeadForm.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — copier la structure de
  `app/landing/_components/LandingLeadForm.tsx` (composants internes `SubmitButton`,
  `FieldError`, `FloatField`, `FloatSelect` — réutiliser tel quel), avec ces différences :
  - `"use client"`.
  - importer `submitConstructionLead`, `type ConstructionLeadState` depuis `../actions`.
  - `useActionState(submitConstructionLead, { status: "idle" })`.
  - **Retirer** le champ caché `espace`.
  - Champs visibles (ordre) : `nom`, `telephone`, `courriel`, `ville` (FloatField),
    `type_projet` (FloatSelect), `budget` (FloatSelect), `echeance` (FloatSelect),
    `message` (textarea). Honeypot `website` masqué conservé.
  - Options `type_projet` :
    `{value:"renovation-cuisine-sdb",label:"Rénovation cuisine / salle de bain"}`,
    `{value:"renovation-complete",label:"Rénovation complète / rallonge"}`,
    `{value:"portes-fenetres-planchers",label:"Portes, fenêtres & planchers"}`,
    `{value:"sinistre",label:"Récupération après sinistre (urgence)"}`,
    `{value:"commercial",label:"Projet commercial"}`,
    `{value:"a-determiner",label:"À déterminer"}`.
  - Options `budget` :
    `{value:"moins-25000",label:"Moins de 25 000 $"}`,
    `{value:"25000-50000",label:"25 000 $ à 50 000 $"}`,
    `{value:"50000-100000",label:"50 000 $ à 100 000 $"}`,
    `{value:"100000-plus",label:"100 000 $ et plus"}`,
    `{value:"a-discuter",label:"À discuter"}`.
  - Options `echeance` : `0-3` « 0 à 3 mois », `3-6` « 3 à 6 mois », `6-12` « 6 à 12
    mois », `flexible` « Flexible ».
  - Libellé bouton : « Obtenir mon estimation gratuite ».
  - **Tracking conversion** : dans un `useEffect` déclenché quand `formState.status
    === "success"`, pousser `window.dataLayer?.push({ event: "lead_submit", form:
    "construction" })` (garder optionnel, ne pas planter si `dataLayer` absent).

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction lead form`

---

## Task 16: ConstructionFormSection

**Files:** Create `ConstructionFormSection.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement** — section `id={FORM_ANCHOR} scroll-mt-24 py-20 lg:py-28
  bg-primary text-primary-foreground`. Grille `lg:grid-cols-2 gap-12 max-w-6xl mx-auto`:
  - Colonne gauche (texte) : titre `font-display text-3xl/4xl` « Recevez votre
    estimation gratuite sous 24 h. » + sous-titre « Dites-nous en deux mots votre
    projet. On vous rappelle avec une estimation claire — sans engagement. » + liste
    de réassurance (`CheckCircle2`) « Réponse sous 24 h » · « RBQ & assuré » · « Sans
    engagement » + bloc tél alternatif `CONTACT.phoneDisplay`.
  - Colonne droite : carte blanche `bg-card text-card-foreground rounded-2xl p-6/8
    shadow-xl` contenant `<ConstructionLeadForm />`. Sous le formulaire (dans le
    form, déjà géré Task 15) la mention légale.

- [ ] **Step 2: Export** + **Step 3:** build OK + **Step 4: Commit** `feat: construction form section`

---

## Task 17: ConstructionFooter + ConstructionStickyCta

**Files:** Create `ConstructionFooter.tsx`, `ConstructionStickyCta.tsx`; Modify `index.ts`

- [ ] **Step 1: Implement footer** — `bg-foreground text-background py-12`. Contenu
  `max-w-7xl mx-auto px-…` : logo `/images/logo-white.svg`, ligne coordonnées
  (`CONTACT.phoneDisplay`, `CONTACT.email`), `CONTACT.zones`, `CONTACT.hours`,
  `CONTACT.rbq`, et ligne © « {année} Dilamco. Tous droits réservés. ». Aucun menu de site.

- [ ] **Step 2: Implement sticky CTA** — `"use client"`. Barre `fixed bottom-0 inset-x-0
  z-50 md:hidden bg-background/95 backdrop-blur border-t border-border p-3 flex gap-3`.
  Affichée après un léger scroll (state `visible` via `window.scrollY > 400`,
  listener dans `useEffect`). Bouton plein `Button asChild className="flex-1"` →
  `#${FORM_ANCHOR}` « Estimation gratuite » + bouton icône tél (`a href={CONTACT.phoneHref}`).
  S'inspirer de `LandingStickyCta` existant.

- [ ] **Step 3: Export les deux** dans `index.ts`.
- [ ] **Step 4:** build OK.
- [ ] **Step 5: Commit** `feat: construction footer and sticky cta`

---

## Task 18: Assemblage de la page + vérification finale

**Files:** Modify `app/landing/construction/page.tsx`

- [ ] **Step 1: Assembler** toutes les sections dans l'ordre du spec §5 :

```tsx
import {
  ConstructionHeader,
  ConstructionHero,
  ConstructionTrustBar,
  ConstructionAnchorNav,
  ConstructionPainSolution,
  ConstructionServices,
  ConstructionWhy,
  ConstructionProcess,
  ConstructionGallery,
  ConstructionCtaBand,
  ConstructionGuarantees,
  ConstructionFaq,
  ConstructionFormSection,
  ConstructionFooter,
  ConstructionStickyCta,
} from "./_components";

// dans le <main> :
<ConstructionHeader />
<ConstructionHero />
<ConstructionTrustBar />
<ConstructionAnchorNav />
<ConstructionPainSolution />
<ConstructionServices />
<ConstructionWhy />
<ConstructionProcess />
<ConstructionGallery />
<ConstructionCtaBand />
<ConstructionGuarantees />
<ConstructionFaq />
<ConstructionFormSection />
<ConstructionFooter />
<ConstructionStickyCta />
```

- [ ] **Step 2: Build + lint**

Run: `npm run build`
Expected: build OK, 0 erreur de type/lint, route `/landing/construction` générée.

- [ ] **Step 3: Vérification navigateur (golden path)**

Run: `npm run dev` puis ouvrir `http://localhost:3000/landing/construction`.
Vérifier :
- Hero lisible, value prop claire en < 5 s, CTA visible sans scroll.
- Tous les CTA « estimation » scrollent vers `#formulaire`.
- Ancres de la nav fonctionnent (services, processus, réalisations, faq).
- Formulaire : soumission champs vides → erreurs par champ ; soumission valide →
  message de succès (vérifier l'envoi Resend si clés présentes en local, sinon le
  message d'erreur de config attendu).
- Responsive mobile : sticky CTA apparaît au scroll, formulaire empilé, images OK.
- **Aucune couleur doré visible** nulle part.

- [ ] **Step 4: Commit final**

```bash
git add app/landing/construction/page.tsx
git commit -m "feat: assemble construction landing page"
```

---

## Notes d'exécution

- Vérifier l'existence de chaque image référencée avant de l'utiliser (toutes ont
  été listées comme présentes au moment du spec ; si une manque, utiliser un
  fallback du même dossier `generated/renovation` ou `generated/services`).
- Ne jamais introduire de lien sortant vers le reste du site (CRO single-CTA).
- Respecter strictement l'interdiction de la couleur doré (`accent` / `#c4a574`).
