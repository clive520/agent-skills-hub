---
title: "Android CLI 開發與虛擬設備專員 (android-cli)"
description: "Android CLI 命令列工具操作指南：專案建立、實體與虛擬設備 (AVD) 運行、UI 截圖檢視、SDK 元件管理與 Journey 流程自動化測試。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/android-cli" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# android-cli · Android CLI 開發與虛擬設備專員

<div class="skill-subtitle-bar">Android CLI & Virtual Device Specialist</div>

<div class="skill-meta-bar">
  <span class="badge category">移動端開發</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#Android</span> <span class="badge tag">#CLI工具</span> <span class="badge tag">#AVD模擬器</span> <span class="badge tag">#移動開發</span> <span class="badge tag">#UI檢視</span> <span class="badge tag">#SDK管理</span>
</div>

> **簡介**：Android CLI 命令列工具操作指南：專案建立、實體與虛擬設備 (AVD) 運行、UI 截圖檢視、SDK 元件管理與 Journey 流程自動化測試。
>
> **English Summary**: Android CLI operations: project creation, physical/virtual device execution, UI screenshots, SDK component management, and automated journey tests.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/android-cli
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/android-cli/* ~/.gemini/config/skills/android-cli/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/android-cli
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/android-cli/* ~/.claude/skills/android-cli/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/android-cli
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/android-cli/* ~/.agents/skills/android-cli/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info 包含的檔案 (5 個檔案)
- `references/interact.md`
- `references/journeys.md`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# Android CLI 開發與虛擬設備管理專員

本技能提供安裝與操作 `android` CLI 命令列工具的完整指引。該工具集成了 Android 專案建立、應用編譯部署、模擬器控制、UI 階層檢查與自動化測試功能。

---

## 安裝指南

若系統尚未將 `android` 加入 PATH，請依作業系統執行以下安裝指令：

- **Windows**:
  ```cmd
  curl -fsSL https://dl.google.com/android/cli/latest/windows_x86_64/install.cmd -o "%TEMP%\i.cmd" && "%TEMP%\i.cmd"
  ```
- **Linux (x86-64)**:
  ```bash
  curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
  ```
- **macOS (Apple Silicon)**:
  ```bash
  curl -fsSL https://dl.google.com/android/cli/latest/darwin_arm64/install.sh | bash
  ```

---

## 核心操作能力

### 1. SDK 與建置工具管理
- 安裝必要 SDK 平台與建置工具：
  ```bash
  android sdk install "platforms;android-34" "build-tools;34.0.0"
  ```
- 檢查已安裝元件：`android sdk list`

### 2. 專案初始化與結構建立
- 建立全新的 Android 專案：
  ```bash
  android project create --name "MyApp" --package "com.example.myapp" --template compose
  ```
- 支援標準 Jetpack Compose 與傳統 View 架構範本。

### 3. 模擬器 (AVD) 管理
- 建立虛擬設備：
  ```bash
  android emulator create --name "Pixel_7_API_34" --device "pixel_7" --image "system-images;android-34;google_apis;x86_64"
  ```
- 啟動模擬器：`android emulator start --name "Pixel_7_API_34"`
- 檢視運行中設備：`android device list`

### 4. 設備互動、截圖與 UI 檢驗
- 截取當前螢幕畫面：
  ```bash
  android device screenshot --output ./screenshot.png
  ```
- 傾印 UI 階層與 Accessibility 節點資訊：
  ```bash
  android device dump-ui --output ./ui-tree.xml
  ```
- 傳送按鍵事件與點擊：
  ```bash
  android device click --x 540 --y 960
  android device input-text "Hello Android"
  ```

### 5. 旅程測試 (Journey Testing)
- 執行端到端使用者旅程自動化驗證腳本：
  ```bash
  android journey run --file ./tests/checkout-flow.json
  ```

---

## 參考文件

- `references/interact.md`：設備互動詳細 API 與指令語法。
- `references/journeys.md`：使用者旅程測試腳本格式與範例。

