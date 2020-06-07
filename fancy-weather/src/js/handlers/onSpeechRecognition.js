import htmlElements from '../constants/htmlElements';

export default (view) => {
  const listen = () => {
    const isActive = htmlElements.switchMicrophoneButton.classList.contains('active');

    htmlElements.switchMicrophoneButton.removeEventListener('click', listen);
    htmlElements.switchMicrophoneButton.setAttribute('switchMicrophoneButton-listen-click', 'false');

    if (isActive) {
      htmlElements.switchMicrophoneButton.classList.remove('active');
    } else {
      htmlElements.switchMicrophoneButton.classList.add('active');
    }

    view.speechRecognition(!isActive);
  };

  if (htmlElements.switchMicrophoneButton.getAttribute('switchMicrophoneButton-listen-click') !== 'true') {
    htmlElements.switchMicrophoneButton.addEventListener('click', listen);
    htmlElements.switchMicrophoneButton.setAttribute('switchMicrophoneButton-listen-click', 'true');
  }
};
