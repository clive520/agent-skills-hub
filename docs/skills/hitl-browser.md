---
title: "人機協同瀏覽器操作流程 (HITL) (hitl-browser)"
description: "人機協同瀏覽器操作流程：有頭可視化、持久化 UserDataDir、人工登入/2FA/CAPTCHA 驗證暫停交接、接手後續自動化並保持瀏覽器視窗供審閱。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/hitl-browser" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# hitl-browser · 人機協同瀏覽器操作流程 (HITL)

<div class="skill-subtitle-bar">Human-in-the-Loop Browser Automation (HITL)</div>

<div class="skill-meta-bar">
  <span class="badge category">瀏覽器自動化</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#Playwright</span> <span class="badge tag">#瀏覽器自動化</span> <span class="badge tag">#人機協同</span> <span class="badge tag">#2FA驗證</span> <span class="badge tag">#CAPTCHA</span> <span class="badge tag">#持久化Cookie</span>
</div>

> **簡介**：人機協同瀏覽器操作流程：有頭可視化、持久化 UserDataDir、人工登入/2FA/CAPTCHA 驗證暫停交接、接手後續自動化並保持瀏覽器視窗供審閱。
>
> **English Summary**: Human-in-the-loop browser automation: visible browser, persistent UserDataDir, manual login/2FA/CAPTCHA handoff, seamless resumption, and window preservation for review.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/hitl-browser
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hitl-browser/* ~/.gemini/config/skills/hitl-browser/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/hitl-browser
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hitl-browser/* ~/.claude/skills/hitl-browser/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/hitl-browser
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hitl-browser/* ~/.agents/skills/hitl-browser/
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


# 人機協同瀏覽器操作流程 (Human-in-the-Loop Browser Automation)

本技能定義了「人機協同（HITL）」的瀏覽器自動化作業規範。主要用於當目標網站具備驗證碼、簡訊驗證、Google/第三方登入或安全防護機制，機器無法單獨全自動登入的情境。

---

## 核心原則

1. **視覺可見（Headless: False）**：全流程必須使用有頭模式，讓使用者能目視瀏覽器動態與手動介入。
2. **狀態持久化（Persistent Profile）**：必須掛載本機使用者設定檔目錄（`userDataDir` / `launchPersistentContext`），使登入 Session、Cookie 及快取能持續留存，避免重複登入。
3. **主動交接與等待（Handoff & Wait）**：開啟目標網站後立即交出控制權，發出指定提示語，絕不擅自執行未授權動作或提前關閉。
4. **無縫接手與結果保留（Resume & Keep-Alive）**：使用者完成登入確認後，抓取作用中分頁（Active Page）繼續後續自動化；任務完成後**不關閉瀏覽器**，供使用者檢視驗證。

---

## 標準三階段執行流程

### 第一階段：啟動可視化瀏覽器

1. **瀏覽器環境設定**：
   - 模式：`headless: false`。
   - 使用者設定檔：指定持久化路徑（如專案目錄下的 `.browser-profile` 或本機指定路徑）。
   - 瀏覽器引擎：優先選用系統安裝的 Chrome 或 Chromium。
2. **開啟目標網站**：
   - 啟動瀏覽器並導向目標網址首頁。
   - 保持視窗最大化或置於前台可視區域。

### 第二階段：移交使用者手動操作

1. **暫停自動化**：
   - 網頁首頁載入完成後，立即停止腳本自動化操作。
   - **嚴禁關閉瀏覽器**。
2. **輸出指定提示訊息**：
   在終端或對話視窗中輸出標準提示語：
   > 「瀏覽器已開啟，請在視窗中完成登入與授權操作。完成後，請在此回覆『已完成』或按 Enter 讓我接手。」
3. **等待就緒訊號**：
   - 進入阻斷等待狀態（如等待命令列 Enter、或等待使用者在 Agent 對話中回覆「已完成」）。
   - 在收到明確信號之前，不得擅自發起任何頁面點擊或跳轉。

### 第三階段：接手自動化執行

1. **捕獲作用中頁面 (Active Page)**：
   - 收到「已完成」指令後，取得目前上下文中的現有分頁（若使用者跳轉或開啟新分頁，優先取得最新作用中分頁）。
2. **延續 Session 執行後續任務**：
   - 在已授權的登入態下，按使用者需求逐步執行自動化操作（資料擷取、表單填寫、下載、操作驗證等）。
   - 操作期間全程保持視窗可見。
3. **保留最終畫面**：
   - 任務執行完畢後，回報執行結果。
   - **嚴禁調用 `browser.close()` 或關閉進程**，讓瀏覽器視窗保持開啟，供使用者審閱。

---

## 程式碼實作參考範例

### 範例一：Playwright (Node.js / TypeScript)

```typescript
import { chromium } from 'playwright';
import * as readline from 'readline';
import * as path from 'path';

async function runHitlBrowser(targetUrl: string, taskCallback: (page: any) => Promise<void>) {
  const userDataDir = path.resolve(process.cwd(), '.browser-profile');
  
  // 第一階段：啟動可視化瀏覽器與持久化 Context
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    channel: 'chrome', // 使用本機 Chrome
    args: ['--start-maximized'],
    viewport: null
  });

  const page = context.pages().length > 0 ? context.pages()[0] : await context.newPage();
  await page.goto(targetUrl);

  // 第二階段：提示並移交使用者手動登入
  console.log('\n============================================================');
  console.log('瀏覽器已開啟，請在視窗中完成登入與授權操作。');
  console.log('完成後，請在此回覆『已完成』或按 Enter 讓我接手。');
  console.log('============================================================\n');

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  await new Promise<void>((resolve) => {
    rl.question('按 Enter 鍵確認接手：', () => {
      rl.close();
      resolve();
    });
  });

  // 第三階段：重新抓取作用中分頁並接手執行
  const pages = context.pages();
  const activePage = pages[pages.length - 1] || page;
  console.log('已接手控制權，正在目前登入狀態下執行自動化任務...');

  await taskCallback(activePage);

  console.log('自動化任務已完成。保留瀏覽器視窗供檢視，不主動關閉。');
  // 注意：不執行 context.close()
}
```

### 範例二：Playwright (Python)

```python
import os
import sys
from playwright.sync_api import sync_playwright

def run_hitl_browser(target_url: str, task_func):
    user_data_dir = os.path.abspath("./.browser-profile")
    
    with sync_playwright() as p:
        # 第一階段：啟動可見 Chrome 並掛載持久化 Profile
        context = p.chromium.launch_persistent_context(
            user_data_dir=user_data_dir,
            headless=False,
            channel="chrome",
            args=["--start-maximized"],
            no_viewport=True
        )
        
        page = context.pages[0] if context.pages else context.new_page()
        page.goto(target_url)
        
        # 第二階段：移交使用者手動操作
        print("\n" + "=" * 60)
        print("瀏覽器已開啟，請在視窗中完成登入與授權操作。")
        print("完成後，請在此回覆『已完成』或按 Enter 讓我接手。")
        print("=" * 60 + "\n")
        
        input("請按 Enter 鍵以繼續接手...")
        
        # 第三階段：取得當前分頁並執行任務
        active_page = context.pages[-1]
        print("已接手控制權，開始執行後續自動化任務...")
        task_func(active_page)
        
        print("任務完成！瀏覽器保持開啟供您檢視。")
        # 保持進程不退出以維持瀏覽器視窗開啟
        input("檢視完畢後按 Enter 退出腳本：")
```

---

## 異常與邊界處理

1. **登入逾時或中途跳轉多個頁面**：
   - 接手前先重新列舉 `context.pages()`，確保鎖定的是使用者最後停留的作用中頁面，而非最初被重定向的首頁。
2. **跨域 Cookie 或儲存失效**：
   - 確認 `userDataDir` 具備本機磁碟的讀寫權限，並非暫存目錄（避免使用系統 `/tmp`）。
3. **腳本報錯時的處理**：
   - 若第三階段執行過程發生異常，捕捉例外並輸出錯誤日誌，同樣**不要關閉瀏覽器**，讓使用者能夠查看當前錯誤發生的畫面與 DOM 結構以利排查。

