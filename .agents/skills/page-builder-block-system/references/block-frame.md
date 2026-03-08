# BlockFrame contract

## Purpose

Use this file to enforce ownership of the outer layout shell.

## Core rule

`BlockFrame` is the only place that controls:
- container width
- vertical padding
- surface
- high-level alignment

Variants must not duplicate this shell behavior.

## Block authoring contract

```ts
{
  id: "unique-id",
  frame: {
    container: "xl",
    paddingY: "md",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left"
  },
  content: {
    type: "split",
    variant: "text-cards",
    props: { ... }
  }
}
```

## Allowed frame options

- `container`: `"full" | "xl" | "2xl"`
- `paddingY`: `"sm" | "md" | "lg"`
- `surface`: `"default" | "muted"`
- `headerAlign`: `"left" | "center"`
- `contentAlign`: `"left" | "center"`

## Frozen mapping

- `container: "xl"` -> `max-w-6xl`
- `container: "2xl"` -> `max-w-7xl`
- `container: "full"` -> `max-w-none`

- `paddingY: "sm"` -> `py-8 sm:py-10`
- `paddingY: "md"` -> `py-12 sm:py-14`
- `paddingY: "lg"` -> `py-14 sm:py-16`

- `surface: "default"` -> `bg-background`
- `surface: "muted"` -> `bg-muted/40`

## Forbidden in variant root

Do not use these at the outermost block variant root:
- `max-w-*`
- `container`
- shell-level `mx-auto`
- shell-level `px-*`
- shell-level `py-*`
- section-level `bg-*`

These belong to `BlockFrame` only.
