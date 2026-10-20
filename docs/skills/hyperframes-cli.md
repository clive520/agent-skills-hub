---
title: "HyperFrames CLI 命令列開發循環 (hyperframes-cli)"
description: "HyperFrames CLI 開發循環命令列：init、add、catalog、preview、lint、check、snapshot、render 與雲端發佈。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/hyperframes-cli" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# hyperframes-cli · HyperFrames CLI 命令列開發循環

<div class="skill-subtitle-bar">HyperFrames CLI Development & Render Loop</div>

<div class="skill-meta-bar">
  <span class="badge category">開發工具</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#CLI工具</span> <span class="badge tag">#開發循環</span> <span class="badge tag">#渲染發佈</span> <span class="badge tag">#代碼除錯</span>
</div>

> **簡介**：HyperFrames CLI 開發循環命令列：init、add、catalog、preview、lint、check、snapshot、render 與雲端發佈。
>
> **English Summary**: HyperFrames CLI development loop: init, add, catalog, preview, lint, check, single/batch render, and cloud publishing.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/hyperframes-cli
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-cli/* ~/.gemini/config/skills/hyperframes-cli/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/hyperframes-cli
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-cli/* ~/.claude/skills/hyperframes-cli/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/hyperframes-cli
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-cli/* ~/.agents/skills/hyperframes-cli/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info 包含的檔案 (13 個檔案)
- `references/beats.md`
- `references/cloud.md`
- `references/cloudrun.md`
- `references/compare-and-batch.md`
- `references/doctor-browser.md`
- `references/init-and-scaffold.md`
- `references/lambda.md`
- `references/lint-validate-inspect.md`
- `references/preview-render.md`
- `references/upgrade-info-misc.md`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# HyperFrames CLI 命令列開發循環

除專案另有封裝外，一律使用 `npx hyperframes ...` 執行指令。環境需具備 Node.js 22+ 與 FFmpeg。

---

## 典型開發循環 (Development Loop)

1. **專案鷹架 (Scaffold)**：`npx hyperframes init &lt;project&gt;` 初始化空白專案（或加 `--example=&lt;name&gt;` 從範例啟動）。
2. **尋找現成模組**：手動編寫動畫前，先檢索模組庫：
   `npx hyperframes catalog --query "reveal a headline one line at a time"`
   安裝模組：`npx hyperframes add &lt;name&gt;`（詳見 `/hyperframes-registry`）。
3. **合成編寫與時間軸檢視**：使用 `/hyperframes-core` 編寫 HTML。執行 `npx hyperframes timeline --json` 檢視軌道與片段時間軸。
4. **即時語法與靜態檢查**：編輯時執行 `npx hyperframes lint` 快速獲得反饋。
5. **最終品質閥門 (Gate)**：執行 `npx hyperframes check`。它會在開啟無頭瀏覽器驗證前自動重新執行 lint。加上 `--snapshots` 可產出總覽快照。
6. **即時 Studio 預覽**：執行 `npx hyperframes preview --background` 啟動背景預覽伺服器，將 URL 提供給使用者即時檢視時間軸。
7. **渲染輸出**：
   - 迭代測試：`--quality draft`
   - 初次編碼：`--quality looks`（CLI 預設值）
   - 交付成品：`--quality delivery`
8. **驗收輸出結果**：確認檔案存在且非空，利用 `ffprobe` 比對影片時長與根節點的 `data-duration`。

---

## 常用指令速查

```bash
# 靜態代碼檢查（快速反饋）
npx hyperframes lint

# 全面性檢查（包含執行期、佈局溢出與色彩對比）
npx hyperframes check

# 在指定時間點擷取畫面快照
npx hyperframes snapshot --at 3.5,6.0 -o ./review-snaps

# 輸出草稿影片
npx hyperframes render --quality draft --output renders/draft.mp4

# 輸出最終高清影片
npx hyperframes render --quality delivery --output renders/final.mp4

# 啟動 Studio 互動預覽伺服器
npx hyperframes preview

# 升級專案 CLI 並檢查相容性
npx hyperframes@latest upgrade --project . --check
```

