const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const rootDir = path.resolve(__dirname, "..");
const skillsDir = path.join(rootDir, "skills");
const docsDir = path.join(rootDir, "docs");
const publicDir = path.join(docsDir, "public");
const skillsZhDocsDir = path.join(docsDir, "skills");
const skillsEnDocsDir = path.join(docsDir, "en", "skills");

// Ensure target directories exist
fs.mkdirSync(publicDir, { recursive: true });
fs.mkdirSync(skillsZhDocsDir, { recursive: true });
fs.mkdirSync(skillsEnDocsDir, { recursive: true });
fs.mkdirSync(path.join(docsDir, ".vitepress"), { recursive: true });

// Complete bilingual metadata dictionary
const SKILLS_DICT = {
  "soil-teaching-deck": {
    titleZh: "SOIL 全科教學簡報六引擎",
    titleEn: "SOIL Universal Teaching Deck (6 Engines)",
    categoryZh: "教學簡報",
    categoryEn: "Teaching Decks",
    descZh: "SOIL 全科教學簡報六引擎工作流（各科通用、零金鑰原生 PptxGenJS）。從教材定位、認知編修到代碼輸出，打造高學習成效的教學投影片。",
    descEn: "SOIL universal teaching deck workflow with 6 layout engines (subject-agnostic, zero-API-key native PptxGenJS). Guides teachers from curriculum planning to high-impact slides.",
    tagsZh: ["SOIL教學法", "PptxGenJS", "教學簡報", "六引擎", "通科適用"],
    tagsEn: ["SOIL Method", "PptxGenJS", "Teaching Deck", "6 Engines", "Universal"],
    dependencies: []
  },
  "soil-motion-deck": {
    titleZh: "動畫教學簡報 (SOIL + HyperFrames)",
    titleEn: "Animated Teaching Deck (SOIL + HyperFrames)",
    categoryZh: "教學簡報",
    categoryEn: "Teaching Decks",
    descZh: "動畫教學簡報：結合 SOIL 六引擎與 HyperFrames 解說動畫，一次產出 PPTX 簡報與 MP4 影片，關鍵頁面無縫嵌入靜音循環動畫片段。",
    descEn: "Animated teaching deck: combines SOIL 6 engines with HyperFrames explainer motion to generate both PPTX and MP4 with embedded silent animation clips.",
    tagsZh: ["SOIL教學法", "PptxGenJS", "HyperFrames", "解說動畫", "簡報嵌入"],
    tagsEn: ["SOIL Method", "PptxGenJS", "HyperFrames", "Explainer Animation", "Deck Embedding"],
    dependencies: ["soil-teaching-deck", "motion-explainer"]
  },
  "motion-explainer": {
    titleZh: "HyperFrames 原理解說動畫影片",
    titleEn: "HyperFrames Motion Explainer Video",
    categoryZh: "解說動畫",
    categoryEn: "Explainer Videos",
    descZh: "HyperFrames 原理解說動畫影片端到端生成流程：中文旁白配音 + 精確時間軸字幕 + 三色品牌主題 + 視覺自我審查循環。",
    descEn: "HyperFrames animated explainer video production workflow: Chinese voiceover + synced captions + 3-color theme + visual self-review loop.",
    tagsZh: ["HyperFrames", "edge-tts", "原理解說", "科普影片", "繁體中文"],
    tagsEn: ["HyperFrames", "edge-tts", "Explainer Video", "Knowledge Video", "Traditional Chinese"],
    dependencies: ["motion-design", "review-loop"]
  },
  "faceless-explainer": {
    titleZh: "純文字轉無人解說動畫影片",
    titleEn: "Text-to-Faceless Explainer Video",
    categoryZh: "解說動畫",
    categoryEn: "Explainer Videos",
    descZh: "將任意文章、筆記或文字提綱轉化為無人解說動畫影片：圖表、數據視覺化、動態文字與分鏡自動編排，無需真實實拍畫面。",
    descEn: "Turn arbitrary text into a faceless explainer video: typography, abstract graphics, diagrams, and data-viz invented per scene without live footage.",
    tagsZh: ["HyperFrames", "無人解說", "文字轉影片", "知識科普", "分鏡腳本"],
    tagsEn: ["HyperFrames", "Faceless Explainer", "Text to Video", "Knowledge", "Storyboard"],
    dependencies: ["hyperframes", "hyperframes-creative", "media-use"]
  },
  "hyperframes": {
    titleZh: "HyperFrames 動態影音全域路由總入口",
    titleEn: "HyperFrames Master Video Router & Entrypoint",
    categoryZh: "工作流調度",
    categoryEn: "Workflow Routing",
    descZh: "HyperFrames 動態影音全域總入口：意圖捕獲、專案狀態恢復、工作流路由調度與全領域技能編排。",
    descEn: "Mandatory entry point for creating, editing, and rendering any HyperFrames video, animation, or motion graphic. Manages state and routes workflows.",
    tagsZh: ["HyperFrames", "影片路由", "動畫入口", "動態圖像", "工作流調度"],
    tagsEn: ["HyperFrames", "Video Routing", "Animation Entry", "Motion Graphics", "Workflow Dispatch"],
    dependencies: ["hyperframes-core", "hyperframes-cli"]
  },
  "hyperframes-core": {
    titleZh: "HyperFrames 核心架構與合約規範",
    titleEn: "HyperFrames Core Architecture & Contracts",
    categoryZh: "核心架構",
    categoryEn: "Core Architecture",
    descZh: "HyperFrames 核心合約：確定性時間軸、DOM data-* 屬性、子合成架構、seek-safe 任意尋軌與媒體播放規範。",
    descEn: "Core architecture: data attributes, sub-compositions, determinism, seek-safe paused timeline, and composition contracts.",
    tagsZh: ["HyperFrames", "核心合約", "確定性時間軸", "子合成", "DOM架構"],
    tagsEn: ["HyperFrames", "Core Contract", "Deterministic Timeline", "Sub-compositions", "DOM Specs"],
    dependencies: []
  },
  "hyperframes-cli": {
    titleZh: "HyperFrames CLI 命令列開發循環",
    titleEn: "HyperFrames CLI Development & Render Loop",
    categoryZh: "開發工具",
    categoryEn: "Developer Tools",
    descZh: "HyperFrames CLI 開發循環命令列：init、add、catalog、preview、lint、check、snapshot、render 與雲端發佈。",
    descEn: "HyperFrames CLI development loop: init, add, catalog, preview, lint, check, single/batch render, and cloud publishing.",
    tagsZh: ["HyperFrames", "CLI工具", "開發循環", "渲染發佈", "代碼除錯"],
    tagsEn: ["HyperFrames", "CLI Tool", "Dev Loop", "Render & Publish", "Diagnostics"],
    dependencies: []
  },
  "hyperframes-animation": {
    titleZh: "HyperFrames 動態知識庫與多引擎配接器",
    titleEn: "HyperFrames Animation Knowledge & Adapters",
    categoryZh: "動態設計",
    categoryEn: "Motion Design",
    descZh: "HyperFrames 動態知識庫：原子運動規則、場景藍圖與 7 大執行期引擎配接（GSAP、Three.js、Lottie、CSS、WAAPI 等）。",
    descEn: "Comprehensive motion knowledge: atomic rules, scene blueprints, transitions, and 7 runtime adapters (GSAP, Lottie, Three.js, etc.).",
    tagsZh: ["HyperFrames", "GSAP", "動畫藍圖", "場景轉場", "Three.js", "Lottie"],
    tagsEn: ["HyperFrames", "GSAP", "Blueprints", "Transitions", "Three.js", "Lottie"],
    dependencies: ["hyperframes-core"]
  },
  "hyperframes-keyframes": {
    titleZh: "2D/3D 關鍵影格與運鏡鏡頭手法",
    titleEn: "2D/3D Keyframing & Camera Moves",
    categoryZh: "動態設計",
    categoryEn: "Motion Design",
    descZh: "2D/3D 關鍵影格、運鏡縮放（Punch-in/out）、Ken Burns 效果、相機平移、遮罩路徑與 SVG 動態變換。",
    descEn: "2D/3D keyframing, punch-in/out, zoom, reframe, Ken Burns treatment, camera moves, and SVG morph/draw.",
    tagsZh: ["HyperFrames", "關鍵影格", "運鏡鏡頭", "Ken Burns", "SVG動畫"],
    tagsEn: ["HyperFrames", "Keyframes", "Camera Moves", "Ken Burns", "SVG Animation"],
    dependencies: ["hyperframes-animation"]
  },
  "hyperframes-creative": {
    titleZh: "視覺創意風格與色彩字型指南",
    titleEn: "Visual Creative & Brand Style Guide",
    categoryZh: "視覺創意",
    categoryEn: "Visual & Creative",
    descZh: "視覺創意風格指南：品牌規範、色板調色盤、字型排版階層、版面構圖與高質感影片防平庸原則。",
    descEn: "Visual creative direction: brand guidelines, palettes, font pairings, visual density, and anti-generic video aesthetics.",
    tagsZh: ["HyperFrames", "視覺風格", "色彩搭配", "字體設計", "創意指引"],
    tagsEn: ["HyperFrames", "Visual Style", "Color Palettes", "Typography", "Creative Guide"],
    dependencies: []
  },
  "hyperframes-audio": {
    titleZh: "音訊混音與聲音工程 (Ducking/EQ)",
    titleEn: "Audio Mixing & Sound Engineering",
    categoryZh: "聲音工程",
    categoryEn: "Audio Engineering",
    descZh: "音訊混音與聲音工程：BGM Ducking 語音避讓、音軌增益、EQ/壓縮效果器、自動化音量包絡線與子混音匯流排。",
    descEn: "Audio mixing for HyperFrames: fade, crossfade, track gain, voiceover ducking, EQ, compressor, limiter, and automation envelopes.",
    tagsZh: ["HyperFrames", "音訊混音", "BGM Ducking", "音效處理", "聲音包絡"],
    tagsEn: ["HyperFrames", "Audio Mixing", "BGM Ducking", "Audio FX", "Volume Automation"],
    dependencies: ["hyperframes-core"]
  },
  "hyperframes-registry": {
    titleZh: "Registry 預置模組與組件庫檢索",
    titleEn: "Registry Blocks & Components Library",
    categoryZh: "組件模組",
    categoryEn: "Components & Blocks",
    descZh: "Registry 模組庫：快速搜尋、安裝與銜接數百款預置 Block 與 UI 動效組件（圖表、代碼終端、掃描線、微光等）。",
    descEn: "Search, install, and wire registry blocks and components into compositions (CRT scanlines, glitch, charts, code terminal, etc.).",
    tagsZh: ["HyperFrames", "Registry", "預置模組", "視覺組件", "Block安裝"],
    tagsEn: ["HyperFrames", "Registry", "Prebuilt Blocks", "Visual Components", "Block Install"],
    dependencies: []
  },
  "hyperframes-studio": {
    titleZh: "Studio 介面協同與時間軸排版規範",
    titleEn: "Studio Collaboration & Timeline Specs",
    categoryZh: "工作流調度",
    categoryEn: "Workflow Routing",
    descZh: "Studio 介面協同規範：影片規劃階段、意圖溝通原則、時間軸軌道階層與內容安全框規範。",
    descEn: "HyperFrames Studio collaboration guidelines, communication principles, timeline track hierarchy, and safe zones.",
    tagsZh: ["HyperFrames", "Studio", "時間軸規範", "安全區域", "協同製作"],
    tagsEn: ["HyperFrames", "Studio", "Timeline Specs", "Safe Zones", "Collaboration"],
    dependencies: ["hyperframes-core"]
  },
  "media-use": {
    titleZh: "多媒體資產 OS (語音/音效/圖像/標誌)",
    titleEn: "Agent Media OS (TTS / SFX / Images / Logos)",
    categoryZh: "媒體資源",
    categoryEn: "Media Assets",
    descZh: "多媒體資產 OS：單一動詞 resolve 解析 BGM、音效、語音合成 (TTS)、品牌標誌與圖像，並提供色彩風格校正。",
    descEn: "Agent Media OS: resolve BGM, SFX, image, icon, brand logo, voice, and color grade into frozen assets with one verb.",
    tagsZh: ["HyperFrames", "多媒體OS", "音效BGM", "語音合成", "Logo圖像", "資產解析"],
    tagsEn: ["HyperFrames", "Media OS", "SFX & BGM", "TTS Voice", "Brand Logos", "Asset Resolve"],
    dependencies: []
  },
  "motion-design": {
    titleZh: "動態設計品味與節奏規則",
    titleEn: "Motion Design Principles & Pacing",
    categoryZh: "動態設計",
    categoryEn: "Motion Design",
    descZh: "動態設計品味與節奏規則（時間軸、緩動曲線、彈簧手感、繁中字體、三色配色與閱讀停留時間）。",
    descEn: "Motion design aesthetics and pacing rules (timeline, easing curves, spring physics, typography, 3-color palettes, and pause durations).",
    tagsZh: ["HyperFrames", "動態設計", "緩動曲線", "時間軸", "視覺節奏"],
    tagsEn: ["HyperFrames", "Motion Design", "Easing Curves", "Timeline", "Visual Rhythm"],
    dependencies: []
  },
  "review-loop": {
    titleZh: "動畫多影格視覺自我審查循環",
    titleEn: "Animation Visual Self-Review Loop",
    categoryZh: "審查機制",
    categoryEn: "Review & QA",
    descZh: "動畫影片的視覺自我審查循環：輸出草稿、在每個節拍截圖拼成 Contact Sheet、逐張對照檢查表修正與品質把關。",
    descEn: "Visual self-review loop for motion videos: export draft, tile snapshot contact sheets at each beat, and cross-reference checklists.",
    tagsZh: ["HyperFrames", "Contact Sheet", "多影格審查", "品質驗證"],
    tagsEn: ["HyperFrames", "Contact Sheet", "Multi-frame Review", "QA Validation"],
    dependencies: []
  },
  "visual-line-sticker-production": {
    titleZh: "LINE 靜態貼圖生產與打包工作流",
    titleEn: "LINE Static Sticker Production & Packaging",
    categoryZh: "圖像與貼圖",
    categoryEn: "Graphics & Stickers",
    descZh: "LINE 靜態貼圖全套生產、角色設計一致性保持、審核規範驗證（尺寸/邊距/透明度）與 ZIP 打包工作流。",
    descEn: "Create, iterate, validate, and package upload-ready static LINE sticker sets with customizable character style and verification.",
    tagsZh: ["LINE貼圖", "角色設計", "貼圖打包", "Creators Market"],
    tagsEn: ["LINE Stickers", "Character Design", "Asset Packaging", "Creators Market"],
    dependencies: []
  },
  "hitl-browser": {
    titleZh: "人機協同瀏覽器操作流程 (HITL)",
    titleEn: "Human-in-the-Loop Browser Automation (HITL)",
    categoryZh: "瀏覽器自動化",
    categoryEn: "Browser Automation",
    descZh: "人機協同瀏覽器操作流程：有頭可視化、持久化 UserDataDir、人工登入/2FA/CAPTCHA 驗證暫停交接、接手後續自動化並保持瀏覽器視窗供審閱。",
    descEn: "Human-in-the-loop browser automation: visible browser, persistent UserDataDir, manual login/2FA/CAPTCHA handoff, seamless resumption, and window preservation for review.",
    tagsZh: ["Playwright", "瀏覽器自動化", "人機協同", "2FA驗證", "CAPTCHA", "持久化Cookie"],
    tagsEn: ["Playwright", "Browser Automation", "HITL", "2FA Auth", "CAPTCHA", "Persistent Session"],
    dependencies: []
  },
  "rdq-method": {
    titleZh: "RDQ 需求探索四象限法",
    titleEn: "RDQ Method (Requirements Discovery Quadrant)",
    categoryZh: "需求分析與訪談",
    categoryEn: "Requirements Discovery",
    descZh: "RDQ 需求探索四象限法：在動工之前用四象限（Ⅰ已知明說/Ⅱ想問解答/Ⅲ追問補全/Ⅳ菜單建議）結構化訪談，產出一頁需求規格卡，徹底防止返工。",
    descEn: "Requirements Discovery Quadrant Method: pre-execution structured elicitation using 4 quadrants to produce a 1-page requirement spec card and eliminate rework.",
    tagsZh: ["RDQ方法", "需求工程", "結構化訪談", "規格卡", "防返工", "OpenCode"],
    tagsEn: ["RDQ Method", "Requirements Engineering", "Structured Interview", "Spec Card", "Anti-Rework", "OpenCode"],
    dependencies: []
  },
  "nlm-skill": {
    titleZh: "Gemini Notebook (NotebookLM) CLI 與 MCP 專家",
    titleEn: "Gemini Notebook (NotebookLM) CLI & MCP Expert",
    categoryZh: "AI 知識庫與筆記",
    categoryEn: "AI Knowledge & Notebooks",
    descZh: "Gemini Notebook（原 Google NotebookLM）CLI 工具 (nlm) 與 MCP 伺服器專家指南：筆記本管理、Podcast 語音對談、深入報告、心智圖與研究工作流。",
    descEn: "Expert guide for Gemini Notebook (NotebookLM) CLI (nlm) and MCP server: notebook management, Audio Overviews (Podcasts), reports, mind maps, quizzes, and research pipelines.",
    tagsZh: ["NotebookLM", "Gemini", "nlm-cli", "MCP", "AI播客", "知識庫"],
    tagsEn: ["NotebookLM", "Gemini", "nlm-cli", "MCP", "Audio Overviews", "Knowledge Base"],
    dependencies: []
  },
  "android-cli": {
    titleZh: "Android CLI 開發與虛擬設備專員",
    titleEn: "Android CLI & Virtual Device Specialist",
    categoryZh: "移動端開發",
    categoryEn: "Mobile Development",
    descZh: "Android CLI 命令列工具操作指南：專案建立、實體與虛擬設備 (AVD) 運行、UI 截圖檢視、SDK 元件管理與 Journey 流程自動化測試。",
    descEn: "Android CLI operations: project creation, physical/virtual device execution, UI screenshots, SDK component management, and automated journey tests.",
    tagsZh: ["Android", "CLI工具", "AVD模擬器", "移動開發", "UI檢視", "SDK管理"],
    tagsEn: ["Android", "CLI Tool", "AVD Emulator", "Mobile Dev", "UI Inspection", "SDK Management"],
    dependencies: []
  },
  "google-antigravity-sdk": {
    titleZh: "Google Antigravity SDK 自主代理開發",
    titleEn: "Google Antigravity SDK Agent Architecture",
    categoryZh: "Agent 開發框架",
    categoryEn: "Agent Frameworks",
    descZh: "使用 Google Antigravity (AGY) SDK 設計、實作與除錯自主 AI Agent 以及多 Agent 協同系統，涵蓋生命週期、工具掛載與跨代理編排。",
    descEn: "Design, implement, and debug autonomous AI agents and multi-agent systems using the Google Antigravity (AGY) SDK with lifecycle and tool orchestration.",
    tagsZh: ["Antigravity", "Python SDK", "多代理系統", "自主Agent", "協同編排"],
    tagsEn: ["Antigravity", "Python SDK", "Multi-Agent", "Autonomous Agents", "Orchestration"],
    dependencies: []
  },
  "generative-ui": {
    titleZh: "生成式互動介面與 HTML 小部件",
    titleEn: "Generative UI & Interactive HTML Widgets",
    categoryZh: "生成式 UI",
    categoryEn: "Generative UI",
    descZh: "在 Agent 對話中或作為獨立 Artifact 渲染豐富且具互動性的 HTML 介面、動態圖表、數據視覺化小部件與控制面板。",
    descEn: "Render custom, rich, interactive HTML widgets and visual controls inline in chat or as standalone artifacts for diagrams, charts, and interactive walkthroughs.",
    tagsZh: ["生成式UI", "HTML部件", "數據視覺化", "互動式介面", "Artifacts"],
    tagsEn: ["Generative UI", "HTML Widgets", "Data Viz", "Interactive UI", "Artifacts"],
    dependencies: []
  },
  "automation": {
    titleZh: "背景排程與自動化工作流",
    titleEn: "Scheduled Background Automations",
    categoryZh: "背景自動化",
    categoryEn: "Scheduled Automations",
    descZh: "設計與建立後台定時排程自動化任務（Scheduled Automations）：Cron 表達式、定時觸發全新 Agent 對話與常態性維護任務執行。",
    descEn: "Design and create scheduled background automations using cron expressions and sidecars to start fresh agent conversations for recurring tasks.",
    tagsZh: ["Cron排程", "背景自動化", "定時任務", "Sidecar", "Agent自動化"],
    tagsEn: ["Cron Schedule", "Background Automation", "Recurring Tasks", "Sidecar", "Agent Automation"],
    dependencies: []
  },
  "antigravity-guide": {
    titleZh: "Google Antigravity 2.0 完整開發指南",
    titleEn: "Google Antigravity 2.0 Comprehensive Guide",
    categoryZh: "平台指南",
    categoryEn: "Platform Guides",
    descZh: "Google Antigravity (AGY) 綜合指南與功能地圖：Antigravity CLI (agy)、IDE 介面、斜線指令、快捷鍵、Skills 與 MCP 客製化系統。",
    descEn: "Comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), CLI (agy), 2.0 architecture, IDE, slash commands, and customizations.",
    tagsZh: ["Antigravity", "AGY指南", "CLI工具", "快捷鍵", "客製化", "技能生態"],
    tagsEn: ["Antigravity", "AGY Guide", "CLI Tool", "Keybindings", "Customizations", "Skills Eco"],
    dependencies: []
  }
};


