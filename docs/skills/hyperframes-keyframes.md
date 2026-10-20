---
title: "2D/3D 關鍵影格與運鏡鏡頭手法 (hyperframes-keyframes)"
description: "2D/3D 關鍵影格、運鏡縮放（Punch-in/out）、Ken Burns 效果、相機平移、遮罩路徑與 SVG 動態變換。"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/hyperframes-keyframes" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# hyperframes-keyframes · 2D/3D 關鍵影格與運鏡鏡頭手法

<div class="skill-subtitle-bar">2D/3D Keyframing & Camera Moves</div>

<div class="skill-meta-bar">
  <span class="badge category">動態設計</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  <span class="badge tag">#HyperFrames</span> <span class="badge tag">#關鍵影格</span> <span class="badge tag">#運鏡鏡頭</span> <span class="badge tag">#Ken Burns</span> <span class="badge tag">#SVG動畫</span>
</div>

> **簡介**：2D/3D 關鍵影格、運鏡縮放（Punch-in/out）、Ken Burns 效果、相機平移、遮罩路徑與 SVG 動態變換。
>
> **English Summary**: 2D/3D keyframing, punch-in/out, zoom, reframe, Ken Burns treatment, camera moves, and SVG morph/draw.

::: details 快速安裝指令（點擊複製）
::: code-group

```bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/hyperframes-keyframes
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-keyframes/* ~/.gemini/config/skills/hyperframes-keyframes/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/hyperframes-keyframes
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-keyframes/* ~/.claude/skills/hyperframes-keyframes/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/hyperframes-keyframes
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/hyperframes-keyframes/* ~/.agents/skills/hyperframes-keyframes/
rm -rf /tmp/skills-hub
```

```bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::

::: tip 相依技能提示
此技能依賴以下上游技能，建議一同安裝：
- [hyperframes-animation](./hyperframes-animation.md)
:::

::: info 包含的檔案 (5 個檔案)
- `agents/openai.yaml`
- `references/keyframe-patterns.md`
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## 繁體中文完整說明檔 (SKILL.md)


# HyperFrames 關鍵影格與運鏡手法

關鍵影格是一種姿態合約（Pose Contract）：宣告視覺可見狀態、主體身份連貫性、尋軌安全（seek-safe）的執行期，並確保像素級的正確呈現。

---

## 創作者常見運鏡需求與機制對照

| 需求 | 實作機制 |
|---|---|
| **特寫切入 / 拉遠 (Punch-in / Punch-out)** | 對 clip 內部的包裝層使用 `scale` 配合 `x`/`y` 進行關鍵影格動畫。硬切使用 `set` 或極短補間，滑動縮放使用平滑 tween。 |
| **平滑多段縮放 (Smooth Zoom / Reframe)** | 保持單一主體包裝層處於活躍狀態，將多個縮放狀態組織為階梯式姿態序列，各段指定獨立緩動曲線。 |
| **Ken Burns 平移與相機運動** | 同時對包裝層的位移（translation）與縮放（scale）進行關鍵影格補間。 |
| **匹配剪輯 / 快速搖攝 (Match cut / Whip pan)** | 由 `/hyperframes-animation` 提供銜接邏輯，關鍵影格確保位移方向與加速度曲線連貫。 |
| **遮罩動態重構 (Crop & Mask Reframe)** | 對內部視覺包裝層的 `clip-path` 或遮罩進行關鍵影格插值，不改動原始素材播放時間。 |
| **速度曲線 (Speed Ramps)** | 在 `&lt;video&gt;`/`&lt;audio&gt;` 上使用 `data-automation` 的 `rate` 軌道，實現對數曲線插值的加速與減速。 |
| **定格畫面 (Freeze / Hold)** | 將靜態畫面或最後影格獨立置放為單獨的 clip，隨後再恢復原始影片區段播放。 |

---

## 製作步驟 (Procedure)

1. **鎖定動畫主體**：識別運動目標、起點狀態、終點狀態與所選用的執行期。
2. **選用最簡可行機制**：參閱 `references/keyframe-patterns.md`。
3. **編寫尋軌安全 (Seek-safe) 的關鍵影格**：確保在任何時間戳記皆能正確反推各物件位置與透明度。
4. **驗證與診斷**：
   - 執行 `npx hyperframes check`
   - 執行 `npx hyperframes keyframes` 檢視運動軌跡
   - 針對關鍵時間點輸出 snapshot 進行像素確認

