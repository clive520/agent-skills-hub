---
name: android-cli
description: Android CLI 命令列工具安裝與操作指南。提供完整的 Android 開發支援，包含建立 Android 專案、在實體與虛擬設備 (AVD) 上建置與運行應用、螢幕截圖與 UI 階層檢視、管理 Android SDK 元件、查閱官方文件以及探索安裝官方 Android 技能。
---

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
