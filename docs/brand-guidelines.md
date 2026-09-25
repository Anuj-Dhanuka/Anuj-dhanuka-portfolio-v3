# Portfolio visual identity guidelines

This document defines the visual language for Anuj Dhanuka's portfolio. It records the system already implemented in the website and should be the reference for new pages, components, marketing graphics, and future design work.

The identity is confident, technical, and approachable. Its most recognizable expression is a violet-to-pink gradient supported by clean neutral surfaces, generous whitespace, and direct typography.

## Quick reference

| Role           | Token or class                  | Value                        | Typical use                                |
| -------------- | ------------------------------- | ---------------------------- | ------------------------------------------ |
| Primary brand  | `brand-600`                     | `#7c3aed`                    | Primary buttons, active states, key icons  |
| Primary hover  | `brand-700`                     | `#6d28d9`                    | Hover and pressed emphasis                 |
| Brand tint     | `brand-50`                      | `#f5f3ff`                    | Soft section and card backgrounds          |
| Pink accent    | `accent1-600`                   | `#db2777`                    | Gradient endpoint and selective highlights |
| Indigo accent  | `accent2-600`                   | `#4f46e5`                    | Supporting data or category accent         |
| Main heading   | `copy-heading`                  | `gray-900` / white           | Page, section, and card headings           |
| Body copy      | `copy-body`                     | `gray-600` / `gray-300`      | Paragraphs and supporting copy             |
| Page surface   | `bg-background`                 | white / near-black           | Main page background                       |
| Brand gradient | `gradient-bg`                   | `brand-600` to `accent1-600` | Primary CTA and selected highlights        |
| Corner radius  | `rounded-lg`                    | `0.5rem`                     | Cards and prominent controls               |
| Focus color    | `ring-brand-500` or `ring-ring` | `#8b5cf6` equivalent         | Keyboard focus indication                  |

Values separated by `/` describe light mode and dark mode.

## Color system

### Core brand palette

The `brand` scale is the primary violet family. Use it for actions, links, focus treatments, selected states, and brand-led decoration.

| Token       | Hex       | Recommended role                     |
| ----------- | --------- | ------------------------------------ |
| `brand-50`  | `#f5f3ff` | Subtle tinted surface                |
| `brand-100` | `#ede9fe` | Soft border or hover surface         |
| `brand-200` | `#ddd6fe` | Light border                         |
| `brand-300` | `#c4b5fd` | Dark-mode text or prominent border   |
| `brand-400` | `#a78bfa` | Decorative highlight                 |
| `brand-500` | `#8b5cf6` | Focus ring and gradient in dark mode |
| `brand-600` | `#7c3aed` | Primary brand action                 |
| `brand-700` | `#6d28d9` | Primary hover or strong text         |
| `brand-800` | `#5b21b6` | Deep brand surface                   |
| `brand-900` | `#4c1d95` | Dark brand surface                   |
| `brand-950` | `#2e1065` | Deepest hero and overlay surface     |

### Pink accent palette

The `accent1` scale supplies warmth and energy. Use it as the endpoint of the signature gradient and for occasional emphasis. It should support violet rather than compete with it.

| Token         | Hex       | Recommended role             |
| ------------- | --------- | ---------------------------- |
| `accent1-50`  | `#fdf2f8` | Soft accent surface          |
| `accent1-100` | `#fce7f3` | Tinted background            |
| `accent1-200` | `#fbcfe8` | Light border                 |
| `accent1-300` | `#f9a8d4` | Dark-mode text or decoration |
| `accent1-400` | `#f472b6` | Decorative highlight         |
| `accent1-500` | `#ec4899` | Gradient in dark mode        |
| `accent1-600` | `#db2777` | Standard gradient endpoint   |
| `accent1-700` | `#be185d` | Hover or strong accent text  |
| `accent1-800` | `#9d174d` | Deep accent surface          |
| `accent1-900` | `#831843` | Dark accent surface          |
| `accent1-950` | `#500724` | Deepest accent surface       |

### Supporting indigo palette

`accent2` is a secondary indigo scale (`#eef2ff` through `#1e1b4b`). Reserve it for supporting visual categories, charts, badges, or decorative layers where another hue improves clarity. Do not substitute it for the primary violet action color.

### Neutrals and status colors

Two neutral scales exist in the codebase:

- `gray` is used by most current page surfaces and text. The key values are `gray-50` `oklch(98.5% 0.002 247.839)`, `gray-600` `oklch(44.6% 0.03 256.802)`, `gray-900` `oklch(21% 0.034 264.665)`, and `gray-950` `oklch(13% 0.028 261.692)`.
- `neutral` is a slate-based compatibility palette from `#f8fafc` to `#020617`. Use `gray` for new interface work unless an existing component already uses `neutral` intentionally.
- `success-600` (`#059669`) is the standard success color. Error and destructive UI should use the semantic `destructive` role instead of choosing an arbitrary red.
- White and black are valid for high-contrast text, overlays, and artwork, but should not replace semantic surface or text roles in reusable components.

