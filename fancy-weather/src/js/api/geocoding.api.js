/* global fetch */
import config from '../../config/env.config';
import globalErrors from '../utils/globalErrors';
import geoData from '../utils/geoData';

async function getCoordinates(query, lang) {
  const apiUrl = config.opencageUrl;
  const apiToken = config.opencageToken;
  let result;

  try {
    const response = await fetch(`${apiUrl}/geocode/v1/json?q=${query}&key=${apiToken}&
      pretty=1&language=${lang}`);
    result = await response.json();
  } catch (e) {
    globalErrors('Failed to find geolocation');
  }

  return geoData(result);
}

async function getCity(query, lang) {
  const apiUrl = config.opencageUrl;
  const apiToken = config.opencageToken;
  let result;
  try {
    const response = await fetch(`${apiUrl}/geocode/v1/json?q=${query}&key=${apiToken}&
      pretty=1&language=${lang}`);
    result = await response.json();
  } catch (e) {
    globalErrors('Failed to find geolocation');
  }

  return geoData(result);
}

export default ({
  getCoordinates,
  getCity,
});
