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
    alert(`
      Доп функционал: клавиатура + доп. комманды.
      В консоли можно посмотреть некоторые промежуточные данные

      Голосовые комманды работают на языке страницы.
      комманды:

      на английском ---- english --> en интерфейс
      на русском ---- russian --> ru интерфейс
      на белорусском ----  belarusian --> be интерфейс
      погода ---- weather --> озвучить погоду
      остановись ---- stop --> остановить озвучку
      включи звук ---- enable sound --> включить звук
      выключи звук ---- disable sound --> выключить звук
      сделай громче ---- volume up --> озвучка громче
      сделай тише ---- volume down --> озвучка тише
      сделай быстрее ---- speed up --> озвучка быстрее
      сделай медленнее ---- speed down --> озвучка медленнее
      градусы Цельсия ---- degree Celsius --> градусы Цельсия
      градусы Фаренгейта ---- degree Fahrenheit --> градусы Фаренгейта
      обнови фон---- update --> обновить фон
      найди меня ---- find me --> найти по геолокации
    `);
  }

  speechStart(data, isActive) {
    this.speechStop();
    if (data) {
      this.message.text = createTextForSpeech(data);
      this.message.lang = data.lang === 'en' ? 'en-US' : 'ru-RU';
    }
    if (isActive) this.synth.speak(this.message);
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
    console.log(newRate);
    if (newRate > 0 && newRate < 10.1) this.message.rate = newRate;
    console.log(`speech rate: ${this.message.rate}`);
  }
}
