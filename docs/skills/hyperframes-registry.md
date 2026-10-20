---
title: "Registry 預置模組與組件庫檢索 (hyperframes-registry)"
description: "Registry 模組庫：快速搜尋、安裝與銜接數百款預置 Block 與 UI 動效組件（圖表、代碼終端、掃描線、微光等）。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/hyperframes-registry" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# hyperframes-registry · Registry 預置模組與組件庫檢索

<div class="skill-subtitle-bar">Registry Blocks & Components Library</div>

<div class="skill-meta-bar">
  <span class="badge category">組件模組</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#Registry</span> <span class="badge tag">#預置模組</span> <span class="badge tag">#視覺組件</span> <span class="badge tag">#Block安裝</span>
</div>

> **簡介**：Registry 模組庫：快速搜尋、安裝與銜接數百款預置 Block 與 UI 動效組件（圖表、代碼終端、掃描線、微光等）。
>
> **English Summary**: Search, install, and wire registry blocks and components into compositions (CRT scanlines, glitch, charts, code terminal, etc.).

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/hyperframes-registry
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-registry/* ~/.gemini/config/skills/hyperframes-registry/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/hyperframes-registry
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-registry/* ~/.claude/skills/hyperframes-registry/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/hyperframes-registry
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-registry/* ~/.agents/skills/hyperframes-registry/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info 包含的檔案 (14 個檔案)
- `examples/add-block.md`
- `examples/add-component.md`
- `references/component-quality-bar.md`
- `references/contributing.md`
- `references/demo-html-pattern.md`
- `references/discovery.md`
- `references/install-locations.md`
- `references/placeholder-material.md`
- `references/templates.md`
- `references/wiring-blocks.md`
- `references/wiring-components.md`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# HyperFrames 模組庫 (Registry) 檢索與安裝

HyperFrames Registry 提供了可透過 `hyperframes add <name>` 一鍵安裝的複用模組：

- **Blocks（獨立區塊模組）**：具備自身尺寸、時長與時間軸的獨立子合成，透過 `data-composition-src` 引入。
- **Components（特效組件）**：輕量代碼片段（無自身獨立尺寸），直接嵌入合成的 HTML 結構中。

---

## 常用指令速查

```bash
# 安裝數據圖表 Block
hyperframes add data-chart

# 安裝底片顆粒遮罩 Component
hyperframes add grain-overlay

# 一次安裝所有標記為 captions 的模組
hyperframes add captions

# 檢索模組庫中的現成元件
npx hyperframes catalog --query "terminal code window"
```

---

## 模組引入與串接 (Wiring Blocks)

安裝完成後，在頂層 `index.html` 中透過 `data-composition-src` 串接：

```html
<div
  data-composition-id="data-chart"
  data-composition-src="compositions/data-chart.html"
  data-start="2"
  data-duration="10"
  data-track-index="1"
  data-width="1920"
  data-height="1080">
</div>
```

---

## 目錄結構配置

預設安裝路徑可於 `hyperframes.json` 中配置：
- Blocks 預設存放於 `compositions/<name>.html`
- Components 預設存放於 `compositions/components/<name>.html`
- 靜態資產存放於 `assets/`

