/* global fetch */
import config from '../../config/env.config';

export default class Weather {
  constructor(controller) {
    this.apiUrl = config.openweathermapUrl;
    this.apiToken = config.openweathermapToken;
    this.controller = controller;
  }

  async getWeather(lat, lon) {
    const { lang, units } = this.controller.vars.getVars();
    const response = await fetch(`${this.apiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=current,daily&lang=${lang}&units=${units}&appid=${this.apiToken}`);
    const result = await response.json();
    return result;
  }
}
