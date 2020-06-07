import htmlElements from '../constants/htmlElements';

export default (controller) => {
  const findGeolocationButton = () => {
    htmlElements.queryLoader.style.display = 'block';
    htmlElements.findGeolocationButton.removeEventListener('click', findGeolocationButton);
    htmlElements.findGeolocationButton.setAttribute('findGeolocationButton-findByGeo-click', 'false');
    htmlElements.findGeolocationButton.classList.add('active');

    controller.updateData();
  };

  htmlElements.findGeolocationButton.classList.remove('active');

  if (htmlElements.findGeolocationButton.getAttribute('findGeolocationButton-findByGeo-click') !== 'true') {
    htmlElements.findGeolocationButton.addEventListener('click', findGeolocationButton);
    htmlElements.findGeolocationButton.setAttribute('findGeolocationButton-findByGeo-click', 'true');
  }
};
