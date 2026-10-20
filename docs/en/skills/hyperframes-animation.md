---
title: "HyperFrames Animation Knowledge & Adapters (hyperframes-animation)"
description: "Comprehensive motion knowledge: atomic rules, scene blueprints, transitions, and 7 runtime adapters (GSAP, Lottie, Three.js, etc.)."
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>Current Version: <strong>🇬🇧 English</strong></span>
  </div>
  <a href="/agent-skills-hub/skills/hyperframes-animation" class="lang-switch-link">
    🇹🇼 點此切換至中文版本 (Switch to Traditional Chinese) →
  </a>
</div>

# hyperframes-animation · HyperFrames Animation Knowledge & Adapters

<div class="skill-subtitle-bar">HyperFrames 動態知識庫與多引擎配接器</div>

<div class="skill-meta-bar">
  <span class="badge category">Motion Design</span>
  <span class="badge lang-tag">🇬🇧 English</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#GSAP</span> <span class="badge tag">#Blueprints</span> <span class="badge tag">#Transitions</span> <span class="badge tag">#Three.js</span> <span class="badge tag">#Lottie</span>
</div>

> **Description**: Comprehensive motion knowledge: atomic rules, scene blueprints, transitions, and 7 runtime adapters (GSAP, Lottie, Three.js, etc.).
>
> **中文簡介**: HyperFrames 動態知識庫：原子運動規則、場景藍圖與 7 大執行期引擎配接（GSAP、Three.js、Lottie、CSS、WAAPI 等）。

::: details Quick Install Commands (Click to Copy)
::: code-group

```bash [Antigravity]
# Install into Antigravity global skills directory
mkdir -p ~/.gemini/config/skills/hyperframes-animation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-animation/* ~/.gemini/config/skills/hyperframes-animation/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# Install into Claude Code skills directory
mkdir -p ~/.claude/skills/hyperframes-animation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-animation/* ~/.claude/skills/hyperframes-animation/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# Install into Codex skills directory
mkdir -p ~/.agents/skills/hyperframes-animation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-animation/* ~/.agents/skills/hyperframes-animation/
rm -rf /tmp/skills-hub
```

