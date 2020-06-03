
import $on from '../utils/setListener';
import constants from './constants';

export default (controller) => {
  const changeLang = (event) => {
    constants.queryLoader.style.display = 'block';
    constants.changeLangSellector.removeEventListener('change', changeLang);
    constants.changeLangSellector.setAttribute('changeLangSellector-changeLang-change', 'false');
    constants.changeLangSellector.classList.add('lock');
    controller.model.vars.changeVars({ lang: event.target.value });
  };

  constants.changeLangSellector.classList.remove('lock');

  if (constants.changeLangSellector.getAttribute('changeLangSellector-changeLang-change') !== 'true') {
    $on(constants.changeLangSellector, 'change', changeLang);
    constants.changeLangSellector.setAttribute('changeLangSellector-changeLang-change', 'true');
  }
};
