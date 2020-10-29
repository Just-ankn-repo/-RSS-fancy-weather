import htmlElements from '../constants/htmlElements';

const setListener = (element, func) => {
  if (element.getAttribute(`${element.classList[0]}-speech-click`) !== 'true') {
    element.addEventListener('click', func);
    element.setAttribute(`${element.classList[0]}-speech-click`, 'true');
  }
};

export default (view) => {
  const speechPlay = () => {
    if (htmlElements.enableSoundButton.classList.contains('active')) view.synth.speechStart(null, true);
  };

  const speechStop = () => {
    if (htmlElements.enableSoundButton.classList.contains('active')) view.synth.speechStop();
  };

  const speechVolumeUp = () => {
    view.synth.volume('up');
  };

  const speechVolumeDown = () => {
    view.synth.volume('down');
  };

  const speechRateFaster = () => {
    view.synth.rate('faster');
  };

  const speechRateSlower = () => {
    view.synth.rate('slower');
  };

  setListener(htmlElements.playSpeechWeatherButton, speechPlay);
  setListener(htmlElements.stopSpeechWeatherButton, speechStop);
  setListener(htmlElements.speechVolumeUpButton, speechVolumeUp);
  setListener(htmlElements.speechVolumeDownButton, speechVolumeDown);
  setListener(htmlElements.speechRateFasterButton, speechRateFaster);
  setListener(htmlElements.speechRateSlowerButton, speechRateSlower);
};
