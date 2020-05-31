/* global document */
export default ({
  currentCity: document.querySelector('.current__city'),
  currentDegrees: document.querySelector('.current__degrees > span'),
  currentWeatherIcon: document.querySelector('.current__weather-icon'),
  currentWeatherDesc: document.querySelector('.current__weather-description'),
  currentFeelsLike: document.querySelector('.current__weather-feels > span'),
  currentWind: document.querySelector('.current__weather-wind > span'),
  currentHumidity: document.querySelector('.current__weather-humidity > span'),

  firstDayTitle: document.querySelector('.first-forecast-day-title'),
  firstDayDegrees: document.querySelector('.first-forecast-day-degrees > span'),
  firstDayIcon: document.querySelector('.first-forecast-day-icon'),
  secondDayTitle: document.querySelector('.second-forecast-day-title'),
  secondDayDegrees: document.querySelector('.second-forecast-day-degrees > span'),
  secondDayIcon: document.querySelector('.second-forecast-day-icon'),
  thirdDayTitle: document.querySelector('.third-forecast-day-title'),
  thirdDayDegrees: document.querySelector('.third-forecast-day-degrees > span'),
  thirdDayIcon: document.querySelector('.third-forecast-day-icon'),

  currentWeekDay: document.querySelector('.current__weekday'),
  currentDay: document.querySelector('.current__monthday'),
  currentMonth: document.querySelector('.current__month'),
  currentTime: document.querySelector('.current__time'),
  currentTimezone: document.querySelector('.current__timezone'),
  firstWeekDay: document.querySelector('.first-forecast-day-title'),
  secondWeekDay: document.querySelector('.second-forecast-day-title'),
  thirdWeekDay: document.querySelector('.third-forecast-day-title'),
});
