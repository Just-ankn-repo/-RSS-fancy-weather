
import $on from '../viewUtils/setListener';
import constants from './constants';

export default (controller) => {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  const search = (event) => {
    if (event.target[0].value.toString().length !== 0) {
      constants.queryLoader.style.display = 'block';
      constants.searchForm.removeEventListener('submit', search);
      constants.searchForm.setAttribute('searchForm-search-submit', 'false');
      constants.searchButton.classList.add('lock');

      controller.updateData(event.target[0].value);
    }
  };

  constants.searchButton.classList.remove('lock');

  if (constants.searchForm.getAttribute('searchForm-search-submit') !== 'true') {
    $on(constants.searchForm, 'submit', search);
    constants.searchForm.setAttribute('searchForm-search-submit', 'true');
  }

  if (constants.searchForm.getAttribute('searchForm-preventDefault-submit') !== 'true') {
    $on(constants.searchForm, 'submit', preventDefault);
    constants.searchForm.setAttribute('searchForm-preventDefault-submit', 'true');
  }
};
