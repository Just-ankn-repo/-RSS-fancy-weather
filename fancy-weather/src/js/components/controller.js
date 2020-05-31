import View from './view';
import Model from './model';
import Vars from './global.var';
import utils from '../utils/index';

export default class Controller {
  constructor() {
    this.model = new Model(this);
    this.vars = new Vars(this);
    this.view = new View(this);
  }

  async init() {
    this.model.getWeather();
  }

  async updateUI(data) {
    const vars = this.vars.getVars();
    const combinedData = utils.combineData(data, vars);
    this.view.render(combinedData);
  }

  async updateWeather(city) {
    this.model.getWeather(city);
  }
}
