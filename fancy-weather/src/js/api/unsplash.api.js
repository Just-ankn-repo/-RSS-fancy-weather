/* global fetch Image */
import config from '../../config/env.config';

export default class Unsplash {
  constructor() {
    this.apiUrl = config.unsplashUrl;
    this.apiToken = config.unsplashToken;
    this.lastQuery = '';
  }

  async searchImage(query) {
    this.lastQuery = query || this.lastQuery;
    console.log(this.lastQuery);
    const response = await fetch(`${this.apiUrl}/photos/random?orientation=landscape&
      per_page=1&query={${this.lastQuery}}&client_id=${this.apiToken}`);
    const result = await response.json();

    return new Promise((resolve) => {
      const imgElement = new Image();
      imgElement.src = result.urls.full;
      imgElement.classList.add('background-image');
      imgElement.onload = () => resolve(imgElement);
      imgElement.onerror = () => {
        imgElement.src = './assets/img/default-background.png';
        imgElement.onload = () => resolve(imgElement);
      };
    });
  }
}
