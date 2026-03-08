# Conversion protocol

## Purpose

Use this file when converting existing HTML or TSX sections into block variants.

## Workflow

1. Extract the section structure.
2. Determine the structural `type`.
3. Reuse an existing variant if it matches at least 80 percent of the structure.
4. Otherwise create a new variant under the correct type.
5. Normalize props into standard models.
6. Create files and register the block.
7. Replace legacy inline markup with block config.
8. Validate all hard rules.

## Structural extraction checklist

Identify:
- desktop column pattern
- repeated items
- card grid pattern
- checklist pattern
- ordered steps
- image or media placement
- CTA row
- FAQ interaction
- comparison or table behavior

## Reuse rule

If an existing variant matches at least 80 percent of the structure:
- reuse it
- adapt the props

If not:
- create a new variant under the correct type

## Data normalization

Normalize into standard models:
- actions -> `Action[]`
- cards -> `CardModel[]`
- steps -> `StepModel[]`
- checklist -> `ChecklistModel`
- faq items -> `FaqItem[]`
- comparison rows -> `ComparisonRow[]`
- stats -> `StatModel[]`
- testimonials -> `TestimonialModel[]`

## Required output

- `schema.ts`
- `ui.tsx`
- `index.ts`
- updated type aggregator
- updated global registry
- updated block config in page data

## Final validation

Ensure:
- Zod schema parses
- naming is structural only
- no `ReactNode`
- no `className`
- no switch-case renderer
- no shell-level styles in variant root
