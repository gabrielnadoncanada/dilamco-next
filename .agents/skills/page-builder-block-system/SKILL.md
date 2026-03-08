---
name: page-builder-block-system
description: registry-driven next.js block system for creating, generating, converting, and refactoring ui sections into typed blocks with structural families and ui-only variants. use when defining or migrating page sections, choosing type vs variant, enforcing blockframe ownership, normalizing props into json-safe models, or reviewing block architecture for cms-compatible scalable page builders.
---

# Purpose

Use this skill to build and maintain a strict type + variant block system for Next.js page builders.

This skill standardizes:
- structural block types
- UI-only variant naming
- Zod-validated props
- JSON-safe CMS-compatible block models
- registry-driven rendering
- BlockFrame-owned outer layout shell

# Hard rules

Always enforce these rules:

1. Never use domain or business naming in `type` or `variant`.
2. Never put section-level container, padding, or surface styles in a block variant root.
3. Never use `ReactNode` in block props.
4. Never use `className` in block props.
5. Never use switch-case renderers for block rendering.
6. Always require a Zod schema for each block variant.
7. Only create a new type when it is structurally justified.

If any rule is violated, stop and refuse. Explain the smallest correction needed.

# Workflow

Follow this sequence:

1. Determine whether the task is generation, conversion, refactor, or review.
2. Read `references/taxonomy.md` to choose the correct structural type.
3. Read `references/naming.md` to choose a UI-only variant name.
4. Read `references/models.md` to normalize props into standard JSON-safe models.
5. Read `references/block-frame.md` to enforce shell ownership.
6. For new sections, read `references/generation-protocol.md`.
7. For existing sections, read `references/conversion-protocol.md`.
8. For legacy migration, read `references/refactor-protocol.md`.
9. Before finalizing, read `references/refusal-rules.md` and validate compliance.

# Which references to use

- For type selection and coverage boundaries: `references/taxonomy.md`
- For type vs variant decisions in ambiguous cases: `references/decision-table.md`
- For naming rules and forbidden terms: `references/naming.md`
- For standard prop models: `references/models.md`
- For BlockFrame ownership and shell rules: `references/block-frame.md`
- For generating new blocks: `references/generation-protocol.md`
- For converting HTML or TSX into blocks: `references/conversion-protocol.md`
- For refactoring legacy sections safely: `references/refactor-protocol.md`
- For refusal behavior and hard-fail validation: `references/refusal-rules.md`
- For valid and invalid examples: `references/examples.md`

# Output expectations

When implementing or recommending a block:
- choose the correct `type`
- choose a UI-only `variant`
- use standardized prop models
- generate or reference `schema.ts`, `ui.tsx`, and `index.ts`
- preserve SEO semantics during migration
- keep block APIs deterministic and CMS-safe
