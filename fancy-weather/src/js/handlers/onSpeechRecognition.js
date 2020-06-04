import $on from '../utils/setListener';
import constants from './constants';

export default (view) => {
  const listen = () => {
    const isActive = constants.switchMicrophoneButton.classList.contains('active');

    constants.switchMicrophoneButton.removeEventListener('click', listen);
    constants.switchMicrophoneButton.setAttribute('switchMicrophoneButton-listen-click', 'false');

    if (isActive) {
      constants.switchMicrophoneButton.classList.remove('active');
    } else {
      constants.switchMicrophoneButton.classList.add('active');
    }

    view.speechRecognition(!isActive);
  };

  if (constants.switchMicrophoneButton.getAttribute('switchMicrophoneButton-listen-click') !== 'true') {
    $on(constants.switchMicrophoneButton, 'click', listen);
    constants.switchMicrophoneButton.setAttribute('switchMicrophoneButton-listen-click', 'true');
  }
};
