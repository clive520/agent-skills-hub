---
title: "Google Antigravity SDK 自主代理開發 (google-antigravity-sdk)"
description: "使用 Google Antigravity (AGY) SDK 設計、實作與除錯自主 AI Agent 以及多 Agent 協同系統，涵蓋生命週期、工具掛載與跨代理編排。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/google-antigravity-sdk" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# google-antigravity-sdk · Google Antigravity SDK 自主代理開發

<div class="skill-subtitle-bar">Google Antigravity SDK Agent Architecture</div>

<div class="skill-meta-bar">
  <span class="badge category">Agent 開發框架</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#Antigravity</span> <span class="badge tag">#Python SDK</span> <span class="badge tag">#多代理系統</span> <span class="badge tag">#自主Agent</span> <span class="badge tag">#協同編排</span>
</div>

> **簡介**：使用 Google Antigravity (AGY) SDK 設計、實作與除錯自主 AI Agent 以及多 Agent 協同系統，涵蓋生命週期、工具掛載與跨代理編排。
>
> **English Summary**: Design, implement, and debug autonomous AI agents and multi-agent systems using the Google Antigravity (AGY) SDK with lifecycle and tool orchestration.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/google-antigravity-sdk
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/google-antigravity-sdk/* ~/.gemini/config/skills/google-antigravity-sdk/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/google-antigravity-sdk
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/google-antigravity-sdk/* ~/.claude/skills/google-antigravity-sdk/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/google-antigravity-sdk
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/google-antigravity-sdk/* ~/.agents/skills/google-antigravity-sdk/
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


# Google Antigravity SDK 自主代理開發指南

Google Antigravity SDK 是專為建構自主 Agent 與多 Agent 協作系統設計的官方開發套件。

---

## 安裝與環境準備

- 安裝核心套件：
  ```bash
  pip install google-antigravity
  ```
- 驗證金鑰與環境變數：確保 `GEMINI_API_KEY` 或相應憑證已正確設定。

---

## 核心設計模式

1. **單一自主 Agent**：
   - 定義 System Prompt、掛載本機與遠端工具。
   - 執行規劃、推理、工具調用與成果回傳循環。
2. **多 Agent 協同架構 (Multi-Agent Swarm / Hierarchical)**：
   - 主調度代理 (Orchestrator) 拆解子任務並分派給專業子代理。
   - 子代理獨立維護專屬對話記憶與工具集，完成後向上回報。
3. **反應式事件處理**：
   - 監聽外部訊號（Webhook、檔案變更、排程通知），自適應喚醒執行。

