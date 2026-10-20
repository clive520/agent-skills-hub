---
title: "Agent Media OS (TTS / SFX / Images / Logos) (media-use)"
description: "Agent Media OS: resolve BGM, SFX, image, icon, brand logo, voice, and color grade into frozen assets with one verb."
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>Current Version: <strong>🇬🇧 English</strong></span>
  </div>
  <a href="/agent-skills-hub/skills/media-use" class="lang-switch-link">
    🇹🇼 點此切換至中文版本 (Switch to Traditional Chinese) →
  </a>
</div>

# media-use · Agent Media OS (TTS / SFX / Images / Logos)

<div class="skill-subtitle-bar">多媒體資產 OS (語音/音效/圖像/標誌)</div>

<div class="skill-meta-bar">
  <span class="badge category">Media Assets</span>
  <span class="badge lang-tag">🇬🇧 English</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#Media OS</span> <span class="badge tag">#SFX & BGM</span> <span class="badge tag">#TTS Voice</span> <span class="badge tag">#Brand Logos</span> <span class="badge tag">#Asset Resolve</span>
</div>

> **Description**: Agent Media OS: resolve BGM, SFX, image, icon, brand logo, voice, and color grade into frozen assets with one verb.
>
> **中文簡介**: 多媒體資產 OS：單一動詞 resolve 解析 BGM、音效、語音合成 (TTS)、品牌標誌與圖像，並提供色彩風格校正。

::: details Quick Install Commands (Click to Copy)
::: code-group

```bash [Antigravity]
# Install into Antigravity global skills directory
mkdir -p ~/.gemini/config/skills/media-use
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/media-use/* ~/.gemini/config/skills/media-use/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# Install into Claude Code skills directory
mkdir -p ~/.claude/skills/media-use
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/media-use/* ~/.claude/skills/media-use/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# Install into Codex skills directory
mkdir -p ~/.agents/skills/media-use
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/media-use/* ~/.agents/skills/media-use/
rm -rf /tmp/skills-hub
```

