/* global document */

import constants from './constants';

export default (image) => {
  constants.backgroundImage
    .parentNode.replaceChild(image, constants.backgroundImage);
  constants.backgroundImage = document.querySelector('.background-image');
};
