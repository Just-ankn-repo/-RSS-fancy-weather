/* global fetch */
import config from '../../config/env.config';

export default class Weather {
  constructor(vars) {
    this.apiUrl = config.openweathermapUrl;
    this.apiToken = config.openweathermapToken;
    this.vars = vars;
  }

  async getWeather(lat, lon) {
    const { lang, units } = this.vars.getVars();
    const response = await fetch(`${this.apiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=current,daily&lang=${lang}&units=${units}&appid=${this.apiToken}`);
    const result = await response.json();
    result.units = units;
    return result;
  }
}
