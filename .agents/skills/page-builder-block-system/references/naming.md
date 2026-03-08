# Naming rules

## Purpose

Use this file to name `type` and `variant` correctly.

## Core rule

`type` and `variant` must describe structure only.
They must never describe business meaning, page meaning, or domain meaning.

## Forbidden naming

Do not use words like:
- kitchen
- bathroom
- project
- projects
- service
- services
- space
- spaces
- materials
- pricing
- renovation
- guide
- compare brand names

This rule applies to both `type` and `variant`.

## Good variant names

- image-right
- image-left
- text-cards
- text-checklist-card
- cards
- cards-overlay
- cards-icon-top
- steps-2x2
- steps-2x2-cta
- table-basic
- table-feature-matrix
- accordion-simple
- centered

## Bad variant names

- kitchen-hero
- bathroom-grid
- project-cards
- services-split
- materials-comparison

## Naming algorithm

### Step 1
Choose `type` by structural family, not by content meaning.

### Step 2
Choose `variant` by visual layout pattern only.

### Step 3
Refuse if any proposed name contains domain meaning.

## Litmus test

A valid variant must answer:
"What does this look like structurally?"

It must not answer:
"What is this content about?"
