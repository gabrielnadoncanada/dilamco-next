# Taxonomy

## Purpose

Use this file to choose the correct structural `type` for a block.

Types classify reusable structural families.
Variants describe layout patterns inside a type.

## Core types

### hero
Use for page-leading introduction blocks.
Typical structure:
- heading
- intro
- actions
- optional image, badges, or supporting media

### split
Use for layouts with two primary desktop regions.
Typical examples:
- text + image
- text + cards
- text + checklist
- text + media

### grid
Use for repeated visual collections in columns.
Typical examples:
- card grids
- icon cards
- tile grids
- overlay cards

### list
Use for vertically stacked repeated items.
Typical examples:
- feature rows
- standards lists
- stacked explanations
- checklist-driven editorial sections

### process
Use for ordered steps or timeline-like sequences.
Typical examples:
- numbered steps
- implementation phases
- process grids
- timelines

### comparison
Use for structured side-by-side comparison.
Typical examples:
- tables
- spec matrices
- vs layouts
- feature comparison grids with strict column logic

### faq
Use for question-answer patterns.
Typical examples:
- accordions
- FAQ lists
- expandable Q&A

### cta
Use for conversion-focused call-to-action sections.
Typical examples:
- centered CTA
- split CTA
- CTA band

## Optional specialized types

Only use these when repeated across the codebase and clearly justified.

### stats
Use for repeated numeric proof.
Typical examples:
- KPI cards
- trust metrics
- counters

### testimonial
Use for repeated customer quotes or reviews.
Typical examples:
- quote cards
- review grids
- testimonial bands

## Coverage boundaries

Use these mappings to avoid ambiguity:

- page-leading intro block -> `hero`
- two primary desktop regions -> `split`
- repeated card-like collection in columns -> `grid`
- repeated vertical stack -> `list`
- ordered sequence -> `process`
- table or strict side-by-side comparison -> `comparison`
- question-answer block -> `faq`
- conversion-first final band -> `cta`
- numeric proof collection -> `stats`
- quote or review collection -> `testimonial`

Do not force everything into `grid`.

## Type creation rule

A new type is allowed only if at least 3 of these 4 are true:

1. distinct data model
2. distinct layout behavior
3. distinct UX or interaction pattern
4. reused across multiple pages

If fewer than 3 are true, create a new variant instead.
