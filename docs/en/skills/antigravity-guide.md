---
title: "Google Antigravity 2.0 Comprehensive Guide (antigravity-guide)"
description: "Comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), CLI (agy), 2.0 architecture, IDE, slash commands, and customizations."
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>Current Version: <strong>🇬🇧 English</strong></span>
  </div>
  <a href="/agent-skills-hub/skills/antigravity-guide" class="lang-switch-link">
    🇹🇼 點此切換至中文版本 (Switch to Traditional Chinese) →
  </a>
</div>

# antigravity-guide · Google Antigravity 2.0 Comprehensive Guide

<div class="skill-subtitle-bar">Google Antigravity 2.0 完整開發指南</div>

<div class="skill-meta-bar">
  <span class="badge category">Platform Guides</span>
  <span class="badge lang-tag">🇬🇧 English</span>
  <span class="badge tag">#Antigravity</span> <span class="badge tag">#AGY Guide</span> <span class="badge tag">#CLI Tool</span> <span class="badge tag">#Keybindings</span> <span class="badge tag">#Customizations</span> <span class="badge tag">#Skills Eco</span>
</div>

> **Description**: Comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), CLI (agy), 2.0 architecture, IDE, slash commands, and customizations.
>
> **中文簡介**: Google Antigravity (AGY) 綜合指南與功能地圖：Antigravity CLI (agy)、IDE 介面、斜線指令、快捷鍵、Skills 與 MCP 客製化系統。

::: details Quick Install Commands (Click to Copy)
::: code-group

```bash [Antigravity]
# Install into Antigravity global skills directory
mkdir -p ~/.gemini/config/skills/antigravity-guide
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/antigravity-guide/* ~/.gemini/config/skills/antigravity-guide/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# Install into Claude Code skills directory
mkdir -p ~/.claude/skills/antigravity-guide
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/antigravity-guide/* ~/.claude/skills/antigravity-guide/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# Install into Codex skills directory
mkdir -p ~/.agents/skills/antigravity-guide
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/antigravity-guide/* ~/.agents/skills/antigravity-guide/
rm -rf /tmp/skills-hub
```

```bash [Git Clone]
git clone https://github.com/clive520/agent-skills-hub.git
```

:::



::: info Included Files (3 files)
- `SKILL.md`
- `SKILL_EN.md`
- `SKILL_ZH.md`
:::

---

## Full Skill Documentation (SKILL.md)


# Google Antigravity (AGY) Guide & Sitemap

Google Antigravity is an AI-first development platform. Depending on which
surface the user is asking about, you **MUST** read the corresponding
subdocumentation in the `references/` directory of this skill:

## 1. Surfaces Sitemap (Offline Subdocs)

-   **Antigravity CLI (`agy`)**: [references/cli.md](references/cli.md)
    -   Pointers to the authoritative public CLI docs for slash commands,
        features, settings, and best practices.
-   **Antigravity IDE**: [references/ide.md](references/ide.md)
    -   Covers the standalone AI-first IDE, sidebar chat panels, and inline code
        lenses.
-   **Antigravity 2.0**: [references/app.md](references/app.md)
    -   Covers the parallel desktop application, left-hand sidebar, chat canvas,
        and the HTML Auxiliary Pane (Subagents, Background Tasks, Artifacts,
        Files Changed, Terminals).
-   **Antigravity SDK**: [references/sdk.md](references/sdk.md)
    -   Covers the public Python SDK
        (https://github.com/google-antigravity/antigravity-sdk-python) for
        programmatic agent leasing, orchestration APIs, and custom tool
        exposing.

--------------------------------------------------------------------------------

## 2. Smart Hybrid Retrieval: When to Fetch Live Docs

The offline subdocs provide excellent quick references. However, if the user
asks for the latest updates, advanced Vertex AI integrations, or complex setups
not covered here, you **MUST** dynamically fetch the live page from the official
sitemap:

<!-- LINT.IfChange(sitemap) -->

-   **Main Documentation Home**: `https://antigravity.google/docs`
-   **Skills**: `https://antigravity.google/docs/skills`
-   **Rules**: `https://antigravity.google/docs/rules-workflows`
-   **Hooks**: `https://antigravity.google/docs/hooks`
-   **Plugins**: `https://antigravity.google/docs/plugins`
-   **Sidecars**: `https://antigravity.google/docs/sidecars`
-   **Model Context Protocol (MCP)**: `https://antigravity.google/docs/mcp`
-   **Browser Automation & Testing**:
    `https://antigravity.google/docs/ide/browser`
-   **Agent Permissions & Security**:
    `https://antigravity.google/docs/permissions`
-   **Terminal Sandbox**: `https://antigravity.google/docs/sandbox`
-   **Changelog & Release Notes**: `https://antigravity.google/changelog`
-   **Troubleshooting & Support**: `https://antigravity.google/support`
    <!-- LINT.ThenChange(//depot/google3/third_party/gemini_coder/agent_ui_toolkit/dev/appVariant/externalAppVariant.ts:custom_links) -->

