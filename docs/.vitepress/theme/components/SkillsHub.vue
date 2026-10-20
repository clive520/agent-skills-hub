<template>
  <div class="hub-container">
    <div class="hub-hero">
      <h1 class="hub-title">Agent Skills Hub</h1>
      <p class="hub-subtitle">
        收錄教學簡報、解說動畫、動態設計與生產生態的 AI Agent 技能資料庫。<br>
        支援 Antigravity、Claude Code 與 Codex 跨平台隨取即用。
      </p>
      <div class="hub-stats">
        <span class="stat-pill">⚡ 收錄 {{ allSkills.length }} 項技能</span>
        <span class="stat-pill">📦 開源與模組化</span>
        <span class="stat-pill">🚀 GitHub Pages 即時索引</span>
      </div>
    </div>

    <div class="hub-toolbar">
      <div class="search-box-wrapper">
        <span class="search-icon">🔍</span>
        <input 
          v-model="searchQuery" 
          type="text" 
          class="search-input" 
          placeholder="搜尋技能名稱、關鍵字、標籤或用途說明..." 
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
          <span style="opacity: 0.7; font-size: 0.8em; margin-left: 2px;">
            ({{ cat === '全部' ? allSkills.length : allSkills.filter(s => s.category === cat).length }})
          </span>
        </button>
      </div>
    </div>

    <div style="margin-bottom: 16px; color: var(--vp-c-text-2); font-size: 0.9rem;">
      找到 <strong>{{ filteredSkills.length }}</strong> 項相關技能
    </div>

    <div class="skills-grid">
      <div v-for="skill in filteredSkills" :key="skill.id" class="skill-card">
        <div class="card-top">
          <div class="card-header-meta">
            <span class="badge category">{{ skill.category }}</span>
            <span style="font-size: 0.78rem; color: var(--vp-c-text-3);">{{ skill.filesCount }} 檔案</span>
          </div>
          <h3 class="card-title">
            <a :href="withBase('/skills/' + skill.id)">{{ skill.name }}</a>
          </h3>
          <p class="card-desc">{{ skill.description }}</p>
          <div class="card-tags">
            <span v-for="tag in skill.tags" :key="tag" class="badge tag">#{{ tag }}</span>
          </div>
          <div v-if="skill.dependencies && skill.dependencies.length > 0" style="margin-top: 8px; font-size: 0.8rem; color: #f59e0b;">
            ⚠️ 依賴技能：{{ skill.dependencies.join(', ') }}
          </div>
        </div>

        <div class="card-footer">
          <a :href="withBase('/skills/' + skill.id)" class="btn-details">
            檢視文檔 →
          </a>
          <button class="btn-copy" @click="copyInstall(skill)">
            {{ copiedSkillId === skill.id ? '✅ 已複製！' : '📋 複製安裝' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import allSkills from '../skills-data.json'

const searchQuery = ref('')
const selectedCategory = ref('全部')
const copiedSkillId = ref('')

const categories = computed(() => {
  const cats = ['全部', ...new Set(allSkills.map(s => s.category))]
  return cats
})

const filteredSkills = computed(() => {
  return allSkills.filter(skill => {
    const matchCat = selectedCategory.value === '全部' || skill.category === selectedCategory.value
    const q = searchQuery.value.trim().toLowerCase()
    const matchQuery = !q || 
      skill.name.toLowerCase().includes(q) ||
      skill.description.toLowerCase().includes(q) ||
      skill.tags.some(t => t.toLowerCase().includes(q))
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
