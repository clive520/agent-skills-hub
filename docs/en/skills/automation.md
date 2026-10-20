---
title: "Scheduled Background Automations (automation)"
description: "Design and create scheduled background automations using cron expressions and sidecars to start fresh agent conversations for recurring tasks."
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>Current Version: <strong>🇬🇧 English</strong></span>
  </div>
  <a href="/agent-skills-hub/skills/automation" class="lang-switch-link">
    🇹🇼 點此切換至中文版本 (Switch to Traditional Chinese) →
  </a>
</div>

# automation · Scheduled Background Automations

<div class="skill-subtitle-bar">背景排程與自動化工作流</div>

<div class="skill-meta-bar">
  <span class="badge category">Scheduled Automations</span>
  <span class="badge lang-tag">🇬🇧 English</span>
  <span class="badge tag">#Cron Schedule</span> <span class="badge tag">#Background Automation</span> <span class="badge tag">#Recurring Tasks</span> <span class="badge tag">#Sidecar</span> <span class="badge tag">#Agent Automation</span>
</div>

> **Description**: Design and create scheduled background automations using cron expressions and sidecars to start fresh agent conversations for recurring tasks.
>
> **中文簡介**: 設計與建立後台定時排程自動化任務（Scheduled Automations）：Cron 表達式、定時觸發全新 Agent 對話與常態性維護任務執行。

::: details Quick Install Commands (Click to Copy)
::: code-group

```bash [Antigravity]
# Install into Antigravity global skills directory
mkdir -p ~/.gemini/config/skills/automation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/automation/* ~/.gemini/config/skills/automation/
rm -rf /tmp/skills-hub
```

```bash [Claude Code]
# Install into Claude Code skills directory
mkdir -p ~/.claude/skills/automation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/automation/* ~/.claude/skills/automation/
rm -rf /tmp/skills-hub
```

