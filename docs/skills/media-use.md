---
title: "多媒體資產 OS (語音/音效/圖像/標誌) (media-use)"
description: "多媒體資產 OS：單一動詞 resolve 解析 BGM、音效、語音合成 (TTS)、品牌標誌與圖像，並提供色彩風格校正。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/media-use" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# media-use · 多媒體資產 OS (語音/音效/圖像/標誌)

<div class="skill-subtitle-bar">Agent Media OS (TTS / SFX / Images / Logos)</div>

<div class="skill-meta-bar">
  <span class="badge category">媒體資源</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#多媒體OS</span> <span class="badge tag">#音效BGM</span> <span class="badge tag">#語音合成</span> <span class="badge tag">#Logo圖像</span> <span class="badge tag">#資產解析</span>
</div>

> **簡介**：多媒體資產 OS：單一動詞 resolve 解析 BGM、音效、語音合成 (TTS)、品牌標誌與圖像，並提供色彩風格校正。
>
> **English Summary**: Agent Media OS: resolve BGM, SFX, image, icon, brand logo, voice, and color grade into frozen assets with one verb.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/media-use
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/media-use/* ~/.gemini/config/skills/media-use/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/media-use
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/media-use/* ~/.claude/skills/media-use/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/media-use
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/media-use/* ~/.agents/skills/media-use/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info 包含的檔案 (115 個檔案)
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

## 繁體中文完整說明檔 (SKILL.md)


# media-use：多媒體資產作業系統

HyperFrames 的多媒體引擎：解析（Resolve）· 生成（Generate）· 操作（Operate）· 記憶（Remember）— 一個技能處理所有多媒體類型，徹底消除雜訊。

---

## 單一動詞指令：Resolve

```bash
npx hyperframes media-use resolve --type <type> --intent "<描述需求>" --project <專案目錄>
```

執行後返回簡潔的一行結果：`resolved &lt;id&gt; → &lt;path&gt; (&lt;type&gt;, &lt;metadata&gt;)`，所有搜尋與下載細節均持久化於本地磁碟。

| 類型 (Type) | 意圖與來源 |
|---|---|
| `bgm` | 背景音樂（HeyGen 音樂庫 10,000+ 首曲目） |
| `sfx` | 音效（Openverse CC0/CC BY 免費音效，離線自帶 21 款精選音效包） |
| `image` | 高清照片、背景圖（HeyGen 資產庫 75,000+ 向量與圖片） |
| `icon` | 透明背景圖示、UI 符號 |
| `logo` | 官方品牌標誌（搜尋向量 SVG → GitHub Avatar → Favicon，絕不隨意重繪） |
| `voice` | TTS 語音旁白（HeyGen 語音或本機離線 Kokoro / edge-tts） |
| `grade` | 畫面色彩校正與調色方案 |
| `lut` | `.cube` 3D LUT 調色濾鏡檔 |

---

## 視覺反饋與色彩風格處理 (Media Treatments)

當使用者反饋實拍素材看起來「太暗、平淡、無聊、需要復古感、需要遮蔽隱私或特殊亮相效果」時：
- 執行 `references/media-treatments.md` 規範。
- 套用色彩校正、復古底片預設、著色器特效或 Registry 疊加層。
- 透過 contact sheet 比較調整前後效果，確保視覺風格統一。

