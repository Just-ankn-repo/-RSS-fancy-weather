/* global fetch */
import config from '../../config/env.config';

export default class Unsplash {
  constructor() {
    this.apiUrl = config.unsplashUrl;
    this.apiToken = config.unsplashToken;
    this.lastQuery = '';
  }

  async searchImage(query) {
    this.lastQuery = query ? query.join(',') : this.lastQuery;
    console.log(this.lastQuery);
    const response = await fetch(`${this.apiUrl}/photos/random?orientation=landscape&
      per_page=1&query={${this.lastQuery}}&client_id=${this.apiToken}`);
    const result = await response.json();
    return result.urls.full;
  }
}
