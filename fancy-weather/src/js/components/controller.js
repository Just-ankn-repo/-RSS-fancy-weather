import View from './View';
import Model from './Model';
import utils from '../utils/index';
import apis from '../api/index';

export default class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);
    this.lastImageQuery = undefined;
  }

  updateData(place) {
    this.model.getWeather(place);
  }

  async updateUI(data) {
    const date = utils.getDate(data.lang, data.timezone, data.hemisphere);
    const dataForRender = Object.assign(data, date);
    this.lastImageQuery = `${dataForRender.dayTime} ${dataForRender.season} ${dataForRender.currentWeather.weather}`;

    dataForRender.backgroundImage = await apis.unsplash(this.lastImageQuery);

    this.view.render(dataForRender);
  }

  async updateBackground() {
    const image = await apis.unsplash(this.lastImageQuery);
    this.view.updateBackground(image);
  }
}
