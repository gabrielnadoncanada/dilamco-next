# Examples

## Valid examples

### hero.image-right
Props:
- `heading`
- `intro?`
- `actions?`
- `image`

### split.text-cards
Props:
- `heading`
- `description`
- `cards: CardModel[]`

### split.text-checklist-card
Props:
- `heading`
- `intro?`
- `items: ChecklistModel`
- `cardTitle?`
- `actions?`

### grid.cards
Props:
- `heading`
- `intro?`
- `cards: CardModel[]`
- `columns?`

### process.steps-2x2-cta
Props:
- `heading`
- `description?`
- `steps: StepModel[]`
- `actions: Action[]`

### comparison.table-basic
Props:
- `heading`
- `intro?`
- `columns: string[]`
- `rows: ComparisonRow[]`

### faq.accordion-simple
Props:
- `heading`
- `intro?`
- `items: FaqItem[]`

### cta.centered
Props:
- `heading`
- `intro?`
- `actions: Action[]`

## Invalid examples

### Invalid variant naming
- `kitchen-hero`
- `bathroom-cards`
- `project-grid`

Reason:
Uses domain naming instead of structure.

### Invalid props
```ts
{
  heading: "Example",
  content: <div>Bad</div>
}
```

Reason:
Uses `ReactNode`.

### Invalid deterministic API
```ts
{
  heading: "Example",
  className: "bg-red-500 px-10"
}
```

Reason:
Uses arbitrary styling knobs.

### Invalid shell ownership
A variant root with section-level `py-16 max-w-7xl bg-muted`.

Reason:
Outer shell belongs to `BlockFrame`.
