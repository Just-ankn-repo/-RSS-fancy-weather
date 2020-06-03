
import $on from '../utils/setListener';
import constants from './constants';

export default (controller) => {
  const findGeolocationButton = () => {
    constants.findGeolocationButton.removeEventListener('click', findGeolocationButton);
    constants.findGeolocationButton.setAttribute('findGeolocationButton-findByGeo-click', 'false');
    constants.findGeolocationButton.classList.add('active');

    controller.updateData();
  };

  constants.findGeolocationButton.classList.remove('active');

  if (constants.findGeolocationButton.getAttribute('findGeolocationButton-findByGeo-click') !== 'true') {
    $on(constants.findGeolocationButton, 'click', findGeolocationButton);
    constants.findGeolocationButton.setAttribute('findGeolocationButton-findByGeo-click', 'true');
  }
};
