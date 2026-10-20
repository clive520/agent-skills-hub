<template>
  <div class="hub-container">
    <div class="hub-hero">
      <div class="lang-switch-toggle-bar">
        <button 
          :class="['lang-pill-btn', { active: currentLang === 'zh' }]" 
          @click="setLanguage('zh')"
        >
          🇹🇼 繁體中文版本
        </button>
        <button 
          :class="['lang-pill-btn', { active: currentLang === 'en' }]" 
          @click="setLanguage('en')"
        >
          🇬🇧 English Version
        </button>
      </div>

      <h1 class="hub-title">Agent Skills Hub ⚡</h1>
      <p class="hub-subtitle">
        <template v-if="currentLang === 'zh'">
          收錄教學簡報、解說動畫、HyperFrames 影音引擎、動態設計與生產生態的 AI Agent 技能資料庫。<br>
          支援 Antigravity、Claude Code 與 Codex 跨平台隨取即用。
        </template>
        <template v-else>
          Curated AI Agent skills database covering teaching decks, explainer animations, HyperFrames video engine, and creative workflows.<br>
          Ready to use across Google Antigravity, Claude Code, and OpenAI Codex.
        </template>
      </p>

      <div class="hub-stats">
        <span class="stat-pill">⚡ {{ currentLang === 'zh' ? `收錄 ${allSkills.length} 項技能` : `${allSkills.length} Skills Included` }}</span>
        <span class="stat-pill">🌐 {{ currentLang === 'zh' ? '中英雙語對照' : 'Bilingual EN/ZH' }}</span>
        <span class="stat-pill">📦 {{ currentLang === 'zh' ? '開源與模組化' : 'Open Source & Modular' }}</span>
        <span class="stat-pill">🚀 {{ currentLang === 'zh' ? 'GitHub Pages 即時索引' : 'GitHub Pages Live Index' }}</span>
      </div>
    </div>

    <div class="hub-toolbar">
      <div class="search-box-wrapper">
        <span class="search-icon">🔍</span>
        <input 
          v-model="searchQuery" 
          type="text" 
          class="search-input" 
          :placeholder="currentLang === 'zh' ? '搜尋技能名稱、中英文關鍵字、標籤或用途說明...' : 'Search skills by name, keywords, tags, or description...'" 
        >
      </div>

      <div class="category-chips">
        <button 
          v-for="cat in categories" 
          :key="cat"
          :class="['chip-btn', { active: selectedCategory === cat }]"
          @click="selectedCategory = cat"
        >
          {{ cat }}
          <span style="opacity: 0.7; font-size: 0.8em; margin-left: 3px;">
            ({{ getCategoryCount(cat) }})
          </span>
        </button>
      </div>
    </div>

    <div style="margin-bottom: 16px; color: var(--vp-c-text-2); font-size: 0.9rem;">
      <template v-if="currentLang === 'zh'">
        找到 <strong>{{ filteredSkills.length }}</strong> 項相關技能
      </template>
      <template v-else>
        Found <strong>{{ filteredSkills.length }}</strong> matching skills
      </template>
    </div>

    <div class="skills-grid">
      <div v-for="skill in filteredSkills" :key="skill.id" class="skill-card">
        <div class="card-top">
          <div class="card-header-meta">
            <span class="badge category">{{ currentLang === 'zh' ? skill.categoryZh : skill.categoryEn }}</span>
            <span style="font-size: 0.78rem; color: var(--vp-c-text-3);">{{ skill.filesCount }} {{ currentLang === 'zh' ? '檔案' : 'files' }}</span>
          </div>

          <h3 class="card-title">
            <a :href="getSkillLink(skill.id)">
              {{ skill.id }}
            </a>
          </h3>

          <div class="card-subtitle">
            {{ currentLang === 'zh' ? skill.titleZh : skill.titleEn }}
            <span class="card-alt-title">· {{ currentLang === 'zh' ? skill.titleEn : skill.titleZh }}</span>
          </div>

          <p class="card-desc">
            {{ currentLang === 'zh' ? skill.descZh : skill.descEn }}
          </p>

          <div class="card-tags">
            <span 
              v-for="tag in (currentLang === 'zh' ? skill.tagsZh : skill.tagsEn)" 
              :key="tag" 
              class="badge tag"
            >
              #{{ tag }}
            </span>
          </div>

          <div v-if="skill.dependencies && skill.dependencies.length > 0" class="card-deps">
            ⚠️ {{ currentLang === 'zh' ? '相依技能' : 'Dependencies' }}：{{ skill.dependencies.join(', ') }}
          </div>
        </div>

        <div class="card-footer">
          <a :href="getSkillLink(skill.id)" class="btn-details">
            {{ currentLang === 'zh' ? '檢視文檔 →' : 'View Docs →' }}
          </a>
          <button class="btn-copy" @click="copyInstall(skill)">
            {{ copiedSkillId === skill.id ? (currentLang === 'zh' ? '✅ 已複製！' : '✅ Copied!') : (currentLang === 'zh' ? '📋 複製安裝' : '📋 Copy Install') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { withBase, useData } from 'vitepress'
import allSkills from '../skills-data.json'

const { localeIndex } = useData()

const currentLang = ref('zh')
const searchQuery = ref('')
const selectedCategory = ref('全部')
const copiedSkillId = ref('')

onMounted(() => {
  if (localeIndex.value === 'en') {
    currentLang.value = 'en'
    selectedCategory.value = 'All'
  } else {
    currentLang.value = 'zh'
    selectedCategory.value = '全部'
  }
})

function setLanguage(lang) {
  currentLang.value = lang
  if (lang === 'zh') {
    selectedCategory.value = '全部'
  } else {
    selectedCategory.value = 'All'
  }
}

function getSkillLink(id) {
  if (currentLang.value === 'en') {
    return withBase(`/en/skills/${id}`)
  }
  return withBase(`/skills/${id}`)
}

const categories = computed(() => {
  if (currentLang.value === 'zh') {
    return ['全部', ...new Set(allSkills.map(s => s.categoryZh))]
  } else {
    return ['All', ...new Set(allSkills.map(s => s.categoryEn))]
  }
})

function getCategoryCount(cat) {
  if (currentLang.value === 'zh') {
    if (cat === '全部') return allSkills.length
    return allSkills.filter(s => s.categoryZh === cat).length
  } else {
    if (cat === 'All') return allSkills.length
    return allSkills.filter(s => s.categoryEn === cat).length
  }
}

const filteredSkills = computed(() => {
  return allSkills.filter(skill => {
    let matchCat = false
    if (currentLang.value === 'zh') {
      matchCat = selectedCategory.value === '全部' || skill.categoryZh === selectedCategory.value
    } else {
      matchCat = selectedCategory.value === 'All' || skill.categoryEn === selectedCategory.value
    }

    const q = searchQuery.value.trim().toLowerCase()
    if (!q) return matchCat

    const matchQuery = 
      skill.id.toLowerCase().includes(q) ||
      skill.titleZh.toLowerCase().includes(q) ||
      skill.titleEn.toLowerCase().includes(q) ||
      skill.descZh.toLowerCase().includes(q) ||
      skill.descEn.toLowerCase().includes(q) ||
      skill.tagsZh.some(t => t.toLowerCase().includes(q)) ||
      skill.tagsEn.some(t => t.toLowerCase().includes(q))

    return matchCat && matchQuery
  })
})

function copyInstall(skill) {
  const cmd = `git clone https://github.com/clive520/agent-skills-hub.git /tmp/hub && cp -r /tmp/hub/skills/${skill.id} ~/.gemini/config/skills/ && rm -rf /tmp/hub`
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(cmd).then(() => {
      copiedSkillId.value = skill.id
      setTimeout(() => {
        if (copiedSkillId.value === skill.id) copiedSkillId.value = ''
      }, 2000)
    })
  }
}
</script>
