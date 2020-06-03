import $on from '../utils/setListener';
import constants from './constants';

export default (view) => {
  const speech = () => {
    constants.speechWeatherButton.removeEventListener('click', speech);
    constants.speechWeatherButton.setAttribute('speechWeatherButton-speech-click', 'false');
    const isActive = constants.speechWeatherButton.classList.contains('active');
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
