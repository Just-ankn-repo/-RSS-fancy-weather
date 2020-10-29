/* global document */
import htmlElements from '../constants/htmlElements';

export default (image) => {
  htmlElements.backgroundImage
    .parentNode.replaceChild(image, htmlElements.backgroundImage);

  htmlElements.backgroundImage = document.querySelector('.background-image');
};
