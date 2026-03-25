class TranslationService {
  async translate(text, targetLang, sourceLang = 'en') {
    return { original: text, translated: `[${targetLang}] ${text}`, sourceLang, targetLang, provider: 'stub' };
  }
  async batchTranslate(texts, targetLang) {
    return Promise.all(texts.map(t => this.translate(t, targetLang)));
  }
}
module.exports = { TranslationService };
