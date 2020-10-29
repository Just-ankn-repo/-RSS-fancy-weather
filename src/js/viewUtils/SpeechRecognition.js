/* global window */
import htmlElements from '../constants/htmlElements';
import checkCommand from './checkCommand';

export default class SpeechRecognition {
  constructor(controller) {
    this.controller = controller;
    this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    this.recognition.lang = '';
    this.recognition.interimResults = false;
    this.recognitionActive = false;
  }

  changeLang(lang) {
    if (this.recognitionActive) {
      this.recognition.abort();
    }
    this.recognition.lang = lang === 'en' ? 'en-US' : 'ru-RU';
  }

  start(isActive) {
    this.recognition.abort();
    this.recognitionActive = isActive;

    const cycle = () => {
      if (htmlElements.switchMicrophoneButton.classList.contains('active')) {
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
      const isCommand = checkCommand(transcript);

      if (!isCommand) {
        htmlElements.searchInput.value = transcript;
        htmlElements.queryLoader.style.display = 'block';
        this.controller.updateData(transcript);
      }

      console.log({
        command: isCommand,
        recognized: transcript,
      });
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
