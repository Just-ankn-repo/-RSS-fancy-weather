/* global document */

import constants from './constants';

export default (message) => {
  const option = document.createElement('option');
  option.innerText = message;
  const { childNodes } = constants.errorList;
  if (childNodes.length > 5) {
    constants.errorList.removeChild(childNodes[childNodes.length - 1]);
  }
  childNodes[1].after(option);
  constants.errorList = document.querySelector('.errors-list');
  constants.errorList.classList.add('new-error');
};
