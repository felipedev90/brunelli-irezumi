# Design System Document: Brunelli Irezumi

## 1. Overview & Creative North Star: "The Modern Shokunin"
This design system is built for the Brunelli Irezumi studio, translating the millenary tradition of Japanese horimono into a high-end digital editorial experience. Our Creative North Star is **"The Modern Shokunin"** (The Master Craftsman). 

The system avoids the "cheap" feel of generic dark-mode templates by embracing **Organic Brutalism**: a mix of razor-sharp geometric layouts and fluid, ink-inspired micro-interactions. We break the standard grid through intentional asymmetry—where images may bleed off-canvas or overlap typography—mimicking how traditional Irezumi flow naturally across the human anatomy. 

This is not just a website; it is a curated digital gallery that commands respect and conveys the permanence of the art it showcases.

---

## 2. Colors: Tonal Depth & Blood Accents
The palette is rooted in the depth of traditional Sumi ink (`#131313`) and the visceral energy of red action accents.

- **Primary & Neutral Surfaces:** We use a monochromatic stack to create depth.
    - `background`: `#131313` (The deep ink base)
    - `surface-container-low`: `#1c1b1b`
    - `surface-container-high`: `#2a2a2a`
- **Action & Highlight:** `secondary` (`#ffb3b1`) and `on_secondary_container` (`#ffb8b5`) provide the "Blood/Sakura" contrast against the dark void.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly on a `surface` background. This creates a seamless, sophisticated transition that feels like layers of fine paper.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use `surface-container-lowest` for the background and "elevate" content by placing it on `surface-container-high` cards. Instead of a flat grid, this nesting creates a sense of tactile importance.

### The "Glass & Gradient" Rule
To add visual "soul," use subtle gradients on primary CTAs transitioning from `secondary_container` to `on_secondary_fixed_variant`. For floating elements (like mobile navigation bars), apply **Glassmorphism**: use semi-transparent surface colors with a `20px` backdrop-blur to allow the art underneath to bleed through softly.

---

## 3. Typography: The Calligraphy of Information
Our typography balances the aggression of traditional Japanese headings with the precision of modern sans-serif.

- **Display & Headlines (Epilogue):** These are our "Master Strokes." Used for hero sections and main titles, the high-contrast weights of Epilogue mimic the varying pressure of a calligraphy brush.
    - *Display-LG:* `3.5rem` (Use for impact statements, with -2% letter spacing).
- **Body & Labels (Manrope):** The "Modern Precision." Manrope provides clinical legibility for technical information about the tattooing process.
    - *Body-LG:* `1rem` (Optimized for long-form reading on dark backgrounds).
- **Hierarchy Role:** Large headlines should often overlap image containers slightly, breaking the "box" and creating an editorial, high-end magazine feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "digital." We achieve hierarchy through Tonal Layering.

- **The Layering Principle:** Stacking tiers (e.g., a `surface-container-highest` card over a `surface-dim` section) creates a soft, natural lift without the need for artificial lines.
- **Ambient Shadows:** If a floating effect is required (e.g., for a "Book Now" FAB), use a shadow with a `40px` blur at `6%` opacity. The shadow color must be a tinted version of `surface_container_lowest` to mimic natural light absorbed by ink.
- **The "Ghost Border" Fallback:** If a container requires definition for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components: The Crafted Interface

### Buttons (High-Impact)
- **Primary:** Rectangular (`0px` radius), `secondary_container` background. Text in `on_secondary_container`.
- **States:** On hover, the button should expand slightly (`scale 1.02`) with a subtle `secondary` glow, mimicking the "hollow" effect of a fresh tattoo stencil.
- **Sizing:** Large touch targets (min 56px height) for mobile-first accessibility.

### Cards & Portfolios
- **Rule:** Forbid divider lines. Use `spacing.12` (4rem) of vertical white space to separate portfolio items.
- **Interaction:** On mobile, cards should utilize a "long-press" micro-interaction to reveal artist details, keeping the initial view purely focused on the visual art.

### Input Fields
- Underlined style only. No enclosed boxes. Use `outline` token for the active underline and `secondary` for error states. Helper text should be `label-sm` in `on_surface_variant`.

### Quick-Action FAB (Mobile)
A circular or rectangular floating button in the bottom right using the `secondary` color. This is the "Emergency Booking" trigger, always accessible but styled with a glassmorphism backdrop to prevent it from feeling like an obstruction.

---

## 6. Do's and Don'ts

### Do:
- **Use Asymmetry:** Place text off-center or allow images to overlap to create a custom, non-templated look.
- **Embrace the Void:** Use the `80px-100px` spacing scale between sections. Space is a luxury; use it to signify premium service.
- **Mobile-First Gestures:** Use horizontal carousels for the portfolio grid to save vertical space while maintaining large image sizes.

### Don't:
- **Don't use Rounded Corners:** Every element must have a `0px` radius. Sharp edges convey the precision of the needle and the discipline of the tradition.
- **Don't use Pure White:** Avoid `#ffffff`. Always use `on_surface` (`#e5e2e1`) for text to prevent eye strain in dark mode and to mimic the off-white tone of vintage Japanese parchment.
- **Don't use Standard Dividers:** Never use `<hr>` or 1px lines. Use tonal shifts or white space only.

---

## 7. Spacing & Grid
- **Section Gaps:** Use `spacing.20` (7rem) or `spacing.24` (8.5rem) to separate major content blocks.
- **The "Signature" Offset:** Shift images 20-30px horizontally relative to their captions to create a sense of movement.