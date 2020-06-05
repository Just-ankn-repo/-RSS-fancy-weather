/* global fetch */
import config from '../../config/env.config';
import globalErrors from '../utils/globalErrors';

export default async () => {
  const apiUrl = config.ipgeolocationUrl;
  const apiToken = config.ipgeolocationToken;
  let result;

  try {
    const response = await fetch(`${apiUrl}/ipgeo?apiKey=${apiToken}`);
    result = await response.json();
  } catch (e) {
    globalErrors('Failed to find location by IP');
  }

  return {
    city: result.city,
    country: result.country_name,
    lat: parseFloat(result.latitude),
    lon: parseFloat(result.longitude),
    timezone: result.time_zone.name,
  };
};
