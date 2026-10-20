---
title: "soil-teaching-deck"
description: ">"
---

# soil-teaching-deck

<div class="skill-meta-bar">
  <span class="badge category">教學簡報</span>
  <span class="badge tag">#SOIL教學法</span> <span class="badge tag">#PptxGenJS</span> <span class="badge tag">#教學簡報</span> <span class="badge tag">#六引擎</span> <span class="badge tag">#通科適用</span>
</div>

> **簡介**：>

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/soil-teaching-deck
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/soil-teaching-deck/* ~/.gemini/config/skills/soil-teaching-deck/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/soil-teaching-deck
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/soil-teaching-deck/* ~/.claude/skills/soil-teaching-deck/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/soil-teaching-deck
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/soil-teaching-deck/* ~/.agents/skills/soil-teaching-deck/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info 包含的檔案 (1 個檔案)
- `SKILL.md`
:::

---

## 技能完整說明檔 (SKILL.md)

# SOIL Teaching Deck Workflow（各科通用）

以李俊儀教授的 SOIL 教學心法為基礎、**各科通用**的教學簡報工作流。
六顆引擎、一條清楚的路徑：先想清楚教什麼，再安排怎麼教，最後才處理怎麼呈現。

> ⚙️ **本版特性**
> - 🎯 **各科通用**：八種教學版型不綁任何學科，數學、自然、社會、語文、藝能皆可套用（對照、結構拆解、問答、術語、修正、標注、概念圖、圖示網格）。
> - 🔑 **零金鑰**：不依賴 `draw`（gpt-image / OpenAI）生圖。所有視覺改用 **PptxGenJS 原生**（色塊、表格、形狀）＋ **emoji**，老師不必申請任何 API 金鑰。
> - 📦 **產出**：`.pptx`（用 PptxGenJS 生成），完整六引擎。

---

## 第一步：判斷工作模式

收到請求後，先用一個問題判斷工作模式（只問這一題）：

> 請問你目前的狀況是？
> 1. 我有教材（課文、講義、教科書段落、文章、題目），想做成教學簡報
> 2. 我有現成簡報（.pptx），想改得更好
> 3. 我只有一個主題（如「一元一次方程式」「光合作用」「現在完成式」），想從頭開始
> 4. 我想定義一套簡報風格給之後反覆使用

| 回答 | 工作模式 | 跑哪幾顆引擎 |
|-----|---------|------------|
| 1 | 全流程模式 | 引擎 1→2→3→4→5→6 |
| 2 | 診斷修改模式 | 引擎 4（+3 補頁面角色）→ 修改 .pptx |
| 3 | 全流程模式 | 先協助蒐集內容 → 引擎 1→2→3→4→5→6 |
| 4 | 風格定義模式 | 引擎 5 |

若使用者直接貼了一段教材說「做成簡報」，可跳過這題直接進全流程，但進引擎一前先補問細節。

---

## 第二步：在進入每顆引擎前，補問關鍵細節

### 進入引擎一之前，補問：
> 1. **教學科目與單元？**（例：數學・一元一次方程式 / 自然・光合作用 / 社會・工業革命 / 英文・現在完成式）
> 2. **教學對象是誰？**（國小 / 國中 / 高中 / 成人 / 教師研習）
> 3. **上課時間大約多長？**（一節 45 分鐘、兩節、半天工作坊）

### 進入引擎五之前，補問：
> 你有偏好的簡報風格嗎？有參考圖可給我，或讓我依教學內容自動配置？

---

## 引擎一：SOIL 概念定位師

> 目標：抓出教學主軸，回答「這堂課要學生帶走什麼」

### 輸入
教材、課文、講義、文章、題目、或主題描述。

### 產出「概念定位稿」六項
1. **總概念**：最核心的 1 個概念（一句話）。例：「現在完成式 = 過去動作 × 現在結果」「光合作用 = 光能轉化為化學能」。
2. **三個子概念**：支撐總概念。例（光合作用）：① 場所（葉綠體）② 原料與產物 ③ 影響因素（光、CO₂、溫度）。
3. **三個常見誤解**（最關鍵，要對準學生易錯點）。例：①「植物只在白天行光合作用、不呼吸」②「光合作用＝呼吸作用的相反」…
4. **帶走一句話**：學生只記一句的話那句是什麼。
5. **最小事實包**：支撐理解所需最少規則 / 例子。
6. **投影片 vs 講稿**：哪些放投影片、哪些口頭補充。

### 輸出格式
```
## 概念定位稿
### 總概念
[一句話]
### 三個子概念
1. … 2. … 3. …
### 三個常見誤解（→ 正確理解）
1. [誤解] → [正確] …
### 帶走一句話
[那句話]
### 最小事實包
- 規則 / 例子 …
### 投影片 vs 講稿分配
| 內容 | 建議位置 | 原因 |
```
完成後呈現給使用者確認，再進下一步。

---

## 引擎二：SOIL 脈絡定位師

> 目標：安排理解節奏，不是排章節

### 輸入
引擎一的概念定位稿 + 教學對象 + 時間長度。

### 三段理解節奏
| 節奏 | 功能 | 佔比 |
|-----|------|------|
| **引起動機** | 讓學生知道這跟自己有關（真實情境、提問、迷你案例） | 15-20% |
| **維持注意** | 幫學生把規則組成關係（結構拆解、對照、歸納） | 60-70% |
| **喚起行動** | 讓理解變成能做、能說、能判斷（練習 / 操作 / 討論 / 應用） | 15-20% |

### 每段要說明
教學目的、放入內容、學生理解任務、建議頁數、入口與出口、常見設計錯誤。

### 輸出格式
```
## 脈絡定位稿
### 第一段：引起動機（第 1-N 頁）
- 教學目的 / 放入內容 / 學生理解任務 / 建議頁數 / 入口 / 出口 / 常見錯誤
### 第二段：維持注意（第 N-M 頁）
### 第三段：喚起行動（第 M-末 頁）
```
完成後呈現確認。

---

## 引擎三：SOIL 頁面架構師（各科版型）

> 目標：給每一頁一個任務，不是列大綱

### 輸入
引擎二的脈絡定位稿。

### 可用頁面角色
| 角色 | 用途 |
|-----|------|
| 封面頁 | 標題、副標、講師 |
| 問題引入頁 | 用問題 / 真實情境讓學生好奇 |
| 迷思澄清頁 | 呈現常見錯誤觀念，再翻轉為正確理解 |
| 比較頁 | 兩個概念 / 做法並排對照 |
| 流程頁 | 步驟、生成順序、時間軸 |
| 分類頁 | 多個項目歸類 |
| 範例頁 | 用具體例子說明抽象規則 |
| 數據頁 | 大數字、考點頻率、關鍵統計 |
| 總結頁 | 收攏重點、帶走一句話 |
| 行動頁 | 請學生練習 / 操作 / 討論 / 應用 |
| 過渡頁 | 章節銜接（極簡，一句話） |

### 每頁要指定
頁碼、標題、頁面角色、本頁唯一主重點（只能一個）、建議頁型、學生理解任務、與前/後頁銜接、是否為關鍵頁（★）、**教學視覺版型需求（見下方 visual 規則）**。

### ▶ 各科教學視覺版型規則（visual 欄位，零金鑰）

各科**不依賴 AI 生圖**。視覺一律用 PptxGenJS 原生元件（表格、色塊、形狀、emoji）。在頁面角色表用 `visual` 欄位標記要用哪一種版型：

| visual 版型 | 用途 | PptxGenJS 作法 |
|------------|------|---------------|
| `compare_table` | 概念 / 做法對照（兩三欄並排，如過去式 vs 完成式、有絲分裂 vs 減數分裂） | `addTable`，表頭用強調色，左右欄對比 |
| `structure_card` | 結構拆解卡：把一個對象拆成數個分色組件（句子的 S/V/O、算式的各部分、反應式、論證結構） | 多個 `addShape(rect)` 橫排 + `addText`，每種角色一個固定色 |
| `dialogue` | 問答 / 對話雙欄（A/B 來回，師生問答、正反論點） | 左右兩欄文字泡泡（圓角 `roundRect`） |
| `term_list` | 術語 / 詞彙表：詞語 / 說明 / 例子（語文科可加音標欄） | `addTable` 多欄；詞語粗體 |
| `before_after` | 修正前後對照：原本 vs 改進（作文修改、解題訂正、設計改良） | 雙欄；原本紅色刪節、改進綠色；下方寫原因 |
| `material_callout` | 文本 / 材料重點標注（課文、史料、題目、圖說） | 大段文字 + 用色塊 highlight 目標重點 |
| `concept_map` | 概念關係放射圖（心智圖、字族、知識網） | 中央 `roundRect` + 四周 `addText` + `addShape(line)` 連線 |
| `icon_grid` | 3–6 個並列要點，用 emoji 當圖示 | 網格 + emoji（如 ✅⚠️💡🎯📖✍️🗣️🔬📐🌍） |

**visual 欄位格式（在頁面角色表中標記）：**
```
第 N 頁：[頁面標題]
- 頁面角色：比較頁
- 唯一主重點：過去式只講過去；完成式強調到現在的結果
- visual:
    type: compare_table
    columns: ["", "過去式 (Simple Past)", "現在完成式 (Present Perfect)"]
    rows:
      - ["焦點", "過去那件事", "到現在的結果"]
      - ["例子", "I lost my keys.", "I have lost my keys."]
      - ["關鍵字", "yesterday, ago", "since, for, just, yet"]
    emphasis_col: 3        # 用強調色標示「要學生記住」的那欄
```

```
- visual:
    type: structure_card
    title: "She / has finished / her homework."
    parts: ["She|主詞", "has finished|動詞", "her homework|受詞"]   # |後標記角色，用於分色
    note: "have/has + 過去分詞 = 完成式"
```

> `structure_card` 不限語文：數學「3x + 5 = 20」可拆成「3x｜未知項、+5｜常數項、=20｜結果」；化學反應式可拆「反應物｜產物」。一律用固定的角色配色（見引擎五）。
> 一頁可同時用文字 + 一個 visual 版型。所有版型都是純 PptxGenJS，零金鑰、零外部渲染。

### 自我檢查
- 超過一半頁面同一種角色？→ 過於單調，調整。
- 「唯一主重點」其實含兩個概念？→ 拆兩頁。
- 每頁都有明確理解任務？→ 沒有就刪。
- **對照類頁面是否善用 `compare_table` 或 `structure_card`？**
- **範例頁是否用結構卡分色，而不是整段純文字？**

完成後呈現確認。

---

## 引擎四：SOIL 認知編修師

> 目標：用六個認知詞把每頁修成真正的教學頁

| 認知詞 | 做什麼 | 怎麼判斷 |
|-------|-------|---------|
| **降雜訊** | 刪掉無助理解的元素 | 拿掉它學生理解會變差嗎？不會就刪 |
| **區塊化** | 同類資訊歸在一起 | 一眼看得出幾個群組嗎？ |
| **增資訊** | 補上理解的橋梁 | 兩個概念之間的關係標記夠清楚嗎？ |
| **結構化** | 讓主從關係可見 | 看得出主規則 vs 例外嗎？ |
| **順脈絡** | 排出合理閱讀順序 | 視線會照你想的順序走嗎？ |
| **步驟化** | 讓理解一步步跟 | 推導 / 流程該分幾步出現？ |

**全流程模式**：引擎三完成後，逐頁用六認知詞規劃呈現方式，作為引擎六指引。

**診斷修改模式**（使用者上傳 .pptx）：
1. 用 `python -m markitdown` 提取文字
2. 用 pptx 技能的 `thumbnail.py` 看視覺佈局
3. 逐頁用六認知詞診斷
4. 輸出「認知編修報告」（每頁六詞具體建議 + 修改優先級 高/中/低）

各科常見提醒：例子不要超過 2 行；對照表欄位不超過 3；一頁只示範一個概念 / 一個題型。

---

## 引擎五：SOIL 風格建構師

> 目標：把風格固定成規則，讓整份簡報一致。風格不該太早處理，骨架（引擎 1-4）定了才進來。

### 有參考簡報 / 圖片
逆向工程：整體氣質、標題位置與層級、配色系統、空白配置、強調方式、頁型偏好。

### 沒有偏好 → 依教學對象自動配置
| 教學場景 | 建議配色 | 氣質 |
|---------|---------|------|
| 國小 | Coral Energy / Teal Trust | 活潑、對比強 |
| 國中 | Teal Trust / Ocean Gradient | 清晰、活潑 |
| 高中 | Forest & Moss / Ocean Gradient | 清晰、穩重 |
| 成人 / 教師研習 | Sage Calm / Warm Terracotta | 溫暖、專業 |

### 風格規則（通用）
- 標題位置一致（全靠左或全置中，不混用）
- 章節色一致；同類頁型結構一致（所有比較頁長一樣）
- 每頁都有視覺元素（色塊 / 表格 / 形狀 / emoji），不做純文字頁
- 風格服務理解，不追求炫技；標題下不加裝飾底線

### 輸出：風格設定摘要
- **視覺基礎**：配色（主色 / 輔色 / 強調色 HEX）、字型搭配、標題與內文字級、佈局偏好。
- **結構分色慣例**（給 `structure_card` 用）：同一種結構裡不同角色的組件，各給一個固定色，整份簡報統一。範例：角色一 = 青 `#00C6FF`、角色二 = 橘 `#E8643A`、角色三 = 綠 `#81C784`、角色四 = 琥珀 `#FFB74D`。（語文科可對應 主詞 / 動詞 / 受詞 / 補語；數學科可對應 未知項 / 係數 / 常數 / 結果。）

> 本版不含 `image_policy`（無 AI 生圖）。

---

## 引擎六：SOIL 簡報總導演

> 目標：整合前五顆引擎，生成 .pptx（純 PptxGenJS、零金鑰）

### 輸入
概念定位稿、脈絡定位稿、頁面角色表（含 visual）、認知編修指引、風格設定。

### 技術執行：讀取 pptx 技能的技術文件
```bash
# 讀 PptxGenJS 完整 API 指南（路徑依你的環境，例如：）
# 若環境有 pptx 技能文件就讀；沒有也沒關係，直接依下方最小速查寫 PptxGenJS，不要因為找不到檔案而中止
cat ~/.claude/skills/pptx/pptxgenjs.md 2>/dev/null || cat ~/.claude-skills/pptx/pptxgenjs.md 2>/dev/null || echo "（無 pptx 技能文件，改用內嵌速查）"
```

**PptxGenJS 最小速查（無外部文件時用這個）**
```js
const pptxgen = require("pptxgenjs");
const pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";               // 10 x 5.625 吋
const s = pptx.addSlide();
s.background = { color: "F7F5F0" };
s.addText("標題", { x:0.5, y:0.4, w:9, h:0.8, fontSize:32, bold:true, fontFace:"Microsoft JhengHei", color:"1F2A2E" });
s.addShape(pptx.ShapeType.rect, { x:0.5, y:1.4, w:4, h:2, fill:{ color:"DFE9E4" }, line:{ color:"2F5D50" } });
s.addTable([["項目","說明"],["A","…"]], { x:5, y:1.4, w:4.5, colW:[1.5,3], fontSize:14, border:{ pt:0.5, color:"CCCCCC" } });
s.addImage({ path:"img.png", x:0.5, y:3.6, w:2, h:1.5 });
pptx.writeFile({ fileName:"deck.pptx" });
```


遵循 pptx 技能規範，套用林長揚 #1 文字比例（55/34/21/13）：

**字級標準**
| 元素 | 字級 | 用法 |
|------|------|------|
| 封面大標題 | 72–84pt bold | 封面、關鍵行動頁 |
| 一般標題 | 44–56pt bold | 每頁主訊息 |
| 副標 | 28–34pt bold | 主標下補充 |
| 內文 | 18–21pt | 條列、例子 |
| 註解 | 14–16pt | 署名、備註 |
| 徽章 | 18–22pt bold | 頁面角色標籤 |
| 強調 | 24–28pt bold | 強調色句子 |

**字型（與 HTML 簡報一致：源石黑體粗圓字型）**

PptxGenJS 以「字型名稱」設定，**.pptx 不內嵌字型**，因此播放/編輯的電腦需先裝好源石黑體（見下方 F-0 自動安裝流程）。安裝後可直接使用這些精確家族名稱：

| 用途 | fontFace（精確名稱） | 說明 |
|------|------|------|
| 標題 / 副標 / 徽章 / 強調 | `GenSekiGothic2 TW H` | 源石黑體 Heavy，粗圓、海報感 |
| 內文 / 條列 / 例子中文 | `GenSekiGothic2 TW M` | 源石黑體 Medium，保可讀性 |
| 英數字 / 公式 | `Segoe UI` / `Arial` | 系統內建 |

> Fallback：萬一目標電腦真的沒裝，PptxGenJS 會退回系統字型（如微軟正黑體），不會出錯，但就失去粗圓質感 —— 所以**請務必先跑 F-0 自動安裝**。

#### F-0：確認 / 自動上網安裝源石黑體（生成 .pptx 前先做）

字型免費、開源、免金鑰。Agent 若偵測到系統缺源石黑體，**直接自動上網安裝**（不必詢問）。從 [ButTaiwan/genseki-font](https://github.com/ButTaiwan/genseki-font) 的 `otf/TW/` 下載 H / B / M 三字重：

```bash
# macOS / Linux / Windows(Git Bash) 通用
UPSTREAM="https://github.com/ButTaiwan/genseki-font/raw/master/otf/TW"
case "$(uname -s)" in
  MINGW*|CYGWIN*|MSYS*) TARGET="$HOME/AppData/Local/Microsoft/Windows/Fonts" ;;
  Darwin*)              TARGET="$HOME/Library/Fonts" ;;
  *)                    TARGET="$HOME/.local/share/fonts" ;;
esac
mkdir -p "$TARGET"
for w in H B M; do
  f="GenSekiGothic2TW-$w.otf"
  [ -f "$TARGET/$f" ] || curl -sL -o "$TARGET/$f" "$UPSTREAM/$f"
done
# Linux 需重整字型快取：fc-cache -fv
```

```powershell
# Windows 無 Git Bash 時用 PowerShell
$U="https://github.com/ButTaiwan/genseki-font/raw/master/otf/TW"
$T="$env:LOCALAPPDATA\Microsoft\Windows\Fonts"; New-Item -ItemType Directory -Force -Path $T | Out-Null
foreach($w in "H","B","M"){ $f="GenSekiGothic2TW-$w.otf"; if(-not(Test-Path "$T\$f")){ Invoke-WebRequest "$U/$f" -OutFile "$T\$f" } }
```

> 安裝後，PptxGenJS 用 `fontFace:"GenSekiGothic2 TW H"` 即可。確認字型就緒再進入生成步驟。

**其他規範**
- `LAYOUT_WIDE`（16:9，13.333"×7.5"）、行距 1.2、最小邊距 0.5"
- 三明治結構：深色封面 + 結語、淺色內容頁
- 每頁都要有視覺元素（visual 版型或色塊）
- 固定 x 格點：左 `0.6/0.7`、雙欄 `5.1/7.2`、三欄 `0.6/4.85/9.1`

**頁面角色 → 佈局**
| 角色 | 佈局 |
|-----|------|
| 封面頁 | 深色全版 + 大標題居中 |
| 問題引入頁 | 大字問句 + 留白 |
| 迷思澄清頁 | 雙欄（❌ 錯誤觀念 vs ✅ 正確理解）|
| 比較頁 | `compare_table` 或雙欄對照 |
| 流程頁 | 橫向箭頭步驟 / 時間軸 |
| 分類頁 | 2×2 / 2×3 網格（emoji 圖示）|
| 範例頁 | `structure_card` 分色結構 |
| 數據頁 | 大數字 60–72pt + 小標籤 |
| 總結頁 | 條列收攏 + 帶走一句話 |
| 行動頁 | 深色背景 + 練習/操作/討論指引 |
| 過渡頁 | 全版色塊 + 一句話 |

### ▶ 各科視覺版型的 PptxGenJS 實作要點（零金鑰）

> 所有版型都用 PptxGenJS 原生 API，不需要任何圖檔、不呼叫 draw、不裝額外套件。

- **compare_table**：`slide.addTable(rows, {colW, border, fill})`。表頭列填強調色、白字；`emphasis_col` 那欄整欄淡色底，提示「要記住」。
- **structure_card**：每個 part 一個 `addShape(pptx.ShapeType.roundRect, {fill: 該角色色})` + 疊 `addText`，橫向等距排列；下方 `addText` 放 note。角色配色用引擎五的分色慣例。
- **dialogue**：左右各一排圓角泡泡（A 靠左、B 靠右），`roundRect` + `addText`；可加小 emoji 🗣️/💬。
- **term_list**：`addTable`，欄位「詞語 | 說明 | 例子」（語文科可加「音標 [KK]」欄）；詞語粗體。
- **before_after**：雙欄；左欄原本（紅色、可加刪除線 `strike:true`），右欄改進（綠色）；底部一行寫改進原因。
- **material_callout**：一個大 `addText` 放文本，另用半透明 `addShape(rect, {fill:{color, transparency:70}})` 疊在要 highlight 的重點上，或用不同顏色 runs。
- **concept_map**：中央 `roundRect`（主概念），四周 4–6 個 `addText`，用 `addShape(line)` 連線。
- **icon_grid**：網格每格一個 emoji（大字級）+ 標題 + 一行說明。

### 生成 .pptx
0. **先跑上方 F-0 確認源石黑體已安裝**（缺了就自動下載）。
1. 依頁面角色表逐頁寫 PptxGenJS 腳本（標題 `fontFace:"GenSekiGothic2 TW H"`、內文 `"GenSekiGothic2 TW M"`）（含上述 visual 版型）。
2. 用 Node 執行腳本產生 `.pptx`。
3. 用 pptx 技能的 `thumbnail.py` 產縮圖，逐頁預覽檢查（對齊、不重疊、例子不超過 2 行）。
4. 確認無誤再交付。

### 完成前檢查清單
- [ ] 每頁只有一個主重點
- [ ] 對照 / 結構頁有用 `compare_table` 或 `structure_card`，不是純文字
- [ ] `structure_card` 的角色分色，且全簡報一致
- [ ] 例子不超過 2 行、對照表欄位 ≤ 3
- [ ] 封面 / 結語深色、內容頁淺色（三明治）
- [ ] 每頁都有視覺元素
- [ ] 已用縮圖逐頁預覽、確認對齊與可讀性
- [ ] 全程未使用任何需要金鑰的生圖

---

## 給 agent 的核心提醒
1. **每顆引擎跑完都呈現給使用者確認**，不要一路衝到底。
2. **零金鑰**：嚴禁呼叫 `draw` 或任何需要 API 金鑰的生圖；視覺一律 PptxGenJS 原生 + emoji。
3. **各科通用**：對照用對照表、結構用拆解卡、修正用前後對照、材料用標注，依科目選最合適的版型。
4. 例子、對照要對準學生**易錯點**（引擎一的常見誤解）。
5. 用真實教學主題，不要用範例主題交差。

---

## 參考
| 項目 | 說明 |
|------|------|
| 理論 | SOIL 六引擎已完整內含於上方各引擎章節（本技能自足，無外部理論檔依賴）|
| 技術 | PptxGenJS API → 讀 pptx 技能的 `pptxgenjs.md`，沒有就用內嵌速查 |
| 視覺 | 8 種各科通用教學版型，全部 PptxGenJS 原生、零金鑰 |
