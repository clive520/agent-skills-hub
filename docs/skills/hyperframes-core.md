---
title: "HyperFrames 核心架構與合約規範 (hyperframes-core)"
description: "HyperFrames 核心合約：確定性時間軸、DOM data-* 屬性、子合成架構、seek-safe 任意尋軌與媒體播放規範。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/hyperframes-core" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# hyperframes-core · HyperFrames 核心架構與合約規範

<div class="skill-subtitle-bar">HyperFrames Core Architecture & Contracts</div>

<div class="skill-meta-bar">
  <span class="badge category">核心架構</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#核心合約</span> <span class="badge tag">#確定性時間軸</span> <span class="badge tag">#子合成</span> <span class="badge tag">#DOM架構</span>
</div>

> **簡介**：HyperFrames 核心合約：確定性時間軸、DOM data-* 屬性、子合成架構、seek-safe 任意尋軌與媒體播放規範。
>
> **English Summary**: Core architecture: data attributes, sub-compositions, determinism, seek-safe paused timeline, and composition contracts.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/hyperframes-core
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-core/* ~/.gemini/config/skills/hyperframes-core/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/hyperframes-core
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-core/* ~/.claude/skills/hyperframes-core/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/hyperframes-core
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-core/* ~/.agents/skills/hyperframes-core/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info 包含的檔案 (13 個檔案)
- `references/composition-patterns.md`
- `references/creator-editing-recipes.md`
- `references/data-attributes.md`
- `references/determinism-rules.md`
- `references/full-screen-motion.md`
- `references/minimal-composition.md`
- `references/sub-compositions.md`
- `references/tailwind.md`
- `references/tracks-and-clips.md`
- `references/variables-and-media.md`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# HyperFrames 核心架構與合約規範

**常見陷阱（必讀）：**
- 置中請使用 Flexbox 或 CSS `inset`，切勿對後續要用 GSAP 驅動 `x`/`y` 的節點使用 `transform: translate(-50%, -50%)`（會觸發 `gsap_css_transform_conflict` 警告）。請改用 `fromTo` 或 `xPercent`/`yPercent`。
- 場景退場時，不要加上 `tl.set(..., {visibility:"hidden"})`，執行時期引擎已會自動依據時間軸隱藏過期 clip。
- `window.__timelines["id"]` 的鍵名必須嚴格等於根元素宣告的 `data-composition-id`。
- 渲染完成後注意摘要輸出：確認 GPU 模式與 stage timings。

HyperFrames 從 HTML 渲染影片。每個合成（composition）皆為 HTML 檔案，透過 DOM 的 `data-*` 屬性宣告時間軸，動畫引擎保證任意時間戳記可精確尋軌（seekable），媒體播放由框架全面接管。

---

## 核心參考手冊

| 手冊檔案 | 用途 |
|---|---|
| `references/minimal-composition.md` | 最小可行可渲染合成骨架 |
| `references/composition-patterns.md` | 單體式 vs 模組化架構選型、子合成原型 |
| `references/data-attributes.md` | 完整 `data-*` 屬性速查表與 `class="clip"` 規範 |
| `references/tracks-and-clips.md` | 軌道階層 `data-track-index`、z-index 與片段時間軸排版 |
| `references/creator-editing-recipes.md` | 剪切、修整、定格、相機運鏡、遮罩、交叉淡入淡出實戰代碼 |
| `references/sub-compositions.md` | 子合成串接（宿主屬性、`&lt;template&gt;`、實例變數） |
| `references/variables-and-media.md` | 變數宣告、`&lt;video&gt;`/`&lt;audio&gt;` 媒體嵌入與音量控制 |
| `references/determinism-rules.md` | 確定性渲染禁令（禁止計時器、非種子隨機、動態遠端請求） |
| `references/full-screen-motion.md` | 全螢幕動態與共用背景編排 |
| `references/tailwind.md` | Tailwind CSS v4 整合模式 |

---

## 建構合成的關鍵法則

### 1. 兩種根節點形態（不可混用）
- **獨立頂層合成 (Standalone `index.html`)**：根節點 `<div data-composition-id="...">` 直接放置於 `&lt;body&gt;` 內，**嚴禁包覆 `&lt;template&gt;`**。
- **子合成 (Sub-composition)**：根節點必須包覆在 `&lt;template&gt;` 標籤內，供外部透過 `data-composition-src` 載入。

### 2. 根節點尺寸規格
獨立根節點樣式應設為 `width: 100%; height: 100%`，畫布實體尺寸透過 `data-width` 與 `data-height` 指定，由執行期引擎自動映射，不要在 CSS 寫死固定像素。

### 3. 單一暫停時間軸 (One Paused Timeline)
每個合成註冊**恰好一條** `gsap.timeline({ paused: true })` 到 `window.__timelines["&lt;id&gt;"]`。
渲染總長度以根節點的 `data-duration` 屬性為準。

### 4. 確定性渲染規範 (Determinism)
- 嚴禁使用：`setTimeout`、`setInterval`、`requestAnimationFrame`、`Date.now()`、原生 CSS `@keyframes` 動畫。
- 隨機數一律使用有固定種子的偽隨機函式。

