import $on from '../utils/setListener';
import constants from './constants';

export default (controller, view) => {
  const update = async () => {
    const image = await controller.model.unsplash.searchImage();

    constants.updateBackgroundButton.removeEventListener('click', update);
    constants.updateBackgroundButton.setAttribute('updBgrButton-update-click', 'false');
    constants.updateBackgroundButton.classList.add('lock');

    view.updateBackground(image);
  };

  constants.updateBackgroundButton.classList.remove('lock');

  if (constants.updateBackgroundButton.getAttribute('updBgrButton-update-click') !== 'true') {
    $on(constants.updateBackgroundButton, 'click', update);
    constants.updateBackgroundButton.setAttribute('updBgrButton-update-click', 'true');
  }
};
