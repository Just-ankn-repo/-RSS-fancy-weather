/* global document */

import htmlElements from '../constants/htmlElements';

export default (message) => {
  const option = document.createElement('option');
  option.innerText = message;
  const { childNodes } = htmlElements.errorList;
  if (childNodes.length > 5) {
    htmlElements.errorList.removeChild(childNodes[childNodes.length - 1]);
  }
  childNodes[1].after(option);
  htmlElements.errorList = document.querySelector('.errors-list');
  htmlElements.errorList.classList.add('new-error');
};