const VALID_HTML_TAGS = new Set([
  'div', 'span', 'details', 'summary', 'a', 'p', 'br', 'hr', 'strong', 'em', 'b', 'i',
  'code', 'pre', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'img',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'section', 'article', 'skillshub'
]);

function sanitizeForVitePress(markdown) {
  if (!markdown) return '';
  const lines = markdown.split(/\r?\n/);
  let inCodeBlock = false;
  return lines.map((line) => {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return line;
    }
    if (inCodeBlock) return line;
    // Replace unescaped <tag> that is not a recognized HTML tag
    return line.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9_\-:]*)([^>]*)>/g, (match, slash, tag, rest) => {
      if (VALID_HTML_TAGS.has(tag.toLowerCase())) {
        return match;
      }
      return `&lt;${slash}${tag}${rest}&gt;`;
    });
  }).join('\n');
}

function parseFrontmatter(rawContent) {
  try {
    const parsed = matter(rawContent);
    return { data: parsed.data || {}, content: parsed.content || "" };
  } catch (err) {
    const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return { data: {}, content: rawContent };
    const body = rawContent.slice(match[0].length).trim();
    return { data: {}, content: body };
  }
}

function getFileList(dir) {
  const files = [];
  function walk(currentDir, relPath = "") {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relative = relPath ? `${relPath}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        walk(fullPath, relative);
      } else {
        files.push(relative);
      }
    }
  }
  if (fs.existsSync(dir)) {
    walk(dir);
  }
  return files;
}

const skills = [];
const skillDirs = fs.readdirSync(skillsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const id of skillDirs) {
  const skillPath = path.join(skillsDir, id);
  const skillZhFile = path.join(skillPath, "SKILL_ZH.md");
  const skillEnFile = path.join(skillPath, "SKILL_EN.md");
  const defaultFile = path.join(skillPath, "SKILL.md");

  const rawZh = fs.existsSync(skillZhFile) ? fs.readFileSync(skillZhFile, "utf-8") : fs.readFileSync(defaultFile, "utf-8");
  const rawEn = fs.existsSync(skillEnFile) ? fs.readFileSync(skillEnFile, "utf-8") : fs.readFileSync(defaultFile, "utf-8");

  const parsedZh = parseFrontmatter(rawZh);
  const parsedEn = parseFrontmatter(rawEn);

  const dict = SKILLS_DICT[id] || {
    titleZh: id,
    titleEn: id,
    categoryZh: "通用技能",
    categoryEn: "General Skills",
    descZh: parsedZh.data.description || "",
    descEn: parsedEn.data.description || "",
    tagsZh: ["Agent Skill", "Antigravity"],
    tagsEn: ["Agent Skill", "Antigravity"],
    dependencies: []
  };

  const files = getFileList(skillPath);

  const skillInfo = {
    id,
    name: id,
    titleZh: dict.titleZh,
    titleEn: dict.titleEn,
    category: dict.categoryZh, // default compatibility
    categoryZh: dict.categoryZh,
    categoryEn: dict.categoryEn,
    description: dict.descZh, // default compatibility
    descZh: dict.descZh,
    descEn: dict.descEn,
    dependencies: dict.dependencies,
    tags: dict.tagsZh, // default compatibility
    tagsZh: dict.tagsZh,
    tagsEn: dict.tagsEn,
    filesCount: files.length,
    files,
    hasScripts: files.some((f) => f.startsWith("scripts/")),
    hasTemplates: files.some((f) => f.startsWith("templates/")),
    hasReferences: files.some((f) => f.startsWith("references/")),
    updatedAt: new Date().toISOString().split("T")[0]
  };

  skills.push(skillInfo);

  // 1. Generate Chinese Markdown Page in docs/skills/<id>.md
  const docZhMd = `---
title: "${dict.titleZh} (${id})"
description: "${dict.descZh.replace(/"/g, '\\"')}"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>目前顯示版本：<strong>🇹🇼 繁體中文</strong></span>
  </div>
  <a href="/agent-skills-hub/en/skills/${id}" class="lang-switch-link">
    🇬🇧 點此切換至英文版本 (Switch to English Version) →
  </a>
