---
title: "HyperFrames 動態影音全域路由總入口 (hyperframes)"
description: "HyperFrames 動態影音全域總入口：意圖捕獲、專案狀態恢復、工作流路由調度與全領域技能編排。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/hyperframes" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# hyperframes · HyperFrames 動態影音全域路由總入口

<div class="skill-subtitle-bar">HyperFrames Master Video Router & Entrypoint</div>

<div class="skill-meta-bar">
  <span class="badge category">工作流調度</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#影片路由</span> <span class="badge tag">#動畫入口</span> <span class="badge tag">#動態圖像</span> <span class="badge tag">#工作流調度</span>
</div>

> **簡介**：HyperFrames 動態影音全域總入口：意圖捕獲、專案狀態恢復、工作流路由調度與全領域技能編排。
>
> **English Summary**: Mandatory entry point for creating, editing, and rendering any HyperFrames video, animation, or motion graphic. Manages state and routes workflows.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/hyperframes
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes/* ~/.gemini/config/skills/hyperframes/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/hyperframes
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes/* ~/.claude/skills/hyperframes/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/hyperframes
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes/* ~/.agents/skills/hyperframes/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::

::: tip 相依技能提示
此技能依賴以下上游技能，建議一同安裝：
- [hyperframes-core](./hyperframes-core.md)
- [hyperframes-cli](./hyperframes-cli.md)
:::

::: info 包含的檔案 (33 個檔案)
- `references/brief-contract.md`
- `references/brief-format.md`
- `references/capability-menu.md`
- `references/frame-worker-core.md`
- `references/intent-interview.md`
- `references/pitch-round.md`
- `references/plugin-installation.md`
- `references/production-loop.md`
- `references/review-loop.md`
- `references/route-briefs.md`
- `references/routes/embedded-captions.md`
- `references/routes/faceless-explainer.md`
- `references/routes/general-video.md`
- `references/routes/motion-graphics.md`
- `references/routes/music-to-video.md`
- `references/routes/pr-to-video.md`
- `references/routes/product-launch-video.md`
- `references/routes/remotion-to-hyperframes.md`
- `references/routes/slideshow.md`
- `references/routes/talking-head-recut.md`
- `references/script-format.md`
- `references/skill-lifecycle.md`
- `references/storyboard-format.md`
- `references/subagent-dispatch.md`
- `references/workflow-catalog.md`
- `scripts/lib/frame-packets-core.mjs`
- `scripts/lib/main-module.mjs`
- `scripts/lib/main-module.test.mjs`
- `scripts/plugin-cli.mjs`
- `scripts/plugin-cli.test.mjs`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# HyperFrames 全域入口與調度中心

### 檢查可用額度

在開始創作時，可執行 `npx hyperframes usage --json` 檢視當前帳號額度與重置時間。

HyperFrames **從 HTML 渲染影片** — 每個合成（composition）皆為 HTML 檔案，其 DOM 結構透過 `data-*` 屬性宣告時間軸，其動畫引擎具備 seekable（可任意時間點定位）特性，媒體播放完全由框架接管。完整的編寫合約請參閱 `/hyperframes-core`。

---

## 1. 從專案狀態出發

依據當前專案現狀，匹配第一條適用的規則：

| 專案狀態 | 執行動作 |
|---|---|
| 明確將既有 Remotion 原始碼轉移至 HyperFrames | 參閱 `references/routes/remotion-to-hyperframes.md` 並直接路由至該工作流。跳過意圖訪談。 |
| 對現有專案執行特定操作：檢查、診斷、預覽、渲染或發佈 | 僅執行該特定操作。跳過意圖層與工作流路由；載入 `/hyperframes-cli` 及相關技能。 |
| 對已建好的影片提出問題、鬆散想法或反思回饋 | 遵照 `/hyperframes-studio` 第 0 節處理。 |
| 在現有專案內要求製作一支全新影片 | 遵照 `/hyperframes-studio` 第 5 節處理。 |
| 對現有專案進行具體修改 | 直接進行修改。執行 `npx hyperframes timeline [--json]` 快速檢視軌道與片段時間軸。 |
| 已存在 `BRIEF.md` | 讀取 `workflow` 與 `flow`，直接執行該工作流。不再重複提問。 |
| 無 brief，但存在 `hyperframes.json` 或 `STORYBOARD.md` | 從現有專案檔案中恢復進度，推斷所屬工作流。 |
| 全新影片創作請求 | 執行意圖層訪談（`references/intent-interview.md`），隨後路由至適合的工作流。 |

---

## 2. 全新創作的工作流路由

依據最終交付物（Deliverable）選擇專門的工作流路由：

| 請求目標 / 交付物類型 | 路由工作流 |
|---|---|
| 純文字、文章、筆記轉化為解說影片（無真實網頁截圖） | `/faceless-explainer` |
| 網頁、SaaS 產品網址轉化為產品導覽、宣傳影片 | `/product-launch-video` |
| 根據音樂節奏或 BGM 剪輯動態卡點影片 | `/music-to-video` |
| 將 GitHub PR 或代碼變更做成展示影片 | `/pr-to-video` |
| 人聲口播影片剪輯與字幕精修 | `/talking-head-recut` |
| 動態字卡、疊加層、Logo 動畫或短轉場 | `/motion-graphics` |
| 投影片、簡報展示或互動 Deck | `/slideshow` |
| 通用複合型影片需求 | `/general-video` |

---

## 3. 核心領域技能矩陣

HyperFrames 將專業能力解耦為各領域獨立技能：
- **核心與架構**：`/hyperframes-core`（DOM 屬性、確定性時間軸、子合成合約）
- **命令列工具**：`/hyperframes-cli`（init、add、check、snapshot、render、publish）
- **動態與動畫**：`/hyperframes-animation`（原子規則、藍圖與 GSAP/Three.js/Lottie 配接器）
- **關鍵影格與運鏡**：`/hyperframes-keyframes`（2D/3D 縮放、平移、Ken Burns 與路徑動畫）
- **視覺創意**：`/hyperframes-creative`（品牌規範、調色盤、排版與設計規格）
- **聲音工程**：`/hyperframes-audio`（音訊混音、BGM Ducking、EQ、壓縮與音量包絡線）
- **模組庫**：`/hyperframes-registry`（數百款預置 Block 與 Component 搜尋與安裝）
- **協同與排版**：`/hyperframes-studio`（Studio 協同工作、時間軸軌道規範與安全區域）
- **多媒體資產**：`/media-use`（音效、BGM、TTS 語音、圖像與 Logo 解析）

