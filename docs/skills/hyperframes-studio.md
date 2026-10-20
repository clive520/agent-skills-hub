---
title: "Studio 介面協同與時間軸排版規範 (hyperframes-studio)"
description: "Studio 介面協同規範：影片規劃階段、意圖溝通原則、時間軸軌道階層與內容安全框規範。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/hyperframes-studio" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# hyperframes-studio · Studio 介面協同與時間軸排版規範

<div class="skill-subtitle-bar">Studio Collaboration & Timeline Specs</div>

<div class="skill-meta-bar">
  <span class="badge category">工作流調度</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#Studio</span> <span class="badge tag">#時間軸規範</span> <span class="badge tag">#安全區域</span> <span class="badge tag">#協同製作</span>
</div>

> **簡介**：Studio 介面協同規範：影片規劃階段、意圖溝通原則、時間軸軌道階層與內容安全框規範。
>
> **English Summary**: HyperFrames Studio collaboration guidelines, communication principles, timeline track hierarchy, and safe zones.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/hyperframes-studio
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-studio/* ~/.gemini/config/skills/hyperframes-studio/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/hyperframes-studio
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-studio/* ~/.claude/skills/hyperframes-studio/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/hyperframes-studio
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-studio/* ~/.agents/skills/hyperframes-studio/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::

::: tip 相依技能提示
此技能依賴以下上游技能，建議一同安裝：
- [hyperframes-core](./hyperframes-core.md)
:::

::: info 包含的檔案 (3 個檔案)
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# HyperFrames Studio 協同規範與時間軸排版

Studio 會為每個頂層 DOM 元素繪製一條時間軸軌道。遵循本規範的專案在 Studio 中開啟時將展現出整齊、清爽、易於拖曳調整的時間軸結構。

---

## 0. 先溝通再動手 (Talk Before You Build)

閱讀使用者的訊息，判斷其真實意圖：

| 使用者訊息特徵 | Agent 的標準反應 |
|---|---|
| 明確要求具體修改（例如「把標題放大」、「刪除第三幕」） | 直接修改檔案並回報結果。 |
| 提出主觀感受（例如「片頭感覺太急促」、「留白不夠」） | 找出可量化參數（如時長、緩動曲線），說明修改原因並記錄於 `STORYBOARD.md`。 |
| 僅提問，未要求修改（例如「為什麼標題會跳動？」） | 清楚解答原理，切勿擅自修改檔案。 |
| 表明「先別改」、「我想想」、「討論一下」 | 不要修改任何檔案，僅以文字提供建議。 |
| 提出發散想法但未定案（例如「想讓結局震撼一點」） | 提出 2–3 個具體方案供挑選，切勿直接寫入代碼。 |
| 確認批准計畫（「開始做吧」、「Go」） | 立即按照核准計畫建構。 |

---

## 1. 核心時間軸軌道規範

1. **每個場景皆為子合成 (Sub-composition)**：頂層 `index.html` 僅存放時間宿主節點與音軌。場景細節全部封裝至 `compositions/frames/` 內。
2. **每條軌道放置單一類別的元素**：例如 Track 0 為背景層、Track 1 為主場景內容、Track 2 為字幕層、Track 3 為全域疊加層。
3. **保持單一專用字幕軌**：全片字幕放在統一的時間軸軌道上，避免字幕分散在各場景中造成排版混亂。
4. **恪守內容安全區域 (Safe Zones)**：確保字幕與關鍵數據距離邊界至少 60–80 px，避免在手機或社群平台介面裁切時被遮擋。

