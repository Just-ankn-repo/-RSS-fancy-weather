/* global fetch */
import config from '../../config/env.config';

export default class cityByIP {
  constructor() {
    this.apiUrl = config.ipgeolocationUrl;
    this.apiToken = config.ipgeolocationToken;
  }

  async getCity() {
    const response = await fetch(`${this.apiUrl}/ipgeo?apiKey=${this.apiToken}`);
    const result = await response.json();
    return `${result.city}, ${result.country_name}`;
  }
}
