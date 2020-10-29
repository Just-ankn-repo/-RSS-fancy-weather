/* global fetch */
import config from '../../config/env.config';
import globalErrors from '../utils/globalErrors';

export default async () => {
  const apiUrl = config.ipgeolocationUrl;
  const apiToken = config.ipgeolocationToken;

  try {
    const response = await fetch(`${apiUrl}/ipgeo?apiKey=${apiToken}`);
    const result = await response.json();
    return {
      city: result.city,
      country: result.country_name,
      lat: parseFloat(result.latitude),
      lon: parseFloat(result.longitude),
      timezone: result.time_zone.name,
    };
  } catch (e) {
    globalErrors('Failed to find location by IP');
    return null;
  }
};
