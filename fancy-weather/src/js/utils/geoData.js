export default (data) => {
  const geo = data.results[0];
  const geoData = {};
  const tempType = '_type';
  const placeType = ['road', 'building', 'neighbourhood'].includes(geo.components[tempType]) ? 'city' : geo.components[tempType];
  const getCity = geo.components[placeType] || geo.components.town;
  const getCountry = geo.components.country || geo.components.continent;

  if (getCity) geoData.city = getCity;
  if (getCountry) geoData.country = getCountry;

  geoData.lat = geo.geometry.lat;
  geoData.lon = geo.geometry.lng;
  geoData.timezone = geo.annotations.timezone.name;
  return geoData;
};
