---
name: portfolio-design
description: Use whenever making a visual/design decision for Ramiro's portfolio — palette, typography, layout, imagery, motion, tone of copy. Trigger before writing any CSS, before proposing a section layout, or when the result risks looking like generic AI-generated UI. Goal is a portfolio that is distinctive, intentional, and 100% consistent with decisions Ramiro actually approved.
---

# Portfolio design philosophy

The site must look like a human made deliberate choices, not like the statistical
average of every SaaS landing page an LLM has seen. It does not need to be
avant-garde — it needs to be **coherent, tasteful, and clearly chosen**, with one
or two moments that feel a little unexpected.

## Hard bans (instant "AI slop" tells — never use these)

- Purple-to-blue gradients on buttons/text/backgrounds, or any gradient "orb"/blob
  floating behind a hero.
- Glassmorphism cards (frosted blur + thin white border) as a default surface.
- Inter, Geist, or Space Grotesk as the *only* typeface — fine as a workhorse body
  font, never as the whole identity.
- Uniform 16px border-radius on every card, with a thin colored accent border on
  one side.
- Oversized vague hero headline like "Building the future of X" over a 3-icon
  feature grid.
- Generic centered layout: logo - nav - centered hero - 3 cards - footer, repeated
  every section with identical spacing.
- Emoji as section icons.

## What to do instead

- **Typography does the heavy lifting.** Pick a real pairing with contrast (e.g. a
  confident serif or condensed display face for headlines + a plain, high-legibility
  sans for body/UI text). Push the type scale — big jumps, not a timid 1.25 ratio.
- **One signature interaction, not ten.** Pick a single thing this portfolio is
  "known for" — e.g. a custom cursor, a scroll-driven reveal of project work, a
  tactile hover-distortion on project cards, a subtle grain/texture overlay. Build
  that one thing really well instead of scattering shallow effects everywhere.
- **Asymmetric / editorial layout** over perfectly centered symmetric blocks.
  Real grids, generous negative space, content that breaks the grid on purpose
  occasionally.
- **Micro-interactions with real timing**, not defaults: buttons/toggles 50–200ms,
  content transitions 200–400ms, nothing above ~600ms. Motion should feel tactile
  (slight overshoot/settle), never sluggish.
- **A limited, specific palette** tied to Ramiro's identity (not "safe SaaS blue").
  Pick 1 dominant + 1 accent + neutrals; justify the choice, don't default to it.
- Respect `prefers-reduced-motion` always; maintain WCAG AA contrast minimums even
  in a bold palette.

## Decisions that must be confirmed with Ramiro — never assume

Before finalizing any of the following, present 2–3 concrete options (not open
questions) with a one-line tradeoff each, and get an explicit pick:

1. Color palette (dominant + accent + neutrals)
2. Typography pairing (display + body)
3. The one signature interaction/motion moment
4. Section structure / information architecture (what sections exist, what order)
5. Tone of voice in copy (technical/dry vs. personal/narrative)
6. Imagery style (real photos, screenshots of real projects, illustration, none)

If Ramiro has already answered one of these in conversation, don't re-ask it —
but do surface it back concisely when it becomes relevant ("using the palette you
picked earlier: ...") so he can still redirect.

See [[portfolio-frontend]] for how these decisions get implemented in code.
