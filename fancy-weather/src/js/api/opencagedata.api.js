/* global fetch */
import config from '../../config/env.config';

export default class GeocodingByCity {
  constructor(vars) {
    this.apiUrl = config.opencageUrl;
    this.apiToken = config.opencageToken;
    this.vars = vars;
  }

  async getCoordinates(query) {
    const { lang } = this.vars.getVars;
    const response = await fetch(`${this.apiUrl}/geocode/v1/json?q=${query}&key=${this.apiToken}&
      pretty=1&language=${lang}`);
    const result = await response.json();
    return {
      city: result.results[0].components.city,
      country: result.results[0].components.country,
      location: result.results[0].geometry,
    };
  }

  async getCity(query) {
    const { lang } = this.vars.getVars;
    const response = await fetch(`${this.apiUrl}/geocode/v1/json?q=${query}&key=${this.apiToken}&
      pretty=1&language=${lang}`);
    const result = await response.json();
    return `${result.results[0].components.city}, ${result.results[0].components.country}`;
  }
}