```bash [Codex]
# Install into Codex skills directory
mkdir -p ~/.agents/skills/automation
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/automation/* ~/.agents/skills/automation/
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


# Scheduled Automations

A **scheduled automation** is a background sidecar (`"builtin": "schedule"`) that runs on a cron schedule and starts a fresh agent conversation (`agentapi new-conversation`) on each run.

This skill is **strictly for scheduled (cron) automations**. Do not use it to create UI sidecars or continuous generic command/daemon sidecars.

---

## Interactive Creation Workflow

Guide the user through creating the automation **one step at a time** across turns. If the user already provided some details in their initial prompt (such as the schedule or the task), skip the questions already answered and proceed to the next missing step.

### Turn 1: Ask for the Cadence

If the schedule cadence is not yet specified, use the `ask_question` tool to ask:

- **Question**: `"What should be the cadence of the automation?"`
- **Options**:
  - `Hourly`
  - `Daily`
  - `Weekly`
  - `Custom cron schedule`

Wait for the user's response before moving to the next question.

### Turn 2: Confirm the Specific Time / Day

Based on the chosen cadence, confirm the exact schedule in a follow-up turn using `ask_question`:

- **If Daily**: Use `ask_question` to confirm the hour of the day (e.g., `9:00 AM`, `12:00 PM`, `5:00 PM`; the user can also enter a custom time via the built-in write-in option).
- **If Weekly**: Use `ask_question` to confirm both the day(s) of the week (e.g., `Monday`, `Friday`, `Weekdays (Mon–Fri)`) and the hour of the day (e.g., `9:00 AM`, `5:00 PM`).
- **If Hourly**: Default to the top of every hour (`0 * * * *`), or confirm if they want a specific minute offset.
- **If Custom cron schedule**: Ask the user to specify their desired cron expression or interval (e.g., `*/30 * * * *` for every 30 minutes).

Wait for the user's response before asking what the task should do.

### Turn 3: Ask What the Task Should Do

Once the schedule is set (and if the task itself has not been described yet), ask the user in plain text (do **not** use `ask_question` for this open-ended step):

> *"What would you like the task to do? (For example: 'Summarize my unread emails from the last 24 hours and highlight any that need a reply' or 'Check my open pull requests and list any with failing checks.')"*

Wait for the user's response.

---

## Step 4: Create `sidecar.json` & Offer a Test Run to Configure Permissions

### 1. Translate Schedule & Author Self-Contained Run Prompt

- **Cron schedule**: Standard 5-field cron expression (`minute hour day-of-month month day-of-week`) written in the user's local time, always prefixed with `CRON_TZ=&lt;IANA zone&gt; ` so it runs in the user's timezone:
  - Hourly: `CRON_TZ=America/New_York 0 * * * *`
  - Daily at 9:00 AM: `CRON_TZ=America/New_York 0 9 * * *`
  - Daily at 5:00 PM: `CRON_TZ=America/New_York 0 17 * * *`
  - Weekly on Monday at 9:00 AM: `CRON_TZ=America/New_York 0 9 * * 1`
  - Weekdays at 9:00 AM: `CRON_TZ=America/New_York 0 9 * * 1-5`
- **Determine the user's timezone** (an IANA name such as `Europe/Zurich`; never an abbreviation like `PST` or a raw offset like `+02:00`):
  1. If the user already stated a timezone or city, use the matching IANA zone.
  2. Otherwise detect the host's timezone (map any OS-specific zone name to its IANA equivalent).
  3. If detection fails, use `ask_question` to confirm the user's timezone (offer the detected zone plus a few common zones; the user can write in their own).
  - If the user supplies a custom cron that already starts with `CRON_TZ=` or `TZ=`, keep it as-is and do not add a second prefix.
  - When confirming the schedule to the user, state it with the zone (e.g., "every day at 9:00 AM Europe/Zurich time").
- **Self-contained prompt**: Each scheduled run starts a brand-new conversation with no memory of prior runs. Write a clear, self-contained prompt stating the data sources, actions, and desired output format.

### 2. Announce Automation Creation & Write `&lt;configDir&gt;/sidecars/&lt;sidecar-id&gt;/sidecar.json`

Before calling `write_to_file`, **always output a short message to the user** stating that you are now creating the **`&lt;display_name&gt;`** automation (do not mention `sidecar.json` or internal file details to the user). Also set `toolAction` / `toolSummary` on `write_to_file` to `"Creating &lt;display_name&gt; automation"`.

Create the configuration file at:

```
<configDir>/sidecars/<sidecar-id>/sidecar.json
```

- `&lt;configDir&gt;` is the user's `.gemini/config` directory (typically `~/.gemini/config`).
- `&lt;sidecar-id&gt;` is a short, unique `kebab-case` identifier derived from the task (e.g., `daily-pr-check`).
- Choose a clear, human-readable **`display_name`** (e.g., `"Daily PR Status Check"`). You MUST tell the user this exact `display_name` when pointing them to the Automations dashboard so they know which automation to enable.
- Use **snake_case** field names only (`restart_policy`, `display_name`, `agent_permissions`, `access_grants`, `workspace_uris`).

> [!CAUTION]
> **Never Hallucinate Tools or Permissions**:
> - Do **NOT** guess or invent MCP servers (`mcp(...)`) or CLI commands (`command(...)`) that you have not verified exist in the current environment.
> - Only include an `mcp(&lt;server&gt;/&lt;tool&gt;)` grant if `&lt;server&gt;` is actually present in your `&lt;mcp_servers&gt;` system prompt block.
> - Only include a `command(&lt;prefix&gt;)` grant if you have verified the binary/subcommand exists (e.g., via an available skill or a live test run).
> - Never use overly generic wildcards (`command(*)`, `read_file(*)`, `read_file(/)`, `write_file(*)`, `mcp(*)`, `read_url(*)`) or invalid wrapper syntax like `allow(*)`.

#### Example `sidecar.json`

```json
{
  "builtin": "schedule",
  "args": [
    "CRON_TZ=America/New_York 0 9 * * *",
    "agentapi",
    "new-conversation",
    "--",
    "Check open pull requests in the repository and summarize any with failing CI checks or pending review comments."
  ],
  "restart_policy": "always",
  "display_name": "Daily PR Status Check",
  "description": "Every day at 9:00 AM (America/New_York), checks open pull requests and summarizes failing checks or review comments.",
  "agent_permissions": {
    "access_grants": [
      "command(gh pr list)",
      "command(gh pr view)"
    ]
  }
}
```

- `args[0]` is the full schedule as a single string, including the `CRON_TZ=&lt;zone&gt;` prefix.
- Always include `"--"` immediately before the prompt string in `args` so the prompt is cleanly separated from `agentapi new-conversation` flags.

### 3. Point to the Dashboard (with Automation Name) & Ask to Test-Run for Reliable Permissions

> [!CAUTION]
> **DO NOT enable the automation yourself.**
> Never modify `user_config.json` to set `"enabled": true`, and never invoke any command or RPC to start or enable the sidecar.

After writing `sidecar.json`:
1. Tell the user that the automation **`&lt;display_name&gt;`** (`&lt;sidecar-id&gt;`) has been created, and explicitly instruct them to enable it in the **Automations** dashboard using the action button:
   `[Open Automations Dashboard](sidecar://dashboard)`
2. Explain to the user that **once enabled, the automation will run in a project that inherits global permissions and presets, and all other non-approved commands will be auto-denied**. To ensure that the automation can proceed successfully and unattended, you can execute a test run right now to configure the permissions properly.
3. Use `ask_question` to ask the user if they want you to execute a test run now:
   - **Question**: `"Once enabled, '&lt;display_name&gt;' will run in a project that inherits global permissions and presets, and all other non-approved commands will be auto-denied. Would you like me to execute a test run now to configure its permissions properly so it can proceed successfully?"`
   - **Options**:
     - `(Recommended) Yes, execute a test run now to configure permissions`
     - `No, I'll review permissions and enable '&lt;display_name&gt;' in the Automations dashboard`

---

## Step 5: If the User Chooses to Test-Run the Task Now

When the user agrees to a test run:

1. **Execute the task once in the current conversation**:
   - Search for and read any relevant skills (`skill_search` / `view_file` on `SKILL.md`) or check available `&lt;mcp_servers&gt;` needed to fulfill the task.
   - Run the actual commands, file reads/writes, URL fetches, or MCP tools to perform the task once.
   - If the required tool/integration does not exist or needs authentication/setup, inform the user clearly so they know what is missing before enabling the automation.
2. **Update `sidecar.json` with the exact verified permissions**:
   - Record every permission grant actually required during the test run, scoped as succinctly as possible in `agent_permissions`:
     - **`workspace_uris`**: `["file:///absolute/path/to/dir"]` if the task needed read+write access to a workspace folder.
     - **`access_grants`**:
       - `command(&lt;binary_and_subcommand&gt;)` — e.g., `command(gh pr list)` (never `command(*)`).
       - `read_file(&lt;absolute_path&gt;)` — e.g., `read_file(/Users/alice/notes)` (never `read_file(*)` or `read_file(/)`).
       - `write_file(&lt;absolute_path&gt;)` — e.g., `write_file(/Users/alice/digests)` (never `write_file(*)` or `write_file(/)`).
       - `mcp(&lt;server_name&gt;/&lt;tool_name&gt;)` — e.g., `mcp(buganizer/get_bugs)` (only for real MCP tools actually called; never `mcp(*)`).
       - `read_url(&lt;domain&gt;)` / `execute_url(&lt;domain&gt;)` — e.g., `read_url(github.com)` (never `read_url(*)`).
   - Also update the prompt in `args` if the test run revealed specific skill paths or CLI flags that will help future scheduled runs succeed reliably using those exact granted commands.
3. **Final confirmation with the Automation Name**:
   - Summarize the verified permissions added to **`&lt;display_name&gt;`** (`&lt;sidecar-id&gt;`) and remind the user to enable **`&lt;display_name&gt;`** in the **Automations** dashboard:
     `[Open Automations Dashboard](sidecar://dashboard)`

