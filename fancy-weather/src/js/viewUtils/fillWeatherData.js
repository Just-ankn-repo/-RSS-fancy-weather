import constants from './constants';

export default (data) => {
  constants.currentCity.textContent = `${data.city}, ${data.country}`;
  constants.currentWeatherIcon.src = `https://openweathermap.org/img/wn/${data.currentWeather.weather[0].icon}@2x.png`;
  constants.currentWeatherDesc.textContent = data.currentWeather.weather[0].description;
  constants.currentDegrees.textContent = Math.round(data.currentWeather.temp);
  constants.currentFeelsLike.textContent = Math.round(data.currentWeather.feels_like);
  constants.currentWind.textContent = `${Math.round(data.currentWeather.wind_speed)}${data.units === 'metric' ? 'm/s' : 'ft/s'}`;
  constants.currentHumidity.textContent = `${Math.round(data.currentWeather.humidity)}%`;
  constants.firstDayTitle.textContent = `1`;
  constants.firstDayDegrees.textContent = `${Math.round((data.forecastWeather[0].temp.max + data.forecastWeather[0].temp.min) / 2)}`;
  constants.firstDayIcon.src = `https://openweathermap.org/img/wn/${data.forecastWeather[0].weather[0].icon}@2x.png`;
  constants.secondDayTitle.textContent = `2`;
  constants.secondDayDegrees.textContent = `${Math.round((data.forecastWeather[1].temp.max + data.forecastWeather[1].temp.min) / 2)}`;
  constants.secondDayIcon.src = `https://openweathermap.org/img/wn/${data.forecastWeather[1].weather[0].icon}@2x.png`;
  constants.thirdDayTitle.textContent = `3`;
  constants.thirdDayDegrees.textContent = `${Math.round((data.forecastWeather[2].temp.max + data.forecastWeather[2].temp.min) / 2)}`;
  constants.thirdDayIcon.src = `https://openweathermap.org/img/wn/${data.forecastWeather[2].weather[0].icon}@2x.png`;
};
