/* global window */
import constants from '../handlers/constants';

export default class SpeechRecognition {
  constructor(controller, synth) {
    this.controller = controller;
    this.synth = synth;
    this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    this.recognition.lang = '';
    this.recognition.interimResults = false;
  }

  changeLang(lang) {
    this.recognition.lang = lang === 'en' ? 'en-US' : 'ru-RU';
  }

  start(isActive) {
    this.recognition.stop();
    this.recognition.abort();

    const cycle = () => {
      if (constants.switchMicrophoneButton.classList.contains('active')) {
        this.recognition.start();
      } else {
        this.recognition.removeEventListener('end', cycle);
      }
    };

    const recognize = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');

      if (transcript.includes('английском') || transcript.includes('English')) {
        constants.changeLangSellector.value = 'en';
        const newEvent = new Event('change');
        constants.changeLangSellector.dispatchEvent(newEvent);
      } else if (transcript.includes('белорусском') || transcript.includes('Belarusian')) {
        constants.changeLangSellector.value = 'be';
        const newEvent = new Event('change');
        constants.changeLangSellector.dispatchEvent(newEvent);
      } else if (transcript.includes('русском') || transcript.includes('Russian')) {
        constants.changeLangSellector.value = 'ru';
        const newEvent = new Event('change');
        constants.changeLangSellector.dispatchEvent(newEvent);
      } else if (transcript.includes('погода') || transcript.includes('weather')) {
        if (constants.speechWeatherButton.classList.contains('active')) this.synth.speechStart(null, true);
      } else if (transcript.includes('остановись') || transcript.includes('stop')) {
        if (constants.speechWeatherButton.classList.contains('active')) this.synth.speechStop();
      } else if (transcript.includes('Включи звук') || transcript.includes('enable sound')) {
        if (!constants.speechWeatherButton.classList.contains('active')) constants.speechWeatherButton.click();
      } else if (transcript.includes('Выключи звук') || transcript.includes('disable sound')) {
        if (constants.speechWeatherButton.classList.contains('active')) constants.speechWeatherButton.click();
      } else if (transcript.includes('сделай громче') || transcript.includes('volume up')) {
        this.synth.volume('up');
      } else if (transcript.includes('сделай тише') || transcript.includes('volume down')) {
        this.synth.volume('down');
      } else if (transcript.includes('сделай быстрее') || transcript.includes('speed up')) {
        this.synth.rate('faster');
      } else if (transcript.includes('сделай медленнее') || transcript.includes('speed down')) {
        this.synth.rate('slower');
      } else if (transcript.includes('градусы Цельсия') || transcript.includes('degree Celsius')) {
        constants.metricUnitsButton.click();
      } else if (transcript.includes('градусы Фаренгейта') || transcript.includes('degree Fahrenheit')) {
        constants.imperialUnitsButton.click();
      } else if (transcript.includes('Обнови') || transcript.includes('update')) {
        constants.updateBackgroundButton.click();
      } else if (transcript.includes('Найди меня') || transcript.includes('find me')) {
        constants.findGeolocationButton.click();
      } else if (transcript.includes('ошибки') || transcript.includes('show errors')) {
        constants.errorList.click();
      } else {
        console.log(`recognized: ${transcript}`);
        constants.searchInput.value = transcript;
        constants.queryLoader.style.display = 'block';
        this.controller.updateData(transcript);
      }
    };

    if (isActive) {
      this.recognition.start();
      this.recognition.addEventListener('result', recognize);
      this.recognition.addEventListener('end', cycle);
    } else {
      this.recognition.removeEventListener('result', recognize);
    }
  }
}
