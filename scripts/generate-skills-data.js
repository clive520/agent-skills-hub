const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const skillsDir = path.join(rootDir, "skills");
const docsDir = path.join(rootDir, "docs");
const publicDir = path.join(docsDir, "public");
const skillsDocsDir = path.join(docsDir, "skills");

// Ensure target directories exist
fs.mkdirSync(publicDir, { recursive: true });
fs.mkdirSync(skillsDocsDir, { recursive: true });
fs.mkdirSync(path.join(docsDir, ".vitepress"), { recursive: true });

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, content };
  
  const yamlBlock = match[1];
  const body = content.slice(match[0].length).trim();
  const data = {};
  
  yamlBlock.split(/\r?\n/).forEach((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let val = line.slice(colonIdx + 1).trim();
      // Remove surrounding quotes if any
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      data[key] = val;
    }
  });

  return { data, content: body };
}

function getSkillCategory(id, desc) {
  if (id.startsWith("soil-")) return "教學簡報";
  if (id === "motion-explainer") return "解說動畫";
  if (id === "motion-design") return "動態設計";
  if (id === "review-loop") return "審查機制";
  if (id.includes("sticker") || id.includes("visual")) return "圖像與貼圖";
  return "通用技能";
}

function getDependencies(id) {
  if (id === "soil-motion-deck") return ["soil-teaching-deck", "motion-explainer"];
  if (id === "motion-explainer") return ["motion-design", "review-loop"];
  return [];
}

function getTags(id, desc) {
  const tagMap = {
    "soil-motion-deck": ["SOIL教學法", "PptxGenJS", "HyperFrames", "解說動畫", "簡報嵌入"],
    "soil-teaching-deck": ["SOIL教學法", "PptxGenJS", "教學簡報", "六引擎", "通科適用"],
    "motion-explainer": ["HyperFrames", "edge-tts", "原理解說", "科普影片", "繁體中文"],
    "motion-design": ["HyperFrames", "動態設計", "緩動曲線", "時間軸", "視覺節奏"],
    "review-loop": ["HyperFrames", "Contact Sheet", "多影格審查", "品質驗證"],
    "visual-line-sticker-production": ["LINE貼圖", "角色設計", "貼圖打包", "Creators Market"]
  };
  return tagMap[id] || ["Agent Skill", "Antigravity"];
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
  const skillFile = path.join(skillPath, "SKILL.md");
  
  if (!fs.existsSync(skillFile)) continue;
  
  const rawContent = fs.readFileSync(skillFile, "utf-8");
  const { data, content } = parseFrontmatter(rawContent);
  
  const name = data.name || id;
  const description = data.description || "";
  const category = getSkillCategory(id, description);
  const dependencies = getDependencies(id);
  const tags = getTags(id, description);
  const files = getFileList(skillPath);

  const skillInfo = {
    id,
    name,
    description,
    category,
    dependencies,
    tags,
    filesCount: files.length,
    files,
    hasScripts: files.some((f) => f.startsWith("scripts/")),
    hasTemplates: files.some((f) => f.startsWith("templates/")),
    hasReferences: files.some((f) => f.startsWith("references/")),
    updatedAt: new Date().toISOString().split("T")[0]
  };

  skills.push(skillInfo);

  // Generate markdown page for this skill in docs/skills/<id>.md
  const docMd = `---
title: "${name}"
description: "${description.replace(/"/g, '\\"')}"
---

# ${name}

<div class="skill-meta-bar">
  <span class="badge category">${category}</span>
  ${tags.map((t) => `<span class="badge tag">#${t}</span>`).join(" ")}
</div>

> **簡介**：${description}

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
  dependencies.length > 0
    ? `::: tip 相依技能提示
此技能依賴以下上游技能，建議一同安裝：
${dependencies.map((dep) => `- [${dep}](./${dep}.md)`).join("\n")}
:::`
    : ""
}

::: info 包含的檔案 (${files.length} 個檔案)
${files.map((f) => `- \`${f}\``).join("\n")}
:::

---

## 技能完整說明檔 (SKILL.md)

${content}
`;

  fs.writeFileSync(path.join(skillsDocsDir, `${id}.md`), docMd, "utf-8");
}

// Write skills-data.json for instant search and index on the homepage
fs.writeFileSync(path.join(publicDir, "skills-data.json"), JSON.stringify(skills, null, 2), "utf-8");
fs.writeFileSync(path.join(docsDir, ".vitepress", "theme", "skills-data.json"), JSON.stringify(skills, null, 2), "utf-8");

// Generate sidebar configuration
const categories = [...new Set(skills.map((s) => s.category))];
const sidebar = categories.map((cat) => ({
  text: cat,
  collapsed: false,
  items: skills
    .filter((s) => s.category === cat)
    .map((s) => ({ text: s.name, link: `/skills/${s.id}` }))
}));

fs.writeFileSync(path.join(docsDir, ".vitepress", "sidebar.json"), JSON.stringify(sidebar, null, 2), "utf-8");

console.log(`[OK] Successfully processed ${skills.length} skills and generated docs!`);
