import htmlElements from '../constants/htmlElements';

export default (controller) => {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  const search = (event) => {
    if (event.target[0].value.toString().length !== 0) {
      htmlElements.queryLoader.style.display = 'block';
      htmlElements.searchForm.removeEventListener('submit', search);
      htmlElements.searchForm.setAttribute('searchForm-search-submit', 'false');
      htmlElements.searchButton.classList.add('lock');

      controller.updateData(event.target[0].value);
    }
  };

  htmlElements.searchButton.classList.remove('lock');

  if (htmlElements.searchForm.getAttribute('searchForm-search-submit') !== 'true') {
    htmlElements.searchForm.addEventListener('submit', search);
    htmlElements.searchForm.setAttribute('searchForm-search-submit', 'true');
  }

  if (htmlElements.searchForm.getAttribute('searchForm-preventDefault-submit') !== 'true') {
    htmlElements.searchForm.addEventListener('submit', preventDefault);
    htmlElements.searchForm.setAttribute('searchForm-preventDefault-submit', 'true');
  }
};