</div>

# ${id} · ${dict.titleZh}

<div class="skill-subtitle-bar">${dict.titleEn}</div>

<div class="skill-meta-bar">
  <span class="badge category">${dict.categoryZh}</span>
  <span class="badge lang-tag">🇹🇼 繁體中文</span>
  ${dict.tagsZh.map((t) => `<span class="badge tag">#${t}</span>`).join(" ")}
</div>

> **簡介**：${dict.descZh}
>
> **English Summary**: ${dict.descEn}

::: details 快速安裝指令（點擊複製）
::: code-group

\`\`\`bash [Antigravity]
# 安裝到 Antigravity 全域技能目錄
mkdir -p ~/.gemini/config/skills/${id}
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/${id}/* ~/.gemini/config/skills/${id}/
rm -rf /tmp/skills-hub
\`\`\`

\`\`\`bash [Claude Code]
# 安裝到 Claude Code 技能目錄
mkdir -p ~/.claude/skills/${id}
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/${id}/* ~/.claude/skills/${id}/
rm -rf /tmp/skills-hub
\`\`\`

\`\`\`bash [Codex]
# 安裝到 Codex 技能目錄
mkdir -p ~/.agents/skills/${id}
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/${id}/* ~/.agents/skills/${id}/
rm -rf /tmp/skills-hub
\`\`\`

\`\`\`bash [Git Clone 專案]
git clone https://github.com/clive520/agent-skills-hub.git
\`\`\`

:::

${
  dict.dependencies.length > 0
    ? `::: tip 相依技能提示