### Semantic color roles

Reusable UI should prefer semantic utilities so themes continue to work:

| Role               | Utility                              | Light mode              | Dark mode                    |
| ------------------ | ------------------------------------ | ----------------------- | ---------------------------- |
| Page background    | `bg-background`                      | white                   | deep blue-black              |
| Default text       | `text-foreground`                    | deep blue-black         | near-white                   |
| Card surface/text  | `bg-card text-card-foreground`       | white / deep blue-black | deep blue-black / near-white |
| Primary action     | `bg-primary text-primary-foreground` | violet / near-white     | violet / near-white          |
| Secondary surface  | `bg-secondary`                       | light cool gray         | dark slate                   |
| Muted copy         | `text-muted-foreground`              | slate gray              | light slate                  |
| Form border        | `border-input`                       | light gray              | dark slate                   |
| Keyboard focus     | `ring-ring`                          | violet                  | violet                       |
| Destructive action | `bg-destructive`                     | bright red              | deep red                     |

For editorial text, use `copy-heading`, `copy-body`, `copy-inverse`, and `copy-inverse-body`. These roles are already theme-aware.

### Gradients

The signature gradient runs left-to-right from violet to pink:

```tsx
<div className="gradient-bg text-white">...</div>
<span className="gradient-text">Highlighted text</span>
```

- Standard light gradient: `brand-600` to `accent1-600`.
- Standard dark gradient: `brand-500` to `accent1-500`.
- Hero title gradient: `purple-400` to `pink-400` through `hero-gradient-text`.
- Use gradients for primary CTAs, important display text, and restrained decorative treatments—not for long text, every card, or routine controls.
- When placing text over a gradient, use white or another verified high-contrast foreground.

The `purple` and `pink` scales are active legacy/decorative palettes. Keep them in existing heroes, glows, artwork, and CTA treatments. For new reusable UI, prefer `brand` and `accent1` so color intent remains clear.

## Typography

### Font family

The website uses a local system sans-serif stack to avoid remote font downloads:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
"Segoe UI", Arial, sans-serif
```

The same family is used for headings and body text. Headings use weight `700`; normal body copy uses weight `400`. UI labels and buttons commonly use `600` or `700`.

### Responsive type scale

Use the shared role classes rather than attaching responsive `text-*` utilities to page typography.

| Role class        | Mobile | Small (`640px+`) | Medium (`768px+`) | Large (`1024px+`) | Line height | Use                       |
| ----------------- | -----: | ---------------: | ----------------: | ----------------: | ----------: | ------------------------- |
| `type-hero`       |   30px |             36px |              48px |              48px |        1.08 | One H1 per page           |
| `type-section`    |   30px |             30px |              36px |              36px |        1.25 | Standard H2               |
| `type-display`    |   30px |             30px |              48px |              48px |        1.25 | High-impact section title |
| `type-card`       |   20px |             20px |              20px |              20px |        1.25 | Card heading              |
| `type-card-large` |   24px |             24px |              24px |              24px |        1.25 | Featured card heading     |
| `type-cta`        |   24px |             30px |              36px |              48px |        1.25 | Shared CTA heading        |
| `type-lead`       |   16px |             18px |              18px |              18px |       1.625 | Hero introduction         |
| `type-body`       |   16px |             16px |              16px |              16px |        1.75 | Standard paragraph        |
| `type-cta-body`   |   16px |             18px |              20px |              20px |       1.625 | CTA supporting copy       |
| `type-small`      |   14px |             14px |              14px |              14px |        1.75 | Supporting information    |
| `type-caption`    |   12px |             12px |              12px |              12px |         1.5 | Captions and metadata     |
| `type-label`      |   11px |             11px |              11px |              11px |         1.5 | Uppercase eyebrow label   |

Headings use `-0.025em` tracking where defined. `type-label` uses `0.16em`, uppercase text, and weight `700`.

Choose the HTML element for document meaning and the class for its appearance:

```tsx
<h1 className="type-hero copy-inverse">Software Engineer & Frontend Developer</h1>
<p className="type-lead copy-inverse-body">...</p>

<h2 className="type-section copy-heading">Featured work</h2>
<p className="type-body copy-body">...</p>

