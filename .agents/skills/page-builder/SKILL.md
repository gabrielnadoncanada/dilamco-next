---
name: Page Builder — Create / Generate / Convert Sections into Type+Variant Blocks (Next.js)
description: A strict architecture standard for building, generating, and refactoring UI sections into a registry-driven type + variant system in Next.js. Enforces layout-first taxonomy (hero, split, grid, process, cta), Zod-validated props, deterministic variant design (no business/domain naming), and centralized layout control via BlockFrame. Prevents ad-hoc sections, ReactNode props, switch-case renderers, and styling duplication. Designed for scalability, SEO velocity, CMS compatibility, and automated code generation with zero structural drift.
---

## Purpose

Standardize how we create and refactor UI sections into a strict system:

- `type` = structural layout category
- `variant` = pure UI layout variant (no domain/business terms)
- `BlockFrame` is the ONLY place that controls container + padding + surface
- Every variant has a Zod schema (runtime validation)
- Registry-driven rendering (no switch-case)

This skill is strict. If any rule is violated, the agent MUST refuse and request correction.

---

## Non-negotiable Rules (Hard Fail)

1. **Allowed types only**
   - `hero`, `split`, `grid`, `process`, `cta`
   - If something doesn't fit: create a new VARIANT under an allowed type (never a new type).

2. **No domain/business words in variants**
   - Forbidden words in `variant`: `project`, `projects`, `space`, `spaces`, `kitchen`, `bathroom`, `service`, etc.
   - Variants must describe UI structure only (e.g., `cards`, `cards-overlay`, `steps-2x2-cta`).

3. **BlockFrame controls layout shell**
   - Variants MUST NOT set `max-w-*`, `px-*`, `py-*`, `bg-*` at the outer section level.
   - Container/padding/surface come from `BlockFrame` only.

4. **No ReactNode in props**
   - All props must be JSON-safe (CMS-safe by design).
   - Rich text must be represented as structured data if needed (not ReactNode).

5. **No `className` prop in variant props**
   - Variants must be deterministic and style-driven by design system.
   - If styling differences are needed, create a new variant.

6. **No switch-case renderers**
   - Rendering happens via registry lookup: `${type}.${variant}`.

7. **Zod schema is mandatory**
   - Every variant has `schema.ts` and exports `Props` via `z.infer<>`.

8. **Strict refusal mode**
   - If input code implies breaking any rule above, STOP and refuse.
   - Provide the minimal set of required changes.

---

## Taxonomy

### Types (Structural)

- `hero` → page hero layouts (text/image/CTA/badges)
- `split` → two-column layouts (text + cards, text + image, checklist card, etc.)
- `grid` → repeated card grids (cards in 2/3 columns, overlays, etc.)
- `process`→ step/timeline layouts
- `cta` → final call-to-action sections

### Variants (UI-only)

Variants describe:

- column structure (`text-divider-cards`)
- cards style (`cards`, `cards-overlay`)
- steps layout (`steps-2x2-cta`)
- image placement (`image-right`, `image-left`)
- not what the content _means_ (never “projects/spaces”).

---

## Standard Prop Conventions

### Common primitives

- `heading: string`
- `intro?: string`
- `description?: string` (only if intro is used for something else)
- `actions?: Action[]`

### Action convention (mandatory)

```ts
type Action = {
  label: string;
  href: string;
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "destructive"
    | "ghost"
    | "link";
};
```

### Card convention (mandatory)

Use ONE universal card model whenever a layout uses a grid/list of cards:

```ts
type CardModel = {
  title: string;
  description?: string;
  href?: string;
  image?: { src: string; alt: string };
  badges?: string[];
  meta?: { label?: string; value?: string }[];
  ctaLabel?: string;
};
```

### Steps convention (mandatory)

```ts
type StepModel = {
  label: string;
  description: string;
};
```

### Checklist convention (mandatory)

```ts
type ChecklistModel = string[];
```

---

## File/Folder Skeleton (Must Follow)

For each variant:

```
page-builder/sections/<type>/variants/<variant>/
  schema.ts
  ui.tsx
  index.ts
```

Type aggregator:

```
page-builder/sections/<type>/index.ts   // exports <type>Defs = [...]
```