此技能依賴以下上游技能，建議一同安裝：
${dict.dependencies.map((dep) => `- [${dep}](./${dep}.md)`).join("\n")}
:::`
    : ""
}

::: info 包含的檔案 (${files.length} 個檔案)
${files.map((f) => `- \`${f}\``).join("\n")}
:::

---

## 繁體中文完整說明檔 (SKILL.md)

${sanitizeForVitePress(parsedZh.content)}
`;

  fs.writeFileSync(path.join(skillsZhDocsDir, `${id}.md`), docZhMd, "utf-8");

  // 2. Generate English Markdown Page in docs/en/skills/<id>.md
  const docEnMd = `---
title: "${dict.titleEn} (${id})"
description: "${dict.descEn.replace(/"/g, '\\"')}"
---

<div class="lang-switch-banner">
  <div class="lang-switch-info">
    <span class="lang-icon">🌐</span>
    <span>Current Version: <strong>🇬🇧 English</strong></span>
  </div>
  <a href="/agent-skills-hub/skills/${id}" class="lang-switch-link">
    🇹🇼 點此切換至中文版本 (Switch to Traditional Chinese) →
  </a>
</div>

# ${id} · ${dict.titleEn}

<div class="skill-subtitle-bar">${dict.titleZh}</div>

<div class="skill-meta-bar">
  <span class="badge category">${dict.categoryEn}</span>
  <span class="badge lang-tag">🇬🇧 English</span>
  ${dict.tagsEn.map((t) => `<span class="badge tag">#${t}</span>`).join(" ")}
