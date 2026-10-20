# LINE 靜態貼圖產出 Skill 使用說明

這是一套可在 Codex 與 ChatGPT Work 使用的 Agent Skill，用來製作一般靜態 LINE 貼圖。它會逐步對齊張數、尺寸、角色、風格、文字與商品資訊，先產生一張樣張讓使用者確認，再逐張產出貼圖、主圖、聊天縮圖與上傳就緒 ZIP。

## 1. 下載與安裝

### ChatGPT Work

1. 開啟本 GitHub repo，選 **Code → Download ZIP**；或下載 repo 根目錄的 `visual-line-sticker-production.zip`。
2. 在 ChatGPT Work 開啟 **Skills → New skill → Upload**，選擇 ZIP 檔。
3. 若工作區尚未開放 Skills，請由 workspace admin 啟用 Skills、上傳或安裝權限。
4. 建立一個 Project 保存角色參考圖、`character-style-profile.md`、`collection-manifest.json` 與每次產出的檔案。

直接下載連結（main 分支）：

`https://github.com/FW1201/visual-line-sticker-production/raw/refs/heads/main/visual-line-sticker-production.zip`

Work 的雲端工作階段不能假設能讀取你的電腦檔案；請將角色參考圖、文字表格與既有 profile 直接附加到對話或 Project。桌面版 Work 若要求使用本機檔案，請只授權本次需要的資料夾。

### Codex

方法 A：下載 ZIP 後解壓縮，把 `visual-line-sticker-production/` 放入 `~/.codex/skills/`。

方法 B：在終端機執行：

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/FW1201/visual-line-sticker-production.git /tmp/visual-line-sticker-production
cp -R /tmp/visual-line-sticker-production/. ~/.codex/skills/visual-line-sticker-production/
```

安裝後，在 Codex 對話輸入：

```text
使用 $visual-line-sticker-production，建立一組 16 張繁體中文日常對話 LINE 貼圖。
```

Codex 會使用內建繪圖能力；本 skill 不要求 `OPENAI_API_KEY`，也不呼叫圖像 API 或圖像生成 CLI。

## 2. 開始一組新貼圖

可直接說明結果，也可以指定引導深度：

```text
使用 $visual-line-sticker-production，開啟引導模式。
角色是一隻穿黃色雨衣的水獺，風格是柔和手繪、透明背景。
請先詢問我商品資訊，再逐步建立 8 張貼圖表；不要直接批次生成。
```

skill 支援三種引導方式：

- **快速模式**：直接選張數、風格、語言、文字模式與角色題材。
- **引導模式**：逐步確認商品欄位、權利、角色、風格、文案與樣張；預設使用此模式。
- **藝術總監模式**：逐張指定姿勢、構圖、配色、道具、文字位置與禁用元素。

文字可選：

- 精確文案：使用者提供每張最終文字。
- 意圖提案：使用者提供情境，skill 先提出文案表供確認。
- 混合模式：保留指定文案，只替空白項目提案。
- 無字貼圖：只用表情與動作傳達意思。

正式生成前一定會凍結逐張貼圖表；內建繪圖產生的文字仍需人工檢查拼寫與可讀性。

## 3. 角色與風格續作

每組完成後會建立：

- `character-style-profile.md`：角色身份、比例、配色、線條、配件、禁用元素與已核准樣張規則。
- `collection-manifest.json`：張數、商品文字、逐張文案、prompt 與核准狀態。

下一次可輸入：

```text
沿用上一組的角色與風格，製作第二組 16 張「教師日常」貼圖。
保留角色設定，只重新詢問新主題、張數與逐張文字。
```

skill 會先生成一張新的錨點樣張並等待確認，再開始整組生成。也可以選擇只調整風格，或建立新角色；舊集合不會被覆寫。

## 4. 技術檢核與輸出

LINE 靜態貼圖目前要求：

- 貼圖數量：8、16、24、32 或 40 張。
- 主圖：240×240 px。
- 聊天縮圖：96×74 px。
- 貼圖：最大 370×320 px、PNG、透明背景、RGB/RGBA、至少 72 dpi。
- 單張不超過 1 MB，整組 ZIP 不超過 60 MB，並保留約 10 px 安全邊界。

Codex 若有 Pillow，可執行：

```bash
python3 scripts/prepare_line_assets.py \
  --stickers-dir selected/stickers \
  --main selected/main.png \
  --tab selected/tab.png \
  --count 8 \
  --out-dir ready

python3 scripts/verify_line_static_stickers.py \
  --input-dir ready \
  --manifest collection-manifest.json \
  --report qa-report.json \
  --zip-out line-sticker-upload.zip
```

這兩個工具只會處理已核准的圖片尺寸、透明畫布、檔名與檢核，不會繪圖、補字或修飾角色。ChatGPT Work 若不能執行本機腳本，仍可依 skill 內的人工檢核表完成流程。

## 5. 常見提示

若要重做單張，請說：

```text
只重做第 03 張，保留角色、配色與姿勢語意；修正文字為「辛苦了」，不要改動其他貼圖。
```

若原生繪圖能力在目前環境不可用，skill 會交付逐張 production prompt 與 manifest，並明確停止，不會改用 API 代替。

## 官方參考

- [LINE Creators Market：Sticker Creation Guidelines](https://creator.line.me/en/guideline/sticker/)
- [LINE Creators Market：Sticker Review Guidelines](https://creator.line.me/en/review_guideline/)
- [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)
- [Skills in ChatGPT](https://help.openai.com/en/articles/20001066)
