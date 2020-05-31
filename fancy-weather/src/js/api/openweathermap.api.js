/* global fetch */
import config from '../../config/env.config';

export default class Weather {
  constructor() {
    this.apiUrl = config.openweathermapUrl;
    this.apiToken = config.openweathermapToken;
  }

  async getWeather(lat, lon) {
    const response = await fetch(`${this.apiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=current,daily&appid=${this.apiToken}`);
    const result = await response.json();
    return result;
  }
}
