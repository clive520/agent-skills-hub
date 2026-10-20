# Agent Skills Hub ⚡

> 個人 AI Agent 技能資料庫與公開索引系統。涵蓋教學簡報、解說動畫、HyperFrames 影音動畫引擎、動態設計、多影格審查與各類實用工作流。

🌐 **線上公開文檔與即時搜尋首頁**：[https://clive520.github.io/agent-skills-hub/](https://clive520.github.io/agent-skills-hub/)

---

## 📦 收錄技能一覽（共 17 項）

| 技能名稱 | 分類 | 說明 | 依賴 |
|---|---|---|---|
| [`soil-teaching-deck`](./skills/soil-teaching-deck) | 教學簡報 | SOIL 全科教學簡報六引擎工作流（各科通用、零金鑰原生 PptxGenJS） | 無 |
| [`soil-motion-deck`](./skills/soil-motion-deck) | 教學簡報 | 動畫教學簡報：結合 SOIL 六引擎與 HyperFrames 解說動畫，一次產出 PPTX 與 MP4 | `soil-teaching-deck`, `motion-explainer` |
| [`motion-explainer`](./skills/motion-explainer) | 解說動畫 | HyperFrames 原理解說動畫影片生成流程（中文旁白 + 字幕 + 三色主題） | `motion-design`, `review-loop` |
| [`faceless-explainer`](./skills/faceless-explainer) | 解說動畫 | 文字轉無人解說動畫影片：圖表、數據視覺化與抽象動態轉化 | `hyperframes`, `hyperframes-creative`, `media-use` |
| [`hyperframes`](./skills/hyperframes) | 工作流調度 | HyperFrames 動態影音總入口：意圖捕獲、專案狀態恢復與工作流路由調度 | `hyperframes-core`, `hyperframes-cli` |
| [`hyperframes-core`](./skills/hyperframes-core) | 核心架構 | HyperFrames 核心合約：確定性時間軸、子合成架構與 seek-safe 規範 | 無 |
| [`hyperframes-cli`](./skills/hyperframes-cli) | 開發工具 | HyperFrames CLI 命令列循環：init、add、preview、lint、render 與 publish | 無 |
| [`hyperframes-animation`](./skills/hyperframes-animation) | 動態設計 | HyperFrames 動態知識庫：原子規則、場景藍圖與 7 大引擎配接（GSAP、Three.js、Lottie 等） | `hyperframes-core` |
| [`hyperframes-keyframes`](./skills/hyperframes-keyframes) | 動態設計 | 2D/3D 關鍵影格、運鏡縮放、Ken Burns 效果、路徑與 SVG 動態變化 | `hyperframes-animation` |
| [`hyperframes-creative`](./skills/hyperframes-creative) | 視覺創意 | 視覺創意風格指南：品牌規範、色板調色盤、字型排版階層與版面構圖 | 無 |
| [`hyperframes-audio`](./skills/hyperframes-audio) | 聲音工程 | 音訊混音與聲音工程：BGM Ducking、音軌增益、EQ/壓縮效果器與自動化音量包絡線 | `hyperframes-core` |
| [`hyperframes-registry`](./skills/hyperframes-registry) | 組件模組 | Registry 模組庫：快速搜尋、安裝與銜接數百款預置 Block 與 UI 動效組件 | 無 |
| [`hyperframes-studio`](./skills/hyperframes-studio) | 工作流調度 | Studio 介面協同規範：影片規劃階段、時間軸軌道階層與內容安全框 | `hyperframes-core` |
| [`media-use`](./skills/media-use) | 媒體資源 | 多媒體資產 OS：音效、BGM、語音合成 (TTS)、品牌標誌與圖像智能解析 | 無 |
| [`motion-design`](./skills/motion-design) | 動態設計 | 動態設計品味與節奏規則（時間軸、緩動曲線、繁中字體、配色） | 無 |
| [`review-loop`](./skills/review-loop) | 審查機制 | 動畫影片的視覺自我審查循環（多影格 Contact Sheet 截圖對照） | 無 |
| [`visual-line-sticker-production`](./skills/visual-line-sticker-production) | 圖像與貼圖 | LINE 靜態貼圖全套生產、審核規範驗證與打包工作流 | 無 |

---

## 🚀 快速安裝技能

### 1. 安裝單一技能到 Antigravity
```bash
# 例如安裝 faceless-explainer 到全域技能目錄 (~/.gemini/config/skills)
git clone https://github.com/clive520/agent-skills-hub.git /tmp/hub
cp -r /tmp/hub/skills/faceless-explainer ~/.gemini/config/skills/
rm -rf /tmp/hub
```

### 2. 安裝單一技能到 Claude Code
```bash
# 例如安裝到 Claude Code 技能目錄 (~/.claude/skills)
git clone https://github.com/clive520/agent-skills-hub.git /tmp/hub
cp -r /tmp/hub/skills/faceless-explainer ~/.claude/skills/
rm -rf /tmp/hub
```

### 3. 一次複製所有技能
```bash
# Antigravity 全域技能
cp -r skills/* ~/.gemini/config/skills/

# Claude Code 技能
cp -r skills/* ~/.claude/skills/
```

---

## 🛠️ 如何新增或更新技能？（零維護成本）

本資料庫已配置 GitHub Actions 自動化工作流程：

1. 在 `skills/` 目錄下建立新的技能資料夾，例如 `skills/my-new-skill/`。
2. 在該資料夾內放入標準的 `SKILL.md`（包含開頭的 frontmatter：`name` 與 `description`）。
3. 執行 Git 推送：
   ```bash
   git add .
   git commit -m "feat: add my-new-skill"
   git push origin main
   ```
4. GitHub Actions 將自動讀取所有技能的元數據、更新首頁索引卡片、產出專屬文檔頁面，並在 1~2 分鐘內重新部署至 GitHub Pages！

---

## 📄 授權條款

本儲存庫採 [MIT License](LICENSE) 授權。
各技能的上游第三方元件請參閱個別目錄下的 LICENSE 與說明文件。
