---
name: motion-design
description: "Motion design principles and taste rules (HyperFrames edition) — timeline, easing curves, spring physics, pacing, typography (including Traditional Chinese), color theory, texture, and scene continuity with exact numbers. Use whenever designing, retiming, or polishing motion graphics and video compositions."
---

# Motion Design (HyperFrames Edition)

HyperFrames documentation teaches the API; this document governs aesthetic taste. The numbers below originate from battle-tested production pieces. Treat them as golden defaults: you may diverge, but only intentionally.

> Adapted from whaleyxbt/claude-motion's `motion-design` skill (MIT, see `LICENSE` in this folder). Rewritten for HyperFrames (HTML + GSAP) with Traditional Chinese typography rules. Sections marked "(Hub Edition)" are added in this edition.

## Usage in motion-explainer Workflows (Hub Edition)

`motion-explainer` (along with `soil-motion-deck` and `-images`) follows the official `faceless-explainer` workflow. Three rules differ from standalone motion design:
- **Timing**: Beats derive from `STORYBOARD.md` and `audio_meta.json` (voiceover clause timestamps); per-frame `data-start`/`data-duration` are injected by `assemble-index`. **Do not create `timeline.js` / `window.TL`** (Section 1).
- **Scaffolding**: Use `npx hyperframes init` (Section 3 of motion-explainer).
- **Fonts & Colors**: Defined by project `theme.json` (defaults to bold sans-serif, 3-color palette); `theme.py` overrides per-frame styles.

Aesthetic rules (easing, springs, reading pauses, composition, typography) remain fully applicable.

## Division of Labor with Official HyperFrames Skills (Hub Edition)

- **Official skills govern "How"**: Directory structure, `data-*` attributes, API syntax, workflow routing, and registry components. When API conventions conflict, official skills take precedence.
- **This guide governs "Taste"**: Easing curves, rhythm, reading duration, fonts, palettes, and typography.
- **Review & QA**: Always route through `review-loop`, which integrates `hyperframes check`.

## 0. HyperFrames Hard Rules (Hub Edition)

Violating these causes frame flicker, misalignment, or non-deterministic exports:
- Time is governed by HTML: Each scene is a `.clip` element positioned on the timeline via `data-start` and `data-duration`. Root elements must have `data-composition-id` and explicit `data-duration`.
- Motion is governed by GSAP: `gsap.timeline({ paused: true })` registered to `window.__timelines["<composition-id>"]`.
- Supply explicit position parameters for critical tweens. Use `fromTo()` when both states are essential for seek safety.
- Animate only `transform` and `opacity`; avoid repeated tweening of `top`/`left`/`width`/`height`.
- Forbidden: CSS `transition`/`@keyframes`, unseeded `Math.random()`, `Date.now()`, `requestAnimationFrame`, `setTimeout`, and runtime remote fetches.
- Always use seeded pseudo-randomness:
  ```js
  function rand(seed) { let t = (seed += 0x6D2B79F5); t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
  ```

## 1. Centralized Timeline

- Group beats by scene (`s1`, `s2`…) in root `timeline.js`:
  ```js
  window.TL = {
    s1: { start: 0, title: 0.3, items: [1.2, 1.45, 1.7], exit: 3.6 },
    s2: { start: 3.4, drawOn: 3.5, hook: 5.2, end: 8 },
  };
  ```
- GSAP position parameters must reference `TL` directly (`TL.s1.title`, `TL.s1.exit + 0.05`). Never hardcode magic seconds.
- Scene wrapper `data-start`/`data-duration` must match `TL` scene boundaries.

## 2. Easing Curves

Four custom curves recreated in GSAP via `CustomEase` plugin:
```js
CustomEase.create("enter", "0.16,1,0.3,1");   // easeOut
CustomEase.create("exit",  "0.6,0,0.9,0.35"); // easeIn
CustomEase.create("move",  "0.65,0,0.35,1");  // easeInOut
CustomEase.create("land",  "0.55,0,0.2,1.12"); // overshoot
```
- `enter` (`expo.out`): Entrances, reveals, arrivals.
- `exit` (`power3.in`): Fast, clean departures without lingering.
- `move` (`power2.inOut`): Transitions between states (flips, docking, morphs).
- `land`: Settling values (counters, sliders).
- `linear` (`none`): Continuous movements only (rotation, drift, noise).

## 3. Spring Physics & Feel

Approximate spring physics settings for GSAP:
- Standard UI entrance: `back.out(1.2)`, 0.6s
- Heavy / Solid panels: `power3.out`, 0.8–1.0s
- Stepped notch controls: `back.out(1.7)`, 0.35s
- Pop-out badges / checkmarks: `back.out(2.2)`, 0.45s
- Elastic accent: `elastic.out(1, 0.4)`, 0.9s (climax moment only)

## 4. Rhythm & Pacing

- **Stagger**: English words ~0.09s; Chinese characters ~0.04–0.05s, words ~0.09s; list items ~0.2–0.25s; dots/rings ~0.06s.
- **Text Reveal**: ~0.8s via overflow mask (`yPercent: 100 → 0`, `rotation: 3 → 0`).
- **Exits**: Approximately half entrance duration (0.35–0.55s vs 0.7–1.25s) with `exit` ease.
- **Overlapping Scenes**: Scene N+1 begins drawing in before Scene N finishes exit.
- **Typing**: ~0.035s per character; cursor blinks at 2.4 Hz via stepped timeline.
- **Reading Pause**: Minimum 1.0s for short phrases; add 0.25s for every additional word (or 4 Chinese characters). Final statement holds at least 2.0s.

## 5. Typography

- Limit to 3 font families: Display Serif, UI Sans, Monospace.
- English: Instrument Serif / Inter / JetBrains Mono.
- Traditional Chinese (Hub Edition): Noto Serif TC / Noto Sans TC + JetBrains Mono for numbers/tags. Load via local `@font-face`.
- English display text: ~138px on 1080p canvas, tracking `-0.02em`, `line-height: 1`.
- Chinese display text: 96–120px on 1080p canvas, max 12 chars per line, tracking `0` to `0.02em`, `line-height: 1.15–1.25`.
- Highlight: In English, one italic word with accent color; in Chinese, heavy weight with accent color (no fake italics).
- Mobile check: Must remain legible when scaled down to 360px mobile width.

## 6. Color Theory

- **3-Color Rule** (Hub Edition): Background `bg`, Foreground `fg`, Accent `accent` defined in `theme.json`.
- Reserve accent color strictly for key answers, conclusions, critical figures, and chapter cards.
- Define palette as `:root` CSS variables (`--bg`, `--ink`, `--accent`).
- Glow must be state-driven rather than time-driven (`glow = effort`).

## 7. Texture & Continuous Life

- Film grain: SVG `feTurbulence` overlay at opacity ~0.09, changing seed every 2 frames.
- Vignette + subtle grid drift: Radial gradient vignette with slow continuous background pan.
- Living idle: subtle breathing, blinking cursor, clock ticking.

## 8. Continuity & Transitions

- Prefer persistent object transformations over hard cuts. Carry hero elements across scenes.
- Transitions must be motivated by foreground elements rather than generic wipe effects.
- One climax moment per video (flash/burst). Build up steadily toward it.

## 9. Anti-Patterns to Avoid

- Everything fading in simultaneously or sharing identical durations.
- Linear easing for starting and stopping elements.
- Text still moving while the audience is expected to read it.
- Multiple competing focal points in a single frame.
- Frame 0 blank or black (ruins thumbnail on social feeds).
