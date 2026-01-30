---
name: Premium Design System Implementation
overview: Transform the Dilamco Next.js site into a premium, conversion-oriented design system by creating reusable section components and refactoring all pages to use consistent visual hierarchy, spacing, and typography while preserving all existing content.
todos:
  - id: foundation
    content: Create enhanced Section component with consistent spacing and container widths
    status: completed
  - id: hero-section
    content: Build HeroSection component for page headers with heading, description, and actions
    status: completed
    dependencies:
      - foundation
  - id: feature-grid
    content: Build FeatureGridSection component for benefits/features using Card components
    status: completed
    dependencies:
      - foundation
  - id: process-section
    content: Build ProcessSection component refactoring existing Process1
    status: completed
    dependencies:
      - foundation
  - id: proof-section
    content: Build ProofSection component for trust elements and quality indicators
    status: completed
    dependencies:
      - foundation
  - id: cta-section
    content: Build CTASection component refactoring Cta12 usage
    status: completed
    dependencies:
      - foundation
  - id: gallery-section
    content: Build GallerySection component with grid layout and placeholders
    status: completed
    dependencies:
      - foundation
  - id: faq-section
    content: Build FAQSection component refactoring existing Faq1
    status: completed
    dependencies:
      - foundation
  - id: related-links
    content: Build RelatedLinksSection component for internal linking blocks
    status: completed
    dependencies:
      - foundation
  - id: text-section
    content: Build TextSection component for long-form content
    status: completed
    dependencies:
      - foundation
  - id: list-section
    content: Build ListSection component for feature/benefit lists
    status: completed
    dependencies:
      - foundation
  - id: comparison-table
    content: Build ComparisonTableSection component using shadcn Table
    status: completed
    dependencies:
      - foundation
  - id: refactor-home
    content: Refactor home page (app/page.tsx) to use new section components
    status: completed
    dependencies:
      - hero-section
      - feature-grid
      - process-section
      - cta-section
  - id: refactor-spaces
    content: Refactor all space pages (app/espaces/*/page.tsx) to use new sections
    status: completed
    dependencies:
      - hero-section
      - feature-grid
      - text-section
      - list-section
      - gallery-section
      - related-links
      - faq-section
      - cta-section
  - id: refactor-materials
    content: Refactor all materials pages (app/materiaux/*/page.tsx) including comparison table
    status: completed
    dependencies:
      - hero-section
      - text-section
      - comparison-table
      - gallery-section
      - related-links
  - id: refactor-services
    content: Refactor all services pages (app/services/*/page.tsx) to use new sections
    status: completed
    dependencies:
      - hero-section
      - feature-grid
      - process-section
      - related-links
  - id: refactor-projects
    content: Refactor projects pages (app/projets/*/page.tsx) to use new sections
    status: completed
    dependencies:
      - hero-section
      - gallery-section
      - text-section
      - related-links
  - id: refactor-contact
    content: Refactor contact page with shadcn Form components and trust elements
    status: completed
    dependencies:
      - hero-section
      - proof-section
      - related-links
  - id: refactor-about
    content: Refactor about page (app/a-propos/page.tsx) to use new sections
    status: completed
    dependencies:
      - hero-section
      - text-section
      - proof-section
isProject: false
---

# Premium Design System Implementation Plan

## Overview

Transform the Dilamco site from raw HTML content into a premium, conversion-oriented design system using shadcn/ui components and TailwindCSS. All content remains unchanged; only the visual layer is being rebuilt.

## Architecture

### Component Structure

```
components/
  sections/           # New: Reusable section components
    HeroSection.tsx
    FeatureGridSection.tsx
    ProcessSection.tsx
    ProofSection.tsx
    CTASection.tsx
    GallerySection.tsx
    FAQSection.tsx
    RelatedLinksSection.tsx
    TextSection.tsx
    ListSection.tsx
    ComparisonTableSection.tsx
  Section.tsx         # Enhanced: Consistent wrapper
  ActionButtons.tsx   # Keep: Already good
  cta12.tsx          # Keep: Already good
  process1.tsx        # Refactor: Use in ProcessSection
  faq1.tsx            # Refactor: Use in FAQSection
```

