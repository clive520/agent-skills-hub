---
title: "Animation Visual Self-Review Loop (review-loop)"
description: "Visual self-review loop for motion videos: export draft, tile snapshot contact sheets at each beat, and cross-reference checklists."
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>Current Version: <strong>🇬🇧 English</strong></span>
  </div>
  <a href="/agent-skills-hub/skills/review-loop" class="lang-switch-link">
    🇹🇼 點此切換至中文版本 (Switch to Traditional Chinese) →
  </a>
</div>

# review-loop · Animation Visual Self-Review Loop

<div class="skill-subtitle-bar">動畫多影格視覺自我審查循環</div>

<div class="skill-meta-bar">
  <span class="badge category">Review & QA</span>
  <span class="badge lang-tag">🇬🇧 English</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#Contact Sheet</span> <span class="badge tag">#Multi-frame Review</span> <span class="badge tag">#QA Validation</span>
</div>

> **Description**: Visual self-review loop for motion videos: export draft, tile snapshot contact sheets at each beat, and cross-reference checklists.
>
> **中文簡介**: 動畫影片的視覺自我審查循環：輸出草稿、在每個節拍截圖拼成 Contact Sheet、逐張對照檢查表修正與品質把關。

::: details Quick Install Commands (Click to Copy)
::: code-group

```bash [Antigravity]
# Install into Antigravity global skills directory
mkdir -p ~/.gemini/config/skills/review-loop
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/review-loop/* ~/.gemini/config/skills/review-loop/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# Install into Claude Code skills directory
mkdir -p ~/.claude/skills/review-loop
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/review-loop/* ~/.claude/skills/review-loop/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# Install into Codex skills directory
mkdir -p ~/.agents/skills/review-loop
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/review-loop/* ~/.agents/skills/review-loop/
rm -rf /tmp/skills-hub
```

```bash [Git Clone]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info Included Files (5 files)
- `LICENSE`
- `scripts/sheet.py`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## Full Skill Documentation (SKILL.md)


# Review Loop (HyperFrames Edition)

You cannot watch a video in real-time, but you can inspect static frames. Never report a video as complete without reviewing the contact sheet generated from the current build.

> Adapted from whaleyxbt/claude-motion's `review-loop` skill (MIT, see `LICENSE` in this folder). Original `npm run …` commands replaced with HyperFrames CLI, ffmpeg, and local `scripts/sheet.py`. Paragraphs marked with "(Hub Edition)" are added in this edition.

`SHEET` below refers to `python "<skill-dir>/scripts/sheet.py"`. This skill directory is usually at `~/.claude/skills/review-loop` (Claude Code) or `~/.agents/skills/review-loop` (Codex). Use absolute paths for all commands. Requires Python + Pillow and ffmpeg.

## The Review Cycle

0. **Machine Check First** (Hub Edition): Run `npx hyperframes check` in the project directory. It runs lint, runtime, layout overflow, motion, and contrast checks all at once (official HyperFrames has deprecated `validate`/`inspect` in favor of `check`). Fix any errors before proceeding. See the official `hyperframes-cli` skill for details.
   - Mask reveals will inevitably trigger `container_overflow` during transition entrance by design; add `data-layout-allow-overflow` to mask containers. However, if `text_box_overflow` is still reported after landing, the container is too short and will clip text (especially Chinese characters and superscripts); increase the container height.
1. **Draft Export**: In the project folder, run `npx hyperframes render --quality draft --output renders/draft.mp4`.
2. **Contact Sheet**: Capture the exact moment each beat "settles", tiled 4×2 into `beats-N.png`, labeled with timestamps. Each thumbnail defaults to 360 px width (simulating phone screen width). Beat timing depends on project type:
   - **motion-explainer series** (with `audio_meta.json`): 0.15s before each voiceover clause ends.
     `SHEET --video <project>/renders/draft.mp4 --at "$(python <motion-explainer-dir>/scripts/review_times.py --project <project>)" --out <project>/review --name draft`
   - **timeline.js projects** (`motion-design` Section 1): 0.3s after each beat.
     `SHEET --video <project>/renders/draft.mp4 --timeline <project>/timeline.js --out <project>/review`
3. **Open and Inspect Every Sheet** (using image viewing tools), cross-referencing against the checklist below. Simply glancing at file names or terminal logs does NOT count.
4. Zoom in on suspicious areas:
   - Scrub a transition: `SHEET --video … --from 3 --to 5 --every 0.2 --name scrub`
   - Inspect specific timestamp: `SHEET --video … --at 3.7,3.75,3.8 --name exact`
   - Single frame full resolution: `ffmpeg -v error -ss <seconds> -i <project>/renders/draft.mp4 -frames:v 1 frame.png`
   - To snapshot directly from composition without re-rendering: `npx hyperframes snapshot --at 3.7,5.2 --no-end --describe false -o <folder>`, then tile with `SHEET --images … --labels …`.
5. Fix issues and return to Step 0. Repeat until a complete cycle reveals zero defects.
6. **Final Render**: Export high quality final video (for motion-explainer projects, follow Section 8), re-run Step 2 on final video, then perform audio check (see below).

## Checklist

### Composition & Layout
- Only one focal point per frame. If two elements compete for attention, one must wait.
- No unintentional collisions or overlaps, especially during transitions where exiting and entering elements share screen space.
- Safe zones: Keep critical content at least 60 px away from screen edges.
- Frame 0 must be an actual image, never pure black (serves as social media thumbnail).

### Typography & Text
- No clipping by masks, containers, or screen bounds (unless deliberate).
- When scaled to mobile width (contact sheet grid), key message must remain legible.
- Text must not be in motion while meant to be read.
- (Hub Edition) Chinese: No typos; 100% Traditional Chinese characters; use full-width punctuation; no missing glyphs/tofu boxes.

### Pacing & Motion
- Every readable state pauses long enough (see `motion-design` Section 4). If text is still moving during mid-pause frames, duration is too brief.
- Scenes cross-fade/overlap smoothly rather than cutting to blank/black screens.
- Exits must be faster than entrances.

### Consistency
- Strictly adhere to `:root` design token palette; accent color denotes the frame's single highlight.
- Reoccurring elements must look identical across scenes.

### Audio (When applicable)
- Waveform check: `ffmpeg -v error -i <video> -filter_complex "showwavespic=s=1600x240" -frames:v 1 wave.png`. Confirm audio peaks align with visual beats.
- Loudness (Hub Edition): `ffmpeg -hide_banner -nostats -i <video> -af ebur128=peak=true -f null -`. Target: −14 LUFS ±1, true peak ≤ −1 dBFS.
- For Chinese voiceover accent and emotional tone: listen with human ears rather than relying solely on automated scores.

## Reporting

When reporting completion, explicitly state: what was inspected, what was fixed, and on which sheet the verified result can be seen. Never claim a fix without re-rendering and visually inspecting the output.

