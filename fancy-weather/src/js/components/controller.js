import View from './view';
import Model from './model';

export default class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);
  }

  updateData(city) {
    this.model.getWeather(city);
  }

  updateUI(data) {
    this.view.render(data);
  }
}
