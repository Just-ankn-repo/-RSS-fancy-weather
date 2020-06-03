import '../../css/style.css';
import '../../css/controls.css';
import '../../css/map.css';
import '../../css/search.css';
import '../../css/weather.css';
import viewUtils from '../viewUtils/index';
import setAllHandlers from '../handlers/setAllHandlers';

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.map = new viewUtils.Map();
    this.clock = new viewUtils.Clock(viewUtils.constants.currentTime);
    this.synth = new viewUtils.SpeechSynthesis();
    this.speechActive = false;
    this.lastData = {};
  }

  render(data) {
    console.log(data);
    this.lastData = data;
    viewUtils.renderDataOnPage(data);
    viewUtils.updateBackground(data.backgroundImage);
    this.map.updateMap(data.lon, data.lat);
    this.clock.updateTime(data.timezone);
    setAllHandlers(this.controller, this, data.units, data.lang);
    if (this.speechActive) this.synth.speech(data, this.speechActive);
  }

  updateBackground(image) {
    viewUtils.updateBackground(image);
    setAllHandlers(this.controller, this);
  }

  speechWeather(isActive) {
    this.speechActive = isActive;
    this.synth.speech(this.lastData, isActive);
    setAllHandlers(this.controller, this);
  }

  speechRecognition() {
    setAllHandlers(this.controller, this);
  }
}
