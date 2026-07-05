---
name: portfolio-frontend
description: Use when writing or editing frontend code for Ramiro's portfolio (React components, CSS, Vite config, animation code) in this repo. Trigger before adding a dependency, choosing an animation approach, or structuring components/sections.
---

# Portfolio frontend implementation rules

Stack already scaffolded: Vite 8 + React 19, plain CSS, oxlint. Don't introduce
Tailwind, a component library, or a CSS-in-JS lib unless Ramiro explicitly asks —
check `package.json` before assuming what's available, and confirm with him before
adding any new dependency (ties to the consultation rule in [[portfolio-design]]).

## Animation stack — pick ONE, don't mix

- Default to plain CSS (transforms, opacity, `@keyframes`, scroll-timeline where
  supported) for anything that can be done in CSS. Zero JS cost, best performance.
- If component-level orchestration is needed (staggered reveals, gestures,
  layout transitions), use `motion` (the renamed Framer Motion, `motion/react`
  import path).
- If the signature interaction is scroll-driven storytelling (pinning, scrubbing,
  parallax across sections), use GSAP + ScrollTrigger, paired with Lenis for
  smooth scroll, synced to the same rAF tick.
- Never combine motion + GSAP in the same project — pick the one that matches
  the signature interaction chosen in [[portfolio-design]] and stay consistent.

## Performance rules

- Animate only `transform` and `opacity`. Never animate `width`/`height`/`top`/`left`
  or trigger animation through React state on every frame — route continuous
  values through motion values / GSAP tweens so React doesn't re-render per frame.
- Respect `prefers-reduced-motion: reduce` — provide a real reduced-motion state,
  not just a shorter duration.
- Lazy-load below-the-fold images and heavy sections (`loading="lazy"`,
  `React.lazy` for rarely-seen content like a full project case-study view).
- Serve images as webp/avif with explicit width/height to avoid CLS; icons as SVG.
- Targets: LCP < 2.5s, CLS < 0.1, INP < 200ms. Check with Lighthouse/devtools
  before calling a section done, not just visually.

## Code structure

- One component per section under `src/components/` (e.g. `Hero`, `Projects`,
  `Experience`, `Contact`), composed in `App.jsx`.
- Colocate each component's CSS (`Hero.css` next to `Hero.jsx`) rather than one
  giant `index.css` — keeps diffs small and readable.
- Semantic HTML first (`<section>`, `<nav>`, `<button>`), then ARIA only to fill
  real gaps. Every interactive element keyboard-reachable with a visible focus
  state (no `outline: none` without a replacement).
- No unnecessary `useMemo`/`useCallback` — React 19 + compiler-era code should
  stay simple; only hand-optimize after profiling shows a real cost.

## Before shipping a section

Run the dev server and actually look at it (see the `run` skill) — type-checking
and lint don't verify it looks/feels right. Check it at mobile width too.
