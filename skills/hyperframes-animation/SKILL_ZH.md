---
name: hyperframes-animation
description: "HyperFrames 動態與動畫知識庫 — 包含原子運動規則（Atomic Rules）、多階段場景藍圖（Blueprints）、場景轉場（Transitions）、進階動態設計技法，以及 7 種執行期配接器（GSAP 預設，外加 Lottie、Three.js、Anime.js、CSS keyframes、Web Animations API、TypeGPU）。適用於所有動畫與動效任務。相容 HyperFrames 原生單一暫停時間軸、保證可任意尋軌與確定性渲染。"
---

# HyperFrames 動態知識庫與引擎配接器

整合所有動態設計核心知識：**原子規則**（Atomic Rules）、**場景藍圖**（Blueprints）、**場景轉場**（Transitions）、**動態設計技法**（Techniques）以及 **執行期配接器**（Runtime Adapters）。

---

## 預設策略：組合原子規則 (Atomic Rules)

從 `rules-index.md` 挑選 2 至 4 個原子規則，並在單一暫停的 GSAP 時間軸上串接。相較於直接搬用複雜藍圖，這種方式更輕量、速度更快、代碼更簡潔。

---

## 何時載入場景藍圖 (Blueprints)？

- 當場景符合現成的多階段模板（例如品牌揭示、社群背書、數據圖表成長等），直接複用其分期管線能大幅節省製作時間。
- 當你需要複雜的 4 至 5 階段編排的真實參考代碼。

---

## 執行期引擎選擇 (Picking a Runtime)

- **GSAP（預設）**：涵蓋 95% 的動態需求 — 時間軸編排、變形 (transforms)、緩動 (easing) 與交錯 (stagger)。本技能中的所有原子規則皆以 GSAP 為基底。
- **Lottie / dotLottie**：適用於 After Effects 匯出的預製動畫、角色走動、表情手勢。
- **Three.js / WebGL**：適用於 3D 空間場景、相機運鏡與著色器視覺。
- **Anime.js**：輕量化補間動畫。
- **CSS Keyframes**：適用於裝飾性循環、光澤微動 (shimmer)，無額外 JavaScript 負擔。
- **Web Animations API (WAAPI)**：瀏覽器原生關鍵影格。
- **TypeGPU / WebGPU**：高負載 GPU 粒子、液態玻璃與自訂著色器。

---

## 知識索引導覽

| 需求 | 查閱檔案 |
|---|---|
| 依觸發標籤挑選原子運動規則 | `rules-index.md` |
| 查閱單一規則完整 HTML / CSS / GSAP 寫法 | `rules/<name>.md` |
| 挑選多階段場景模板 | `blueprints-index.md` |
| 場景與場景之間的轉場效果 | `transitions/overview.md` 與 `transitions/catalog.md` |
| 動態模糊（Motion Blur）規範 | `references/motion-blur.md` |
| 24 款文字動效樣式 | `adapters/animate-text.md` |
| GSAP 緩動曲線與交錯時間速查 | `adapters/gsap-easing-and-stagger.md` |
| Lottie 動畫整合與角色動作 | `adapters/lottie.md` |
| Three.js 3D 場景與混音器 | `adapters/three.md` |
