/* global test expect jest beforeEach fetch */
import ipLocation from '../../api/ipLocation.api';
import globalErrors from '../../utils/globalErrors';
import config from '../../../config/env.config';

beforeEach(() => {
  fetch.resetMocks();
});

jest.mock('../../utils/globalErrors');

const apiCorrectResponse = {
  city: 'TestCity',
  country_name: 'TestCountry',
  latitude: 123.213,
  longitude: 123.213,
  time_zone: {
    name: 'Test/Timezone',
  },
};

const correctResult = {
  city: 'TestCity',
  country: 'TestCountry',
  lat: 123.213,
  lon: 123.213,
  timezone: 'Test/Timezone',
};

const error = 'Failed to find location by IP';

config.ipgeolocationUrl = 'http://test-api.test';
config.ipgeolocationToken = 'testToken123';

test('check if correct response fetched from ipLocation.api', async () => {
  fetch.mockResponseOnce(JSON.stringify(apiCorrectResponse));

  const result = await ipLocation();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `${config.ipgeolocationUrl}/ipgeo?apiKey=${config.ipgeolocationToken}`,
  );
  expect(result).toEqual(correctResult);
});

test('check if incorrect response fetched from ipLocation.api', async () => {
  fetch.mockResponseOnce(JSON.stringify({}));

  const result = await ipLocation();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `${config.ipgeolocationUrl}/ipgeo?apiKey=${config.ipgeolocationToken}`,
  );
  expect(result).toEqual(null);
  expect(globalErrors).toHaveBeenCalledWith(error);
});

test('check if fetch error for ipLocation.api', async () => {
  fetch.mockReject(() => Promise.reject(new Error('api is down')));

  const result = await ipLocation();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `${config.ipgeolocationUrl}/ipgeo?apiKey=${config.ipgeolocationToken}`,
  );
  expect(result).toEqual(null);
  expect(globalErrors).toHaveBeenCalledWith(error);
});
