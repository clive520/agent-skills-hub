---
title: "Google Antigravity 2.0 完整開發指南 (antigravity-guide)"
description: "Google Antigravity (AGY) 綜合指南與功能地圖：Antigravity CLI (agy)、IDE 介面、斜線指令、快捷鍵、Skills 與 MCP 客製化系統。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/antigravity-guide" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# antigravity-guide · Google Antigravity 2.0 完整開發指南

<div class="skill-subtitle-bar">Google Antigravity 2.0 Comprehensive Guide</div>

<div class="skill-meta-bar">
  <span class="badge category">平台指南</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#Antigravity</span> <span class="badge tag">#AGY指南</span> <span class="badge tag">#CLI工具</span> <span class="badge tag">#快捷鍵</span> <span class="badge tag">#客製化</span> <span class="badge tag">#技能生態</span>
</div>

> **簡介**：Google Antigravity (AGY) 綜合指南與功能地圖：Antigravity CLI (agy)、IDE 介面、斜線指令、快捷鍵、Skills 與 MCP 客製化系統。
>
> **English Summary**: Comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), CLI (agy), 2.0 architecture, IDE, slash commands, and customizations.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/antigravity-guide
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/antigravity-guide/* ~/.gemini/config/skills/antigravity-guide/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/antigravity-guide
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/antigravity-guide/* ~/.claude/skills/antigravity-guide/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/antigravity-guide
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/antigravity-guide/* ~/.agents/skills/antigravity-guide/
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


# Google Antigravity (AGY) 完整開發指南與功能地圖

Google Antigravity 是一個 AI 優先的次世代智慧開發平台。本手冊匯整了不同使用介面下的關鍵概念與快速指引。

---

## 核心介面維度

1. **Antigravity IDE**：
   - 整合對話、代碼編輯、終端機與 Sidecar 的現代化 IDE 環境。
   - 斜線指令快捷入口（如 `/plan`、`/goal`、`/schedule`、`/browser`）。
2. **Antigravity CLI (`agy`)**：
   - 命令列交互工具，支援無頭執行、代碼庫快速檢索與指令批次排程。
3. **Antigravity 2.0 架構**：
   - 多 Agent 協作體系、反應式喚醒（Reactive Wakeup）、動態工具加載與智慧記憶體整合。

---

## 客製化體系 (Customizations)

- **Skills (技能)**：可重用的知識與 SOP 套件，包含 `SKILL.md`、指令腳本與支援文件。
- **Rules (規則)**：約束 Agent 行為的永恆法則（如語言規範、安全界限、代碼風格）。
- **MCP 伺服器**：擴展外部系統工具調用能力（如 GitHub、資料庫、專屬服務）。
- **Sidecars**：背景常駐助理（排程自動化、檔案監聽器）。
- **Hooks**：在特定生命週期節點觸發的自動化鉤子。

