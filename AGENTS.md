# AGENTS.md

## File Editing Rule (Mandatory)

- For source and config files, use `apply_patch` for edits.
- Do not use PowerShell write commands for text edits (`Set-Content`, `Out-File`, redirection `>`), except for generated artifacts or binary files.
- If `apply_patch` fails, stop and report the blocker instead of switching to `Set-Content`.
