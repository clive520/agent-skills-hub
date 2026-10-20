---
title: "SOIL Universal Teaching Deck (6 Engines) (soil-teaching-deck)"
description: "SOIL universal teaching deck workflow with 6 layout engines (subject-agnostic, zero-API-key native PptxGenJS). Guides teachers from curriculum planning to high-impact slides."
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>Current Version: <strong>🇬🇧 English</strong></span>
  </div>
  <a href="/agent-skills-hub/skills/soil-teaching-deck" class="lang-switch-link">
    🇹🇼 點此切換至中文版本 (Switch to Traditional Chinese) →
  </a>
</div>

# soil-teaching-deck · SOIL Universal Teaching Deck (6 Engines)

<div class="skill-subtitle-bar">SOIL 全科教學簡報六引擎</div>

<div class="skill-meta-bar">
  <span class="badge category">Teaching Decks</span>
  <span class="badge lang-tag">🇬🇧 English</span>
  <span class="badge tag">#SOIL Method</span> <span class="badge tag">#PptxGenJS</span> <span class="badge tag">#Teaching Deck</span> <span class="badge tag">#6 Engines</span> <span class="badge tag">#Universal</span>
</div>

> **Description**: SOIL universal teaching deck workflow with 6 layout engines (subject-agnostic, zero-API-key native PptxGenJS). Guides teachers from curriculum planning to high-impact slides.
>
> **中文簡介**: SOIL 全科教學簡報六引擎工作流（各科通用、零金鑰原生 PptxGenJS）。從教材定位、認知編修到代碼輸出，打造高學習成效的教學投影片。

::: details Quick Install Commands (Click to Copy)
::: code-group

```bash [Antigravity]
# Install into Antigravity global skills directory
mkdir -p ~/.gemini/config/skills/soil-teaching-deck
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/soil-teaching-deck/* ~/.gemini/config/skills/soil-teaching-deck/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# Install into Claude Code skills directory
mkdir -p ~/.claude/skills/soil-teaching-deck
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/soil-teaching-deck/* ~/.claude/skills/soil-teaching-deck/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# Install into Codex skills directory
mkdir -p ~/.agents/skills/soil-teaching-deck
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/soil-teaching-deck/* ~/.agents/skills/soil-teaching-deck/
rm -rf /tmp/skills-hub
```

```bash [Git Clone]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info Included Files (3 files)
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## Full Skill Documentation (SKILL.md)


# SOIL Teaching Deck Workflow (Universal Edition)

A subject-agnostic teaching presentation workflow based on Professor Chun-Yi Lee's SOIL pedagogical method.
Six engines, one clear roadmap: First clarify **what to teach**, then design **how to teach**, and finally refine **how to present**.

> ⚙️ **Key Features of this Edition**
> - 🎯 **Subject-Agnostic**: 8 universal educational layout templates applicable across Math, Science, Social Studies, Languages, Arts, and Humanities.
> - 🔑 **Zero-API-Key**: Does not rely on external AI image APIs. All visual layouts are composed using **native PptxGenJS** (color blocks, structured tables, geometric shapes) + **emoji icons**.
> - 📦 **Deliverable**: Production-ready `.pptx` presentations generated deterministically via PptxGenJS.

---

## Step 1: Determine the Working Mode

Ask the user one initial diagnostic question:

> What is your current situation?
> 1. I have course materials (text, notes, textbook paragraphs, exercises) and want to make a teaching deck.
> 2. I have an existing `.pptx` presentation and want to improve its pedagogical impact.
> 3. I only have a topic (e.g. "Quadratic Equations", "Photosynthesis", "Present Perfect Tense") and want to start from scratch.
> 4. I want to define a standardized presentation style system for repeated use.

| Choice | Working Mode | Engines Executed |
|---|---|---|
| 1 | Full Pipeline Mode | Engines 1 → 2 → 3 → 4 → 5 → 6 |
| 2 | Diagnostic & Refinement Mode | Engine 4 (+ Engine 3 Page Roles) → Refine `.pptx` |
| 3 | Scaffolding & Full Mode | Content research → Engines 1 → 2 → 3 → 4 → 5 → 6 |
| 4 | Style Definition Mode | Engine 5 |

---

## Step 2: Critical Context Questions

### Before Engine 1:
1. **Subject and specific topic?**
2. **Target audience?** (Elementary, Middle School, High School, University, Adult / Workshop)
3. **Class duration?** (45 mins, 90 mins, half-day workshop)

### Before Engine 5:
- Do you have a preferred presentation visual style / palette, or should I recommend one based on the subject?

---

## Engine 1: SOIL Concept Positioning

Identify the core pedagogical kernel:
- **Seed (S)**: The prerequisite knowledge and intuitive anchor.
- **Oxygen (O)**: The cognitive gap or curiosity trigger (Why does this matter? What problem does it solve?).
- **Illumination (I)**: The central principle, law, or mechanism.
- **Link (L)**: Transferable applications, boundary conditions, and real-world connections.

---

## Engine 2: Context Positioning

Structure the pedagogical progression:
- **Phase 1: Spark & Anchor**: Activate prior knowledge and state the inquiry question.
- **Phase 2: Scaffolding**: Deconstruct complexity into digestible increments.
- **Phase 3: Cognitive Climax**: The "Aha!" moment when the core concept resolves the problem.
- **Phase 4: Synthesis & Extension**: Practice exercises, common misconceptions, and takeaway summary.

---

## Engine 3: Slide Architecture & 7 Page Roles

Assign each slide a distinct functional role:
1. **Hook / Problem Frame**: Poses the central dilemma.
2. **Concept Contrast**: Side-by-side comparison (Before vs After, Common Error vs Correct Form).
3. **Structural Breakdown**: Multi-step or component breakdown cards.
4. **Q&A Dual-Column**: Socratic dialog between student question and conceptual explanation.
5. **Glossary / Term Definition**: Precise definition with visual anchor.
6. **Annotation / Text Highlighting**: Targeted text markup emphasizing keywords.
7. **Synthesis / Action Check**: Summary takeaway or self-check challenge.

---

## Engine 4: Cognitive Editing

Apply cognitive load reduction principles:
- **Rule of 3**: Max 3 conceptual points per slide.
- **Signaling**: Strong typographic hierarchy; 1 accent color reserved strictly for answers and focus points.
- **Spatial Contiguity**: Place labels adjacent to relevant diagrams.
- **Redundancy Elimination**: Never read verbatim slide text aloud.

---

## Engine 5: Style Architecture & Theming

- **Font Hierarchy**: GenSeki Gothic (Heavy for headings, Bold for subheads, Medium for body) or Noto Sans TC.
- **Harmonious Palette**:
  - Educational Clean: Dark Slate `#1E293B`, Soft White `#F8FAFC`, Vibrant Indigo `#4F46E5`.
  - Academic Contrast: Deep Charcoal `#121212`, Clean White `#F2F0EA`, Energetic Amber `#FF7A1A`.
  - Natural Science: Forest `#064E3B`, Crisp White `#F0FDF4`, Emerald `#059669`.

---

## Engine 6: Native PptxGenJS Code Generation

Produce clean, standalone JavaScript code using `pptxgenjs`:
- Standard 16:9 widescreen layout (`w: 13.33, h: 7.5`).
- Pure geometric primitives (`slide.addShape`, `slide.addTable`, `slide.addText`).
- No external image dependencies; completely offline-safe and deterministic.
- Outputs reproducible `.pptx` presentations instantly.