## Design System Foundation

### 1. Enhanced Section Component

**File:** `components/Section.tsx`

- Consistent container: `max-w-6xl` (or `max-w-7xl` for wide content)
- Consistent vertical spacing: `py-16 md:py-20 lg:py-24`
- Responsive padding: `px-4 sm:px-6 lg:px-8`
- Optional variants: `default`, `accent` (bg-accent), `muted` (bg-muted)

### 2. Typography Scale

**File:** `app/globals.css` (add to existing)

- Headings: Consistent scale (h1: 3xl-6xl, h2: 2xl-4xl, h3: xl-2xl)
- Body: Base 16px, leading relaxed
- Muted text: `text-muted-foreground` for secondary content

### 3. Spacing System

- Section gaps: `gap-8 md:gap-12 lg:gap-16`
- Card gaps: `gap-4 md:gap-6`
- Consistent margins between elements

## Section Components to Build

### HeroSection

**File:** `components/sections/HeroSection.tsx`

- Props: `heading`, `description`, `actions` (ActionButtons), `image?` (optional)
- Layout: Centered, max-w-4xl, large typography
- Use: Page headers, hero areas

### FeatureGridSection

**File:** `components/sections/FeatureGridSection.tsx`

- Props: `heading`, `description?`, `features` (array with title, description, icon?), `columns?` (2-4)
- Layout: Grid (1 col mobile, 2-3 cols desktop), Card components
- Use: Benefits, features, "what's included"

### ProcessSection

**File:** `components/sections/ProcessSection.tsx`

- Props: `heading`, `description?`, `steps` (array), `actions?`
- Layout: Refactor existing Process1, use Card or vertical timeline
- Use: Process flows, steps

### ProofSection

**File:** `components/sections/ProofSection.tsx`

- Props: `heading`, `description?`, `items` (array with title, description, icon?)
- Layout: Grid or list with icons/badges
- Use: Quality indicators, trust elements, "what makes us different"

### CTASection

**File:** `components/sections/CTASection.tsx`

- Props: `heading`, `description`, `actions` (ActionButtons), `variant?` (default/accent)
- Layout: Centered, accent background, max-w-4xl
- Use: Primary conversion points (refactor Cta12 usage)

### GallerySection

**File:** `components/sections/GallerySection.tsx`

- Props: `heading?`, `images` (array with src, alt), `columns?` (2-4)
- Layout: Grid with aspect-ratio, placeholder if no images
- Use: Project galleries, material showcases

### FAQSection

**File:** `components/sections/FAQSection.tsx`

- Props: `heading`, `items` (array with question, answer)
- Layout: Refactor existing Faq1, use Accordion from shadcn
- Use: FAQ sections

### RelatedLinksSection

**File:** `components/sections/RelatedLinksSection.tsx`

- Props: `heading`, `links` (array with label, href), `columns?` (2-3)
- Layout: Grid of links, Badge or Card styling
- Use: Internal linking blocks, "related pages", "see also"

### TextSection

**File:** `components/sections/TextSection.tsx`

- Props: `heading`, `paragraphs` (array), `links?` (array)
- Layout: Max-w-3xl, prose-like spacing
- Use: Long-form content sections

### ListSection

**File:** `components/sections/ListSection.tsx`

- Props: `heading`, `intro?`, `items` (array), `links?`, `variant?` (bullets/checkmarks/numbered)
- Layout: List with proper spacing, optional icons
- Use: Feature lists, benefit lists, "what's included"

### ComparisonTableSection

**File:** `components/sections/ComparisonTableSection.tsx`

- Props: `heading`, `description?`, `columns` (array), `rows` (array of arrays)
- Layout: Table component from shadcn, responsive (scroll on mobile)
- Use: Material comparisons, feature comparisons

## Page Refactoring Strategy

### Phase 1: Foundation (Home Page)

**File:** `app/page.tsx`

1. Replace raw sections with new section components
2. Use HeroSection for header
3. Use FeatureGridSection for "espaces" and "differenciation"
4. Use ProcessSection for process
5. Use CTASection for final CTA
6. Maintain all existing content, links, and structure

