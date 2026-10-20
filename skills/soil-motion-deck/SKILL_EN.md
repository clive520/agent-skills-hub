---
name: soil-motion-deck
description: "Animated Teaching Deck: Integrates SOIL Teaching Deck (6-engine layout generator) with motion-explainer (animated videos) to produce two synchronized deliverables simultaneously: (A) A PowerPoint .pptx deck with embedded silent looping animation clips on key slides, and (B) A standalone explainer video (MP4) with voiceover, synced captions, and 3-color theming."
---

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
