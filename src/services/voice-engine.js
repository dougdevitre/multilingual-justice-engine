class VoiceEngine {
  async textToSpeech(text, lang = 'en') { return { audio: null, text, lang, provider: 'stub' }; }
  async speechToText(audioBuffer, lang = 'en') { return { text: '[transcribed text]', lang, confidence: 0.9 }; }
}
module.exports = { VoiceEngine };
