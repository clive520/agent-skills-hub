---
title: "純文字轉無人解說動畫影片 (faceless-explainer)"
description: "將任意文章、筆記或文字提綱轉化為無人解說動畫影片：圖表、數據視覺化、動態文字與分鏡自動編排，無需真實實拍畫面。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/faceless-explainer" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# faceless-explainer · 純文字轉無人解說動畫影片

<div class="skill-subtitle-bar">Text-to-Faceless Explainer Video</div>

<div class="skill-meta-bar">
  <span class="badge category">解說動畫</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#無人解說</span> <span class="badge tag">#文字轉影片</span> <span class="badge tag">#知識科普</span> <span class="badge tag">#分鏡腳本</span>
</div>

> **簡介**：將任意文章、筆記或文字提綱轉化為無人解說動畫影片：圖表、數據視覺化、動態文字與分鏡自動編排，無需真實實拍畫面。
>
> **English Summary**: Turn arbitrary text into a faceless explainer video: typography, abstract graphics, diagrams, and data-viz invented per scene without live footage.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/faceless-explainer
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/faceless-explainer/* ~/.gemini/config/skills/faceless-explainer/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/faceless-explainer
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/faceless-explainer/* ~/.claude/skills/faceless-explainer/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/faceless-explainer
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/faceless-explainer/* ~/.agents/skills/faceless-explainer/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::

::: tip 相依技能提示
此技能依賴以下上游技能，建議一同安裝：
- [hyperframes](./hyperframes.md)
- [hyperframes-creative](./hyperframes-creative.md)
- [media-use](./media-use.md)
:::

::: info 包含的檔案 (31 個檔案)
- `references/cut-catalog.md`
- `references/motion-language.md`
- `references/story-design.md`
- `references/visual-design.md`
- `scripts/assemble-index.mjs`
- `scripts/assemble-index.test.mjs`
- `scripts/audio.mjs`
- `scripts/audio.test.mjs`
- `scripts/build-frame.mjs`
- `scripts/captions.mjs`
- `scripts/captions.test.mjs`
- `scripts/frame-packets.mjs`
- `scripts/frame-packets.test.mjs`
- `scripts/lib/assets.mjs`
- `scripts/lib/bgm-volume.mjs`
- `scripts/lib/captured-fonts.mjs`
- `scripts/lib/dimensions.mjs`
- `scripts/lib/frame-packets-core.mjs`
- `scripts/lib/host-audio.mjs`
- `scripts/lib/main-module.mjs`
- `scripts/lib/pad-frame-duration.mjs`
- `scripts/lib/storyboard.mjs`
- `scripts/lib/tokens.mjs`
- `scripts/lib/transition-registry.mjs`
- `scripts/lib/transitions.json`
- `scripts/transitions.mjs`
- `scripts/transitions.test.mjs`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
- `sub-agents/frame-worker.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# Faceless Explainer 轉 HyperFrames 無人解說動畫

本技能用於將任何文字內容轉化為高質感的解說動畫影片：選定設計規範、規劃教學分鏡故事，並在 HyperFrames 中逐格建構。**無人解說（Faceless）** 意味著所有視覺元素皆由程式在下游自動生成 — 無需網頁截圖或真實素材庫。

> **總入口為 `/hyperframes`。** 你是整體流程的調度協調者（Orchestrator）。按順序執行每個步驟，驗證檢查點（Gate），通過後再繼續推進。

## 工作流概覽

- **Step 0 專案初始化** → `hyperframes.json` 與持久化簡報合約 `BRIEF.md`
- **Step 1 提綱導入（無需截圖）** → `capture/extracted/visible-text.txt` 與 `tokens.json`
- **Step 2 設計系統配置** → 產生 `frame.md` 設計規範
- **Step 3 分鏡與腳本編排** → `STORYBOARD.md` 與 `SCRIPT.md`
- **Step 3.1 語音與音訊對齊** → 生成配音檔與 `audio_meta.json`
- **Step 4 視覺設計與鏡頭規劃** → 豐富化 `STORYBOARD.md`
- **Step 5 平行影格製作** → 生成 `compositions/frames/NN-*.html` 與 `index.html`
- **Step 6 最終渲染輸出** → 輸出高品質 `renders/video.mp4`

---

## Step 0: 專案初始化 (Setup)

**目標：** 進入確認好的簡報合約，建立 HyperFrames 專案並保持耐久性。
- 初始化專案：`npx hyperframes init "videos/<project>" --non-interactive --example=blank --skill=faceless-explainer`
- 專案名稱採 kebab-case（例如 `compound-interest-explained`），避免使用時間戳記。
- 檢查登入與引擎狀態：`npx hyperframes auth status`，確認語音與渲染引擎設定。

**檢查點 (Gate)：** `hyperframes.json` 與 `BRIEF.md` 存在；完成偏好設定記錄；確認登入或離線運作狀態。

---

## Step 1: 提綱導入 (Brief - 無需截圖)

**目標：** 將使用者的原始文本作為專案的信息源。無網頁截圖，亦無真實資產庫。
- 將文字原樣存入 `capture/extracted/visible-text.txt`。
- 建立 `capture/extracted/tokens.json`，提取標題與描述。若使用者指定了品牌顏色或字體則記錄之。

---

## Step 2: 設計系統 (Design System)

**目標：** 為影片建立視覺外觀規格。
- 執行 `node <fe>/scripts/build-frame.mjs`，自預設主題複製並混合設計權杖至 `frame.md`。
- 複製字幕樣式外觀至 `.hyperframes/caption-skin.html`。

---

## Step 3: 分鏡故事與腳本 (Storyboard & Script)

**目標：** 將文字資訊轉化為富有吸引力、節奏緊湊的分鏡與旁白腳本。
- 撰寫 `STORYBOARD.md` 與 `SCRIPT.md`。
- 故事遵循標準結構：鉤子 (Hook) → 核心問題 → 機制展開 → 結論/行動呼籲 (CTA)。
- 旁白按語意子句切分，每個子句對應畫面上的一個視覺揭示節點。

---

## Step 3.1: 語音生成與時間軸對齊 (Audio)

**目標：** 生成旁白音訊，並將分鏡的真實秒數精確對齊。
- 呼叫語音引擎產生各句音訊。
- 執行 `node <fe>/scripts/audio.mjs sync-durations` 將音訊秒數同步回寫至 `STORYBOARD.md`。

---

## Step 4: 視覺設計與鏡頭藍圖 (Visual Design)

**目標：** 確定每一格畫面的視覺佈局、所採用的動畫藍圖 (Blueprints) 與圖形元件。
- 為每一格指定合適的動作藍圖（如文字打拍、數據計數、分割對比等）。
- 確保文字排版符合規範，多格共用的主角物件使用統一座標。

---

## Step 5: 影格生成 (Frames)

**目標：** 實作每一格獨立的 HTML 合成組件。
- 產生 frame packets：`node <fe>/scripts/frame-packets.mjs`。
- 平行派遣 sub-agent（或循序執行）製作每格 `compositions/frames/NN-*.html`。
- 組合並建構 `index.html`：`node <fe>/scripts/assemble-index.mjs`。

---

## Step 6: 最終渲染與審查 (Final Render)

**目標：** 渲染完整影片並進行品質驗收。
- 產生字幕群組：`node <fe>/scripts/captions.mjs build`。
- 注入轉場效果並驗證：`node <fe>/scripts/transitions.mjs inject`。
- 執行靜態診斷：`hyperframes check`。
- 輸出最終影片：`npx hyperframes render --quality high --output renders/video.mp4`。
- 透過 `review-loop` 產生 contact sheet 進行逐格視覺品質審查。

