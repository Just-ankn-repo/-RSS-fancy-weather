import $on from '../utils/setListener';
import constants from './constants';

export default () => {
  const keyboardVisible = () => {
    if (constants.keyboardElement.classList.contains('active')) {
      constants.keyboardElement.classList.remove('active');
      constants.keyboardButton.classList.remove('active');
    } else {
      constants.keyboardElement.style.display = 'block';
      constants.keyboardElement.classList.add('active');
      constants.keyboardButton.classList.add('active');
    }
  };

  if (constants.changeLangSellector.getAttribute('keyboardButton-keyboardVisible-click') !== 'true') {
    $on(constants.keyboardButton, 'click', keyboardVisible);
    constants.changeLangSellector.setAttribute('keyboardButton-keyboardVisible-click', 'true');
  }
};
