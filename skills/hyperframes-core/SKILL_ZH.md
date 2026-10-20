---
name: hyperframes-core
description: "HyperFrames 合成合約規範 — 用於建構可渲染的專案。涵蓋合成 DOM 結構、data-* 時間軸屬性、class=\"clip\"、軌道階層、子合成（Sub-compositions）、變數注入、框架託管媒體播放、確定性渲染規則與代碼驗證。"
---

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
| `references/sub-compositions.md` | 子合成串接（宿主屬性、`<template>`、實例變數） |
| `references/variables-and-media.md` | 變數宣告、`<video>`/`<audio>` 媒體嵌入與音量控制 |
| `references/determinism-rules.md` | 確定性渲染禁令（禁止計時器、非種子隨機、動態遠端請求） |
| `references/full-screen-motion.md` | 全螢幕動態與共用背景編排 |
| `references/tailwind.md` | Tailwind CSS v4 整合模式 |

---

## 建構合成的關鍵法則

### 1. 兩種根節點形態（不可混用）
- **獨立頂層合成 (Standalone `index.html`)**：根節點 `<div data-composition-id="...">` 直接放置於 `<body>` 內，**嚴禁包覆 `<template>`**。
- **子合成 (Sub-composition)**：根節點必須包覆在 `<template>` 標籤內，供外部透過 `data-composition-src` 載入。

### 2. 根節點尺寸規格
獨立根節點樣式應設為 `width: 100%; height: 100%`，畫布實體尺寸透過 `data-width` 與 `data-height` 指定，由執行期引擎自動映射，不要在 CSS 寫死固定像素。

### 3. 單一暫停時間軸 (One Paused Timeline)
每個合成註冊**恰好一條** `gsap.timeline({ paused: true })` 到 `window.__timelines["<id>"]`。
渲染總長度以根節點的 `data-duration` 屬性為準。

### 4. 確定性渲染規範 (Determinism)
- 嚴禁使用：`setTimeout`、`setInterval`、`requestAnimationFrame`、`Date.now()`、原生 CSS `@keyframes` 動畫。
- 隨機數一律使用有固定種子的偽隨機函式。
