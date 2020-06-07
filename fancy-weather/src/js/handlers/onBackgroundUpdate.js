import htmlElements from '../constants/htmlElements';

export default (controller) => {
  const update = async () => {
    htmlElements.queryLoader.style.display = 'block';

    htmlElements.updateBackgroundButton.removeEventListener('click', update);
    htmlElements.updateBackgroundButton.setAttribute('updBgrButton-update-click', 'false');
    htmlElements.updateBackgroundButton.classList.add('lock');

    controller.updateBackground();
  };

  htmlElements.updateBackgroundButton.classList.remove('lock');

  if (htmlElements.updateBackgroundButton.getAttribute('updBgrButton-update-click') !== 'true') {
    htmlElements.updateBackgroundButton.addEventListener('click', update);
    htmlElements.updateBackgroundButton.setAttribute('updBgrButton-update-click', 'true');
  }
};
