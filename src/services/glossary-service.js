const fs = require('fs'); const path = require('path');
class GlossaryService {
  constructor() { this.glossaries = new Map(); this.loadAll(); }
  loadAll() {
    const dir = path.join(__dirname, '../glossaries');
    for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
      const lang = file.replace('legal-terms-', '').replace('.json', '');
      this.glossaries.set(lang, JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8')));
    }
  }
  lookup(term, lang) { const g = this.glossaries.get(lang); return g ? g.find(t => t.english.toLowerCase() === term.toLowerCase()) : null; }
  getGlossaryByLanguage(lang) { return this.glossaries.get(lang) || []; }
}
module.exports = { GlossaryService };
