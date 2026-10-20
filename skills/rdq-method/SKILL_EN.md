---
name: rdq-method
description: Requirements Discovery Quadrant (RDQ) method for structured requirement elicitation. Pre-execution discovery using 4 quadrants (I: Stated / Known Knowns, II: Questions to Answer / Known Unknowns, III: Tacit Knowledge to Ask / Unknown Knowns, IV: Menu of Recommendations / Unknown Unknowns) to produce a 1-page requirement spec card. Run before executing medium-to-large projects to prevent costly rework.
---

# RDQ Method — Requirements Discovery Quadrant Method

> Requirements Discovery Quadrant Method
> Discover the real problems before execution begins.

---

## Core Positioning

RDQ is the **pre-requisite requirements layer for all execution skills**. It produces no final deliverables itself; instead, it outputs a single-screen **Requirements Spec Card** (`RDQ-spec-<task-slug>.md`). Execution begins only after explicit user confirmation.

Golden rule: **The cost of interview must strictly remain lower than the rework cost it saves.** If this rule is ever violated, stop interviewing immediately and proceed to direct execution.

---

## Four Quadrants Operational Rules

Each quadrant has a **locked verb** and strict boundaries:

| Quadrant | Name | Locked Verb | Never Allowed |
|---|---|---|---|
| **I** | Known Knowns | **Extract Only** — Echo what the user stated | Do not ask questions here |
| **II** | Known Unknowns | **Answer Only** — Resolve what the user asked | Do not ask counter-questions |
| **III** | Unknown Knowns | **Ask Only** what the user can answer on the spot | Never ask what they cannot know |
| **IV** | Unknown Unknowns | **Propose Only** actionable options to select | Never ask open-ended questions |

### III / IV Decision Test

Before formulating any prompt or question, ask yourself:
> **"Can the user answer this immediately on the spot?"**
- **Yes** -> Quadrant III: Ask them (e.g., "Is classroom Wi-Fi stable? What is the students' prior knowledge?").
- **Requires information/context from me first** -> Quadrant IV: Offer options (e.g., "Should we prepare a fallback plan for login failures?").

Asking the user "Is there anything else you haven't thought of?" is a logical fallacy. Never ask it.

---

## Interaction Budget (Hard Caps)

| Mode | Applicable To | III Questions | IV Menu | Confirmation | **Total Interruptions** |
|---|---|---|---|---|---|
| **Lite** (Default) | Single deliverable, <=半天 task | 1 round <=3 questions | Merged into round (1 item) | 1 time | **2 times** |
| **Full** | Multi-deliverable, multi-day, public, costly | <=2 rounds, <=4 questions/round | Separate 1 item | 1 time | **3 times** |

- Determine mode silently; never ask the user whether they want Lite or Full.
- Default to Lite whenever uncertain.
- In round 2 of Full mode, only ask questions if new branches emerged from round 1.

---

## Early Exit Conditions

1. **Escape Option**: Every round's last question always includes: "That's enough, start right away".
2. **Escape Utterances**: If the user says "Just do it", "Stop asking", or "Show me a draft", immediately stop the interview and generate the spec card.
3. **Zero-Question Collapse**: If essential fields (Goal, Audience, Output format, Hard constraints) are already clear, Quadrant III can have zero questions—jump straight to the spec card.

---

## 7-Phase Execution Loop

1. **Phase 1: Environment Scan & Extraction**: Parse user input and inspect local repository/files. Extract Known Knowns without asking.
2. **Phase 2: Answer Known Unknowns**: Answer user questions directly.
3. **Phase 3: Quadrant III Tacit Interview**: Inquire about key missing parameters using multiple-choice questions.
4. **Phase 4: Quadrant IV Menu Proposal**: Present high-value options with trade-offs. Unselected items become explicit Exclusions.
5. **Phase 5: Output Spec Card**: Generate `RDQ-spec-<slug>.md` formatted to fit on a single screen (within ~40 lines).
6. **Phase 6: User Confirmation (Hard Gate)**: Require user confirmation before handing off or starting execution.
7. **Phase 7: Execution & Downstream Handoff**: Hand off the confirmed spec to downstream skills (e.g., `soil-teaching-deck`, `faceless-explainer`) without repeated requirement queries.

---

## Files

- `references/spec-template.md`: Verbatim spec card template and field definitions.
- `references/question-bank.md`: Domain-specific interview questions and menu items.
