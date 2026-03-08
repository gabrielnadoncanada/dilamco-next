# Standard models

## Purpose

Use these standard JSON-safe models when designing block props.

## Common primitives

- `heading: string`
- `intro?: string`
- `description?: string`
- `actions?: Action[]`

Use `intro` for short support copy.
Use `description` only when both are genuinely needed.

## Action

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

## CardModel

```ts
type CardModel = {
  title: string;
  description?: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
  badges?: string[];
  meta?: {
    label?: string;
    value?: string;
  }[];
  ctaLabel?: string;
};
```

## StepModel

```ts
type StepModel = {
  label: string;
  description: string;
};
```

## ChecklistModel

```ts
type ChecklistModel = string[];
```

## FaqItem

```ts
type FaqItem = {
  question: string;
  answer: string;
};
```

## ComparisonRow

```ts
type ComparisonRow = {
  label: string;
  values: string[];
};
```

## StatModel

```ts
type StatModel = {
  value: string;
  label: string;
  description?: string;
};
```

## TestimonialModel

```ts
type TestimonialModel = {
  quote: string;
  author: string;
  role?: string;
  image?: {
    src: string;
    alt: string;
  };
  rating?: number;
};
```

## Rules

- All props must be JSON-safe.
- No `ReactNode`.
- No `className`.
- No render callbacks.
- Prefer standard models over page-specific ad-hoc models.
