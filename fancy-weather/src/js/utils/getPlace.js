export default (location) => {
  const tempType = '_type';
  const placeType = ['road', 'building', 'neighbourhood'].includes(location[tempType]) ? 'city' : location[tempType];
  const getCity = `${location[placeType]}`;
  const getCountry = location.country || location.continent;
  return { city: getCity, country: getCountry };
};
