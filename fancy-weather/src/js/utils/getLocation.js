import apis from '../api/index';

export default async (location, lang) => {
  let place;

  if (location === null) {
    place = await apis.ipLocation();
  } else if (typeof location === 'string') {
    place = await apis.geocoding.getCoordinates(location, lang);
  } else {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    place = await apis.geocoding.getCity(`${lat},${lon}`, lang);
  }

  place.hemisphere = place.lat < 0 ? 'south' : 'north';

  return place;
};
