/* global window */

export default class SpeechRecognition {
  constructor(controller, synth) {
    this.controller = controller;
    this.synth = synth;
    this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    this.recognition.lang = '';
    this.recognition.interimResults = false;
    this.transcript = '';
  }

  changeLang(lang) {
    this.recognition.lang = lang === 'en' ? 'en-US' : 'ru-RU';
  }

  start(isActive) {
    this.recognition.stop();
    this.recognition.abort();

    const recognize = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.transcript = transcript;
      console.log(this.transcript);
      this.controller.updateData(this.transcript);
      // this.recognition.start();
    };

    if (isActive) {
      this.recognition.start();
      this.recognition.addEventListener('result', recognize);
    } else {
      this.recognition.removeEventListener('result', recognize);
    }
  }
}
