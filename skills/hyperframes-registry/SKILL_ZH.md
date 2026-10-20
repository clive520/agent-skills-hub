---
name: hyperframes-registry
description: >
  搜尋、安裝並串接 HyperFrames Registry 預置模組（Blocks）與特效組件（Components）。在手動自建任何具名視覺動效前使用 — 每當分鏡需要 CRT 掃描線、故障毛刺（Glitch）、色差（Chromatic Aberration）、底片顆粒、光澤掃掠（Shimmer）、圖表、終端機代碼視窗、地圖或彩帶特效時，模組庫中已有數百款現成模組隨取即用。
---

# HyperFrames 模組庫 (Registry) 檢索與安裝

HyperFrames Registry 提供了可透過 `hyperframes add <name>` 一鍵安裝的複用模組：

- **Blocks（獨立區塊模組）**：具備自身尺寸、時長與時間軸的獨立子合成，透過 `data-composition-src` 引入。
- **Components（特效組件）**：輕量代碼片段（無自身獨立尺寸），直接嵌入合成的 HTML 結構中。

---

## 常用指令速查

```bash
# 安裝數據圖表 Block
hyperframes add data-chart

# 安裝底片顆粒遮罩 Component
hyperframes add grain-overlay

# 一次安裝所有標記為 captions 的模組
hyperframes add captions

# 檢索模組庫中的現成元件
npx hyperframes catalog --query "terminal code window"
```

---

## 模組引入與串接 (Wiring Blocks)

安裝完成後，在頂層 `index.html` 中透過 `data-composition-src` 串接：

```html
<div
  data-composition-id="data-chart"
  data-composition-src="compositions/data-chart.html"
  data-start="2"
  data-duration="10"
  data-track-index="1"
  data-width="1920"
  data-height="1080">
</div>
```

---

## 目錄結構配置

預設安裝路徑可於 `hyperframes.json` 中配置：
- Blocks 預設存放於 `compositions/<name>.html`
- Components 預設存放於 `compositions/components/<name>.html`
- 靜態資產存放於 `assets/`
