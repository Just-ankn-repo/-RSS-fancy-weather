/* global fetch */
import config from '../../config/env.config';

export default class cityByIP {
  constructor() {
    this.apiUrl = config.ipstackUrl;
    this.apiToken = config.ipstackToken;
  }

  async getCity() {
    const response = await fetch(`${this.apiUrl}/check?access_key=${this.apiToken}`);
    const result = await response.json();
    return `${result.city}, ${result.country_name}`;
  }
}
