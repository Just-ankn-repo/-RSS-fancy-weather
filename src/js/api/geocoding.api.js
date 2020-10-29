/* global fetch */
import config from '../../config/env.config';
import globalErrors from '../utils/globalErrors';
import geoData from '../modelUtils/geoData';

async function getCoordinates(query, lang) {
  const apiUrl = config.opencageUrl;
  const apiToken = config.opencageToken;

  try {
    const response = await fetch(`${apiUrl}/geocode/v1/json?q=${query}&key=${apiToken}&pretty=1&language=${lang}`);
    const result = await response.json();
    return geoData(result);
  } catch (e) {
    globalErrors('Failed to find geolocation');
    return null;
  }
}

async function getCity(query, lang) {
  const apiUrl = config.opencageUrl;
  const apiToken = config.opencageToken;
  try {
    const response = await fetch(`${apiUrl}/geocode/v1/json?q=${query}&key=${apiToken}&pretty=1&language=${lang}`);
    const result = await response.json();
    return geoData(result);
  } catch (e) {
    globalErrors('Failed to find geolocation');
    return null;
  }
}

export default ({
  getCoordinates,
  getCity,
});
