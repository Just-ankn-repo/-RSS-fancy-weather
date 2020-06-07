import htmlElements from '../constants/htmlElements';

export default (view) => {
  const speech = () => {
    const isActive = htmlElements.enableSoundButton.classList.contains('active');

    htmlElements.enableSoundButton.removeEventListener('click', speech);
    htmlElements.enableSoundButton.setAttribute('enableSoundButton-speech-click', 'false');

    if (isActive) {
      htmlElements.enableSoundButton.classList.remove('active');
    } else {
      htmlElements.enableSoundButton.classList.add('active');
    }

    view.speechWeather(!isActive);
  };

  if (htmlElements.enableSoundButton.getAttribute('enableSoundButton-speech-click') !== 'true') {
    htmlElements.enableSoundButton.addEventListener('click', speech);
    htmlElements.enableSoundButton.setAttribute('enableSoundButton-speech-click', 'true');
  }
};
