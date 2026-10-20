---
title: "背景排程與自動化工作流 (automation)"
description: "設計與建立後台定時排程自動化任務（Scheduled Automations）：Cron 表達式、定時觸發全新 Agent 對話與常態性維護任務執行。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/automation" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# automation · 背景排程與自動化工作流

<div class="skill-subtitle-bar">Scheduled Background Automations</div>

<div class="skill-meta-bar">
  <span class="badge category">背景自動化</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#Cron排程</span> <span class="badge tag">#背景自動化</span> <span class="badge tag">#定時任務</span> <span class="badge tag">#Sidecar</span> <span class="badge tag">#Agent自動化</span>
</div>

> **簡介**：設計與建立後台定時排程自動化任務（Scheduled Automations）：Cron 表達式、定時觸發全新 Agent 對話與常態性維護任務執行。
>
> **English Summary**: Design and create scheduled background automations using cron expressions and sidecars to start fresh agent conversations for recurring tasks.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/automation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/automation/* ~/.gemini/config/skills/automation/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/automation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/automation/* ~/.claude/skills/automation/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/automation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/automation/* ~/.agents/skills/automation/
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


# 背景排程與自動化工作流 (Scheduled Automations)

**排程自動化** 是一種背景常駐 Sidecar 機制（`"builtin": "schedule"`），依照標準 Cron 表達式定時觸發，並在每次觸發時開啟全新的獨立 Agent 對話執行指定指令。

---

## 核心概念

1. **排程週期 (Cron Schedule)**：標準 5 欄位 Cron 表達式（分、時、日、月、星期）。
2. **自主對話啟動**：每次觸發時系統自動以配置的提示詞啟動對話，Agent 自主調用工具完成任務。
3. **無人值守原則**：任務提示詞必須包含清晰的執行目標、輸入來源、輸出檔案位置與通知策略，避免中途等待使用者輸入。

---

## 設計五步驟

1. **釐清目標**：確認自動化的核心目的（例：每天早上 8:30 擷取新聞頭條並寫入摘要檔案）。
2. **設計 Cron 表達式**：
   - 每天早上 8:30：`30 8 * * *`
   - 每週一上午 9:00：`0 9 * * 1`
   - 每小時整點：`0 * * * *`
3. **配置 Prompt 指令**：提供詳細步驟、預期產物路徑與邊界處理。
4. **驗證與單次測試**：在正式排程前先執行單次試跑，確認權限與工具調用無誤。
5. **部署至 Sidecar 配置**：將排程註冊至環境設定。

