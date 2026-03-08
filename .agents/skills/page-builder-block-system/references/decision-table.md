# Decision table

## Purpose

Use this file for ambiguous cases when choosing between types.

## Type selection shortcuts

### Choose `split` when
- there are two primary desktop regions
- one side supports the other
- the layout is not primarily a repeated collection

### Choose `grid` when
- repeated visual items are arranged in columns
- cards are the dominant structure
- the section is not primarily sequential or comparative

### Choose `list` when
- repeated content is stacked vertically
- rows or editorial items matter more than card columns
- the section reads like a structured list rather than a grid

### Choose `process` when
- sequence matters
- numbering or order matters
- the UX communicates progression

### Choose `comparison` when
- side-by-side contrast is the core purpose
- rows and columns have comparison meaning
- a table or matrix structure is required

### Choose `faq` when
- the block is fundamentally question-answer content
- accordion behavior or Q&A grouping is central

### Choose `cta` when
- conversion is the primary purpose
- actions are the dominant outcome
- supporting content exists only to drive the CTA

### Choose `stats` when
- numeric proof is the core structure
- repeated metrics matter more than descriptive cards

### Choose `testimonial` when
- the main payload is a quote or review
- author attribution is essential

## Type vs variant test

Create a new type only if at least 3 of these 4 are true:
1. distinct data model
2. distinct layout behavior
3. distinct UX or interaction pattern
4. reused across multiple pages

Otherwise create a new variant.

## Example decisions

- quote cards -> `testimonial`, not `grid`
- faq accordion -> `faq`, not `list`
- pricing comparison table -> `comparison`, not `grid`
- checklist with supporting card -> `split`
- stacked feature rows -> `list`
- image + text intro at top of page -> `hero` or `split` depending on page-leading role
