# LINE Sticker Production

可在 Codex 與 ChatGPT Work 使用的 LINE 靜態貼圖產出 Skill。

本 Skill 會逐步確認貼圖張數、尺寸、角色、風格、文字與權利，使用所在產品的原生繪圖能力逐張生成，並輸出符合 LINE Creators Market 規格的上傳就緒包。

## 安裝

### Codex

在終端機執行：

```bash
git clone https://github.com/FW1201/visual-line-sticker-production.git ~/.codex/skills/visual-line-sticker-production
```

重新開啟 Codex 後，即可要求它使用 `$visual-line-sticker-production`。

### ChatGPT Work

1. 下載 [visual-line-sticker-production.zip](https://github.com/FW1201/visual-line-sticker-production/archive/refs/heads/main.zip)。
2. 開啟 ChatGPT Work，進入「個人頭像 → Skills → New skill → Upload from your computer」。
3. 上傳下載的 ZIP，完成安裝。

> 將 ZIP 直接附在一般對話中，只會成為參考檔案，不會安裝成 Skill。

## 快速開始

安裝後直接提出需求，例如：

```
請使用 visual-line-sticker-production 製作一組 LINE 靜態貼圖。
貼圖張數：……
角色：……
風格：……
文字：……
```

Skill 會先確認規格與權利，再逐張生成、檢查尺寸與內容，最後輸出上傳就緒包。

本專案不使用圖像 API、API key 或外部圖像 CLI。

完整流程請閱讀繁體中文 [使用說明.md](使用說明.md)。
