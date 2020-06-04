/* global fetch */
import config from '../../config/env.config';
import getPlace from '../utils/getPlace';
import globalErrors from '../utils/globalErrors';

export default class GeocodingByCity {
  constructor(vars) {
    this.apiUrl = config.opencageUrl;
    this.apiToken = config.opencageToken;
    this.vars = vars;
  }

  async getCoordinates(query) {
    try {
      const { lang } = this.vars.getVars();
      const response = await fetch(`${this.apiUrl}/geocode/v1/json?q=${query}&key=${this.apiToken}&
        pretty=1&language=${lang}`);
      const result = await response.json();
      const tempLocation = getPlace(result.results[0].components);
      return {
        city: tempLocation.city,
        country: tempLocation.country,
        location: result.results[0].geometry,
        timezone: result.results[0].annotations.timezone.name,
      };
    } catch (e) {
      globalErrors(e);
    }
    return null;
  }

  async getCity(query) {
    try {
      const { lang } = this.vars.getVars();
      const response = await fetch(`${this.apiUrl}/geocode/v1/json?q=${query}&key=${this.apiToken}&
        pretty=1&language=${lang}`);
      const result = await response.json();
      const tempLocation = getPlace(result.results[0].components);
      return `${tempLocation.city}, ${tempLocation.country}`;
    } catch (e) {
      globalErrors(e);
    }
    return null;
  }
}
