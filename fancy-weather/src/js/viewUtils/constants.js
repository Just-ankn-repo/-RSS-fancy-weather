/* global document */
export default ({
  feelsLikeText: document.querySelector('.additional__feels > span:nth-child(1)'),
  windText: document.querySelector('.additional__wind > span:nth-child(1)'),
  humidityText: document.querySelector('.additional__humidity > span:nth-child(1)'),
  searchInputText: document.querySelector('.search-input'),
  searchButtonText: document.querySelector('.search-button'),
  latitudeText: document.querySelector('.map__latitude > span:nth-child(1)'),
  longitudeText: document.querySelector('.map__longtitude > span:nth-child(1)'),

  currentCity: document.querySelector('.weather__current-city'),
  currentDegrees: document.querySelector('.current-weather__degrees > span'),
  currentWeatherIcon: document.querySelector('.additional__weather-icon'),
  currentWeatherDesc: document.querySelector('.additional__description'),
  currentFeelsLike: document.querySelector('.additional__feels > span:nth-child(2)'),
  currentWind: document.querySelector('.additional__wind > span:nth-child(2)'),
  currentHumidity: document.querySelector('.additional__humidity > span:nth-child(2)'),

  firstDayTitle: document.querySelector('.first-forecast-day-title'),
  firstDayDegrees: document.querySelector('.first-forecast-day-degrees > span'),
  firstDayIcon: document.querySelector('.first-forecast-day-icon'),
  secondDayTitle: document.querySelector('.second-forecast-day-title'),
  secondDayDegrees: document.querySelector('.second-forecast-day-degrees > span'),
  secondDayIcon: document.querySelector('.second-forecast-day-icon'),
  thirdDayTitle: document.querySelector('.third-forecast-day-title'),
  thirdDayDegrees: document.querySelector('.third-forecast-day-degrees > span'),
  thirdDayIcon: document.querySelector('.third-forecast-day-icon'),

  currentWeekDay: document.querySelector('.current-datetime__weekday'),
  currentDay: document.querySelector('.current-datetime__monthday'),
  currentMonth: document.querySelector('.current-datetime__month'),
  currentTime: document.querySelector('.current-datetime__time'),
  currentTimezone: document.querySelector('.current-datetime__timezone'),

  latitudeElement: document.querySelector('.map__latitude > span:nth-child(2)'),
  longitudeElement: document.querySelector('.map__longtitude > span:nth-child(2)'),

  backgroundImage: document.querySelector('.background-image'),
  queryLoader: document.querySelector('.query-loader-body'),
  errorList: document.querySelector('.errors-list'),
});
