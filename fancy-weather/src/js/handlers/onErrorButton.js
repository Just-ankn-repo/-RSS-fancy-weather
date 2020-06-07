import htmlElements from '../constants/htmlElements';

export default () => {
  const errorViewed = () => {
    htmlElements.errorList.classList.remove('new-error');
    htmlElements.errorList.removeEventListener('click', errorViewed);
    htmlElements.errorList.setAttribute('errorList-errorViewed-click', 'false');
  };

  if (htmlElements.errorList.getAttribute('errorList-errorViewed-click') !== 'true') {
    htmlElements.errorList.addEventListener('click', errorViewed);
    htmlElements.errorList.setAttribute('errorList-errorViewed-click', 'true');
  }
};
