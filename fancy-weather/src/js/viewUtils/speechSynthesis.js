/* global window SpeechSynthesisUtterance */
import createTextForSpeech from './createTextForSpeech';

export default class SpeechSynthesis {
  constructor(view) {
    this.view = view;
    this.synth = window.speechSynthesis;
    this.message = new SpeechSynthesisUtterance();
    this.message.volume = 5;
    this.message.rate = 1;
    this.message.lang = '';
    this.message.text = '';
    this.init();
  }

  init() {
    window.addEventListener('load', () => this.synth.cancel());
  }

  speech(data, isActive) {
    this.synth.cancel();
    if (isActive) {
      this.message.lang = data.lang === 'en' ? 'en-US' : 'ru-RU';
      this.message.text = createTextForSpeech(data);
      this.synth.speak(this.message);
    }
  }

  volume(upOrDown) {
    const { volume } = this.message;
    if (volume > 0.1 && volume < 1) this.message.volume = upOrDown === 'faster' ? volume + 0.1 : volume - 0.1;
  }

  rate(slowerOrFaster) {
    const { rate } = this.message;
    if (rate > 0.1 && rate < 10) this.message.rate = slowerOrFaster === 'faster' ? rate + 0.1 : rate - 0.1;
  }
}
