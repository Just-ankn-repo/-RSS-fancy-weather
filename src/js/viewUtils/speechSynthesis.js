/* global window SpeechSynthesisUtterance */
import createTextForSpeech from './createTextForSpeech';

export default class SpeechSynthesis {
  constructor() {
    this.synth = window.speechSynthesis;
    this.message = new SpeechSynthesisUtterance();
    this.message.volume = 1;
    this.message.rate = 1;
    this.message.lang = '';
    this.message.text = '';
    this.init();
  }

  init() {
    window.addEventListener('load', () => this.synth.cancel());
  }

  speechStart(data, isActive) {
    this.speechStop();

    console.log(data, isActive)
    if (data) {
      this.message.lang = data.lang === 'en' ? 'en-US' : 'ru-RU';
    }
    if (isActive) {
      this.message.text = createTextForSpeech(data);
      this.synth.speak(this.message);
    }
  }

  speechStop() {
    this.synth.cancel();
  }

  volume(upOrDown) {
    const newVolume = upOrDown === 'up'
      ? this.message.volume + 0.1
      : this.message.volume - 0.1;
    if (newVolume > 0 && newVolume < 1.1) this.message.volume = newVolume;
    console.log(`speech volume: ${this.message.volume}`);
  }

  rate(slowerOrFaster) {
    const newRate = slowerOrFaster === 'faster'
      ? this.message.rate + 0.1
      : this.message.rate - 0.1;
    if (newRate > 0 && newRate < 10.1) this.message.rate = newRate;
    console.log(`speech rate: ${this.message.rate}`);
  }
}
