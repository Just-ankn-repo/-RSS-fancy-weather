/* global test expect jest beforeEach fetch describe */
import geocoding from '../../api/geocoding.api';
import globalErrors from '../../utils/globalErrors';
import config from '../../../config/env.config';

beforeEach(() => {
  fetch.resetMocks();
});

jest.mock('../../utils/globalErrors');

config.opencageUrl = 'http://test-api.test';
config.opencageToken = 'testToken123';
const error = 'Failed to find geolocation';
const correctResult = {
  city: 'TestCity',
  country: 'TestCountry',
  lat: 123.213,
  lon: 123.213,
  timezone: 'Test/Timezone',
};

describe('Test getCoordinates function for geocoding api with geoData converter function', () => {
  const query = 'testQuery';
  const lang = 'en';
  const apiCorrectResponse = {
    results: [
      {
        components: {
          city: 'TestCity',
          country: 'TestCountry',
          _type: 'city',
        },
        geometry: {
          lat: 123.213,
          lng: 123.213,
        },
        annotations: {
          timezone: {
            name: 'Test/Timezone',
          },
        },
      },
    ],
  };

  test('check if correct response fetched from geocoding.api', async () => {
    fetch.mockResponseOnce(JSON.stringify(apiCorrectResponse));

    const result = await geocoding.getCoordinates(query, lang);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${config.opencageUrl}/geocode/v1/json?q=${query}&key=${config.opencageToken}&pretty=1&language=${lang}`,
    );
    expect(result).toEqual(correctResult);
  });

  test('check if incorrect response fetched from geocoding.api', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));

    const result = await geocoding.getCoordinates(query, lang);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${config.opencageUrl}/geocode/v1/json?q=${query}&key=${config.opencageToken}&pretty=1&language=${lang}`,
    );
    expect(result).toEqual(null);
    expect(globalErrors).toHaveBeenCalledWith(error);
  });

  test('check if fetch error for geocoding.api', async () => {
    fetch.mockReject(() => Promise.reject(new Error('api is down')));

    const result = await geocoding.getCoordinates(query, lang);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${config.opencageUrl}/geocode/v1/json?q=${query}&key=${config.opencageToken}&pretty=1&language=${lang}`,
    );
    expect(result).toEqual(null);
    expect(globalErrors).toHaveBeenCalledWith(error);
  });
});

describe('Test getCity function for geocoding api with geoData converter function', () => {
  const query = '54.4567,20.5789';
  const lang = 'ru';
  const apiCorrectResponse = {
    results: [
      {
        components: {
          city: 'TestCity',
          building: 'TestBuilding',
          continent: 'TestCountry',
          _type: 'building',
        },
        geometry: {
          lat: 123.213,
          lng: 123.213,
        },
        annotations: {
          timezone: {
            name: 'Test/Timezone',
          },
        },
      },
    ],
  };

  test('check if correct response fetched from geocoding.api', async () => {
    fetch.mockResponseOnce(JSON.stringify(apiCorrectResponse));

    const result = await geocoding.getCity(query, lang);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${config.opencageUrl}/geocode/v1/json?q=${query}&key=${config.opencageToken}&pretty=1&language=${lang}`,
    );
    expect(result).toEqual(correctResult);
  });

  test('check if incorrect response fetched from geocoding.api', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));

    const result = await geocoding.getCity(query, lang);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${config.opencageUrl}/geocode/v1/json?q=${query}&key=${config.opencageToken}&pretty=1&language=${lang}`,
    );
    expect(result).toEqual(null);
    expect(globalErrors).toHaveBeenCalledWith(error);
  });

  test('check if fetch error for geocoding.api', async () => {
    fetch.mockReject(() => Promise.reject(new Error('api is down')));

    const result = await geocoding.getCity(query, lang);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${config.opencageUrl}/geocode/v1/json?q=${query}&key=${config.opencageToken}&pretty=1&language=${lang}`,
    );
    expect(result).toEqual(null);
    expect(globalErrors).toHaveBeenCalledWith(error);
  });
});
