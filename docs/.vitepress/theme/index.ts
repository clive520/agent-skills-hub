import DefaultTheme from 'vitepress/theme'
import SkillsHub from './components/SkillsHub.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SkillsHub', SkillsHub)
  }
}
