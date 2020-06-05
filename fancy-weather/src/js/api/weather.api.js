/* global fetch */
import config from '../../config/env.config';
import globalErrors from '../utils/globalErrors';

export default async (lat, lon, lang, units) => {
  const apiUrl = config.openweathermapUrl;
  const apiToken = config.openweathermapToken;
  let result;

  try {
    const response = await fetch(`${apiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=current,daily&lang=${lang}&units=${units}&appid=${apiToken}`);
    result = await response.json();
  } catch (e) {
    globalErrors('Failed to fetch weather data');
  }

  return result;
};
