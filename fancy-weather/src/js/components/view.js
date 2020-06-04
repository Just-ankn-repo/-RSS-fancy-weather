import '../../css/style.css';
import '../../css/controls.css';
import '../../css/map.css';
import '../../css/search.css';
import '../../css/weather.css';
import './virtual-keyboard/index';
import viewUtils from '../viewUtils/index';
import setAllHandlers from '../handlers/setAllHandlers';

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.map = new viewUtils.Mapbox();
    this.clock = new viewUtils.Clock(viewUtils.constants.currentTime);
    this.synth = new viewUtils.SpeechSynthesis();
    this.speechActive = false;
    this.recognition = new viewUtils.SpeechRecognition(this.controller, this.synth);
    this.lastData = {};
  }

  render(data) {
    console.log(data);
    if (data && data !== null) {
      this.lastData = data;
      viewUtils.renderDataOnPage(this.lastData);
      viewUtils.updateBackground(this.lastData.backgroundImage);
      this.map.updateMap(this.lastData.lon, this.lastData.lat);
      this.clock.updateTime(this.lastData.timezone);
    }
    setAllHandlers(this.controller, this, this.lastData.units, this.lastData.lang);
    this.recognition.changeLang(this.lastData.lang);
    if (this.speechActive) this.synth.speechStart(this.lastData, this.speechActive);
  }

  updateBackground(image) {
    viewUtils.updateBackground(image);
    setAllHandlers(this.controller, this);
  }

  speechWeather(isActive) {
    this.speechActive = isActive;
    this.synth.speechStart(this.lastData, isActive);
    setAllHandlers(this.controller, this);
  }

  speechRecognition(isActive) {
    this.recognition.changeLang(this.lastData.lang);
    this.recognition.start(isActive);
    setAllHandlers(this.controller, this);
  }
}
