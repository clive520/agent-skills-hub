---
title: "Animated Teaching Deck (SOIL + HyperFrames) (soil-motion-deck)"
description: "Animated teaching deck: combines SOIL 6 engines with HyperFrames explainer motion to generate both PPTX and MP4 with embedded silent animation clips."
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>Current Version: <strong>🇬🇧 English</strong></span>
  </div>
  <a href="/agent-skills-hub/skills/soil-motion-deck" class="lang-switch-link">
    🇹🇼 點此切換至中文版本 (Switch to Traditional Chinese) →
  </a>
</div>

# soil-motion-deck · Animated Teaching Deck (SOIL + HyperFrames)

<div class="skill-subtitle-bar">動畫教學簡報 (SOIL + HyperFrames)</div>

<div class="skill-meta-bar">
  <span class="badge category">Teaching Decks</span>
  <span class="badge lang-tag">🇬🇧 English</span>
  <span class="badge tag">#SOIL Method</span> <span class="badge tag">#PptxGenJS</span> <span class="badge tag">#HyperFrames</span> <span class="badge tag">#Explainer Animation</span> <span class="badge tag">#Deck Embedding</span>
</div>

> **Description**: Animated teaching deck: combines SOIL 6 engines with HyperFrames explainer motion to generate both PPTX and MP4 with embedded silent animation clips.
>
> **中文簡介**: 動畫教學簡報：結合 SOIL 六引擎與 HyperFrames 解說動畫，一次產出 PPTX 簡報與 MP4 影片，關鍵頁面無縫嵌入靜音循環動畫片段。

::: details Quick Install Commands (Click to Copy)
::: code-group

```bash [Antigravity]
# Install into Antigravity global skills directory
mkdir -p ~/.gemini/config/skills/soil-motion-deck
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/soil-motion-deck/* ~/.gemini/config/skills/soil-motion-deck/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# Install into Claude Code skills directory
mkdir -p ~/.claude/skills/soil-motion-deck
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/soil-motion-deck/* ~/.claude/skills/soil-motion-deck/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# Install into Codex skills directory
mkdir -p ~/.agents/skills/soil-motion-deck
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/soil-motion-deck/* ~/.agents/skills/soil-motion-deck/
rm -rf /tmp/skills-hub
```

```bash [Git Clone]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::

::: tip Skill Dependencies
This skill depends on the following upstream skills. We recommend installing them together:
- [soil-teaching-deck](./soil-teaching-deck.md)
- [motion-explainer](./motion-explainer.md)
:::

::: info Included Files (11 files)
- `references/lessons.md`
- `scripts/cut_clips.py`
- `scripts/export_thumbs.ps1`
- `scripts/make_silent.py`
- `scripts/thumbs.py`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
- `templates/deck_helpers.js`
- `templates/example_pythagoras.js`
- `templates/package.json`
:::

---

## Full Skill Documentation (SKILL.md)


# SOIL Animated Teaching Deck: One Workflow, Two Deliverables

| Deliverable | Content | Primary Use Case |
|---|---|---|
| **Deliverable A: Deck (.pptx)** | Teaching slides built via SOIL 6 engines. 2–4 key slides embed video animations (**silent, no subtitles**), allowing the teacher to lecture over visuals. | Classroom projection & live lecturing |
| **Deliverable B: Video (MP4)** | Full standalone explainer video with narration, synced captions, and unified 3-color theme. | Pre-class study, homework review, YouTube/LMS |

Both deliverables share identical animation assets: video B is authored first, then exact clips are extracted from its "silent twin" and embedded into deck A. You author the animation only once; durations and motion match perfectly.

## Division of Labor

- **`soil-teaching-deck`**: Governs slide layouts, 6 design engines, visual templates, sandwich structure, and GenSeki Gothic font setup.
- **`motion-explainer`** (with `motion-design`, `review-loop`, and HyperFrames): Governs script, narration, frame production, captions, palette, QA review, and MP4 rendering.

## 0. Prerequisites & Environment

Key path aliases:
- `<smd>`: `soil-motion-deck` skill directory.
- `<me>`: `motion-explainer` skill directory.
- `<soil>`: `soil-teaching-deck` skill directory.

Requirements:
- Node.js 22+, ffmpeg, Python 3, HyperFrames CLI.
- TTS: `edge-tts` (default, no GPU needed) or `Breeze TTS 2`.
- Slide generation: `PptxGenJS 3.12.0` (`npm install pptxgenjs`).
- GenSeki Gothic font family (H / B / M weights).

## 1. Initial Interview

Confirm:
1. Subject, unit topic, target audience age/grade, class duration.
2. Deliverable selection: **A + B (Default)**, only A, or only B. (Even if only A is requested, produce B's animation timing first so motion rhythm stays natural).
3. Palette: 3-color video palette (`#121212` background, `#F2F0EA` text, `#FF7A1A` accent) combined with SOIL slide templates.
4. Voiceover voice profile.

## 2. Planning the Sandwich Structure & Animation Slides

Plan slide progression (typically 12–18 slides total):
- Cover (Dark, Deliverable 3-color)
- Hook / Problem setup (Light)
- 🎬 **Animation Slide 1**: Core mechanism breakdown
- Interactive / Checkpoint slide (Light)
- 🎬 **Animation Slide 2**: Detailed proof / simulation
- Application / Exercise slides (Light)
- Action / Summary (Dark)

## 3. Authoring Video B (HyperFrames Explainer)

1. Follow `motion-explainer` steps: draft `STORYBOARD.md`, generate audio via edge-tts, compute clause metadata.
2. Produce frames in parallel.
3. Assemble index, captions, theme, and run `review-loop` to verify visual appeal.
4. Export high-quality video: `hyperframes render --skill=faceless-explainer --quality high --output renders/video.mp4`.

## 4. Extracting Silent Clips for Slides

1. Run `python <smd>/scripts/make_silent.py --video renders/video.mp4 --out renders/silent.mp4` to strip narration and captions.
2. Cut exact frame ranges for each animation slide:
   `python <smd>/scripts/cut_clips.py --video renders/silent.mp4 --cuts "<slide1_start>:<slide1_end>,<slide2_start>:<slide2_end>" --out assets/clips`
3. Export video poster frame thumbnails for PowerPoint placeholder preview.

## 5. Generating PowerPoint Deck A via PptxGenJS

1. Use template script `example_pythagoras.js` as reference.
2. Embed the silent MP4 clips using PptxGenJS `slide.addMedia({ type: 'video', path: '...' })`.
3. Output final `.pptx` file.

## 6. Verification & Delivery

1. Verify PPTX thumbnails on Windows via PowerPoint or LibreOffice (`python <smd>/scripts/thumbs.py`).
2. Deliver:
   - Presentation `.pptx` with embedded animation clips.
   - Master MP4 video file.
   - Contact sheet overview and review report.

