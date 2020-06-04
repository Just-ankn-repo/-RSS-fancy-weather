/* global fetch */
import config from '../../config/env.config';
import globalErrors from '../utils/globalErrors';

export default class Weather {
  constructor(vars) {
    this.apiUrl = config.openweathermapUrl;
    this.apiToken = config.openweathermapToken;
    this.vars = vars;
  }

  async getWeather(lat, lon) {
    try {
      const { lang, units } = this.vars.getVars();
      const response = await fetch(`${this.apiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&
      exclude=current,daily&lang=${lang}&units=${units}&appid=${this.apiToken}`);
      const result = await response.json();
      result.units = units;

      return result;
    } catch (e) {
      globalErrors(e);
    }
    return null;
  }
}
