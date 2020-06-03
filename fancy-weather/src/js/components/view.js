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
  }

  render(data) {
    console.log(data);
    viewUtils.renderDataOnPage(data);
    viewUtils.updateBackground(data.backgroundImage);
    this.map.updateMap(data.lon, data.lat);
    this.clock.updateTime(data.timezone);
    setAllHandlers(this.controller, this, data.units, data.lang);
  }

  updateBackground(image) {
    viewUtils.updateBackground(image);
    setAllHandlers(this.controller, this);
  }
}
