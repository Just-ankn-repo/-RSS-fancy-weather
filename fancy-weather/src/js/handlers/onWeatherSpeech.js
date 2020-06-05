import $on from '../viewUtils/setListener';
import constants from './constants';

export default (view) => {
  const speech = () => {
    const isActive = constants.speechWeatherButton.classList.contains('active');

    constants.speechWeatherButton.removeEventListener('click', speech);
    constants.speechWeatherButton.setAttribute('speechWeatherButton-speech-click', 'false');

    if (isActive) {
      constants.speechWeatherButton.classList.remove('active');
    } else {
      constants.speechWeatherButton.classList.add('active');
    }

    view.speechWeather(!isActive);
  };

  if (constants.speechWeatherButton.getAttribute('speechWeatherButton-speech-click') !== 'true') {
    $on(constants.speechWeatherButton, 'click', speech);
    constants.speechWeatherButton.setAttribute('speechWeatherButton-speech-click', 'true');
  }
};