### Phase 2: Space Pages

**Files:** `app/espaces/*/page.tsx`

- HeroSection for header
- FeatureGridSection for benefits/features
- TextSection for long-form content
- ListSection for lists
- GallerySection for project highlights
- RelatedLinksSection for internal links
- FAQSection for FAQs
- CTASection for conversion

### Phase 3: Materials Pages

**Files:** `app/materiaux/*/page.tsx`

- HeroSection
- TextSection for explanations
- ComparisonTableSection for comparatif page
- GallerySection for couleurs page (with filtering structure)
- RelatedLinksSection

### Phase 4: Services Pages

**Files:** `app/services/*/page.tsx`

- HeroSection
- FeatureGridSection for service features
- ProcessSection for service processes
- RelatedLinksSection

### Phase 5: Projects Pages

**Files:** `app/projets/*/page.tsx`

- HeroSection
- GallerySection for project images
- TextSection for case study content
- RelatedLinksSection

### Phase 6: Contact Page

**File:** `app/contact/page.tsx`

- HeroSection
- Form using shadcn Form components (Input, Textarea, Select, Button)
- ProofSection for trust elements
- RelatedLinksSection

## Implementation Details

### Container Consistency

- All sections wrapped in Section component
- Max-width: `max-w-6xl` (standard), `max-w-7xl` (wide content like tables)
- Centered: `mx-auto`

### Card Usage

- Use Card component for grouped content (features, services)
- Consistent padding: `p-6 md:p-8`
- Hover states for interactive cards

### Badge Usage

- Use Badge for metadata (e.g., "Montréal", "Cuisine", material types)
- Consistent styling across site

### Button Consistency

- Use ActionButtons component (already exists)
- Primary CTAs: default variant
- Secondary CTAs: outline variant

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid columns: 1 (mobile) → 2-3 (tablet) → 3-4 (desktop)

## Files to Create

1. `components/sections/HeroSection.tsx`
2. `components/sections/FeatureGridSection.tsx`
3. `components/sections/ProcessSection.tsx`
4. `components/sections/ProofSection.tsx`
5. `components/sections/CTASection.tsx`
6. `components/sections/GallerySection.tsx`
7. `components/sections/FAQSection.tsx`
8. `components/sections/RelatedLinksSection.tsx`
9. `components/sections/TextSection.tsx`
10. `components/sections/ListSection.tsx`
11. `components/sections/ComparisonTableSection.tsx`

## Files to Modify

1. `components/Section.tsx` - Enhance with variants and consistent spacing
2. `app/page.tsx` - Refactor to use new sections
3. `app/espaces/*/page.tsx` - All 5 space pages
4. `app/materiaux/*/page.tsx` - All materials pages
5. `app/services/*/page.tsx` - All services pages
6. `app/projets/*/page.tsx` - Projects pages
7. `app/contact/page.tsx` - Contact form with shadcn components
8. `app/a-propos/page.tsx` - About page

## Design Principles

1. **Information Hierarchy**: Headline → Supporting text → Proof/Benefits → CTA
2. **Visual Rhythm**: Consistent spacing scale (8px base unit)
3. **Conversion Focus**: Strong CTAs, clear paths to contact/quote
4. **Premium Feel**: Clean, modern, confident, high-trust
5. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
6. **Mobile-First**: Responsive at all breakpoints

## Content Preservation

- **DO NOT** change any copy or content meaning
- **DO NOT** invent claims or features
- **DO** reorder content within pages for better UX if needed
- **DO** maintain all internal links and routing
- **DO** preserve all metadata and SEO structure

## Testing Checklist

- All pages render correctly
- Mobile responsiveness verified
- All links work
- Forms are functional (contact page)
- Images have proper alt text
- No console errors
- Accessibility audit passed
- Consistent spacing/typography across pages

## TODOs After Implementation

1. Add actual project images to GallerySection placeholders
2. Implement filtering for couleurs page (if needed)
3. Add form submission handler for contact page
4. Consider adding animations/transitions (optional)
5. Performance optimization (image optimization, lazy loading)
