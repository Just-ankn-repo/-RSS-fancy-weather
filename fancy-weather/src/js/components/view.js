import '../../css/style.css';
import '../../css/controls.css';
import '../../css/map.css';
import '../../css/search.css';
import '../../css/weather.css';
import viewUtils from '../viewUtils/index';
// import handlers from '../handlers/index';

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.map = new viewUtils.Map();
  }

  async render(data) {
    console.log(data);
    viewUtils.renderDataOnPage(data);
    viewUtils.constants.backgroundImage
      .parentNode.replaceChild(data.backgroundImage, viewUtils.constants.backgroundImage);
    this.map.updateMap(data.lon, data.lat);
    viewUtils.constants.pageLoader.style.display = 'none';
  }
}
