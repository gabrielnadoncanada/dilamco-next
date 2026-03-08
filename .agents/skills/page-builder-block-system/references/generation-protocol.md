# Generation protocol

## Purpose

Use this file when creating a brand new block.

## Workflow

1. Choose the correct structural `type` using `taxonomy.md`.
2. Choose a UI-only `variant` using `naming.md`.
3. Normalize props using `models.md`.
4. Enforce shell ownership using `block-frame.md`.
5. Create the implementation files.
6. Register the block.
7. Provide sample block usage.

## Required files

For each variant:

```txt
page-builder/sections/<type>/variants/<variant>/
  schema.ts
  ui.tsx
  index.ts
```

Type aggregator:

```txt
page-builder/sections/<type>/index.ts
```

Global registry:

```txt
page-builder/model/block-registry.ts
```

## Implementation requirements

### schema.ts
- define Zod schema
- export `Props` with `z.infer<>`

### ui.tsx
- UI only
- no outer shell container or section surface logic
- deterministic output only

### index.ts
- register using your block definition helper
- expose type, variant, schema, and component

## Sample page data output

```ts
{
  id: "example-id",
  frame: {
    container: "xl",
    paddingY: "md",
    surface: "default"
  },
  content: {
    type: "grid",
    variant: "cards",
    props: {
      heading: "Example heading",
      cards: []
    }
  }
}
```

## Final validation

Before finalizing:
- validate Zod schema presence
- validate type and variant naming
- validate JSON-safe props
- validate no shell duplication in `ui.tsx`