Registry:

```
page-builder/model/block-registry.ts
```

Renderer:

```
page-builder/ui/BlockRenderer.tsx
page-builder/ui/BlockFrame.tsx
```

---

## BlockFrame Contract (Authoring)

A page defines blocks like:

```ts
{
  id: "unique-id",
  frame: { container: "xl", paddingY: "md", surface: "default" },
  content: {
    type: "split",
    variant: "steps-2x2-cta",
    props: { ... } // validated by Zod schema
  }
}
```

### Frame options allowed

- `container`: `"full" | "xl" | "2xl"`
- `paddingY`: `"sm" | "md" | "lg"`
- `surface`: `"default" | "muted"`
- `headerAlign`: `"left" | "center"`
- `contentAlign`: `"left" | "center"`

---

## BlockFrame Mapping (Frozen)

- `container: "xl"` → `max-w-6xl`

- `container: "2xl"` → `max-w-7xl`

- `container: "full"` → `max-w-none`

- `paddingY: "md"` → `py-12 sm:py-14`

- `paddingY: "lg"` → `py-14 sm:py-16`

- `paddingY: "sm"` → `py-8 sm:py-10`

- `surface: "default"` → `bg-background`

- `surface: "muted"` → `bg-muted/40`

---

## Naming Algorithm (Strict)

When converting code → pick type and variant:

1. Determine `type` by structure:

- Has 2 primary columns on desktop? → `split`
- Is a repeated card grid? → `grid`
- Is a multi-step process/timeline? → `process`
- Is a page hero? → `hero`
- Is a final CTA band? → `cta`

2. Determine `variant` from UI-only descriptors:

- `text-divider-cards`
- `steps-2x2-cta`
- `badges-checklist-cta`
- `cards`, `cards-overlay`, `cards-imageTop`

3. Refuse if the proposed variant includes domain terms.

---

## Conversion Protocol (HTML/TSX → Variant)

Given an existing section code:

1. Extract its structure:

- columns, grids, repeated cards, CTA row, badges, image placement

2. Check if an existing variant already matches ≥80% of structure:

- If yes: reuse it and adapt props
- If no: create a new variant under the correct type

3. Normalize data into standard models:

- actions → `actions: Action[]`
- repeated cards → `cards: CardModel[]`
- steps → `steps: StepModel[]`
- checklist → `items: string[]`

4. Create files:

- `schema.ts`: Zod schema using standardized prop names
- `ui.tsx`: UI only; no container/padding/surface outer shell
- `index.ts`: `defineBlock({ type, variant, schema, Component })`
- Update `<type>/index.ts` aggregator and the global registry

5. Update page data:

- Replace legacy/inline section with block config using `{ type, variant, props }`

6. Validation:

- ensure Zod parses
- ensure no forbidden naming exists
- ensure no outer shell styles exist in variant root

---

## Generation Protocol (New Section)

When asked to create a brand new section:

1. Choose `type` from allowed taxonomy
2. Choose `variant` UI-only
3. Use standardized models (Action/Card/Step/Checklist)
4. Generate files + register entry
5. Provide sample block usage in `page.data.ts`

---

## Refactor Protocol (Legacy → New)

1. Keep output identical (structure and semantics)
2. Convert one section at a time
3. No breaking change to SEO semantics
4. Delete legacy rendering code only after all sections migrated

---

## Example Variants (Reference)

### split.text-divider-cards

Props:

- heading, description, cards: CardModel[]

### split.steps-2x2-cta

Props:

- heading, description, steps: StepModel[], actions: Action[]

### split.badges-checklist-cta

Props:

- heading, intro, badges: string[], cardTitle, items: ChecklistModel, actions: Action[] or cta action

### grid.cards

Props:

- heading, intro?, cards: CardModel[], columns?

### grid.cards-overlay

Props:

- heading, intro?, cards: CardModel[] (image required)

### cta.centered

Props:

- heading, intro?, actions: Action[]

---

## Agent Refusal Checklist (Must Enforce)

Refuse if:

- type not in allowed list
- variant contains domain terms
- variant includes container/padding/surface in outer markup
- props include ReactNode or className
- no Zod schema
- uses switch-case renderer

```

---
```
