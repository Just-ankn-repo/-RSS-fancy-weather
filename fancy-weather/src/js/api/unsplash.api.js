/* global fetch Image */
import config from '../../config/env.config';
import globalErrors from '../utils/globalErrors';

export default async (query) => {
  const apiUrl = config.unsplashUrl;
  const apiToken = config.unsplashToken;
  let result = {};

  console.log(`query for getting image: {${query}}`);

  try {
    const response = await fetch(`${apiUrl}/photos/random?orientation=landscape&
      per_page=1&query={${query}}&client_id=${apiToken}`);
    result = await response.json();
  } catch (e) {
    globalErrors('Failed to fetch background image');
    result.urls = { full: './assets/img/default-background.jpg' };
  }

  return new Promise((resolve) => {
    const imgElement = new Image();
    imgElement.src = result.urls.full;
    imgElement.classList = 'background-image';
    imgElement.onload = () => resolve(imgElement);
    imgElement.onerror = () => {
      imgElement.src = './assets/img/default-background.jpg';
      imgElement.onload = () => resolve(imgElement);
    };
  });
};
