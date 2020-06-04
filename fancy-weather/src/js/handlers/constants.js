/* global document */

export default ({
  queryLoader: document.querySelector('.query-loader-body'),
  pageLoader: document.querySelector('.page__loader'),

  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-input'),
  searchButton: document.querySelector('.search-button'),

  metricUnitsButton: document.querySelector('#metric'),
  imperialUnitsButton: document.querySelector('#imperial'),

  updateBackgroundButton: document.querySelector('.controls__update-background'),
  changeLangSellector: document.querySelector('.controls__change-lang'),
  findGeolocationButton: document.querySelector('.controls__find-geolocation'),
  switchMicrophoneButton: document.querySelector('.controls__switch-microphone'),
  speechWeatherButton: document.querySelector('.controls__weather-speech'),
  errorList: document.querySelector('.errors-list'),
});
