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
  pageLoader: document.querySelector('.page__loader'),

  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-input'),
  searchButton: document.querySelector('.search-button'),

  metricUnitsButton: document.querySelector('#metric'),
  imperialUnitsButton: document.querySelector('#imperial'),

  keyboardElement: document.querySelector('.keyboard'),
  keyboardButton: document.querySelector('.controls__virtual-keyboard'),

  updateBackgroundButton: document.querySelector('.controls__update-background'),
  changeLangSellector: document.querySelector('.controls__change-lang'),
  findGeolocationButton: document.querySelector('.controls__find-geolocation'),
  switchMicrophoneButton: document.querySelector('.controls__switch-microphone'),
  enableSoundButton: document.querySelector('.controls__weather-speech'),
  playSpeechWeatherButton: document.querySelector('.controls__weather-speech-play'),
  stopSpeechWeatherButton: document.querySelector('.controls__weather-speech-stop'),
  speechVolumeUpButton: document.querySelector('.controls__weather-speech-volume-up'),
  speechVolumeDownButton: document.querySelector('.controls__weather-speech-volume-down'),
  speechRateFasterButton: document.querySelector('.controls__weather-speech-rate-faster'),
  speechRateSlowerButton: document.querySelector('.controls__weather-speech-rate-slower'),
  errorList: document.querySelector('.errors-list'),
});
