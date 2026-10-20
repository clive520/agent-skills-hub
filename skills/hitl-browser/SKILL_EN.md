---
name: hitl-browser
description: >-
  Human-in-the-Loop (HITL) browser automation workflow. Use when tasks require human intervention for login, CAPTCHA solving, 2FA SMS verification, or SSO authorization. Executes in 3 stages: Stage 1 launches visible Chrome (headless: false) with a persistent profile (userDataDir); Stage 2 pauses automation and prompts user for manual login/auth, waiting for completion confirmation; Stage 3 re-acquires the active page and resumes automation, keeping the window visible throughout and preserving it after completion for user inspection.
---

# Human-in-the-Loop Browser Automation (HITL)

This skill defines the standard procedure for Human-in-the-Loop (HITL) browser automation. It is designed for scenarios where target websites employ CAPTCHAs, SMS two-factor authentication (2FA), Google/third-party OAuth logins, or security mechanisms that prevent fully automated machine logins.

---

## Core Principles

1. **Visual Visibility (`headless: false`)**: The entire workflow must run in headed mode so the user can observe the browser state and intervene manually.
2. **Persistent Profile (`userDataDir`)**: Always mount a persistent profile directory (`userDataDir` or `launchPersistentContext`) so that login sessions, cookies, and local cache persist, eliminating redundant logins.
3. **Proactive Handoff & Wait**: Relinquish control immediately once the target website loads. Output the designated prompt and never take unauthorized page actions or close prematurely.
4. **Seamless Resumption & Keep-Alive**: Once the user confirms completion, acquire the active page and resume automation. Never close the browser upon completion—leave the window open for user review.

---

## Standard Three-Stage Execution Process

### Stage 1: Launch Visible Browser

1. **Browser Configuration**:
   - Mode: `headless: false`.
   - User Profile: Specify a persistent path (e.g., `.browser-profile` in the project directory or an absolute path).
   - Engine: Prefer installed Chrome or Chromium.
2. **Navigate to Target Website**:
   - Launch browser and navigate to the target home/login URL.
   - Maximize or place the window in the visible foreground.

### Stage 2: Handoff to User for Manual Operation

1. **Pause Automation**:
   - Stop script automation immediately upon page load.
   - **Never close the browser window.**
2. **Output Prompt Message**:
   Print the standardized prompt to the terminal or conversation:
   > "Browser opened. Please complete login and authentication in the window. Once done, reply with 'Done' or press Enter here to hand control back to me."
3. **Wait for Ready Signal**:
   - Enter a blocking wait (e.g., waiting for Enter or waiting for user confirmation in chat).
   - Do not trigger any clicks, navigation, or DOM manipulations before receiving explicit confirmation.

### Stage 3: Resume Automation Execution

1. **Capture Active Page**:
   - Upon receiving confirmation, enumerate context pages and grab the active page (if the user opened new tabs, select the latest active tab).
2. **Execute Automation Under Authenticated Session**:
   - Perform downstream tasks (scraping, form submission, downloads, inspection) under the authorized session.
   - Keep the window visible throughout.
3. **Preserve Final Screen**:
   - Report execution results.
   - **Do not call `browser.close()` or terminate the browser process.** Keep the window open for the user to review.

---

## Code Implementation Examples

### Example 1: Playwright (Node.js / TypeScript)

```typescript
import { chromium } from 'playwright';
import * as readline from 'readline';
import * as path from 'path';

async function runHitlBrowser(targetUrl: string, taskCallback: (page: any) => Promise<void>) {
  const userDataDir = path.resolve(process.cwd(), '.browser-profile');
  
  // Stage 1: Launch visible browser with persistent context
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    channel: 'chrome',
    args: ['--start-maximized'],
    viewport: null
  });

  const page = context.pages().length > 0 ? context.pages()[0] : await context.newPage();
  await page.goto(targetUrl);

  // Stage 2: Prompt and hand off to user for manual login
  console.log('\n============================================================');
  console.log('Browser opened. Please complete login & authorization in window.');
  console.log('When finished, press Enter here to return control.');
  console.log('============================================================\n');

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  await new Promise<void>((resolve) => {
    rl.question('Press Enter to confirm handoff: ', () => {
      rl.close();
      resolve();
    });
  });

  // Stage 3: Grab active page and resume automation
  const pages = context.pages();
  const activePage = pages[pages.length - 1] || page;
  console.log('Control regained. Resuming automated workflow...');

  await taskCallback(activePage);

  console.log('Task completed! Browser remains open for review.');
  // Do NOT execute context.close()
}
```

### Example 2: Playwright (Python)

```python
import os
import sys
from playwright.sync_api import sync_playwright

def run_hitl_browser(target_url: str, task_func):
    user_data_dir = os.path.abspath("./.browser-profile")
    
    with sync_playwright() as p:
        # Stage 1: Launch visible Chrome with persistent profile
        context = p.chromium.launch_persistent_context(
            user_data_dir=user_data_dir,
            headless=False,
            channel="chrome",
            args=["--start-maximized"],
            no_viewport=True
        )
        
        page = context.pages[0] if context.pages else context.new_page()
        page.goto(target_url)
        
        # Stage 2: Handoff to user
        print("\n" + "=" * 60)
        print("Browser opened. Please complete login & authorization in window.")
        print("When finished, press Enter here to return control.")
        print("=" * 60 + "\n")
        
        input("Press Enter to continue after login...")
        
        # Stage 3: Acquire active page and execute tasks
        active_page = context.pages[-1]
        print("Control regained. Executing automation...")
        task_func(active_page)
        
        print("Workflow finished! Browser kept open for your review.")
        input("Press Enter after review to close script: ")
```

---

## Edge Cases & Diagnostics

1. **Login timeout or multiple redirect tabs**:
   Always query `context.pages()` before resuming to ensure the pointer attaches to the user's latest active page, rather than the initial redirected page.
2. **Cookie & Session Persistence**:
   Ensure `userDataDir` has full disk read/write permissions and is not pointed at a volatile temporary directory (e.g., `/tmp`).
3. **Handling Script Errors**:
   If an exception occurs during Stage 3, catch and log it, but **do not close the browser**, allowing the user to inspect the DOM state where the failure occurred.
