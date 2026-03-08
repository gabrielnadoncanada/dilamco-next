# AGENTS.md

## File Editing Rule (Mandatory)

- For source and config files, use `apply_patch` for edits.
- Do not use PowerShell write commands for text edits (`Set-Content`, `Out-File`, redirection `>`), except for generated artifacts or binary files.
- If `apply_patch` fails, stop and report the blocker instead of switching to `Set-Content`.

## Project Goal

- The project is migrating from the legacy static page system (`createStaticPage`, legacy data modules, ad-hoc sections) to the new registry-driven system in `page-builder`.
- Prefer extending or migrating into `page-builder` rather than adding new code to the old static-page architecture.
- When touching legacy pages, favor incremental migration steps that move content and sections toward `page-builder` blocks and templates.

## Skills

### Available skills

- page-builder-block-system: Registry-driven page builder for Next.js with strict type + variant blocks, Zod schemas, BlockFrame layout control, and no ad-hoc sections. Use when creating, generating, or refactoring sections into the page-builder architecture. (file: C:/laragon/www/dilamco-next/.agents/skills/page-builder-block-system/SKILL.md)
