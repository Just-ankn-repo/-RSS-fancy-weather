export default (geodata, weather) => ({
  city: geodata.city,
  country: geodata.country,
  lat: geodata.location.lat,
  lon: geodata.location.lng,
  timezone: geodata.timezone,
  currentWeather: weather.current,
  forecastWeather: weather.daily,
});
