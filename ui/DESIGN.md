---
name: Cognitive Automation System
colors:
  surface: '#fdf8ff'
  surface-dim: '#ddd8e6'
  surface-bright: '#fdf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f1ff'
  surface-container: '#f1ebfa'
  surface-container-high: '#ebe6f4'
  surface-container-highest: '#e5e0ef'
  on-surface: '#1c1a24'
  on-surface-variant: '#484556'
  inverse-surface: '#312f3a'
  inverse-on-surface: '#f4eefd'
  outline: '#797588'
  outline-variant: '#c9c4d9'
  surface-tint: '#5d37ee'
  primary: '#542ae6'
  on-primary: '#ffffff'
  primary-container: '#6d4cff'
  on-primary-container: '#f5f0ff'
  inverse-primary: '#c9bfff'
  secondary: '#6934dc'
  on-secondary: '#ffffff'
  secondary-container: '#8353f6'
  on-secondary-container: '#fffbff'
  tertiary: '#575656'
  on-tertiary: '#ffffff'
  tertiary-container: '#6f6e6e'
  on-tertiary-container: '#f5f1f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5deff'
  primary-fixed-dim: '#c9bfff'
  on-primary-fixed: '#1a0063'
  on-primary-fixed-variant: '#4403d8'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cfbdff'
  on-secondary-fixed: '#22005d'
  on-secondary-fixed-variant: '#530dc6'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#fdf8ff'
  on-background: '#1c1a24'
  surface-variant: '#e5e0ef'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

This design system is built for a high-efficiency AI automation platform. The brand personality is **intelligent, effortless, and visionary**. It balances the technical sophistication of artificial intelligence with a human-centric, approachable interface. 

The visual style follows a **Modern SaaS** aesthetic with a lean toward **Minimalism** and **Soft UI**. Key characteristics include:
- **Airy Composition:** Massive whitespace to reduce cognitive load and emphasize clarity.
- **Intelligent Flow:** Subtle gradients and soft shadows that guide the eye toward primary actions without visual noise.
- **Precision Typography:** A neutral, highly legible typeface that communicates reliability and professional rigor.
- **Soft Geometry:** Large corner radii that make complex data and automation workflows feel safe and easy to manage.

## Colors

The palette is anchored by a vibrant, "Electric Indigo" primary purple, symbolizing innovation and intelligence. 

- **Primary & Secondary:** These purples are used for core brand actions, active states, and linear gradients. Gradients should flow from Primary to Secondary at a 135-degree angle to create a sense of upward movement.
- **Neutral Palette:** The interface relies on a clean white-to-grey scale. The background uses a cool-tinted off-white (#F7F7FB) to distinguish the canvas from the pure white (#FFFFFF) of the interactive cards.
- **Semantic Accents:** Use the primary purple for success-adjacent states (e.g., "Automation Active") to maintain brand cohesion, while reserving standard reds and ambers for critical errors or warnings only.

## Typography

The design system utilizes **Inter** for all roles to ensure a systematic, utilitarian feel that remains modern.

- **Weight Strategy:** Use Bold (700) for high-level marketing headers and Semi-Bold (600) for functional UI headers. Regular (400) is reserved for body copy to maximize legibility.
- **Hierarchy:** High-contrast sizing is used between titles and body text to create a clear "scan-path" for users reviewing automation logs or analytics.
- **Micro-copy:** Small labels (label-sm) should use uppercase with slight letter-spacing to provide a distinct "metadata" look for tags and status indicators.

## Layout & Spacing

The design system employs a **Fluid Grid** logic with fixed maximum widths for content readability.

- **Grid Model:** A 12-column grid for desktop with 24px gutters. On tablet (768px - 1024px), the grid shifts to 8 columns. On mobile (<768px), it collapses to a single-column stack with 16px side margins.
- **Spacing Rhythm:** Based on an 8px base unit. Component internal padding should follow this scale (8, 16, 24, 32).
- **Whitespace Philosophy:** Generous vertical padding (80px+) between sections on landing pages is required to maintain the "Airy" feel. In the dashboard app environment, this scales down to 32px for density.

## Elevation & Depth

Visual hierarchy is established through a combination of **Tonal Layers** and **Ambient Shadows**.

- **Surface 0 (Background):** #F7F7FB. The canvas.
- **Surface 1 (Cards/Panels):** #FFFFFF. These elements sit slightly above the background with a very soft shadow: `0px 4px 20px rgba(0, 0, 0, 0.03)`.
- **Surface 2 (Popovers/Modals):** Pure white with a more pronounced shadow: `0px 12px 32px rgba(0, 0, 0, 0.08)` to indicate high-level interaction.
- **Borders:** Every card and section should have a 1px solid border using `rgba(0,0,0,0.06)` to define edges without adding visual weight.

## Shapes

The shape language is defined by **large, friendly radii** that soften the technical nature of the AI product.

- **Component Radius:** Buttons and input fields use a 0.5rem (8px) radius.
- **Container Radius:** Cards, modals, and section containers use a `rounded-xl` (1.5rem / 24px) radius.
- **Icon Treatment:** Icons should be minimalist, 2px stroke weight, with slightly rounded terminal ends to match the UI's softness.

## Components

### Buttons
- **Primary:** Linear gradient (#6D4CFF to #8B5CFF), white text, no border. Heavy drop shadow on hover.
- **Secondary:** White background, 1px border (rgba(0,0,0,0.06)), Primary Text color.
- **Tertiary:** Transparent background, primary purple text, no border. Used for "Cancel" or low-priority navigation.

### Cards
- Always white background.
- 24px corner radius.
- 1px subtle border.
- Padding should be 24px or 32px depending on content density.

### Inputs
- Height: 48px.
- Background: #FFFFFF or #F7F7FB.
- 1px border (rgba(0,0,0,0.1)). On focus, border changes to primary purple with a soft glow effect.

### Chips / Status Badges
- Pill-shaped (fully rounded).
- Use a 10% opacity version of the status color for the background and 100% opacity for the text (e.g., Primary Purple text on a 10% Purple background).

### Navigation
- Vertical sidebar for dashboard: Clean white background, 1px right border, icons in #666666, active state highlighted with a primary purple vertical pill indicator.