</div>

> **Description**: ${dict.descEn}
>
> **中文簡介**: ${dict.descZh}

::: details Quick Install Commands (Click to Copy)
::: code-group

\`\`\`bash [Antigravity]
# Install into Antigravity global skills directory
mkdir -p ~/.gemini/config/skills/${id}
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/${id}/* ~/.gemini/config/skills/${id}/
rm -rf /tmp/skills-hub
\`\`\`

\`\`\`bash [Claude Code]
# Install into Claude Code skills directory
mkdir -p ~/.claude/skills/${id}
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/${id}/* ~/.claude/skills/${id}/
rm -rf /tmp/skills-hub
\`\`\`

\`\`\`bash [Codex]
# Install into Codex skills directory
mkdir -p ~/.agents/skills/${id}
git clone https://github.com/clive520/agent-skills-hub.git /tmp/skills-hub
cp -r /tmp/skills-hub/skills/${id}/* ~/.agents/skills/${id}/
rm -rf /tmp/skills-hub
\`\`\`

\`\`\`bash [Git Clone]
git clone https://github.com/clive520/agent-skills-hub.git
\`\`\`

:::

${
  dict.dependencies.length > 0
    ? `::: tip Skill Dependencies
This skill depends on the following upstream skills. We recommend installing them together:
${dict.dependencies.map((dep) => `- [${dep}](./${dep}.md)`).join("\n")}
:::`
    : ""
}

::: info Included Files (${files.length} files)
${files.map((f) => `- \`${f}\``).join("\n")}
:::

