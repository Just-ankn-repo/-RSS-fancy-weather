
import $on from '../utils/setListener';
import constants from './constants';

export default (controller) => {

  const search = async (event) => {
    event.preventDefault();
    if (event.target[0].value.toString().length !== 0) {
      controller.updateData(event.target[0].value);
    }
  };

  (function onSearch() {
    $on(constants.searchForm, 'submit', search);
  }());
};
