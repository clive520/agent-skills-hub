# Agent Skills Hub ⚡

> 個人 AI Agent 技能資料庫與公開索引系統。涵蓋教學簡報、解說動畫、動態設計、多影格審查與各類實用工作流。

🌐 **線上公開文檔與即時搜尋首頁**：[https://clive520.github.io/agent-skills-hub/](https://clive520.github.io/agent-skills-hub/)

---

## 📦 收錄技能一覽

| 技能名稱 | 分類 | 說明 | 依賴 |
|---|---|---|---|
| [`soil-motion-deck`](./skills/soil-motion-deck) | 教學簡報 | 動畫教學簡報：結合 SOIL 六引擎與 HyperFrames 解說動畫，一次產出 PPTX 與 MP4 | `soil-teaching-deck`, `motion-explainer` |
| [`soil-teaching-deck`](./skills/soil-teaching-deck) | 教學簡報 | SOIL 全科教學簡報六引擎工作流（各科通用、零金鑰原生 PptxGenJS） | 無 |
| [`motion-explainer`](./skills/motion-explainer) | 解說動畫 | HyperFrames 原理解說動畫影片生成流程（中文旁白 + 字幕 + 三色主題） | `motion-design`, `review-loop` |
| [`motion-design`](./skills/motion-design) | 動態設計 | 動態設計品味與節奏規則（時間軸、緩動曲線、繁中字體、配色） | 無 |
| [`review-loop`](./skills/review-loop) | 審查機制 | 動畫影片的視覺自我審查循環（多影格 Contact Sheet 截圖對照） | 無 |
| [`visual-line-sticker-production`](./skills/visual-line-sticker-production) | 圖像與貼圖 | LINE 靜態貼圖全套生產、審核規範驗證與打包工作流 | 無 |

---

## 🚀 快速安裝技能

### 1. 安裝單一技能到 Antigravity
```bash
# 例如安裝 soil-motion-deck 到全域技能目錄 (~/.gemini/config/skills)
git clone https://github.com/clive520/agent-skills-hub.git /tmp/hub
cp -r /tmp/hub/skills/soil-motion-deck ~/.gemini/config/skills/
rm -rf /tmp/hub
```

### 2. 安裝單一技能到 Claude Code
```bash
# 例如安裝到 Claude Code 技能目錄 (~/.claude/skills)
git clone https://github.com/clive520/agent-skills-hub.git /tmp/hub
cp -r /tmp/hub/skills/soil-motion-deck ~/.claude/skills/
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
