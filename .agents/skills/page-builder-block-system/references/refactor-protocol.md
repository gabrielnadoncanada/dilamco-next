# Refactor protocol

## Purpose

Use this file when migrating legacy block systems or inline sections to the new standard.

## Rules

1. Keep output structure identical unless explicitly asked to redesign.
2. Preserve SEO semantics.
3. Convert one section at a time.
4. Delete legacy code only after successful migration.
5. Do not expand scope into unrelated architecture work unless requested.

## Preserve SEO semantics

Always preserve:
- heading hierarchy
- meaningful HTML structure
- link semantics
- content order when it matters
- semantic table markup for comparison blocks
- semantic FAQ markup where relevant

## Migration order

Recommended order:
1. identify section structure
2. choose type and variant
3. normalize props
4. create new block variant files
5. wire registry
6. replace page usage
7. verify output parity
8. remove legacy rendering only after validation

## Refactor warning

Do not redesign content APIs during migration unless the old API violates hard rules.
