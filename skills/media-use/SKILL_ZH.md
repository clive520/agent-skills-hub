---
name: media-use
description: >
  HyperFrames 專案的多媒體作業系統（Agent Media OS）。解析 BGM 背景音樂、SFX 音效、照片圖像、圖示 Icon、官方品牌 Logo、TTS 語音、調色檔或 LUT 為凍結的本地檔案，並記錄資產清冊（單一動詞 resolve）；當模組庫未命中時透過 AI 模型生成；統一管理口播生成、轉錄聽打、字幕提取與去背；對媒體執行剪裁、重構與變形處理，並跨專案複用資產。
---

# media-use：多媒體資產作業系統

HyperFrames 的多媒體引擎：解析（Resolve）· 生成（Generate）· 操作（Operate）· 記憶（Remember）— 一個技能處理所有多媒體類型，徹底消除雜訊。

---

## 單一動詞指令：Resolve

```bash
npx hyperframes media-use resolve --type <type> --intent "<描述需求>" --project <專案目錄>
```

執行後返回簡潔的一行結果：`resolved <id> → <path> (<type>, <metadata>)`，所有搜尋與下載細節均持久化於本地磁碟。

| 類型 (Type) | 意圖與來源 |
|---|---|
| `bgm` | 背景音樂（HeyGen 音樂庫 10,000+ 首曲目） |
| `sfx` | 音效（Openverse CC0/CC BY 免費音效，離線自帶 21 款精選音效包） |
| `image` | 高清照片、背景圖（HeyGen 資產庫 75,000+ 向量與圖片） |
| `icon` | 透明背景圖示、UI 符號 |
| `logo` | 官方品牌標誌（搜尋向量 SVG → GitHub Avatar → Favicon，絕不隨意重繪） |
| `voice` | TTS 語音旁白（HeyGen 語音或本機離線 Kokoro / edge-tts） |
| `grade` | 畫面色彩校正與調色方案 |
| `lut` | `.cube` 3D LUT 調色濾鏡檔 |

---

## 視覺反饋與色彩風格處理 (Media Treatments)

當使用者反饋實拍素材看起來「太暗、平淡、無聊、需要復古感、需要遮蔽隱私或特殊亮相效果」時：
- 執行 `references/media-treatments.md` 規範。
- 套用色彩校正、復古底片預設、著色器特效或 Registry 疊加層。
- 透過 contact sheet 比較調整前後效果，確保視覺風格統一。
