class TranslationCache {
  constructor() { this.cache = new Map(); }
  _key(text, lang) { return `${lang}:${text.substring(0, 100)}`; }
  get(text, lang) { return this.cache.get(this._key(text, lang)) || null; }
  set(text, lang, translation) { this.cache.set(this._key(text, lang), { translation, cachedAt: new Date().toISOString() }); }
  invalidate(text, lang) { this.cache.delete(this._key(text, lang)); }
}
module.exports = { TranslationCache };
