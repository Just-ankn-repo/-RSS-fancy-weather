/* global document */

export default ({
  queryLoader: document.querySelector('.query-loader-body'),
  pageLoader: document.querySelector('#page-loader'),
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-input'),
  searchButton: document.querySelector('.search-button'),
  searchLoader: document.querySelector('.search-input_loader'),
  metricUnitsButton: document.querySelector('#metric'),
  imperialUnitsButton: document.querySelector('#imperial'),
  updateBackgroundButton: document.querySelector('.update-background'),
  changeLangSellector: document.querySelector('.change-lang'),
  findGeolocationButton: document.querySelector('.find-geolocation'),
  switchMicrophoneButton: document.querySelector('.switch-microphone'),
  speechWeatherButton: document.querySelector('.weather-speech'),
});
