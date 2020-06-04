
import $on from '../utils/setListener';
import constants from './constants';

export default () => {
  const errorViewed = () => {
    constants.errorList.classList.remove('new-error');
    constants.errorList.removeEventListener('click', errorViewed);
    constants.errorList.setAttribute('errorList-errorViewed-click', 'false');
  };

  if (constants.errorList.getAttribute('errorList-errorViewed-click') !== 'true') {
    $on(constants.errorList, 'click', errorViewed);
    constants.errorList.setAttribute('errorList-errorViewed-click', 'true');
  }
};
