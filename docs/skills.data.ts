import fs from 'node:fs'
import path from 'node:path'

export default {
  watch: ['./public/skills-data.json'],
  load() {
    const dataPath = path.resolve(__dirname, './public/skills-data.json')
    if (fs.existsSync(dataPath)) {
      return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    }
    return []
  }
}
