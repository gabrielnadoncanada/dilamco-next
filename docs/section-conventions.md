# Section Conventions

## Required structure
1. Every `components/sections/*Section.tsx` component must import and render `SectionShell`.
2. Expose a consistent API with `heading`, optional `intro`/`description`, and collection props (`items`, `links`) when applicable.
3. Prefer CTA rendering through `ActionButtons` for consistent behavior and styling.

## Keys and list rendering
1. Use stable keys first (`id`, `href`, `title`).
2. Avoid `key={index}` unless data is static and has no stable identifier.

## Client/server boundary
1. Sections default to Server Components.
2. Use `"use client"` only when interactivity requires browser state/effects (example: `SliderSection`).

## Validation and rendering flow
1. Input sections are validated at page/template boundaries with Zod.
2. Data is normalized in `lib/section-normalizers.ts`.
3. `lib/render-section.tsx` only dispatches through a typed registry (`type -> normalize -> render`).
