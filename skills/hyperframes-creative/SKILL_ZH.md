---
name: hyperframes-creative
description: "HyperFrames 視覺創意與風格方向指南（非動畫類別）。用於設計規範（frame.md / design.md）、色彩調色盤、字型排版階層、旁白風格、節拍規劃、音訊響應視覺、版面合成模式及品牌調性決策。如需原子運動規則與場景藍圖，請使用 hyperframes-animation。"
---

# HyperFrames 視覺創意與風格指南

專注於品牌調性、視覺節奏、藝術風格、旁白語調與版面構圖方向。在完成 `hyperframes-core` 的技術合約後使用本技能。

> **必讀篇章（超越一般網頁設計思維）：**
> - `references/house-style.md` — 深入解讀需求，避免廉價平庸預設，背景與前景階層公式。將簡單的版面美化昇華為具備深度的「概念設計」。
> - `references/video-composition.md` — 影片媒介的比例感、景深與前景細節。避免影片看起來像空洞的死板網頁。

---

## 創意工作流 (Creative Workflow)

1. **優先讀取設計規範**：若專案已有 `frame.md`（或 `design.md`），將其 frontmatter 中的 tokens 視為品牌最高準則（顏色、字體、間距、語調）。
2. **視覺風格選型**：
   - 預設主題方案 → `frame-presets/`
   - 特定情緒或美學風格 → `references/visual-styles.md`
   - 快速高質感預設 → `references/house-style.md`
3. **節奏與節拍規劃 (Beats & Rhythm)**：在編寫 HTML 前，先依據 `references/beat-direction.md` 規劃每一拍的節奏與轉場時機。
4. **設計驗證**：產出後對照 `references/design-adherence.md` 檢查色票、字型、圓角、間距與景深。

---

## 創意主題速查表

| 主題 | 查閱指引 |
|---|---|
| 快速套用現成預設風格 | `frame-presets/` · `references/design-spec.md` |
| 預設高質感色板與避免平庸設計 | `references/house-style.md` |
| 情緒風格路由（科技感、溫暖手繪、簡約極致等） | `references/visual-styles.md` |
| 版面合成模式（畫中畫、文字襯底、大字卡、幻燈片） | `references/composition-patterns.md` |
| 統計數據與資訊圖表動態化 | `references/data-in-motion.md` |
| 影片排版、景深層次與視覺密度 | `references/video-composition.md` |
| 字體挑選、配對與影片文字大小底線 | `references/typography.md` |
| 故事結構法則（鉤子、價值先行、分鏡提案） | `references/story-spine.md` |
| 腳本語速、語調與數字唸法 | `references/narration.md` |
| 音訊波形與頻段響應視覺 | `references/audio-reactive.md` |
