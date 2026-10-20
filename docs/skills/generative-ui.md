---
title: "生成式互動介面與 HTML 小部件 (generative-ui)"
description: "在 Agent 對話中或作為獨立 Artifact 渲染豐富且具互動性的 HTML 介面、動態圖表、數據視覺化小部件與控制面板。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/generative-ui" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# generative-ui · 生成式互動介面與 HTML 小部件

<div class="skill-subtitle-bar">Generative UI & Interactive HTML Widgets</div>

<div class="skill-meta-bar">
  <span class="badge category">生成式 UI</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#生成式UI</span> <span class="badge tag">#HTML部件</span> <span class="badge tag">#數據視覺化</span> <span class="badge tag">#互動式介面</span> <span class="badge tag">#Artifacts</span>
</div>

> **簡介**：在 Agent 對話中或作為獨立 Artifact 渲染豐富且具互動性的 HTML 介面、動態圖表、數據視覺化小部件與控制面板。
>
> **English Summary**: Render custom, rich, interactive HTML widgets and visual controls inline in chat or as standalone artifacts for diagrams, charts, and interactive walkthroughs.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/generative-ui
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/generative-ui/* ~/.gemini/config/skills/generative-ui/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/generative-ui
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/generative-ui/* ~/.claude/skills/generative-ui/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/generative-ui
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/generative-ui/* ~/.agents/skills/generative-ui/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info 包含的檔案 (3 個檔案)
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# 生成式互動介面 (Generative UI)

本技能指導如何在 Agent 對話中或獨立 Artifact 中渲染自訂、豐富且具互動性的 HTML 使用者介面。這是在對話中傳達複雜結構、展示動態資料與提供即時微互動體驗的最佳方式。

---

## 適用情境

- **複雜數據與報表**：以 Chart.js、ECharts 等視覺化圖表呈現趨勢，而非冗長文字表格。
- **互動控制面板**：提供滑桿、按鈕、下拉選單與即時試算小工具。
- **教學與步驟引導**：提供可逐步點擊探索的卡片式演繹流程。
- **架構與關聯拓撲**：直觀展示系統架構與狀態轉移。

---

## 輸出模式

1. **行內小部件 (Inline Widget)**：
   - 適合小巧、自給自足的輕量視覺元件（如簡易儀表板、評估滑桿）。
   - 直接輸出包含 `&lt;style&gt;` 與 `&lt;script&gt;` 的自包含 HTML 區塊。
2. **獨立工件 (Artifact)**：
   - 適合大型全頁式儀表板、完整遊戲原型或複雜多功能面板。
   - 寫入獨立 HTML 檔案供使用者單獨預覽與全螢幕操作。

---

## 核心設計原則

1. **自包含無外部伺服器依賴**：樣式與邏輯內嵌，使用原生 JavaScript 或穩定 CDN（如 Tailwind Play CDN、Chart.js）。
2. **響應式佈局**：支援移動端窄螢幕與桌面寬螢幕，自動調適尺寸。
3. **安全與隔離**：不使用不安全的反序列化，事件監聽器使用標準 DOM API。
4. **設計美感**：適當留白、現代化配色、圓角卡片與流暢轉場動效。

