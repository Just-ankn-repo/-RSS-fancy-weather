import constants from './constants';

export default (data) => {
  constants.currentCity.textContent = `${data.city}, ${data.country}`;
  constants.currentWeekDay.textContent = data.weekDay;
  constants.currentDay.textContent = data.day;
  constants.currentMonth.textContent = data.month;
  constants.currentTimezone.textContent = data.timezoneOffset;
  constants.currentWeatherIcon.src = `https://openweathermap.org/img/wn/${data.currentWeather.icon}@2x.png`;
  constants.currentWeatherDesc.textContent = data.currentWeather.description;
  constants.currentDegrees.textContent = data.currentWeather.temp;
  constants.currentFeelsLike.textContent = data.currentWeather.feelsLike;
  constants.currentWind.textContent = data.currentWeather.windSpeed;
  constants.currentHumidity.textContent = data.currentWeather.humidity;
  constants.firstWeekDay.textContent = data.firstWeekDay;
  constants.firstDayDegrees.textContent = data.forecastWeather.firstDay.temp;
  constants.firstDayIcon.src = `https://openweathermap.org/img/wn/${data.forecastWeather.firstDay.icon}@2x.png`;
  constants.secondWeekDay.textContent = data.secondWeekDay;
  constants.secondDayDegrees.textContent = data.forecastWeather.secondDay.temp;
  constants.secondDayIcon.src = `https://openweathermap.org/img/wn/${data.forecastWeather.secondDay.icon}@2x.png`;
  constants.thirdWeekDay.textContent = data.thirdWeekDay;
  constants.thirdDayDegrees.textContent = data.forecastWeather.thirdDay.temp;
  constants.thirdDayIcon.src = `https://openweathermap.org/img/wn/${data.forecastWeather.thirdDay.icon}@2x.png`;
};
