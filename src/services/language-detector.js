const PATTERNS = { es: /\b(el|la|los|las|de|en|que|por|con|una)\b/gi, zh: /[\u4e00-\u9fff]/g, ar: /[\u0600-\u06FF]/g, fr: /\b(le|la|les|des|est|dans|une|pour)\b/gi };
class LanguageDetector {
  detect(text) {
    for (const [lang, pattern] of Object.entries(PATTERNS)) {
      if (pattern.test(text)) return { language: lang, confidence: 0.85 };
    }
    return { language: 'en', confidence: 0.95 };
  }
}
module.exports = { LanguageDetector };
