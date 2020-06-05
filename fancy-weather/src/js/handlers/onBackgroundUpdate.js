import $on from '../viewUtils/setListener';
import constants from './constants';

export default (controller) => {
  const update = async () => {
    constants.queryLoader.style.display = 'block';

    constants.updateBackgroundButton.removeEventListener('click', update);
    constants.updateBackgroundButton.setAttribute('updBgrButton-update-click', 'false');
    constants.updateBackgroundButton.classList.add('lock');

    controller.updateBackground();
  };

  constants.updateBackgroundButton.classList.remove('lock');

  if (constants.updateBackgroundButton.getAttribute('updBgrButton-update-click') !== 'true') {
    $on(constants.updateBackgroundButton, 'click', update);
    constants.updateBackgroundButton.setAttribute('updBgrButton-update-click', 'true');
  }
};