```bash [Git Clone]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::

::: tip Skill Dependencies
This skill depends on the following upstream skills. We recommend installing them together:
- [hyperframes-core](./hyperframes-core.md)
:::

::: info Included Files (124 files)
- `adapters/animate-text.md`
- `adapters/animejs.md`
- `adapters/css-animations.md`
- `adapters/gsap-easing-and-stagger.md`
- `adapters/gsap-timeline-and-labels.md`
- `adapters/gsap-transforms-and-perf.md`
- `adapters/gsap.md`
- `adapters/html-in-canvas-patterns.md`
- `adapters/lottie.md`
- `adapters/three.md`
- `adapters/typegpu.md`
- `adapters/waapi.md`
- `blueprints/agent-progress-theater.md`
- `blueprints/camera-journey.md`
- `blueprints/comparison-split.md`
- `blueprints/constellation-hub.md`
- `blueprints/cta-morph-press.md`
- `blueprints/cursor-ui-demo.md`
- `blueprints/dataviz-countup.md`
- `blueprints/device-surface-showcase.md`
- `blueprints/fixed-anchor-cycle.md`
- `blueprints/grid-card-assemble.md`
- `blueprints/kinetic-type-beats.md`
- `blueprints/logo-assemble-lockup.md`
- `blueprints/overwhelm-surround.md`
- `blueprints/panel-edit-live-sync.md`
- `blueprints/prompt-type-submit-generate.md`
- `blueprints/spatial-pan-stations.md`
- `blueprints/ticker-takeover.md`
- `blueprints/titlecard-reveal.md`
- `blueprints/transcript-scroll-artifact-reveal.md`
- `blueprints/typewriter-reveal.md`
- `blueprints/video-text-pivot.md`
- `blueprints/zoom-out-workspace-reveal.md`
- `blueprints-index.md`
- `examples/brand-reveal-assemble-zoom.html`
- `examples/comparison-split-cards.html`
- `examples/concept-demo-decode-pan.html`
- `examples/cta-morph-press.html`
- `examples/cta-orbit-collapse.html`
- `examples/demo-page-scroll-spotlight.html`
- `examples/hook-counter-burst.html`
- `examples/messaging-multi-phrase.html`
- `examples/metric-video-text-pivot.html`
- `examples/problem-mockup-overwhelm.html`
- `examples/proof-logo-chain.html`
- `examples/takeover-ticker-displace.html`
- `examples/workflow-approve-press.html`
- `references/motion-blur.md`
- `rules/3d-camera-flight.md`
- `rules/3d-page-scroll.md`
- `rules/3d-text-depth-layers.md`
- `rules/ai-tracking-box.md`
- `rules/ambient-glow-bloom.md`
- `rules/anchored-layout-expand.md`
- `rules/asr-keyword-glow.md`
- `rules/avatar-cloud-network.md`
- `rules/camera-cursor-tracking.md`
- `rules/card-morph-anchor.md`
- `rules/center-outward-expansion.md`
- `rules/chart-scrub-readout.md`
- `rules/chromatic-glitch.md`
- `rules/context-sensitive-cursor.md`
- `rules/control-target-sync.md`
- `rules/coordinate-target-zoom.md`
- `rules/counting-dynamic-scale.md`
- `rules/css-marker-patterns.md`
- `rules/cursor-click-ripple.md`
- `rules/cursor-drag.md`
- `rules/depth-of-field-blur.md`
- `rules/depth-scatter-assemble.md`
- `rules/discrete-text-sequence.md`
- `rules/dynamic-content-sequencing.md`
- `rules/gradient-text-sweep.md`
- `rules/gsap-effects.md`
- `rules/hacker-flip-3d.md`
- `rules/kinetic-beat-slam.md`
- `rules/motion-blur-streak.md`
- `rules/multi-cursor-choreography.md`
- `rules/multi-phase-camera.md`
- `rules/nudge-curve.md`
- `rules/orbit-3d-entry.md`
- `rules/particle-burst.md`
- `rules/physics-press-reaction.md`
- `rules/press-release-spring.md`
- `rules/reactive-displacement.md`
- `rules/scale-swap-transition.md`
- `rules/sine-wave-loop.md`
- `rules/split-tilt-cards.md`
- `rules/spring-pop-entrance.md`
- `rules/stat-bars-and-fills.md`
- `rules/svg-icon-enrichment.md`
- `rules/svg-path-draw.md`
- `rules/theme-crossfade-morph.md`
- `rules/vertical-spring-ticker.md`
- `rules/viewport-change.md`
- `rules/waterfall-entry.md`
- `rules-index.md`
- `scripts/animation-map-sampling.mjs`
- `scripts/animation-map-sampling.test.mjs`
- `scripts/animation-map.mjs`
- `scripts/animation-map.test.mjs`
- `scripts/package-loader.mjs`
- `scripts/package-loader.test.mjs`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
- `techniques.md`
- `transitions/catalog.md`
- `transitions/css-3d.md`
- `transitions/css-blur.md`
- `transitions/css-cover.md`
- `transitions/css-destruction.md`
- `transitions/css-dissolve.md`
- `transitions/css-distortion.md`
- `transitions/css-grid.md`
- `transitions/css-light.md`
- `transitions/css-mechanical.md`
- `transitions/css-other.md`
- `transitions/css-push.md`
- `transitions/css-radial.md`
- `transitions/css-scale.md`
- `transitions/overview.md`
- `transitions/TRANSITION-REGISTRY.md`
:::

---

## Full Skill Documentation (SKILL.md)


**Plugin installs:** Before setup or freshness commands, follow [plugin execution rules](../hyperframes/references/plugin-installation.md) when this skill is inside a HyperFrames plugin. Standalone installs keep the update instructions below.

# HyperFrames Animation

All motion knowledge in one skill: **rules** (atomic recipes), **blueprints** (multi-phase scene templates), **transitions** (scene-to-scene), **techniques** (broader motion-design patterns), and **adapters** (per-runtime APIs).

For the composition contract (data attributes, sub-compositions, determinism) see `hyperframes-core`.

## Default: compose atomic rules

Pick 2-4 rules from `rules-index.md`, glue them together with a single paused GSAP timeline, done. This is faster and produces less code than starting from a blueprint.

## Load a blueprint when

- The scene matches an existing pre-designed multi-phase template (brand-reveal, social-proof, etc.) and reusing its phase pipeline saves real authoring time
- You want runnable ground-truth code for a complex 4-5 phase choreography

Blueprints live in `blueprints-index.md`. Each entry points to `blueprints/&lt;id&gt;.md` (recipe). Do not read it speculatively; load it when you've already decided you need scene-level orchestration.

## Routing

| Want to…                                                                       | Read                                                |
| ------------------------------------------------------------------------------ | --------------------------------------------------- |
| Pick an atomic motion pattern by trigger / tag                                 | `rules-index.md`                                    |
| Read one rule's full HTML / CSS / GSAP recipe                                  | `rules/&lt;name&gt;.md`                                   |
| Pick a multi-phase scene template                                              | `blueprints-index.md`                               |
| Read one blueprint's full recipe                                               | `blueprints/&lt;id&gt;.md`                                |
| Author a scene transition (CSS-driven, between two clips)                      | `transitions/overview.md`, `transitions/catalog.md` |
| Look up a broader motion-design technique                                      | `techniques.md`                                     |
| Motion blur — shutter smear on an element, and when not to use it              | `references/motion-blur.md`                         |
| Analyze an existing composition's animation map                                | `scripts/animation-map.mjs`                         |
| GSAP API — timeline / tweens / position parameters                             | `adapters/gsap.md`                                  |
| GSAP — drop-in effect recipes                                                  | `rules/gsap-effects.md`                             |
| GSAP — transforms / perf                                                       | `adapters/gsap-transforms-and-perf.md`              |
| GSAP — eases / stagger                                                         | `adapters/gsap-easing-and-stagger.md`               |
| GSAP — timeline / labels                                                       | `adapters/gsap-timeline-and-labels.md`              |
| Lottie / dotLottie (After Effects exports, `window.__hfLottie`)                | `adapters/lottie.md`                                |
| Character animation (walk cycle, mascot, jointed puppet, gestures)             | `adapters/lottie.md` → Characters                   |
| Three.js / WebGL (3D scenes, `AnimationMixer`, `hf-seek`)                      | `adapters/three.md`                                 |
| Anime.js (`window.__hfAnime`)                                                  | `adapters/animejs.md`                               |
| CSS keyframes (`animation-delay` / `play-state` / `fill-mode`)                 | `adapters/css-animations.md`                        |
| Web Animations API (`element.animate()`, `currentTime` seek)                   | `adapters/waapi.md`                                 |
| TypeGPU / WebGPU (`navigator.gpu`, WGSL, compute pipelines)                    | `adapters/typegpu.md`                               |
| HTML-as-texture + WebGL/GLSL post-fx (capture live DOM via `drawElementImage`) | `adapters/html-in-canvas-patterns.md`               |
| Named text-animation effects (24 IDs via external `animate-text` skill)        | `adapters/animate-text.md`                          |

## Picking a runtime

- **GSAP** is the default for 95% of motion work — covers timeline orchestration, transforms, easing, stagger. All atomic rules in this skill are GSAP-based.
- **Lottie** when an asset has its own pre-baked timeline (typically After Effects exports), including characters that walk, gesture or react.
- **Three.js** for 3D scenes, camera motion, shader-driven visuals.
- **Anime.js** for lightweight tweening when GSAP is overkill.
- **CSS** for simple repeated motifs, decoration, shimmer — no JavaScript animation cost.
- **WAAPI** for native browser keyframes without a GSAP dependency.
- **TypeGPU / WebGPU** for GPU-rendered canvases (particles, liquid glass, custom shaders).

Multiple runtimes can coexist in one composition. Each registers its instances on the runtime-specific global so HyperFrames can seek all of them in one pass.

## Critical Constraints

**Prerequisite: `hyperframes-core` → One paused timeline + Non-negotiable rules** (single paused timeline, `data-duration` governs length, no `Math.random` / `Date.now` / `performance.now`, no `repeat: -1` without a finite root `data-duration`, no page-load `gsap.set` on later-scene clips, no `display` or raw `visibility` tweens, and register the timeline only after it is fully built, including when the build runs inside an async callback such as `document.fonts.ready`). GSAP `autoAlpha` and zero-duration visibility sets at explicit timeline boundaries remain allowed by core. Use those exceptions only on non-clip elements or wrappers inside a clip; the framework owns `.clip` lifecycle. Don't restate the full contract here.

Animation-craft additions on top of core's contract:

- **Pre-calculated layout constants** — never derive positions from `getBoundingClientRect()` at tween time. Tween-time DOM measurements desync because the renderer samples in parallel; compute coordinates once at composition setup and reuse.
- **Spatial motion uses GSAP transform aliases only** (`x`, `y`, `scale`, `rotation`). Core's allowlist also permits `opacity` / `color` / `backgroundColor` / `borderRadius` for non-spatial property tweens — but never `width` / `height` / `top` / `left` for layout changes.

## Scripts

```bash
node <SKILL_DIR>/scripts/animation-map.mjs <composition-dir> \
  --out <composition-dir>/.hyperframes/anim-map
```

Reads every GSAP timeline registered on `window.__timelines`, enumerates tweens, samples bboxes, computes flags, outputs `animation-map.json`. Use it to audit choreography (dead zones, stagger consistency, lifecycle warnings) after authoring.

`animation-map.mjs` resolves helper packages from the current project first, then can bootstrap the bundled HyperFrames package version. Set `HYPERFRAMES_SKILL_PKG_VERSION=&lt;version&gt;` only when running the skill outside the bundled CLI/skill install and you need to pin that bootstrap version explicitly.

## See Also

- `hyperframes-core` — composition structure, data attributes, sub-compositions, deterministic render contract
- `hyperframes-creative` — palettes, typography, narration, beat planning (non-animation creative direction)
- `hyperframes-cli` — `npx hyperframes lint / check / snapshot / preview / render`