```bash [Git Clone]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info Included Files (115 files)
- `.gitignore`
- `audio/assets/sfx/chime.mp3`
- `audio/assets/sfx/click-soft.mp3`
- `audio/assets/sfx/click.mp3`
- `audio/assets/sfx/CREDITS.md`
- `audio/assets/sfx/error.mp3`
- `audio/assets/sfx/glitch-1.mp3`
- `audio/assets/sfx/glitch-2.mp3`
- `audio/assets/sfx/glitch-3.mp3`
- `audio/assets/sfx/impact-bass-1.mp3`
- `audio/assets/sfx/impact-bass-2.mp3`
- `audio/assets/sfx/key-press.mp3`
- `audio/assets/sfx/manifest.json`
- `audio/assets/sfx/notification.mp3`
- `audio/assets/sfx/ping.mp3`
- `audio/assets/sfx/pop.mp3`
- `audio/assets/sfx/riser.mp3`
- `audio/assets/sfx/sparkle.mp3`
- `audio/assets/sfx/typing.mp3`
- `audio/assets/sfx/whoosh-cinematic.mp3`
- `audio/assets/sfx/whoosh-short.mp3`
- `audio/assets/sfx/whoosh.mp3`
- `audio/references/bgm.md`
- `audio/references/captions/authoring.md`
- `audio/references/captions/motion.md`
- `audio/references/captions/transcript-handling.md`
- `audio/references/remove-background.md`
- `audio/references/requirements.md`
- `audio/references/sfx.md`
- `audio/references/transcribe.md`
- `audio/references/tts-to-captions.md`
- `audio/references/tts.md`
- `audio/scripts/audio.mjs`
- `audio/scripts/audio.test.mjs`
- `audio/scripts/gemini-pipeline.test.mjs`
- `audio/scripts/heygen-tts.mjs`
- `audio/scripts/heygen-tts.test.mjs`
- `audio/scripts/heygen-voice.mjs`
- `audio/scripts/heygen-voice.test.mjs`
- `audio/scripts/lib/audio-meta.mjs`
- `audio/scripts/lib/audio-meta.test.mjs`
- `audio/scripts/lib/bgm-volume.mjs`
- `audio/scripts/lib/bgm.mjs`
- `audio/scripts/lib/bgm.test.mjs`
- `audio/scripts/lib/concurrency.mjs`
- `audio/scripts/lib/concurrency.test.mjs`
- `audio/scripts/lib/gemini-auth.mjs`
- `audio/scripts/lib/gemini-auth.py`
- `audio/scripts/lib/gemini-auth.test.mjs`
- `audio/scripts/lib/gemini-auth_test.py`
- `audio/scripts/lib/gemini-tts.mjs`
- `audio/scripts/lib/gemini-tts.test.mjs`
- `audio/scripts/lib/heygen.mjs`
- `audio/scripts/lib/heygen.test.mjs`
- `audio/scripts/lib/host-audio.mjs`
- `audio/scripts/lib/host-audio.test.mjs`
- `audio/scripts/lib/main-module.mjs`
- `audio/scripts/lib/media-record.mjs`
- `audio/scripts/lib/media-record.test.mjs`
- `audio/scripts/lib/openverse.mjs`
- `audio/scripts/lib/python.mjs`
- `audio/scripts/lib/python.test.mjs`
- `audio/scripts/lib/sfx.mjs`
- `audio/scripts/lib/sfx.test.mjs`
- `audio/scripts/lib/tts.cleanup.test.mjs`
- `audio/scripts/lib/tts.mjs`
- `audio/scripts/lib/tts.spawn.test.mjs`
- `audio/scripts/lib/tts.test.mjs`
- `audio/scripts/lyria-recipe.py`
- `audio/scripts/wait-bgm.mjs`
- `audio/scripts/wait-bgm.test.mjs`
- `luts/index.json`
- `luts/README.md`
- `references/audio.md`
- `references/grading.md`
- `references/media-treatment-recipes.md`
- `references/media-treatments.md`
- `references/memory.md`
- `references/meta.md`
- `references/operations.md`
- `references/resolve.md`
- `references/setup-providers.md`
- `references/telemetry-dashboard.md`
- `scripts/audio-duck.mjs`
- `scripts/compatibility.test.mjs`
- `scripts/dither.mjs`
- `scripts/dither.test.mjs`
- `scripts/eval.mjs`
- `scripts/lib/config-lock.mjs`
- `scripts/lib/cutlist.mjs`
- `scripts/lib/duck.mjs`
- `scripts/lib/error-diffusion.mjs`
- `scripts/lib/index-gen.mjs`
- `scripts/lib/manifest.mjs`
- `scripts/lib/media-fetch.mjs`
- `scripts/lib/media-home.mjs`
- `scripts/lib/npx-sync.mjs`
- `scripts/lib/parakeet-words.mjs`
- `scripts/lib/prefs-store.mjs`
- `scripts/lib/recipe-store.mjs`
- `scripts/lib/telemetry.mjs`
- `scripts/lib/telemetry.test.mjs`
- `scripts/lib/transcriptCutFade.mjs`
- `scripts/lib/words.mjs`
- `scripts/prefs.mjs`
- `scripts/recipe.mjs`
- `scripts/resolve-plugin.test.mjs`
- `scripts/resolve.mjs`
- `scripts/transcribe.mjs`
- `scripts/transcribe.test.mjs`
- `scripts/transcript-cut.mjs`
- `scripts/transcript-cut.test.mjs`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## Full Skill Documentation (SKILL.md)


**Plugin installs:** Before setup or freshness commands, follow [plugin execution rules](../hyperframes/references/plugin-installation.md) when this skill is inside a HyperFrames plugin. Standalone installs keep the update instructions below.

# media-use

The media OS for HyperFrames: resolve · generate · operate · remember — every media type, one skill, zero context noise.

Only when `HEYGEN_API_BASE` is set in your environment (a host app set it and pays for HeyGen with its own key): HeyGen media is already paid for. Do not ask the person to install or sign in to the `heygen` CLI and do not offer its OAuth allowance; catalog search, TTS and avatar calls here go through the host. When that same host also gives you its own HeyGen tools, use those first. When a call through the host is refused, tell the person the host's message as written (it names the fix, such as adding or replacing the key in the app's Settings) and stop; do not switch to another provider unless they ask.

First run otherwise (no `HEYGEN_API_BASE`), when you will use HeyGen media (catalog search, TTS, avatar video): install and sign in to the `heygen` CLI (the free-usage path), then verify with `npx hyperframes media-use resolve --doctor`. Setup and providers: `references/setup-providers.md`.

Music and sound effects inside a host app: when the app you run in gives you its own music or sound-effect tools, use those. Without `HEYGEN_API_BASE`, `resolve --type bgm` searches the HeyGen catalog through the `heygen` CLI and fails without it, saying so. `resolve --type sfx` searches Openverse (CC0 and CC BY only, no account) and falls back to its bundled library offline; credit CC BY sounds as `audio/references/sfx.md` says.

Without `HEYGEN_API_BASE`, before generating a voiceover or an avatar video, tell the person: signing in to the heygen CLI with OAuth (`heygen auth login --oauth`) gives a free allowance for TTS voiceover and avatar videos, while an API key bills API credits.

## Resolve — the one verb

```bash
npx hyperframes media-use resolve --type <type> --intent "<description>" --project <dir>
```

Returns one line: `resolved <id> → <path> (<type>, <metadata>)`. All search noise stays on disk.

| Type    | One-line intent                                                                  |
| ------- | -------------------------------------------------------------------------------- |
| `bgm`   | background music (HeyGen catalog via the `heygen` CLI, 10k+ tracks)              |
| `sfx`   | sound effects (Openverse CC0 / CC BY, bundled 21-file library offline)           |
| `image` | photos, backgrounds (HeyGen asset search, 75k+ vectors)                          |
| `icon`  | icons, symbols (transparent)                                                     |
| `logo`  | official brand marks (theSVG → GitHub avatar → favicon; never redrawn)           |
| `voice` | TTS voiceover (HeyGen free-usage path; optional local Kokoro)                    |
| `grade` | measured correction candidate; broad polish/stylization follows Media Treatments |
| `lut`   | user-provided or explicitly chosen reusable validated `.cube` file               |

Before resolving fresh, list reusable candidates with `--candidates` and judge fit yourself — reuse rules, all flags, ingest (`--from`), and adopt are in `references/resolve.md`.

## Treat broad visual feedback as media intent

When a user explicitly asks to fix, polish, stylize, obscure, emphasize, or
reveal photographic media, read `references/media-treatments.md` even if they
do not name color grading or an effect. Inspect the real `<img>`/`<video>`,
choose one primary intent, then use deterministic persistence and verification.
Use a matching recipe as an optional tested seed, or inspect
`hyperframes media-treatment --capabilities --json`, then request one relevant
family/effect with `--capability <id>` and assemble a custom treatment from
canonical controls. Never load `--all` for ordinary authoring. A treatment may
compose correction, a preset, finishing, compatible shader effects, supported
keyframes, and optional Registry overlays. Add only source-justified bounded
tuning and compatible parts, never effects merely to make the result look more
sophisticated. Persist the final combined payload with
`hyperframes media-treatment`.

Use one progressively escalating workflow. For video, inspect one labeled
early/middle/late contact sheet rather than reading frames separately. Apply one
candidate and inspect one after-sheet for ordinary correction or polish.
Escalate to individual frames or moving draft evidence only when the result is
ambiguous, temporal, stylized, LUT-based, HDR/LOG-sensitive, private, or
brand-critical.

For ordinary correction or polish, persist the final treatment's
preset/adjustment JSON.
Do not generate a `.cube` LUT merely to encode exposure, shadows, contrast, or
warmth. Use a LUT only when the user supplies one or the selected treatment
explicitly owns one. `resolve --type grade --for ... --analyze` is measurement
evidence, not permission to replace the chosen treatment with a generated LUT.
Do not recreate supported vignette, grain, blur, pixelate, color, or treatment
effects with CSS/SVG overlays; that bypasses Studio controls and the canonical
preview/render shader path.

## Be proactive — run a media opportunity pass

The human usually can't tell which media would lift the piece. You can. When you build or review a composition, do **one** grounded scan and then **ask once** — don't silently add, and don't nag per asset.

Surface an opportunity only when a concrete signal is present:

| Signal detected                                          | Offer                                                                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| On-screen text / a script with no voiceover              | TTS voiceover (audio engine)                                                                           |
| Emoji or a `<div>` styled as an icon                     | resolve real `icon`s                                                                                   |
| Image that is a placeholder, tiny, or upscaled-looking   | a better `image` (and/or upscale — see `references/operations.md`)                                     |
| Hard scene cuts / transitions with no sound              | transition `sfx`                                                                                       |
| A piece over ~10s with no music bed                      | `bgm`                                                                                                  |
| Footage that reads under/over-exposed or color-cast      | a corrective grade (inspect it with `hyperframes media-treatment --selector '#hero' --analyze --json`) |
| Photographic media that feels visually flat or off-topic | one specific source-appropriate preset or custom treatment, with the intended target named             |
| A meaningful media entrance/reveal that feels static     | one supported seek-safe treatment animation; preserve color unless the request also justifies a preset |

Rules that keep this a help, not nagware: **grounded, not generic** (no signal → no suggestion); **opinionated + concrete** (propose the specific fix with defaults chosen — the human approves **all / some / none**); **once per project** (one consolidated ask; respect "leave it"); **surface, never silently mutate** (color grades especially: propose and preview — a gray-world "correction" ruins an intentional sunset or neon look).

## Where to look — read only the file your task needs

| Task                                                                      | Read                             |
| ------------------------------------------------------------------------- | -------------------------------- |
| resolve / reuse / adopt / ingest, flags, cascade, inventory               | `references/resolve.md`          |
| color grading, LUTs, smart grade (`--for`), grade-compare                 | `references/grading.md`          |
| voiceover / TTS, music, SFX, captions, transcription (audio engine)       | `references/audio.md`            |
| cut / reframe / transform existing media, exact error diffusion, HEVC     | `references/operations.md`       |
| source-aware creative treatments, realtime effects, overlays, reveals     | `references/media-treatments.md` |
| install + auth, provider table, RAM ladders, `--local-only`, `--provider` | `references/setup-providers.md`  |
| remembered preferences + frozen recipes (user memory)                     | `references/memory.md`           |
| ownership matrix, usage stats, telemetry, privacy (maintainer-facing)     | `references/meta.md`             |

