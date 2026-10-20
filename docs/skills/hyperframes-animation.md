---
title: "HyperFrames 動態知識庫與多引擎配接器 (hyperframes-animation)"
description: "HyperFrames 動態知識庫：原子運動規則、場景藍圖與 7 大執行期引擎配接（GSAP、Three.js、Lottie、CSS、WAAPI 等）。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/hyperframes-animation" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# hyperframes-animation · HyperFrames 動態知識庫與多引擎配接器

<div class="skill-subtitle-bar">HyperFrames Animation Knowledge & Adapters</div>

<div class="skill-meta-bar">
  <span class="badge category">動態設計</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#GSAP</span> <span class="badge tag">#動畫藍圖</span> <span class="badge tag">#場景轉場</span> <span class="badge tag">#Three.js</span> <span class="badge tag">#Lottie</span>
</div>

> **簡介**：HyperFrames 動態知識庫：原子運動規則、場景藍圖與 7 大執行期引擎配接（GSAP、Three.js、Lottie、CSS、WAAPI 等）。
>
> **English Summary**: Comprehensive motion knowledge: atomic rules, scene blueprints, transitions, and 7 runtime adapters (GSAP, Lottie, Three.js, etc.).

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/hyperframes-animation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-animation/* ~/.gemini/config/skills/hyperframes-animation/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/hyperframes-animation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-animation/* ~/.claude/skills/hyperframes-animation/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/hyperframes-animation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-animation/* ~/.agents/skills/hyperframes-animation/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::

::: tip 相依技能提示
此技能依賴以下上游技能，建議一同安裝：
- [hyperframes-core](./hyperframes-core.md)
:::

::: info 包含的檔案 (124 個檔案)
- `adapters/animate-text.md`
- `adapters/animejs.md`
- `adapters/css-animations.md`
- `adapters/gsap-easing-and-stagger.md`
- `adapters/gsap-timeline-and-labels.md`
- `adapters/gsap-transforms-and-perf.md`
- `adapters/gsap.md`
- `adapters/html-in-canvas-patterns.md`
- `adapters/lottie.md`
- `adapters/three.md`
- `adapters/typegpu.md`
- `adapters/waapi.md`
- `blueprints/agent-progress-theater.md`
- `blueprints/camera-journey.md`
- `blueprints/comparison-split.md`
- `blueprints/constellation-hub.md`
- `blueprints/cta-morph-press.md`
- `blueprints/cursor-ui-demo.md`
- `blueprints/dataviz-countup.md`
- `blueprints/device-surface-showcase.md`
- `blueprints/fixed-anchor-cycle.md`
- `blueprints/grid-card-assemble.md`
- `blueprints/kinetic-type-beats.md`
- `blueprints/logo-assemble-lockup.md`
- `blueprints/overwhelm-surround.md`
- `blueprints/panel-edit-live-sync.md`
- `blueprints/prompt-type-submit-generate.md`
- `blueprints/spatial-pan-stations.md`
- `blueprints/ticker-takeover.md`
- `blueprints/titlecard-reveal.md`
- `blueprints/transcript-scroll-artifact-reveal.md`
- `blueprints/typewriter-reveal.md`
- `blueprints/video-text-pivot.md`
- `blueprints/zoom-out-workspace-reveal.md`
- `blueprints-index.md`
- `examples/brand-reveal-assemble-zoom.html`
- `examples/comparison-split-cards.html`
- `examples/concept-demo-decode-pan.html`
- `examples/cta-morph-press.html`
- `examples/cta-orbit-collapse.html`
- `examples/demo-page-scroll-spotlight.html`
- `examples/hook-counter-burst.html`
- `examples/messaging-multi-phrase.html`
- `examples/metric-video-text-pivot.html`
- `examples/problem-mockup-overwhelm.html`
- `examples/proof-logo-chain.html`
- `examples/takeover-ticker-displace.html`
- `examples/workflow-approve-press.html`
- `references/motion-blur.md`
- `rules/3d-camera-flight.md`
- `rules/3d-page-scroll.md`
- `rules/3d-text-depth-layers.md`
- `rules/ai-tracking-box.md`
- `rules/ambient-glow-bloom.md`
- `rules/anchored-layout-expand.md`
- `rules/asr-keyword-glow.md`
- `rules/avatar-cloud-network.md`
- `rules/camera-cursor-tracking.md`
- `rules/card-morph-anchor.md`
- `rules/center-outward-expansion.md`
- `rules/chart-scrub-readout.md`
- `rules/chromatic-glitch.md`
- `rules/context-sensitive-cursor.md`
- `rules/control-target-sync.md`
- `rules/coordinate-target-zoom.md`
- `rules/counting-dynamic-scale.md`
- `rules/css-marker-patterns.md`
- `rules/cursor-click-ripple.md`
- `rules/cursor-drag.md`
- `rules/depth-of-field-blur.md`
- `rules/depth-scatter-assemble.md`
- `rules/discrete-text-sequence.md`
- `rules/dynamic-content-sequencing.md`
- `rules/gradient-text-sweep.md`
- `rules/gsap-effects.md`
- `rules/hacker-flip-3d.md`
- `rules/kinetic-beat-slam.md`
- `rules/motion-blur-streak.md`
- `rules/multi-cursor-choreography.md`
- `rules/multi-phase-camera.md`
- `rules/nudge-curve.md`
- `rules/orbit-3d-entry.md`
- `rules/particle-burst.md`
- `rules/physics-press-reaction.md`
- `rules/press-release-spring.md`
- `rules/reactive-displacement.md`
- `rules/scale-swap-transition.md`
- `rules/sine-wave-loop.md`
- `rules/split-tilt-cards.md`
- `rules/spring-pop-entrance.md`
- `rules/stat-bars-and-fills.md`
- `rules/svg-icon-enrichment.md`
- `rules/svg-path-draw.md`
- `rules/theme-crossfade-morph.md`
- `rules/vertical-spring-ticker.md`
- `rules/viewport-change.md`
- `rules/waterfall-entry.md`
- `rules-index.md`
- `scripts/animation-map-sampling.mjs`
- `scripts/animation-map-sampling.test.mjs`
- `scripts/animation-map.mjs`
- `scripts/animation-map.test.mjs`
- `scripts/package-loader.mjs`
- `scripts/package-loader.test.mjs`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
- `techniques.md`
- `transitions/catalog.md`
- `transitions/css-3d.md`
- `transitions/css-blur.md`
- `transitions/css-cover.md`
- `transitions/css-destruction.md`
- `transitions/css-dissolve.md`
- `transitions/css-distortion.md`
- `transitions/css-grid.md`
- `transitions/css-light.md`
- `transitions/css-mechanical.md`
- `transitions/css-other.md`
- `transitions/css-push.md`
- `transitions/css-radial.md`
- `transitions/css-scale.md`
- `transitions/overview.md`
- `transitions/TRANSITION-REGISTRY.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


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
| 查閱單一規則完整 HTML / CSS / GSAP 寫法 | `rules/&lt;name&gt;.md` |
| 挑選多階段場景模板 | `blueprints-index.md` |
| 場景與場景之間的轉場效果 | `transitions/overview.md` 與 `transitions/catalog.md` |
| 動態模糊（Motion Blur）規範 | `references/motion-blur.md` |
| 24 款文字動效樣式 | `adapters/animate-text.md` |
| GSAP 緩動曲線與交錯時間速查 | `adapters/gsap-easing-and-stagger.md` |
| Lottie 動畫整合與角色動作 | `adapters/lottie.md` |
| Three.js 3D 場景與混音器 | `adapters/three.md` |