---

## Full Skill Documentation (SKILL.md)

${sanitizeForVitePress(parsedEn.content)}
`;

  fs.writeFileSync(path.join(skillsEnDocsDir, `${id}.md`), docEnMd, "utf-8");
}

// 3. Write Homepages
const homeZhMd = `---
layout: page
title: 首頁 - 個人 Agent 技能資料庫
---

<SkillsHub />
`;

const homeEnMd = `---
layout: page
title: Home - Personal AI Agent Skills Hub
---

<SkillsHub />
`;

fs.writeFileSync(path.join(docsDir, "index.md"), homeZhMd, "utf-8");
fs.writeFileSync(path.join(docsDir, "en", "index.md"), homeEnMd, "utf-8");

// 4. Write skills-data.json for instant search
fs.writeFileSync(path.join(publicDir, "skills-data.json"), JSON.stringify(skills, null, 2), "utf-8");
fs.writeFileSync(path.join(docsDir, ".vitepress", "theme", "skills-data.json"), JSON.stringify(skills, null, 2), "utf-8");

// 5. Generate Sidebars
const categoriesZh = [...new Set(skills.map((s) => s.categoryZh))];
const sidebarZh = categoriesZh.map((cat) => ({
  text: cat,
  collapsed: false,
  items: skills
    .filter((s) => s.categoryZh === cat)
    .map((s) => ({ text: `${s.id} · ${s.titleZh}`, link: `/skills/${s.id}` }))
}));

const categoriesEn = [...new Set(skills.map((s) => s.categoryEn))];
const sidebarEn = categoriesEn.map((cat) => ({
  text: cat,
  collapsed: false,
  items: skills
    .filter((s) => s.categoryEn === cat)
    .map((s) => ({ text: `${s.id} · ${s.titleEn}`, link: `/en/skills/${s.id}` }))
}));

fs.writeFileSync(path.join(docsDir, ".vitepress", "sidebar-zh.json"), JSON.stringify(sidebarZh, null, 2), "utf-8");
fs.writeFileSync(path.join(docsDir, ".vitepress", "sidebar-en.json"), JSON.stringify(sidebarEn, null, 2), "utf-8");
fs.writeFileSync(path.join(docsDir, ".vitepress", "sidebar.json"), JSON.stringify(sidebarZh, null, 2), "utf-8");

console.log(`[OK] Successfully processed ${skills.length} skills in both Traditional Chinese & English!`);
