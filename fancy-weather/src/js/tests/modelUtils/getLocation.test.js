/* global test expect jest */
import apis from '../../api/index';
import getLocation from '../../modelUtils/getLocation';

jest.mock('../../api/index');

const getCoordinatesResponse = {
  city: 'Samara',
  lat: 54.4329,
};

const correctResult = {
  city: 'Samara',
  lat: 54.4329,
  hemisphere: 'north',
};

const locationCity = 'Samara';
const locationCoordinates = {
  coords: {
    latitude: 34.7698,
    longitude: 29.5423,
  },
};
const lang = 'en';

test('check getLocation function for place location param', async () => {
  apis
    .geocoding
    .getCoordinates
    .mockReturnValue(new Promise((resolve) => resolve(getCoordinatesResponse)));

  const location = await getLocation(locationCity, 'en');

  expect(apis.geocoding.getCoordinates).toHaveBeenCalledWith(locationCity, 'en');
  expect(location).toEqual(correctResult);
});

test('check getLocation function for coords location param', async () => {
  apis
    .geocoding
    .getCity
    .mockReturnValue(new Promise((resolve) => resolve(getCoordinatesResponse)));

  const location = await getLocation(locationCoordinates, lang);

  expect(apis.geocoding.getCity).toHaveBeenCalledWith(`${locationCoordinates.coords.latitude},${locationCoordinates.coords.longitude}`, lang);
  expect(location).toEqual(correctResult);
});

test('check getLocation function for null location param', async () => {
  apis
    .ipLocation
    .mockReturnValue(new Promise((resolve) => resolve(getCoordinatesResponse)));

  const location = await getLocation(null, lang);

  expect(apis.ipLocation).toHaveBeenCalledWith();
  expect(location).toEqual(correctResult);
});
