import handlers from './index';
import htmlElements from '../constants/htmlElements';

export default (controller, view, units, lang) => {
  handlers.onSearch(controller);
  handlers.onBackgroundUpdate(controller, view);
  handlers.onGeoLocation(controller);
  handlers.onSpeechRecognition(view);
  handlers.onWeatherSpeech(view);
  handlers.onErrorButton();
  handlers.onKeyboardButton();
  handlers.onSpeechControl(view);

  if (units) handlers.onUnitsChange(controller, units);
  if (lang) {
    handlers.onLangChange(controller, lang);
    htmlElements.changeLangSellector.value = lang;
  }

  htmlElements.searchInput.value = '';
  htmlElements.queryLoader.style.display = 'none';
  htmlElements.pageLoader.style.display = 'none';
};
