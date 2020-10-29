import htmlElements from '../constants/htmlElements';

export default () => {
  const keyboardVisible = () => {
    if (htmlElements.keyboardElement.classList.contains('active')) {
      htmlElements.keyboardElement.classList.remove('active');
      htmlElements.keyboardButton.classList.remove('active');
    } else {
      htmlElements.keyboardElement.style.display = 'block';
      htmlElements.keyboardElement.classList.add('active');
      htmlElements.keyboardButton.classList.add('active');
    }
  };

  if (htmlElements.changeLangSellector.getAttribute('keyboardButton-keyboardVisible-click') !== 'true') {
    htmlElements.keyboardButton.addEventListener('click', keyboardVisible);
    htmlElements.changeLangSellector.setAttribute('keyboardButton-keyboardVisible-click', 'true');
  }
};
