import htmlElements from '../constants/htmlElements';
import animatedWeatherIcons from '../constants/animatedWeatherIcons';
import i18n from '../i18n/index';

export default (data) => {
  let location;

  if (data.city && data.country) location = `${data.city}, ${data.country}`;
  else if (data.city || data.country) location = data.city || data.country;
  else location = data.lang === 'en' ? 'Somewhere here' : 'Где-то здесь';

  htmlElements.feelsLikeText.textContent = i18n[data.lang].feelsLike;
  htmlElements.windText.textContent = i18n[data.lang].wind;
  htmlElements.humidityText.textContent = i18n[data.lang].humidity;
  htmlElements.searchInputText.placeholder = i18n[data.lang].searchInputText;
  htmlElements.searchButtonText.textContent = i18n[data.lang].searchButtonText;
  htmlElements.latitudeText.textContent = i18n[data.lang].latitudeText;
  htmlElements.longitudeText.textContent = i18n[data.lang].longitudeText;

  htmlElements.currentCity.textContent = location;
  htmlElements.currentWeekDay.textContent = data.weekDay;
  htmlElements.currentDay.textContent = data.day;
  htmlElements.currentMonth.textContent = data.month;
  htmlElements.currentTimezone.textContent = data.timezoneOffset;

  htmlElements.currentWeatherIcon.innerHTML = animatedWeatherIcons[data.currentWeather.icon];
  htmlElements.currentWeatherDesc.textContent = data.currentWeather.description;
  htmlElements.currentDegrees.textContent = data.currentWeather.temp;
  htmlElements.currentFeelsLike.textContent = data.currentWeather.feelsLike;
  htmlElements.currentWind.textContent = data.currentWeather.windSpeed;
  htmlElements.currentHumidity.textContent = data.currentWeather.humidity;

  htmlElements.firstDayTitle.textContent = data.firstWeekDay;
  htmlElements.firstDayDegrees.textContent = data.forecastWeather.firstDay.temp;
  htmlElements.firstDayIcon.innerHTML = animatedWeatherIcons[data.forecastWeather.firstDay.icon];

  htmlElements.secondDayTitle.textContent = data.secondWeekDay;
  htmlElements.secondDayDegrees.textContent = data.forecastWeather.secondDay.temp;
  htmlElements.secondDayIcon.innerHTML = animatedWeatherIcons[data.forecastWeather.secondDay.icon];

  htmlElements.thirdDayTitle.textContent = data.thirdWeekDay;
  htmlElements.thirdDayDegrees.textContent = data.forecastWeather.thirdDay.temp;
  htmlElements.thirdDayIcon.innerHTML = animatedWeatherIcons[data.forecastWeather.thirdDay.icon];
};
