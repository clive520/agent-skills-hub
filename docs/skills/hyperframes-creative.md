---
title: "hyperframes-creative"
description: "Non-animation creative direction for HyperFrames videos. Use for design spec (frame.md / design.md) handling, palettes, typography, narration, beat planning, audio-reactive visuals, composition patterns, and brand / style decisions. For atomic motion patterns and scene blueprints, use `hyperframes-animation`."
---

# hyperframes-creative

<div class="skill-meta-bar">
  <span class="badge category">視覺創意</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#視覺風格</span> <span class="badge tag">#色彩搭配</span> <span class="badge tag">#字體設計</span> <span class="badge tag">#創意指引</span>
</div>

> **簡介**：Non-animation creative direction for HyperFrames videos. Use for design spec (frame.md / design.md) handling, palettes, typography, narration, beat planning, audio-reactive visuals, composition patterns, and brand / style decisions. For atomic motion patterns and scene blueprints, use `hyperframes-animation`.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/hyperframes-creative
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-creative/* ~/.gemini/config/skills/hyperframes-creative/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/hyperframes-creative
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-creative/* ~/.claude/skills/hyperframes-creative/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/hyperframes-creative
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-creative/* ~/.agents/skills/hyperframes-creative/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info 包含的檔案 (79 個檔案)
- `frame-presets/biennale-yellow/caption-skin.html`
- `frame-presets/biennale-yellow/frame-showcase.html`
- `frame-presets/biennale-yellow/FRAME.md`
- `frame-presets/blockframe/caption-skin.html`
- `frame-presets/blockframe/frame-showcase.html`
- `frame-presets/blockframe/FRAME.md`
- `frame-presets/blue-professional/caption-skin.html`
- `frame-presets/blue-professional/frame-showcase.html`
- `frame-presets/blue-professional/FRAME.md`
- `frame-presets/bold-poster/caption-skin.html`
- `frame-presets/bold-poster/frame-showcase.html`
- `frame-presets/bold-poster/FRAME.md`
- `frame-presets/broadside/caption-skin.html`
- `frame-presets/broadside/frame-showcase.html`
- `frame-presets/broadside/FRAME.md`
- `frame-presets/capsule/caption-skin.html`
- `frame-presets/capsule/frame-showcase.html`
- `frame-presets/capsule/FRAME.md`
- `frame-presets/cartesian/caption-skin.html`
- `frame-presets/cartesian/frame-showcase.html`
- `frame-presets/cartesian/FRAME.md`
- `frame-presets/cobalt-grid/caption-skin.html`
- `frame-presets/cobalt-grid/frame-showcase.html`
- `frame-presets/cobalt-grid/FRAME.md`
- `frame-presets/code-editorial/caption-skin.html`
- `frame-presets/code-editorial/fonts/EBGaramond-400.woff2`
- `frame-presets/code-editorial/fonts/EBGaramond-700.woff2`
- `frame-presets/code-editorial/fonts/Inter-400.woff2`
- `frame-presets/code-editorial/fonts/Inter-700.woff2`
- `frame-presets/code-editorial/fonts/JetBrainsMono-400.woff2`
- `frame-presets/code-editorial/fonts/JetBrainsMono-700.woff2`
- `frame-presets/code-editorial/fonts/OFL-eb-garamond.txt`
- `frame-presets/code-editorial/fonts/OFL-inter.txt`
- `frame-presets/code-editorial/fonts/OFL-jetbrains-mono.txt`
- `frame-presets/code-editorial/frame-showcase.html`
- `frame-presets/code-editorial/FRAME.md`
- `frame-presets/coral/caption-skin.html`
- `frame-presets/coral/frame-showcase.html`
- `frame-presets/coral/FRAME.md`
- `frame-presets/creative-mode/caption-skin.html`
- `frame-presets/creative-mode/frame-showcase.html`
- `frame-presets/creative-mode/FRAME.md`
- `frame-presets/daisy-days/caption-skin.html`
- `frame-presets/daisy-days/frame-showcase.html`
- `frame-presets/daisy-days/FRAME.md`
- `frame-presets/editorial-forest/caption-skin.html`
- `frame-presets/editorial-forest/frame-showcase.html`
- `frame-presets/editorial-forest/FRAME.md`
- `palettes/bold-energetic.md`
- `palettes/clean-corporate.md`
- `palettes/dark-premium.md`
- `palettes/jewel-rich.md`
- `palettes/monochrome.md`
- `palettes/nature-earth.md`
- `palettes/neon-electric.md`
- `palettes/pastel-soft.md`
- `palettes/warm-editorial.md`
- `references/audio-reactive.md`
- `references/beat-direction.md`
- `references/composition-patterns.md`
- `references/data-in-motion.md`
- `references/design-adherence.md`
- `references/design-picker.md`
- `references/design-spec.md`
- `references/house-style.md`
- `references/motion-principles.md`
- `references/narration.md`
- `references/prompt-expansion.md`
- `references/story-spine.md`
- `references/storyboard-recipe.md`
- `references/typography.md`
- `references/video-composition.md`
- `references/visual-styles.md`
- `scripts/contrast-report.mjs`
- `scripts/extract-audio-data.py`
- `scripts/package-loader.mjs`
- `scripts/package-loader.test.mjs`
- `SKILL.md`
- `templates/design-picker.html`
:::

---

## 技能完整說明檔 (SKILL.md)


**Plugin installs:** Before setup or freshness commands, follow [plugin execution rules](../hyperframes/references/plugin-installation.md) when this skill is inside a HyperFrames plugin. Standalone installs keep the update instructions below.

# HyperFrames Creative

Brand, pacing, style, narration, and composition direction. Use after the technical contract from `hyperframes-core` is in place.

For motion patterns, scene blueprints, transitions, and CSS marker effects, use `hyperframes-animation` — this skill is intentionally non-animation.

> **Read these two FIRST for any non-trivial composition — they override web instincts:**
>
> - `references/house-style.md` — "interpret the prompt, generate real content," the lazy-default list, and the background/foreground layer recipe. This is what turns a literal restyle into a _concept_.
> - `references/video-composition.md` — video-medium scale, depth, and foreground detail. It explains how to avoid empty web-page layouts without imposing a universal element count.
>
> Skipping these is the single biggest cause of generic, web-page-looking output. They are not optional rows in the routing table below — for anything beyond a one-line edit, open both before you choose colors or write HTML.

## Workflow

1. If a project has a design spec, **read it first** and treat its frontmatter tokens as brand truth (colors, fonts, spacing, tone, constraints). Which file to read (precedence `frame.md` → `design.md` → `DESIGN.md`) and how to parse it (frontmatter = normative, prose = context) are defined once in [`references/design-spec.md`](references/design-spec.md) — resolve and load per that doc.
2. If no design spec exists and the user asks for visual direction, choose a route:
   - Ready-made frame-preset (optional) → `frame-presets/` (adopt a `FRAME.md` as `frame.md`; see `references/design-spec.md`)
   - Named style or mood → `references/visual-styles.md`
   - Fast defaults → `references/house-style.md`
   - Interactive selection → `references/design-picker.md`
3. For multi-scene work, plan beats and rhythm before writing HTML → `references/beat-direction.md`. For scene transitions, jump to `hyperframes-animation/transitions/`.
4. For motion-heavy work, read `references/motion-principles.md` (high-level guardrails), then go to `hyperframes-animation` for atomic rules.

## Routing

| Topic                                                                                                   | Read                                           |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Adopt a ready-made frame-preset as `frame.md` (optional)                                                | `frame-presets/` · `references/design-spec.md` |
| Default palettes, motion, typography, lazy defaults to question                                         | `references/house-style.md`                    |
| Named style presets, mood-to-style routing                                                              | `references/visual-styles.md`                  |
| Palette-specific color tokens                                                                           | `palettes/*.md`                                |
| Composition patterns — PiP, text-behind-subject, title card, slide show                                 | `references/composition-patterns.md`           |
| Stats / infographic presentation                                                                        | `references/data-in-motion.md`                 |
| Structured expansion for open-ended prompts                                                             | `references/prompt-expansion.md`               |
| Video-medium density, scale, color, frame composition                                                   | `references/video-composition.md`              |
| Per-beat direction, rhythm planning, transition timing                                                  | `references/beat-direction.md`                 |
| Post-authoring spec verification (colors, type, corners, spacing, depth)                                | `references/design-adherence.md`               |
| High-level motion guardrails and GSAP-quality rules                                                     | `references/motion-principles.md`              |
| Font selection, pairings, rendered-video type guardrails                                                | `references/typography.md`                     |
| Story doctrine — hook language, value-before-evidence, storyboard-as-proposal, source-traceable visuals | `references/story-spine.md`                    |
| Script pacing, tone, openings, number pronunciation                                                     | `references/narration.md`                      |
| Precomputed audio bands mapped to motion                                                                | `references/audio-reactive.md`                 |

## Scripts

- `scripts/contrast-report.mjs` — inspect contrast warnings from rendered frames.
- `scripts/extract-audio-data.py` — pre-extract audio bands for audio-reactive compositions.
- `scripts/package-loader.mjs` — support script for bundled creative tooling.

`contrast-report.mjs` resolves helper packages from the current project first, then can bootstrap the bundled HyperFrames package version. Set `HYPERFRAMES_SKILL_PKG_VERSION=<version>` only when running the skill outside the bundled CLI/skill install and you need to pin that bootstrap version explicitly.

Run with explicit paths, for example:

```bash
python <SKILL_DIR>/scripts/extract-audio-data.py <audio-file>
```

Animation analysis (`animation-map.mjs`) lives in `hyperframes-animation/scripts/`.

## Boundaries

- Do not override `hyperframes-core` technical rules.
- Do not require a design system for a minimal technical composition.
- Do not add extra scenes, narration, music, captions, or transitions unless the request calls for them or you first propose the expansion.
- Keep recipe references task-specific; do not read every reference for simple edits.