<h3 className="type-card copy-heading">Project name</h3>
```

Keep body lines readable: aim for roughly 60–75 characters and use a `max-w-*` constraint on longer copy. Do not communicate hierarchy through color or font size alone.

## Layout and spacing

- Use the shared `.container` for page width and horizontal gutters. Its gutters are 16px by default, 24px at `640px`, and 32px at `768px`.
- The configured maximum content width is 1400px at the `2xl` breakpoint. Purpose-built content blocks should usually be narrower (`max-w-3xl`, `max-w-4xl`, and similar).
- Use `section-spacing` for a standard section rhythm: 32px, 48px, 64px, then 80px as the viewport grows.
- Use Tailwind's 4px spacing scale. Prefer 8, 12, 16, 24, 32, 48, 64, and 80px steps; avoid one-off values unless the composition genuinely requires one.
- Default content gaps are 16px on mobile, 24px on small screens, and 32px on medium screens. The shared `responsive-gap` utility captures this rhythm.
- Start layouts mobile-first. Common grids progress from one column to two at `sm` and three or four only when the content remains readable.
- Fixed or floating UI must not cover content. Primary touch targets must be at least 44 by 44px.

## Shape, border, and elevation

- The base radius token is `0.5rem` (8px). Use `rounded-lg` for cards and prominent controls, `rounded-md` for standard controls, and `rounded-full` for avatars, pills, and decorative circles.
- Use a subtle one-pixel border for surface separation. Reserve two-pixel borders for selected states, high-emphasis outline buttons, or the gradient-border treatment.
- Use soft colored shadows for brand actions (`shadow-brand-500/15`) and restrained neutral shadows for cards. Shadows should reinforce hierarchy, not become the primary boundary.
- Keep cards visually quiet: one surface, one border, and at most one shadow treatment.

## Components and interaction

### Buttons and links

- Use `Button` for actions and `LinkButton` for navigation.
- Primary navigation CTA: violet-to-pink gradient with white text.
- Secondary navigation CTA: white or page background with a violet border and violet text.
- Destructive controls use the semantic destructive variant.
- Inline navigation uses descriptive link text. Underlines or the `line` variant should make links identifiable without depending only on color.
- Hover may deepen the colors by one scale step. Focus must retain a visible two-pixel ring with offset. Disabled controls reduce opacity and must not respond to pointer events.
- Do not invent page-local button variants when a shared variant already expresses the action hierarchy.

### Cards and surfaces

- Standard light card: white surface, `brand-100` or `gray-200` border, dark heading, muted body.
- Standard dark card: `gray-950` or `gray-900` surface, translucent brand border, white heading, `gray-300` body.
- Use tinted `brand-50` or `accent1-50` surfaces to group related content, not as the default background for every section.
- Interactive cards need hover, keyboard-focus, and click behavior where applicable. Their active layer must visibly rise above siblings.

### Forms

- Every field needs a visible label, sufficient target size, and a persistent border.
- Use the semantic input and focus-ring colors.
- Error text uses a red/destructive color and must also explain the problem in words.
- Success feedback uses the success palette and a clear message; color alone is not enough.
- Preserve pending, success, and failure states and keep server validation authoritative.

## Imagery and iconography

- Use `next/image` with accurate dimensions or `fill`, responsive `sizes`, stable aspect ratios, and meaningful alternative text.
- Photography should feel professional, natural, and relevant to engineering, collaboration, or the project being discussed.
- Use Lucide icons consistently for interface actions. Keep common inline icons at 16–20px and inherit the surrounding text color unless a semantic state requires otherwise.
- Decorative glows and shapes should use violet, pink, or indigo at low opacity and be hidden from assistive technology.
- Do not recolor company logos unless their brand guidance permits it.

## Motion

- Motion should explain hierarchy or add subtle energy: short fades, small translations, restrained scale changes, and the established marquee/timeline effects.
- Common UI transitions should take about 200–300ms. Long ambient effects may be slower when they do not delay interaction.
- Preserve `motion-reduce` alternatives and never require animation to understand or operate the interface.
- Do not remove the technology marquee, About card stacking, or Experience timeline behavior when simplifying a section.

## Accessibility standards

- Target WCAG AA contrast: at least 4.5:1 for normal text and 3:1 for large text and essential interface graphics.
- Never place `brand-400`, `accent1-400`, or similarly light colors as small text on white without checking contrast.
- Keep visible keyboard focus on every interactive element.
- Maintain a logical heading hierarchy with one descriptive H1 per route.
- Use native elements: buttons for actions, links for navigation, labels for form controls.
- Do not use color as the only signifier of status, selection, or validation.
- Verify layouts at small mobile, tablet, desktop, and large desktop widths.

## Usage rules

Do:

- Lead with violet and use pink as a supporting accent.
- Use semantic roles for reusable controls and theme-aware text.
- Reuse shared type, button, card, CTA, navbar, and footer patterns.
- Keep the experience clean, spacious, direct, and content-first.
- Check both light and dark contexts when changing shared colors.

Avoid:

- Adding a new purple, pink, neutral, gradient, or font without first extending the central tokens.
- Mixing `brand` and `purple` scales arbitrarily inside one component.
- Using gradient text for paragraphs or low-priority labels.
- Combining typography role classes with competing responsive font-size utilities.
- Relying on hover alone; touch and keyboard users need equivalent behavior.

## Implementation source of truth

- Color values and semantic theme roles: `styles/tokens.css`
- Responsive typography tokens: `styles/tokens.css`
- Typography role classes: `styles/typography.css`
- Global utilities and gradient helpers: `app/globals.css`
- Breakpoints and container settings: `tailwind.config.ts`
- Shared button behavior: `components/ui/button.tsx` and `components/ui/link-button.tsx`

When implementation and this guide disagree, first determine whether the component is a deliberate exception. Otherwise, update the component or the central token and then update this document in the same change.
