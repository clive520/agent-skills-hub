---
name: hyperframes-audio
description: >
  用於處理 HyperFrames 合成中已放置音訊的混音工程：淡入/淡出（Fade-in / Fade-out）、交叉淡化（Crossfade）、音軌增益與音量、音量自動化包絡線、BGM 避讓語音（Ducking / Voiceover Carve）、效果器鏈結（EQ、壓縮器 Compressor、限制器 Limiter、噪聲門 Gate、飽和度 Saturation、延遲 Delay、混響 Reverb、Chorus、Phaser、Bitcrush）以及多音軌子混音匯流排（<hf-audio-group>）。
---

# HyperFrames 音訊混音與聲音工程

混音追求的是聲音之間的和諧關係，而非單純堆疊處理器。若兩軌各自聽起來良好但在混音時打架，解決方法通常不是單純拉小音量，而是找出衝突的頻率區段並進行雕琢避讓。

所有效果器透過 `data-fx-chain` 直接宣告在 DOM 元素上，即時預覽與離線渲染皆使用同一套 Web Audio 節點圖，保證「所聽即所得」。

---

## 核心屬性一覽

| 屬性 | 用途與內容 |
|---|---|
| `data-fx-chain` | 宣告效果器串聯鏈結（依照信號流順序排列） |
| `data-automation` | 宣告音軌音量或效果器參數的時間自動化包絡線（Automation Envelopes） |
| `data-fx-carve` | 宣告語音避讓（Carve / Ducking）專用頻率雕刻設定 |

---

## 支援的效果器家族

- **增益與動態**：`gain`、`compressor`、`limiter`、`truepeak`（前瞻真實峰值限制器）、`gate`（噪聲門）
- **均衡器 (EQ)**：`highpass`（高通濾波）、`lowpass`（低通濾波）、`peaking`（鐘形濾波）、`shelves`（高低架濾波）
- **空間與調變**：`delay`（延遲）、`reverb`（殘響）、`chorus`（合唱）、`phaser`（移相）
- **風格色彩**：`saturate`（溫暖飽和）、`bitcrush`（破音降採樣）

---

## 常見混音任務範例

### 1. BGM 背景音樂自動避讓語音 (Ducking / Carve)
當語音出現時，背景音樂在中頻（如 1kHz–3kHz）自動降低 3–6 dB，騰出人聲空間：
```html
<audio src="bgm.mp3" data-start="0" data-duration="60"
  data-fx-chain='[{"type":"carve","target":"voiceover","reduction":-5}]'>
</audio>
```

### 2. 音軌淡入與淡出自動化
```html
<audio src="music.mp3" data-start="0" data-duration="15"
  data-automation='{"volume":[{"t":0,"v":0},{"t":1.5,"v":1},{"t":13.5,"v":1},{"t":15,"v":0}]}'>
</audio>
```

### 3. 多音軌分組匯流排 (`<hf-audio-group>`)
將多條音效（SFX）或多個樂器軌包裹在同一個群組內，統一進行整體增益、壓縮或總體音量自動化控制。
