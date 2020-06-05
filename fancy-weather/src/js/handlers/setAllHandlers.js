import handlers from './index';

export default (controller, view, units, lang) => {
  handlers.onSearch(controller);
  handlers.onBackgroundUpdate(controller, view);
  handlers.onGeoLocation(controller);
  handlers.onSpeechRecognition(view);
  handlers.onWeatherSpeech(view);
  handlers.onErrorButton();
  handlers.onKeyboardButton();

  if (units) handlers.onUnitsChange(controller, units);
  if (lang) {
    handlers.onLangChange(controller, lang);
    handlers.constants.changeLangSellector.value = lang;
  }

  handlers.constants.searchInput.value = '';
  handlers.constants.queryLoader.style.display = 'none';
  handlers.constants.pageLoader.style.display = 'none';
};
