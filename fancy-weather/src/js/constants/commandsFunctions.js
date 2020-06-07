/* global Event */
const newEvent = new Event('change');

export default {
  changeLangEN: (htmlElements) => {
    const { changeLangSellector } = htmlElements;
    changeLangSellector.value = 'en';
    changeLangSellector.dispatchEvent(newEvent);
  },
  changeLangRU: (htmlElements) => {
    const { changeLangSellector } = htmlElements;
    changeLangSellector.value = 'ru';
    changeLangSellector.dispatchEvent(newEvent);
  },
  changeLangBE: (htmlElements) => {
    const { changeLangSellector } = htmlElements;
    changeLangSellector.value = 'be';
    changeLangSellector.dispatchEvent(newEvent);
  },
  enableSound: (htmlElements) => {
    if (!htmlElements.enableSoundButton.classList.contains('active')) {
      htmlElements.enableSoundButton.click();
    }
  },
  disableSound: (htmlElements) => {
    if (htmlElements.enableSoundButton.classList.contains('active')) {
      htmlElements.enableSoundButton.click();
    }
  },
  speechWeather: (htmlElements) => {
    if (!htmlElements.enableSoundButton.classList.contains('active')) {
      htmlElements.playSpeechWeatherButton.click();
    }
  },
  stopSpeech: (htmlElements) => {
    if (!htmlElements.enableSoundButton.classList.contains('active')) {
      htmlElements.stopSpeechWeatherButton.click();
    }
  },
  volumeUp: (htmlElements) => htmlElements.speechVolumeUpButton.click(),
  volumeDown: (htmlElements) => htmlElements.speechVolumeDownButton.click(),
  rateFaster: (htmlElements) => htmlElements.speechRateFasterButton.click(),
  rateSlower: (htmlElements) => htmlElements.speechRateSlowerButton.click(),
  degreeCelsius: (htmlElements) => htmlElements.metricUnitsButton.click(),
  degreeFahrenheit: (htmlElements) => htmlElements.imperialUnitsButton.click(),
  updateBackground: (htmlElements) => htmlElements.updateBackgroundButton.click(),
  geolocation: (htmlElements) => htmlElements.findGeolocationButton.click(),
};
