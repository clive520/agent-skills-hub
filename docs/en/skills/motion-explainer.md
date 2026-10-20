---
title: "HyperFrames Motion Explainer Video (motion-explainer)"
description: "HyperFrames animated explainer video production workflow: Chinese voiceover + synced captions + 3-color theme + visual self-review loop."
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>Current Version: <strong>🇬🇧 English</strong></span>
  </div>
  <a href="/agent-skills-hub/skills/motion-explainer" class="lang-switch-link">
    🇹🇼 點此切換至中文版本 (Switch to Traditional Chinese) →
  </a>
</div>

# motion-explainer · HyperFrames Motion Explainer Video

<div class="skill-subtitle-bar">HyperFrames 原理解說動畫影片</div>

<div class="skill-meta-bar">
  <span class="badge category">Explainer Videos</span>
  <span class="badge lang-tag">🇬🇧 English</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#edge-tts</span> <span class="badge tag">#Explainer Video</span> <span class="badge tag">#Knowledge Video</span> <span class="badge tag">#Traditional Chinese</span>
</div>

> **Description**: HyperFrames animated explainer video production workflow: Chinese voiceover + synced captions + 3-color theme + visual self-review loop.
>
> **中文簡介**: HyperFrames 原理解說動畫影片端到端生成流程：中文旁白配音 + 精確時間軸字幕 + 三色品牌主題 + 視覺自我審查循環。

::: details Quick Install Commands (Click to Copy)
::: code-group

```bash [Antigravity]
# Install into Antigravity global skills directory
mkdir -p ~/.gemini/config/skills/motion-explainer
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/motion-explainer/* ~/.gemini/config/skills/motion-explainer/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# Install into Claude Code skills directory
mkdir -p ~/.claude/skills/motion-explainer
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/motion-explainer/* ~/.claude/skills/motion-explainer/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# Install into Codex skills directory
mkdir -p ~/.agents/skills/motion-explainer
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/motion-explainer/* ~/.agents/skills/motion-explainer/
rm -rf /tmp/skills-hub
```

```bash [Git Clone]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::

::: tip Skill Dependencies
This skill depends on the following upstream skills. We recommend installing them together:
- [motion-design](./motion-design.md)
- [review-loop](./review-loop.md)
:::

::: info Included Files (24 files)
- `references/hardware.md`
- `references/lessons.md`
- `references/theme-json.md`
- `references/tts-setup.md`
- `scripts/apply_shots.py`
- `scripts/breeze_voice.py`
- `scripts/edge_tts_voice.py`
- `scripts/fetch_fonts.sh`
- `scripts/fix_voice.py`
- `scripts/hw_check.py`
- `scripts/patch_captions.py`
- `scripts/review_times.py`
- `scripts/subset_fonts.py`
- `scripts/theme.py`
- `scripts/tts_jobs.py`
- `scripts/unify_frames.py`
- `scripts/voice_meta.py`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
- `templates/dispatch_context.md`
- `templates/shared-asset.example.svg`
- `templates/shots.example.json`
- `templates/theme.example.json`
:::

---

## Full Skill Documentation (SKILL.md)


# Motion Explainer — From a Single Prompt to an Animated Video

This skill streamlines the entire pipeline: "Research topic → Draft script → Voiceover → Frame-by-frame animation → Subtitles → Color palette → Self-review → MP4 export". It stands on three foundational pillars:

- **HyperFrames** (Open source by HeyGen, HTML + GSAP rendered to MP4) with official skills (`/hyperframes` entrypoint and `/faceless-explainer` workflow). **Implementation follows official specs.**
- Repository's **`motion-design`** (taste rules: easing, rhythm, reading pause, typography) and **`review-loop`** (contact sheet visual QA). **Aesthetics follow these two skills.**
- Local `scripts/`: Enhances official workflows with native Chinese voiceover, synchronized captions, font consistency, and 3-color palette theming.

`references/lessons.md` contains hard-won lessons from production. **Read before starting.**

## Path Aliases

| Alias | Description | Typical Location |
|---|---|---|
| `&lt;me&gt;` | This skill directory | `~/.claude/skills/motion-explainer` or `~/.agents/skills/motion-explainer` |
| `&lt;fe&gt;` | Official `faceless-explainer` skill | Installed via `hyperframes skills update faceless-explainer` |
| `&lt;review-loop&gt;` | `review-loop` QA skill | Installed alongside `&lt;me&gt;` in skills directory |

Agents without sub-agent support can execute the sequence linearly: replace Section 6's "one sub-agent per frame" with sequential execution.

## 0. Environment Setup (First Run)

- **Run hardware check**: `python &lt;me&gt;/scripts/hw_check.py --project &lt;project&gt;`. Recommends voice engine, `--workers` concurrency, and sub-agent batching.
- Node.js 22+, ffmpeg/ffprobe, Python 3 + Pillow + fonttools (`pip install pillow fonttools brotli`).
- HyperFrames CLI: `npm install -g hyperframes` followed by `hyperframes doctor`.
- TTS Options:
  - **edge-tts (Default)**: `pip install edge-tts`. No GPU required. Taiwan voices: `zh-TW-HsiaoChenNeural` (F), `zh-TW-HsiaoYuNeural` (F), `zh-TW-YunJheNeural` (M).
  - **Breeze TTS 2 (Advanced)**: Local NVIDIA GPU (~8GB+ VRAM). Allows descriptive voice prompt design and voice cloning.
  - English projects can utilize HyperFrames native Kokoro or HeyGen engines.

## 1. Research & Fact-Checking

- Consult at least two independent sources. Reconcile numerical discrepancies.
- Categorize every figure shown on screen: **Official Claim** / **Reported Test** / **Our Estimation**.
- Perform simple physics/math sanity estimates so viewers can calculate along.
- Avoid commercial logos; draw custom diagrams marked with "Schematic / 示意圖".

## 2. Requirement Interview

Confirm aspect ratio (16:9 standard), duration (60–90s recommended), voiceover preference, and automation level.

**Select 3 Theme Colors**:
- Background (`bg`), Foreground text/strokes (`fg`), Accent (`accent` for answers, conclusions, chapter cards).
- Default recommendation: Dark `#121212`, Clean White `#F2F0EA`, Vivid Orange `#FF7A1A`.
- Single unified font family: GenSeki Gothic Bold (OFL licensed) or Noto Sans TC.

