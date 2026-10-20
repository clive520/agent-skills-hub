---
title: "Gemini Notebook (NotebookLM) CLI 與 MCP 專家 (nlm-skill)"
description: "Gemini Notebook（原 Google NotebookLM）CLI 工具 (nlm) 與 MCP 伺服器專家指南：筆記本管理、Podcast 語音對談、深入報告、心智圖與研究工作流。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/nlm-skill" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# nlm-skill · Gemini Notebook (NotebookLM) CLI 與 MCP 專家

<div class="skill-subtitle-bar">Gemini Notebook (NotebookLM) CLI & MCP Expert</div>

<div class="skill-meta-bar">
  <span class="badge category">AI 知識庫與筆記</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#NotebookLM</span> <span class="badge tag">#Gemini</span> <span class="badge tag">#nlm-cli</span> <span class="badge tag">#MCP</span> <span class="badge tag">#AI播客</span> <span class="badge tag">#知識庫</span>
</div>

> **簡介**：Gemini Notebook（原 Google NotebookLM）CLI 工具 (nlm) 與 MCP 伺服器專家指南：筆記本管理、Podcast 語音對談、深入報告、心智圖與研究工作流。
>
> **English Summary**: Expert guide for Gemini Notebook (NotebookLM) CLI (nlm) and MCP server: notebook management, Audio Overviews (Podcasts), reports, mind maps, quizzes, and research pipelines.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/nlm-skill
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/nlm-skill/* ~/.gemini/config/skills/nlm-skill/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/nlm-skill
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/nlm-skill/* ~/.claude/skills/nlm-skill/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/nlm-skill
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/nlm-skill/* ~/.agents/skills/nlm-skill/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info 包含的檔案 (9 個檔案)
- `references/command_reference.md`
- `references/remote-mcp.md`
- `references/studio-prompt-examples.md`
- `references/studio-prompting-guide.md`
- `references/troubleshooting.md`
- `references/workflows.md`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# Gemini Notebook CLI 與 MCP 伺服器專家技能

本技能提供透過 `nlm` CLI 命令列工具與 NotebookLM MCP 伺服器操作 Gemini Notebook 的全面指導。

## 工具偵測原則（重要・必讀！）

**在執行任何操作前，請務必先檢查當前環境可用的工具：**

1. **檢查 MCP 工具**：名稱可能因平台而異，常見如 `mcp__gemini-notebook-mcp__*`、`mcp__notebooklm_mcp__*` 或 `mcp_gemini_notebook_mcp_*`。
2. **尊重顯式指令**：若使用者明確指定使用 MCP 或 CLI，依指令執行。
3. **兩者皆具備時的選擇策略**：
   - 筆記本管理、資料源新增、預設目錄下的下載，優先採用 MCP。
   - 需要切換 `--profile` 或指定自訂下載目錄時，採用 CLI。
4. **單一可用時**：若僅有一種介面可用，直接使用該介面。

---

## 核心功能與指令分類

### 1. 身分驗證 (Authentication)
- CLI 登入：`nlm login`（自動啟動本機授權流程）。
- 檢視配額與用量：`nlm plan info` 或調用 MCP 的 `get_plan_info`。

### 2. 筆記本管理 (Notebook Management)
- 列出筆記本：`nlm notebook list` 或 `list_notebooks`。
- 建立筆記本：`nlm notebook create --title "專案主題"` 或 `create_notebook`。
- 重新命名與刪除：`nlm notebook rename`、`nlm notebook delete`。

### 3. 資料來源管理 (Source Management)
- 新增網址：`nlm source add-url &lt;NOTEBOOK_ID&gt; "https://..."`。
- 新增 YouTube 影片：`nlm source add-youtube &lt;NOTEBOOK_ID&gt; "https://youtube.com/..."`。
- 新增文字/Markdown：`nlm source add-text &lt;NOTEBOOK_ID&gt; --title "標題" --content "內容..."`。
- Google Drive 同步：`nlm source sync-drive &lt;NOTEBOOK_ID&gt; &lt;SOURCE_ID&gt;`。

### 4. 智慧研究與搜尋 (Research & Discovery)
- 探索主題並匯入新資料源：`nlm research start &lt;NOTEBOOK_ID&gt; "研究主題"`。
- 檢查進度並批次匯入：`nlm research import-sources &lt;NOTEBOOK_ID&gt;`。

### 5. 內容生成 (Studio / Audio Overviews)
- **音訊對談播客 (Podcast)**：
  - 深度對談：`nlm studio generate audio &lt;NOTEBOOK_ID&gt; --format deep_dive --length default`
  - 快速摘要：`nlm studio generate audio &lt;NOTEBOOK_ID&gt; --format brief --length short`
  - 批判與辯論：`nlm studio generate audio &lt;NOTEBOOK_ID&gt; --format critique` 或 `--format debate`
- **專業報告 (Reports)**：
  - `nlm studio generate report &lt;NOTEBOOK_ID&gt; --format "Briefing Doc"`
  - `nlm studio generate report &lt;NOTEBOOK_ID&gt; --format "Study Guide"`
- **測驗與記憶卡片 (Quiz & Flashcards)**：
  - 產生題目：`nlm studio generate quiz &lt;NOTEBOOK_ID&gt; --count 5 --difficulty 3`
  - 產生記憶卡：`nlm studio generate flashcards &lt;NOTEBOOK_ID&gt; --difficulty medium`
- **心智圖與投影片 (Mind Map & Slides)**：
  - `nlm studio generate mind-map &lt;NOTEBOOK_ID&gt;`
  - `nlm studio generate slides &lt;NOTEBOOK_ID&gt; --format detailed_deck`
- **資訊圖表 (Infographics)**：
  - `nlm studio generate infographic &lt;NOTEBOOK_ID&gt; --style professional --orientation landscape`

### 6. 工件管理與下載 (Artifact Management)
- 檢查生成狀態：`nlm studio status &lt;NOTEBOOK_ID&gt;`。
- 下載產出物：`nlm studio download &lt;NOTEBOOK_ID&gt; &lt;ARTIFACT_ID&gt; --output ./output.mp3`。
- 匯出至 Google 文件或試算表：`nlm studio export &lt;NOTEBOOK_ID&gt; &lt;ARTIFACT_ID&gt;`。

---

## 常用工作流組合

### 工作流一：研究主題 -> 生成音訊對談播客
1. 建立筆記本：`nlm notebook create --title "AI趨勢研究"`
2. 匯入 YouTube 與網頁資料源。
3. 發起音訊生成：`nlm studio generate audio &lt;ID&gt; --format deep_dive`
4. 輪詢完成狀態並下載音訊檔案。

### 工作流二：教學教材包生成
1. 匯入課程綱要與教案文字。
2. 產生測驗卡片與心智圖：`nlm studio generate quiz` 與 `nlm studio generate mind-map`。
3. 產生簡報大綱並匯出。

---

## 詳細參考文件

本技能包含完整的參考檔案目錄：
- `references/command_reference.md`：完整 CLI 指令集與參數對照表。
- `references/remote-mcp.md`：遠端 MCP 伺服器配置與安全性指南。
- `references/studio-prompting-guide.md`：Studio 提示詞編寫範例與最佳實踐。
- `references/workflows.md`：進階多步自動化管線配置。

