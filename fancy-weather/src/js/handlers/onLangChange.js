import htmlElements from '../constants/htmlElements';

export default (controller) => {
  const changeLang = (event) => {
    htmlElements.queryLoader.style.display = 'block';
    htmlElements.changeLangSellector.removeEventListener('change', changeLang);
    htmlElements.changeLangSellector.setAttribute('changeLangSellector-changeLang-change', 'false');
    htmlElements.changeLangSellector.classList.add('lock');
    controller.model.vars.changeVars({ lang: event.target.value });
  };

  htmlElements.changeLangSellector.classList.remove('lock');

  if (htmlElements.changeLangSellector.getAttribute('changeLangSellector-changeLang-change') !== 'true') {
    htmlElements.changeLangSellector.addEventListener('change', changeLang);
    htmlElements.changeLangSellector.setAttribute('changeLangSellector-changeLang-change', 'true');
  }
};