## 3. Project Scaffolding & Storyboard

1. `hyperframes init videos/&lt;kebab-name&gt; --non-interactive --example=blank --skill=faceless-explainer`. Write `BRIEF.md`, select a clean line-art preset (e.g. `cobalt-grid`).
2. Add Traditional Chinese overrides in `frame.md`.
3. Run `bash &lt;me&gt;/scripts/fetch_fonts.sh &lt;project&gt;` to bundle local web fonts into `assets/fonts/`.
4. Write `STORYBOARD.md` and `SCRIPT.md`. Segment narration strictly by grammatical clauses (each comma marks a visual reveal). Spell out numbers as words for accurate TTS.

## 4. Voiceover & Audio Timing

1. Generate audio clips:
   - `python &lt;me&gt;/scripts/edge_tts_voice.py --project <p> --voice zh-TW-HsiaoChenNeural`
2. Let user audition opening sentences. If pronunciation errors occur, generate localized candidate patches using `scripts/fix_voice.py` rather than re-recording the entire script.
3. Quantify clause timings: `python &lt;me&gt;/scripts/voice_meta.py --project <p>`
4. Synchronize durations: `node &lt;fe&gt;/scripts/audio.mjs sync-durations --audio-meta ./audio_meta.json --storyboard ./STORYBOARD.md`
5. Normalize loudness to −14 LUFS ±1, true peak ≤ −1 dBFS.

## 5. Shot Planning

- Structure visual cues in `shots.json`. Convert to timestamps via `python &lt;me&gt;/scripts/apply_shots.py --project <p>`.
- Recurring hero elements (vehicles, characters, gauges) must be authored as shared SVGs with fixed coordinates before frame dispatch.

## 6. Parallel Frame Production

1. Generate packets: `node &lt;fe&gt;/scripts/frame-packets.mjs --project <p> --storyboard <p>/STORYBOARD.md`
2. Populate `.hyperframes/frame-packets/_dispatch_context.md`.
3. Dispatch workers across frames. Ensure adjacent frames receive geometry handoffs.
4. Harmonize typography and stroke alignments: `python &lt;me&gt;/scripts/unify_frames.py --project <p>`.

## 7. Assembly, Captions, Theming

```bash
node <fe>/scripts/captions.mjs build --storyboard ./STORYBOARD.md --audio-meta ./audio_meta.json --hyperframes . --out ./caption_groups.json
node <fe>/scripts/assemble-index.mjs --storyboard ./STORYBOARD.md --hyperframes .
python <me>/scripts/patch_captions.py --project .
python <me>/scripts/theme.py --project .
node <fe>/scripts/transitions.mjs inject --storyboard ./STORYBOARD.md --hyperframes .
node <fe>/scripts/transitions.mjs verify --storyboard ./STORYBOARD.md --index ./index.html
hyperframes lint && hyperframes check
```

Subset fonts as the final optimization: `python &lt;me&gt;/scripts/subset_fonts.py --project .` (drops CJK font weight from 15MB down to ~300KB).

## 8. Review & Visual QA (`review-loop`)

- Render draft: `hyperframes render --quality draft --output renders/draft.mp4`.
- Generate contact sheet: `python &lt;review-loop&gt;/scripts/sheet.py --video renders/draft.mp4 --at "$(python &lt;me&gt;/scripts/review_times.py --project .)" --out review --name draft`.
- Inspect every frame against the checklist before final master render: `hyperframes render --skill=faceless-explainer --quality high --output renders/video.mp4`.

## 9. Deliverables

Deliver the final MP4 path, duration, contact sheet overview, and a clear breakdown of citations, claims vs estimates, and deviations.

