import View from './View';
import Model from './Model';
import globalErrors from '../utils/globalErrors';

export default class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);
    this.error = false;
  }

  updateData(city) {
    this.model.getWeather(city);
  }

  updateUI(data) {
    this.view.render(data);
  }
}
