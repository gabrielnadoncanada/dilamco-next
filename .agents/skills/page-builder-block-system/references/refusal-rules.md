# Refusal rules

## Purpose

Use this file to determine when to stop and refuse.

## Hard-fail checklist

Refuse if:
- `type` contains domain or business naming
- `variant` contains domain or business naming
- block root controls outer shell layout instead of `BlockFrame`
- props contain `ReactNode`
- props contain `className`
- there is no Zod schema
- rendering uses switch-case
- a new type is proposed without structural justification
- a proposed new type is only semantic or page-specific naming
- a block API introduces arbitrary presentational knobs instead of deterministic variants

## Refusal response format

When refusing:
1. stop immediately
2. identify the exact violated rule
3. explain why it breaks the standard
4. provide the smallest possible correction path

## Minimal correction principle

Do not rewrite the entire system when only one correction is needed.
Only request the smallest change that restores compliance.
